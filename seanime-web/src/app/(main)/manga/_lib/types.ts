import { BaseMangaFragment } from "@/lib/anilist/gql/graphql"

export const manga_providers_options = [
    { value: "mangasee", label: "MangaSee" },
    { value: "comick", label: "ComicK" },
]

export type MangaCollection = {
    lists: MangaCollectionList[]
}

export type MangaCollectionList = {
    type: string
    status: string
    entries: MangaCollectionEntry[]
}

export type MangaCollectionEntry = {
    media: BaseMangaFragment
    mediaId: number
    listData?: MangaEntryListData
}

export type MangaEntry = {
    mediaId: number
    media: BaseMangaFragment
    listData?: MangaEntryListData
}

export type MangaEntryListData = {
    progress?: number
    score?: number
    status?: string
    startedAt?: string
    completedAt?: string
}

export type MangaChapterContainer = {
    mediaId: number
    provider: string
    chapters?: MangaChapterDetails[]
}

export type MangaPageContainer = {
    mediaId: number
    provider: string
    chapterId: string
    pages?: MangaChapterPage[]
}

export type MangaChapterDetails = {
    provider: string
    id: string
    url: string
    title: string
    chapter: string
    index: number
    rating?: number
    updatedAt?: string
}

export type MangaChapterPage = {
    provider: string
    url: string
    index: number
}
