if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const d={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return d;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-1429bfa7"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"life/cd1d7705.html",revision:"f7d24f27bec18afb71f9cf3a2dfe283d"},{url:"technologies/2edcaad5.html",revision:"e7408288eb6d4bf8e8d954f0e769df8d"},{url:"films-and-televisions/a9296a55.html",revision:"ec4e830b8e573c3954c538f12b065166"},{url:"life/12af4e31.html",revision:"d5dbc61310d478d137f88f031406a011"},{url:"games/91c9abe0.html",revision:"5310b3eac9d27d5e1a822f3717142a56"},{url:"games/b05d0e3b.html",revision:"34d5d44f8ceedba2f62f200a09a2f1e6"},{url:"life/dce223ef.html",revision:"a148de1b67cbd891d6508a6a492fefde"},{url:"films-and-televisions/3667c594.html",revision:"797e8fa9fbd8542ddad392beebbf8ab8"},{url:"films-and-televisions/3f1c96e0.html",revision:"373bf471aa7f0e0be408346f06b7de1e"},{url:"life/df8b9740.html",revision:"d13965c9722f93939984e264e6cadcfb"},{url:"about/index.html",revision:"400865da22e79806342fdf2ed7d3bac9"},{url:"categories/index.html",revision:"b1a41874d86196ef1074d91ed8850b11"},{url:"jottings/index.html",revision:"55b19a639bce3aa000dfdc2c06d211df"},{url:"friends/index.html",revision:"b1a41874d86196ef1074d91ed8850b11"},{url:"upg/index.html",revision:"479c3ab8edbb2183b1f7706482a0b188"},{url:"tags/index.html",revision:"b1a41874d86196ef1074d91ed8850b11"},{url:"sweet-memories/index.html",revision:"849d5350563bf9541c282e1341fb9583"}],{}),e.registerRoute("/",new e.NetworkFirst({cacheName:"index",plugins:[]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
