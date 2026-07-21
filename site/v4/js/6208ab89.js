import{u as k1,r as s,k as S1,a as p,j as e,I as j1,d as L1,b as H1,L as V1,s as n,c as i}from"./index.21fdd5d3.js";const r1=1160,M1=326,$1=12*2,s1=574,K=18*2+($1+r1)+20+s1,T1=1e3,R1=(t,l)=>t<=0?0:t===1?l>1?60:1:t*60,d1=[{code:"Escape",label:"Esc",x:0,y:0},{code:"F1",label:"F1",x:86,y:0},{code:"F2",label:"F2",x:138,y:0},{code:"F3",label:"F3",x:190,y:0},{code:"F4",label:"F4",x:242,y:0},{code:"F5",label:"F5",x:329,y:0},{code:"F6",label:"F6",x:381,y:0},{code:"F7",label:"F7",x:433,y:0},{code:"F8",label:"F8",x:485,y:0},{code:"F9",label:"F9",x:572,y:0},{code:"F10",label:"F10",x:624,y:0},{code:"F11",label:"F11",x:676,y:0},{code:"F12",label:"F12",x:728,y:0},{code:"PrintScreen",label:"Print",x:790,y:0},{code:"ScrollLock",label:"Scroll",x:842,y:0},{code:"Pause",label:"Pause",x:894,y:0},{code:"Backquote",label:"`~",x:0,y:70},{code:"Digit1",label:"1!",x:52,y:70},{code:"Digit2",label:"2@",x:104,y:70},{code:"Digit3",label:"3#",x:156,y:70},{code:"Digit4",label:"4$",x:208,y:70},{code:"Digit5",label:"5%",x:260,y:70},{code:"Digit6",label:"6^",x:312,y:70},{code:"Digit7",label:"7&",x:364,y:70},{code:"Digit8",label:"8*",x:416,y:70},{code:"Digit9",label:"9(",x:468,y:70},{code:"Digit0",label:"0)",x:520,y:70},{code:"Minus",label:"-_",x:572,y:70},{code:"Equal",label:"=+",x:624,y:70},{code:"Backspace",label:"Backspace",x:676,y:70,w:100},{code:"Insert",label:"Insert",x:790,y:70},{code:"Home",label:"Home",x:842,y:70},{code:"PageUp",label:"PgUp",x:894,y:70},{code:"NumLock",label:`Num
Lock`,x:956,y:70},{code:"NumpadDivide",label:"/",x:1008,y:70},{code:"NumpadMultiply",label:"*",x:1060,y:70},{code:"NumpadSubtract",label:"-",x:1112,y:70},{code:"Tab",label:"Tab",x:0,y:122,w:74},{code:"KeyQ",label:"Q",x:78,y:122},{code:"KeyW",label:"W",x:130,y:122},{code:"KeyE",label:"E",x:182,y:122},{code:"KeyR",label:"R",x:234,y:122},{code:"KeyT",label:"T",x:286,y:122},{code:"KeyY",label:"Y",x:338,y:122},{code:"KeyU",label:"U",x:390,y:122},{code:"KeyI",label:"I",x:442,y:122},{code:"KeyO",label:"O",x:494,y:122},{code:"KeyP",label:"P",x:546,y:122},{code:"BracketLeft",label:"[{",x:598,y:122},{code:"BracketRight",label:"]}",x:650,y:122},{code:"Backslash",label:"\\|",x:702,y:122,w:74},{code:"Delete",label:"Delete",x:790,y:122},{code:"End",label:"End",x:842,y:122},{code:"PageDown",label:"PgDn",x:894,y:122},{code:"Numpad7",label:"7",x:956,y:122},{code:"Numpad8",label:"8",x:1008,y:122},{code:"Numpad9",label:"9",x:1060,y:122},{code:"NumpadAdd",label:"+",x:1112,y:122,h:100},{code:"CapsLock",label:"Caps",x:0,y:174,w:80},{code:"KeyA",label:"A",x:84,y:174},{code:"KeyS",label:"S",x:136,y:174},{code:"KeyD",label:"D",x:188,y:174},{code:"KeyF",label:"F",x:240,y:174},{code:"KeyG",label:"G",x:292,y:174},{code:"KeyH",label:"H",x:344,y:174},{code:"KeyJ",label:"J",x:396,y:174},{code:"KeyK",label:"K",x:448,y:174},{code:"KeyL",label:"L",x:500,y:174},{code:"Semicolon",label:";:",x:552,y:174},{code:"Quote",label:`'"`,x:604,y:174,w:52},{code:"Enter",label:"Enter",x:660,y:174,w:116},{code:"Numpad4",label:"4",x:956,y:174},{code:"Numpad5",label:"5",x:1008,y:174},{code:"Numpad6",label:"6",x:1060,y:174},{code:"ShiftLeft",label:"Left Shift",x:0,y:226,w:101},{code:"KeyZ",label:"Z",x:105,y:226},{code:"KeyX",label:"X",x:157,y:226},{code:"KeyC",label:"C",x:209,y:226},{code:"KeyV",label:"V",x:261,y:226},{code:"KeyB",label:"B",x:313,y:226},{code:"KeyN",label:"N",x:365,y:226},{code:"KeyM",label:"M",x:417,y:226},{code:"Comma",label:",<",x:469,y:226},{code:"Period",label:".>",x:521,y:226},{code:"Slash",label:"/?",x:573,y:226},{code:"ShiftRight",label:"Right Shift",x:625,y:226,w:151},{code:"ArrowUp",label:"↑",x:842,y:226},{code:"Numpad1",label:"1",x:956,y:226},{code:"Numpad2",label:"2",x:1008,y:226},{code:"Numpad3",label:"3",x:1060,y:226},{code:"NumpadEnter",label:"N.Ent",x:1112,y:226,h:100},{code:"ControlLeft",label:"LCtrl",x:0,y:278,w:56},{code:"MetaLeft",label:"LWin",x:60,y:278,w:56},{code:"AltLeft",label:"LAlt",x:120,y:278,w:56},{code:"Space",label:"Space",x:180,y:278,w:356},{code:"AltRight",label:"RAlt",x:540,y:278,w:56},{code:"MetaRight",label:"RWin",x:600,y:278,w:56},{code:"ContextMenu",label:"Menu",x:660,y:278,w:56},{code:"ControlRight",label:"RCtrl",x:720,y:278,w:56},{code:"ArrowLeft",label:"←",x:790,y:278},{code:"ArrowDown",label:"↓",x:842,y:278},{code:"ArrowRight",label:"→",x:894,y:278},{code:"Numpad0",label:"0",x:956,y:278,w:100},{code:"NumpadDecimal",label:".",x:1060,y:278}],i1=new Map(d1.map(t=>[t.code,t.label])),n1="keyboard-testing-empty-keyboard-mask",E1=()=>e.jsxs("svg",{preserveAspectRatio:"none",width:"100%",height:"100%",overflow:"visible",viewBox:"0 0 31.8585 31.5045",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M31.7892 0L25.6479 6.14234H6.14129V18.8775L0 25.0188V0H31.7892Z",fill:i.headerTitle}),e.jsx("path",{d:"M31.8585 12.4894V31.5045H0L6.06778 25.3632H25.7172V18.6307H12.8959L19.1222 12.4894H31.8585Z",fill:i.headerTitle})]}),P1=()=>e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M18.922 7.98683C17.9493 6.30805 16.3996 5.03997 14.5615 4.41873C12.7234 3.79749 10.7222 3.86542 8.93048 4.60987C7.13875 5.35432 5.67863 6.72455 4.82198 8.46543C3.96534 10.2063 3.77056 12.1992 4.27391 14.073C4.77727 15.9468 5.94445 17.5738 7.55813 18.6511C9.17181 19.7284 11.122 20.1825 13.0456 19.9289C14.9692 19.6753 16.7351 18.7313 18.0144 17.2727C19.2938 15.814 19.9994 13.9401 20 11.9998",stroke:i.resetButtonBorder,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M15 7.99939H19V3.99939",stroke:i.resetButtonBorder,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),B1=({clipPathId:t})=>e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("clipPath",{id:t,children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})}),e.jsx("g",{clipPath:`url(#${t})`,children:e.jsx("path",{d:"M12.707 3.63605C12.5194 3.44858 12.2651 3.34326 12 3.34326C11.7348 3.34326 11.4805 3.44858 11.293 3.63605L5.63598 9.29305C5.54047 9.3853 5.46428 9.49564 5.41188 9.61764C5.35947 9.73965 5.33188 9.87087 5.33073 10.0036C5.32957 10.1364 5.35487 10.2681 5.40516 10.391C5.45544 10.5139 5.52969 10.6256 5.62358 10.7194C5.71747 10.8133 5.82913 10.8876 5.95202 10.9379C6.07492 10.9882 6.2066 11.0135 6.33938 11.0123C6.47216 11.0111 6.60338 10.9836 6.72538 10.9311C6.84739 10.8787 6.95773 10.8026 7.04998 10.707L11 6.75705V20C11 20.2653 11.1053 20.5196 11.2929 20.7072C11.4804 20.8947 11.7348 21 12 21C12.2652 21 12.5195 20.8947 12.7071 20.7072C12.8946 20.5196 13 20.2653 13 20V6.75705L16.95 10.707C17.1386 10.8892 17.3912 10.99 17.6534 10.9877C17.9156 10.9854 18.1664 10.8803 18.3518 10.6949C18.5372 10.5095 18.6424 10.2586 18.6447 9.99645C18.6469 9.73425 18.5461 9.48165 18.364 9.29305L12.707 3.63605Z",fill:i.streamEventKeyUp})})]}),A1=({clipPathId:t})=>e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("clipPath",{id:t,children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})}),e.jsx("g",{clipPath:`url(#${t})`,children:e.jsx("path",{d:"M11.293 20.364C11.4806 20.5514 11.7349 20.6567 12 20.6567C12.2652 20.6567 12.5195 20.5514 12.707 20.364L18.364 14.707C18.4595 14.6147 18.5357 14.5044 18.5881 14.3824C18.6405 14.2604 18.6681 14.1291 18.6693 13.9964C18.6704 13.8636 18.6451 13.7319 18.5948 13.609C18.5446 13.4861 18.4703 13.3744 18.3764 13.2806C18.2825 13.1867 18.1709 13.1124 18.048 13.0621C17.9251 13.0118 17.7934 12.9865 17.6606 12.9877C17.5278 12.9889 17.3966 13.0164 17.2746 13.0689C17.1526 13.1213 17.0423 13.1974 16.95 13.293L13 17.243V3.99995C13 3.73474 12.8947 3.48038 12.7071 3.29284C12.5196 3.10531 12.2652 2.99995 12 2.99995C11.7348 2.99995 11.4805 3.10531 11.2929 3.29284C11.1054 3.48038 11 3.73474 11 3.99995V17.243L7.05002 13.293C6.86142 13.1108 6.60882 13.01 6.34662 13.0123C6.08443 13.0146 5.83361 13.1197 5.6482 13.3051C5.4628 13.4905 5.35763 13.7414 5.35535 14.0036C5.35307 14.2657 5.45386 14.5183 5.63602 14.707L11.293 20.364Z",fill:i.streamEventKeyDown})})]}),z1=()=>e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:n1,fill:"white",children:e.jsx("path",{d:"M5.00004 14.5275V15.6942C5.00004 15.8238 4.93523 15.8886 4.8056 15.8886H3.63893C3.5093 15.8886 3.44448 15.8238 3.44448 15.6942V14.5275C3.44448 14.3979 3.5093 14.3331 3.63893 14.3331H4.8056C4.93523 14.3331 5.00004 14.3979 5.00004 14.5275ZM6.5556 11.4164V12.5831C6.5556 12.7127 6.49078 12.7775 6.36115 12.7775H3.63893C3.5093 12.7775 3.44448 12.7127 3.44448 12.5831V11.4164C3.44448 11.2868 3.5093 11.222 3.63893 11.222H6.36115C6.49078 11.222 6.5556 11.2868 6.5556 11.4164ZM5.00004 8.30531V9.47198C5.00004 9.60161 4.93523 9.66642 4.8056 9.66642H3.63893C3.5093 9.66642 3.44448 9.60161 3.44448 9.47198V8.30531C3.44448 8.17568 3.5093 8.11087 3.63893 8.11087H4.8056C4.93523 8.11087 5.00004 8.17568 5.00004 8.30531ZM17.4445 14.5275V15.6942C17.4445 15.8238 17.3797 15.8886 17.25 15.8886H6.75004C6.62041 15.8886 6.5556 15.8238 6.5556 15.6942V14.5275C6.5556 14.3979 6.62041 14.3331 6.75004 14.3331H17.25C17.3797 14.3331 17.4445 14.3979 17.4445 14.5275ZM9.66671 11.4164V12.5831C9.66671 12.7127 9.60189 12.7775 9.47226 12.7775H8.3056C8.17597 12.7775 8.11115 12.7127 8.11115 12.5831V11.4164C8.11115 11.2868 8.17597 11.222 8.3056 11.222H9.47226C9.60189 11.222 9.66671 11.2868 9.66671 11.4164ZM8.11115 8.30531V9.47198C8.11115 9.60161 8.04634 9.66642 7.91671 9.66642H6.75004C6.62041 9.66642 6.5556 9.60161 6.5556 9.47198V8.30531C6.5556 8.17568 6.62041 8.11087 6.75004 8.11087H7.91671C8.04634 8.11087 8.11115 8.17568 8.11115 8.30531ZM12.7778 11.4164V12.5831C12.7778 12.7127 12.713 12.7775 12.5834 12.7775H11.4167C11.2871 12.7775 11.2223 12.7127 11.2223 12.5831V11.4164C11.2223 11.2868 11.2871 11.222 11.4167 11.222H12.5834C12.713 11.222 12.7778 11.2868 12.7778 11.4164ZM11.2223 8.30531V9.47198C11.2223 9.60161 11.1574 9.66642 11.0278 9.66642H9.86115C9.73152 9.66642 9.66671 9.60161 9.66671 9.47198V8.30531C9.66671 8.17568 9.73152 8.11087 9.86115 8.11087H11.0278C11.1574 8.11087 11.2223 8.17568 11.2223 8.30531ZM15.8889 11.4164V12.5831C15.8889 12.7127 15.8241 12.7775 15.6945 12.7775H14.5278C14.3982 12.7775 14.3334 12.7127 14.3334 12.5831V11.4164C14.3334 11.2868 14.3982 11.222 14.5278 11.222H15.6945C15.8241 11.222 15.8889 11.2868 15.8889 11.4164ZM20.5556 14.5275V15.6942C20.5556 15.8238 20.4908 15.8886 20.3612 15.8886H19.1945C19.0649 15.8886 19 15.8238 19 15.6942V14.5275C19 14.3979 19.0649 14.3331 19.1945 14.3331H20.3612C20.4908 14.3331 20.5556 14.3979 20.5556 14.5275ZM14.3334 8.30531V9.47198C14.3334 9.60161 14.2686 9.66642 14.1389 9.66642H12.9723C12.8426 9.66642 12.7778 9.60161 12.7778 9.47198V8.30531C12.7778 8.17568 12.8426 8.11087 12.9723 8.11087H14.1389C14.2686 8.11087 14.3334 8.17568 14.3334 8.30531ZM17.4445 8.30531V9.47198C17.4445 9.60161 17.3797 9.66642 17.25 9.66642H16.0834C15.9537 9.66642 15.8889 9.60161 15.8889 9.47198V8.30531C15.8889 8.17568 15.9537 8.11087 16.0834 8.11087H17.25C17.3797 8.11087 17.4445 8.17568 17.4445 8.30531ZM20.5556 8.30531V12.5831C20.5556 12.7127 20.4908 12.7775 20.3612 12.7775H17.6389C17.5093 12.7775 17.4445 12.7127 17.4445 12.5831V11.4164C17.4445 11.2868 17.5093 11.222 17.6389 11.222H19V8.30531C19 8.17568 19.0649 8.11087 19.1945 8.11087H20.3612C20.4908 8.11087 20.5556 8.17568 20.5556 8.30531ZM22.1112 17.4442V6.55531H1.88893V17.4442H22.1112ZM23.6667 6.55531V17.4442C23.6667 17.8736 23.5148 18.2402 23.211 18.544C22.9072 18.8478 22.5405 18.9998 22.1112 18.9998H1.88893C1.45953 18.9998 1.09292 18.8478 0.789103 18.544C0.485284 18.2402 0.333374 17.8736 0.333374 17.4442V6.55531C0.333374 6.12591 0.485284 5.7593 0.789103 5.45549C1.09292 5.15167 1.45953 4.99976 1.88893 4.99976H22.1112C22.5405 4.99976 22.9072 5.15167 23.211 5.45549C23.5148 5.7593 23.6667 6.12591 23.6667 6.55531Z"})}),e.jsx("path",{d:"M5.00004 14.5275V15.6942C5.00004 15.8238 4.93523 15.8886 4.8056 15.8886H3.63893C3.5093 15.8886 3.44448 15.8238 3.44448 15.6942V14.5275C3.44448 14.3979 3.5093 14.3331 3.63893 14.3331H4.8056C4.93523 14.3331 5.00004 14.3979 5.00004 14.5275ZM6.5556 11.4164V12.5831C6.5556 12.7127 6.49078 12.7775 6.36115 12.7775H3.63893C3.5093 12.7775 3.44448 12.7127 3.44448 12.5831V11.4164C3.44448 11.2868 3.5093 11.222 3.63893 11.222H6.36115C6.49078 11.222 6.5556 11.2868 6.5556 11.4164ZM5.00004 8.30531V9.47198C5.00004 9.60161 4.93523 9.66642 4.8056 9.66642H3.63893C3.5093 9.66642 3.44448 9.60161 3.44448 9.47198V8.30531C3.44448 8.17568 3.5093 8.11087 3.63893 8.11087H4.8056C4.93523 8.11087 5.00004 8.17568 5.00004 8.30531ZM17.4445 14.5275V15.6942C17.4445 15.8238 17.3797 15.8886 17.25 15.8886H6.75004C6.62041 15.8886 6.5556 15.8238 6.5556 15.6942V14.5275C6.5556 14.3979 6.62041 14.3331 6.75004 14.3331H17.25C17.3797 14.3331 17.4445 14.3979 17.4445 14.5275ZM9.66671 11.4164V12.5831C9.66671 12.7127 9.60189 12.7775 9.47226 12.7775H8.3056C8.17597 12.7775 8.11115 12.7127 8.11115 12.5831V11.4164C8.11115 11.2868 8.17597 11.222 8.3056 11.222H9.47226C9.60189 11.222 9.66671 11.2868 9.66671 11.4164ZM8.11115 8.30531V9.47198C8.11115 9.60161 8.04634 9.66642 7.91671 9.66642H6.75004C6.62041 9.66642 6.5556 9.60161 6.5556 9.47198V8.30531C6.5556 8.17568 6.62041 8.11087 6.75004 8.11087H7.91671C8.04634 8.11087 8.11115 8.17568 8.11115 8.30531ZM12.7778 11.4164V12.5831C12.7778 12.7127 12.713 12.7775 12.5834 12.7775H11.4167C11.2871 12.7775 11.2223 12.7127 11.2223 12.5831V11.4164C11.2223 11.2868 11.2871 11.222 11.4167 11.222H12.5834C12.713 11.222 12.7778 11.2868 12.7778 11.4164ZM11.2223 8.30531V9.47198C11.2223 9.60161 11.1574 9.66642 11.0278 9.66642H9.86115C9.73152 9.66642 9.66671 9.60161 9.66671 9.47198V8.30531C9.66671 8.17568 9.73152 8.11087 9.86115 8.11087H11.0278C11.1574 8.11087 11.2223 8.17568 11.2223 8.30531ZM15.8889 11.4164V12.5831C15.8889 12.7127 15.8241 12.7775 15.6945 12.7775H14.5278C14.3982 12.7775 14.3334 12.7127 14.3334 12.5831V11.4164C14.3334 11.2868 14.3982 11.222 14.5278 11.222H15.6945C15.8241 11.222 15.8889 11.2868 15.8889 11.4164ZM20.5556 14.5275V15.6942C20.5556 15.8238 20.4908 15.8886 20.3612 15.8886H19.1945C19.0649 15.8886 19 15.8238 19 15.6942V14.5275C19 14.3979 19.0649 14.3331 19.1945 14.3331H20.3612C20.4908 14.3331 20.5556 14.3979 20.5556 14.5275ZM14.3334 8.30531V9.47198C14.3334 9.60161 14.2686 9.66642 14.1389 9.66642H12.9723C12.8426 9.66642 12.7778 9.60161 12.7778 9.47198V8.30531C12.7778 8.17568 12.8426 8.11087 12.9723 8.11087H14.1389C14.2686 8.11087 14.3334 8.17568 14.3334 8.30531ZM17.4445 8.30531V9.47198C17.4445 9.60161 17.3797 9.66642 17.25 9.66642H16.0834C15.9537 9.66642 15.8889 9.60161 15.8889 9.47198V8.30531C15.8889 8.17568 15.9537 8.11087 16.0834 8.11087H17.25C17.3797 8.11087 17.4445 8.17568 17.4445 8.30531ZM20.5556 8.30531V12.5831C20.5556 12.7127 20.4908 12.7775 20.3612 12.7775H17.6389C17.5093 12.7775 17.4445 12.7127 17.4445 12.5831V11.4164C17.4445 11.2868 17.5093 11.222 17.6389 11.222H19V8.30531C19 8.17568 19.0649 8.11087 19.1945 8.11087H20.3612C20.4908 8.11087 20.5556 8.17568 20.5556 8.30531ZM22.1112 17.4442V6.55531H1.88893V17.4442H22.1112ZM23.6667 6.55531V17.4442C23.6667 17.8736 23.5148 18.2402 23.211 18.544C22.9072 18.8478 22.5405 18.9998 22.1112 18.9998H1.88893C1.45953 18.9998 1.09292 18.8478 0.789103 18.544C0.485284 18.2402 0.333374 17.8736 0.333374 17.4442V6.55531C0.333374 6.12591 0.485284 5.7593 0.789103 5.45549C1.09292 5.15167 1.45953 4.99976 1.88893 4.99976H22.1112C22.5405 4.99976 22.9072 5.15167 23.211 5.45549C23.5148 5.7593 23.6667 6.12591 23.6667 6.55531Z",stroke:i.rightPanelTitle,strokeWidth:"2",mask:`url(#${n1})`})]}),D1=()=>e.jsx("svg",{preserveAspectRatio:"none",width:"100%",height:"100%",overflow:"visible",viewBox:"0 0 24 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 1H23M1 6H7M1 11H7M1 16H7M17 9.336V11L18.333 12.333M17 17C16.2121 17 15.4319 16.8448 14.7039 16.5433C13.9759 16.2417 13.3145 15.7998 12.7574 15.2426C12.2002 14.6855 11.7583 14.0241 11.4567 13.2961C11.1552 12.5681 11 11.7879 11 11C11 10.2121 11.1552 9.43185 11.4567 8.7039C11.7583 7.97595 12.2002 7.31451 12.7574 6.75736C13.3145 6.20021 13.9759 5.75825 14.7039 5.45672C15.4319 5.15519 16.2121 5 17 5C18.5913 5 20.1174 5.63214 21.2426 6.75736C22.3679 7.88258 23 9.4087 23 11C23 12.5913 22.3679 14.1174 21.2426 15.2426C20.1174 16.3679 18.5913 17 17 17Z",stroke:i.rightPanelTitle,strokeWidth:"2",strokeLinecap:"square"})}),K1=()=>e.jsx("svg",{preserveAspectRatio:"none",width:"100%",height:"100%",overflow:"visible",viewBox:"0 0 18 18.0008",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17.6176 13.9106L13.501 9.79399C12.6889 8.98192 11.4761 8.82373 10.4988 9.30534L6.75138 5.55789V3.37481L2.25163 0L0.00175769 2.24987L3.37657 6.74962H5.55965L9.3071 10.4971C8.829 11.4744 8.98368 12.6872 9.79574 13.4992L13.9123 17.6158C14.4256 18.1291 15.2552 18.1291 15.7649 17.6158L17.6176 15.7632C18.1273 15.2499 18.1273 14.4203 17.6176 13.9106ZM11.6624 7.90972C12.6573 7.90972 13.5924 8.29641 14.2955 8.9995L14.9775 9.68149C15.5329 9.43893 16.0602 9.10145 16.5172 8.64444C17.8215 7.34022 18.2644 5.50516 17.8496 3.83885C17.7723 3.52246 17.375 3.41348 17.143 3.6455L14.5275 6.26098L12.1405 5.86374L11.7433 3.47676L14.3588 0.86128C14.5908 0.629262 14.4783 0.232018 14.1584 0.151163C12.4921 -0.260142 10.657 0.182802 9.35632 1.48351C8.35442 2.48541 7.88335 3.80721 7.90796 5.1255L10.7941 8.01166C11.0789 7.94487 11.3742 7.90972 11.6624 7.90972ZM8.00991 10.7924L6.01666 8.79912L0.659143 14.1601C-0.219714 15.039 -0.219714 16.4628 0.659143 17.3416C1.538 18.2205 2.96175 18.2205 3.84061 17.3416L8.18568 12.9965C7.9185 12.297 7.83765 11.5341 8.00991 10.7924ZM2.25163 16.5928C1.7876 16.5928 1.40793 16.2132 1.40793 15.7491C1.40793 15.2816 1.78408 14.9054 2.25163 14.9054C2.71918 14.9054 3.09534 15.2816 3.09534 15.7491C3.09534 16.2132 2.71918 16.5928 2.25163 16.5928Z",fill:i.adsSectionTitle})}),F1=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:e.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),I1=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:e.jsx("path",{d:"M4 10L8 6L12 10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Z1=()=>e.jsx("svg",{preserveAspectRatio:"none",width:"100%",height:"100%",overflow:"visible",viewBox:"0 0 111 68.4211",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2 34.1826H15.2142C15.8203 34.1826 16.366 33.8153 16.5941 33.2538L28.9118 2.92894C29.433 1.64594 31.2699 1.70645 31.7055 3.02096L52.376 65.4001C52.8093 66.708 54.6335 66.7768 55.1642 65.5053L72.5469 23.8577C73.0431 22.6688 74.7125 22.628 75.2662 23.7913L85.9921 46.3267C86.5247 47.4458 88.1113 47.4627 88.6677 46.3553L94.3709 35.0034C94.6237 34.5002 95.1386 34.1826 95.7017 34.1826H109",stroke:i.metricCardWaveStroke,strokeWidth:"4",strokeLinecap:"round"})}),N1=()=>e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"6",cy:"6",r:"5.4",stroke:i.streamIntervalText,strokeWidth:"1.2"}),e.jsx("path",{d:"M6 3.6V6L7.333 7.333",stroke:i.streamIntervalText,strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),W1=()=>e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 2L22 22",stroke:i.rightPanelTitle,strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M8 7.41411L7.12012 8.29399C6.89671 8.51819 6.63128 8.69627 6.33887 8.81743C6.0464 8.93858 5.73257 8.99961 5.41602 8.99907L3 9.00005V15H5.41602C5.73258 14.9995 6.04639 15.0615 6.33887 15.1827C6.63128 15.3038 6.89671 15.4819 7.12012 15.7061L10 18.586V9.41411L12 11.4141V19.2969L11.9951 19.4229C11.9738 19.7159 11.8776 19.9995 11.7139 20.2452C11.5266 20.5258 11.2599 20.7448 10.9482 20.8741C10.6365 21.0033 10.2929 21.0367 9.96191 20.9707C9.63092 20.9048 9.32633 20.7428 9.08789 20.504L5.7041 17.1182C5.6668 17.0807 5.62213 17.0506 5.57324 17.0303C5.52435 17.0101 5.47186 16.9999 5.41895 17H3C2.46958 17 1.96101 16.7892 1.58594 16.4141C1.21089 16.0391 1.00002 15.5304 1 15V9.00005C1.00001 8.46964 1.2109 7.96105 1.58594 7.58598C1.96101 7.21092 2.46957 7.00005 3 7.00005H5.41895C5.47186 7.0002 5.52436 6.99002 5.57324 6.96977C5.62212 6.94952 5.6668 6.9194 5.7041 6.88188L6.58594 6.00005L8 7.41411Z",fill:i.rightPanelTitle}),e.jsx("path",{d:"M15.4004 8.20024C15.8422 7.86902 16.4685 7.95866 16.7998 8.40044C17.5786 9.43897 18 10.7019 18 12C18 12.2328 17.9863 12.4643 17.9594 12.6936C17.8754 13.4105 17.0172 13.6031 16.5067 13.0927L16.3113 12.8973C16.09 12.676 15.9949 12.3639 15.9996 12.051C15.9999 12.034 16 12.017 16 12C16 11.1346 15.7195 10.292 15.2002 9.59965C14.869 9.15785 14.9587 8.53158 15.4004 8.20024Z",fill:i.rightPanelTitle}),e.jsx("path",{d:"M10.0879 3.01079C10.3373 2.98026 10.5904 3.0053 10.8291 3.08403L10.9473 3.12798L11.0615 3.17973C11.2861 3.29274 11.4828 3.4544 11.6377 3.65239L11.7119 3.75493L11.7783 3.86235C11.9228 4.11725 11.9995 4.40583 12 4.70024V6.17177C12 7.06267 10.9229 7.50884 10.2929 6.87888C10.1054 6.69134 10 6.43699 10 6.17177V5.41411C9.6764 5.73771 9.15173 5.73771 8.82812 5.41411L8.70719 5.29317C8.31667 4.90265 8.31681 4.26945 8.70751 3.87911L9.09082 3.49614C9.32921 3.25829 9.63258 3.0959 9.96289 3.03032L10.0879 3.01079Z",fill:i.rightPanelTitle}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0713 4.92876C19.6809 4.53834 19.0478 4.53851 18.6572 4.92876C18.2667 5.31928 18.2667 5.95231 18.6572 6.34282C19.4 7.08562 19.9886 7.96801 20.3906 8.93852C20.7926 9.90911 21 10.9495 21 12C21 13.0506 20.7927 14.091 20.3906 15.0616C20.312 15.2515 20.2257 15.4377 20.1325 15.6201C19.9186 16.0385 19.9682 16.5542 20.3005 16.8865L20.3318 16.9177C20.7705 17.3565 21.5027 17.2947 21.7989 16.7494C21.9613 16.4504 22.1085 16.1428 22.2393 15.8272C22.7418 14.614 23 13.3132 23 12C23 10.6868 22.7418 9.38613 22.2393 8.1729C21.7367 6.9597 20.9998 5.8573 20.0713 4.92876Z",fill:i.rightPanelTitle})]}),_1=()=>e.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16 9.00003C16.6491 9.86551 17 10.9182 17 12C17 13.0819 16.6491 14.1345 16 15M19.364 18.364C20.1997 17.5283 20.8627 16.5361 21.315 15.4442C21.7673 14.3523 22.0001 13.1819 22.0001 12C22.0001 10.8181 21.7673 9.64779 21.315 8.55585C20.8627 7.46391 20.1997 6.47176 19.364 5.63603M11 4.70203C10.9998 4.56274 10.9583 4.42663 10.8809 4.31088C10.8034 4.19514 10.6934 4.10493 10.5647 4.05166C10.436 3.99838 10.2944 3.98442 10.1577 4.01154C10.0211 4.03866 9.89559 4.10564 9.797 4.20403L6.413 7.58703C6.2824 7.7184 6.12703 7.82256 5.95589 7.89345C5.78475 7.96435 5.60124 8.00057 5.416 8.00003H3C2.73478 8.00003 2.48043 8.10539 2.29289 8.29292C2.10536 8.48046 2 8.73481 2 9.00003V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8947 2.73478 16 3 16H5.416C5.60124 15.9995 5.78475 16.0357 5.95589 16.1066C6.12703 16.1775 6.2824 16.2817 6.413 16.413L9.796 19.797C9.8946 19.8958 10.0203 19.9631 10.1572 19.9904C10.2941 20.0177 10.436 20.0037 10.5649 19.9503C10.6939 19.8968 10.804 19.8063 10.8815 19.6902C10.959 19.5741 11.0002 19.4376 11 19.298V4.70203Z",stroke:i.rightPanelTitle,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),O1=t=>t.code==="Space"?"Space":t.key.length===1?t.key.toUpperCase():t.key,G1=t=>{const l=new Date(t);return`${`${l.getHours()}`.padStart(2,"0")}:${`${l.getMinutes()}`.padStart(2,"0")}:${`${l.getSeconds()}`.padStart(2,"0")}.${`${l.getMilliseconds()}`.padStart(3,"0")}`},U1=t=>{const l=t.split(`
`);return l.length===1?t:e.jsx(e.Fragment,{children:l.map((d,g)=>e.jsx("span",{style:{display:"block"},children:d},`${g}-${d}`))})},o1=t=>{if(!t||!(t instanceof HTMLElement))return!1;const l=t.tagName;return l==="INPUT"||l==="TEXTAREA"||l==="SELECT"||t.isContentEditable},l1=t=>{if(t.code==="AltRight"||t.key==="AltGraph"||t.code==="MetaLeft"||t.code==="MetaRight"||t.key==="Meta"||t.key==="OS"||t.code==="ContextMenu")return!0;const l=t.code??"";if(/^F\d+$/i.test(l)){const d=Number(l.replace(/^F/i,""));if(Number.isFinite(d)&&d>=1&&d<=12)return!0}return t.key==="F10"||t.key==="F11"||t.key==="F12"},it=()=>{const{getString:t}=k1(),[l,d]=s.useState([]),[g,y]=s.useState([]),[w,j]=s.useState([]),[A,L]=s.useState({actionTimes:[],displayValue:0}),[$,T]=s.useState(!1),[m,R]=s.useState(!0),[b,a1]=s.useState(!0),c1=!1,z=s.useRef(null),D=s.useRef([]),I=s.useRef([]),H=s.useRef(new Set),k=s.useRef(null),E=s.useRef(null),Z=s.useRef(0);s.useEffect(()=>{Z.current=l.length},[l.length]),s.useEffect(function(){E.current&&(E.current.scrollTop=E.current.scrollHeight)},[l.length]),s.useEffect(()=>{D.current=g},[g]),s.useEffect(()=>{I.current=w},[w]),s.useEffect(()=>{const o=new Audio(S1);return o.preload="auto",z.current=o,()=>{o.pause(),z.current=null}},[]);const N=o=>i1.get(o.code)??O1(o);s.useEffect(()=>{const o=()=>{const r=D.current.slice();if(r.length===0)return;D.current=[],y([]),H.current=new Set(r),k.current!==null&&window.clearTimeout(k.current),k.current=window.setTimeout(()=>{H.current.clear(),k.current=null},3e3);const h=Date.now(),C=new Set(r),x=[],a=new Set;for(const c of I.current)C.has(c)&&!a.has(c)&&(x.push(c),a.add(c));for(const c of r)a.has(c)||(x.push(c),a.add(c));const B=x.map((c,v1)=>({id:h+Math.random()+v1,type:"keyup",key:i1.get(c)??c,code:c,time:h}));d(c=>[...c,...B])},f=r=>{if(r.repeat)return;H.current.size>0&&(H.current.clear(),k.current!==null&&(window.clearTimeout(k.current),k.current=null)),!o1(r.target)&&l1(r)&&(r.preventDefault(),r.stopPropagation());const h=Date.now(),C=N(r),x=z.current;m&&x&&(x.currentTime=0,x.play().catch(()=>{})),y(a=>a.includes(r.code)?a:[...a,r.code]),j(a=>[r.code,...a.filter(B=>B!==r.code)]),L(a=>({actionTimes:[...a.actionTimes,h],displayValue:a.displayValue})),d(a=>[...a,{id:h+Math.random(),type:"keydown",key:C,code:r.code,time:h}])},S=r=>{!o1(r.target)&&l1(r)&&(r.preventDefault(),r.stopPropagation());const h=Date.now(),C=N(r);if(y(x=>x.filter(a=>a!==r.code)),H.current.has(r.code)){H.current.delete(r.code);return}d(x=>[...x,{id:h+Math.random(),type:"keyup",key:C,code:r.code,time:h}])},v=r=>{r.preventDefault(),r.stopPropagation()};window.addEventListener("keydown",f,!0),window.addEventListener("keyup",S,!0),window.addEventListener("contextmenu",v,!0),window.addEventListener("blur",o);const u=()=>{document.visibilityState==="hidden"&&o()};return document.addEventListener("visibilitychange",u),()=>{window.removeEventListener("keydown",f,!0),window.removeEventListener("keyup",S,!0),window.removeEventListener("contextmenu",v,!0),window.removeEventListener("blur",o),document.removeEventListener("visibilitychange",u)}},[m]),s.useEffect(()=>{const o=()=>{const S=Date.now();L(({actionTimes:v})=>{const u=v.filter(r=>S-r<=T1);return{actionTimes:u,displayValue:R1(u.length,Z.current)}})};o();const f=window.setInterval(o,1e3);return()=>window.clearInterval(f)},[]);const x1=s.useMemo(()=>new Set(l.map(o=>o.code)).size,[l]),h1=l.length,p1=A.displayValue,u1=o=>g.includes(o)?"pressed":w.includes(o)?"active":"default",g1=()=>{d([]),y([]),j([]),L({actionTimes:[],displayValue:0})},W=t("在线键盘测试","在线键盘测试"),_=p(W,{maxSizePx:24,minSizePx:11,mode:"single-line",lineHeightRatio:1.25}),O=t("重置","重置"),G=p(O,{maxSizePx:14,minSizePx:9,mode:"single-line",lineHeightRatio:1.2}),U=t("推荐工具与服务","推荐工具与服务"),w1=t("展开","展开"),f1=t("收起","收起"),Y=p(U,{maxSizePx:16,minSizePx:10,mode:"single-line",lineHeightRatio:1.5}),q=t("实时事件流","实时事件流"),X=p(q,{maxSizePx:16,minSizePx:10,mode:"single-line",lineHeightRatio:1.5}),Q=t("按下任意键开始测试","按下任意键开始测试"),J=p(Q,{maxSizePx:16,minSizePx:10,mode:"multi-line",lineHeightRatio:1.5}),e1=s.useRef(null),P=s.useRef(null),[M,C1]=s.useState(1),[y1,t1]=s.useState(0);s.useLayoutEffect(()=>{const o=e1.current,f=P.current;if(!o||!f)return()=>{};const S=()=>{const C=o.clientWidth,x=Math.min(1,C/K);C1(x)},v=()=>{const C=P.current;C&&t1(C.scrollHeight)};S(),v();const u=()=>{S(),requestAnimationFrame(v)},r=new ResizeObserver(u),h=new ResizeObserver(()=>{requestAnimationFrame(v)});return r.observe(o),h.observe(f),window.addEventListener("resize",u),window.visualViewport?.addEventListener("resize",u),()=>{r.disconnect(),h.disconnect(),window.removeEventListener("resize",u),window.visualViewport?.removeEventListener("resize",u)}},[]),s.useLayoutEffect(()=>{const o=P.current;o&&requestAnimationFrame(()=>t1(o.scrollHeight))},[M]);const V=M<.999,m1=Math.max(1,Math.ceil(y1*M)),b1=V?Math.ceil(K*M):void 0;return e.jsxs(e.Fragment,{children:[e.jsx(X1,{ref:e1,$clipX:V,children:e.jsx(Q1,{$narrow:V,$stageW:b1,$stageH:V?m1:void 0,children:e.jsx(J1,{ref:P,$narrow:V,$designWidth:K,$scale:V?M:1,children:e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsxs(ie,{children:[e.jsx(oe,{"aria-hidden":!0,children:e.jsx(E1,{})}),e.jsx(le,{ref:_.ref,style:_.inlineStyle,children:W})]}),e.jsxs(ne,{children:[e.jsx(re,{type:"button",onClick:()=>R(o=>!o),onMouseDown:o=>{o.preventDefault(),o.stopPropagation()},"aria-pressed":m,"aria-label":t(m?"关闭按键音效":"开启按键音效",m?"Turn off sound effects":"Turn on sound effects"),children:e.jsx(se,{"aria-hidden":!0,children:m?e.jsx(_1,{}):e.jsx(W1,{})})}),e.jsxs(de,{type:"button",onMouseDown:o=>{o.preventDefault()},onClick:g1,children:[e.jsx(ae,{"aria-hidden":!0,children:e.jsx(P1,{})}),e.jsx(ce,{ref:G.ref,style:G.inlineStyle,children:O})]})]})]}),e.jsx(j1,{activeTab:"keyboard",variant:"keyboard",keyboardLabel:t("键盘测试","键盘测试"),mouseLabel:t("鼠标测试","鼠标测试")}),e.jsxs(xe,{children:[e.jsxs(he,{children:[e.jsx(pe,{children:e.jsx(ue,{children:d1.map(o=>e.jsx(ge,{$x:o.x,$y:o.y,$w:o.w??48,$h:o.h??48,$state:u1(o.code),children:U1(o.label)},`${o.code}-${o.x}-${o.y}`))})}),e.jsxs(we,{children:[e.jsx(F,{title:t("每分钟操作数","APM"),value:`${p1}`}),e.jsx(F,{title:t("已测试按键","已测试按键"),value:`${x1}`}),e.jsx(F,{title:t("总操作次数","总操作次数"),value:`${h1}`})]}),e.jsxs(be,{children:[e.jsxs(ve,{children:[e.jsx(je,{"aria-hidden":!0,children:e.jsx(K1,{})}),e.jsx(Le,{ref:Y.ref,style:Y.inlineStyle,children:U})]}),e.jsxs(ke,{type:"button","aria-expanded":b,"aria-label":b?t("收起推荐工具与服务","Collapse recommended tools and services"):t("展开推荐工具与服务","Expand recommended tools and services"),onMouseDown:o=>{o.preventDefault()},onClick:()=>a1(o=>!o),children:[e.jsx("span",{children:b?f1:w1}),e.jsx(Se,{"aria-hidden":!0,children:b?e.jsx(I1,{}):e.jsx(F1,{})})]})]}),b?e.jsxs(He,{children:[c1,e.jsx(q1,{title:t("动态 RGB","Dynamic RGB"),desc:t("打破品牌壁垒，实现全桌面灯效联动。像素级多端协同布局，多屏环境光影动态捕捉，自由画布交互调节。","打破品牌壁垒，实现全桌面灯效联动。像素级多端协同布局，多屏环境光影动态捕捉，自由画布交互调节。"),buttonText:t("立即下载","立即下载"),accentText:t("极致光效氛围","极致光效氛围"),logo:e.jsx(qe,{src:L1,alt:""}),onButtonClick:()=>{window.open(H1.dynamicRgbDownloadUrl,"_self")},blue:!0})]}):null]}),e.jsxs(Ve,{children:[e.jsx(Me,{children:e.jsxs($e,{children:[e.jsx(Te,{"aria-hidden":!0,children:e.jsx(D1,{})}),e.jsx(Re,{ref:X.ref,style:X.inlineStyle,children:q})]})}),e.jsx(Ee,{ref:E,children:l.length===0?e.jsxs(Pe,{children:[e.jsx(Be,{"aria-hidden":!0,children:e.jsx(z1,{})}),e.jsx(Ae,{ref:J.ref,style:J.inlineStyle,children:Q})]}):l.map((o,f)=>e.jsx(Y1,{event:o,intervalMs:f<l.length-1?l[f+1].time-o.time:void 0,getString:t},`${o.id}`))})]})]})]})})})}),$&&e.jsx(V1,{onClose:()=>T(!1)})]})},F=({title:t,value:l})=>{const d=p(t,{maxSizePx:28,minSizePx:11,mode:"single-line",lineHeightRatio:1});return e.jsxs(fe,{children:[e.jsx(me,{"aria-hidden":!0,children:e.jsx(Z1,{})}),e.jsx(Ce,{ref:d.ref,style:d.inlineStyle,children:t}),e.jsx(ye,{children:l})]})},Y1=({event:t,intervalMs:l,getString:d})=>{const g=s.useId().replace(/:/g,""),y=t.type==="keydown"?d("按键按下","KeyDown"):d("按键抬起","KeyUp"),w=p(y,{maxSizePx:14,minSizePx:8,mode:"single-line",lineHeightRatio:1.2});return e.jsxs(e.Fragment,{children:[e.jsxs(ze,{children:[e.jsxs(De,{children:[e.jsx(Ke,{children:G1(t.time)}),e.jsx(Fe,{children:t.key})]}),e.jsxs(Ie,{children:[e.jsx(Ze,{"aria-hidden":!0,children:t.type==="keydown"?e.jsx(A1,{clipPathId:g}):e.jsx(B1,{clipPathId:g})}),e.jsx(Ne,{ref:w.ref,style:w.inlineStyle,$type:t.type,children:y})]})]}),l!==void 0&&e.jsxs(We,{children:[e.jsx(_e,{"aria-hidden":!0,children:e.jsx(N1,{})}),`${Math.max(l,0)}${d("毫秒","ms")}`]})]})},q1=({title:t,desc:l,buttonText:d,accentText:g,logo:y,tagText:w,blue:j=!1,onButtonClick:A})=>{const L=p(t,{maxSizePx:20,minSizePx:11,mode:"single-line",lineHeightRatio:1.2}),$=`| ${g}`,T=p($,{maxSizePx:14,minSizePx:9,mode:"single-line",lineHeightRatio:1.2}),m=p(l,{maxSizePx:14,minSizePx:10,mode:"multi-line",lineHeightRatio:26/14}),R=p(d,{maxSizePx:16,minSizePx:10,mode:"single-line",lineHeightRatio:26/16}),b=p(w??"",{maxSizePx:14,minSizePx:9,mode:"single-line",lineHeightRatio:1.2});return e.jsxs(Oe,{$blue:j,children:[w&&e.jsx(Ge,{ref:b.ref,style:b.inlineStyle,children:w}),e.jsxs(Ye,{children:[y,e.jsx(Xe,{ref:L.ref,style:L.inlineStyle,children:t}),e.jsx(Qe,{ref:T.ref,style:T.inlineStyle,$blue:j,children:$})]}),e.jsxs(Ue,{children:[e.jsx(Je,{ref:m.ref,style:m.inlineStyle,children:l}),e.jsx(et,{type:"button",ref:R.ref,style:R.inlineStyle,$blue:j,onClick:A,children:d})]})]})},X1=n.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background: ${i.pageBackground};
  overflow-x: ${({$clipX:t})=>t?"hidden":"visible"};
  overflow-y: auto;
