(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],{105:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(30),s=c.n(r),i=(c(46),c(4)),o=function(){return Object(i.jsx)("div",{className:"flex justify-center items-center",style:{minHeight:"100vh"},children:Object(i.jsx)("a",{className:" no-underline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",href:"https://accounts.spotify.com/authorize?client_id=a55eecdff1ff4bf28749ee4977f2d2a3&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",children:"Login With Spotify"})})},u=c(6),l=c(7),f=c.n(l);var d=c(107),h=c(31),j=c.n(h),b=function(e){var t=e.track,c=e.chooseTrack;return Object(i.jsxs)("div",{className:"flex m-2 items-center cursor-pointer",onClick:function(){c(t)},children:[Object(i.jsx)("img",{src:t.albumUrl,alt:"artist",style:{height:"64px",width:"64px"}}),Object(i.jsxs)("div",{className:"ml-3",children:[Object(i.jsx)("div",{children:t.title}),Object(i.jsx)("div",{className:"text-muted",children:t.artist})]})]})},O=c(40),m=function(e){var t=e.accessToken,c=e.trackUri,a=Object(n.useState)(!1),r=Object(u.a)(a,2),s=r[0],o=r[1];return Object(n.useEffect)((function(){return o(!0)}),[c]),t?Object(i.jsx)(O.a,{token:t,showSaveIcon:!0,callback:function(e){e.isPlaying||o(!1)},play:s,uris:c?[c]:[]}):null},p=new j.a({clientId:"a55eecdff1ff4bf28749ee4977f2d2a3"}),x=function(e){var t=function(e){var t=Object(n.useState)(),c=Object(u.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)(),h=Object(u.a)(d,2),j=h[0],b=h[1];return Object(n.useEffect)((function(){f.a.post("http://localhost:3001/login",{code:e}).then((function(e){r(e.data.accessToken),b(e.data.expiresIn)})).catch((function(){window.location="/"}))}),[e]),Object(n.useEffect)((function(){if(o&&j){var e=setInterval((function(){f.a.post("http://localhost:3001/refresh",{refreshToken:o}).then((function(e){r(e.data.accessToken),l(e.data.refreshToken),b(e.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){window.location="/"}))}),1e3*(j-60));return function(){return clearInterval(e)}}}),[o,j]),a}(e.code),c=Object(n.useState)(""),a=Object(u.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),h=l[0],j=l[1],O=Object(n.useState)(),x=Object(u.a)(O,2),v=x[0],y=x[1],k=Object(n.useState)(""),g=Object(u.a)(k,2),w=g[0],S=g[1];function T(e){y(e),s(""),S("")}return Object(n.useEffect)((function(){v&&f.a.get("http://localhost:3001/lyrics",{params:{track:v.title,artist:v.artist}}).then((function(e){S(e.data.lyrics)}))}),[v]),Object(n.useEffect)((function(){t&&p.setAccessToken(t)}),[t]),Object(n.useEffect)((function(){if(!r)return j([]);if(t){var e=!1;return p.searchTracks(r).then((function(t){e||j(t.body.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))})),function(){return e=!0}}}),[r,t]),Object(i.jsxs)("div",{className:" container mx-auto flex flex-col py-2",style:{height:"100vh"},children:[Object(i.jsx)(d.a.Control,{type:"search",placeholder:"Search Songs/ Artists",value:r,onChange:function(e){return s(e.target.value)}}),Object(i.jsxs)("div",{className:"flex-grow my-2 overflow-y-auto",children:[h.map((function(e){return Object(i.jsx)(b,{track:e,chooseTrack:T},e.uri)})),0===h.length&&Object(i.jsx)("div",{className:"text-center",style:{whiteSpace:"pre"},children:w})]}),Object(i.jsx)("div",{children:Object(i.jsx)(m,{accessToken:t,trackUri:null===v||void 0===v?void 0:v.uri})})]})},v=(c(104),new URLSearchParams(window.location.search).get("code"));var y=function(){return v?Object(i.jsx)(x,{code:v}):Object(i.jsx)(o,{})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))},46:function(e,t,c){},83:function(e,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.279d5c5a.chunk.js.map