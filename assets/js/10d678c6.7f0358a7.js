"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[9075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},i=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),k=o(a),u=l,N=k["".concat(p,".").concat(u)]||k[u]||c[u]||r;return a?n.createElement(N,m(m({ref:t},i),{},{components:a})):n.createElement(N,m({ref:t},i))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,m=new Array(r);m[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[k]="string"==typeof e?e:l,m[1]=s;for(var o=2;o<r;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const r={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u5b57\u7b26\u4e32"],date:new Date("2023-01-26T00:00:00.000Z")},m=void 0,s={permalink:"/algorithm/2023/01/26/1663.\u5177\u6709\u7ed9\u5b9a\u6570\u503c\u7684\u6700\u5c0f\u5b57\u7b26\u4e32",source:"@site/algorithm/2023/01/26/1663.\u5177\u6709\u7ed9\u5b9a\u6570\u503c\u7684\u6700\u5c0f\u5b57\u7b26\u4e32.md",title:"1663.\u5177\u6709\u7ed9\u5b9a\u6570\u503c\u7684\u6700\u5c0f\u5b57\u7b26\u4e32",description:"1\u3001\u9898\u5e72",date:"2023-01-26T00:00:00.000Z",formattedDate:"2023\u5e741\u670826\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.56,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u5b57\u7b26\u4e32"],date:"2023-01-26T00:00:00.000Z"},prevItem:{title:"2309.\u517c\u5177\u5927\u5c0f\u5199\u7684\u6700\u597d\u82f1\u6587\u5b57\u6bcd",permalink:"/algorithm/2023/01/28/2309.\u517c\u5177\u5927\u5c0f\u5199\u7684\u6700\u597d\u82f1\u6587\u5b57\u6bcd"},nextItem:{title:"1817.\u67e5\u627e\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570",permalink:"/algorithm/2023/01/20/1817.\u67e5\u627e\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u5c0f\u5199\u5b57\u7b26 "),"\u7684 ",(0,l.kt)("strong",null,"\u6570\u503c")," \u662f\u5b83\u5728\u5b57\u6bcd\u8868\u4e2d\u7684\u4f4d\u7f6e\uff08\u4ece ",(0,l.kt)("code",null,"1")," \u5f00\u59cb\uff09\uff0c\u56e0\u6b64 ",(0,l.kt)("code",null,"a")," \u7684\u6570\u503c\u4e3a ",(0,l.kt)("code",null,"1")," \uff0c",(0,l.kt)("code",null,"b")," \u7684\u6570\u503c\u4e3a ",(0,l.kt)("code",null,"2")," \uff0c",(0,l.kt)("code",null,"c")," \u7684\u6570\u503c\u4e3a ",(0,l.kt)("code",null,"3")," \uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u7531\u82e5\u5e72\u5c0f\u5199\u5b57\u7b26\u7ec4\u6210\uff0c",(0,l.kt)("strong",null,"\u5b57\u7b26\u4e32\u7684\u6570\u503c")," \u4e3a\u5404\u5b57\u7b26\u7684\u6570\u503c\u4e4b\u548c\u3002\u4f8b\u5982\uff0c\u5b57\u7b26\u4e32 ",(0,l.kt)("code",null,'"abe"')," \u7684\u6570\u503c\u7b49\u4e8e ",(0,l.kt)("code",null,"1 + 2 + 5 = 8")," \u3002"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570 ",(0,l.kt)("code",null,"n")," \u548c ",(0,l.kt)("code",null,"k")," \u3002\u8fd4\u56de ",(0,l.kt)("strong",null,"\u957f\u5ea6")," \u7b49\u4e8e ",(0,l.kt)("code",null,"n")," \u4e14 ",(0,l.kt)("strong",null,"\u6570\u503c")," \u7b49\u4e8e ",(0,l.kt)("code",null,"k")," \u7684 ",(0,l.kt)("strong",null,"\u5b57\u5178\u5e8f\u6700\u5c0f")," \u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c\u5b57\u7b26\u4e32 ",(0,l.kt)("code",null,"x")," \u5728\u5b57\u5178\u6392\u5e8f\u4e2d\u4f4d\u4e8e ",(0,l.kt)("code",null,"y")," \u4e4b\u524d\uff0c\u5c31\u8ba4\u4e3a ",(0,l.kt)("code",null,"x")," \u5b57\u5178\u5e8f\u6bd4 ",(0,l.kt)("code",null,"y")," \u5c0f\uff0c\u6709\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"x")," \u662f ",(0,l.kt)("code",null,"y")," \u7684\u4e00\u4e2a\u524d\u7f00\uff1b"),(0,l.kt)("li",null,"\u5982\u679c ",(0,l.kt)("code",null,"i")," \u662f\xa0",(0,l.kt)("code",null,"x[i] != y[i]")," \u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u4e14 ",(0,l.kt)("code",null,"x[i]"),"\xa0\u5728\u5b57\u6bcd\u8868\u4e2d\u7684\u4f4d\u7f6e\u6bd4\xa0",(0,l.kt)("code",null,"y[i]"),"\xa0\u9760\u524d\u3002")),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 3, k = 27",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"aay"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5b57\u7b26\u4e32\u7684\u6570\u503c\u4e3a 1 + 1 + 25 = 27\uff0c\u5b83\u662f\u6570\u503c\u6ee1\u8db3\u8981\u6c42\u4e14\u957f\u5ea6\u7b49\u4e8e 3 \u5b57\u5178\u5e8f\u6700\u5c0f\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 5, k = 73",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"aaszz"',(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= n <= 10",(0,l.kt)("sup",null,"5"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"n <= k <= 26 * n"))),(0,l.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,l.kt)("p",null,"\u6570\u7ec4+\u8d2a\u5fc3\u6a21\u62df\uff0c\u4f7f\u7528\u957f\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u7684\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"codes")," \u5b58\u50a8\u6bcf\u4e2a\u5b57\u7b26\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6570\u503c"),"\uff0c\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"codes")," \u4e4b\u548c\u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b57\u7b26\u4e32\u7684\u6570\u503c"),"\uff0c\u521d\u59cb\u5316\u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"codes")," \u6240\u6709\u5143\u7d20\u90fd\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uff08\u4ee3\u8868\u5b57\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\uff09\uff0c\u4e4b\u540e\u4ece\u6570\u7ec4\u5c3e\u90e8\u5f00\u59cb\u5c06\u5143\u7d20\u66ff\u6362\u6210\u5c3d\u53ef\u80fd\u5927\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6570\u503c")," \u76f4\u81f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u4e3a 0"),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function getSmallestString(n: number, k: number): string {\n    k = k - n;\n    const codes = new Array(n).fill(1);\n\n    for (let i = codes.length - 1; i > -1 && k > 0; i--) {\n        codes[i] = Math.min(k + 1, 26);\n        k = k - codes[i] + 1;\n    }\n\n    return codes.map(c => String.fromCharCode(96 + c)).join('');\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(7690).Z,width:"1366",height:"394"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u867d\u7136\u65f6\u95f4\u590d\u6742\u5ea6\u548c\u7a7a\u95f4\u590d\u6742\u5ea6\u5df2\u7ecf\u5f88\u4e0d\u9519\uff0c\u4f46\u662f\u7531\u4e8e\u6570\u7ec4\u5b58\u50a8\u6570\u636e\uff0c\u4ee5\u53ca\u5b57\u7b26\u4e32\u64cd\u4f5c\u8fc7\u591a\u5bfc\u81f4\u6d88\u8017\u7684\u65f6\u95f4\u548c\u5185\u5b58\u504f\u9ad8\u3002\u4e0b\u9762\u5bf9\u6b64\u7a0d\u52a0\u4f18\u5316\u3002")),(0,l.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,l.kt)("p",null,"\u4ece\u4e0a\u8ff0\u6a21\u62df\u8fc7\u7a0b\u53ef\u4ee5\u63a8\u65ad\u51fa\uff0c\u6240\u6c42\u6700\u5c0f\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"aaaaamzzzzz"),"\uff0c\u5373 \u82e5\u5e72\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," + \u4e00\u4e2a\u4e2d\u95f4\u5b57\u7b26 + \u82e5\u5e72\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"z"),"\u3002\u56e0\u6b64\u53ea\u8981\u6c42\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u4e2a\u6570\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"z")," \u7684\u4e2a\u6570\u3001\u4ee5\u53ca\u4e2d\u95f4\u5b57\u7b26\uff0c\u5c31\u80fd\u62fc\u63a5\u51fa\u6240\u6c42\u6700\u5c0f\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function getSmallestString(n: number, k: number): string {\n    let na = 0, nz = 0;\n    for (k -= n; k >= 25; k -= 25)  nz++;\n    na = n - nz - (k > 0 ? 1 : 0);\n\n    const m = k > 0 ? String.fromCharCode(97 + k) : '';\n\n    return 'a'.repeat(na) + m + 'z'.repeat(nz);\n};\n")),(0,l.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mn",{parentName:"mrow"},"1"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},"1"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(94706).Z,width:"1372",height:"388"})))}k.isMDXComponent=!0},7690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8f651e8277b243924b5e02880d03e75b-9710f9247ff0144be022334c69ba977c.png"},94706:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dc69ba8b6786f6a9f55c824bc76bd3a8-b87f7e0003ced41064ad2914b7b86b87.png"}}]);