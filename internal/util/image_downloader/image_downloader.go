package image_downloader

import (
	"bytes"
	"fmt"
	"github.com/goccy/go-json"
	"github.com/google/uuid"
	"github.com/rs/zerolog"
	"github.com/seanime-app/seanime/internal/util"
	_ "golang.org/x/image/webp"
	"image"
	_ "image/gif"
	_ "image/jpeg"
	_ "image/png"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"slices"
	"sync"
	"time"
)

const (
	RegistryFilename = "registry.json"
)

type (
	ImageDownloader struct {
		downloadDir   string
		registry      Registry
		mu            sync.Mutex
		cancelChannel chan struct{}
		logger        *zerolog.Logger
	}

	Registry struct {
		content      *RegistryContent
		logger       *zerolog.Logger
		downloadDir  string
		registryPath string
	}
	RegistryContent struct {
		UrlToId map[string]string `json:"url_to_id"`
		IdToUrl map[string]string `json:"id_to_url"`
		IdToExt map[string]string `json:"id_to_ext"`
	}
)

func NewImageDownloader(downloadDir string, logger *zerolog.Logger) *ImageDownloader {
	return &ImageDownloader{
		downloadDir: downloadDir,
		logger:      logger,
		registry: Registry{
			logger:       logger,
			registryPath: filepath.Join(downloadDir, RegistryFilename),
			downloadDir:  downloadDir,
			content:      &RegistryContent{},
		},
		cancelChannel: make(chan struct{}),
	}
}

// DownloadImages downloads multiple images concurrently.
func (id *ImageDownloader) DownloadImages(urls []string) (err error) {
	id.cancelChannel = make(chan struct{})

	if err = id.registry.setup(); err != nil {
		return
	}

	batchSize := calculateBatchSize(len(urls)) // Calculate batch size based on number of URLs
	var wg sync.WaitGroup
	semaphore := make(chan struct{}, batchSize) // Semaphore to control concurrency
	for _, url := range urls {
		semaphore <- struct{}{} // Acquire semaphore
		wg.Add(1)
		go func(url string) {
			defer func() {
				<-semaphore // Release semaphore
				wg.Done()
			}()
			select {
			case <-id.cancelChannel:
				id.logger.Warn().Msg("image downloader: Download process canceled")
				return
			default:
				time.Sleep(1 * time.Second)
				id.downloadImage(url)
			}
		}(url)
	}
	wg.Wait()

	if err = id.registry.save(urls); err != nil {
		return
	}

	return
}

// calculateBatchSize calculates the batch size based on the number of URLs.
func calculateBatchSize(numURLs int) int {
	maxBatchSize := 1
	batchSize := numURLs / 10
	if batchSize < 1 {
		return 1
	} else if batchSize > maxBatchSize {
		return maxBatchSize
	}
	return batchSize
}

func (id *ImageDownloader) DeleteDownloads() {
	_ = os.RemoveAll(id.downloadDir)
}

// CancelDownload cancels the download process.
func (id *ImageDownloader) CancelDownload() {
	close(id.cancelChannel)
}

func (id *ImageDownloader) GetImageFilenameByUrl(url string) (filename string, ok bool) {

	if err := id.registry.setup(); err != nil {
		return
	}

	id.mu.Lock()
	defer id.mu.Unlock()

	var imgID string
	imgID, ok = id.registry.content.UrlToId[url]
	if !ok {
		return
	}

	filename = imgID + "." + id.registry.content.IdToExt[imgID]
	return
}

