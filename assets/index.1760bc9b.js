var pe=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))me.call(t,o)&&H(e,o,t[o]);return e};import{d as I,u as ge,r as f,o as G,a as K,b as v,c as Y,w as c,e as r,f as n,N as he,g as _e,h as fe,z as ve,i as ke,j as ye,k as Z,l as Ee,m as we,n as Fe,p as Ae,q as xe,s as y,t as De,v as Ce,x as be,y as E,A as N,B as Ie,C as Ne,D as C,E as h,F as q,G as Pe,H as Le,I as P,L as Se,J as X,K as $e,M as Be,O as Oe,P as Te,Q as Ve,R as Re,S as Me,T as je,U as Q,V as ze,W as Je,X as Ue,Y as He,Z as We,_ as Ge,$ as Ke,a0 as Ye,a1 as Ze,a2 as qe,a3 as Xe}from"./vendor.a09da0fa.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Qe();const et=I({setup(e){return window.$message=ge(),(t,o)=>null}}),tt=["https://pikpak.mynameiszzc.workers.dev"],ot=I({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return G(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(tt))}),(o,a)=>{const s=K("router-view");return v(),Y(n(ye),{locale:n(ve),"date-locale":n(ke),"theme-overrides":t.value},{default:c(()=>[r(n(fe),null,{default:c(()=>[r(n(he),null,{default:c(()=>[r(n(_e),null,{default:c(()=>[r(et),r(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),st="modulepreload",ee={},at="/pikpak/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${at}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":st,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((x,g)=>{u.addEventListener("load",x),u.addEventListener("error",g)})})).then(()=>t())};var nt="/pikpak/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let F=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const s=window.localStorage.getItem("pikpakLoginData"),i=s?JSON.parse(s):{};return i.username&&i.password&&!F?(console.log("wait",o.url),F=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},i)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),F=!1,m(o))).catch(()=>(b.push("/login"),!1))):i.username&&i.password&&F?new Promise((u,x)=>{const g=setInterval(()=>{F||(clearInterval(g),u(m(o)))},100)}):(b.push("/login"),!1);default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const te=Z.create({});te.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const Ct=te,oe=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const rt=h("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[h("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),h("div",{class:"logo-box__text"},"PikPak")],-1),it={key:0,class:"content-bottom"},ut=E("\u4F1A\u5458\u7801"),lt={style:{"margin-bottom":"0"}},ct=h("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\uFFE5119\u8D2D\u4E70\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),pt=E(" \u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),dt={class:"bottom-user-info"},mt={key:0,src:nt,class:"user-info-avatar"},gt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},ht={class:"user-info-name"},_t={key:0},ft={class:"action"},vt=E(" \u9000\u51FA\u767B\u5F55 "),kt=h("p",null,[h("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),yt=E("\u6DFB\u52A0"),Et=I({setup(e){const t=f(!1),o=l=>()=>Q(P,null,{default:()=>Q(l)}),a=Ee(),s=we(),i=f([{label:"\u6587\u4EF6",key:"list",icon:o(Ge)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(He)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(We)}]),u=f(),x=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},g=f(),L=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{g.value=l.data}).catch(l=>{console.log(l)})},k=f(),se=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;k.value=(p=l.data)==null?void 0:p.data})},ae=(l,p)=>{console.log(p),a.push("/"+p.key)};G(()=>{x(),L(),se()});const D=f(),w=f(!1),ne=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:D.value}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),L()}).catch(l=>{console.log(l)}).finally(()=>{w.value=!1})},S=f(!1),re=l=>{S.value=l<800,t.value||(t.value=l<800)};Fe(s,()=>{S.value&&(t.value=!0)});const ie=Ae(),ue=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const le=K("router-view"),ce=xe("resize");return v(),y(je,null,[De(r(n(X),{"has-sider":"",onResize:re},{default:c(()=>[r(n(Ce),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=_=>t.value=!0),onExpand:p[2]||(p[2]=_=>t.value=!1),bordered:""},{default:c(()=>{var _,$,B,O,T,V,R,M,j,z,J;return[rt,r(n(be),{options:i.value,value:String(n(s).name),"onUpdate:value":ae},null,8,["options","value"]),t.value?C("",!0):(v(),y("div",it,[E(N(n(oe)((_=g.value)==null?void 0:_.quota.usage))+" / "+N(n(oe)(($=g.value)==null?void 0:$.quota.limit))+" ",1),r(n(Ie),{type:"primary",onClick:p[0]||(p[0]=At=>w.value=!0)},{default:c(()=>[ut]),_:1}),((B=g.value)==null?void 0:B.quota)?(v(),Y(n(Ne),{key:0,type:"line",percentage:Number((((O=g.value)==null?void 0:O.quota.usage)/((T=g.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):C("",!0),h("p",lt,[r(n(q),{placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[pt]),_:1})])])),t.value?C("",!0):(v(),y("div",{key:1,class:Pe(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[h("div",dt,[((M=k.value)==null?void 0:M.status)==="ok"?(v(),y("img",mt)):(v(),y("img",gt)),h("div",ht,[E(N((j=u.value)==null?void 0:j.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",_t,[r(n(Le),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):C("",!0)]),h("div",ft,[r(n(q),null,{trigger:c(()=>[r(n(P),{onClick:ue},{default:c(()=>[r(n(Se))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),r(n(X),null,{default:c(()=>[r(n($e),{style:{height:"100vh"}},{default:c(()=>[r(n(Be),{style:{"max-height":"100vh"}},{default:c(()=>[r(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ce]]),r(n(Me),{show:w.value,"onUpdate:show":p[5]||(p[5]=_=>w.value=_)},{default:c(()=>[r(n(Oe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[r(n(P),{onClick:p[3]||(p[3]=_=>w.value=!1)},{default:c(()=>[r(n(Te))]),_:1})]),action:c(()=>[r(n(Ve),{block:!0,type:"primary",disabled:!D.value,onClick:ne},{default:c(()=>[yt]),_:1},8,["disabled"])]),default:c(()=>[r(n(Re),{placeholder:"\u4F1A\u5458\u7801",value:D.value,"onUpdate:value":p[4]||(p[4]=_=>D.value=_)},null,8,["value"]),kt]),_:1})]),_:1},8,["show"])],64)}}}),wt=[{path:"/",name:"home",component:Et,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.5281b394.js"),["assets/list.5281b394.js","assets/list.764e0448.css","assets/vendor.a09da0fa.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.5281b394.js"),["assets/list.5281b394.js","assets/list.764e0448.css","assets/vendor.a09da0fa.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.5281b394.js"),["assets/list.5281b394.js","assets/list.764e0448.css","assets/vendor.a09da0fa.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.73d46486.js"),["assets/trash.73d46486.js","assets/trash.99a3677d.css","assets/vendor.a09da0fa.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.3b8b324c.js"),["assets/setting.3b8b324c.js","assets/setting.f947579c.css","assets/vendor.a09da0fa.js"])},{path:"share",name:"share",component:()=>d(()=>import("./share.64b999e9.js"),["assets/share.64b999e9.js","assets/share.4f9c11c6.css","assets/vendor.a09da0fa.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.47154fb5.js"),["assets/test.47154fb5.js","assets/vendor.a09da0fa.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.1a32a378.js"),["assets/shareInfo.1a32a378.js","assets/shareInfo.678356c6.css","assets/vendor.a09da0fa.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.7f033db7.js"),["assets/login.7f033db7.js","assets/login.a8b45006.css","assets/vendor.a09da0fa.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.d726f1fd.js"),["assets/sms.d726f1fd.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.a09da0fa.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.8df0c082.js"),["assets/register.8df0c082.js","assets/register.5588ce76.css","assets/vendor.a09da0fa.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.8d29311a.js"),["assets/testtest.8d29311a.js","assets/vendor.a09da0fa.js"])}],Ft=Ke({history:Ye(),routes:wt});var b=Ft;const A=Ze(ot);A.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,i=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=m;A.use(b);A.use(Xe,{router:b,siteIdList:[1280510106]});A.mount("#app");export{oe as b,m as i,Ct as n,tt as p};