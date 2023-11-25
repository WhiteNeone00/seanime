(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{36478:function(e,t,r){Promise.resolve().then(r.t.bind(r,72998,23)),Promise.resolve().then(r.bind(r,50261)),Promise.resolve().then(r.t.bind(r,12148,23))},67998:function(e,t,r){"use strict";r.d(t,{DN:function(){return n},SN:function(){return useWebsocketMessageListener},oJ:function(){return o}});var s=r(2265),a=r(77665);let n=(0,s.createContext)(null),o=(0,a.cn)(null);function useWebsocketMessageListener(e){let{type:t,onMessage:r}=e,a=(0,s.useContext)(n);return(0,s.useEffect)(()=>{if(a){let messageHandler=e=>{try{let s=JSON.parse(e.data);s.type&&s.type===t&&r(s.payload)}catch(e){}};return a.addEventListener("message",messageHandler),()=>{a.removeEventListener("message",messageHandler)}}},[a,r]),null}},50261:function(e,t,r){"use strict";r.r(t),r.d(t,{ClientProviders:function(){return ClientProviders}});var s=r(57437),a=r(2265),n=r(54487),o=r(77665),i=r(6435),l=r(23890),c=r(43059),d=r(38038),u=r(86679),p=r(24033),m=r(96061);let x=(0,n.xH)({paper:(0,m.j)(["UI-Paper__paper","overflow-hidden rounded-lg bg-white border border-[--border] bg-[--paper]"])}),h=a.forwardRef((e,t)=>{let{children:r,paperClassName:a,className:o,...i}=e;return(0,s.jsx)("div",{className:(0,n.cn)(x.paper(),a,o),...i,ref:t,children:r})});h.displayName="Paper";let g=(0,n.xH)({card:(0,m.j)(["UI-Paper__card"]),header:(0,m.j)(["UI-Paper__header","p-4"]),footer:(0,m.j)(["UI-Paper__footer","p-4"]),body:(0,m.j)(["UI-Paper__footer","p-4"])}),f=a.forwardRef((e,t)=>{let{children:r,cardClassName:a,headerClassName:o,footerClassName:i,bodyClassName:l,paperClassName:c,className:d,header:u,footer:p,...m}=e;return(0,s.jsxs)(h,{className:(0,n.cn)(c,a,d),children:[u&&(0,s.jsx)("div",{className:(0,n.cn)(g.header(),o),children:u}),(0,s.jsx)("div",{className:(0,n.cn)(g.body(),l),children:r}),p&&(0,s.jsx)("div",{className:(0,n.cn)(g.footer(),i),children:p})]})});f.displayName="Card";var b=r(93054),y=r(97622),j=r(59123),v=r(16691),w=r.n(v),P=r(11305);function LoadingOverlayWithLogo(){return(0,s.jsx)(P.fz,{hideSpinner:!0,children:(0,s.jsx)(w(),{src:"/icons/android-chrome-192x192.png",alt:"Loading...",priority:!0,width:80,height:80,className:"animate-bounce"})})}var N=r(751),_=r(98602),L=r(26345),S=r(63479),k=r(66834),C=r(34813),A=r(82777),E=r(93722),H=r(13461),T=r(13986),U=r(51472),I=r(57638);function GettingStarted(e){let{status:t}=e,r=(0,p.useRouter)(),{getDefaultVlcPath:n,getDefaultQBittorrentPath:o}=(0,_.$g)(),i=(0,l.b9)(N.X),{mutate:c,data:d,isPending:u,isSuccess:m}=(0,U.$U)({endpoint:I.E.SETTINGS,mutationKey:["patch-settings"],method:"patch"});(0,a.useEffect)(()=>{!u&&(null==d?void 0:d.settings)&&(i(d),r.push("/"))},[d,u]),(0,a.useEffect)(()=>{m&&r.push("/")},[m]);let x=(0,a.useMemo)(()=>n(t.os),[t.os]),h=(0,a.useMemo)(()=>o(t.os),[t.os]);return u?(0,s.jsx)(LoadingOverlayWithLogo,{}):d?void 0:(0,s.jsxs)("div",{className:"container max-w-5xl py-10",children:[(0,s.jsx)("div",{className:"mb-4 flex justify-center w-full",children:(0,s.jsx)("img",{src:"/logo.png",alt:"logo",className:"w-24 h-auto"})}),(0,s.jsx)(f,{className:"md:py-2 relative",children:(0,s.jsx)(b.ce,{children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)("h3",{children:"Getting started"}),(0,s.jsx)("em",{className:"text-[--muted]",children:"These settings can be modified later."}),(0,s.jsxs)(L.Fu,{schema:S.R,onSubmit:e=>{c({library:{libraryPath:e.libraryPath},mediaPlayer:{host:e.mediaPlayerHost,defaultPlayer:e.defaultPlayer,vlcPort:e.vlcPort,vlcUsername:e.vlcUsername||"",vlcPassword:e.vlcPassword,vlcPath:e.vlcPath||"",mpcPort:e.mpcPort,mpcPath:e.mpcPath||""},torrent:{qbittorrentPath:e.qbittorrentPath,qbittorrentHost:e.qbittorrentHost,qbittorrentPort:e.qbittorrentPort,qbittorrentPassword:e.qbittorrentPassword,qbittorrentUsername:e.qbittorrentUsername}})},defaultValues:{mediaPlayerHost:"127.0.0.1",vlcPort:8080,mpcPort:13579,vlcPath:x,qbittorrentPath:h,qbittorrentHost:"127.0.0.1",qbittorrentPort:8081,mpcPath:"C:/Program Files/MPC-HC/mpc-hc64.exe"},stackClassName:"space-y-4",children:[(0,s.jsx)(L.gN.DirectorySelector,{name:"libraryPath",label:"Library folder",leftIcon:(0,s.jsx)(k.T,{}),shouldExist:!0}),(0,s.jsx)(C.iz,{}),(0,s.jsx)(L.gN.Select,{name:"defaultPlayer",label:"Default player",leftIcon:(0,s.jsx)(A.E,{}),options:[{label:"VLC",value:"vlc"},{label:"MPC-HC (Windows only)",value:"mpc-hc"}],help:"Player that will be used to open files and track your progress automatically."}),(0,s.jsx)(L.gN.Text,{name:"mediaPlayerHost",label:"Host (VLC/MPC-HC)"}),(0,s.jsxs)("h3",{className:"flex gap-2 items-center",children:[(0,s.jsx)(E.p,{})," VLC"]}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)(L.gN.Text,{name:"vlcUsername",label:"Username"}),(0,s.jsx)(L.gN.Text,{name:"vlcPassword",label:"Password"}),(0,s.jsx)(L.gN.Number,{name:"vlcPort",label:"Port",discrete:!0})]}),(0,s.jsx)(L.gN.Text,{name:"vlcPath",label:"Executable"}),(0,s.jsxs)("h3",{className:"flex gap-2 items-center",children:[(0,s.jsx)(H.n,{})," MPC-HC"]}),(0,s.jsx)("div",{className:"flex gap-4",children:(0,s.jsx)(L.gN.Number,{name:"mpcPort",label:"Port",discrete:!0})}),(0,s.jsx)(L.gN.Text,{name:"mpcPath",label:"Executable"}),(0,s.jsxs)("h3",{className:"flex gap-2 items-center",children:[(0,s.jsx)(T.a,{})," qBittorrent"]}),(0,s.jsx)(L.gN.Text,{name:"qbittorrentHost",label:"Host"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)(L.gN.Text,{name:"qbittorrentUsername",label:"Username"}),(0,s.jsx)(L.gN.Text,{name:"qbittorrentPassword",label:"Password"}),(0,s.jsx)(L.gN.Number,{name:"qbittorrentPort",label:"Port",discrete:!0})]}),(0,s.jsx)(L.gN.Text,{name:"qbittorrentPath",label:"Executable"}),(0,s.jsx)(L.gN.Submit,{role:"submit",showLoadingOverlayOnSuccess:!0,isLoading:u})]})]})})}),(0,s.jsx)("p",{className:"text-[--muted] mt-5 text-center",children:"Made by 5rahim"})]})}var O=r(59770),q=r.n(O);function AuthWrapper(e){let{children:t}=e,r=(0,p.usePathname)(),n=(0,p.useRouter)(),[o,i]=(0,l.KO)(N.X),{data:c,isLoading:d}=(0,U.tZ)({endpoint:I.E.STATUS,queryKey:["status"]});return((0,a.useEffect)(()=>{if(!d){if(console.log(c),(null==c?void 0:c.settings)||n.push("/getting-started"),null==c?void 0:c.user){var e,t;q().set("anilistToken",null!==(t=null==c?void 0:null===(e=c.user)||void 0===e?void 0:e.token)&&void 0!==t?t:"",{expires:2592e3})}else q().remove("anilistToken");i(c)}},[c]),r.startsWith("/auth/callback"))?t:d||!o?(0,s.jsx)(LoadingOverlayWithLogo,{}):(null==o?void 0:o.settings)?(null==o?void 0:o.user)?t:(0,s.jsx)("div",{className:"container max-w-3xl py-10",children:(0,s.jsx)(f,{className:"md:py-10",children:(0,s.jsx)(b.ce,{children:(0,s.jsxs)("div",{className:"text-center space-y-4",children:[(0,s.jsx)("div",{className:"mb-4 flex justify-center w-full",children:(0,s.jsx)("img",{src:"/logo.png",alt:"logo",className:"w-24 h-auto"})}),(0,s.jsx)("h3",{children:"Welcome!"}),(0,s.jsx)(y.zx,{onClick:()=>{window.open(j.kd,"_self")},leftIcon:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",role:"img",children:(0,s.jsx)("path",{d:"M6.361 2.943 0 21.056h4.942l1.077-3.133H11.4l1.052 3.133H22.9c.71 0 1.1-.392 1.1-1.101V17.53c0-.71-.39-1.101-1.1-1.101h-6.483V4.045c0-.71-.392-1.102-1.101-1.102h-2.422c-.71 0-1.101.392-1.101 1.102v1.064l-.758-2.166zm2.324 5.948 1.688 5.018H7.144z"})}),intent:"primary",size:"xl",children:"Log in with AniList"})]})})})}):(0,s.jsx)(GettingStarted,{status:o})}var z=r(67998),W=r(95637);function WebsocketProvider(e){let{children:t}=e,[r,n]=(0,l.KO)(z.oJ),[o,i]=(0,a.useState)(!1);return(0,W.Z)(()=>{function connectWebSocket(){let e=new WebSocket("ws://127.0.0.1:43210/events");return e.addEventListener("open",()=>{console.log("WebSocket connection opened"),i(!0)}),e.addEventListener("close",()=>{console.log("WebSocket connection closed"),i(!1),setTimeout(connectWebSocket,3e3)}),n(e),e}return r&&r.readyState!==WebSocket.CLOSED||connectWebSocket(),()=>{r&&(r.close(),i(!1))}}),(0,s.jsxs)(z.DN.Provider,{value:r,children:[!o&&(0,s.jsxs)("div",{className:"fixed right-4 bottom-4 bg-gray-800 border border-[--border] text-gray-100 py-3 px-5 font-semibold rounded-md z-[100] flex gap-2 items-center",children:[(0,s.jsx)(P.$j,{className:"w-5 h-5"}),"Websocket connection"]}),t]})}let R=new c.S({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:0}}}),ClientProviders=e=>{let{children:t}=e,[r]=a.useState((0,o.MT)());return(0,s.jsx)(i.f,{attribute:"class",defaultTheme:"dark",forcedTheme:"dark",children:(0,s.jsx)(l.zt,{store:r,children:(0,s.jsx)(d.aH,{client:R,children:(0,s.jsxs)(n.JP,{config:{locale:"en",countryLocale:"en-US",country:"US"},children:[(0,s.jsx)(WebsocketProvider,{children:(0,s.jsx)(AuthWrapper,{children:t})}),(0,s.jsx)(u.VW,{})]})})})})}},93054:function(e,t,r){"use strict";r.d(t,{LN:function(){return j},RD:function(){return f},ce:function(){return y},S8:function(){return _},FV:function(){return AppSidebarProvider},AO:function(){return L}});var s=r(57437),a=r(2265),n=r(54487),o=r(96061);let i=(0,n.xH)({root:(0,o.j)(["UI-AppLayout__root","flex w-full min-h-screen group","group-[.with-sidebar]:group-[.sidebar-slim]:md:pl-20","group-[.with-sidebar]:group-[.sidebar-sm]:md:pl-48","group-[.with-sidebar]:group-[.sidebar-md]:md:pl-64","group-[.with-sidebar]:group-[.sidebar-lg]:md:pl-[20rem]","group-[.with-sidebar]:group-[.sidebar-xl]:md:pl-[25rem]"],{variants:{withSidebar:{true:"flex-row with-sidebar",false:"flex-col"},sidebarSize:{slim:"sidebar-slim",sm:"sidebar-sm",md:"sidebar-md",lg:"sidebar-lg",xl:"sidebar-xl"}},defaultVariants:{withSidebar:!1,sidebarSize:"md"}})}),l=(0,n.xH)({root:(0,o.j)(["UI-AppLayoutHeader__root","block w-full"])}),c=(0,n.xH)({root:(0,o.j)(["UI-AppLayoutSidebar__root","hidden md:fixed md:inset-y-0 md:flex md:flex-col grow-0 shrink-0 basis-0 z-[10]","group-[.sidebar-slim]:md:w-20","group-[.sidebar-sm]:md:w-48","group-[.sidebar-md]:md:w-64","group-[.sidebar-lg]:md:w-[20rem]","group-[.sidebar-xl]:md:w-[25rem]"])}),d=(0,n.xH)({root:(0,o.j)(["UI-AppLayoutContent__root"])}),u=(0,n.xH)({root:(0,o.j)(["UI-AppLayoutFooter__root"])}),p=(0,n.xH)({root:(0,o.j)(["UI-AppLayoutStack__root"],{variants:{spacing:{sm:"space-y-2",md:"space-y-4",lg:"space-y-8",xl:"space-y-10"}},defaultVariants:{spacing:"md"}})}),m=(0,n.xH)({root:(0,o.j)(["UI-AppLayoutGrid__root","block"],{variants:{breakBelow:{sm:"sm:grid sm:space-y-0",md:"md:grid md:space-y-0",lg:"lg:grid lg:space-y-0",xl:"xl:grid xl:space-y-0"},spacing:{sm:"space-y-2 gap-2",md:"space-y-4 gap-4",lg:"space-y-8 gap-8",xl:"space-y-10 gap-10"},cols:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6"}},defaultVariants:{breakBelow:"xl",spacing:"md",cols:3}})}),_AppLayout=e=>{let{children:t,rootClassName:r,className:a,ref:o,withSidebar:l,sidebarSize:c,...d}=e;return(0,s.jsx)("div",{className:(0,n.cn)(i.root({withSidebar:l,sidebarSize:c}),r,a),...d,ref:o,children:t})};_AppLayout.displayName="AppLayout";let x=a.forwardRef((e,t)=>{let{children:r,rootClassName:a,className:o,...i}=e;return(0,s.jsx)("header",{className:(0,n.cn)(l.root(),a,o),...i,ref:t,children:r})});x.displayName="AppLayoutHeader";let h=a.forwardRef((e,t)=>{let{children:r,rootClassName:a,className:o,...i}=e;return(0,s.jsx)("aside",{className:(0,n.cn)(c.root(),a,o),...i,ref:t,children:r})});h.displayName="AppLayoutSidebar";let g=a.forwardRef((e,t)=>{let{children:r,rootClassName:a,className:o,...i}=e;return(0,s.jsx)("main",{className:(0,n.cn)(d.root(),a,o),...i,ref:t,children:r})});g.displayName="AppLayoutContent";let f=a.forwardRef((e,t)=>{let{children:r,rootClassName:a,className:o,breakBelow:i,cols:l,spacing:c,...d}=e;return(0,s.jsx)("section",{className:(0,n.cn)(m.root({breakBelow:i,cols:l,spacing:c}),a,o),...d,ref:t,children:r})});f.displayName="AppLayoutGrid";let b=a.forwardRef((e,t)=>{let{children:r,rootClassName:a,className:o,...i}=e;return(0,s.jsx)("footer",{className:(0,n.cn)(u.root(),a,o),...i,ref:t,children:r})});b.displayName="AppLayoutFooter";let y=a.forwardRef((e,t)=>{let{children:r,rootClassName:a,className:o,spacing:i,...l}=e;return(0,s.jsx)("div",{className:(0,n.cn)(p.root({spacing:i}),a,o),...l,ref:t,children:r})});y.displayName="AppLayoutStack",_AppLayout.Header=x,_AppLayout.Sidebar=h,_AppLayout.Content=g,_AppLayout.Footer=b,_AppLayout.Grid=f,_AppLayout.Stack=y;let j=(0,n.Fm)(_AppLayout);j.displayName="AppLayout";var v=r(33538);let w=a.createContext({open:!1,setOpen:()=>{}}),useAppSidebarContext=()=>a.useContext(w),P=(0,n.xH)({sidebar:(0,o.j)(["UI-AppSidebar__sidebar","flex flex-grow flex-col"])}),N=(0,n.xH)({trigger:(0,o.j)(["UI-AppSidebarTrigger__trigger","block md:hidden","items-center justify-center rounded-[--radius] p-2 text-[--muted] hover:bg-[--highlight] hover:text-[--text-color]","focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[--ring]"])}),_=a.forwardRef((e,t)=>{let{children:r,sidebarClassName:a,className:o,...i}=e,l=useAppSidebarContext();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:(0,n.cn)(P.sidebar(),a),...i,ref:t,children:(0,s.jsx)("div",{className:(0,n.cn)(o),children:r})}),(0,s.jsx)(v.dy,{isOpen:l.open,onClose:()=>l.setOpen(!1),placement:"left",isClosable:!0,className:"md:hidden",containerClassName:"w-[85%]",bodyClassName:(0,n.cn)("p-0 md:p-0",o),headerClassName:"absolute p-2 sm:p-2 md:p-2 lg:p-2 right-0",closeButtonIntent:"white-outline",children:r})]})});_.displayName="AppSidebar";let L=a.forwardRef((e,t)=>{let{children:r,triggerClassName:a,className:o,...i}=e,l=useAppSidebarContext();return(0,s.jsxs)("button",{className:(0,n.cn)(N.trigger(),a,o),onClick:()=>l.setOpen(e=>!e),...i,ref:t,children:[(0,s.jsx)("span",{className:"sr-only",children:"Open main menu"}),l.open?(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"block h-6 w-6",children:[(0,s.jsx)("line",{x1:"18",x2:"6",y1:"6",y2:"18"}),(0,s.jsx)("line",{x1:"6",x2:"18",y1:"6",y2:"18"})]}):(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"block h-6 w-6",children:[(0,s.jsx)("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),(0,s.jsx)("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),(0,s.jsx)("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})]})});L.displayName="AppSidebarTrigger";let AppSidebarProvider=e=>{let{children:t,open:r}=e,[n,o]=(0,a.useState)(null!=r&&r);return(0,a.useEffect)(()=>{void 0!==r&&o(r)},[r]),(0,s.jsx)(w.Provider,{value:{open:n,setOpen:o},children:t})}},86679:function(e,t,r){"use strict";r.d(t,{VW:function(){return ToastProvider},pm:function(){return useToast}});var s=r(57437),a=r(9805),n=r(2265),o=r(5925),i=r(54487),l=r(97622),c=r(96061),d=r(11305);let u=(0,i.xH)({toast:(0,c.j)(["UI-Toast__toast","relative transform py-2 px-5 flex rounded-lg shadow-md","data-[type=error]:bg-red-500 data-[type=error]:text-white","data-[type=success]:bg-green-500 data-[type=success]:text-white","data-[type=loading]:bg-gray-50 dark:data-[type=loading]:bg-gray-800 data-[type=error]:text-white"]),content:(0,c.j)(["UI-Toast__content","h-full flex items-center"]),icon:(0,c.j)(["UI-Toast__icon","w-5 h-5"]),closeButton:(0,c.j)(["UI-Toast__closeButton","absolute top-1 right-1"])}),p=n.forwardRef((e,t)=>{let{t:r,toastClassName:n,closeButtonClassName:c,contentClassName:p,iconClassName:m}=e;return(0,s.jsxs)(a.u,{appear:!0,show:r.visible,className:(0,i.cn)(u.toast(),n),"data-type":r.type,enter:"transition-all duration-150",enterFrom:"opacity-0 scale-50",enterTo:"opacity-100 scale-100",leave:"transition-all duration-150",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-75",children:[(0,s.jsxs)("div",{className:(0,i.cn)(u.content(),p),children:["loading"!==r.type&&(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:(0,i.cn)(u.icon(),m),children:["error"===r.type&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"15",x2:"9",y1:"9",y2:"15"}),(0,s.jsx)("line",{x1:"9",x2:"15",y1:"9",y2:"15"})]}),"success"===r.type&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}),(0,s.jsx)("path",{d:"m9 12 2 2 4-4"})]})]}),"loading"===r.type&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.$j,{className:(0,i.cn)(u.icon(),m)})})]}),(0,s.jsx)("p",{className:"py-1 px-2 pr-6",children:(0,o.GK)(r.message,r)}),(0,s.jsx)(l.PZ,{className:(0,i.cn)(u.closeButton(),c),size:"sm",intent:"loading"!==r.type?"white-basic":"gray-basic",onClick:()=>o.ZP.dismiss(r.id)})]})}),ToastProvider=()=>(0,s.jsx)(o.x7,{children:e=>(0,s.jsx)(p,{t:e})}),useToast=()=>({success:e=>{o.ZP.success(null!=e?e:"")},error:e=>{o.ZP.error(null!=e?e:"")}})},59123:function(e,t,r){"use strict";r.d(t,{kd:function(){return s}});let s="https://anilist.co/api/v2/oauth/authorize?client_id=15168&response_type=token"},98602:function(e,t,r){"use strict";r.d(t,{$g:function(){return useDefaultSettingsPaths},VP:function(){return useOpenDefaultMediaPlayer},cg:function(){return useOpenInExplorer},tB:function(){return useOpenMediaEntryInExplorer}});var s=r(51472),a=r(57638);function useDefaultSettingsPaths(){return{getDefaultVlcPath:e=>{switch(e){case"windows":default:return"C:\\Program Files\\VideoLAN\\VLC\\vlc.exe";case"linux":return"/usr/bin/vlc";case"darwin":return"/Applications/VLC.app/Contents/MacOS/VLC"}},getDefaultQBittorrentPath:e=>{switch(e){case"windows":default:return"C:/Program Files/qBittorrent/qbittorrent.exe";case"linux":return"/usr/bin/qbittorrent";case"darwin":return"/Applications/Client.app/Contents/MacOS/qBittorrent"}}}}function useOpenDefaultMediaPlayer(){let{mutate:e}=(0,s.$U)({endpoint:a.E.START_MEDIA_PLAYER,mutationKey:["open-default-media-player"]});return{startDefaultMediaPlayer:()=>e()}}function useOpenMediaEntryInExplorer(){let{mutate:e}=(0,s.$U)({endpoint:a.E.OPEN_MEDIA_ENTRY_IN_EXPLORER,mutationKey:["open-media-entry-in-explorer"]});return{openEntryInExplorer:t=>e({mediaId:t})}}function useOpenInExplorer(){let{mutate:e}=(0,s.$U)({endpoint:a.E.OPEN_IN_EXPLORER,mutationKey:["open-in-explorer"]});return{openInExplorer:t=>e({path:t})}}},63479:function(e,t,r){"use strict";r.d(t,{R:function(){return a}});var s=r(74578);let a=s.z.object({libraryPath:s.z.string().min(1),defaultPlayer:s.z.string(),mediaPlayerHost:s.z.string(),vlcUsername:s.z.string().optional().default(""),vlcPassword:s.z.string().optional().default(""),vlcPort:s.z.number(),vlcPath:s.z.string().optional().default(""),mpcPort:s.z.number(),mpcPath:s.z.string().optional().default(""),qbittorrentPath:s.z.string().optional().default(""),qbittorrentHost:s.z.string(),qbittorrentPort:s.z.number(),qbittorrentUsername:s.z.string().optional().default(""),qbittorrentPassword:s.z.string().optional().default("")})},12148:function(){}},function(e){e.O(0,[492,890,999,685,702,17,898,322,912,430,345,971,472,744],function(){return e(e.s=36478)}),_N_E=e.O()}]);