if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>a(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/a8WNw94KfhamVtkGswYpk/_buildManifest.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/a8WNw94KfhamVtkGswYpk/_middlewareManifest.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/a8WNw94KfhamVtkGswYpk/_ssgManifest.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/1bfc9850-f17c14548e705e15.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/252f366e-a0cd1e1feeb40de0.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/396-6c20b5a7bce44b1b.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/d0447323-86aab64d08591489.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/d64684d8-ce7e575b80fbf904.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/main-227e205eee84911a.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/pages/_app-19425516165713a1.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/pages/index-e2e13ac8bdc37143.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/_next/static/css/28274f0936358bea.css",revision:"a8WNw94KfhamVtkGswYpk"},{url:"/favicon.ico",revision:"720352e4ce2565b9e851c176c87e9d74"},{url:"/fonts/Hacked.ttf",revision:"2f48abc8c45de9add264c5be432e878e"},{url:"/fonts/Montserrat-Bold.ttf",revision:"ade91f473255991f410f61857696434b"},{url:"/fonts/Montserrat-Medium.ttf",revision:"c8b6e083af3f94009801989c3739425e"},{url:"/icon-192x192.png",revision:"60bb81077280a9cb05b5a65918375e17"},{url:"/icon-256x256.png",revision:"90a2b8b99f4b0bd064eb55f7925f9557"},{url:"/icon-384x384.png",revision:"ac972e2b1278e6a349381804bd39f56c"},{url:"/icon-512x512.png",revision:"b6ed2f8a557d1664aaa6add07675afcf"},{url:"/images/Dagdan.jpg",revision:"0d1430fc1330ab5dc706d4a2b9d49a18"},{url:"/images/Languages/en.png",revision:"70b76974ac1648290a37acb9373934c0"},{url:"/images/Languages/ru.png",revision:"c3a6df0669d86df58ef57d34333682f0"},{url:"/images/Languages/tm.png",revision:"e26cb3532097a27965b41f03336254ce"},{url:"/images/Languages/tr.png",revision:"5dc524303f05bcc59facd66b633df30a"},{url:"/images/Logos/Adobe XD.png",revision:"2cb3cf9b12a72d1407b14fe5cfdb6c34"},{url:"/images/Logos/CSS3.png",revision:"d5d7a7544152bf71f6ec9d8180c40c0d"},{url:"/images/Logos/Github.png",revision:"a47aab54b4623c39ae2ab2ab147e6b34"},{url:"/images/Logos/HTML5.png",revision:"4e8d606631f6a3981cf28ba71614d677"},{url:"/images/Logos/Illustrator.png",revision:"d27539f7b3fd8588566fe26aa87ea0e2"},{url:"/images/Logos/JavaScript.png",revision:"bb6c6c29265d4cce707eb4a2706fc315"},{url:"/images/Logos/Next.js.png",revision:"02dfdac16100b40337b156a95ab4b1fe"},{url:"/images/Logos/Photoshop.png",revision:"cef186c1796aa35793bd12026e5b7034"},{url:"/images/Logos/REST API.png",revision:"1e8e9960ec56767bf08b5195f48d2505"},{url:"/images/Logos/React native.png",revision:"30b7ca95d2afe2859e5371eb53f10e0e"},{url:"/images/Logos/React.png",revision:"0c1d78c12521697d9c323e434060fcc2"},{url:"/images/Logos/Reactold.png",revision:"a7212ed4c02ca28a98c310a947c21998"},{url:"/images/Logos/Redux.png",revision:"4c565df23311a346bcd3b77a212f010d"},{url:"/images/Logos/Reduxold.png",revision:"afb369f7d800f4ec79b11e00167b98bf"},{url:"/images/Logos/TypeScript.png",revision:"7a1c6311112ad09470386a82986e42c2"},{url:"/images/Logos/graphql.svg",revision:"6270a2d4757a839d4653c02f3db32e2f"},{url:"/images/Oguzly.svg",revision:"739227c716fe0632ed54dfb692350690"},{url:"/manifest.json",revision:"7da6c0a16efc907dc1b1943810334a57"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));