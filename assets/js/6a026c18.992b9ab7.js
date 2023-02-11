"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[5056],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,d=c["".concat(s,".").concat(u)]||c[u]||k[u]||l;return a?n.createElement(d,m(m({ref:t},i),{},{components:a})):n.createElement(d,m({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,m=new Array(l);m[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,m[1]=o;for(var p=2;p<l;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6392\u5e8f"],date:"2022/11/13"},m=void 0,o={permalink:"/algorithm/2022/11/13/791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f",source:"@site/algorithm/2022/11/13/791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f.md",title:"791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f",description:"1\u3001\u9898\u5e72",date:"2022-11-13T00:00:00.000Z",formattedDate:"2022\u5e7411\u670813\u65e5",tags:[{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:1.715,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6392\u5e8f"],date:"2022/11/13"},prevItem:{title:"790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",permalink:"/algorithm/2022/11/13/790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa"},nextItem:{title:"864.\u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84",permalink:"/algorithm/2022/11/10/864.\u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84"}},s={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],i={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 ",(0,r.kt)("code",null,"order")," \u548c ",(0,r.kt)("code",null,"s")," \u3002",(0,r.kt)("code",null,"order")," \u7684\u6240\u6709\u5b57\u6bcd\u90fd\u662f ",(0,r.kt)("strong",null,"\u552f\u4e00")," \u7684\uff0c\u5e76\u4e14\u4ee5\u524d\u6309\u7167\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u987a\u5e8f\u6392\u5e8f\u3002"),(0,r.kt)("p",null,"\u5bf9 ",(0,r.kt)("code",null,"s")," \u7684\u5b57\u7b26\u8fdb\u884c\u7f6e\u6362\uff0c\u4f7f\u5176\u4e0e\u6392\u5e8f\u7684\xa0",(0,r.kt)("code",null,"order"),"\xa0\u76f8\u5339\u914d\u3002\u66f4\u5177\u4f53\u5730\u8bf4\uff0c\u5982\u679c\u5728\xa0",(0,r.kt)("code",null,"order"),"\xa0\u4e2d\u7684\u5b57\u7b26 ",(0,r.kt)("code",null,"x")," \u51fa\u73b0\u5b57\u7b26 ",(0,r.kt)("code",null,"y")," \u4e4b\u524d\uff0c\u90a3\u4e48\u5728\u6392\u5217\u540e\u7684\u5b57\u7b26\u4e32\u4e2d\uff0c ",(0,r.kt)("code",null,"x"),"\xa0\u4e5f\u5e94\u8be5\u51fa\u73b0\u5728 ",(0,r.kt)("code",null,"y")," \u4e4b\u524d\u3002"),(0,r.kt)("p",null,"\u8fd4\u56de ",(0,r.kt)("em",null,"\u6ee1\u8db3\u8fd9\u4e2a\u6027\u8d28\u7684 ",(0,r.kt)("code",null,"s")," \u7684\u4efb\u610f\u4e00\u79cd\u6392\u5217\xa0"),"\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:"),' order = "cba", s = "abcd"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa:"),' "cbad"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca:")," ",(0,r.kt)("br",null),"\u201ca\u201d\u3001\u201cb\u201d\u3001\u201cc\u201d\u662f\u6309\u987a\u5e8f\u51fa\u73b0\u7684\uff0c\u6240\u4ee5\u201ca\u201d\u3001\u201cb\u201d\u3001\u201cc\u201d\u7684\u987a\u5e8f\u5e94\u8be5\u662f\u201cc\u201d\u3001\u201cb\u201d\u3001\u201ca\u201d\u3002",(0,r.kt)("br",null),"\u56e0\u4e3a\u201cd\u201d\u4e0d\u662f\u6309\u987a\u5e8f\u51fa\u73b0\u7684\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u5728\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u3002\u201cdcba\u201d\u3001\u201ccdba\u201d\u3001\u201ccbda\u201d\u4e5f\u662f\u6709\u6548\u7684\u8f93\u51fa\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:"),' order = "cbafg", s = "abcd"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa:"),' "cbad"',(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a:")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= order.length <= 26")),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= s.length <= 200")),(0,r.kt)("li",null,(0,r.kt)("code",null,"order"),"\xa0\u548c\xa0",(0,r.kt)("code",null,"s"),"\xa0\u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210"),(0,r.kt)("li",null,(0,r.kt)("code",null,"order"),"\xa0\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u90fd ",(0,r.kt)("strong",null,"\u4e0d\u540c"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Problem: ",(0,r.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/custom-sort-string/description/"},"791. \u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u6570\u91cf\u7ea7\u6bd4\u8f83\u5c0f ",(0,r.kt)("inlineCode",{parentName:"p"},"order.length <= 26"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"s.length <= 200"),"\uff0c\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.sort")," \u5b9e\u73b0\u5c31\u884c"),(0,r.kt)("h2",{id:"3code"},"3\u3001Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function customSortString(o: string, s: string): string {\n    return [...s].sort((a, b) => o.indexOf(a) - o.indexOf(b)).join('');\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlogn)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1668316390-HyBPsh-image.png",alt:"image.png"})))}c.isMDXComponent=!0}}]);