if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutC1-Bow9vZl7.js",revision:null},{url:"assets/AboutC1-Bwt5JdBC.css",revision:null},{url:"assets/AboutC2-CHrgGQ4_.css",revision:null},{url:"assets/AboutC2-DOqYBQSJ.js",revision:null},{url:"assets/axios-BimPEqV4.js",revision:null},{url:"assets/BuildCircle-CqkGSx43.js",revision:null},{url:"assets/BuildCircle-hs_KSE10.css",revision:null},{url:"assets/ContactC1-Bd97iXIB.css",revision:null},{url:"assets/ContactC1-CfNtx5bF.js",revision:null},{url:"assets/Footer-DiSHuBxe.css",revision:null},{url:"assets/Footer-DKY8G2Yx.js",revision:null},{url:"assets/FooterAnimation-Ba08bXsj.js",revision:null},{url:"assets/FooterAnimation-Dep4k2XD.css",revision:null},{url:"assets/Home-Dcw8lsr0.css",revision:null},{url:"assets/Home-qJcIBV6a.js",revision:null},{url:"assets/index-BC9o9xFG.css",revision:null},{url:"assets/index-DIS_fXTH.js",revision:null},{url:"assets/index-Dtv9PeF2.js",revision:null},{url:"assets/mrbr-DYvpx4Q2.js",revision:null},{url:"assets/ReactToastify-B1uDEPLD.js",revision:null},{url:"assets/ReactToastify-CYivYX3d.css",revision:null},{url:"assets/Services-DfYkLm9r.css",revision:null},{url:"assets/Services-ZRRE-d7d.js",revision:null},{url:"assets/Talk-Ca6FyGSc.js",revision:null},{url:"assets/Talk-RT_ALKdj.css",revision:null},{url:"assets/UserMessage-BFydf8ZO.js",revision:null},{url:"assets/UserMessage-CT-miRap.css",revision:null},{url:"assets/VideoCapture-qIgPNkTq.js",revision:null},{url:"index.html",revision:"ccd819101c3b55d0e6c11486e24dc897"},{url:"registerSW.js",revision:"fcb81e18d7d808ccbf851ab8d429c17d"},{url:"manifest.webmanifest",revision:"15c5d2b851bee5d13448ca3ed0e13865"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
