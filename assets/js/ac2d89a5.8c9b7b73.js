"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[62484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=m(n),s=a,g=k["".concat(i,".").concat(s)]||k[s]||c[s]||l;return n?r.createElement(g,p(p({ref:t},u),{},{components:n})):r.createElement(g,p({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[k]="string"==typeof e?e:a,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u9012\u5f52","\u6570\u5b66"],date:"2022/1/2"},p=void 0,o={permalink:"/algorithm/390.\u6d88\u9664\u6e38\u620f",source:"@site/algorithm/390.\u6d88\u9664\u6e38\u620f.md",title:"390.\u6d88\u9664\u6e38\u620f",description:"1\u3001\u9898\u5e72",date:"2022-01-02T00:00:00.000Z",formattedDate:"2022\u5e741\u67082\u65e5",tags:[{label:"\u9012\u5f52",permalink:"/algorithm/tags/\u9012\u5f52"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"}],readingTime:2.445,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u9012\u5f52","\u6570\u5b66"],date:"2022/1/2"},prevItem:{title:"\u5251\u6307 Offer II 053.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7",permalink:"/algorithm/\u5251\u6307 Offer II 053.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7"},nextItem:{title:"2022.\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4",permalink:"/algorithm/2022.\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4"}},i={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],u={toc:m};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u5217\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"arr")," \u7531\u5728\u8303\u56f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, n]")," \u4e2d\u7684\u6240\u6709\u6574\u6570\u7ec4\u6210\uff0c\u5e76\u6309\u4e25\u683c\u9012\u589e\u6392\u5e8f\u3002\u8bf7\u4f60\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"arr")," \u5e94\u7528\u4e0b\u8ff0\u7b97\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece\u5de6\u5230\u53f3\uff0c\u5220\u9664\u7b2c\u4e00\u4e2a\u6570\u5b57\uff0c\u7136\u540e\u6bcf\u9694\u4e00\u4e2a\u6570\u5b57\u5220\u9664\u4e00\u4e2a\uff0c\u76f4\u5230\u5230\u8fbe\u5217\u8868\u672b\u5c3e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u590d\u4e0a\u9762\u7684\u6b65\u9aa4\uff0c\u4f46\u8fd9\u6b21\u662f\u4ece\u53f3\u5230\u5de6\u3002\u4e5f\u5c31\u662f\uff0c\u5220\u9664\u6700\u53f3\u4fa7\u7684\u6570\u5b57\uff0c\u7136\u540e\u5269\u4e0b\u7684\u6570\u5b57\u6bcf\u9694\u4e00\u4e2a\u5220\u9664\u4e00\u4e2a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u65ad\u91cd\u590d\u8fd9\u4e24\u6b65\uff0c\u4ece\u5de6\u5230\u53f3\u548c\u4ece\u53f3\u5230\u5de6\u4ea4\u66ff\u8fdb\u884c\uff0c\u76f4\u5230\u53ea\u5269\u4e0b\u4e00\u4e2a\u6570\u5b57\u3002")),(0,a.kt)("p",null,"\u7ed9\u4f60\u6574\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \uff0c\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"arr")," \u6700\u540e\u5269\u4e0b\u7684\u6570\u5b57\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 9",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 6",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),"\narr = ","[",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"1")),", 2, ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"3")),", 4, ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"5")),", 6, ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"7")),", 8, ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"9")),"]",(0,a.kt)("br",null),"\narr = ","[","2, ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"4")),", 6, ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"8")),"]",(0,a.kt)("br",null),"\narr = ","[",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"2")),", 6","]",(0,a.kt)("br",null),"\narr = ","[","6","]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^9"))),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u6839\u636e\u9898\u610f\u53ef\u77e5\uff0c\u6d88\u9664\u7684\u603b\u8f6e\u6b21\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Math.log2(n)"),"\uff0c\u6bcf\u8f6e\u6d88\u9664\u540e\u5269\u4e0b\u7684\u6570\u5b57\u90fd\u6784\u6210\u7b49\u5dee\u6570\u5217\u3002"),(0,a.kt)("p",null,"\\\n\u56e0\u6b64\u53ef\u4ee5\u501f\u52a9\u6700\u5c0f\u503c",(0,a.kt)("inlineCode",{parentName:"p"},"min"),"\u3001\u6700\u5927\u503c",(0,a.kt)("inlineCode",{parentName:"p"},"max"),"\u3001\u6b65\u957f",(0,a.kt)("inlineCode",{parentName:"p"},"step"),"3\u4e2a\u53d8\u91cf\u6765\u7ef4\u62a4\u7b49\u5dee\u6570\u5217\uff0c\u6bcf\u8f6e\u90fd\u66f4\u65b0\u7b49\u5dee\u6570\u5217\u76843\u4e2a\u53d8\u91cf\uff1b\u6700\u540e\u4e00\u8f6e\u53ea\u5269\u4e00\u4e2a\u6570\u5b57\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"min"),"\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"max"),"\u76f8\u7b49\uff0c\u4efb\u53d6\u4e00\u4e2a\u8fd4\u56de\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\\\n\u9700\u8981\u6ce8\u610f\u7684\u662f\u5947\u6570\u8f6e\u6b21\u662f\u4ece\u5de6\u5230\u53f3\u6d88\u9664\uff0c\u5373\u6700\u5c0f\u503c\u5fc5\u5b9a\u6539\u53d8\uff0c\u6700\u5927\u503c\u53ea\u5728\u7b49\u5dee\u6570\u5217\u4e2a\u6570\u4e3a\u5947\u6570\u65f6\u6539\u53d8\uff1b\u5076\u6570\u8f6e\u6b21\u5219\u76f8\u53cd\uff0c\u6700\u5927\u503c\u5fc5\u5b9a\u6539\u53d8\uff0c\u6700\u5c0f\u503c\u53ea\u5728\u7b49\u5dee\u6570\u5217\u4e2a\u6570\u4e3a\u5947\u6570\u65f6\u6539\u53d8\u3002"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var lastRemaining = function (n) {\n    let min = 1, max = n, step = 1;\n    for (let i = 1; i <= Math.log2(n); i++) {\n        if (i % 2) {\n            if (((max - min) / step + 1) % 2) max -= step;\n            min += step;\n        } else {\n            if (((max - min) / step + 1) % 2) min += step;\n            max -= step;\n        }\n        step *= 2;\n    }\n    return max;\n};\n")),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1641110637.png",src:n(10972).Z,width:"894",height:"245"})))}k.isMDXComponent=!0},10972:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1641111307-qbIjxh-1641110637-d23014d8e9fe4077d36064b1181ff765.png"}}]);