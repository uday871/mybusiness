import{r as o,j as s}from"./index-CHWXRoCr.js";import{w as c,A as m}from"./AboutC2-qY8EIlgu.js";import d from"./FooterAnimation-EfvrNEqS.js";import"./ReactToastify-DVSXQx8w.js";const u="/mybusiness/assets/mrstudio-DzQ7Pxru.mp4",r=["#FF3CAC","#784BA0","#2B86C5","#F8FF00","#EE82EE","#00FFFF","#FF4500","#FF1493"],p=()=>r[Math.floor(Math.random()*r.length)],N=()=>{const a="GAURISHANKAR",[i,n]=o.useState([]);o.useEffect(()=>{const e=setInterval(()=>{const t=a.split("").map(()=>p());n(t)},2e3);return()=>clearInterval(e)},[]);const l=a.split("").map((e,t)=>s.jsx("span",{className:"colored-letter",style:{WebkitBackgroundClip:"text",color:"transparent",WebkitTextStroke:`1px ${i[t]||"white"}`,animation:"glow 2s infinite alternate, slideIn 0.6s ease-in-out forwards",animationDelay:`${t*.1}s`,opacity:0},children:e},t));return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"about-sectionn",children:[s.jsxs("div",{className:"content-wrapper",children:[s.jsxs("h1",{className:"main-title",children:[s.jsx("span",{className:"MR",children:" MR "})," ",l]}),s.jsx("h2",{className:"sub-titles",children:" at a "}),s.jsxs("div",{className:"media-container",children:[s.jsx("img",{src:c,alt:"People collaborating at a desk",className:"media-image"}),s.jsx("video",{src:u,alt:"Group discussion",className:"media-video",autoPlay:!0,muted:!0,loop:!0})]}),s.jsx("h1",{className:"sub-title",children:s.jsx("span",{children:"MR STUDIO"})})]}),s.jsx("div",{className:"footersection",children:s.jsx(d,{})})]}),s.jsx(m,{})]})};export{N as default};
