if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const a={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return a;default:return e(r)}})).then(e=>{const r=n(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/app.css",revision:"c8db57e13e01a3d308dd97de729ccd61"},{url:"/images/144.png",revision:"81c67e169754ca3f35e1e1d6d38e969e"},{url:"/images/196.png",revision:"bbb68bdcb73a5408957ca750e79c0518"},{url:"/images/512.png",revision:"0332e83c086318519db753dae86a2bae"},{url:"/images/64.png",revision:"dcfe9b884def7ee108085c9ef9187e1a"},{url:"/images/manifest.json",revision:"e3739563f557652cb1806962fefcbbb0"},{url:"/index.html",revision:"05476a46f56efa85ffd77e7578d00ae5"},{url:"/js/@visxVendor.js",revision:"aa5816bf30b47739c0119f55e5af5081"},{url:"/js/app.js",revision:"77b13172e6aa8b28d9ac0cff9706d27f"},{url:"/js/app.js.LICENSE.txt",revision:"d46b654c301e938b96c06acb59c1a67f"},{url:"/js/reactVendor.js",revision:"be9866e1febd47cbaa7f1553cca3287c"},{url:"/js/reactVendor.js.LICENSE.txt",revision:"b8bfa227b2637d417a788255e8f5194d"},{url:"/js/runtime~app.js",revision:"e8c9a83e981598531ba90085d1a2a75d"},{url:"/manifest.json",revision:"e3739563f557652cb1806962fefcbbb0"}],{})}));
