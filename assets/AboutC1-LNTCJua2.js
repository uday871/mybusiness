import{r as o,j as s}from"./index-Ba3PMS6v.js";import{w as c,A as m}from"./AboutC2-CC1D8EBz.js";import d from"./FooterAnimation-DDTKpD77.js";const u="/mybusiness/assets/mrstudio-DzQ7Pxru.mp4",r=["#FF3CAC","#784BA0","#2B86C5","#F8FF00","#EE82EE","#00FFFF","#FF4500","#FF1493"],p=()=>r[Math.floor(Math.random()*r.length)],F=()=>{const a="GAURISHANKAR",[n,i]=o.useState([]);o.useEffect(()=>{const e=setInterval(()=>{const t=a.split("").map(()=>p());i(t)},2e3);return()=>clearInterval(e)},[]);const l=a.split("").map((e,t)=>s.jsx("span",{className:"colored-letter",style:{WebkitBackgroundClip:"text",color:"transparent",WebkitTextStroke:`1px ${n[t]||"white"}`,animation:"glow 2s infinite alternate, slideIn 0.6s ease-in-out forwards",animationDelay:`${t*.1}s`,opacity:0},children:e},t));return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"about-sectionn",children:[s.jsxs("div",{className:"content-wrapper",children:[s.jsxs("h1",{className:"main-title",style:{fontFamily:"Twentieth Century",fontWeight:"bolder"},children:[s.jsx("span",{className:"MR",children:" MR "})," ",l]}),s.jsxs("div",{className:"media-container",children:[s.jsx("h1",{className:"sub-titles",children:" at a "}),s.jsx("img",{src:c,alt:"People collaborating at a desk",className:"media-image"}),s.jsx("video",{src:u,alt:"Group discussion",className:"media-video",autoPlay:!0,muted:!0,loop:!0})]}),s.jsxs("h1",{className:"sub-title",children:[" ",s.jsx("span",{style:{fontFamily:"Twentieth Century"},children:"MR STUDIO"})," ",s.jsx("span",{children:" "})]})]}),s.jsx("div",{className:"footersection",children:s.jsx(d,{})})]}),s.jsx(m,{})]})};export{F as default};