`,Q1=n.div`
  box-sizing: border-box;
  ${({$narrow:t,$stageW:l,$stageH:d})=>t&&l!==void 0&&d!==void 0?`
    width: ${l}px;
    height: ${d}px;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    background: ${i.pageBackground};
  `:`
    width: 100%;
    height: 100%;
    min-height: 0;
  `}
`,J1=n.div`
  box-sizing: border-box;
  ${({$narrow:t,$designWidth:l,$scale:d})=>t?`
    position: absolute;
    top: 0;
    left: 0;
    width: ${l}px;
    transform: scale(${d});
    transform-origin: top left;
  `:`
    width: 100%;
    height: 100%;
    min-height: 0;
  `}
`,ee=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${i.pageBackground};
`,te=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
  flex-shrink: 0;
  background: ${i.headerBackground};
  border-bottom: 1px solid ${i.headerBorderBottom};
  padding: 0 24px;
  box-sizing: border-box;
`,ie=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,ne=n.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,oe=n.span`
  width: 32px;
  height: 32px;
  display: inline-flex;
  flex-shrink: 0;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,le=n.div`
  color: ${i.headerTitle};
  font-size: 24px;
  font-weight: 700;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
`,re=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`,se=n.span`
  width: 24px;
  height: 24px;
  display: inline-flex;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,de=n.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid ${i.resetButtonBorder};
  background: transparent;
  color: ${i.resetButtonText};
  border-radius: 6px;
  padding: 7px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  min-width: 0;
  max-width: min(240px, 40vw);
