import{c as w,r as l,j as t,p as G,P as O,N as V,B as C,L as q,a as F,d as J}from"./index-2a70a137.js";import{v as K}from"./video-js-0409baae.js";const g=""+new URL("yes933-dce3d17a.png",import.meta.url).href,se=j=>{const{user:Q}=j,{f7route:I,f7router:X}=j,d=w.useRef(null),o=w.useRef(null),f=w.useRef(),[R,m]=l.useState("fa-solid fa-circle-play"),[b,k]=l.useState(g),[M,T]=l.useState("顶尖流行音乐电台, 引领潮流时代"),[v,y]=l.useState(null),[L,B]=l.useState(""),p=(e,a,r)=>{e=Math.max(0,Math.min(255,e)),a=Math.max(0,Math.min(255,a)),r=Math.max(0,Math.min(255,r));const s=e.toString(16).padStart(2,"0"),n=a.toString(16).padStart(2,"0"),i=r.toString(16).padStart(2,"0");return`#${s}${n}${i}`.toUpperCase()};l.useEffect(()=>{if(v){var e=new Image;e.crossOrigin="Anonymous",e.src=v,e.onload=function(){var a=document.createElement("canvas");a.width=e.width,a.height=e.height;var r=a.getContext("2d");r.drawImage(e,0,0,a.width,a.height);for(var s=r.getImageData(0,0,e.width,e.height),n=s.data,i={},u=0;u<n.length;u+=4){var A=n[u],D=n[u+1],P=n[u+2],E=A+","+D+","+P;i[E]=(i[E]||0)+1}var c=Object.keys(i).map(function(x){return[x,i[x]]});c.sort(function(x,W){return W[1]-x[1]});var h=parseInt(c.length/5)-1;const N=p(...c[0*h][0].split(",")),Y=p(...c[1*h][0].split(",")),z=p(...c[2*h][0].split(",")),H=p(...c[3*h][0].split(",")),$=p(...c[4*h][0].split(","));B(t.jsxs("svg",{className:"_a7mt _abvd _a7mu _a8xu",preserveAspectRatio:"none",viewBox:"0 0 100 100",style:{backgroundColor:N,width:"300px",height:"300px",marginLeft:"16px"},children:[t.jsx("ellipse",{className:"_a7mo",fill:N}),t.jsx("ellipse",{className:"_a7mr",fill:Y}),t.jsx("ellipse",{className:"_a7mp",fill:z}),t.jsx("ellipse",{className:"_a7ms",fill:H}),t.jsx("ellipse",{className:"_a7mq",fill:$})]}))}}},[v]);var S=new Date().getTime();const _=()=>{S<new Date().getTime()&&fetch("https://api.wangsuman.com:8000/yes933").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{S=e.end_time;let a=e.title+" - "+e.artist_name;f.current.innerHTML=a,T(e.show_title);let r="https://api.wangsuman.com:8000/itunes?term="+a;e.time>e.end_time?(f.current.innerHTML="YES 933",k(g),y(g)):fetch(r).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{if(s.resultCount>0){s=s.results[0];let n=s.artworkUrl100;n=n.replace("100x100","300x300"),k(n),y(n),f.current.innerHTML='<a class="external" href="'+s.trackViewUrl.replace("/us/","/cn/")+'" title="去Apple Music查看" target="_blank" style="color: #FA2D48;text-decoration: underline;">'+a+"</a>"}})}).catch(e=>{console.error("There was a problem with the fetch operation:",e)})};l.useEffect(()=>{_(),y(g);const e=setInterval(()=>{_()},7e3);let a="https://22893.live.streamtheworld.com/YES933_PREM.aac";if(o.current)o.current.src(a);else{const r=document.createElement("video-js");r.classList.add("vjs-big-play-centered"),d.current.appendChild(r),r.style.width="0",r.style.height="0",r.style.opacity="0";const s=o.current=K(r,{},()=>{s.src(a)});s.on("waiting",function(){m("fa-solid fa-face-laugh")}),s.on("playing",function(){m("fa-solid fa-circle-pause")}),s.on("error",function(){m("fa-solid fa-circle-play")})}return()=>{clearInterval(e),d.current=null}},[d]),l.useEffect(()=>{const e=o.current;return()=>{e&&!e.isDisposed()&&(e.dispose(),o.current=null)}},[o]),l.useEffect(()=>{G({r:I.path})},[]);const U=()=>{const e=o.current;e.paused()?e.play():(e.pause(),m("fa-solid fa-circle-play"))};return t.jsxs(O,{children:[t.jsx(V,{title:"YES 933",backLink:"返回",transparent:!0}),t.jsxs("div",{className:"wsm-page display-flex flex-direction-column align-items-center justify-content-center",children:[t.jsx(C,{style:{zIndex:99,marginBottom:"0px"},children:t.jsx("h2",{className:"text-align-center",style:{fontWeight:400},children:"音乐电台"})}),t.jsxs(C,{className:"display-flex justify-content-center align-items-center",children:[t.jsx("div",{children:L}),t.jsx("div",{style:{backgroundSize:"cover",width:"300px",height:"300px",borderRadius:"5px",backgroundImage:`url(${b})`}}),t.jsx(q,{style:{position:"absolute"},onClick:U,children:t.jsx("i",{id:"play_or_pause",className:R,style:{fontSize:"80px",cursor:"pointer",opacity:"0.9"}})})]}),t.jsx(F,{className:"text-align-center",style:{zIndex:99,marginTop:"0px"},children:t.jsx("p",{ref:f,style:{whiteSpace:"normal"},children:"YES 933"})}),t.jsx(J,{className:"text-align-center",style:{zIndex:99},children:M}),t.jsx("div",{"data-vjs-player":!0,style:{width:0,height:0},children:t.jsx("div",{ref:d})})]})]})};export{se as default};