// downloadImage downloads an image from a URL.
func (id *ImageDownloader) downloadImage(url string) {

	defer util.HandlePanicInModuleThen("util/image_downloader/downloadImage", func() {
	})

	// Check if the image has already been downloaded
	id.mu.Lock()
	if _, ok := id.registry.content.IdToUrl[url]; ok {
		id.mu.Unlock()
		id.logger.Info().Msgf("image downloader: Image from URL %s has already been downloaded", url)
		return
	}
	id.mu.Unlock()

	// Download image from URL
	id.logger.Info().Msgf("image downloader: Downloading image from URL: %s", url)

	imgID := uuid.NewString()

	// Download the image
	resp, err := http.Get(url)
	if err != nil {
		id.logger.Error().Err(err).Msgf("image downloader: Failed to download image from URL %s", url)
		return
	}
	defer resp.Body.Close()

	buf, err := io.ReadAll(resp.Body)
	if err != nil {
		id.logger.Error().Err(err).Msgf("image downloader: Failed to read image data from URL %s", url)
		return
	}

	// Get the image format
	_, format, err := image.DecodeConfig(bytes.NewReader(buf))
	if err != nil {
		id.logger.Error().Err(err).Msgf("image downloader: Failed to decode image format from URL %s", url)
		return
	}

	// Create the file
	filePath := filepath.Join(id.downloadDir, imgID+"."+format)
	file, err := os.Create(filePath)
	if err != nil {
		id.logger.Error().Err(err).Msgf("image downloader: Failed to create file for image %s", imgID)
		return
	}
	defer file.Close()

	// Copy the image data to the file
	_, err = io.Copy(file, bytes.NewReader(buf))
	if err != nil {
		fmt.Printf("Failed to write image data to file for image from %s: %s\n", url, err)
		return
	}

	// Update registry
	id.mu.Lock()
	id.registry.addUrl(imgID, url, format)
	id.mu.Unlock()

	return
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

func (r *Registry) setup() (err error) {

	defer util.HandlePanicInModuleThen("util/image_downloader/setup", func() {
		err = fmt.Errorf("image downloader: Failed to setup registry")
	})

	if r.content.IdToUrl != nil && r.content.UrlToId != nil {
		return nil
	}

	r.content.UrlToId = make(map[string]string)
	r.content.IdToUrl = make(map[string]string)
	r.content.IdToExt = make(map[string]string)

	// Check if the registry  exists
	_ = os.MkdirAll(filepath.Dir(r.registryPath), 0700)
	_, err = os.Stat(r.registryPath)
	if os.IsNotExist(err) {
		// Create the registry file
		err = os.WriteFile(r.registryPath, []byte("{}"), 0644)
		if err != nil {
			return err
		}
	}

	// Read the registry file
	file, err := os.Open(r.registryPath)
	if err != nil {
		return err
	}
	defer file.Close()

	// Decode the registry file if there is content
	if file != nil {
		r.logger.Debug().Msg("image downloader: Reading registry content")
		err = json.NewDecoder(file).Decode(&r.content)
		if err != nil {
			return err
		}
	}

	if r.content == nil {
		r.content = &RegistryContent{
			UrlToId: make(map[string]string),
			IdToUrl: make(map[string]string),
			IdToExt: make(map[string]string),
		}
	}

	return nil
}

// save verifies and saves the registry content.
func (r *Registry) save(urls []string) (err error) {

	defer util.HandlePanicInModuleThen("util/image_downloader/save", func() {
		err = fmt.Errorf("image downloader: Failed to save registry content")
	})

	// Verify all images have been downloaded
	allDownloaded := true
	for _, url := range urls {
		if _, ok := r.content.UrlToId[url]; !ok {
			allDownloaded = false
			break
		}
	}

	if !allDownloaded {

		// Clean up downloaded images
		go func() {
			r.logger.Error().Msg("image downloader: Not all images have been downloaded, aborting")
			// Read the directory
			files, err := os.ReadDir(r.downloadDir)
			if err != nil {
				r.logger.Error().Err(err).Msg("image downloader: Failed to abort")
				return
			}
			// Delete all files that have been downloaded (are in the registry)
			for _, file := range files {
				fileNameWithoutExt := file.Name()[:len(file.Name())-len(filepath.Ext(file.Name()))]
				if url, ok := r.content.IdToUrl[fileNameWithoutExt]; ok && slices.Contains(urls, url) {
					err = os.Remove(filepath.Join(r.downloadDir, file.Name()))
					if err != nil {
						r.logger.Error().Err(err).Msgf("image downloader: Failed to delete file %s", file.Name())
					}
				}
			}
		}()
		return fmt.Errorf("image downloader: Not all images have been downloaded, operation aborted")
	}

	data, err := json.Marshal(r.content)
	if err != nil {
		r.logger.Error().Err(err).Msg("image downloader: Failed to marshal registry content")
	}
	// Overwrite the registry file
	err = os.WriteFile(r.registryPath, data, 0644)
	if err != nil {
		r.logger.Error().Err(err).Msg("image downloader: Failed to write registry content")
		return err
	}

	return nil
}

func (r *Registry) addUrl(imgID, url, format string) {
	r.content.UrlToId[url] = imgID
	r.content.IdToUrl[imgID] = url
	r.content.IdToExt[imgID] = format
}
