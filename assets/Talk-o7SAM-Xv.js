import{r as a,j as e,H as j}from"./index-B30_82ci.js";import{a as f}from"./axios-BimPEqV4.js";import{Q as b,B as t}from"./ReactToastify-De5BjuAs.js";const y="/mybusiness/assets/talk-D3RFKpEF.webp";function v(){const[n,l]=a.useState(""),[r,o]=a.useState(""),[i,c]=a.useState(""),[m,d]=a.useState(!1),u=async s=>{s.preventDefault(),d(!0);try{(await f.post("https://mytrend.onrender.com/api/messages",{name:n,email:r,message:i})).data.success?(t.success("Message sent successfully!"),l(""),o(""),c("")):t.error("Failed to send message. Please try again.")}catch{t.error("Failed to send message. Please try again.")}finally{d(!1)}},g=a.useCallback(s=>l(s.target.value),[]),h=a.useCallback(s=>o(s.target.value),[]),p=a.useCallback(s=>c(s.target.value),[]);return e.jsxs("div",{className:"contact-page",children:[e.jsxs(j,{children:[e.jsx("title",{children:"Contact Us"}),e.jsx("meta",{name:"description",content:"Send us a message to get in touch or ask any questions. We'd love to hear from you!"}),e.jsx("meta",{name:"keywords",content:"contact, message, support, talk, help, send message"})]}),e.jsx(b,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),e.jsxs("main",{children:[e.jsx("section",{className:"contact-left",children:e.jsx("img",{src:y,alt:"Talk to Us - Contact",className:"banner-image"})}),e.jsx("section",{className:"contact-right",children:e.jsxs("div",{className:"contact-form",children:[e.jsx("h1",{children:"Message Me "}),e.jsx("h2",{children:"Join Us"}),e.jsxs("form",{onSubmit:u,children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",value:n,onChange:g,required:!0,className:"messagername",placeholder:"Your Name"}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",value:r,onChange:h,required:!0,className:"messagergmail",placeholder:"Your Email"}),e.jsx("label",{htmlFor:"message",children:"Message:"}),e.jsx("textarea",{id:"message",name:"message",value:i,onChange:p,required:!0,className:"messagermessage",placeholder:"Your Message"}),e.jsx("button",{type:"submit",className:"snedtoadmin",disabled:m,children:m?"Sending...":"Send"})]})]})})]})]})}export{v as default};
