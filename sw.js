if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>i(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutC1-DdK-oNcY.css",revision:null},{url:"assets/AboutC1-kNC6diQX.js",revision:null},{url:"assets/AboutC2-CcrnUrCQ.css",revision:null},{url:"assets/AboutC2-f3lG6LdH.js",revision:null},{url:"assets/axios-BimPEqV4.js",revision:null},{url:"assets/BuildCircle-C-GCE_iR.js",revision:null},{url:"assets/BuildCircle-hs_KSE10.css",revision:null},{url:"assets/ContactC1-Bd97iXIB.css",revision:null},{url:"assets/ContactC1-c-DyNRnk.js",revision:null},{url:"assets/Footer-D-EJ5L5V.js",revision:null},{url:"assets/Footer-DiSHuBxe.css",revision:null},{url:"assets/FooterAnimation-Dep4k2XD.css",revision:null},{url:"assets/FooterAnimation-k2Uv7X3m.js",revision:null},{url:"assets/Home-BOWMAxhR.js",revision:null},{url:"assets/Home-Dcw8lsr0.css",revision:null},{url:"assets/index-BufXgnyn.css",revision:null},{url:"assets/index-Dy3xN0OI.js",revision:null},{url:"assets/index-Pk-TbKeB.js",revision:null},{url:"assets/mrbr-DYvpx4Q2.js",revision:null},{url:"assets/ReactToastify-CIEnUMSm.js",revision:null},{url:"assets/ReactToastify-CYivYX3d.css",revision:null},{url:"assets/Services-CNek3igy.js",revision:null},{url:"assets/Services-DfYkLm9r.css",revision:null},{url:"assets/Talk-DZlWLEqj.js",revision:null},{url:"assets/Talk-RT_ALKdj.css",revision:null},{url:"assets/UserMessage-D4aIGJ7u.js",revision:null},{url:"assets/UserMessage-XnLkaPDm.css",revision:null},{url:"assets/VideoCapture-BN_67PGZ.js",revision:null},{url:"index.html",revision:"4853647911a08c9cd2fd527a4aab908a"},{url:"registerSW.js",revision:"fcb81e18d7d808ccbf851ab8d429c17d"},{url:"manifest.webmanifest",revision:"15c5d2b851bee5d13448ca3ed0e13865"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
