import{s as m,r as s,j as e,V as u,b1 as pe,g as n,f as $,T as H,y as x,J as Z,M as q}from"./index.21fdd5d3.js";import{R as ce}from"./80fd8b3e.js";const W=m.input(o=>({width:o.width||"302px",height:o.height||"30px",marginTop:"9px",padding:"0px 4px",outline:"none",border:"none",borderBottom:"1px solid #FFFFFF",color:o.textColor||"#000000",backgroundColor:"light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))",borderRadius:"2px",fontFamily:"var(--font-family-regular)",fontSize:o.fontSize||"20px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",title:o.title||"","::placeholder":{color:o.placeholderColor},"::-ms-reveal":{display:"none"}})),Y=o=>{const{isPasswordVisible:t,placeholder:c,onChange:d,maxLength:w=25,value:i,placeholderColor:g,textColor:a,fontSize:h,onKeyDown:C}=o,[y,S]=s.useState(!1);return e.jsx(W,{title:c,value:i,maxLength:w,type:t?"text":"password",onChange:p=>{d(p.target.value)},onFocus:()=>S(!0),onBlur:()=>S(!1),placeholder:y?"":c,placeholderColor:g,textColor:a,fontSize:h,onKeyDown:C})},N=o=>{const{isPasswordVisible:t,onClick:c}=o;return e.jsx(u,{type:"左右___主轴居中",style:{flex:"0 0 auto",cursor:"pointer"},onClick:()=>{c()},children:t?e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M0.984985 10C1.76832 5.73333 5.50665 2.5 9.99998 2.5C14.4933 2.5 18.2317 5.73333 19.0158 10C18.2325 14.2667 14.4933 17.5 9.99998 17.5C5.50665 17.5 1.76832 14.2667 0.984985 10ZM9.99998 14.1667C11.1051 14.1667 12.1649 13.7277 12.9463 12.9463C13.7277 12.1649 14.1667 11.1051 14.1667 10C14.1667 8.89493 13.7277 7.83512 12.9463 7.05372C12.1649 6.27232 11.1051 5.83333 9.99998 5.83333C8.89492 5.83333 7.83511 6.27232 7.05371 7.05372C6.27231 7.83512 5.83332 8.89493 5.83332 10C5.83332 11.1051 6.27231 12.1649 7.05371 12.9463C7.83511 13.7277 8.89492 14.1667 9.99998 14.1667ZM9.99998 12.5C9.33694 12.5 8.70106 12.2366 8.23222 11.7678C7.76338 11.2989 7.49999 10.663 7.49999 10C7.49999 9.33696 7.76338 8.70107 8.23222 8.23223C8.70106 7.76339 9.33694 7.5 9.99998 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 9.99998 12.5Z",fill:"#74EBD5"})}):e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.76665 4.94628L1.16165 2.34044L2.33999 1.16211L18.8392 17.6604L17.6608 18.8396L14.9025 16.0813C13.4366 17.011 11.7359 17.5033 9.99998 17.5004C5.50665 17.5004 1.76832 14.2671 0.984985 10.0004C1.34408 8.06025 2.31964 6.28771 3.76665 4.94628ZM12.2983 13.4771L11.0783 12.2571C10.6117 12.4804 10.0873 12.5534 9.57743 12.4661C9.06756 12.3788 8.59732 12.1355 8.23154 11.7697C7.86577 11.4039 7.62246 10.9337 7.53517 10.4238C7.44787 9.91396 7.52089 9.38957 7.74415 8.92294L6.52415 7.70294C5.99391 8.50418 5.75688 9.46405 5.85318 10.42C5.94948 11.376 6.37319 12.2693 7.05258 12.9487C7.73197 13.6281 8.62528 14.0518 9.58124 14.1481C10.5372 14.2444 11.4971 14.0073 12.2983 13.4771ZM6.64499 3.13378C7.68415 2.72544 8.81665 2.50044 9.99998 2.50044C14.4933 2.50044 18.2317 5.73378 19.0158 10.0004C18.7605 11.3888 18.1866 12.699 17.3392 13.8279L14.1225 10.6113C14.1519 10.4113 14.1667 10.2077 14.1667 10.0004C14.1668 9.40165 14.0378 8.80986 13.7886 8.2654C13.5393 7.72094 13.1757 7.2366 12.7223 6.84537C12.269 6.45414 11.7367 6.16521 11.1617 5.99826C10.5866 5.83132 9.98233 5.79028 9.38999 5.87794L6.64499 3.13378Z",fill:"#989898"})})})},te=({text:o,onClick:t,disabled:c})=>e.jsx("button",{onClick:t,disabled:c,style:{width:"341px",height:"48px",marginTop:"30px",background:c?"#D9D9D9":"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",borderRadius:"12px",border:"none",cursor:c?"not-allowed":"pointer"},children:e.jsx("span",{style:{width:"40px",height:"29px",fontFamily:"var(--font-family-primary)",fontStyle:"normal",fontWeight:400,fontSize:"20px",lineHeight:"29px",textAlign:"center",color:"#FFFFFF"},children:o})}),Q=({text:o,onClick:t,disabled:c})=>e.jsx("button",{onClick:t,disabled:c,style:{position:"absolute",width:"341px",height:"54px",top:"388px",left:"29px",background:c?"#D9D9D9":"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",borderRadius:"12px",border:"none",cursor:c?"not-allowed":"pointer"},children:e.jsx("span",{style:{width:"40px",height:"29px",fontFamily:"var(--font-family-primary)",fontStyle:"normal",fontWeight:400,fontSize:"20px",lineHeight:"29px",textAlign:"center",color:"#FFFFFF"},children:o})}),xe=m.div`
  position: absolute;
  width: 399px;
  height: 399px;
  left: calc(50% - 399px / 2);
  top: 0px;
  background: #3e3e3e;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px;
`,se=m.div`
  position: absolute;
  width: 399px;
  height: 488px;
  left: calc(50% - 399px / 2);
  top: 0px;
  background: #3e3e3e;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 20px;
`,fe=m.div`
  // width: 80px;
  // height: 80px;
  // margin-top: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`,ue=m.div`
  width: 72px;
  height: 35px;
  margin-top: 8px;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  background: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 4px;
  width: 309px;
  height: 29px;
  margin-top: 20px;
`;m.input`
  width: 301px;
  height: 29px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  outline: none;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  padding: 0px 4px;
  &::placeholder {
    color: #ffffff;
  }
`;const ee=m.span`
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #74ebd5;
  cursor: pointer;
`,ge=m.div`
  display: flex;
  justify-content: space-between;
  width: 341px;
  margin-top: 14px;
`,oe=m.div`
  width: 72px;
  width: 100%;
  height: 35px;
  margin-top: 8px;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  background: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;m.input`
  width: 301px;
  height: 29px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  outline: none;
  font-family: "Source Han Sans SC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  padding: 0px 4px;
  &::placeholder {
    color: #ffffff;
  }
`;const he=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 341px;
  margin-top: 15px;
`;m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
`;m.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${o=>o.checked?"#74EBD5":"transparent"};
  border: 1px solid #74ebd5;
  position: relative;
  margin-right: 8px;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    background: #ffffff;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${o=>o.checked?"block":"none"};
  }
`;m.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;const ie=({onClick:o})=>e.jsx("div",{style:{position:"absolute",left:"11px",top:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},onClick:o,children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),J=({onClick:o})=>e.jsx("div",{style:{position:"absolute",right:"11px",top:"11px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},onClick:o,children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),G=m.div`
  display: flex;
  flex-direction: column;
  // gap: 13px;
  gap: 26px;
  width: 309px;
  height: 194;
`,B=m.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 309px;
  height: 32px;
  background-color: transparent;
`,X=()=>e.jsx(fe,{children:e.jsx("img",{src:pe(n.getCurrentDevice().deviceType.company)+"/login_logo.png",alt:n.driverDisplayName,width:80,draggable:!1})}),me=o=>{const{email:t,setEmail:c,password:d,setPassword:w,isPasswordVisible:i,setIsPasswordVisible:g,onLogin:a,onForgotPassword:h,onRegister:C,onClose:y,isEmailInvalid:S}=o,p=$(),[F,l]=s.useState(!1),[j,P]=s.useState(!1);return s.useEffect(()=>{d!==""&&(d.length<6||d.length>25||d.includes(" "))?P(!0):P(!1)},[d]),e.jsxs(xe,{children:[e.jsx(X,{}),e.jsx(ue,{children:p.请登录||"请登录"}),e.jsx(J,{onClick:y}),e.jsxs(u,{type:"上下",style:{},children:[e.jsx(H,{type:"正文内容",text:p.邮箱||"邮箱"}),e.jsxs(u,{type:"上下",style:{position:"relative"},children:[e.jsx(W,{type:"text",inputMode:"email",autoComplete:"email",value:t,onChange:k=>c(k.target.value),placeholder:F?"":p.邮箱||"邮箱",onFocus:()=>l(!0),onBlur:()=>l(!1)}),S&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:p.请输入正确的邮箱||"请输入正确的邮箱"})]}),e.jsxs(u,{type:"上下",style:{},children:[e.jsx(H,{type:"正文内容",text:p.密码||"密码"}),e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(Y,{value:d,isPasswordVisible:i,placeholder:p.密码||"密码",onChange:w,onKeyDown:k=>{k.key==="Enter"&&a()},style:{}}),j&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:p.密码长度限制625个字符且不允许有空格||"密码长度限制6-25个字符且不允许有空格"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(N,{isPasswordVisible:i,onClick:()=>g(!i)})})]})]})]}),e.jsxs(u,{type:"上下",style:{marginTop:"16px"},children:[e.jsx(te,{onClick:a,disabled:t===""||d===""||S||n.isWaitingServerResponse,text:n.isWaitingServerResponse?p.请稍候||"请稍候":p.登录||"登录"}),e.jsxs(ge,{children:[e.jsx(ee,{onClick:C,children:p.尚未注册账号去注册||"尚未注册账号?去注册"}),e.jsx(ee,{onClick:h,children:p.忘记密码||"忘记密码?"})]})]})]})},we=o=>{const{email:t,setEmail:c,username:d,setUsername:w,isUsernameInvalid:i,password:g,setPassword:a,confirmPassword:h,setConfirmPassword:C,isPasswordVisible:y,setIsPasswordVisible:S,isConfirmPasswordVisible:p,setIsConfirmPasswordVisible:F,agreeToTerms:l,setAgreeToTerms:j,onRegister:P,onBack:k,onClose:I,isEmailInvalid:O}=o,f=$(),[E,M]=s.useState(!1),[z,L]=s.useState(!1),[A,R]=s.useState(!1),[v,V]=s.useState(!1),[T,b]=s.useState(!1);return s.useEffect(()=>{g!==""&&(g.length<6||g.length>25||g.includes(" "))?R(!0):R(!1)},[g]),s.useEffect(()=>{V(h!==""&&h!==g)},[h,g]),e.jsxs(se,{children:[e.jsx(ie,{onClick:k}),e.jsx(J,{onClick:I}),e.jsx(X,{}),e.jsx(oe,{children:f.请注册||"请注册"}),T?e.jsx(G,{children:e.jsx("div",{style:{whiteSpace:"pre-wrap",fontFamily:"var(--font-family-regular)",fontSize:"14px",width:"309px",height:"194px",overflowY:"auto",padding:"5px 10px"},children:f.用户协议内容||"用户协议内容"})}):e.jsxs(G,{children:[e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(W,{type:"text",inputMode:"email",autoComplete:"email",value:t,onChange:D=>c(D.target.value),placeholder:E?"":f.邮箱||"邮箱",onFocus:()=>M(!0),onBlur:()=>M(!1)}),O&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:f.邮箱只允许字母数字下划线及连字符||"邮箱只允许字母、数字、下划线及连字符"})]})}),e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(W,{type:"text",value:d,onChange:D=>w(D.target.value),placeholder:z?"":f.用户名称||"用户名称",onFocus:()=>L(!0),onBlur:()=>L(!1)}),i&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:f.用户名长度限制420个字符且不允许有空格||"用户名长度限制4-20个字符且不允许有空格"})]})}),e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(Y,{value:g,isPasswordVisible:y,placeholder:f.密码||"密码",onChange:a,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),A&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:f.密码长度限制625个字符且不允许有空格||"密码长度限制6-25个字符且不允许有空格"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(N,{isPasswordVisible:y,onClick:()=>S(!y)})})]})}),e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(Y,{value:h,isPasswordVisible:p,placeholder:f.确认密码||"确认密码",onChange:C,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),v&&e.jsx("span",{style:{position:"absolute",top:37,color:"#ff4d4f",width:"301px",fontSize:"12px"},children:f.两次密码输入不一致||"两次密码输入不一致"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(N,{isPasswordVisible:p,onClick:()=>F(!p)})})]})})]}),e.jsx(he,{children:T?e.jsx(Q,{onClick:()=>{b(!1),j(!l)},text:f.同意||"同意"}):e.jsxs(e.Fragment,{children:[e.jsx("button",{style:{position:"absolute",width:"341px",height:"54px",top:"388px",left:"29px",background:"transparent",zIndex:!l||n.isWaitingServerResponse?1:-10,cursor:"not-allowed",border:"none"},onClick:()=>{n.isWaitingServerResponse||x.error(f.请同意用户协议||"请同意用户协议!",n.toastOptions)}}),e.jsx(Q,{onClick:P,disabled:!l||n.isWaitingServerResponse,text:n.isWaitingServerResponse?f.请稍候||"请稍候":f.注册||"注册"})]})}),!T&&e.jsx(ce,{isSelected:l,onClick:()=>{l?j(!l):b(!0)},text:f.同意用户协议||"同意用户协议",textColor:"#74EBD5",style:{cursor:"pointer",position:"absolute",left:"192px",bottom:"16px",transform:"translateX(-50%)",fontSize:"12px",fontFamily:"var(--font-family-medium)",fontWeight:500}})]})},Ce=o=>{const{email:t,setEmail:c,verificationCode:d,setVerificationCode:w,password:i,setPassword:g,confirmPassword:a,setConfirmPassword:h,onRequestVerificationCode:C,onSubmit:y,onBack:S,onClose:p,isEmailInvalid:F}=o,l=$(),[j,P]=s.useState(!1),[k,I]=s.useState(!1),[O,f]=s.useState(!1),[E,M]=s.useState(!1),[z,L]=s.useState(!1),[A,R]=s.useState(!1),[v,V]=s.useState(0);s.useEffect(()=>{i!==""&&(i.length<6||i.length>25||i.includes(" "))?L(!0):L(!1)},[i]),s.useEffect(()=>{R(a!==""&&a!==i)},[a,i]),s.useEffect(()=>{let b;return v>0&&(b=setInterval(()=>{V(D=>D-1)},1e3)),()=>{b&&clearInterval(b)}},[v]);const T=()=>{F||t.length===0||v>0||(C(),V(60))};return e.jsxs(se,{children:[e.jsx(ie,{onClick:S}),e.jsx(J,{onClick:p}),e.jsx(X,{}),e.jsx(oe,{children:l.忘记密码||"忘记密码"}),e.jsxs(G,{children:[e.jsx(B,{children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(W,{type:"text",inputMode:"email",autoComplete:"email",value:t,onChange:b=>c(b.target.value),placeholder:j?"":l.邮箱||"邮箱",onFocus:()=>P(!0),onBlur:()=>P(!1)}),F&&e.jsx(H,{type:"提示文本",wrap:!0,style:{position:"absolute",top:37,color:"#ff4d4f"},text:l.请输入正确的邮箱||"请输入正确的邮箱"})]})}),e.jsx(B,{style:{marginTop:"8px"},children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(W,{width:"150px",type:"text",value:d,onChange:b=>w(b.target.value),placeholder:k?"":l.验证码||"验证码",onFocus:()=>I(!0),onBlur:()=>I(!1)}),e.jsx("button",{onClick:T,disabled:v>0,style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)",background:v>0?"#ccc":"linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",borderRadius:"6px",border:"none",cursor:v>0?"not-allowed":"pointer",width:"140px",height:"32px",fontFamily:"var(--font-family-primary)",fontStyle:"normal",fontWeight:400,fontSize:"16px",lineHeight:"24px",color:"#FFFFFF"},children:v>0?`${v}s`:l.获取验证码||"获取验证码"})]})}),e.jsx(B,{style:{marginTop:"8px"},children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(Y,{value:i,isPasswordVisible:O,placeholder:l.密码||"密码",onChange:g,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),z&&e.jsx(H,{type:"提示文本",style:{position:"absolute",top:37,color:"#ff4d4f"},text:l._6至25个字符之间包括字母和数字||"6至25个字符之间，包括字母和数字"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(N,{isPasswordVisible:O,onClick:()=>f(!O)})})]})}),e.jsx(B,{style:{marginTop:"8px"},children:e.jsxs(u,{type:"左右",style:{position:"relative"},children:[e.jsx(Y,{value:a,isPasswordVisible:E,placeholder:l.确认密码||"确认密码",onChange:h,style:{width:"301px",backgroundColor:"transparent",border:"none",borderBottom:"1px solid #FFFFFF",color:"#FFFFFF"}}),A&&e.jsx(H,{type:"提示文本",style:{position:"absolute",top:37,color:"#ff4d4f"},text:l.两次密码输入不一致||"两次密码输入不一致"}),e.jsx(u,{style:{position:"absolute",right:"10px",top:"60%",transform:"translateY(-50%)"},children:e.jsx(N,{isPasswordVisible:E,onClick:()=>M(!E)})})]})})]}),e.jsx(u,{type:"上下",style:{alignItems:"center",marginTop:"26px"},children:e.jsx(te,{onClick:y,disabled:!1,text:l.提交||"提交"})})]})},ye=o=>{const t=$(),c=(r,_)=>r?t[r]||r:_,[d,w]=s.useState(n.logInOrRegisterPopUpInitialPage||"login"),[i,g]=s.useState(""),[a,h]=s.useState(""),[C,y]=s.useState(""),[S,p]=s.useState(!1),[F,l]=s.useState(""),[j,P]=s.useState(""),[k,I]=s.useState(!1),[O,f]=s.useState(!1),[E,M]=s.useState(!1),[z,L]=s.useState(!1);s.useEffect(()=>()=>{n.logInOrRegisterPopUpInitialPage="login"},[]);const[A,R]=s.useState(!1),[v,V]=s.useState(!1),[T,b]=s.useState(!1);s.useEffect(()=>{g(""),h(""),l(""),y(""),P(""),p(!1),I(!1),f(!1),M(!1),L(!1),R(!1),V(!1),b(!1)},[d]),s.useLayoutEffect(()=>{d==="register"&&!A&&C.length>0&&(y(""),R(!0))},[C]),s.useLayoutEffect(()=>{d==="forgotPassword"&&!v&&j.includes("@")&&(P(""),V(!0))},[j]),s.useLayoutEffect(()=>{(d==="forgotPassword"||d==="register")&&!T&&a.length>0&&(h(""),b(!0))},[a]);const D=r=>{y(r),p(r!==""&&!/^\S{4,20}$/.test(r))},U=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),K=r=>{g(r),L(r!==""&&!U(r))},ne=async()=>{if(!i||!a){x.error(t.请填写完整信息||"请填写完整信息",n.toastOptions);return}if(!U(i)){x.error(t.邮箱格式不正确||"邮箱格式不正确",n.toastOptions);return}const r=await Z.userLogin(q,i,a);r.errCode===0?(n.currentUser=r.data,x.success(t.登录成功||"登录成功",n.toastOptions),o.onClose()):x.error(t[r.errMsg]||r.errMsg||t.登录失败||"登录失败",n.toastOptions)},re=async()=>{if(!i||!C||!a||!F){x.error(t.请填写完整信息||"请填写完整信息",n.toastOptions);return}if(!U(i)){x.error(t.邮箱格式不正确||"邮箱格式不正确",n.toastOptions);return}if(a!==F){x.error(t.两次密码输入不一致||"两次密码输入不一致",n.toastOptions);return}if(!E){x.error(t.请同意用户协议||"请同意用户协议",n.toastOptions);return}const r=await Z.userRegister(q,C,"male",i,a);if(r.errCode===0)x.success(t.注册成功||"注册成功",n.toastOptions),w("login");else if(typeof r.errMsg=="object"){const _=Object.getOwnPropertyNames(r.errMsg)[0],de=r.errMsg[_];x.error(t[de]||t[_]||t.注册失败||"注册失败",n.toastOptions)}else x.error(t[r.errMsg]||r.errMsg||t.注册失败||"注册失败",n.toastOptions)},ae=async()=>{if(!i){x.error(t.请输入邮箱||"请输入邮箱",n.toastOptions);return}if(!U(i)){x.error(t.邮箱格式不正确||"邮箱格式不正确",n.toastOptions);return}const r=await Z.reqFindPassVerifyCode(q,i);r.errCode===0?x.success(t.验证码已发送||"验证码已发送",n.toastOptions):x.error(c(r.errMsg,t.验证码发送失败||"验证码发送失败"),n.toastOptions)},le=async()=>{if(!i||!j||!a||!F){x.error(t.请填写完整信息||"请填写完整信息",n.toastOptions);return}if(!U(i)){x.error(t.请填写完整信息||"请填写完整信息",n.toastOptions);return}if(!U(i)){x.error(t.邮箱格式不正确||"邮箱格式不正确",n.toastOptions);return}const r=await Z.findPassword(q,i,j,a);r.errCode===0?(x.success(t.密码重置成功||"密码重置成功",n.toastOptions),w("login")):x.error(c(r.errMsg,t.验证码不正确||"验证码不正确"),n.toastOptions)};return e.jsx("div",{style:{position:"fixed",width:"100%",height:"100%",zIndex:9998},children:e.jsx("div",{style:{position:"fixed",width:"399px",left:"calc(50% - 399px/2)",top:"25%",background:"#3E3E3E",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",zIndex:9998},children:d==="login"?e.jsx(me,{email:i,setEmail:K,password:a,setPassword:h,isPasswordVisible:k,setIsPasswordVisible:I,onLogin:ne,onForgotPassword:()=>{w("forgotPassword"),g("")},onRegister:()=>{w("register"),g(""),h("")},onClose:o.onClose,isEmailInvalid:z}):d==="forgotPassword"?e.jsx(Ce,{email:i,setEmail:K,verificationCode:j,setVerificationCode:P,password:a,setPassword:h,confirmPassword:F,setConfirmPassword:l,onRequestVerificationCode:ae,onSubmit:le,onBack:()=>w("login"),onClose:o.onClose,isEmailInvalid:z}):d==="register"?e.jsx(we,{email:i,setEmail:K,username:C,setUsername:D,isUsernameInvalid:S,password:a,setPassword:h,confirmPassword:F,setConfirmPassword:l,isPasswordVisible:k,setIsPasswordVisible:I,isConfirmPasswordVisible:O,setIsConfirmPasswordVisible:f,agreeToTerms:E,setAgreeToTerms:M,onRegister:re,onBack:()=>w("login"),onClose:o.onClose,isEmailInvalid:z,showAgreement:!0}):null})})},je=Object.freeze(Object.defineProperty({__proto__:null,LogInOrRegisterPopUp:ye},Symbol.toStringTag,{value:"Module"}));export{ye as L,Y as P,N as a,je as b};
