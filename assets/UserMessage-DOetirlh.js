import{r as a,j as e}from"./index-B24Ewt2J.js";import{a as u}from"./axios-BimPEqV4.js";import{Q as j,B as g}from"./ReactToastify-D3cUFxaG.js";function b(){const[l,c]=a.useState([]),[o,h]=a.useState(null),[i,d]=a.useState(""),[n,m]=a.useState(null),[x,p]=a.useState(!1);a.useEffect(()=>{(async()=>{p(!0);try{const r=await u.get("https://mytrend.onrender.com/api/messages");c(r.data)}catch{h("Failed to fetch messages.")}finally{p(!1)}})()},[]);const y=a.useCallback(s=>{d(s.target.value)},[]),f=async()=>{const s=l.find(r=>r._id===n);if(s){const r=l.map(t=>t._id===n?{...t,replySent:!0}:t);c(r),g.success("Reply sent successfully!"),d(""),m(null);try{await u.post("https://mytrend.onrender.com/api/reply",{email:s.email,message:i})}catch{g.error("Failed to send reply.")}}};return e.jsxs("div",{className:"message-page",children:[e.jsx("h1",{children:"User Messages"}),o&&e.jsx("p",{className:"error-message",children:o}),x&&e.jsx("p",{children:"Loading messages..."}),e.jsx("div",{className:"message-container",children:l.map(s=>e.jsxs("div",{className:"message-box",children:[e.jsxs("div",{className:"message-row",children:[e.jsx("div",{className:"msgname",children:s.name}),e.jsx("div",{className:"msgemail",children:s.email}),e.jsx("button",{className:"reply-button",onClick:()=>m(s._id),children:"Reply"})]}),n===s._id&&e.jsx("div",{className:"reply-form",children:e.jsxs("div",{className:"textarea-wrapper",children:[e.jsx("textarea",{value:i,onChange:y,placeholder:"Your reply...",className:"textarr"}),e.jsx("button",{onClick:f,className:"send-reply-btn",children:"Send Reply"})]})})]},s._id))}),e.jsx(j,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})]})}export{b as default};
