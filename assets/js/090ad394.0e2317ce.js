"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[79488],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},k=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},i=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,k=m(t,["components","mdxType","originalType","parentName"]),u=p(n),i=l,g=u["".concat(o,".").concat(i)]||u[i]||c[i]||r;return n?a.createElement(g,s(s({ref:e},k),{},{components:n})):a.createElement(g,s({ref:e},k))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,s=new Array(r);s[0]=i;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m[u]="string"==typeof t?t:l,s[1]=m;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},52909:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32"],date:new Date("2023-01-31T00:00:00.000Z")},s=void 0,m={permalink:"/algorithm/2023/01/31/2325.\u89e3\u5bc6\u6d88\u606f",source:"@site/algorithm/2023/01/31/2325.\u89e3\u5bc6\u6d88\u606f.md",title:"2325.\u89e3\u5bc6\u6d88\u606f",description:"1\u3001\u9898\u5e72",date:"2023-01-31T00:00:00.000Z",formattedDate:"2023\u5e741\u670831\u65e5",tags:[{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:2.41,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32"],date:"2023-01-31T00:00:00.000Z"},prevItem:{title:"2319.\u5224\u65ad\u77e9\u9635\u662f\u5426\u662f\u4e00\u4e2a X \u77e9\u9635",permalink:"/algorithm/2023/01/31/2319.\u5224\u65ad\u77e9\u9635\u662f\u5426\u662f\u4e00\u4e2a X \u77e9\u9635"},nextItem:{title:"1669.\u5408\u5e76\u4e24\u4e2a\u94fe\u8868",permalink:"/algorithm/2023/01/30/1669.\u5408\u5e76\u4e24\u4e2a\u94fe\u8868"}},o={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],k={toc:p};function u(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u5b57\u7b26\u4e32 ",(0,l.kt)("code",null,"key")," \u548c ",(0,l.kt)("code",null,"message")," \uff0c\u5206\u522b\u8868\u793a\u4e00\u4e2a\u52a0\u5bc6\u5bc6\u94a5\u548c\u4e00\u6bb5\u52a0\u5bc6\u6d88\u606f\u3002\u89e3\u5bc6 ",(0,l.kt)("code",null,"message")," \u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",null,"\u4f7f\u7528 ",(0,l.kt)("code",null,"key")," \u4e2d 26 \u4e2a\u82f1\u6587\u5c0f\u5199\u5b57\u6bcd\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u987a\u5e8f\u4f5c\u4e3a\u66ff\u6362\u8868\u4e2d\u7684\u5b57\u6bcd ",(0,l.kt)("strong",null,"\u987a\u5e8f")," \u3002"),(0,l.kt)("li",null,"\u5c06\u66ff\u6362\u8868\u4e0e\u666e\u901a\u82f1\u6587\u5b57\u6bcd\u8868\u5bf9\u9f50\uff0c\u5f62\u6210\u5bf9\u7167\u8868\u3002"),(0,l.kt)("li",null,"\u6309\u7167\u5bf9\u7167\u8868 ",(0,l.kt)("strong",null,"\u66ff\u6362")," ",(0,l.kt)("code",null,"message")," \u4e2d\u7684\u6bcf\u4e2a\u5b57\u6bcd\u3002"),(0,l.kt)("li",null,"\u7a7a\u683c ",(0,l.kt)("code",null,"' '")," \u4fdd\u6301\u4e0d\u53d8\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u4f8b\u5982\uff0c",(0,l.kt)("code",null,'key = "',(0,l.kt)("em",null,(0,l.kt)("strong",null,"hap")),"p",(0,l.kt)("em",null,(0,l.kt)("strong",null,"y"))," ",(0,l.kt)("em",null,(0,l.kt)("strong",null,"bo")),'y"'),"\uff08\u5b9e\u9645\u7684\u52a0\u5bc6\u5bc6\u94a5\u4f1a\u5305\u542b\u5b57\u6bcd\u8868\u4e2d\u6bcf\u4e2a\u5b57\u6bcd ",(0,l.kt)("strong",null,"\u81f3\u5c11\u4e00\u6b21"),"\uff09\uff0c\u636e\u6b64\uff0c\u53ef\u4ee5\u5f97\u5230\u90e8\u5206\u5bf9\u7167\u8868\uff08",(0,l.kt)("code",null,"'h' -> 'a'"),"\u3001",(0,l.kt)("code",null,"'a' -> 'b'"),"\u3001",(0,l.kt)("code",null,"'p' -> 'c'"),"\u3001",(0,l.kt)("code",null,"'y' -> 'd'"),"\u3001",(0,l.kt)("code",null,"'b' -> 'e'"),"\u3001",(0,l.kt)("code",null,"'o' -> 'f'"),"\uff09\u3002")),(0,l.kt)("p",null,"\u8fd4\u56de\u89e3\u5bc6\u540e\u7684\u6d88\u606f\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2022/05/08/ex1new4.jpg"})),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"this is a secret"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5bf9\u7167\u8868\u5982\u4e0a\u56fe\u6240\u793a\u3002",(0,l.kt)("br",null),'\u63d0\u53d6 "',(0,l.kt)("em",null,(0,l.kt)("strong",null,"the"))," ",(0,l.kt)("em",null,(0,l.kt)("strong",null,"quick"))," ",(0,l.kt)("em",null,(0,l.kt)("strong",null,"brown"))," ",(0,l.kt)("em",null,(0,l.kt)("strong",null,"f")),"o",(0,l.kt)("em",null,(0,l.kt)("strong",null,"x"))," ",(0,l.kt)("em",null,(0,l.kt)("strong",null,"j")),"u",(0,l.kt)("em",null,(0,l.kt)("strong",null,"mps"))," o",(0,l.kt)("em",null,(0,l.kt)("strong",null,"v")),"er the ",(0,l.kt)("em",null,(0,l.kt)("strong",null,"lazy"))," ",(0,l.kt)("em",null,(0,l.kt)("strong",null,"d")),"o",(0,l.kt)("em",null,(0,l.kt)("strong",null,"g")),'" \u4e2d\u6bcf\u4e2a\u5b57\u6bcd\u7684\u9996\u6b21\u51fa\u73b0\u53ef\u4ee5\u5f97\u5230\u66ff\u6362\u8868\u3002',(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2022/05/08/ex2new.jpg"})),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"the five boxing wizards jump quickly"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5bf9\u7167\u8868\u5982\u4e0a\u56fe\u6240\u793a\u3002",(0,l.kt)("br",null),'\u63d0\u53d6 "',(0,l.kt)("em",null,(0,l.kt)("strong",null,"eljuxhpwnyrdgtqkviszcfmabo")),'" \u4e2d\u6bcf\u4e2a\u5b57\u6bcd\u7684\u9996\u6b21\u51fa\u73b0\u53ef\u4ee5\u5f97\u5230\u66ff\u6362\u8868\u3002',(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"26 <= key.length <= 2000")),(0,l.kt)("li",null,(0,l.kt)("code",null,"key")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u53ca ",(0,l.kt)("code",null,"' '")," \u7ec4\u6210"),(0,l.kt)("li",null,(0,l.kt)("code",null,"key")," \u5305\u542b\u82f1\u6587\u5b57\u6bcd\u8868\u4e2d\u6bcf\u4e2a\u5b57\u7b26\uff08",(0,l.kt)("code",null,"'a'")," \u5230 ",(0,l.kt)("code",null,"'z'"),"\uff09",(0,l.kt)("strong",null,"\u81f3\u5c11\u4e00\u6b21")),(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= message.length <= 2000")),(0,l.kt)("li",null,(0,l.kt)("code",null,"message")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u548c ",(0,l.kt)("code",null,"' '")," \u7ec4\u6210")),(0,l.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,l.kt)("p",null,"\u501f\u52a9\u54c8\u5e0c\u96c6\u5408\u505a\u5b57\u6bcd\u5173\u7cfb\u6620\u5c04"),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function decodeMessage(key: string, message: string): string {\n    const B = ' ', chars = [...new Set(key)].filter(c => c !== B);\n    return [].map.call(message, (c) => c === B ? B : String.fromCharCode(97 + chars.indexOf(c))).join('');\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"C"),(0,l.kt)("mo",{parentName:"mrow"},"\u2217"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(C*n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(90019).Z,width:"776",height:"198"})))}u.isMDXComponent=!0},90019:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/527d9e0ee73556210bd3b9af9a0abc87-6feca966dc8d700ccf2027375b2f087c.png"}}]);