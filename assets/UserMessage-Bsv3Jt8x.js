import{r as a,j as e}from"./index-BFHam1Na.js";import{a as m}from"./axios-BimPEqV4.js";function j(){const[r,p]=a.useState([]),[l,u]=a.useState(null),[n,c]=a.useState(""),[i,o]=a.useState(null),[g,d]=a.useState(!1);a.useEffect(()=>{(async()=>{d(!0);try{const t=await m.get("https://mytrend.onrender.com/api/messages");p(t.data)}catch{u("Failed to fetch messages.")}finally{d(!1)}})()},[]);const h=a.useCallback(s=>{c(s.target.value)},[]),x=async()=>{const s=r.find(t=>t._id===i);if(s)try{await m.post("https://mytrend.onrender.com/api/reply",{email:s.email,message:n}),alert("Reply sent successfully!"),c(""),o(null)}catch{alert("Failed to send reply.")}};return e.jsxs("div",{className:"message-page",children:[e.jsx("h1",{children:"User Messages"}),l&&e.jsx("p",{className:"error-message",children:l}),g&&e.jsx("p",{children:"Loading messages..."}),e.jsx("div",{className:"message-container",children:r.map(s=>e.jsxs("div",{className:"message-box",children:[e.jsxs("div",{className:"message-row",children:[e.jsx("div",{className:"msgname",children:s.name}),e.jsx("div",{className:"msgemail",children:s.email}),e.jsx("button",{className:"reply-button",onClick:()=>o(s._id),children:"Reply"})]}),i===s._id&&e.jsx("div",{className:"reply-form",children:e.jsxs("div",{className:"textarea-wrapper",children:[e.jsx("textarea",{value:n,onChange:h,placeholder:"Your reply...",className:"textarr"}),e.jsx("button",{onClick:x,className:"send-reply-btn",children:"Send Reply"})]})})]},s._id))})]})}export{j as default};
