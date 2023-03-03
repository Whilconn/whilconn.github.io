"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[16235],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),p=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return l.createElement(u.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=p(n),m=r,g=s["".concat(u,".").concat(m)]||s[m]||k[m]||a;return n?l.createElement(g,o(o({ref:e},c),{},{components:n})):l.createElement(g,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84536:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u9012\u5f52","\u6570\u5b66"],date:new Date("2022-01-02T00:00:00.000Z")},o=void 0,i={permalink:"/algorithm/2022/01/02/390.\u6d88\u9664\u6e38\u620f",source:"@site/algorithm/2022/01/02/390.\u6d88\u9664\u6e38\u620f.md",title:"390.\u6d88\u9664\u6e38\u620f",description:"1\u3001\u9898\u5e72",date:"2022-01-02T00:00:00.000Z",formattedDate:"2022\u5e741\u67082\u65e5",tags:[{label:"\u9012\u5f52",permalink:"/algorithm/tags/\u9012\u5f52"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"}],readingTime:2.455,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u9012\u5f52","\u6570\u5b66"],date:"2022-01-02T00:00:00.000Z"},prevItem:{title:"\u5251\u6307 Offer II 053.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7",permalink:"/algorithm/2022/01/03/\u5251\u6307 Offer II 053.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7"},nextItem:{title:"2022.\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4",permalink:"/algorithm/2022/01/01/2022.\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4"}},u={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],c={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u5217\u8868 ",(0,r.kt)("code",null,"arr")," \u7531\u5728\u8303\u56f4 ",(0,r.kt)("code",null,"[1, n]")," \u4e2d\u7684\u6240\u6709\u6574\u6570\u7ec4\u6210\uff0c\u5e76\u6309\u4e25\u683c\u9012\u589e\u6392\u5e8f\u3002\u8bf7\u4f60\u5bf9 ",(0,r.kt)("code",null,"arr")," \u5e94\u7528\u4e0b\u8ff0\u7b97\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4ece\u5de6\u5230\u53f3\uff0c\u5220\u9664\u7b2c\u4e00\u4e2a\u6570\u5b57\uff0c\u7136\u540e\u6bcf\u9694\u4e00\u4e2a\u6570\u5b57\u5220\u9664\u4e00\u4e2a\uff0c\u76f4\u5230\u5230\u8fbe\u5217\u8868\u672b\u5c3e\u3002"),(0,r.kt)("li",null,"\u91cd\u590d\u4e0a\u9762\u7684\u6b65\u9aa4\uff0c\u4f46\u8fd9\u6b21\u662f\u4ece\u53f3\u5230\u5de6\u3002\u4e5f\u5c31\u662f\uff0c\u5220\u9664\u6700\u53f3\u4fa7\u7684\u6570\u5b57\uff0c\u7136\u540e\u5269\u4e0b\u7684\u6570\u5b57\u6bcf\u9694\u4e00\u4e2a\u5220\u9664\u4e00\u4e2a\u3002"),(0,r.kt)("li",null,"\u4e0d\u65ad\u91cd\u590d\u8fd9\u4e24\u6b65\uff0c\u4ece\u5de6\u5230\u53f3\u548c\u4ece\u53f3\u5230\u5de6\u4ea4\u66ff\u8fdb\u884c\uff0c\u76f4\u5230\u53ea\u5269\u4e0b\u4e00\u4e2a\u6570\u5b57\u3002")),(0,r.kt)("p",null,"\u7ed9\u4f60\u6574\u6570 ",(0,r.kt)("code",null,"n")," \uff0c\u8fd4\u56de ",(0,r.kt)("code",null,"arr")," \u6700\u540e\u5269\u4e0b\u7684\u6570\u5b57\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 9",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"6",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),(0,r.kt)("br",null),"arr = [",(0,r.kt)("strong",null,(0,r.kt)("em",null,"1")),", 2, ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"3")),", 4, ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"5")),", 6, ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"7")),", 8, ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"9")),"]",(0,r.kt)("br",null),"arr = [2, ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"4")),", 6, ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"8")),"]",(0,r.kt)("br",null),"arr = [",(0,r.kt)("em",null,(0,r.kt)("strong",null,"2")),", 6]",(0,r.kt)("br",null),"arr = [6]",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 1",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"1",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= n <= 10",(0,r.kt)("sup",null,"9")))),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u6839\u636e\u9898\u610f\u53ef\u77e5\uff0c\u6d88\u9664\u7684\u603b\u8f6e\u6b21\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Math.log2(n)"),"\uff0c\u6bcf\u8f6e\u6d88\u9664\u540e\u5269\u4e0b\u7684\u6570\u5b57\u90fd\u6784\u6210\u7b49\u5dee\u6570\u5217\u3002"),(0,r.kt)("p",null,"\\\n\u56e0\u6b64\u53ef\u4ee5\u501f\u52a9\u6700\u5c0f\u503c",(0,r.kt)("inlineCode",{parentName:"p"},"min"),"\u3001\u6700\u5927\u503c",(0,r.kt)("inlineCode",{parentName:"p"},"max"),"\u3001\u6b65\u957f",(0,r.kt)("inlineCode",{parentName:"p"},"step"),"3\u4e2a\u53d8\u91cf\u6765\u7ef4\u62a4\u7b49\u5dee\u6570\u5217\uff0c\u6bcf\u8f6e\u90fd\u66f4\u65b0\u7b49\u5dee\u6570\u5217\u76843\u4e2a\u53d8\u91cf\uff1b\u6700\u540e\u4e00\u8f6e\u53ea\u5269\u4e00\u4e2a\u6570\u5b57\uff0c\u5373",(0,r.kt)("inlineCode",{parentName:"p"},"min"),"\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"max"),"\u76f8\u7b49\uff0c\u4efb\u53d6\u4e00\u4e2a\u8fd4\u56de\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\\\n\u9700\u8981\u6ce8\u610f\u7684\u662f\u5947\u6570\u8f6e\u6b21\u662f\u4ece\u5de6\u5230\u53f3\u6d88\u9664\uff0c\u5373\u6700\u5c0f\u503c\u5fc5\u5b9a\u6539\u53d8\uff0c\u6700\u5927\u503c\u53ea\u5728\u7b49\u5dee\u6570\u5217\u4e2a\u6570\u4e3a\u5947\u6570\u65f6\u6539\u53d8\uff1b\u5076\u6570\u8f6e\u6b21\u5219\u76f8\u53cd\uff0c\u6700\u5927\u503c\u5fc5\u5b9a\u6539\u53d8\uff0c\u6700\u5c0f\u503c\u53ea\u5728\u7b49\u5dee\u6570\u5217\u4e2a\u6570\u4e3a\u5947\u6570\u65f6\u6539\u53d8\u3002"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var lastRemaining = function (n) {\n    let min = 1, max = n, step = 1;\n    for (let i = 1; i <= Math.log2(n); i++) {\n        if (i % 2) {\n            if (((max - min) / step + 1) % 2) max -= step;\n            min += step;\n        } else {\n            if (((max - min) / step + 1) % 2) min += step;\n            max -= step;\n        }\n        step *= 2;\n    }\n    return max;\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1641110637.png",src:n(34403).Z,width:"894",height:"245"})))}s.isMDXComponent=!0},34403:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/1ae889a3c914d9c962240ade669003f6-d23014d8e9fe4077d36064b1181ff765.png"}}]);