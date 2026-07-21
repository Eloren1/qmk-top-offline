import{as as Gt,bA as zn,bB as jt,bC as At,bD as dt,bE as it,bF as ve,bG as Gn,bH as Te,bI as Xn,z as ie,au as Ve,r as u,g as Mt,j as n,bu as xs,t as En,s as h,$ as bt,u as he,ao as pt,b2 as vn,e as je}from"./index.21fdd5d3.js";var de={},Yn={},qt={};Object.defineProperty(qt,"__esModule",{value:!0});qt.loop=qt.conditional=qt.parse=void 0;var ms=function o(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(c){return o(t,c,i,s)});else if(typeof e=="function")e(t,i,s,o);else{var a=Object.keys(e)[0];Array.isArray(e[a])?(s[a]={},o(t,e[a],i,s[a])):s[a]=e[a](t,i,s,o)}return i};qt.parse=ms;var bs=function(t,e){return function(i,s,a,c){e(i,s,a)&&c(i,t,s,a)}};qt.conditional=bs;var ys=function(t,e){return function(i,s,a,c){for(var r=[],l=i.pos;e(i,s,a);){var d={};if(c(i,t,s,d),i.pos===l)break;l=i.pos,r.push(d)}return r}};qt.loop=ys;var mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.readBits=mt.readArray=mt.readUnsigned=mt.readString=mt.peekBytes=mt.readBytes=mt.peekByte=mt.readByte=mt.buildStream=void 0;var vs=function(t){return{data:t,pos:0}};mt.buildStream=vs;var Kn=function(){return function(t){return t.data[t.pos++]}};mt.readByte=Kn;var ws=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+t]}};mt.peekByte=ws;var Xe=function(t){return function(e){return e.data.subarray(e.pos,e.pos+=t)}};mt.readBytes=Xe;var Ss=function(t){return function(e){return e.data.subarray(e.pos,e.pos+t)}};mt.peekBytes=Ss;var Cs=function(t){return function(e){return Array.from(Xe(t)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};mt.readString=Cs;var ks=function(t){return function(e){var i=Xe(2)(e);return t?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};mt.readUnsigned=ks;var Es=function(t,e){return function(i,s,a){for(var c=typeof e=="function"?e(i,s,a):e,r=Xe(t),l=new Array(c),d=0;d<c;d++)l[d]=r(i);return l}};mt.readArray=Es;var Ds=function(t,e,i){for(var s=0,a=0;a<i;a++)s+=t[e+a]&&Math.pow(2,i-a-1);return s},Rs=function(t){return function(e){for(var i=Kn()(e),s=new Array(8),a=0;a<8;a++)s[7-a]=!!(i&1<<a);return Object.keys(t).reduce(function(c,r){var l=t[r];return l.length?c[r]=Ds(s,l.index,l.length):c[r]=s[l.index],c},{})}};mt.readBits=Rs;(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=qt,e=mt,i={blocks:function(m){for(var b=0,y=[],w=m.data.length,A=0,$=(0,e.readByte)()(m);$!==b&&$;$=(0,e.readByte)()(m)){if(m.pos+$>=w){var Q=w-m.pos;y.push((0,e.readBytes)(Q)(m)),A+=Q;break}y.push((0,e.readBytes)($)(m)),A+=$}for(var S=new Uint8Array(A),V=0,ot=0;ot<y.length;ot++)S.set(y[ot],V),V+=y[ot].length;return S}},s=(0,t.conditional)({gce:[{codes:(0,e.readBytes)(2)},{byteSize:(0,e.readByte)()},{extras:(0,e.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,e.readUnsigned)(!0)},{transparentColorIndex:(0,e.readByte)()},{terminator:(0,e.readByte)()}]},function(C){var m=(0,e.peekBytes)(2)(C);return m[0]===33&&m[1]===249}),a=(0,t.conditional)({image:[{code:(0,e.readByte)()},{descriptor:[{left:(0,e.readUnsigned)(!0)},{top:(0,e.readUnsigned)(!0)},{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{lct:(0,e.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,e.readArray)(3,function(C,m,b){return Math.pow(2,b.descriptor.lct.size+1)})},function(C,m,b){return b.descriptor.lct.exists}),{data:[{minCodeSize:(0,e.readByte)()},i]}]},function(C){return(0,e.peekByte)()(C)===44}),c=(0,t.conditional)({text:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{preData:function(m,b,y){return(0,e.readBytes)(y.text.blockSize)(m)}},i]},function(C){var m=(0,e.peekBytes)(2)(C);return m[0]===33&&m[1]===1}),r=(0,t.conditional)({application:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{id:function(m,b,y){return(0,e.readString)(y.blockSize)(m)}},i]},function(C){var m=(0,e.peekBytes)(2)(C);return m[0]===33&&m[1]===255}),l=(0,t.conditional)({comment:[{codes:(0,e.readBytes)(2)},i]},function(C){var m=(0,e.peekBytes)(2)(C);return m[0]===33&&m[1]===254}),d=[{header:[{signature:(0,e.readString)(3)},{version:(0,e.readString)(3)}]},{lsd:[{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{gct:(0,e.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,e.readByte)()},{pixelAspectRatio:(0,e.readByte)()}]},(0,t.conditional)({gct:(0,e.readArray)(3,function(C,m){return Math.pow(2,m.lsd.gct.size+1)})},function(C,m){return m.lsd.gct.exists}),{frames:(0,t.loop)([s,r,l,a,c],function(C){var m=(0,e.peekByte)()(C);return m===33||m===44})}],f=d;o.default=f})(Yn);var Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.deinterlace=void 0;var Ts=function(t,e){for(var i=new Array(t.length),s=t.length/e,a=function(m,b){var y=t.slice(b*e,(b+1)*e);i.splice.apply(i,[m*e,e].concat(y))},c=[0,4,2,1],r=[8,8,4,2],l=0,d=0;d<4;d++)for(var f=c[d];f<s;f+=r[d])a(f,l),l++;return i};Ye.deinterlace=Ts;var Ke={};Object.defineProperty(Ke,"__esModule",{value:!0});Ke.lzw=void 0;var Ms=function(t,e,i){var s=4096,a=-1,c=i,r,l,d,f,C,m,b,st,y,w,ot,A,ct,H,M,J,$=new Array(i),Q=new Array(s),S=new Array(s),V=new Array(s+1);for(A=t,l=1<<A,C=l+1,r=l+2,b=a,f=A+1,d=(1<<f)-1,y=0;y<l;y++)Q[y]=0,S[y]=y;var ot,st,ct,H,J,M;for(ot=st=ct=H=J=M=0,w=0;w<c;){if(H===0){if(st<f){ot+=e[M]<<st,st+=8,M++;continue}if(y=ot&d,ot>>=f,st-=f,y>r||y==C)break;if(y==l){f=A+1,d=(1<<f)-1,r=l+2,b=a;continue}if(b==a){V[H++]=S[y],b=y,ct=y;continue}for(m=y,y==r&&(V[H++]=ct,y=b);y>l;)V[H++]=S[y],y=Q[y];ct=S[y]&255,V[H++]=ct,r<s&&(Q[r]=b,S[r]=ct,r++,!(r&d)&&r<s&&(f++,d+=r)),b=m}H--,$[J++]=V[H],w++}for(w=J;w<c;w++)$[w]=0;return $};Ke.lzw=Ms;Object.defineProperty(de,"__esModule",{value:!0});var Zn=de.decompressFrames=de.decompressFrame=qn=de.parseGIF=void 0,js=$s(Yn),As=qt,_s=mt,Is=Ye,Bs=Ke;function $s(o){return o&&o.__esModule?o:{default:o}}var Fs=function(t){var e=new Uint8Array(t);return(0,As.parse)((0,_s.buildStream)(e),js.default)},qn=de.parseGIF=Fs,Ps=function(t){for(var e=t.pixels.length,i=new Uint8ClampedArray(e*4),s=0;s<e;s++){var a=s*4,c=t.pixels[s],r=t.colorTable[c]||[0,0,0];i[a]=r[0],i[a+1]=r[1],i[a+2]=r[2],i[a+3]=c!==t.transparentIndex?255:0}return i},Qn=function(t,e,i){if(t.image){var s=t.image,a=s.descriptor.width*s.descriptor.height,c=(0,Bs.lzw)(s.data.minCodeSize,s.data.blocks,a);s.descriptor.lct.interlaced&&(c=(0,Is.deinterlace)(c,s.descriptor.width));var r={pixels:c,dims:{top:t.image.descriptor.top,left:t.image.descriptor.left,width:t.image.descriptor.width,height:t.image.descriptor.height}};return s.descriptor.lct&&s.descriptor.lct.exists?r.colorTable=s.lct:r.colorTable=e,t.gce&&(r.delay=(t.gce.delay||10)*10,r.disposalType=t.gce.extras.disposal,t.gce.extras.transparentColorGiven&&(r.transparentIndex=t.gce.transparentColorIndex)),i&&(r.patch=Ps(r)),r}};de.decompressFrame=Qn;var Ls=function(t,e){return t.frames.filter(function(i){return i.image}).map(function(i){return Qn(i,t.gct,e)})};Zn=de.decompressFrames=Ls;class Hs{constructor(){this.video=document.createElement("video"),this.video.muted=!0,this.video.loop=!0,this.canvas.style.position="absolute",this.canvas.style.left="0",this.canvas.style.top="0",this.canvas.style.width="100%",this.canvas.style.height="100%"}canvas=document.createElement("canvas");ctx=this.canvas.getContext("2d",{willReadFrequently:!0});video=document.createElement("video");scale=1;dw=0;dh=0;dx=0;dy=0;setScale=t=>{this.scale=t;const e=this.canvas.clientWidth,i=this.canvas.clientHeight;this.dw=e*t,this.dh=i*t,this.dx=(e-this.dw)/2,this.dy=(i-this.dh)/2};init(){this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.setScale(this.scale)}___drawDebugRange=()=>{};testTimer=void 0;testDirection="col";testDraw=()=>{this.testTimer!==void 0&&clearInterval(this.testTimer);const t=80;let e=this.canvas.width-t,i=-1;const s=5;this.testTimer=setInterval(()=>{this.ctx!==null&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#f00",this.ctx.fillRect(e,0,t,this.canvas.height),e+=i*s,e+t>=this.canvas.width&&(e=this.canvas.width-t,i=-1),e<=0&&(e=0,i=1))},30)};colorMode={type:"default"};colorPhase=0;colorSpeed=1;c1=255;c2=0;c3=0;updateColorCycle(){if(this.ctx===null)return;if(this.colorMode.type==="custom"){this.ctx.fillStyle=this.colorMode.color;return}switch(this.colorPhase){case 0:this.c1=Math.max(0,this.c1-this.colorSpeed),this.c2=Math.min(255,this.c2+this.colorSpeed),this.c2>=255&&(this.colorPhase=1);break;case 1:this.c2=Math.max(0,this.c2-this.colorSpeed),this.c3=Math.min(255,this.c3+this.colorSpeed),this.c3>=255&&(this.colorPhase=2);break;case 2:this.c3=Math.max(0,this.c3-this.colorSpeed),this.c1=Math.min(255,this.c1+this.colorSpeed),this.c1>=255&&(this.colorPhase=0);break}const t=`rgb(${this.c1}, ${this.c2}, ${this.c3})`,e=`rgb(${this.c2}, ${this.c3}, ${this.c1})`,i=`rgb(${this.c3}, ${this.c1}, ${this.c2})`,s=this.ctx.createLinearGradient(this.dx,this.dy+this.dh/2,this.dx+this.dw,this.dy+this.dh/2);s.addColorStop(0,t),s.addColorStop(.5,e),s.addColorStop(1,i),this.ctx.fillStyle=s}setColorSpeed(t){this.colorSpeed=Math.max(1,Math.min(10,t))}resetColorCycle(){this.colorPhase=0,this.c1=255,this.c2=0,this.c3=0}drawSpectrum(t){if(this.ctx===null)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.___drawDebugRange();const e=t.slice(0,29),i=t.slice(29,33).reverse(),s=t.slice(33,37).reverse(),a=t.slice(37,t.length),c=[...i,...e,...a,...s],r=this.dw/t.length;this.updateColorCycle();for(let l=0;l<c.length;l++){const d=l*r+this.dx,C=c[l]*this.dh;this.ctx.fillRect(d,this.dh-C+this.dy,r,C)}}drawCircle(t){if(this.ctx===null)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.___drawDebugRange(),this.updateColorCycle();const e=t.filter(a=>a>0),s=Gt(e)/e.length*2*this.dw/2;this.ctx.beginPath(),this.ctx.arc(this.dw/2+this.dx,this.dh/2+this.dy,s,0,2*Math.PI),this.ctx.fill()}drawTripleCircle(t){if(this.ctx===null)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.___drawDebugRange(),this.updateColorCycle();const e=t.slice(0,8).filter(m=>m>0),i=t.slice(9,17).filter(m=>m>0),s=t.slice(36,41).filter(m=>m>0),a=Gt(e)/e.length,c=Gt(i)/i.length,r=Gt(s)/s.length,l=this.dw/3;this.ctx.beginPath();const d=Math.min(l/2,a*l/2*1.5);this.ctx.arc(this.dx+l/2+l,this.dy+this.dh/2,d,0,2*Math.PI),this.ctx.fill(),this.ctx.beginPath();const f=Math.min(l/2,c*l/2*1.2);this.ctx.arc(this.dx+l/2,this.dy+this.dh/2,f,0,2*Math.PI),this.ctx.fill(),this.ctx.beginPath();const C=Math.min(l/2,r*l/2*1.5);this.ctx.arc(this.dx+l/2+l*2,this.dy+this.dh/2,C,0,2*Math.PI),this.ctx.fill()}drawMatrix(t){if(this.ctx===null)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.___drawDebugRange(),this.updateColorCycle();const e=t.filter(s=>s>0),i=Math.min(1,Gt(e)/e.length*2.5);this.ctx.fillRect(this.dx,this.dy,this.dw*i,this.dh)}drawTriangle(t){if(this.ctx===null)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.___drawDebugRange(),this.updateColorCycle();const e=t.slice(0,8).filter(l=>l>0),i=t.slice(9,17).filter(l=>l>0),s=t.slice(36,41).filter(l=>l>0),a=Gt(e)/e.length,c=Gt(i)/i.length,r=Gt(s)/s.length;this.ctx.beginPath(),this.ctx.moveTo(this.dx,this.dy+this.dh),this.ctx.lineTo(this.dx+this.dw/3,this.dy+this.dh),this.ctx.lineTo(this.dx+this.dw/3/2,this.dy+this.dh-this.dh*a*.8),this.ctx.moveTo(this.dx+this.dw/3,this.dy+this.dh),this.ctx.lineTo(this.dx+this.dw*(2/3),this.dy+this.dh),this.ctx.lineTo(this.dx+this.dw/2,this.dy+this.dh-this.dh*c*1.3),this.ctx.moveTo(this.dx+this.dw*(2/3),this.dy+this.dh),this.ctx.lineTo(this.dx+this.dw,this.dy+this.dh),this.ctx.lineTo(this.dx+this.dw*(2/3)+this.dw/3/2,this.dy+this.dh-this.dh*r*1.5),this.ctx.closePath(),this.ctx.fill()}drawJungle(t){if(this.ctx===null)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.___drawDebugRange(),this.updateColorCycle();const e=new Array;for(let a=0;a<t.length;a+=2){const c=t.slice(a,a+2);e.push(Gt(c)/c.length)}const i=this.dw/e.length;this.ctx.beginPath();const s=e.length;for(let a=0;a<s;a++){const c=e[a],r=this.dx+this.dw*(a/s),l=this.dy+this.dh;this.ctx.moveTo(r,l),this.ctx.lineTo(r+i,l),this.ctx.lineTo(r+i/2,l-this.dh*c)}this.ctx.closePath(),this.ctx.fill()}calculateDrawRegion(t,e){const i=t/e,s=this.dw/this.dh;let a=this.dw,c=this.dh;i>s?c=this.dw/i:a=this.dh*i;const r=this.dx+(this.dw-a)/2,l=this.dy+(this.dh-c)/2;return{drawX:r,drawY:l,drawW:a,drawH:c}}timer=void 0;drawVideo(t){this.timer!==void 0&&clearInterval(this.timer),this.ctx!==null&&(this.video.src=URL.createObjectURL(t),this.video.play(),this.video.onloadedmetadata=()=>{const e=this.video.videoWidth,i=this.video.videoHeight,{drawX:s,drawY:a,drawW:c,drawH:r}=this.calculateDrawRegion(e,i);this.timer=setInterval(()=>{this.ctx!==null&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.___drawDebugRange(),this.ctx.drawImage(this.video,0,0,e,i,s,a,c,r))},30)})}tempCanvas=document.createElement("canvas");tempCtx=this.tempCanvas.getContext("2d");gifCanvas=document.createElement("canvas");gifCtx=this.gifCanvas.getContext("2d");async drawGif(t){if(this.timer!==void 0&&clearInterval(this.timer),this.gifCtx===null)return;const e=await t.arrayBuffer(),i=qn(e),s=Zn(i,!0);if(s.length===0)return;const a=s.map(w=>w.delay),c=Gt([...a])/a.length,r=i.lsd.width,l=i.lsd.height;this.gifCanvas.width=r,this.gifCanvas.height=l;const{drawX:d,drawY:f,drawW:C,drawH:m}=this.calculateDrawRegion(r,l);let b=0,y=0;this.timer=setInterval(()=>{if(this.ctx===null||this.gifCtx===null||this.tempCtx===null)return;b>=s.length&&(b=0,this.gifCtx.clearRect(0,0,r,l),y=0);const w=s[b];if(!w||!w.patch){b++;return}if(b>0&&y===2){const $=s[b-1];this.gifCtx.clearRect($.dims.left,$.dims.top,$.dims.width,$.dims.height)}this.tempCanvas.width=w.dims.width,this.tempCanvas.height=w.dims.height;const A=this.tempCtx.createImageData(w.dims.width,w.dims.height);A.data.set(w.patch),this.tempCtx.putImageData(A,0,0),this.gifCtx.drawImage(this.tempCanvas,w.dims.left,w.dims.top),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.___drawDebugRange(),this.ctx.drawImage(this.gifCanvas,d,f,C,m),y=w.disposalType,b++},c)}imageElement=new Image;drawImage(t){this.stopDraw(),this.imageElement.src=URL.createObjectURL(t),this.imageElement.onload=()=>{const e=this.imageElement.width,i=this.imageElement.height,{drawX:s,drawY:a,drawW:c,drawH:r}=this.calculateDrawRegion(e,i);this.ctx!==null&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.___drawDebugRange(),this.ctx.drawImage(this.imageElement,s,a,c,r))}}stopDraw(){this.timer!==void 0&&clearInterval(this.timer),this.video.pause(),this.video.src=""}}const yt=new Hs;class Ns extends jt{constructor(){super("rhythm_analysis.AudioDevice",[{no:1,name:"id",kind:"scalar",T:9},{no:2,name:"name",kind:"scalar",T:9}])}create(t){const e=globalThis.Object.create(this.messagePrototype);return e.id="",e.name="",t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){case 1:a.id=t.string();break;case 2:a.name=t.string();break;default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){t.id!==""&&e.tag(1,it.LengthDelimited).string(t.id),t.name!==""&&e.tag(2,it.LengthDelimited).string(t.name);let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const Je=new Ns;class Us extends jt{constructor(){super("rhythm_analysis.ListAudioDevicesRequest",[])}create(t){const e=globalThis.Object.create(this.messagePrototype);return t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const Jn=new Us;class Os extends jt{constructor(){super("rhythm_analysis.ListAudioDevicesResponse",[{no:1,name:"devices",kind:"message",repeat:2,T:()=>Je}])}create(t){const e=globalThis.Object.create(this.messagePrototype);return e.devices=[],t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){case 1:a.devices.push(Je.internalBinaryRead(t,t.uint32(),i));break;default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){for(let a=0;a<t.devices.length;a++)Je.internalBinaryWrite(t.devices[a],e.tag(1,it.LengthDelimited).fork(),i).join();let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const Ws=new Os;class Vs extends jt{constructor(){super("rhythm_analysis.GetConfigurationRequest",[])}create(t){const e=globalThis.Object.create(this.messagePrototype);return t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const ts=new Vs;class zs extends jt{constructor(){super("rhythm_analysis.Configuration",[{no:1,name:"audio_device_id",kind:"scalar",opt:!0,T:9},{no:2,name:"num_bands",kind:"scalar",opt:!0,T:13},{no:3,name:"fft_size",kind:"scalar",opt:!0,T:13},{no:4,name:"gain",kind:"scalar",opt:!0,T:2},{no:5,name:"tilt_factor",kind:"scalar",opt:!0,T:2},{no:6,name:"contrast_factor",kind:"scalar",opt:!0,T:2},{no:7,name:"release_factor",kind:"scalar",opt:!0,T:2},{no:8,name:"min_db",kind:"scalar",opt:!0,T:2},{no:9,name:"max_db",kind:"scalar",opt:!0,T:2},{no:10,name:"attack_frames",kind:"scalar",opt:!0,T:5}])}create(t){const e=globalThis.Object.create(this.messagePrototype);return t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){case 1:a.audioDeviceId=t.string();break;case 2:a.numBands=t.uint32();break;case 3:a.fftSize=t.uint32();break;case 4:a.gain=t.float();break;case 5:a.tiltFactor=t.float();break;case 6:a.contrastFactor=t.float();break;case 7:a.releaseFactor=t.float();break;case 8:a.minDb=t.float();break;case 9:a.maxDb=t.float();break;case 10:a.attackFrames=t.int32();break;default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){t.audioDeviceId!==void 0&&e.tag(1,it.LengthDelimited).string(t.audioDeviceId),t.numBands!==void 0&&e.tag(2,it.Varint).uint32(t.numBands),t.fftSize!==void 0&&e.tag(3,it.Varint).uint32(t.fftSize),t.gain!==void 0&&e.tag(4,it.Bit32).float(t.gain),t.tiltFactor!==void 0&&e.tag(5,it.Bit32).float(t.tiltFactor),t.contrastFactor!==void 0&&e.tag(6,it.Bit32).float(t.contrastFactor),t.releaseFactor!==void 0&&e.tag(7,it.Bit32).float(t.releaseFactor),t.minDb!==void 0&&e.tag(8,it.Bit32).float(t.minDb),t.maxDb!==void 0&&e.tag(9,it.Bit32).float(t.maxDb),t.attackFrames!==void 0&&e.tag(10,it.Varint).int32(t.attackFrames);let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const xn=new zs;class Gs extends jt{constructor(){super("rhythm_analysis.ConfigureResponse",[{no:1,name:"success",kind:"scalar",T:8},{no:2,name:"message",kind:"scalar",T:9}])}create(t){const e=globalThis.Object.create(this.messagePrototype);return e.success=!1,e.message="",t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){case 1:a.success=t.bool();break;case 2:a.message=t.string();break;default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){t.success!==!1&&e.tag(1,it.Varint).bool(t.success),t.message!==""&&e.tag(2,it.LengthDelimited).string(t.message);let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const Xs=new Gs;class Ys extends jt{constructor(){super("rhythm_analysis.StreamDataRequest",[])}create(t){const e=globalThis.Object.create(this.messagePrototype);return t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const es=new Ys;class Ks extends jt{constructor(){super("rhythm_analysis.StreamDataResponse",[{no:1,name:"spectrum_data",kind:"scalar",repeat:1,T:2}])}create(t){const e=globalThis.Object.create(this.messagePrototype);return e.spectrumData=[],t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){case 1:if(l===it.LengthDelimited)for(let C=t.int32()+t.pos;t.pos<C;)a.spectrumData.push(t.float());else a.spectrumData.push(t.float());break;default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){if(t.spectrumData.length){e.tag(1,it.LengthDelimited).fork();for(let a=0;a<t.spectrumData.length;a++)e.float(t.spectrumData[a]);e.join()}let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const Zs=new Ks,tn=new zn("rhythm_analysis.RhythmAnalysisService",[{name:"ListAudioDevices",options:{},I:Jn,O:Ws},{name:"GetConfiguration",options:{},I:ts,O:xn},{name:"Configure",options:{},I:xn,O:Xs},{name:"StreamData",serverStreaming:!0,options:{},I:es,O:Zs}]);class qs{constructor(t){this._transport=t}typeName=tn.typeName;methods=tn.methods;options=tn.options;listAudioDevices(t,e){const i=this.methods[0],s=this._transport.mergeOptions(e);return ve("unary",this._transport,i,s,t)}getConfiguration(t,e){const i=this.methods[1],s=this._transport.mergeOptions(e);return ve("unary",this._transport,i,s,t)}configure(t,e){const i=this.methods[2],s=this._transport.mergeOptions(e);return ve("unary",this._transport,i,s,t)}streamData(t,e){const i=this.methods[3],s=this._transport.mergeOptions(e);return ve("serverStreaming",this._transport,i,s,t)}}class wn{static instance;static getInstance(){return this.instance||(this.instance=new wn),this.instance}PORT=3839;ADDR=`http://127.0.0.1:${this.PORT}`;TRANSPORT=new Gn({baseUrl:this.ADDR});CLIENT=new qs(this.TRANSPORT);constructor(){}getListAudioDevices=()=>new Promise((t,e)=>{const i=Jn.create({});this.CLIENT.listAudioDevices(i).then(s=>{t(s.response.devices)}).catch(s=>{Te(s),t([])})});configuration=void 0;getConfiguration=()=>new Promise((t,e)=>{const i=ts.create({});this.CLIENT.getConfiguration(i).then(s=>{this.configuration=s.response,t(s.response)}).catch(s=>{Te(s),this.configuration=void 0,t(void 0)})});setConfiguration=t=>new Promise((e,i)=>{const s=xn.create({...t});this.CLIENT.configure(s).then(a=>{this.configuration=t,e(a.response.success)}).catch(a=>{Te(a),e(!1)})});getStream=t=>{const e=es.create();return this.CLIENT.streamData(e,t)}}const $e=wn.getInstance();class Qs{getAudioDevices=async()=>await $e.getListAudioDevices();startPlugin=async()=>{const{app:t}=window.require("@electron/remote"),e=window.require("path"),i=t.getAppPath(),s=e.join(i,"iot_manager","rhythm_service.exe");return await Xn.openExe(s,{detached:!1,startLogListener:!1})};playMode="spectrum";playStatus="stopped";abortController=null;streamTimer=void 0;start=async()=>{if(this.playStatus!=="stopped")return;this.streamTimer!==void 0&&clearInterval(this.streamTimer),this.streamTimer=setTimeout(()=>{this.stop()},1e3*3),this.playStatus="starting",this.abortController!==null&&(this.abortController.abort(),this.abortController=null),this.abortController=new AbortController;const t=$e.getStream({abort:this.abortController.signal});t.responses.onMessage(e=>{this.streamTimer!==void 0&&clearInterval(this.streamTimer),this.playStatus="started",this.playMode==="spectrum"&&yt.drawSpectrum(e.spectrumData),this.playMode==="circle"&&yt.drawCircle(e.spectrumData),this.playMode==="tri-cicle"&&yt.drawTripleCircle(e.spectrumData),this.playMode==="matrix"&&yt.drawMatrix(e.spectrumData),this.playMode==="triangle"&&yt.drawTriangle(e.spectrumData)}),t.responses.onError(e=>{this.streamTimer!==void 0&&clearInterval(this.streamTimer),this.stop()})};stop=()=>{this.playStatus==="started"&&(this.abortController!==null&&(this.abortController.abort(),this.abortController=null),this.playStatus="stopped")};control=async()=>{this.playStatus!=="starting"&&(this.playStatus==="started"?this.stop():await this.start())};startPluginIfNotStarted=async()=>{if(this.playStatus!=="stopped")return!1;const[t,e]=await ie(this.startPlugin());return e?!1:t?(await Ve(100),await this.start(),!0):(alert("Failed to start rhythm plugin"),!1)};getConfiguration=async()=>{const[t,e]=await ie($e.getConfiguration());return e?null:t};setConfiguration=async t=>{const[e,i]=await ie($e.setConfiguration(t));return i?!1:e??!1}}const Nt=new Qs;class Sn{static instance;static getInstance(){return this.instance===void 0&&(this.instance=new Sn),this.instance}canvas=document.createElement("canvas");ctx=this.canvas.getContext("2d",{willReadFrequently:!0});COLUMNS=21;ROWS=6;constructor(){this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.position="absolute",this.canvas.style.top="0px",this.canvas.style.left="0px",this.canvas.width=this.COLUMNS,this.canvas.height=this.ROWS}drawScreen(t){if(this.ctx===null)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const e=this.canvas.width/this.COLUMNS,i=this.canvas.height/this.ROWS;for(let s=0;s<this.ROWS;s++)for(let a=0;a<this.COLUMNS;a++){const c=a+s*this.COLUMNS,r=t.slice(c*4,c*4+4),[l,d,f,C=255]=r;this.ctx.fillStyle=`rgba(${l}, ${d}, ${f}, ${C/255})`,this.ctx.fillRect(a*e,s*i,e,i)}}}const Js=Sn.getInstance();class ti extends jt{constructor(){super("screen.StreamScreenThumbnailsRequest",[{no:1,name:"screen_id",kind:"scalar",T:13},{no:2,name:"x",kind:"scalar",T:5},{no:3,name:"y",kind:"scalar",T:5},{no:4,name:"width",kind:"scalar",T:13},{no:5,name:"height",kind:"scalar",T:13},{no:6,name:"thumbnail_width",kind:"scalar",T:13},{no:7,name:"thumbnail_height",kind:"scalar",T:13}])}create(t){const e=globalThis.Object.create(this.messagePrototype);return e.screenId=0,e.x=0,e.y=0,e.width=0,e.height=0,e.thumbnailWidth=0,e.thumbnailHeight=0,t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){case 1:a.screenId=t.uint32();break;case 2:a.x=t.int32();break;case 3:a.y=t.int32();break;case 4:a.width=t.uint32();break;case 5:a.height=t.uint32();break;case 6:a.thumbnailWidth=t.uint32();break;case 7:a.thumbnailHeight=t.uint32();break;default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){t.screenId!==0&&e.tag(1,it.Varint).uint32(t.screenId),t.x!==0&&e.tag(2,it.Varint).int32(t.x),t.y!==0&&e.tag(3,it.Varint).int32(t.y),t.width!==0&&e.tag(4,it.Varint).uint32(t.width),t.height!==0&&e.tag(5,it.Varint).uint32(t.height),t.thumbnailWidth!==0&&e.tag(6,it.Varint).uint32(t.thumbnailWidth),t.thumbnailHeight!==0&&e.tag(7,it.Varint).uint32(t.thumbnailHeight);let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const mn=new ti;class ei extends jt{constructor(){super("screen.ThumbnailResponse",[{no:1,name:"pixels",kind:"scalar",T:12}])}create(t){const e=globalThis.Object.create(this.messagePrototype);return e.pixels=new Uint8Array(0),t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){case 1:a.pixels=t.bytes();break;default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){t.pixels.length&&e.tag(1,it.LengthDelimited).bytes(t.pixels);let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const ni=new ei;class si extends jt{constructor(){super("screen.ListScreensRequest",[])}create(t){const e=globalThis.Object.create(this.messagePrototype);return t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const ns=new si;class ii extends jt{constructor(){super("screen.Screen",[{no:1,name:"id",kind:"scalar",T:13},{no:2,name:"name",kind:"scalar",T:9},{no:3,name:"width",kind:"scalar",T:13},{no:4,name:"height",kind:"scalar",T:13},{no:5,name:"is_primary",kind:"scalar",T:8}])}create(t){const e=globalThis.Object.create(this.messagePrototype);return e.id=0,e.name="",e.width=0,e.height=0,e.isPrimary=!1,t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){case 1:a.id=t.uint32();break;case 2:a.name=t.string();break;case 3:a.width=t.uint32();break;case 4:a.height=t.uint32();break;case 5:a.isPrimary=t.bool();break;default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){t.id!==0&&e.tag(1,it.Varint).uint32(t.id),t.name!==""&&e.tag(2,it.LengthDelimited).string(t.name),t.width!==0&&e.tag(3,it.Varint).uint32(t.width),t.height!==0&&e.tag(4,it.Varint).uint32(t.height),t.isPrimary!==!1&&e.tag(5,it.Varint).bool(t.isPrimary);let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const en=new ii;class oi extends jt{constructor(){super("screen.ListScreensResponse",[{no:1,name:"screens",kind:"message",repeat:2,T:()=>en}])}create(t){const e=globalThis.Object.create(this.messagePrototype);return e.screens=[],t!==void 0&&At(this,e,t),e}internalBinaryRead(t,e,i,s){let a=s??this.create(),c=t.pos+e;for(;t.pos<c;){let[r,l]=t.tag();switch(r){case 1:a.screens.push(en.internalBinaryRead(t,t.uint32(),i));break;default:let d=i.readUnknownField;if(d==="throw")throw new globalThis.Error(`Unknown field ${r} (wire type ${l}) for ${this.typeName}`);let f=t.skip(l);d!==!1&&(d===!0?dt.onRead:d)(this.typeName,a,r,l,f)}}return a}internalBinaryWrite(t,e,i){for(let a=0;a<t.screens.length;a++)en.internalBinaryWrite(t.screens[a],e.tag(1,it.LengthDelimited).fork(),i).join();let s=i.writeUnknownFields;return s!==!1&&(s==!0?dt.onWrite:s)(this.typeName,t,e),e}}const ri=new oi,nn=new zn("screen.ScreenService",[{name:"StreamScreenThumbnails",serverStreaming:!0,options:{},I:mn,O:ni},{name:"ListScreens",options:{},I:ns,O:ri}]);class ai{constructor(t){this._transport=t}typeName=nn.typeName;methods=nn.methods;options=nn.options;streamScreenThumbnails(t,e){const i=this.methods[0],s=this._transport.mergeOptions(e);return ve("serverStreaming",this._transport,i,s,t)}listScreens(t,e){const i=this.methods[1],s=this._transport.mergeOptions(e);return ve("unary",this._transport,i,s,t)}}class ci{static instance;PORT=3840;ADDR=`http://127.0.0.1:${this.PORT}`;TRANSPORT=new Gn({baseUrl:this.ADDR});CLIENT=new ai(this.TRANSPORT);constructor(){}static getInstance(){return this.instance||(this.instance=new this),this.instance}getListScreens=()=>new Promise((t,e)=>{const i=ns.create({});this.CLIENT.listScreens(i).then(s=>{const a=s.response.screens;t(a)}).catch(s=>{Te(s),t([])})});getStreamScreenThumbnails=(t,e)=>{const i=mn.create(t);return this.CLIENT.streamScreenThumbnails(i,{abort:e?.signal})};outputs=[];COLUMNS=21;ROWS=6;GAP=2;abortController=null;startStreamScreenThumbnails=t=>{if(this.abortController!==null)return;this.abortController=new AbortController;const e=mn.create(t),i=this.CLIENT.streamScreenThumbnails(e,{abort:this.abortController.signal}),s=c=>{const[r,l,d,f]=c,C=f/255,m=Math.round(r*C),b=Math.round(l*C),y=Math.round(d*C);return[m,b,y]},a=c=>{const r=[];for(let l=0;l<c.length;l+=4){const d=c.slice(l,l+4),f=s(d);r.push(f[0],f[1],f[2])}return r};i.responses.onMessage(c=>{this.outputs=a(Array.from(c.pixels))}),i.responses.onError(c=>{Te(c),this.stopStreamScreenThumbnails()})};stopStreamScreenThumbnails=()=>{this.abortController!==null&&!this.abortController.signal.aborted&&this.abortController.abort(),this.abortController=null}}const Zt=ci.getInstance(),ss=[{key:"original",value:-1},{key:"16:9",value:16/9},{key:"16:10",value:16/10},{key:"4:3",value:4/3},{key:"1:1",value:1/1},{key:"1.37:1",value:1.37/1},{key:"1.85:1",value:1.85/1},{key:"2.35:1",value:2.35/1}],Dn={original:"原屏幕宽高比","16:9":"16:9","16:10":"16:10","4:3":"4:3","1:1":"1:1","1.37:1":"1.37:1(标准银幕)","1.85:1":"1.85:1(学院宽银幕)","2.35:1":"2.35:1(变形宽银幕)"},li=(o,t,e)=>{if(e===-1)return{x:0,y:0,width:o,height:t};const i=o/t;let s,a;e>i?(s=o,a=Math.round(o/e)):(a=t,s=Math.round(t*e));const c=Math.round((o-s)/2),r=Math.round((t-a)/2);return{x:c,y:r,width:s,height:a}};class di{screens=[];selectedScreenId=0;selectedScreenRatioKey="2.35:1";playStatus="stopped";drawTimer=void 0;getScreens=async()=>{try{const t=await Zt.getListScreens();if(t.length===0)throw new Error("没有找到屏幕");return this.screens=t,t.length>0&&this.selectedScreenId===0&&(this.selectedScreenId=t[0].id),t}catch{return[]}};startPlugin=async()=>{const{app:t}=window.require("@electron/remote"),e=window.require("path"),i=t.getAppPath(),s=e.join(i,"iot_manager","screen_capture_service.exe");return await Xn.openExe(s,{detached:!1,startLogListener:!1})};start=async()=>{if(this.playStatus!=="stopped")return;this.playStatus="starting";const t=this.screens.find(s=>s.id===this.selectedScreenId);if(!t){this.stop();return}const e=ss.find(s=>s.key===this.selectedScreenRatioKey);if(!e){this.stop();return}const i=li(t.width,t.height,e.value);Zt.startStreamScreenThumbnails({screenId:this.selectedScreenId,x:i.x,y:i.y,width:i.width,height:i.height,thumbnailWidth:Zt.COLUMNS,thumbnailHeight:Zt.ROWS}),this.playStatus="started",this.drawTimer!==void 0&&clearInterval(this.drawTimer),this.drawTimer=setInterval(()=>{Zt.outputs.length>0&&Js.drawScreen(Zt.outputs)},30)};stop=()=>{this.drawTimer!==void 0&&(clearInterval(this.drawTimer),this.drawTimer=void 0),Zt.stopStreamScreenThumbnails(),this.playStatus="stopped"};control=async()=>{this.playStatus!=="starting"&&(this.playStatus==="started"?this.stop():await this.start())};startPluginIfNotStarted=async()=>{if(this.playStatus!=="stopped")return!1;const[t,e]=await ie(this.startPlugin());return e?!1:t?(await Ve(100),await this.getScreens(),await this.start(),!0):(alert("Failed to start screen capture plugin"),!1)};setSelectedScreen=async t=>{if(this.selectedScreenId===t)return;const e=this.playStatus==="started";e&&this.stop(),this.selectedScreenId=t,await Ve(100),e&&await this.start()};setSelectedScreenRatio=async t=>{if(this.selectedScreenRatioKey===t)return;const e=this.playStatus==="started";e&&this.stop(),this.selectedScreenRatioKey=t,await Ve(100),e&&await this.start()};reset=async()=>{this.selectedScreenRatioKey="2.35:1",this.screens.length>0&&(this.selectedScreenId=this.screens[0].id)};destroy=()=>{this.stop()}}const $t=new di,Fe="lightSync_deviceModes";class sn{static saveDeviceMode(t,e){try{const i=this.getAllDeviceModes();i[t]=e,localStorage.setItem(Fe,JSON.stringify(i))}catch{}}static getDeviceMode(t){try{return this.getAllDeviceModes()[t]}catch{return}}static getAllDeviceModes(){try{const t=localStorage.getItem(Fe);return t?JSON.parse(t):{}}catch{return{}}}static removeDeviceMode(t){try{const e=this.getAllDeviceModes();delete e[t],localStorage.setItem(Fe,JSON.stringify(e))}catch{}}static clearAll(){try{localStorage.removeItem(Fe)}catch{}}}const Pe="lightSync_deviceVisibility";class Le{static saveDeviceVisibility(t,e){try{const i=this.getAllDeviceVisibility();i[t]=e,localStorage.setItem(Pe,JSON.stringify(i))}catch{}}static getDeviceVisibility(t){try{return this.getAllDeviceVisibility()[t]}catch{return}}static getAllDeviceVisibility(){try{const t=localStorage.getItem(Pe);return t?JSON.parse(t):{}}catch{return{}}}static removeDeviceVisibility(t){try{const e=this.getAllDeviceVisibility();delete e[t],localStorage.setItem(Pe,JSON.stringify(e))}catch{}}static clearAll(){try{localStorage.removeItem(Pe)}catch{}}}const on="lightSync_win11DynamicLightingEnabled",Rn={save(o){try{localStorage.setItem(on,JSON.stringify(o))}catch{}},get(){try{const o=localStorage.getItem(on);return o===null?null:!!JSON.parse(o)}catch{return null}},remove(){try{localStorage.removeItem(on)}catch{}}},rn="lightSync_win11DynamicLightingGuideDismissed",ze={save(o){try{localStorage.setItem(rn,JSON.stringify(o))}catch{}},get(){try{const o=localStorage.getItem(rn);return o===null?null:!!JSON.parse(o)}catch{return null}},remove(){try{localStorage.removeItem(rn)}catch{}}};class hi{constructor(){this.canvas.width=this.cols,this.canvas.height=this.rows,this.s_hypotenuse=Math.sqrt(Math.pow(this.sw,2)+Math.pow(this.sh,2))}canvas=document.createElement("canvas");ctx=this.canvas.getContext("2d",{willReadFrequently:!0});cols=21;rows=6;hypotenuse=Math.sqrt(Math.pow(this.cols,2)+Math.pow(this.rows,2));setRank(t,e){this.cols=t,this.rows=e,this.canvas.width=this.cols,this.canvas.height=this.rows,this.hypotenuse=Math.sqrt(Math.pow(this.cols,2)+Math.pow(this.rows,2))}rotation=0;sw=0;sh=0;sx=0;sy=0;s_hypotenuse=0;DEFAULT_X=0;DEFAULT_Y=0;DEFAULT_WIDTH=315;DEFAULT_HEIGHT=90;MIN_WIDTH=90;MIN_HEIGHT=60;DEFAULT_ROTATION_DEGREE=0;UI_PADDING_TOP=24;UI_PADDING_RIGHT=32;getRotatedBoundingBox=(t,e,i)=>{const s=i*Math.PI/180,a=Math.abs(Math.cos(s)),c=Math.abs(Math.sin(s)),r=t*a+e*c,l=t*c+e*a;return{rotatedW:r,rotatedH:l}};getCanvasSize=()=>{const t=yt.canvas,e=t?.clientWidth||t?.width||0,i=t?.clientHeight||t?.height||0;return{cw:e,ch:i}};clampPosition=(t,e,i,s,a)=>{const{cw:c,ch:r}=this.getCanvasSize();if(c===0||r===0)return{x:t,y:e};const{rotatedW:l,rotatedH:d}=this.getRotatedBoundingBox(i,s,a),f=(l-i)/2,C=(d-s)/2,m=f,b=C+this.UI_PADDING_TOP,y=c-i-f-this.UI_PADDING_RIGHT,w=r-s-C;return{x:Math.max(m,Math.min(t,y)),y:Math.max(b,Math.min(e,w))}};setPos=(t,e)=>{const i=this.clampPosition(t,e,this.sw,this.sh,this.rotation);this.sx=i.x,this.sy=i.y,this.s_hypotenuse=Math.sqrt(Math.pow(this.sw,2)+Math.pow(this.sh,2))};setSize=(t,e)=>{const i=Math.max(t,this.MIN_WIDTH),s=Math.max(e,this.MIN_HEIGHT),{cw:a,ch:c}=this.getCanvasSize();if(a===0||c===0){this.sw=i,this.sh=s;return}const{rotatedW:r,rotatedH:l}=this.getRotatedBoundingBox(i,s,this.rotation),d=a-this.UI_PADDING_RIGHT,f=c-this.UI_PADDING_TOP;if(r<=d&&l<=f)this.sw=i,this.sh=s;else{const m=d/r,b=f/l,y=Math.min(m,b,1);this.sw=Math.max(Math.floor(i*y),this.MIN_WIDTH),this.sh=Math.max(Math.floor(s*y),this.MIN_HEIGHT)}this.s_hypotenuse=Math.sqrt(Math.pow(this.sw,2)+Math.pow(this.sh,2));const C=this.clampPosition(this.sx,this.sy,this.sw,this.sh,this.rotation);this.sx=C.x,this.sy=C.y};setRotation=t=>{const{cw:e,ch:i}=this.getCanvasSize();if(e===0||i===0){this.rotation=t,this.rotateCtx!==null&&this.rotateCtx.restore();return}const{rotatedW:s,rotatedH:a}=this.getRotatedBoundingBox(this.sw,this.sh,t),c=e-this.UI_PADDING_RIGHT,r=i-this.UI_PADDING_TOP;if(s<=c&&a<=r){this.rotation=t,this.rotateCtx!==null&&this.rotateCtx.restore();const l=this.clampPosition(this.sx,this.sy,this.sw,this.sh,this.rotation);this.sx=l.x,this.sy=l.y}};moveToCenter=()=>{const{cw:t,ch:e}=this.getCanvasSize();if(t===0||e===0)return;const i=t-this.UI_PADDING_RIGHT,s=e-this.UI_PADDING_TOP,a=Math.round(i/2-this.sw/2),c=Math.round(this.UI_PADDING_TOP+s/2-this.sh/2);this.setPos(a,c)};resetPos=()=>{this.moveToCenter()};resetSize=()=>{this.setSize(this.DEFAULT_WIDTH,this.DEFAULT_HEIGHT)};resetRotation=()=>{this.setRotation(this.DEFAULT_ROTATION_DEGREE)};resetLayout=()=>{this.rotation=this.DEFAULT_ROTATION_DEGREE,this.rotateCtx!==null&&this.rotateCtx.restore(),this.setSize(this.DEFAULT_WIDTH,this.DEFAULT_HEIGHT),this.moveToCenter()};outputs=[];updateOutputs=()=>{if(this.ctx===null)return;const e=this.ctx.getImageData(0,0,this.cols,this.rows).data,i=new Array;for(let s=0;s<e.length;s+=4){const a=e.slice(s,s+4),[c,r,l,d]=a,f=d/255;i.push(c*f,r*f,l*f)}this.outputs=i};draw=()=>{this.ctx===null||this.canvas===null||yt.canvas!==null&&(this.ctx.clearRect(0,0,this.cols,this.rows),this.ctx.drawImage(yt.canvas,this.sx,this.sy,this.sw,this.sh,0,0,this.cols,this.rows),this.updateOutputs())};rotateCanvas=document.createElement("canvas");rotateCtx=this.rotateCanvas.getContext("2d",{willReadFrequently:!0});rotateDraw=()=>{if(yt.canvas===null||this.rotateCtx===null||this.ctx===null)return;const t=this.hypotenuse;this.rotateCanvas.width=t,this.rotateCanvas.height=t,this.rotateCtx.translate(t/2,t/2),this.rotateCtx.rotate((360-this.rotation)*Math.PI/180),this.rotateCtx.clearRect(-t/2,-t/2,t,t),this.ctx.clearRect(0,0,this.cols,this.rows);const e=this.sx+this.sw/2,i=this.sy+this.sh/2;this.rotateCtx.drawImage(yt.canvas,e-this.s_hypotenuse/2,i-this.s_hypotenuse/2,this.s_hypotenuse,this.s_hypotenuse,-t/2,-t/2,t,t);const s=(t-this.cols)/2,a=(t-this.rows)/2;this.ctx.drawImage(this.rotateCanvas,s,a,this.cols,this.rows,0,0,this.cols,this.rows),this.rotateCtx.rotate(this.rotation*Math.PI/180),this.updateOutputs()};timer=void 0;_rhythmUpdateActive=!1;_screenUpdateActive=!1;update=t=>{this.stopUpdate(),this._rhythmUpdateActive=!0;const e=async()=>{if(this._rhythmUpdateActive){this.rotation!==0?this.rotateDraw():this.draw();try{const i=t?.(this.outputs);i instanceof Promise&&await i}finally{this._rhythmUpdateActive&&(this.timer=setTimeout(e,8))}}};this.timer=setTimeout(e,0)};updateScreen=t=>{this.stopUpdate(),this._screenUpdateActive=!0;const e=async()=>{if(!this._screenUpdateActive)return;const i=Zt.outputs;try{const s=t?.(i);s instanceof Promise&&await s}finally{this._screenUpdateActive&&(this.timer=setTimeout(e,8))}};this.timer=setTimeout(e,0)};getWin11Color=(t,e)=>{const{r:i,g:s,b:a,a:c}=t,{rLevel:r,gLevel:l,bLevel:d}=e,f=c/255,C=Math.round(i*f/255*r),m=Math.round(s*f/255*l),b=Math.round(a*f/255*d);return{r:C,g:m,b}};updateWinLampColors=(t,e)=>{this.stopUpdate();const i=this.cols-1,s=this.rows-1;this.timer=setInterval(async()=>{if(this.rotation!==0?this.rotateDraw():this.draw(),t.length===0)return;const a=new Array;for(const c of t){const{x:r,y:l}=c.pos,d=c.lampIndex,f=Math.round(r*i),C=Math.round(l*s),m=this.ctx.getImageData(f,C,1,1),[b,y,w,A]=m.data.slice(0,4),$={rLevel:c.redLevelCount,gLevel:c.greenLevelCount,bLevel:c.blueLevelCount},Q=this.getWin11Color({r:b,g:y,b:w,a:A},$);a.push({lampIndex:d,color:{...Q,a:255}})}await e?.(a)},20)};stopUpdate=()=>{this._rhythmUpdateActive=!1,this._screenUpdateActive=!1,this.timer!==void 0&&(clearTimeout(this.timer),this.timer=void 0)};destroy=()=>{this.stopUpdate(),this.canvas.remove(),this.ctx=null}}const j={backgroundScale:{min:0,max:100,step:1,defaultValue:100},gain:{min:1,max:20,step:1,defaultValue:10},tilt:{min:0,max:2,step:.01,defaultValue:.5},contrast:{min:.5,max:4,step:.01,defaultValue:2},release:{min:.5,max:.99,step:.01,defaultValue:.85},minDb:{min:-80,max:-20,step:.1,defaultValue:-60},maxDb:{min:-20,max:20,step:.1,defaultValue:0},attackFrames:{min:1,max:20,step:1,defaultValue:5}},is=u.createContext(null),ui=({children:o})=>{const[t,e]=u.useState("lightEffect"),[i,s]=u.useState("rhythm"),[a,c]=u.useState("3"),r=u.useRef(new Map),l=u.useRef(new Map),d=E=>{const G=r.current.get(E);if(G)return G;const v=new hi,U=21*15,Y=6*15;return v.setSize(U,Y),r.current.set(E,v),v},f=(E,G)=>{const v=`${E}_${G}`;return xs.get(v)?.dev},C=E=>E&&typeof E.sendSyncColor=="function",m=E=>{const G=new Map(E.map(k=>[k.id&&k.devicePath?`${k.id}_${k.devicePath}`:k.name,k])),U=Object.keys(Mt.deviceDic).filter(k=>Mt.deviceDic[k]?.isOnline&&Mt.deviceDic[k]?.deviceType?.type==="keyboard"&&Mt.deviceDic[k]?.deviceType?.supportsLightSync).sort().map(k=>{const R=Mt.deviceDic[k]?.deviceType,x=R?.id?.toString(),D=R?.devAddr||"",I=x&&D?`${x}_${D}`:k,B=G.get(I),W=R?.displayName||B?.name||k,X=B?.painter??d(I),q=x&&D?f(x,D):void 0,L=q?C(q):!1;let _="not-selected";B?.mode?_=B.mode:_=sn.getDeviceMode(I)??"not-selected";let p=!0;return B?.visible!==void 0?p=B.visible:p=Le.getDeviceVisibility(I)??!0,{id:x,name:W,visible:p,mode:_,devicePath:D,type:"ryDevice",painter:X,supportSendSyncColor:L}}),Y=new Set(U.map(k=>k.id&&k.devicePath?`${k.id}_${k.devicePath}`:k.name));for(const[k,K]of r.current)Y.has(k)||(K.stopUpdate(),K.destroy(),r.current.delete(k),l.current.delete(k));return U},[b,y]=u.useState(()=>m([])),[w,A]=u.useState(null);u.useEffect(()=>{let E="";const G=()=>Object.keys(Mt.deviceDic).filter(k=>Mt.deviceDic[k]?.isOnline).sort().map(k=>{const R=Mt.deviceDic[k]?.deviceType,x=R?.id?.toString()??"",D=R?.devAddr??"",I=R?.displayName??"";return`${x}:${D}:${I}`}).join("|"),v=()=>{const Y=G();Y!==E&&(E=Y,y(k=>m(k)))};v();const U=window.setInterval(v,300);return()=>{window.clearInterval(U)}},[]),u.useEffect(()=>{if(b.length===0){w!==null&&A(null);return}if(w===null){const v=b[0],U=v.id&&v.devicePath?`${v.id}_${v.devicePath}`:v.name;A(U);return}const E=w;if(!b.some(v=>(v.id&&v.devicePath?`${v.id}_${v.devicePath}`:v.name)===E)){const v=b[0],U=v.id&&v.devicePath?`${v.id}_${v.devicePath}`:v.name;A(U)}},[b,w]),u.useEffect(()=>((async()=>{const[,G]=await ie(Nt.startPluginIfNotStarted());if(G){En.next({type:"error",message:`启动律动插件失败: ${G.message}`});return}const[v,U]=await ie(Nt.getConfiguration());(U||!v)&&await ie(Nt.setConfiguration({audioDeviceId:"",numBands:32,fftSize:512,gain:j.gain.defaultValue,tiltFactor:j.tilt.defaultValue,contrastFactor:j.contrast.defaultValue,releaseFactor:j.release.defaultValue,minDb:j.minDb.defaultValue,maxDb:j.maxDb.defaultValue,attackFrames:j.attackFrames.defaultValue}));const[,Y]=await ie($t.startPluginIfNotStarted());Y&&En.next({type:"error",message:`启动光影插件失败: ${Y.message}`})})(),()=>{Nt.stop(),$t.stop()}),[]),u.useEffect(()=>{for(const E of b){const G=E.painter,v=E.id&&E.devicePath?`${E.id}_${E.devicePath}`:E.name,U=l.current.get(v);if(U&&U.visible===E.visible&&U.mode===E.mode)continue;if(l.current.set(v,{visible:E.visible,mode:E.mode}),E.mode==="not-selected"){G.stopUpdate();continue}const Y=E.id&&E.devicePath?f(E.id,E.devicePath):void 0;if(!Y||!E.supportSendSyncColor){G.stopUpdate();continue}if(E.mode==="rhythm"||E.mode==="screen"){const k=Mt.deviceDic[v];(k?.light.lightType==="LightMusicFollow2"||k?.light.lightType==="LightScreenColor")&&(k.light.lightType="LightAlwaysOn"),E.mode==="rhythm"?G.update(async K=>{await Y.sendSyncColor(K)}):E.mode==="screen"&&G.updateScreen(async K=>{await Y.sendSyncColor(K)})}}},[b,w]),u.useEffect(()=>()=>{for(const E of r.current.values())E.stopUpdate(),E.destroy();r.current.clear(),l.current.clear()},[]);const[$,Q]=u.useState("spectrum"),[S,V]=u.useState("炫彩"),[ot,st]=u.useState("#74ebd5"),[ct,H]=u.useState(()=>Rn.get()??!1),[J,M]=u.useState("E241Y"),[Ft,kt]=u.useState("2.35:1（变形宽银幕）"),[O,Et]=u.useState({backgroundScale:j.backgroundScale.defaultValue,gain:j.gain.defaultValue,tilt:j.tilt.defaultValue,contrast:j.contrast.defaultValue,release:j.release.defaultValue,minDb:j.minDb.defaultValue,maxDb:j.maxDb.defaultValue,attackFrames:j.attackFrames.defaultValue});u.useEffect(()=>{(async()=>{const G=await Nt.getConfiguration();G&&Et(v=>({...v,gain:G.gain??j.gain.defaultValue,tilt:G.tiltFactor??j.tilt.defaultValue,contrast:G.contrastFactor??j.contrast.defaultValue,release:G.releaseFactor??j.release.defaultValue,minDb:G.minDb??j.minDb.defaultValue,maxDb:G.maxDb??j.maxDb.defaultValue,attackFrames:G.attackFrames??j.attackFrames.defaultValue}))})()},[]),u.useEffect(()=>{Nt.playMode=$},[$]),u.useEffect(()=>{S==="炫彩"?yt.colorMode={type:"default"}:S==="单色"&&(yt.colorMode={type:"custom",color:ot})},[S,ot]),u.useEffect(()=>{yt.setScale(O.backgroundScale/100)},[O.backgroundScale]),u.useEffect(()=>{(async()=>{await Nt.setConfiguration({gain:O.gain,tiltFactor:O.tilt,contrastFactor:O.contrast,releaseFactor:O.release,minDb:O.minDb,maxDb:O.maxDb,attackFrames:O.attackFrames})})()},[O.gain,O.tilt,O.contrast,O.release,O.minDb,O.maxDb,O.attackFrames]),u.useEffect(()=>{Rn.save(ct)},[ct]),u.useLayoutEffect(()=>{Mt.shouldResetLightSyncContext&&(e("lightEffect"),s("rhythm"),c("3"),Q("spectrum"),V("炫彩"),st("#74ebd5"),H(!1),ze.remove(),M("E241Y"),kt("2.35:1（变形宽银幕）"),Et({backgroundScale:j.backgroundScale.defaultValue,gain:j.gain.defaultValue,tilt:j.tilt.defaultValue,contrast:j.contrast.defaultValue,release:j.release.defaultValue,minDb:j.minDb.defaultValue,maxDb:j.maxDb.defaultValue,attackFrames:j.attackFrames.defaultValue}),y(E=>E.map(G=>{const v=G.id&&G.devicePath?`${G.id}_${G.devicePath}`:G.name;return sn.saveDeviceMode(v,"not-selected"),G.painter.resetLayout(),{...G,mode:"not-selected"}})),Nt.playMode="spectrum",yt.colorMode={type:"default"},yt.setScale(j.backgroundScale.defaultValue/100),Nt.setConfiguration({gain:j.gain.defaultValue,tiltFactor:j.tilt.defaultValue,contrastFactor:j.contrast.defaultValue,releaseFactor:j.release.defaultValue,minDb:j.minDb.defaultValue,maxDb:j.maxDb.defaultValue,attackFrames:j.attackFrames.defaultValue}),$t.reset(),Mt.shouldResetLightSyncContext=!1)},[Mt.shouldResetLightSyncContext]);const Dt=u.useMemo(()=>{const E=x=>x.id&&x.devicePath?`${x.id}_${x.devicePath}`:x.name;return{rightTab:t,setRightTab:e,selectedMode:i,setSelectedMode:s,presetId:a,setPresetId:c,devices:b,selectedDeviceId:w,setSelectedDeviceId:A,toggleDeviceVisible:x=>{y(D=>D.map(I=>{if(E(I)===x){const B=!I.visible;return Le.saveDeviceVisibility(x,B),{...I,visible:B}}return I}))},setDeviceVisible:(x,D)=>{y(I=>I.map(B=>E(B)===x?(Le.saveDeviceVisibility(x,D),{...B,visible:D}):B))},setOtherDevicesVisible:(x,D)=>{y(I=>I.map(B=>{const W=E(B);return W===x?B:(Le.saveDeviceVisibility(W,D),{...B,visible:D})}))},setDeviceMode:(x,D)=>{y(I=>I.map(B=>E(B)===x?(sn.saveDeviceMode(x,D),{...B,mode:D}):B))},rhythmEffect:$,setRhythmEffect:Q,backgroundColorType:S,setBackgroundColorType:V,backgroundColor:ot,setBackgroundColor:st,win11DynamicLightingEnabled:ct,setWin11DynamicLightingEnabled:H,selectedScreen:J,setSelectedScreen:M,currentScreenRatio:Ft,setCurrentScreenRatio:kt,sliders:O,setSlider:(x,D)=>{Et(I=>({...I,[x]:D}))},resetEffect:()=>{Q("spectrum"),V("炫彩"),st("#74ebd5"),Et(x=>({...x,backgroundScale:j.backgroundScale.defaultValue})),Nt.playMode="spectrum",yt.colorMode={type:"default"},yt.setScale(j.backgroundScale.defaultValue/100)},resetParams:()=>{const x={gain:j.gain.defaultValue,tilt:j.tilt.defaultValue,contrast:j.contrast.defaultValue,release:j.release.defaultValue,minDb:j.minDb.defaultValue,maxDb:j.maxDb.defaultValue,attackFrames:j.attackFrames.defaultValue};Et(D=>({...D,...x})),Nt.setConfiguration({gain:x.gain,tiltFactor:x.tilt,contrastFactor:x.contrast,releaseFactor:x.release,minDb:x.minDb,maxDb:x.maxDb,attackFrames:x.attackFrames})}}},[t,i,a,b,w,$,S,ot,ct,J,Ft,O]);return n.jsx(is.Provider,{value:Dt,children:o})},Se=()=>{const o=u.useContext(is);if(!o)throw new Error("useLightSync 必须在 LightSyncProvider 内部使用");return o},pi=h.div`
  position: relative;
  width: ${({$width:o})=>o?`${o}px`:"auto"};
  max-width: 100%;
`,fi=h.button`
  width: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 8px;
  border-radius: 6px;
  outline: 1px #ced4db solid;
  outline-offset: -1px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  background: white;
  border: none;
  cursor: ${({$disabled:o})=>o?"not-allowed":"pointer"};
  transition: outline-color 120ms ease;
  box-sizing: border-box;

  &:hover:not(:disabled) {
    outline-color: #b8bec6;
  }

  &:disabled {
    background: #f6f6f6;
    outline-color: #ced4db;
  }
`,gi=h.span`
  color: ${({$disabled:o})=>o?"#ced4db":"#989898"};
  font-size: 14px;
  font-family: "Source Han Sans SC", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  flex: 1;
  text-align: left;
`,xi=h.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,mi=h.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${({$disabled:o})=>o?"#ced4db":"#989898"};
`,bi=h.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  min-width: 198px;
  background: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  z-index: 1000;
  display: ${({$isOpen:o})=>o?"block":"none"};
  overflow: hidden;
`,yi=h.div`
  width: 100%;
  height: 36px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 8px;
  justify-content: flex-start;
  align-items: center;
  gap: 74px;
  display: inline-flex;
  cursor: pointer;
  background: ${({$isSelected:o})=>o?"rgba(116, 235, 213, 0.5)":"transparent"};
  border-top-left-radius: ${({$isFirst:o})=>o?"6px":"0"};
  border-top-right-radius: ${({$isFirst:o})=>o?"6px":"0"};
  border-bottom-left-radius: ${({$isLast:o})=>o?"6px":"0"};
  border-bottom-right-radius: ${({$isLast:o})=>o?"6px":"0"};
  transition: background-color 120ms ease;
  box-sizing: border-box;

  &:hover {
    background: ${({$isSelected:o})=>o?"rgba(116, 235, 213, 0.5)":"rgba(0, 0, 0, 0.05)"};
  }
`,vi=h.span`
  color: ${({$isSelected:o})=>o?"#58BAA8":"#989898"};
  font-size: 14px;
  font-family: "Source Han Sans SC", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`,ye=bt.memo(({value:o,options:t,onChange:e,disabled:i,width:s,className:a})=>{const[c,r]=u.useState(!1),l=u.useRef(null),d=u.useRef(null),f=t.find(b=>b.value===o)||{value:"",label:""};u.useEffect(()=>{if(!c)return;const b=y=>{l.current&&!l.current.contains(y.target)&&r(!1)};return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}},[c]);const C=()=>{i||r(!c)},m=b=>{e(b),r(!1)};return n.jsxs(pi,{ref:l,className:a,$width:s,children:[n.jsxs(fi,{ref:d,type:"button",onClick:C,$disabled:i,children:[n.jsx(gi,{$disabled:i,children:f.label}),n.jsx(xi,{children:n.jsx(mi,{$disabled:i})})]}),n.jsx(bi,{$isOpen:c,children:t.map((b,y)=>n.jsx(yi,{$isSelected:b.value===o,$isFirst:y===0,$isLast:y===t.length-1,onClick:()=>m(b.value),children:n.jsx(vi,{$isSelected:b.value===o,children:b.label})},b.value))})]})});ye.displayName="Dropdown";const wi=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`,Si=h.div`
  min-width: 80px;
  font-size: 16px;
  color: #3e3e3e;
`,Ci=h.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 10px;
`,ki=h.div`
  position: relative;
  width: 214px;
  height: 16px;
  cursor: ${({$disabled:o})=>o?"not-allowed":"pointer"};
`,Ei=h.div`
  width: 214px;
  height: 6px;
  position: absolute;
  left: 0px;
  top: 5px;
  background: #D9D9D9;
  border-radius: 12px;
`,Di=h.div`
  width: ${({$percentage:o})=>o/100*214}px;
  height: 6px;
  position: absolute;
  left: 0px;
  top: 5px;
  background: ${({$disabled:o})=>o?"#989898":"#74EBD5"};
  border-radius: 12px;
`,Ri=h.div`
  width: 16px;
  height: 16px;
  position: absolute;
  left: ${({$percentage:o})=>Math.max(0,Math.min(212,o/100*214-8))}px;
  top: 0px;
  background: white;
  border-radius: 9999px;
  border: 2.70px ${({$disabled:o})=>o?"#989898":"#74EBD5"} solid;
  cursor: ${({$disabled:o})=>o?"not-allowed":"grab"};
  
  &:active {
    cursor: ${({$disabled:o})=>o?"not-allowed":"grabbing"};
  }
`,Ti=h.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
`,bn="#74EBD5",Mi=h.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;
  height: 36px;
  padding: 5px 8px;
  border-radius: 6px;
  width: 90px;
  box-sizing: border-box;

  background: ${({$disabled:o})=>o?"#f6f6f6":"#ffffff"};
  border: none;
  box-shadow: none;
  outline: 1px ${({$focused:o})=>o?bn:"#CED4DB"} solid;
  outline-offset: -1px;

  ${({$focused:o})=>o&&`
      background: #ffffff;
      box-shadow: 0px 0px 0px 2px rgba(116, 235, 213, 0.20);
      outline: 1px ${bn} solid;
      outline-offset: -1px;
    `}
`,ji=h.input`
  border: 0;
  outline: none;
  flex: 1;
  min-width: 0;
  font-size: 14px;
  line-height: 22px;
  color: ${({$disabled:o,$focused:t})=>o?"#ced4db":t?"#3E3E3E":"#B4B9BF"};
  background: transparent;
  padding: 0;
  margin: 0;
  text-align: left;
  font-family: "Source Han Sans SC", sans-serif;
  font-weight: 400;
  cursor: ${({$disabled:o})=>o?"not-allowed":"text"};

  &::placeholder {
    color: #b4b9bf;
  }

  /* 去掉浏览器自带 number 箭头 */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`,Ai=h.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 24px;
  height: 26px;
  border-radius: 4px;
  overflow: hidden;
  background: ${({$disabled:o})=>o?"#E3E3E3":"#EEF1F4"};
`,Tn=h.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%) rotate(${({$dir:o})=>o==="up"?"45deg":"-135deg"});
  border-top: 1px solid #8D9094;
  border-left: 1px solid #8D9094;
`,Mn=h.button`
  position: relative;
  width: 100%;
  height: 13px;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: ${({$disabled:o})=>o?"not-allowed":"pointer"};

  &:hover {
    background: ${({$disabled:o})=>o?"transparent":"#E3F7F1"};
  }

  &:active {
    background: ${({$disabled:o})=>o?"transparent":"#D0F1EA"};
  }

  &:hover span {
    border-color: ${({$disabled:o})=>o?"#8D9094":bn};
  }

  &:active span {
    border-color: ${({$disabled:o})=>o?"#8D9094":"#36BFA8"};
  }
`,_i=h.span`
  font-size: 14px;
  line-height: 22px;
  color: ${({$disabled:o,$focused:t})=>o?"#ced4db":t?"#3E3E3E":"#7b7b7b"};
  font-family: "Source Han Sans SC", sans-serif;
  font-weight: 400;
  white-space: nowrap;
  flex-shrink: 0;
`,Kt=bt.memo(({label:o,value:t,onChange:e,disabled:i,valueSuffix:s="",className:a,min:c=0,max:r=100,step:l=1})=>{const[d,f]=bt.useState(!1),[C,m]=bt.useState(String(t)),b=bt.useRef(null),y=bt.useMemo(()=>{if(l>=1)return 0;const H=l.toString(),J=H.indexOf(".");return J===-1?0:H.length-J-1},[l]),w=bt.useCallback(H=>H.toFixed(y),[y]),A=(t-c)/(r-c)*100;bt.useEffect(()=>{d||m(w(t))},[t,d,w]);const $=H=>{const J=H.target.value;(J===""||/^[+-]?\d*\.?\d*$/.test(J))&&m(J)},Q=()=>{f(!1);const H=C.replace(/^\+/,""),J=parseFloat(H);if(isNaN(J))m(w(t));else{let M=Math.max(c,Math.min(r,J));l!==0&&(M=Math.round(M/l)*l),m(w(M)),M!==t&&e(M)}},S=H=>{H.key==="Enter"?H.currentTarget.blur():H.key==="Escape"&&(m(w(t)),H.currentTarget.blur())},V=()=>{i||(f(!0),setTimeout(()=>{b.current?.select()},0))},ot=H=>{if(!i){const J=Number(H.target.value);e(J)}},st=()=>{if(!i){const H=Math.min(r,t+l);e(H)}},ct=()=>{if(!i){const H=Math.max(c,t-l);e(H)}};return n.jsxs(wi,{className:a,children:[n.jsx(Si,{children:o}),n.jsxs(Ci,{children:[n.jsxs(ki,{$disabled:i,children:[n.jsx(Ei,{$disabled:i}),n.jsx(Di,{$disabled:i,$percentage:A}),n.jsx(Ri,{$disabled:i,$percentage:A}),n.jsx(Ti,{type:"range",min:c,max:r,step:l,value:t,disabled:i,onChange:ot})]}),n.jsxs(Mi,{$disabled:i,$focused:d,$hasSuffix:!!s,children:[n.jsx(ji,{ref:b,type:"number",value:C,disabled:i,$disabled:i,$focused:d,$hasSuffix:!!s,onChange:$,onFocus:V,onBlur:Q,onKeyDown:S,inputMode:"numeric"}),s&&n.jsx(_i,{$disabled:i,$focused:d,children:s}),n.jsxs(Ai,{$disabled:i,children:[n.jsx(Mn,{type:"button",onClick:st,$disabled:i,children:n.jsx(Tn,{$dir:"up"})}),n.jsx(Mn,{type:"button",onClick:ct,$disabled:i,children:n.jsx(Tn,{$dir:"down"})})]})]})]})]})});Kt.displayName="SliderRow";const Ii=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-bottom: 1px solid #e6e6e6;
  padding: 16px 24px;
`,Bi=h.button`
  border: 0;
  background: transparent;
  border-radius: 12px;
  padding: 8px 16px;
  font-size: 18px;
  line-height: normal;
  transition: color 120ms ease;
  user-select: none;

  color: ${({$active:o,$disabled:t})=>t?"#d5d5d5":o?"#74ebd5":"#5b5a5a"};
  font-weight: ${({$active:o})=>o?500:400};
  cursor: ${({$disabled:o})=>o?"not-allowed":"pointer"};

  &:hover {
    color: ${({$active:o,$disabled:t})=>t?"#d5d5d5":o?"#74ebd5":"#3e3e3e"};
  }
`;function $i({value:o,items:t,onChange:e,className:i}){return n.jsx(Ii,{className:i,children:t.map(s=>{const a=s.value===o,c=s.disabled??!1;return n.jsx(Bi,{type:"button",$active:a,$disabled:c,onClick:()=>!c&&e(s.value),children:s.label},s.value)})})}const os="#3E3E3E",rs="#F9F9F9",Fi=["#EC4343","#FFAD0F","#FFEA29","#78493A","#83DE59","#4C855C","#D63EC6","#A80ECE","#4484FF","#6FF8C7","#BAFFA1","#000000","#505050","#ABABAB","#FFFFFF"],Pi=({value:o,onChange:t,disabled:e=!1})=>{const{getString:i}=he(),s=pt.numToRgb(o),a=pt.rgbToHsv(s.r,s.g,s.b),[c,r]=u.useState(a.h),[l,d]=u.useState(a.s),[f,C]=u.useState(a.v),[m,b]=u.useState(pt.rgbToHex(s.r,s.g,s.b).toUpperCase()),[y,w]=u.useState(s.r.toString()),[A,$]=u.useState(s.g.toString()),[Q,S]=u.useState(s.b.toString()),V=u.useRef(null),ot=u.useRef(null),st=u.useRef(!1),ct=u.useRef(!1),H=u.useCallback((p,g,P)=>{const F=p.getBoundingClientRect();return{x:(g-F.left)/F.width,y:(P-F.top)/F.height}},[]);u.useEffect(()=>{const p=pt.numToRgb(o),g=pt.rgbToHsv(p.r,p.g,p.b);g.s>0&&g.v>0&&r(g.h),d(g.s),C(g.v),b(pt.rgbToHex(p.r,p.g,p.b).toUpperCase()),w(p.r.toString()),$(p.g.toString()),S(p.b.toString())},[o]);const J=u.useCallback((p,g,P)=>{const F=pt.hsvToRgb(p,g,P);w(F.r.toString()),$(F.g.toString()),S(F.b.toString());const ft=pt.rgbToHex(F.r,F.g,F.b).toUpperCase();b(ft);const z=pt.rgbToNum(F.r,F.g,F.b);t(z)},[t]),M=u.useCallback((p,g,P)=>{const F=pt.rgbToHsv(p,g,P);r(F.h),d(F.s),C(F.v);const ft=pt.rgbToHex(p,g,P).toUpperCase();b(ft);const z=pt.rgbToNum(p,g,P);t(z)},[t]),Ft=u.useCallback(p=>{let g=p.target.value.toUpperCase().replace(/[^0-9A-F]/g,"");g.length>6&&(g=g.slice(0,6)),b(g)},[]),kt=u.useCallback(()=>{if(m.length>0&&m.length<=6)try{const p=m.padEnd(6,"0"),g=pt.hexToRgb(p);M(g.r,g.g,g.b)}catch{const g=pt.numToRgb(o);b(pt.rgbToHex(g.r,g.g,g.b).toUpperCase())}else if(m.length===0){const p=pt.numToRgb(o);b(pt.rgbToHex(p.r,p.g,p.b).toUpperCase())}},[m,o,M]),O=u.useCallback(p=>{p.key==="Enter"&&p.currentTarget.blur()},[]),Et=u.useCallback(p=>{const g=p.target.value.replace(/[^0-9]/g,"");w(g)},[]),Dt=u.useCallback(()=>{const p=y===""?0:Math.min(255,Math.max(0,parseInt(y)));w(p.toString());const g=parseInt(A)||0,P=parseInt(Q)||0;M(p,g,P)},[y,A,Q,M]),E=u.useCallback(p=>{p.key==="Enter"&&p.currentTarget.blur()},[]),G=u.useCallback(p=>{const g=p.target.value.replace(/[^0-9]/g,"");$(g)},[]),v=u.useCallback(()=>{const p=parseInt(y)||0,g=A===""?0:Math.min(255,Math.max(0,parseInt(A)));$(g.toString());const P=parseInt(Q)||0;M(p,g,P)},[y,A,Q,M]),U=u.useCallback(p=>{p.key==="Enter"&&p.currentTarget.blur()},[]),Y=u.useCallback(p=>{const g=p.target.value.replace(/[^0-9]/g,"");S(g)},[]),k=u.useCallback(()=>{const p=parseInt(y)||0,g=parseInt(A)||0,P=Q===""?0:Math.min(255,Math.max(0,parseInt(Q)));S(P.toString()),M(p,g,P)},[y,A,Q,M]),K=u.useCallback(p=>{p.key==="Enter"&&p.currentTarget.blur()},[]),R=u.useCallback((p,g)=>{if(!V.current||e)return;const{x:P,y:F}=H(V.current,p,g),ft=Math.max(0,Math.min(1,P)),z=Math.max(0,Math.min(1,F)),Z=ft,lt=1-z;d(Z),C(lt),J(c,Z,lt)},[c,J,e,H]),x=u.useCallback((p,g)=>{if(!ot.current||e)return;const{x:P}=H(ot.current,p,g),ft=Math.max(0,Math.min(1,P))*360;r(ft),J(ft,l,f)},[l,f,J,e,H]),D=u.useCallback(p=>{e||(p.preventDefault(),p.stopPropagation(),p.currentTarget.setPointerCapture(p.pointerId),st.current=!0,R(p.clientX,p.clientY))},[e,R]),I=u.useCallback(p=>{st.current&&(p.preventDefault(),p.stopPropagation(),R(p.clientX,p.clientY))},[R]),B=u.useCallback(p=>{st.current&&(p.currentTarget.releasePointerCapture(p.pointerId),st.current=!1)},[]),W=u.useCallback(p=>{e||(p.preventDefault(),p.stopPropagation(),p.currentTarget.setPointerCapture(p.pointerId),ct.current=!0,x(p.clientX,p.clientY))},[e,x]),X=u.useCallback(p=>{ct.current&&(p.preventDefault(),p.stopPropagation(),x(p.clientX,p.clientY))},[x]),q=u.useCallback(p=>{ct.current&&(p.currentTarget.releasePointerCapture(p.pointerId),ct.current=!1)},[]),L=pt.hsvToRgb(c,l,f),_=`#${pt.rgbToHex(L.r,L.g,L.b)}`;return n.jsx(Li,{children:n.jsxs(Hi,{children:[n.jsx(Ni,{ref:V,style:{background:`
              linear-gradient(to bottom, transparent, #000),
              linear-gradient(to right, #fff, transparent),
              hsl(${c}, 100%, 50%)
            `},onPointerDown:D,onPointerMove:I,onPointerUp:B,children:n.jsx(Ui,{style:{left:`${l*100}%`,top:`${(1-f)*100}%`}})}),n.jsxs(Oi,{children:[n.jsx(Wi,{ref:ot,onPointerDown:W,onPointerMove:X,onPointerUp:q,children:n.jsx(Vi,{style:{left:`${c/360*100}%`}})}),n.jsx(zi,{style:{backgroundColor:_}})]}),n.jsxs(Gi,{children:[n.jsxs(He,{children:[n.jsx(Xi,{children:n.jsx(Ne,{type:"text",value:m,onChange:Ft,onBlur:kt,onKeyDown:O,disabled:e,maxLength:6,placeholder:"FFFFFF"})}),n.jsx(Ue,{children:i("lightSync_color_hexLabel")})]}),n.jsxs(He,{children:[n.jsx(an,{children:n.jsx(Ne,{type:"text",value:y,onChange:Et,onBlur:Dt,onKeyDown:E,disabled:e,maxLength:3,placeholder:"0"})}),n.jsx(Ue,{children:i("lightSync_color_rLabel")})]}),n.jsxs(He,{children:[n.jsx(an,{children:n.jsx(Ne,{type:"text",value:A,onChange:G,onBlur:v,onKeyDown:U,disabled:e,maxLength:3,placeholder:"0"})}),n.jsx(Ue,{children:i("lightSync_color_gLabel")})]}),n.jsxs(He,{children:[n.jsx(an,{children:n.jsx(Ne,{type:"text",value:Q,onChange:Y,onBlur:k,onKeyDown:K,disabled:e,maxLength:3,placeholder:"0"})}),n.jsx(Ue,{children:i("lightSync_color_bLabel")})]})]}),n.jsx(Yi,{children:Fi.map((p,g)=>n.jsx(Ki,{style:{backgroundColor:p},onClick:()=>{if(e)return;const P=pt.hexToRgb(p.replace("#",""));M(P.r,P.g,P.b)}},g))})]})})},Li=h.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  background: white;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`,Hi=h.div`
  width: 352px;
  height: 354px;
  position: relative;
`,Ni=h.div`
  width: 352px;
  height: 191px;
  position: relative;
  border-radius: 6px;
  cursor: crosshair;
  user-select: none;
`,Ui=h.div`
  width: 18px;
  height: 18px;
  position: absolute;
  transform: translate(-50%, -50%);
  background: #d9d9d9;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  border: 4px white solid;
  pointer-events: none;
`,Oi=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`,Wi=h.div`
  width: 279px;
  height: 15px;
  position: relative;
  border-radius: 6px;
  background: linear-gradient(
    to right,
    #ff0000 0%,
    #ff7f00 14.29%,
    #ffff00 28.57%,
    #00ff00 42.86%,
    #0000ff 57.14%,
    #4b0082 71.43%,
    #9400d3 85.71%,
    #ff0000 100%
  );
  cursor: pointer;
  user-select: none;
`,Vi=h.div`
  width: 8px;
  height: 15px;
  position: absolute;
  transform: translateX(-50%);
  background: rgb(255, 255, 255);
  border-radius: 1px;
  // border: 1px #adadad solid;
  /* left and right box-shadow only */
  box-shadow: -3px 0px 3px rgba(0, 0, 0, 0.2), 3px 0px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
`,zi=h.div`
  width: 63px;
  height: 15px;
  border-radius: 6px;
  border: 1px #adadad solid;
  flex-shrink: 0;
`,Gi=h.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 12px;
`,He=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,Xi=h.div`
  width: 114px;
  height: 32px;
  background: ${rs};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  box-sizing: border-box;
`,an=h.div`
  width: 70px;
  height: 32px;
  background: ${rs};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  box-sizing: border-box;
`,Ne=h.input`
  color: ${os};
  font-size: 16px;
  font-family: "PingFang SC", sans-serif;
  font-weight: 400;
  line-height: 1.2;
  border: none;
  background: transparent;
  outline: none;
  text-align: center;
  width: 100%;
  padding: 0;

  &::placeholder {
    color: #ADADAD;
    opacity: 0.5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,Ue=h.span`
  color: ${os};
  font-size: 16px;
  font-family: "PingFang SC", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  line-height: 1.2;
  text-align: center;
`,Yi=h.div` width: 340px;
  height: 51px;
  margin-top: 30px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  align-content: center;
`,Ki=h.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px #adadad solid;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`,Me="#59d7c4",as="#7b7b7b",De=o=>o.id&&o.devicePath?`${o.id}_${o.devicePath}`:o.name,cs=h.svg`
  width: 24px;
  height: 24px;
`,Zi=()=>n.jsx(cs,{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M2.5 21H5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M2.5 18H5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M2.5 15H5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M2.5 12H5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M8 21H10.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M8 18H10.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M8 15H10.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M8 12H10.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M8 9H10.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M8 6H10.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M8 3H10.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M13.5 21H16",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M19 21H21.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M13.5 18H16",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M19 18H21.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M13.5 15H16",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M19 15H21.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M19 12H21.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),n.jsx("path",{d:"M19 9H21.5",stroke:"#3E3E3E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),qi=()=>n.jsx(cs,{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M12 17C10.6167 17 9.43767 16.5123 8.463 15.537C7.48833 14.5617 7.00067 13.3827 7 12C6.99933 10.6173 7.487 9.43833 8.463 8.463C9.439 7.48767 10.618 7 12 7C13.382 7 14.5613 7.48767 15.538 8.463C16.5147 9.43833 17.002 10.6173 17 12C16.998 13.3827 16.5103 14.562 15.537 15.538C14.5637 16.514 13.3847 17.0013 12 17ZM5 13H1V11H5V13ZM23 13H19V11H23V13ZM11 5V1H13V5H11ZM11 23V19H13V23H11ZM6.4 7.75L3.875 5.325L5.3 3.85L7.7 6.35L6.4 7.75ZM18.7 20.15L16.275 17.625L17.6 16.25L20.125 18.675L18.7 20.15ZM16.25 6.4L18.675 3.875L20.15 5.3L17.65 7.7L16.25 6.4ZM3.85 18.7L6.375 16.275L7.75 17.6L5.325 20.125L3.85 18.7Z",fill:"#3E3E3E"})})});h.svg`
  width: 20px;
  height: 20px;
  color: currentColor;
`;const jn=({selected:o,title:t,icon:e,onClick:i})=>n.jsxs(uo,{type:"button",onClick:i,$selected:o,children:[n.jsx(po,{$selected:o,children:e}),n.jsx(fo,{$selected:o,children:t})]}),Qi=()=>{const{rightTab:o,setRightTab:t,selectedMode:e,setSelectedMode:i,rhythmEffect:s,setRhythmEffect:a,backgroundColorType:c,setBackgroundColorType:r,backgroundColor:l,setBackgroundColor:d,win11DynamicLightingEnabled:f,setWin11DynamicLightingEnabled:C,sliders:m,setSlider:b,resetEffect:y,resetParams:w,devices:A,selectedDeviceId:$,setSelectedDeviceId:Q}=Se(),{getString:S,currentLanguage:V}=he(),st=vn()*.95;u.useEffect(()=>{e==="screen"&&o==="layout"&&t("lightEffect")},[e,o,t]);const ct=u.useMemo(()=>[{value:"lightEffect",label:S("lightSync_tab_lightEffect")},{value:"layout",label:S("lightSync_tab_layout"),disabled:e==="screen"}],[V,S,e]),H=u.useMemo(()=>[{value:"spectrum",label:S("rhythmPlayMode_spectrum")},{value:"circle",label:S("rhythmPlayMode_circle")},{value:"tri-cicle",label:S("rhythmPlayMode_tricicle")},{value:"matrix",label:S("rhythmPlayMode_matrix")},{value:"triangle",label:S("rhythmPlayMode_triangle")}],[V]),J=u.useMemo(()=>[{value:"炫彩",label:S("lightSync_backgroundType_gradient")},{value:"单色",label:S("lightSync_backgroundType_solid")}],[V,S]),[M,Ft]=u.useState($t.screens);u.useEffect(()=>{(async()=>{await $t.getScreens(),Ft([...$t.screens])})()},[]);const kt=u.useMemo(()=>M.map(T=>({value:T.id.toString(),label:T.name||S("lightSync_unknown_screen")})),[M,V,S]),O=u.useMemo(()=>ss.map(T=>({value:T.key,label:S(Dn[T.key])||Dn[T.key]})),[V,S]),Et=u.useMemo(()=>A.map(T=>({value:De(T),label:T.name||S("lightSync_unknown_device")})),[A,V,S]),[Dt,E]=u.useState($t.selectedScreenId.toString()),[G,v]=u.useState($t.selectedScreenRatioKey);u.useEffect(()=>{M.length>0&&Dt==="0"&&E(M[0].id.toString())},[M,Dt]),u.useEffect(()=>{const T=window.setInterval(()=>{const N=$t.selectedScreenId.toString(),ut=$t.selectedScreenRatioKey;Dt!==N&&E(N),G!==ut&&v(ut)},100);return()=>{window.clearInterval(T)}},[Dt,G]);const U=T=>{E(T);const N=parseInt(T,10);$t.setSelectedScreen(N)},Y=T=>{const N=T;v(N),$t.setSelectedScreenRatio(N)},[k,K]=u.useState(null),[R,x]=u.useState(0),[D,I]=u.useState(0),[B,W]=u.useState(21),[X,q]=u.useState(6),[L,_]=u.useState(0),[p,g]=u.useState(!1),P=u.useRef(null);u.useEffect(()=>{$&&A.some(T=>De(T)===$)?K($):$===null&&K(null)},[$,A]),u.useEffect(()=>{if(!k)return;const T=A.find(ut=>De(ut)===k);if(!T)return;const N=T.painter;x(Math.round(N.sx)),I(Math.round(N.sy)),W(N.sw),q(N.sh),_(N.rotation)},[k,A]),u.useEffect(()=>{if(!k||o!=="layout")return()=>{};const T=A.find(rt=>De(rt)===k);if(!T)return()=>{};const N=T.painter;let ut;const Ut=()=>{x(rt=>{const vt=Math.round(N.sx);return vt!==rt?vt:rt}),I(rt=>{const vt=Math.round(N.sy);return vt!==rt?vt:rt}),W(rt=>N.sw!==rt?N.sw:rt),q(rt=>N.sh!==rt?N.sh:rt),_(rt=>N.rotation!==rt?N.rotation:rt),ut=requestAnimationFrame(Ut)};return ut=requestAnimationFrame(Ut),()=>{cancelAnimationFrame(ut)}},[k,A,o]),u.useEffect(()=>{c==="炫彩"&&g(!1)},[c]),u.useEffect(()=>{const T=N=>{P.current&&!P.current.contains(N.target)&&g(!1)};return p&&document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[p]);const F=u.useMemo(()=>k?A.find(N=>De(N)===k)?.painter??null:null,[k,A]),ft=T=>{K(T),Q(T)},z=T=>{const N=Math.round(T);x(N),F?.setPos(N,D)},Z=T=>{const N=Math.round(T);I(N),F?.setPos(R,N)},lt=T=>{if(!F)return;const N=Math.round(T),ut=Math.max(N,F.MIN_WIDTH);W(ut),F.setSize(ut,X)},gt=T=>{if(!F)return;const N=Math.round(T),ut=Math.max(N,F.MIN_HEIGHT);q(ut),F.setSize(B,ut)},St=T=>{let N=T;N<-180?N=-180:N>180&&(N=180),_(N),F?.setRotation(N)},Pt=()=>{F&&(F.moveToCenter(),x(Math.round(F.sx)),I(Math.round(F.sy)))},_t=()=>{F&&(W(F?.DEFAULT_WIDTH??0),q(F?.DEFAULT_HEIGHT??0),F?.resetSize())},It=()=>{_(F?.DEFAULT_ROTATION_DEGREE??0),F?.resetRotation()},Lt=()=>{F&&(_t(),It(),F.moveToCenter(),x(Math.round(F.sx)),I(Math.round(F.sy)))};return n.jsxs(Ji,{children:[n.jsx($i,{value:o,onChange:t,items:ct}),n.jsx(to,{children:o==="layout"?n.jsxs(An,{children:[n.jsxs(ne,{children:[n.jsx(le,{children:S("lightSync_section_deviceSelection")}),n.jsx(Xt,{children:n.jsx(ye,{value:k??"",onChange:ft,options:Et,width:210})}),k&&n.jsx(xe,{children:n.jsx(me,{type:"button",onClick:Lt,children:S("重置所有布局")})})]}),k&&n.jsxs(n.Fragment,{children:[n.jsxs(ne,{children:[n.jsx(le,{children:S("lightSync_section_position")}),n.jsxs(Xt,{children:[n.jsx(Yt,{children:S("lightSync_label_positionX")}),n.jsx(Re,{value:R,onChange:z,unit:"px"})]}),n.jsxs(Xt,{children:[n.jsx(Yt,{children:S("lightSync_label_positionY")}),n.jsx(Re,{value:D,onChange:Z,unit:"px"})]}),n.jsx(xe,{children:n.jsx(me,{type:"button",onClick:Pt,children:S("lightSync_action_resetPosition")})})]}),n.jsxs(ne,{children:[n.jsx(le,{children:S("lightSync_section_size")}),n.jsxs(Xt,{children:[n.jsx(Yt,{children:S("lightSync_label_width")}),n.jsx(Re,{value:B,onChange:lt,unit:"px"})]}),n.jsxs(Xt,{children:[n.jsx(Yt,{children:S("lightSync_label_height")}),n.jsx(Re,{value:X,onChange:gt,unit:"px"})]}),n.jsx(xe,{children:n.jsx(me,{type:"button",onClick:_t,children:S("lightSync_action_resetSize")})})]}),n.jsxs(ne,{children:[n.jsx(le,{children:S("lightSync_section_rotation")}),n.jsxs(Xt,{children:[n.jsx(Yt,{children:S("lightSync_label_rotation")}),n.jsx(Re,{value:L,onChange:St,unit:"°",min:-180,max:180})]}),n.jsx(xe,{children:n.jsx(me,{type:"button",onClick:It,children:S("lightSync_action_resetRotation")})})]})]})]}):n.jsxs(An,{children:[n.jsxs(ne,{children:[n.jsx(le,{children:S("lightSync_section_mode")}),n.jsxs(ho,{children:[n.jsx(jn,{mode:"rhythm",selected:e==="rhythm",title:S("lightSync_modeCard_rhythm"),icon:n.jsx(Zi,{}),onClick:()=>i("rhythm")}),n.jsx(jn,{mode:"screen",selected:e==="screen",title:S("lightSync_modeCard_screen"),icon:n.jsx(qi,{}),onClick:()=>i("screen")})]})]}),Mt.isWin11System&&n.jsx(n.Fragment,{children:n.jsxs(no,{children:[n.jsx(so,{children:S("Win11动态灯效")}),n.jsxs(io,{children:[n.jsx(oo,{children:S("开启后可识别所有支持Win11动态灯效的设备")}),n.jsx(ro,{type:"button",role:"switch","aria-checked":f,$checked:f,onClick:()=>C(!f),children:n.jsx(ao,{$checked:f})})]})]})}),e==="screen"?n.jsxs(n.Fragment,{children:[n.jsxs(ne,{children:[n.jsxs(Xt,{children:[n.jsx(Yt,{children:S("lightSync_label_selectScreen")}),n.jsx(ye,{value:Dt,onChange:U,options:kt,width:198})]}),n.jsxs(Xt,{children:[n.jsx(Yt,{children:S("lightSync_label_activeScreenRatio")}),n.jsx(ye,{value:G,onChange:Y,options:O,width:198})]})]}),n.jsx(lo,{children:S("lightSync_info_screenMode")})]}):n.jsx(n.Fragment,{children:n.jsxs(eo,{children:[n.jsxs(ne,{children:[n.jsx(le,{children:S("lightSync_section_effect")}),n.jsxs(Xt,{children:[n.jsx(Yt,{children:S("lightSync_label_rhythmEffect")}),n.jsx(ye,{value:s,onChange:T=>{a(T)},options:H,disabled:e!=="rhythm",width:198})]}),n.jsxs(Xt,{children:[n.jsx(Yt,{children:S("lightSync_label_backgroundColor")}),n.jsxs(go,{children:[n.jsx(ye,{value:c,onChange:r,options:J,width:158}),n.jsxs(xo,{ref:P,children:[n.jsx(bo,{type:"button",onClick:()=>{c!=="炫彩"&&g(!p)},$backgroundType:c,children:n.jsx(yo,{$backgroundType:c,style:{backgroundColor:l}})}),p&&c!=="炫彩"&&n.jsx(mo,{style:{zoom:1/st,transform:`scale(${st})`,transformOrigin:"top right"},children:n.jsx(Pi,{value:(()=>{const T=l.replace("#",""),N=pt.hexToRgb(T);return pt.rgbToNum(N.r,N.g,N.b)})(),onChange:T=>{const N=pt.numToRgb(T),ut=`#${pt.rgbToHex(N.r,N.g,N.b)}`;d(ut)}})})]})]})]}),n.jsx(Kt,{label:S("lightSync_slider_backgroundScale"),value:m.backgroundScale,onChange:T=>b("backgroundScale",T),min:j.backgroundScale.min,max:j.backgroundScale.max,step:j.backgroundScale.step,valueSuffix:"%"}),n.jsx(xe,{children:n.jsx(me,{type:"button",onClick:y,children:S("lightSync_action_resetEffect")})})]}),n.jsxs(ne,{children:[n.jsx(co,{children:n.jsx(le,{style:{margin:0},children:S("lightSync_section_parameters")})}),n.jsx(Kt,{label:S("lightSync_slider_gain"),value:m.gain,onChange:T=>b("gain",T),min:j.gain.min,max:j.gain.max,step:j.gain.step}),n.jsx(Kt,{label:S("lightSync_slider_tilt"),value:m.tilt,onChange:T=>b("tilt",T),min:j.tilt.min,max:j.tilt.max,step:j.tilt.step}),n.jsx(Kt,{label:S("lightSync_slider_contrast"),value:m.contrast,onChange:T=>b("contrast",T),min:j.contrast.min,max:j.contrast.max,step:j.contrast.step}),n.jsx(Kt,{label:S("lightSync_slider_release"),value:m.release,onChange:T=>b("release",T),min:j.release.min,max:j.release.max,step:j.release.step}),n.jsx(Kt,{label:S("lightSync_slider_minDb"),value:m.minDb,onChange:T=>b("minDb",T),min:j.minDb.min,max:j.minDb.max,step:j.minDb.step}),n.jsx(Kt,{label:S("lightSync_slider_maxDb"),value:m.maxDb,onChange:T=>b("maxDb",T),min:j.maxDb.min,max:j.maxDb.max,step:j.maxDb.step}),n.jsx(Kt,{label:S("lightSync_slider_attackFrames"),value:m.attackFrames,onChange:T=>b("attackFrames",T),min:j.attackFrames.min,max:j.attackFrames.max,step:j.attackFrames.step}),n.jsx(xe,{children:n.jsx(me,{type:"button",onClick:w,children:S("lightSync_action_resetParams")})})]})]})})]})})]})},Ji=h.aside`
  border-left: 1px solid #E6E6E6;
  background: #fff;
  width: 466px;
  height: 926px;
  display: flex;
  flex-direction: column;
`,to=h.div`
  padding: 16px 24px;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,An=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 418px;
  flex: 1;
  min-height: 0;
`,eo=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  min-height: 0;
  scrollbar-width: thin;
  
  /* Webkit scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #d5d5d5;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #b0b0b0;
  }
`,ne=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,no=h.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px;
  border-radius: 6px;
  background: rgba(174, 174, 174, 0.1);
`,so=h.div`
  font-size: 18px;
  font-weight: 400;
  color: #3E3E3E;
  font-family: "Source Han Sans SC", sans-serif;
`,io=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,oo=h.div`
  font-size: 14px;
  font-weight: 400;
  color: #AEAEAE;
  font-family: "Source Han Sans SC", sans-serif;
  line-height: 20px;
  flex: 1;
`,ro=h.button`
  position: relative;
  width: 44px;
  height: 24px;
  border: none;
  border-radius: 12px;
  padding: 0;
  background: ${({$checked:o})=>o?"#74EBD5":"#D5D5D5"};
  cursor: pointer;
  outline: none;
`,ao=h.span`
  position: absolute;
  top: 3px;
  left: ${({$checked:o})=>o?"23px":"3px"};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  transition: left 0.2s ease;
`,le=h.div`
  font-size: 18px;
  font-weight: 500;
  color: #3E3E3E;
  font-family: "Source Han Sans SC", sans-serif;
  word-wrap: break-word;
`,co=h.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;h.span`
  display: inline-flex;
  align-items: center;
  color: ${as};

  &:hover {
    color: ${Me};
  }
`;const lo=h.div`
  font-size: 16px;
  font-weight: 400;
  color: #FF0000;
  font-family: "Source Han Sans SC", sans-serif;
  line-height: 22px;
  margin-top: 8px;
`,ho=h.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`,uo=h.button`
  display: inline-flex;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: flex-end;
  gap: 6px;
  border-radius: 6px;
  border: none;
  user-select: none;
  cursor: pointer;
  background: ${({$selected:o})=>o?"var(--高亮2, #74EBD5)":"rgba(174.09, 174.09, 174.09, 0.10)"};
  box-shadow: none;

  &:hover {
    background: ${({$selected:o})=>o?"var(--高亮2, #74EBD5)":"rgba(174.09, 174.09, 174.09, 0.10)"};
  }
`,po=h.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: inline-flex;
  color: #3E3E3E;
`,fo=h.div`
  color: #3E3E3E;
  font-size: 18px;
  font-family: "Source Han Sans SC", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`,Xt=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-right: 6px;
`,Yt=h.div`
  font-size: 16px;
  font-weight: 400;
  color: #3E3E3E;
  font-family: "Source Han Sans SC", sans-serif;
  white-space: nowrap;
  word-wrap: break-word;
`,go=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,xo=h.div`
  position: relative;
  width: 32px;
  height: 32px;
`,mo=h.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 1000;
  width: 384px; /* 352px content + 32px padding */
`,bo=h.button`
  position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 6px;
  border: 1px ${({$backgroundType:o})=>o==="炫彩"||o==="单色"?"var(--不重要字, #D5D5D5)":Me} solid;
  padding: 0;
  background: white;
  cursor: ${({$backgroundType:o})=>o==="炫彩"?"default":"pointer"};

  &:hover {
    ${({$backgroundType:o})=>o!=="炫彩"?`
      border: 1px #74EBD5 solid;
      box-shadow: ${o==="单色"?"0px 0px 10px rgba(116, 235, 213, 0.45)":"none"};
    `:""}
  }

  &:active,
  &:focus {
    outline: none;
    ${({$backgroundType:o})=>o!=="炫彩"?"border: 1.70px #74EBD5 solid;":""}
  }
`,yo=h.div`
  position: absolute;
  inset: 5px;
  width: 22px;
  height: 22px;
  border-radius: 2.54px;
  overflow: hidden;

  ${({$backgroundType:o})=>o==="炫彩"?`
    background: linear-gradient(
      90deg,
      #ff0000 0%,
      #ff7f00 14.29%,
      #ffff00 28.57%,
      #00ff00 42.86%,
      #0000ff 57.14%,
      #4b0082 71.43%,
      #9400d3 85.71%,
      #ff0000 100%
    );
  `:""}
`,xe=h.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,me=h.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #989898;
  background: transparent;
  color: #989898;
  font-size: 16px;
  font-family: "Source Han Sans SC", sans-serif;
  font-weight: 400;
  line-height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  cursor: pointer;

  & svg path {
    fill: #989898;
    stroke: #989898;
  }

  &:hover {
    background: #71A4F1;
    border-color: #71A4F1;
    color: #EEEEEE;

    & svg path {
      fill: #EEEEEE;
      stroke: #EEEEEE;
    }
  }

  &:active {
    background: #71A4F1;
    border-color: #71A4F1;
    color: #EEEEEE;

    & svg path {
      fill: #EEEEEE;
      stroke: #EEEEEE;
    }
  }
`,vo=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,wo=h.div`
  display: flex;
  align-items: center;
  gap: 2px;
  height: 36px;
  padding: 5px 8px;
  border-radius: 6px;
  width: 88px;
  box-sizing: border-box;

  /* 未选中态：灰色描边 */
  background: #ffffff;
  border: none;
  box-shadow: none;
  outline: 1px #CED4DB solid;
  outline-offset: -1px;

  /* 选中态：高亮描边 + 阴影 */
  ${({$highlight:o})=>o&&`
      background: #ffffff;
      box-shadow: 0px 0px 0px 2px rgba(116, 235, 213, 0.20);
      outline: 1px ${Me} solid;
      outline-offset: -1px;
    `}

  &:focus-within {
    background: #ffffff;
    box-shadow: 0px 0px 0px 2px rgba(116, 235, 213, 0.20);
    outline: 1px ${Me} solid;
    outline-offset: -1px;
  }
`,So=h.input`
  border: 0;
  outline: none;
  width: 52px;
  font-size: 14px;
  line-height: 22px;
  color: #B4B9BF;
  background: transparent;
  padding: 0;
  margin: 0;
  text-align: left;
  font-family: "Source Han Sans SC", sans-serif;
  font-weight: 400;

  &:focus {
    color: #3E3E3E;
  }

  /* 去掉浏览器自带 number 箭头 */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`,Co=h.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 24px;
  height: 26px;
  border-radius: 4px;
  overflow: hidden;
  background: #EEF1F4;
`,_n=h.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%) rotate(${({$dir:o})=>o==="up"?"45deg":"-135deg"});
  border-top: 1px solid #8D9094;
  border-left: 1px solid #8D9094;
`,In=h.button`
  position: relative;
  width: 100%;
  height: 13px;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: #E3F7F1;
  }

  &:active {
    background: #D0F1EA;
  }

  &:hover span {
    border-color: ${Me};
  }

  &:active span {
    border-color: #36BFA8;
  }
`,ko=h.span`
  font-size: 14px;
  color: ${as};
  font-family: "Source Han Sans SC", sans-serif;
  font-weight: 400;
`,Re=({value:o,onChange:t,unit:e,highlight:i,min:s,max:a})=>{const[c,r]=u.useState(String(o)),[l,d]=u.useState(!1),f=u.useRef(null);u.useEffect(()=>{l||r(String(o))},[o,l]);const C=w=>{const A=w.target.value;(A===""||/^[+-]?\d*\.?\d*$/.test(A))&&r(A)},m=()=>{d(!1);const w=c.replace(/^\+/,""),A=parseFloat(w);if(isNaN(A))r(String(o));else{let $=Math.round(A);s!==void 0&&$<s&&($=s),a!==void 0&&$>a&&($=a),r(String($)),$!==o&&t($)}},b=()=>{d(!0),setTimeout(()=>{f.current?.select()},0)},y=w=>{w.key==="Enter"?w.currentTarget.blur():w.key==="Escape"&&(r(String(o)),w.currentTarget.blur())};return n.jsxs(vo,{children:[n.jsxs(wo,{$highlight:i||l,children:[n.jsx(So,{ref:f,type:"number",value:c,onChange:C,onFocus:b,onBlur:m,onKeyDown:y}),n.jsxs(Co,{children:[n.jsx(In,{type:"button",onClick:()=>{let w=o+1;a!==void 0&&w>a&&(w=a),t(w)},children:n.jsx(_n,{$dir:"up"})}),n.jsx(In,{type:"button",onClick:()=>{let w=o-1;s!==void 0&&w<s&&(w=s),t(w)},children:n.jsx(_n,{$dir:"down"})})]})]}),n.jsx(ko,{children:e})]})},Eo=""+new URL("../assets/images/rhythm-canvas-background.d92a792b.svg",import.meta.url).href,Do=h.div`
  position: absolute;
`,Ro=h.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 4px 12px;
  font-size: 12px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #1E3B36;
  background-color: ${o=>o.$isselected?"#74EBD5":"#71A4F1"};
`,To=h.div`
  position: relative;
  width: 306px;
  height: 130px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border: 2px solid ${o=>o.$isselected?"#74EBD5":"#71A4F1"};
  background-color: ${o=>o.$isselected?"rgba(116, 235, 213, 0.20)":"rgba(112.55, 164.01, 241.19, 0.20)"};
`,Mo=h.div`
  position: absolute;
  pointer-events: none;
  border: 2px dashed ${o=>o.$isselected?"#74EBD5":"#71A4F1"};
  border-radius: 4px;
  opacity: ${o=>o.$isselected?.8:0};
  transition: opacity 0.15s ease;
`,se=h.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${o=>o.$isselected?"#74EBD5":"#71A4F1"};
  border: 1px solid #1E3B36;
  border-radius: 2px;
  pointer-events: none;
  opacity: ${o=>o.$isselected?1:0};
  transition: opacity 0.15s ease;
`;h.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;const jo=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: background-color 120ms ease, opacity 120ms ease;
  user-select: none;
  border: 0;
  padding: 0;

  width: ${({$size:o})=>o==="sm"?"24px":"28px"};
  height: ${({$size:o})=>o==="sm"?"24px":"28px"};

  background: ${({$active:o,$bg:t})=>t??(o?"rgba(116,235,213,0.25)":"transparent")};

  &:hover:not(:disabled) {
    background: ${({$active:o,$hoverBg:t})=>t??(o?"rgba(116,235,213,0.25)":"rgba(0,0,0,0.05)")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ge=bt.memo(({size:o="md",active:t=!1,backgroundColor:e,hoverBackgroundColor:i,...s})=>n.jsx(jo,{...s,$size:o,$active:t,$bg:e,$hoverBg:i}));Ge.displayName="IconButton";const yn=24,Ao=8,_o=24,Bn=Ao+_o,$n=1,we=(o,t,e,i,s)=>{const a=s*Math.PI/180,c=Math.cos(a),r=Math.sin(a),l=o+e/2,d=t+i/2,f=(w,A)=>{const $=w-l,Q=A-d;return{x:l+$*c-Q*r,y:d+$*r+Q*c}},m=[{x:o,y:t-yn},{x:o+e+Bn,y:t-yn},{x:o,y:t+i+$n},{x:o+e+Bn,y:t+i+$n}].map(w=>f(w.x,w.y)),b=m.map(w=>w.x),y=m.map(w=>w.y);return{left:Math.min(...b),top:Math.min(...y),right:Math.max(...b),bottom:Math.max(...y)}},Io=(o,t,e,i,s,a,c)=>{const r=we(o,t,e,i,s),l=r.right-r.left,d=r.bottom-r.top;return l<=a&&d<=c},Fn=(o,t,e,i,s,a,c)=>{const r=we(o,t,e,i,s);let l=o,d=t;return r.left<0?l=o-r.left:r.right>a&&(l=o-(r.right-a)),r.top<0?d=t-r.top:r.bottom>c&&(d=t-(r.bottom-c)),{x:l,y:d}},Bo=bt.memo(({name:o,style:t,onOpenMenu:e,onRotate:i,onCloseMenu:s,onSelect:a,isselected:c,painter:r})=>{je(!0);const{getString:d}=he(),[f,C]=u.useState(!1),[m,b]=u.useState({x:0,y:0}),[y,w]=u.useState(!1),A=u.useRef(!1),$=u.useRef(0),Q=u.useRef(0),S=u.useRef({x:0,y:0}),[V,ot]=u.useState(null),[st,ct]=u.useState(!1),H=u.useRef({mouseX:0,mouseY:0,startX:0,startY:0,startWidth:0,startHeight:0,startAabbW:0,startAabbH:0,startAabbX:0,startAabbY:0,rotation:0,startFullBoundsLeft:0,startFullBoundsTop:0,startFullBoundsRight:0,startFullBoundsBottom:0}),J=u.useRef(null),M=8,Ft=x=>{if(!r)return;x.preventDefault(),a?.();const D=J.current?.getBoundingClientRect();if(!D)return;const I=x.clientX-D.left,B=x.clientY-D.top,W=D.width,X=D.height,q=I>=0&&I<=M*2,L=I>=W-M*2&&I<=W,_=B>=0&&B<=M*2,p=B>=X-M*2&&B<=X;let g=null;if(_&&q?g="nw":_&&L?g="ne":p&&q?g="sw":p&&L?g="se":_?g="n":p?g="s":q?g="w":L&&(g="e"),g){ot(g),ct(!0);const P=r.rotation*Math.PI/180,F=Math.abs(Math.cos(P)),ft=Math.abs(Math.sin(P)),z=r.sw*F+r.sh*ft,Z=r.sw*ft+r.sh*F,lt=(z-r.sw)/2,gt=(Z-r.sh)/2,St=we(r.sx,r.sy,r.sw,r.sh,r.rotation);H.current={mouseX:x.clientX,mouseY:x.clientY,startX:r.sx,startY:r.sy,startWidth:r.sw,startHeight:r.sh,startAabbW:z,startAabbH:Z,startAabbX:r.sx-lt,startAabbY:r.sy-gt,rotation:r.rotation,startFullBoundsLeft:St.left,startFullBoundsTop:St.top,startFullBoundsRight:St.right,startFullBoundsBottom:St.bottom},document.body.style.cursor=`${g}-resize`;return}I>M*2&&I<W-M*2&&B>M*2&&B<X-M*2&&(document.body.style.cursor="grabbing",C(!0),b({x:x.clientX-r.sx,y:x.clientY-r.sy}))};u.useEffect(()=>{if(!r)return;const x=D=>{if(st||f||y)return;const I=J.current?.getBoundingClientRect();if(!I){ot(null),document.body.style.cursor="auto";return}const B=D.clientX-I.left,W=D.clientY-I.top,X=I.width,q=I.height;if(B<0||B>X||W<0||W>q){ot(null),document.body.style.cursor="auto";return}const L=B>=0&&B<=M*2,_=B>=X-M*2&&B<=X,p=W>=0&&W<=M*2,g=W>=q-M*2&&W<=q;let P=null;p&&L?P="nw":p&&_?P="ne":g&&L?P="sw":g&&_?P="se":p?P="n":g?P="s":L?P="w":_&&(P="e"),ot(P),P?document.body.style.cursor=`${P}-resize`:document.body.style.cursor="auto"};return document.addEventListener("mousemove",x),()=>{document.removeEventListener("mousemove",x)}},[r,st,f,y,M]),u.useEffect(()=>{if(!r||!f)return()=>{document.body.style.cursor="auto"};const x=I=>{const B=J.current?.parentElement,W=B?.clientWidth??1/0,X=B?.clientHeight??1/0,q=I.clientX-m.x,L=I.clientY-m.y,{x:_,y:p}=Fn(q,L,r.sw,r.sh,r.rotation,W,X);r.setPos(_,p)},D=()=>{C(!1),document.body.style.cursor="auto"};return document.addEventListener("mousemove",x),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",D),document.body.style.cursor="auto"}},[f,r,m.x,m.y]),u.useEffect(()=>{if(!r||!st)return()=>{document.body.style.cursor="auto"};const x=I=>{if(!V)return;const B=J.current?.parentElement,W=B?.clientWidth??1/0,X=B?.clientHeight??1/0,q=I.clientX-H.current.mouseX,L=I.clientY-H.current.mouseY,_=r.MIN_WIDTH,p=r.MIN_HEIGHT,g=800,P=800,F=H.current.rotation,ft=F*Math.PI/180,z=Math.abs(Math.cos(ft)),Z=Math.abs(Math.sin(ft)),lt=H.current.startAabbW,gt=H.current.startAabbH,St=H.current.startAabbX,Pt=H.current.startAabbY,_t=H.current.startWidth,It=H.current.startHeight;let Lt=lt,T=gt;const N=(V?.length??0)>1,ut=!N&&(V==="e"||V==="w"),Ut=!N&&(V==="n"||V==="s");V.includes("e")?Lt=lt+q:V.includes("w")&&(Lt=lt-q),V.includes("s")?T=gt+L:V.includes("n")&&(T=gt-L),ut?T=gt:Ut&&(Lt=lt);let rt,vt;const xt=z*z-Z*Z;if(Math.abs(xt)>.01)rt=(Lt*z-T*Z)/xt,vt=(T*z-Lt*Z)/xt;else{const at=_t/It,nt=Math.SQRT2,tt=Lt*nt,et=T*nt;vt=(tt+et)/2/(at+1),rt=at*vt}let Ce,ke,Qt,Ot;if(ut){const at=_*z+p*Z,nt=g*z+P*Z,tt=Math.max(at,Math.min(nt,Lt)),et=gt;if(Math.abs(xt)>.01)Qt=(tt*z-et*Z)/xt,Ot=(et*z-tt*Z)/xt;else{const ht=_t/It;Ot=et/(Math.SQRT2*(ht+1)/ht),Qt=ht*Ot}Ce=tt,ke=et}else if(Ut){const at=_*Z+p*z,nt=g*Z+P*z,tt=Math.max(at,Math.min(nt,T)),et=lt;if(Math.abs(xt)>.01)Qt=(et*z-tt*Z)/xt,Ot=(tt*z-et*Z)/xt;else{const ht=_t/It;Ot=et/(Math.SQRT2*(ht+1)/ht),Qt=ht*Ot}Ce=et,ke=tt}else Qt=Math.max(_,Math.min(g,rt)),Ot=Math.max(p,Math.min(P,vt)),Ce=Qt*z+Ot*Z,ke=Qt*Z+Ot*z;rt=Qt,vt=Ot;const Cn=(Ce-rt)/2,kn=(ke-vt)/2;let Ee,oe;V.includes("w")?Ee=St+lt-Ce+Cn:Ee=St+Cn,V.includes("n")?oe=Pt+gt-ke+kn:oe=Pt+kn;let Ae=we(Ee,oe,rt,vt,F),Bt=rt,Wt=vt,ue=Ee,pe=oe;const _e=(at,nt,tt,et,ht,Rt)=>{let Jt,re,te;if(Rt?.keepHeight){const Tt=_*z+p*Z,wt=g*z+P*Z;Jt=Tt,re=wt,te=at*z+nt*Z}else if(Rt?.keepWidth){const Tt=_*Z+p*z,wt=g*Z+P*z;Jt=Tt,re=wt,te=at*Z+nt*z}else Jt=ht?_:p,re=ht?g:P,te=ht?at:nt;let ae=Jt,Ht=ae;const Qe=25;for(let Tt=0;Tt<Qe;Tt++){const wt=(ae+te)/2;let Ct,zt;if(Rt?.keepHeight){const fe=wt,ge=gt;if(Math.abs(xt)>.01)Ct=(fe*z-ge*Z)/xt,zt=(ge*z-fe*Z)/xt;else{const ce=_t/It;zt=ge/(Math.SQRT2*(ce+1)/ce),Ct=ce*zt}}else if(Rt?.keepWidth){const fe=lt,ge=wt;if(Math.abs(xt)>.01)Ct=(fe*z-ge*Z)/xt,zt=(ge*z-fe*Z)/xt;else{const ce=_t/It;zt=fe/(Math.SQRT2*(ce+1)/ce),Ct=ce*zt}}else Ct=at,zt=nt,ht?Ct=wt:zt=wt;const{x:ps,y:fs}=et(Ct,zt),gs=we(ps,fs,Ct,zt,F);tt(gs)?(Ht=wt,ae=wt):te=wt}Ht=Math.max(Jt,Math.min(re,Ht));let ee,Vt;if(Rt?.keepHeight){const Tt=Ht,wt=gt;if(Math.abs(xt)>.01)ee=(Tt*z-wt*Z)/xt,Vt=(wt*z-Tt*Z)/xt;else{const Ct=_t/It;Vt=wt/(Math.SQRT2*(Ct+1)/Ct),ee=Ct*Vt}}else if(Rt?.keepWidth){const Tt=lt,wt=Ht;if(Math.abs(xt)>.01)ee=(Tt*z-wt*Z)/xt,Vt=(wt*z-Tt*Z)/xt;else{const Ct=_t/It;Vt=Tt/(Math.SQRT2*(Ct+1)/Ct),ee=Ct*Vt}}else ee=at,Vt=nt,ht?ee=Ht:Vt=Ht;const{x:hs,y:us}=et(ee,Vt);return{w:ee,h:Vt,x:hs,y:us}},Ie=(at,nt,tt,et,ht)=>{const Rt=ht?.aabbW??at*z+nt*Z,Jt=ht?.aabbH??at*Z+nt*z,re=(Rt-at)/2,te=(Jt-nt)/2;let ae=Ee,Ht=oe;return tt==="right"?ae=et-Rt+re:tt==="left"&&(ae=et+re),tt==="bottom"?Ht=et-Jt+te:tt==="top"&&(Ht=et+te),{x:ae,y:Ht}};if(V.includes("w")){if(Ae.left<0){const at=St+lt,nt=ut,tt=_e(rt,vt,et=>et.left>=0,(et,ht)=>Ie(et,ht,"right",at,nt?{aabbH:gt}:void 0),!0,nt?{keepHeight:!0}:void 0);Bt=tt.w,Wt=tt.h,ue=tt.x,pe=oe}}else if(V.includes("e")&&Ae.right>W){const at=St,nt=ut,tt=_e(rt,vt,et=>et.right<=W,(et,ht)=>Ie(et,ht,"left",at,nt?{aabbH:gt}:void 0),!0,nt?{keepHeight:!0}:void 0);Bt=tt.w,Wt=tt.h,ue=tt.x,pe=oe}if(V.includes("n")){if(Ae.top<0){const at=Pt+gt,nt=Ut,tt=_e(Bt,vt,et=>et.top>=0,(et,ht)=>{const Rt=Ie(et,ht,"bottom",at,nt?{aabbW:lt}:void 0);return{x:ue,y:Rt.y}},!1,nt?{keepWidth:!0}:void 0);Bt=tt.w,Wt=tt.h,pe=tt.y}}else if(V.includes("s")&&Ae.bottom>X){const at=Pt,nt=Ut,tt=_e(Bt,vt,et=>et.bottom<=X,(et,ht)=>{const Rt=Ie(et,ht,"top",at,nt?{aabbW:lt}:void 0);return{x:ue,y:Rt.y}},!1,nt?{keepWidth:!0}:void 0);Bt=tt.w,Wt=tt.h,pe=tt.y}Bt=Math.max(_,Math.min(g,Bt)),Wt=Math.max(p,Math.min(P,Wt));const Be=we(ue,pe,Bt,Wt,F),Ze=Be.right-Be.left,qe=Be.bottom-Be.top;if(Ze>W||qe>X){const at=Ze>W?W/Ze:1,nt=qe>X?X/qe:1,tt=Math.min(at,nt);tt<1&&(Bt=Math.max(_,Bt*tt),Wt=Math.max(p,Wt*tt))}r.setSize(Bt,Wt),r.setPos(ue,pe)},D=()=>{ct(!1),document.body.style.cursor="auto"};return document.addEventListener("mousemove",x),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",D),document.body.style.cursor="auto"}},[st,r,V]);const kt=x=>{if(!r)return;x.preventDefault(),x.stopPropagation(),s?.(),document.body.style.cursor="grabbing",A.current=!0,w(!0),$.current=r.rotation;const D=J.current?.parentElement?.getBoundingClientRect();D&&(S.current={x:D.left+r.sx+r.sw/2,y:D.top+r.sy+r.sh/2},Q.current=Math.atan2(x.clientY-S.current.y,x.clientX-S.current.x))};u.useEffect(()=>{if(!r||!y)return()=>{document.body.style.cursor="auto"};const x=I=>{if(!A.current)return;const B=J.current?.parentElement,W=B?.clientWidth??1/0,X=B?.clientHeight??1/0;let L=Math.atan2(I.clientY-S.current.y,I.clientX-S.current.x)-Q.current;L=L*180/Math.PI;let _=Math.round($.current+L);if(_=_%360,_>180&&(_-=360),_<-180&&(_+=360),!Io(r.sx,r.sy,r.sw,r.sh,_,W,X))return;r.setRotation(_);const{x:g,y:P}=Fn(r.sx,r.sy,r.sw,r.sh,_,W,X);(g!==r.sx||P!==r.sy)&&r.setPos(g,P)},D=()=>{A.current=!1,w(!1),document.body.style.cursor="auto"};return document.addEventListener("mousemove",x),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",D),document.body.style.cursor="auto"}},[y,r]);const O=u.useMemo(()=>{if(!r)return{width:0,height:0,offsetX:0,offsetY:0};const x=r.rotation*Math.PI/180,D=Math.abs(Math.cos(x)),I=Math.abs(Math.sin(x)),B=r.sw*D+r.sh*I,W=r.sw*I+r.sh*D,X=(B-r.sw)/2,q=(W-r.sh)/2;return{width:B,height:W,offsetX:X,offsetY:q}},[r?.sw,r?.sh,r?.rotation]),Et=r?{left:r.sx-O.offsetX-M,top:r.sy-O.offsetY-M,width:O.width+M*2,height:O.height+M*2,zIndex:f||y?1e3:c?999:void 0,...t}:t??{},Dt=r?{position:"absolute",left:M+O.offsetX,top:M+O.offsetY,width:r.sw,height:r.sh,transform:`rotate(${r.rotation}deg)`,transformOrigin:"center center"}:void 0,E=r?{position:"absolute",left:0,top:-yn}:void 0,v=r?{width:"100%",height:"100%",cursor:(()=>f||y?"grabbing":st||V?`${V}-resize`:"grab")()}:void 0,U=r?{position:"absolute",left:r.sw+8,top:1}:void 0,Y=r?{position:"absolute",left:r.sw+8,top:r.sh-24+1}:void 0,k=u.useMemo(()=>c?"#74EBD5":"#71A4F1",[c]),K=u.useMemo(()=>c?"#1E3B36":"#FFFFFF",[c]),R=r?{left:M-2,top:M-2,width:O.width+4,height:O.height+4}:void 0;return n.jsxs(Do,{ref:J,style:Et,onMouseDown:Ft,onMouseLeave:()=>{!st&&!f&&!y&&(ot(null),document.body.style.cursor="auto")},children:[r&&c&&n.jsxs(n.Fragment,{children:[n.jsx(Mo,{$isselected:c,style:R}),n.jsx(se,{$isselected:c,style:{left:M-6,top:M-6}})," ",n.jsx(se,{$isselected:c,style:{left:M+O.width-2,top:M-6}})," ",n.jsx(se,{$isselected:c,style:{left:M-6,top:M+O.height-2}})," ",n.jsx(se,{$isselected:c,style:{left:M+O.width-2,top:M+O.height-2}})," ",n.jsx(se,{$isselected:c,style:{left:M+O.width/2-4,top:M-6}})," ",n.jsx(se,{$isselected:c,style:{left:M+O.width/2-4,top:M+O.height-2}})," ",n.jsx(se,{$isselected:c,style:{left:M-6,top:M+O.height/2-4}})," ",n.jsx(se,{$isselected:c,style:{left:M+O.width-2,top:M+O.height/2-4}})," "]}),n.jsxs("div",{style:Dt,children:[r&&n.jsxs(n.Fragment,{children:[n.jsx(Ge,{"aria-label":d("lightSync_aria_deviceMore"),size:"sm",backgroundColor:k,hoverBackgroundColor:k,style:{...U,color:K},onMouseDown:x=>x.stopPropagation(),onClick:x=>e(x.currentTarget),children:n.jsx($o,{})}),n.jsx(Ge,{"aria-label":d("lightSync_action_rotate"),size:"sm",backgroundColor:"transparent",hoverBackgroundColor:"transparent",style:{...Y,color:k},onClick:r?void 0:i,onMouseDown:r?kt:void 0,children:n.jsx(Fo,{})})]}),n.jsx(Ro,{$isselected:c,style:E,children:o}),n.jsx(To,{$isselected:c,style:v})]})]})}),ls=h.svg`
  width: 20px;
  height: 20px;
  display: block;
`,$o=()=>n.jsx(ls,{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:n.jsx("path",{d:"M5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"})}),Fo=()=>n.jsx(ls,{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:n.jsx("path",{d:"M12 6V3L8 7l4 4V8c2.76 0 5 2.24 5 5a5 5 0 0 1-9.9 1H5.02A7 7 0 1 0 12 6Z"})}),Pn=21*15,Ln=6*15,Hn=24,Po=8,Lo=24,Nn=Po+Lo,Un=1,be=o=>o.id&&o.devicePath?`${o.id}_${o.devicePath}`:o.name,On=o=>{const{sx:t,sy:e,sw:i,sh:s,rotation:a}=o,c=a*Math.PI/180,r=Math.cos(c),l=Math.sin(c),d=t+i/2,f=e+s/2,C=(A,$)=>{const Q=A-d,S=$-f;return{x:d+Q*r-S*l,y:f+Q*l+S*r}},b=[{x:t,y:e-Hn},{x:t+i+Nn,y:e-Hn},{x:t,y:e+s+Un},{x:t+i+Nn,y:e+s+Un}].map(A=>C(A.x,A.y)),y=b.map(A=>A.x),w=b.map(A=>A.y);return{left:Math.min(...y),top:Math.min(...w),right:Math.max(...y),bottom:Math.max(...w)}},Ho=()=>{je(!0);const{devices:t,selectedDeviceId:e,setSelectedDeviceId:i,setDeviceVisible:s,setOtherDevicesVisible:a}=Se(),{getString:c}=he(),r=u.useRef(null),l=u.useRef(null),d=u.useRef(null),f=u.useRef(new Set),[C,m]=bt.useState(!1),[b,y]=bt.useState(null),[w,A]=bt.useState(!1),[$,Q]=bt.useState(null),[S,V]=bt.useState(!1),[ot,st]=bt.useState(0),[ct,H]=bt.useState(!1),[J,M]=bt.useState(!1),[Ft,kt]=bt.useState(!1),O=()=>{y(null),A(!1),Q(null),V(!1),st(0),H(!1),M(!1),kt(!1)},Et=(v,U,Y)=>{const k=r.current;if(!k)return{left:v,top:U};const K=k.getBoundingClientRect(),R=8,x=116,D=Y??(w?180:150),I=Math.max(R,K.width-x-R),B=Math.max(R,K.height-D-R);return{left:Math.min(Math.max(v,R),I),top:Math.min(Math.max(U,R),B)}},Dt=(v,U)=>{const Y=r.current;if(!Y)return;const k=Y.getBoundingClientRect(),K=U.getBoundingClientRect(),R=10,x=8,D=116,I=150,B=K.right-k.left,W=K.top-k.top,X=B+R+D>k.width;let q,L;if(X){const _=t.find(Z=>be(Z)===v),p=_?.painter.sx??0,g=_?.painter.sy??0,P=_?.painter.sh??0,F=g+P;q=p+(_?.painter.sw??0)-D,F+x+I>k.height?L=g-I-x:L=F+x}else q=B+R,L=W;i(v),y(v),A(!1),Q(Et(q,L)),H(!0),M(!1),kt(!1)},E=b?t.find(v=>be(v)===b):void 0,G=v=>{v.setSize(Pn,Ln),v.setRotation(0),v.moveToCenter()};return u.useEffect(()=>{const v=r.current;if(!v)return;const U=yt.canvas,Y=v.firstChild;Y?v.insertBefore(U,Y):v.appendChild(U);const k=new ResizeObserver(K=>{for(const R of K){const{width:x,height:D}=R.contentRect;x>0&&D>0&&(yt.init(),m(!0))}});return k.observe(v),()=>{k.disconnect(),U.parentNode===v&&v.removeChild(U),m(!1)}},[]),u.useEffect(()=>{if(!b)return()=>{};const v=Y=>{if(!l.current)return;const k=Y.target;k&&(l.current.contains(k)||O())},U=Y=>{Y.key==="Escape"&&O()};return document.addEventListener("mousedown",v),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",v),document.removeEventListener("keydown",U)}},[b]),u.useEffect(()=>{if(!ct||!$||!l.current||!r.current||!E)return;const v=requestAnimationFrame(()=>{const U=l.current,Y=r.current;if(!U||!Y||!E)return;const k=U.getBoundingClientRect(),K=Y.getBoundingClientRect(),R=8,x=k.height,D=k.width,I=On(E.painter),B=I.left,W=I.top,X=I.right,q=I.bottom;let L=$.top,_=$.left;const p=K.height-x-R,g=K.width-D-R;L>p&&(L=Math.max(R,p)),_>g&&(_=Math.max(R,g)),L<R&&(L=R),_<R&&(_=R);const P=_+D,F=L+x,ft=_<X&&P>B,z=L<q&&F>W;if(ft&&z){const lt=W-R,gt=K.height-R-q,St=B-R,Pt=K.width-R-X,_t=Pt>=D,It=gt>=x,Lt=St>=D,T=lt>=x;if(_t)_=X+R,L=Math.min(Math.max(L,R),p);else if(It)L=q+R,_=Math.max(R,Math.min(X-D,g));else if(Lt)_=B-D-R,L=Math.min(Math.max(L,R),p);else if(T)L=W-x-R,_=Math.max(R,Math.min(X-D,g));else{const ut=[{space:Pt,left:Math.min(X+R,g),top:L},{space:gt,left:_,top:Math.min(q+R,p)},{space:St,left:Math.max(B-D-R,R),top:L},{space:lt,left:_,top:Math.max(W-x-R,R)}].reduce((Ut,rt)=>Ut.space>rt.space?Ut:rt);_=ut.left,L=ut.top}L=Math.min(Math.max(L,R),p),_=Math.min(Math.max(_,R),g)}(L!==$.top||_!==$.left)&&Q({left:_,top:L}),H(!1),M(!0)});return()=>cancelAnimationFrame(v)},[ct,$,E]),u.useEffect(()=>{!b||!$||(H(!0),w&&kt(!1))},[w]),u.useEffect(()=>{if(!w||!r.current||!E)return;const v=setTimeout(()=>{const U=d.current,Y=r.current;if(!U||!Y||!E)return;const k=U.getBoundingClientRect(),K=Y.getBoundingClientRect(),R=8,x=k.top-K.top,D=k.bottom-K.top,I=k.left-K.left,B=k.right-K.left,W=k.height,X=On(E.painter),q=X.top,L=X.bottom,_=X.left,p=X.right;let g=0;D>K.height-R&&(g=-(D-(K.height-R)));let P=x+g,F=D+g;const ft=I<p&&B>_,z=P<L&&F>q;if(ft&&z){const lt=q-R,gt=K.height-R-L;lt>=W?g=q-R-W-x:gt>=W?g=L+R-x:lt>=gt?g=R-x:g=K.height-R-W-x,P=x+g,F=D+g}P<R?g=R-x:F>K.height-R&&(g=K.height-R-W-x),Math.abs(g)>1&&st(lt=>lt+g),kt(!0)},0);return()=>clearTimeout(v)},[w,E]),u.useEffect(()=>{C&&t.forEach(v=>{const U=be(v);f.current.has(U)||(f.current.add(U),setTimeout(()=>{v.painter.moveToCenter()},0))})},[t,C]),n.jsxs(No,{ref:r,children:[t.filter(v=>v.visible).map(v=>{const U=be(v),Y=U===e;return n.jsx(Bo,{painter:v.painter,name:v.name,onOpenMenu:k=>Dt(U,k),onRotate:()=>{v.painter.setRotation(v.painter.rotation+90)},onCloseMenu:O,onSelect:()=>{Y||i(U)},isselected:Y},U)}),b&&$&&E&&n.jsx(Uo,{ref:l,style:{left:$.left,top:$.top,opacity:J?1:0,visibility:J?"visible":"hidden"},onMouseDown:v=>v.stopPropagation(),children:n.jsxs(Oo,{children:[n.jsx(cn,{type:"button",onClick:()=>{const v=be(E);s(v,!1),O()},children:c("lightSync_menu_hideCurrent")}),n.jsx(cn,{type:"button",onClick:()=>{const v=be(E);a(v,!1),O()},children:c("lightSync_menu_hideOthers")}),n.jsx(cn,{type:"button",onClick:()=>{E.painter.moveToCenter(),O()},children:c("lightSync_menu_moveToCenter")}),n.jsxs(Go,{children:[n.jsx(Wo,{type:"button",onClick:()=>{const v=!w;if(v&&$&&r.current&&E){const R=r.current.clientWidth,x=r.current.clientHeight,D=$.left+116+8+100;V(D>R-8);const I=27,B=8,W=3,X=B*2+I*3,q=B+I*W,L=$.top+q,_=L+X,p=E.painter.sy+E.painter.sh;let g=0;_>x-8&&(g=x-8-_);const P=L+g,F=_+g;if(P<p&&F>E.painter.sy)if(E.painter.sy-8>=X)g=E.painter.sy-8-_;else{const z=-(L-8);g=Math.max(g,z)}st(g)}A(v)},children:n.jsxs(Vo,{children:[n.jsx("span",{children:c("重置")}),n.jsx(zo,{children:n.jsx(qo,{})})]})}),w&&n.jsx(Xo,{ref:d,$onLeft:S,$topOffset:ot,style:{opacity:Ft?1:0,visibility:Ft?"visible":"hidden"},children:n.jsxs(Yo,{children:[n.jsx(ln,{type:"button",onClick:()=>{G(E.painter),O()},children:c("lightSync_action_all")}),n.jsx(ln,{type:"button",onClick:()=>{E.painter.setSize(Pn,Ln),O()},children:c("lightSync_label_size")}),n.jsx(ln,{type:"button",onClick:()=>{E.painter.setRotation(0),O()},children:c("lightSync_action_rotate")})]})})]})]})})]})},No=h.div`
  position: relative;
  width: 100%;
  height: 100%;
`,Uo=h.div`
  position: absolute;
  z-index: 2000;
  width: 116px;
  background: rgba(116, 235, 213, 0.25);
  border: 1px solid #74EBD5;
  border-radius: 6px;
  padding: 8px;
  user-select: none;
  transition: opacity 0.1s ease-out, visibility 0.1s ease-out;
`,Oo=h.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100px;
`,ds=h.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 7.5px 14px;
  border-radius: 3px;
  font-family: Source Han Sans SC;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`,cn=h(ds)`
  color: #ffffff;
  
  &:hover {
    background: #74EBD5;
    color: #3E3E3E;
  }
`,Wo=h(ds)`
  color: #ffffff;
  
  &:hover {
    background: #74EBD5;
    color: #3E3E3E;
  }
`,Vo=h.div`
  display: flex;
  align-items: center;
  gap: 32px;
`,zo=h.span`
  display: inline-flex;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  transform: rotate(270deg);
  transform-origin: center;
  flex: none;
`,Go=h.div`
  position: relative;
  width: 100%;
`,Xo=h.div`
  position: absolute;
  top: ${o=>o.$topOffset}px;
  ${o=>o.$onLeft?"right: calc(100% + 8px);":"left: calc(100% + 8px);"}
  background: rgba(116, 235, 213, 0.25);
  border: 1px solid #74EBD5;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  transition: opacity 0.1s ease-out, visibility 0.1s ease-out;
`,Yo=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
`,Ko=h.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 7.5px 30px;
  border-radius: 3px;
  font-family: Source Han Sans SC;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
`,ln=h(Ko)`
  color: #ffffff;
  
  &:hover {
    background: #74EBD5;
    color: #3E3E3E;
  }
`,Zo=h.svg`
  width: 16px;
  height: 16px;
  display: block;
`,qo=()=>n.jsx(Zo,{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("polygon",{points:"4,6 8,12 12,6",fill:"#FFFFFF"})}),Oe=21,dn=6,Qo=30,We=4,Jo=()=>{je(!0);const t=u.useRef(null),e=u.useRef(),s=Qo*1,a=(c,r,l,d,f,C)=>{const m=r*(s+We),b=l*(s+We),y=2;c.fillStyle=`rgb(${d}, ${f}, ${C})`,c.beginPath(),c.roundRect(m,b,s,s,y),c.fill(),c.strokeStyle="rgba(255, 255, 255, 0.16)",c.lineWidth=.2,c.stroke()};return u.useEffect(()=>{const c=t.current;if(!c)return;const r=c.getContext("2d",{willReadFrequently:!0});if(!r)return;const l=Oe*s+(Oe-1)*We,d=dn*s+(dn-1)*We;return c.width=l,c.height=d,e.current=setInterval(()=>{const f=Zt.outputs;if(f.length>0){r.clearRect(0,0,l,d);for(let C=0;C<dn;C++)for(let m=0;m<Oe;m++){const b=m+C*Oe,y=f[b*3]||0,w=f[b*3+1]||0,A=f[b*3+2]||0;a(r,m,C,y,w,A)}}},30),()=>{e.current&&clearInterval(e.current)}},[]),n.jsx(tr,{ref:t})},tr=h.canvas`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 6px;
`,er=()=>{je(!0);const{selectedMode:t}=Se(),e=1/(vn()*.95);return n.jsxs(nr,{scale:e,children:[n.jsx(sr,{}),t==="rhythm"&&n.jsx(Ho,{}),t==="screen"&&n.jsx(Jo,{})]})},nr=h.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 508px;
  zoom: ${({scale:o})=>o};
  max-width: 100%;
  overflow: hidden;
  border-radius: 6px;
  background: #0d0f12;
  padding: 12px;
`,sr=h.div`
  position: absolute;
  inset: 0;
  background-image: url(${Eo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,ir=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,or=h.button`
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 14px;
  line-height: normal;
  font-weight: 400;
  font-family: var(--font-family-sc, "Source Han Sans SC-Regular");
  border: 1px solid;
  cursor: pointer;
  user-select: none;

  ${({$active:o})=>o?`
        background: var(--高亮2, #74EBD5);
        color: #445E5A;
        border-color: var(--高亮2, #74EBD5);
      `:`
        background: #ffffff;
        color: #ced4db;
        border-color: #ced4db;
      `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;function rr({value:o,options:t,onChange:e,disabled:i,className:s}){return n.jsx(ir,{className:s,children:t.map(a=>{const c=a.value===o;return n.jsx(or,{type:"button",disabled:i,$active:c,onClick:()=>{e(c?"not-selected":a.value)},children:a.label},a.value)})})}const Wn=h.svg`
  width: 24px;
  height: 24px;
  color: #74EBD5;
  fill: none;
`,ar=({hidden:o})=>o?n.jsxs(Wn,{viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M7.17969 8.59375C5.84472 9.44108 4.72449 10.4693 3.94434 11.2842C3.54935 11.6968 3.54935 12.3032 3.94434 12.7158C4.75801 13.5657 5.9401 14.65 7.35156 15.5166C8.76638 16.3852 10.3542 17 12 17C13.0192 17 14.0155 16.7628 14.9629 16.377L16.4766 17.8906C15.1394 18.5415 13.6239 19 12 19C9.86008 19 7.90787 18.205 6.30469 17.2207C4.69818 16.2344 3.38413 15.0221 2.5 14.0986C1.36457 12.9126 1.36457 11.0874 2.5 9.90137C3.27689 9.08988 4.38586 8.05567 5.7334 7.14746L7.17969 8.59375ZM12 5C14.1399 5 16.0921 5.79503 17.6953 6.7793C19.3018 7.76564 20.6159 8.97786 21.5 9.90137C22.6354 11.0874 22.6354 12.9126 21.5 14.0986C20.7231 14.9102 19.6133 15.9433 18.2656 16.8516L16.8193 15.4053C18.1544 14.5579 19.2755 13.5308 20.0557 12.7158C20.4507 12.3032 20.4507 11.6968 20.0557 11.2842C19.242 10.4343 18.0599 9.34996 16.6484 8.4834C15.2336 7.61482 13.6458 7 12 7C10.9807 7 9.98368 7.23615 9.03613 7.62207L7.52344 6.10938C8.86063 5.45846 10.3761 5 12 5ZM10.5039 11.918C10.5024 11.9452 10.5 11.9725 10.5 12C10.5 12.3978 10.6582 12.7792 10.9395 13.0605C11.2208 13.3418 11.6022 13.5 12 13.5L12.0811 13.4951L13.6631 15.0771C13.2067 15.3241 12.699 15.47 12.1738 15.4961L12 15.5C11.0718 15.5 10.1818 15.131 9.52539 14.4746C8.86902 13.8182 8.5 12.9283 8.5 12C8.5 11.4134 8.64676 10.8417 8.9209 10.335L10.5039 11.918ZM12 8.5C12.9282 8.5 13.8182 8.86902 14.4746 9.52539C15.131 10.1818 15.5 11.0717 15.5 12C15.5 12.5865 15.3521 13.1574 15.0781 13.6641L13.4951 12.0811C13.4966 12.0541 13.5 12.0272 13.5 12C13.5 11.6022 13.3418 11.2208 13.0605 10.9395C12.7792 10.6582 12.3978 10.5 12 10.5C11.9725 10.5 11.9452 10.5024 11.918 10.5039L10.335 8.9209C10.8417 8.64676 11.4134 8.5 12 8.5Z",fill:"var(--未选中状态, #989898)"}),n.jsx("path",{d:"M5 3L21 19",stroke:"var(--未选中状态, #989898)","stroke-width":"2"})]}):n.jsxs(Wn,{viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M12 18C15.7858 18 19.0802 15.1808 20.778 13.4074C21.5432 12.6081 21.5432 11.3919 20.778 10.5926C19.0802 8.81917 15.7858 6 12 6C8.21418 6 4.91984 8.81917 3.222 10.5926C2.45677 11.3919 2.45677 12.6081 3.222 13.4074C4.91984 15.1808 8.21418 18 12 18Z",stroke:"#74EBD5","stroke-width":"2","stroke-linejoin":"round"}),n.jsx("path",{d:"M12 14.5C12.663 14.5 13.2989 14.2366 13.7678 13.7678C14.2366 13.2989 14.5 12.663 14.5 12C14.5 11.337 14.2366 10.7011 13.7678 10.2322C13.2989 9.76339 12.663 9.5 12 9.5C11.337 9.5 10.7011 9.76339 10.2322 10.2322C9.76339 10.7011 9.5 11.337 9.5 12C9.5 12.663 9.76339 13.2989 10.2322 13.7678C10.7011 14.2366 11.337 14.5 12 14.5Z",stroke:"#74EBD5","stroke-width":"2","stroke-linejoin":"round"})]}),cr=()=>{const{devices:o,selectedDeviceId:t,setSelectedDeviceId:e,toggleDeviceVisible:i,setDeviceMode:s}=Se(),{getString:a,currentLanguage:c}=he(),r=bt.useMemo(()=>[{value:"rhythm",label:a("lightSync_modeOption_rhythm")},{value:"screen",label:a("lightSync_modeOption_screen")}],[c,a]);return n.jsxs(lr,{children:[n.jsxs(dr,{children:[n.jsx(hn,{children:a("lightSync_deviceTable_visibility")}),n.jsx(hn,{children:a("lightSync_deviceTable_name")}),n.jsx(hn,{children:a("lightSync_deviceTable_mode")})]}),n.jsx(hr,{children:o.map(l=>{const d=l.id&&l.devicePath?`${l.id}_${l.devicePath}`:l.name,f=d===t;return n.jsxs(ur,{role:"button",tabIndex:0,$selected:f,onClick:()=>{f||e(d)},onKeyDown:()=>{},children:[n.jsx(pr,{children:n.jsx(gr,{type:"button",onClick:C=>{C.stopPropagation(),i(d)},children:n.jsx(ar,{hidden:!l.visible})})}),n.jsx(xr,{$visible:l.visible,children:l.name}),n.jsx(fr,{children:n.jsx(rr,{value:l.mode,options:r,disabled:!l.supportSendSyncColor,onChange:C=>s(d,C)})})]},d)})})]})},lr=h.div`
  width: 100%;
  // overflow: hidden;
  border-radius: 8px;
  background: #ffffff;
`,dr=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  background: #f6f6f6;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #3e3e3e;

  @media (min-width: 768px) {
    grid-template-columns: 160px 1fr 260px;
    gap: 15px;
  }
`,hn=h.div``,hr=h.div`
  border-top: 1px solid #f6f6f6;
  max-height: 144px;
  overflow-y: auto;
`,ur=h.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #f6f6f6;
  background: ${({$selected:o})=>o?"rgba(116,235,213,0.10)":"#ffffff"};

  &:hover {
    background: ${({$selected:o})=>o?"rgba(116,235,213,0.10)":"rgba(0,0,0,0.02)"};
  }

  @media (min-width: 768px) {
    grid-template-columns: 160px 1fr 260px;
    gap: 18px;
  }
`,pr=h.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`,fr=h.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`,gr=h.button`
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
`,xr=h.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({$visible:o})=>o?"#5b5a5a":"#ced4db"};
`;h.svg`
    width: 24px;
    height: 24px;
    color: inherit;
`;const mr=h.section`
    padding: 24px 24px 0;
    width: 100%;
    max-width: 993px;
    margin: 0 auto;
    background: #ffffff;
`,br=h.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
`,yr=h.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,vr=h.div`
    width: 6px;
    height: 36px;
    border-radius: 7px;
`,wr=h.div`
    font-size: 24px;
    color: #3e3e3e;
    font-weight: 500;
`,Sr=h.span`
    color: #71a4f1;
`;h.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
`;h.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;h.div`
    font-size: 16px;
    color: #3e3e3e;
    min-width: 80px;
`;h.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
`;h(Ge)`
    color: #5b5a5a;

    svg {
        color: inherit;
    }

    &:hover:not(:disabled) {
        color: ${({$hoverColor:o})=>o??"#5b5a5a"};
    }
`;h.div`
    position: absolute;
    right: 0;
    top: -40px;
    border-radius: 6px;
    border: 1px solid #eeeeee;
    background: #f6f6f6;
    padding: 4px 8px;
    font-size: 12px;
    color: #8c8c8c;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    white-space: nowrap;
`;const Vn=h.div`
    height: ${({$h:o})=>`${o}px`};
`,Cr=()=>{const{presetId:o,setPresetId:t,selectedMode:e}=Se();u.useState(!1);const{getString:i}=he();u.useMemo(()=>[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"}],[]);const s=i(e==="rhythm"?"lightSync_mode_rhythm":"lightSync_mode_screen"),c=i("lightSync_preview_modeSuffix","({mode})").replace("{mode}",s);return n.jsxs(mr,{children:[n.jsx(br,{children:n.jsxs(yr,{children:[n.jsx(vr,{style:{background:"linear-gradient(137deg, #74EBD5 0%, var(--高亮3, #9FACE6) 46%, var(--高光3, #71A4F1) 100%)",borderRadius:7}}),n.jsxs(wr,{children:[i("lightSync_preview_title"),n.jsx(Sr,{children:c})]})]})}),n.jsx(Vn,{$h:20}),n.jsx(er,{}),n.jsx(Vn,{$h:24}),n.jsx(cr,{})]})},kr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI7SURBVHgBvVXNbtpAEJ5ZjHrooe3BUXNzj22IhN/AeYPyBA1PYCJAPVKOFaH4DZK+AW8Q5wlKFWivrlQpVUGKVfUQAvZk1sbYBENM/j60ZjU7O9/s7MwswCMDo0l1OPiECCYQvITN0MspovT51VsnbVHIT/1vf5+ZGncwLlH0PTpZtRgQEIoPcA8QkVb/3S+mrSkp6hYqogu3wJv4ukDszAXPxItMBIdq4QCy4bQ+GphEoK1TEjcFtT/9CmRAdXhm3GZcYjlEOezUhoMOPBAEPDKUNCHXgxPNKUzdu6RvOgES6S210EvKasMfHDKK7sblYSGg7SuhIxwGbXI5/pWJoLW1aDwk9b8TH4t/3cn/cdl6o7s3VFKNpxJw6h2BT6cLQiEaSNBtqe9KgQ5XflicZMxcsGnqNdvbu/aSc/LDITiJlZfB9+B43tWeta071VHfQkIzVdGjg8PXBWvBN8gGWxoPelZs3OUWccwexlXPKf7x4qe2MQG3hGP5H/UseaLp9EpvbxXKLXWnRODvzQ8x9cyNCaJsicIoEHryRNF6W921E6ld3JgggSB7CHCpLmhFq89G4PlGOMFZCpOR7FnysYJZMSItduKAAJHcdfZ5035gFrzmXCh71mhwIUfwWMUWK8mLDk/gk9y4hoSM6vmZEcSaqByL2es4NGH4+PGRL1xEMn+TK+ffNCWXN2lF3+FKdr6oO82kLu8ucnW7fOv25N/4a/55/j3rHc0Md2WGwUND1gq3e+LRgKfANdBy7aO+xzFzAAAAAElFTkSuQmCC",Er="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgBlZLNDUBAEIUHDTgqRyfObjrg6kQnStiowNlJCXSw3iYrEZnhmeTZZOL79ldEpEN8HJnKEYdsSCUR9qQkwMvt/yk0W1LyhP21Akaiwe1zBktCwW8SGrYkv+CrBhZOlV7Yc6n0EyFKOzD6nVinTb2Tr6t6lbD3bEocAVuSJjR3EtYkLsNnRQpkRHpCMMfxQOoTvZRr61fYk3EAAAAASUVORK5CYII=",Dr=""+new URL("../assets/images/screenshot.17979174.png",import.meta.url).href,Rr=({open:o,zoom:t=1,doNotRemind:e,onClose:i,onDoNotRemindChange:s})=>{const{getString:a}=he();return o?n.jsx(Tr,{children:n.jsxs(Mr,{style:{zoom:t},children:[n.jsxs(Ar,{children:[n.jsxs(_r,{children:[n.jsx(Ir,{src:kr,alt:""}),n.jsx(Br,{children:a("Win11动态灯效配置指南")})]}),n.jsx($r,{type:"button",onClick:i,"aria-label":a("关闭"),children:n.jsx("img",{src:Er,alt:""})})]}),n.jsxs(jr,{children:[n.jsx(Fr,{children:a("为了使该功能正常运作，请按照以下步骤在Windows系统设置中进行配置:")}),n.jsxs(Pr,{children:[n.jsxs(un,{children:[n.jsx(pn,{children:"1"}),n.jsx(fn,{children:a("打开设置")}),n.jsxs(gn,{children:[a("进入系统设置中的"),n.jsx(Lr,{children:a("个性化>动态光效")})]})]}),n.jsxs(un,{children:[n.jsx(pn,{children:"2"}),n.jsx(fn,{children:a("开启开关")}),n.jsxs(gn,{children:[a('启用"在我的设备上使用动态光效"'),n.jsx("br",{}),a('和"前台中的兼容应用始终控制照明"。')]})]}),n.jsxs(un,{children:[n.jsx(pn,{children:"3"}),n.jsx(fn,{children:a("调整优先级")}),n.jsxs(gn,{children:[a("在背景光控件中，将"),n.jsx(Hr,{children:a("Rongyuan Dynamic Light")}),a("拖拽到列表顶部。")]})]})]}),n.jsx(Nr,{children:n.jsx(Xr,{})}),n.jsxs(Ur,{children:[n.jsxs(Or,{role:"checkbox","aria-checked":e,onClick:()=>s(!e),children:[n.jsx(Wr,{$checked:e,children:e&&n.jsx(Vr,{})}),n.jsx(zr,{children:a("不再提醒")})]}),n.jsx(Gr,{type:"button",onClick:i,children:a("我知道了")})]})]})]})}):null},Tr=h.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.15);
  z-index: 2000;
`,Mr=h.div`
  width: 824px;
  border-radius: 12px;
  background: #ffffff;
  padding: 26px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 26px;
`,jr=h.div`
	width: 712px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
`,Ar=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,_r=h.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Ir=h.img`
  width: 24px;
  height: 24px;
`,Br=h.div`
  font-size: 18px;
  font-weight: 500;
  color: #3e3e3e;
  font-family: "Source Han Sans SC", sans-serif;
`,$r=h.button`
  width: 24px;
  height: 24px;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Fr=h.div`
  font-size: 16px;
  font-weight: 400;
  color: #3e3e3e;
  font-family: "Source Han Sans SC", sans-serif;
`,Pr=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 57px;
`,un=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pn=h.div`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background: rgba(116, 235, 213, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #74ebd5;
  font-size: 16px;
  font-weight: 500;
  font-family: "Source Han Sans SC", sans-serif;
`,fn=h.div`
  font-size: 16px;
  font-weight: 500;
  color: #3e3e3e;
  font-family: "Source Han Sans SC", sans-serif;
`,gn=h.div`
  font-size: 14px;
  font-weight: 400;
  color: #5b5a5a;
  font-family: "Source Han Sans SC", sans-serif;
  line-height: 20px;
`,Lr=h.span`
  font-weight: 500;
  color: #3e3e3e;
  text-decoration: underline;
  text-decoration-thickness: 1px;
`,Hr=h.span`
  font-weight: 500;
  color: #74ebd5;
`,Nr=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ur=h.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Or=h.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
`,Wr=h.span`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid #d5d5d5;
  background: ${({$checked:o})=>o?"#74ebd5":"#ffffff"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Vr=h.span`
  width: 8px;
  height: 4px;
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  transform: rotate(-45deg);
`,zr=h.span`
  font-size: 16px;
  font-weight: 400;
  color: #aeaeae;
  font-family: "Source Han Sans SC", sans-serif;
`,Gr=h.button`
  padding: 6.5px 24px;
  border-radius: 6px;
  border: none;
  background: #74ebd5;
  color: #3e3e3e;
  font-size: 16px;
  font-weight: 400;
  font-family: "Source Han Sans SC", sans-serif;
  cursor: pointer;
`,Xr=()=>n.jsx("div",{style:{width:"712px",height:"306px",borderRadius:"12px",background:"#f6f6f6",border:"1px solid #d5d5d5",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("div",{style:{position:"relative",width:686,height:280,borderRadius:6,border:"1px solid #8c8c8c",background:"#241e1d",overflow:"hidden",color:"#fff",fontFamily:'"Source Han Sans SC", sans-serif'},children:n.jsx("img",{src:Dr,alt:"",style:{width:"100%",height:"100%"}})})}),Yr=h.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--color-background-white);
`,Kr=h.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1459px;
    overflow: hidden;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
`,Zr=h.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 1280px) {
        grid-template-columns: minmax(0, 1fr) 466px;
    }
`,qr=()=>{const o=vn()*.95,{win11DynamicLightingEnabled:t}=Se(),[e,i]=u.useState(()=>ze.get()??!1),[s,a]=u.useState(!1),[c,r]=u.useState(!1);u.useEffect(()=>{t&&i(ze.get()??!1)},[t]),u.useEffect(()=>{if(!t){a(!1),r(!1);return}!e&&!s&&r(!0)},[t,e,s]);const l=()=>{r(!1),a(!0)},d=f=>{i(f),ze.save(f),f&&(r(!1),a(!0))};return n.jsxs(Yr,{children:[n.jsx(Kr,{style:{zoom:o},children:n.jsxs(Zr,{children:[n.jsx(Cr,{}),n.jsx(Qi,{})]})}),n.jsx(Rr,{open:c,zoom:o,doNotRemind:e,onClose:l,onDoNotRemindChange:d})]})},Jr=()=>(je(),n.jsx(ui,{children:n.jsx(qr,{})}));export{Jr as LightSync};
