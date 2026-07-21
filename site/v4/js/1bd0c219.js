import{s as a,f as y,r as d,j as t,a7 as B,a8 as M,t as L}from"./index.21fdd5d3.js";import{C as I,B as N}from"./430b6426.js";const C=100,T=new TextEncoder,R=new TextDecoder,A=o=>T.encode(o).length,G=(o,e)=>{const r=T.encode(o);if(r.length<=e)return o;let n=e;for(;n>0&&(r[n]&192)===128;)n--;return R.decode(r.slice(0,n))},O=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,U=a.div`
  background-color: var(--color-background-dark);
  color: var(--color-text-default);
  border-radius: 8px;
  padding: 24px;
  width: 400px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
`,V=a.h2`
  margin: 0 0 24px 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,w=a.div`
  margin-bottom: 16px;
`,k=a.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
`,F=a.input`
  background-color: var(--color-background-white);
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: var(--color-highlight-2);
  }
`,X=a.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
  max-height: 300px;
  resize: vertical;
  overflow-y: auto;
  &:focus {
    outline: none;
    border-color: var(--color-highlight-2);
  }
`,Y=a.div`
  padding: 8px 0;
  font-size: 14px;
`,q=a.div`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
`,H=({title:o,name:e,nameLabel:r,descriptionLabel:n,isNameEditable:s,onCancel:i,onConfirm:c,disableConfirm:g=!1})=>{const u=y(),[p,S]=d.useState(e),[m,b]=d.useState(""),[E,v]=d.useState(!1),[h,j]=d.useState(!1),x=d.useRef(null);d.useEffect(()=>(h&&(x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{j(!1)},1e3)),()=>{x.current&&clearTimeout(x.current)}),[h]);const D=f=>{const l=f.target.value;if(l.length>20){h||(L.next({type:"error",message:u.名称不能超过20个字符||"名称不能超过20个字符"}),j(!0));return}S(l)},_=f=>{const l=f.target.value;if(A(l)>C){b(G(l,C)),v(!0);return}b(l),v(!1)},z=()=>{c({name:s?p:void 0,description:m||void 0})};return t.jsx(O,{children:t.jsxs(U,{children:[t.jsx(I,{onClick:i,children:"×"}),t.jsx(V,{children:o}),t.jsxs(w,{children:[t.jsx(k,{children:r}),s?t.jsx(F,{type:"text",value:p,onChange:D}):t.jsx(Y,{children:e})]}),t.jsx("div",{style:{borderBottom:"0.5px solid #D5D5D5",margin:"16px 0"}}),t.jsxs(w,{children:[t.jsx(k,{children:n}),t.jsx(X,{value:m,onChange:_}),E&&t.jsx(q,{children:u.描述长度已达上限||"描述长度已达上限"})]}),t.jsxs(N,{children:[t.jsx(B,{onClick:i,disabled:g,text:u.取消}),t.jsx(M,{onClick:z,disabled:g,text:u.确认})]})]})})};var J=H;const Q=o=>{const e=y();let r="",n="",s="",i="",c=!1;switch(o.type){case"config":r=e.分享配置||"分享配置",n=e.配置名称||"配置名称",s=o.name,i=e.配置描述||"配置描述",c=!1;break;case"macro":r=e.宏分享||"宏分享",n=e.宏名称||"宏名称",s=o.name,i=e.宏描述||"宏描述",c=!1;break;case"light":r=e.分享灯光||"分享灯光",n=e.灯光名称||"灯光名称",s=o.name,i=e.灯光描述||"灯光描述",c=!0;break;case"screen":r=e.分享屏幕||"分享屏幕",n=e.屏幕名称||"屏幕名称",s=o.name,i=e.屏幕描述||"屏幕描述",c=!0;break}return t.jsx("div",{children:o.show&&t.jsx(J,{title:r,nameLabel:n,name:s,onCancel:o.onCancel,onConfirm:o.onConfirm,descriptionLabel:i,isNameEditable:c})})};export{Q as S};
