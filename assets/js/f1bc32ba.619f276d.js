"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[69343],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(n),g=l,m=s["".concat(u,".").concat(g)]||s[g]||k[g]||o;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=g;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},55798:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u53cc\u6307\u9488","\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],date:new Date("2023-11-10T00:00:00.000Z")},a=void 0,i={permalink:"/algorithm/2023/11/10/392.\u5224\u65ad\u5b50\u5e8f\u5217",source:"@site/algorithm/2023/11/10/392.\u5224\u65ad\u5b50\u5e8f\u5217.md",title:"392.\u5224\u65ad\u5b50\u5e8f\u5217",description:"1\u3001\u9898\u5e72",date:"2023-11-10T00:00:00.000Z",formattedDate:"2023\u5e7411\u670810\u65e5",tags:[{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:1.6,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u53cc\u6307\u9488","\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],date:"2023-11-10T00:00:00.000Z"},prevItem:{title:"2300.\u5492\u8bed\u548c\u836f\u6c34\u7684\u6210\u529f\u5bf9\u6570",permalink:"/algorithm/2023/11/10/2300.\u5492\u8bed\u548c\u836f\u6c34\u7684\u6210\u529f\u5bf9\u6570"},nextItem:{title:"26.\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",permalink:"/algorithm/2023/11/09/26.\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879"}},u={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u5b57\u7b26\u4e32 ",(0,l.kt)("strong",null,"s")," \u548c ",(0,l.kt)("strong",null,"t")," \uff0c\u5224\u65ad ",(0,l.kt)("strong",null,"s")," \u662f\u5426\u4e3a ",(0,l.kt)("strong",null,"t")," \u7684\u5b50\u5e8f\u5217\u3002"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u7684\u4e00\u4e2a\u5b50\u5e8f\u5217\u662f\u539f\u59cb\u5b57\u7b26\u4e32\u5220\u9664\u4e00\u4e9b\uff08\u4e5f\u53ef\u4ee5\u4e0d\u5220\u9664\uff09\u5b57\u7b26\u800c\u4e0d\u6539\u53d8\u5269\u4f59\u5b57\u7b26\u76f8\u5bf9\u4f4d\u7f6e\u5f62\u6210\u7684\u65b0\u5b57\u7b26\u4e32\u3002\uff08\u4f8b\u5982\uff0c",(0,l.kt)("code",null,'"ace"'),"\u662f",(0,l.kt)("code",null,'"abcde"'),"\u7684\u4e00\u4e2a\u5b50\u5e8f\u5217\uff0c\u800c",(0,l.kt)("code",null,'"aec"'),"\u4e0d\u662f\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u8fdb\u9636\uff1a")),(0,l.kt)("p",null,"\u5982\u679c\u6709\u5927\u91cf\u8f93\u5165\u7684 S\uff0c\u79f0\u4f5c S1, S2, ... , Sk \u5176\u4e2d k >= 10\u4ebf\uff0c\u4f60\u9700\u8981\u4f9d\u6b21\u68c0\u67e5\u5b83\u4eec\u662f\u5426\u4e3a T \u7684\u5b50\u5e8f\u5217\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u4f1a\u600e\u6837\u6539\u53d8\u4ee3\u7801\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u81f4\u8c22\uff1a")),(0,l.kt)("p",null,"\u7279\u522b\u611f\u8c22",(0,l.kt)("strong",null," "),(0,l.kt)("a",{href:"https://leetcode.com/pbrother/"},"@pbrother\xa0"),"\u6dfb\u52a0\u6b64\u95ee\u9898\u5e76\u4e14\u521b\u5efa\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "abc", t = "ahbgdc"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "axc", t = "ahbgdc"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= s.length <= 100")),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= t.length <= 10^4")),(0,l.kt)("li",null,"\u4e24\u4e2a\u5b57\u7b26\u4e32\u90fd\u53ea\u7531\u5c0f\u5199\u5b57\u7b26\u7ec4\u6210\u3002")),(0,l.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,l.kt)("p",null,"\u53cc\u6307\u9488\u904d\u5386\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u4e2d\u7684\u5b57\u7b26\u80fd\u5168\u90e8\u88ab\u6d88\u8017\u5b8c\uff0c\u5219\u7ed3\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function isSubsequence(s: string, t: string): boolean {\n    let i = 0, j = 0;\n\n    while (i < s.length && j < t.length) {\n        while (j < t.length) {\n            if (t[j++] === s[i]) {\n                i++;\n                break;\n            }\n        }\n    }\n\n    return i === s.length;\n};\n")))}s.isMDXComponent=!0}}]);