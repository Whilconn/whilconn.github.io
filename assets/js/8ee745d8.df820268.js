"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[85961],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},i=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),c=o(a),k=r,h=c["".concat(p,".").concat(k)]||c[k]||u[k]||l;return a?n.createElement(h,m(m({ref:e},i),{},{components:a})):n.createElement(h,m({ref:e},i))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=k;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[c]="string"==typeof t?t:r,m[1]=s;for(var o=2;o<l;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},20644:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={authors:["Whilconn"],tags:["\u6570\u5b66","\u6a21\u62df"],date:new Date("2023-01-06T00:00:00.000Z")},m=void 0,s={permalink:"/algorithm/2023/01/06/2180.\u7edf\u8ba1\u5404\u4f4d\u6570\u5b57\u4e4b\u548c\u4e3a\u5076\u6570\u7684\u6574\u6570\u4e2a\u6570",source:"@site/algorithm/2023/01/06/2180.\u7edf\u8ba1\u5404\u4f4d\u6570\u5b57\u4e4b\u548c\u4e3a\u5076\u6570\u7684\u6574\u6570\u4e2a\u6570.md",title:"2180.\u7edf\u8ba1\u5404\u4f4d\u6570\u5b57\u4e4b\u548c\u4e3a\u5076\u6570\u7684\u6574\u6570\u4e2a\u6570",description:"1\u3001\u9898\u5e72",date:"2023-01-06T00:00:00.000Z",formattedDate:"2023\u5e741\u67086\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u6a21\u62df",permalink:"/algorithm/tags/\u6a21\u62df"}],readingTime:1.385,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66","\u6a21\u62df"],date:"2023-01-06T00:00:00.000Z"},prevItem:{title:"2185.\u7edf\u8ba1\u5305\u542b\u7ed9\u5b9a\u524d\u7f00\u7684\u5b57\u7b26\u4e32",permalink:"/algorithm/2023/01/07/2185.\u7edf\u8ba1\u5305\u542b\u7ed9\u5b9a\u524d\u7f00\u7684\u5b57\u7b26\u4e32"},nextItem:{title:"1802.\u6709\u754c\u6570\u7ec4\u4e2d\u6307\u5b9a\u4e0b\u6807\u5904\u7684\u6700\u5927\u503c",permalink:"/algorithm/2023/01/04/1802.\u6709\u754c\u6570\u7ec4\u4e2d\u6307\u5b9a\u4e0b\u6807\u5904\u7684\u6700\u5927\u503c"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6b63\u6574\u6570 ",(0,r.kt)("code",null,"num")," \uff0c\u8bf7\u4f60\u7edf\u8ba1\u5e76\u8fd4\u56de ",(0,r.kt)("strong",null,"\u5c0f\u4e8e\u6216\u7b49\u4e8e")," ",(0,r.kt)("code",null,"num")," \u4e14\u5404\u4f4d\u6570\u5b57\u4e4b\u548c\u4e3a ",(0,r.kt)("strong",null,"\u5076\u6570")," \u7684\u6b63\u6574\u6570\u7684\u6570\u76ee\u3002"),(0,r.kt)("p",null,"\u6b63\u6574\u6570\u7684 ",(0,r.kt)("strong",null,"\u5404\u4f4d\u6570\u5b57\u4e4b\u548c")," \u662f\u5176\u6240\u6709\u4f4d\u4e0a\u7684\u5bf9\u5e94\u6570\u5b57\u76f8\u52a0\u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"num = 4",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"2",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),(0,r.kt)("br",null),"\u53ea\u6709 2 \u548c 4 \u6ee1\u8db3\u5c0f\u4e8e\u7b49\u4e8e 4 \u4e14\u5404\u4f4d\u6570\u5b57\u4e4b\u548c\u4e3a\u5076\u6570\u3002    ",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"num = 30",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"14",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),(0,r.kt)("br",null),"\u53ea\u6709 14 \u4e2a\u6574\u6570\u6ee1\u8db3\u5c0f\u4e8e\u7b49\u4e8e 30 \u4e14\u5404\u4f4d\u6570\u5b57\u4e4b\u548c\u4e3a\u5076\u6570\uff0c\u5206\u522b\u662f\uff1a ",(0,r.kt)("br",null),"2\u30014\u30016\u30018\u300111\u300113\u300115\u300117\u300119\u300120\u300122\u300124\u300126 \u548c 28 \u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= num <= 1000"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u6839\u636e\u9898\u610f\u6a21\u62df"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function countEven(num: number): number {\n    let ans = 0;\n    for (let n = 1; n <= num; n++) {\n        for (let k = n, sum = 0; k; k = k / 10 >> 0) {\n            sum += k % 10;\n            if (k < 10 && sum % 2 === 0) ans += 1;\n        }\n    }\n    return ans;\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlogn)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(46281).Z,width:"1470",height:"394"})))}c.isMDXComponent=!0},46281:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/a8cce6e3c29e4b65e93327fb00f210ca-c63314158e525d768fa55324eae00040.png"}}]);