`,ae=n.span`
  width: 18px;
  height: 18px;
  display: inline-flex;
  flex-shrink: 0;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,ce=n.span`
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
`,xe=n.div`
  display: flex;
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 12px 18px;
  gap: 20px;
  box-sizing: border-box;
`,he=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 14px;
  min-width: 0;
`,pe=n.div`
  background: ${i.keyboardSurfaceBackground};
  border-radius: 8px;
  padding: 12px;
  overflow: hidden;
  flex: 0 0 auto;
`,ue=n.div`
  position: relative;
  width: ${r1}px;
  height: ${M1}px;
`,ge=n.div`
  position: absolute;
  left: ${({$x:t})=>`${t}px`};
  top: ${({$y:t})=>`${t}px`};
  width: ${({$w:t})=>`${t}px`};
  height: ${({$h:t})=>`${t}px`};
  border-radius: 4px;
  background: ${({$state:t})=>t==="pressed"?i.keyBackgroundPressed:t==="active"?i.keyBackgroundActive:i.keyBackgroundDefault};
  color: ${({$state:t})=>t==="default"?i.keyLabelDefault:i.keyLabelHighlight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  user-select: none;
  box-sizing: border-box;
  padding: 0 8px;
  white-space: pre-line;
  overflow: hidden;
`,we=n.div`
  display: flex;
  gap: 12px;
  flex: 0 0 auto;
`,fe=n.div`
  width: 286px;
  height: 164px;
  border-radius: 16px;
  border: 2px solid ${i.metricCardBorder};
  background: ${i.metricCardBackground};
  padding: 24px 22px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`,Ce=n.div`
  color: ${i.metricTitle};
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 54px;
  position: relative;
  z-index: 1;
  max-width: 100%;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
`,ye=n.div`
  color: ${i.metricValue};
  font-size: 46px;
  line-height: 28px;
  font-weight: 600;
  position: relative;
  z-index: 1;
`,me=n.span`
  position: absolute;
  left: 157px;
  top: 60px;
  width: 107px;
  height: 70px;
  z-index: 0;
  pointer-events: none;
  display: block;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,be=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
//   width: 100%;
width: 1160px;
  min-width: 0;
  padding: 0 4px;
  box-sizing: border-box;
  flex: 0 0 auto;
`,ve=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`,ke=n.button`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 3px;
  margin: 0;
  padding: 6px 12.5px;
  border: none;
  border-radius: 22px;
  background: transparent;
  cursor: pointer;
  box-sizing: border-box;
  font-family: var(--font-family-regular);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  white-space: nowrap;
  color: ${i.metricValue};
  max-width: 220px;
  overflow: hidden;

  & > span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    color: ${i.metricTitle};
  }

  &:focus-visible {
    outline: 2px solid ${i.resetButtonBorder};
    outline-offset: 2px;
  }
`,Se=n.span`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,je=n.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Le=n.div`
  color: ${i.adsSectionTitle};
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  white-space: nowrap;
  font-family: var(--font-family-regular);
  min-width: 0;
  overflow: hidden;
  max-width: 100%;
`,He=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  min-width: 0;
  flex: 0 1 auto;
  overflow: hidden;
`,Ve=n.div`
  display: flex;
  flex-direction: column;
  width: ${s1}px;
  min-height: 0;
  align-self: stretch;
  border-radius: 16px;
  background: ${i.rightPanelBackground};
  border: 1px solid ${i.rightPanelBorder};
  overflow: hidden;
  flex-shrink: 0;
`,Me=n.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 50px;
  background: ${i.headerBackground};
  padding: 0 20px;
  box-sizing: border-box;
`,$e=n.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 24px;
  flex: 1;
  min-width: 0;
`,Te=n.span`
  width: 24px;
  height: 18px;
  display: inline-flex;
  flex-shrink: 0;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Re=n.div`
  color: ${i.rightPanelTitle};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-family: var(--font-family-regular);
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
`,Ee=n.div`
  flex: 1 1 0;
  min-height: 0;
  overflow: auto;
  padding: 16px;
  box-sizing: border-box;
`,Pe=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0;
  width: 100%;
  height: 100%;
  gap: 12px;
`,Be=n.span`
  width: 28px;
  height: 28px;
  display: inline-flex;
  opacity: ${i.emptyStateIconOpacity};
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Ae=n.div`
  color: ${i.emptyStateText};
  font-size: 16px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  max-height: 72px;
  overflow: hidden;
  box-sizing: border-box;
`,ze=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${i.streamRowBackground};
  border-radius: 8px;
  padding: 16px 24px;
  margin-bottom: 10px;
  box-sizing: border-box;
  gap: 12px;
  min-width: 0;
`,De=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,Ke=n.div`
  color: ${i.streamTime};
  font-size: 13px;
  flex-shrink: 0;
`,Fe=n.div`
  min-width: 112px;
  max-width: 180px;
  height: 48px;
  border-radius: 8px;
  background: ${i.streamKeyPillBackground};
  color: ${i.streamKeyPillText};
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ie=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 1;
  min-width: 0;
  justify-content: flex-end;
`,Ze=n.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Ne=n.div`
  color: ${({$type:t})=>t==="keydown"?i.streamEventKeyDown:i.streamEventKeyUp};
  font-size: 14px;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-align: right;
`,We=n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${i.streamIntervalText};
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  font-family: var(--font-family-regular);
  height: 20px;
  white-space: nowrap;
  margin: 0 0 12px 8px;
`,_e=n.span`
  width: 12px;
  height: 12px;
  display: inline-flex;
  flex-shrink: 0;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,Oe=n.div`
  width: 100%;
  max-width: 536px;
  flex: 1 1 280px;
  min-width: 0;
  height: 168px;
  border-radius: 16px;
  border: 2px solid ${({$blue:t})=>t?i.adCardBorderBlue:i.adCardBorderOrange};
  background: ${i.adCardBackground};
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`,Ge=n.div`
  position: absolute;
  right: 0;
  top: 0;
  background: ${i.adTagBackground};
  color: ${i.adTagText};
  font-size: 14px;
  padding: 7px 16px;
  border-radius: 2px 14px 2px 14px;
  max-width: calc(100% - 24px);
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
`,Ue=n.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  gap: 12px 16px;
  min-width: 0;
`,Ye=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  min-width: 0;
  flex-wrap: nowrap;
`,qe=n.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
`,Xe=n.div`
  color: ${i.adTitle};
  font-size: 20px;
  font-weight: 700;
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
`,Qe=n.div`
  color: ${({$blue:t})=>t?i.adAccentBlue:i.adAccentOrange};
  font-size: 14px;
  margin-left: 4px;
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
`,Je=n.div`
  color: ${i.adDescription};
  font-size: 14px;
  line-height: 26px;
  flex: 1 1 200px;
  min-width: 0;
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: break-word;
  box-sizing: border-box;
  max-height: 52px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${i.metricValue} ${i.adCardBackground};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${i.adCardBackground};
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${i.metricValue};
    border-radius: 999px;
    border: 1px solid ${i.adCardBackground};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${i.metricTitle};
  }
`,et=n.button`
  flex: 0 1 auto;
  margin-left: auto;
  border: none;
  color: ${i.adButtonText};
  cursor: pointer;
  border-radius: 8px;
  padding: 6px 16px;
  font-size: 16px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  line-height: 26px;
  word-wrap: break-word;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 0;
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  background: ${({$blue:t})=>t?i.adButtonGradientBlue:i.adButtonGradientOrange};
  transition: background 150ms ease;

  &:hover {
    background: ${({$blue:t})=>t?i.adButtonGradientBlueHover:i.adButtonGradientOrangeHover};
  }
`;export{it as KeyboardTesting};
