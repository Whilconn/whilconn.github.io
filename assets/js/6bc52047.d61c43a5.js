"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[78002],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>N});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var p=n.createContext({}),i=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(p.Provider,{value:e},a.children)},c="mdxType",k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,p=a.parentName,o=l(a,["components","mdxType","originalType","parentName"]),c=i(t),u=s,N=c["".concat(p,".").concat(u)]||c[u]||k[u]||r;return t?n.createElement(N,m(m({ref:e},o),{},{components:t})):n.createElement(N,m({ref:e},o))}));function N(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=a,l[c]="string"==typeof a?a:s,m[1]=l;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64611:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const r={authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u8ba1\u6570"],date:new Date("2022-12-12T00:00:00.000Z")},m=void 0,l={permalink:"/algorithm/2022/12/12/1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",source:"@site/algorithm/2022/12/12/1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c.md",title:"1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",description:"1\u3001\u9898\u5e72",date:"2022-12-12T00:00:00.000Z",formattedDate:"2022\u5e7412\u670812\u65e5",tags:[{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u8ba1\u6570",permalink:"/algorithm/tags/\u8ba1\u6570"}],readingTime:1.69,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u8ba1\u6570"],date:"2022-12-12T00:00:00.000Z"},prevItem:{title:"1785.\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20",permalink:"/algorithm/2022/12/16/1785.\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20"},nextItem:{title:"1277.\u7edf\u8ba1\u5168\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u5b50\u77e9\u9635",permalink:"/algorithm/2022/12/08/1277.\u7edf\u8ba1\u5168\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u5b50\u77e9\u9635"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function c(a){let{components:e,...r}=a;return(0,s.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,s.kt)("p",null,"\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684 ",(0,s.kt)("strong",null,"\u7f8e\u4e3d\u503c"),"\xa0\u5b9a\u4e49\u4e3a\uff1a\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u5b57\u7b26\u4e0e\u51fa\u73b0\u9891\u7387\u6700\u4f4e\u5b57\u7b26\u7684\u51fa\u73b0\u6b21\u6570\u4e4b\u5dee\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"\u6bd4\u65b9\u8bf4\uff0c",(0,s.kt)("code",null,'"abaacc"'),"\xa0\u7684\u7f8e\u4e3d\u503c\u4e3a\xa0",(0,s.kt)("code",null,"3 - 1 = 2"),"\xa0\u3002")),(0,s.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\xa0",(0,s.kt)("code",null,"s"),"\xa0\uff0c\u8bf7\u4f60\u8fd4\u56de\u5b83\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7684\xa0",(0,s.kt)("strong",null,"\u7f8e\u4e3d\u503c"),"\xa0\u4e4b\u548c\u3002"),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("b",null,"\u8f93\u5165\uff1a"),'s = "aabcb"',(0,s.kt)("br",null),(0,s.kt)("b",null,"\u8f93\u51fa\uff1a"),"5",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u89e3\u91ca\uff1a"),'\u7f8e\u4e3d\u503c\u4e0d\u4e3a\u96f6\u7684\u5b57\u7b26\u4e32\u5305\u62ec ["aab","aabc","aabcb","abcb","bcb"] \uff0c\u6bcf\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u7f8e\u4e3d\u503c\u90fd\u4e3a 1 \u3002'),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("b",null,"\u8f93\u5165\uff1a"),'s = "aabcbaa"',(0,s.kt)("br",null),(0,s.kt)("b",null,"\u8f93\u51fa\uff1a"),"17",(0,s.kt)("br",null)),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("code",null,"1 <= s.length <=",(0,s.kt)("sup",null," "),"500")),(0,s.kt)("li",null,(0,s.kt)("code",null,"s"),"\xa0\u53ea\u5305\u542b\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u3002")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Problem: ",(0,s.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/sum-of-beauty-of-all-substrings/description/"},"1781. \u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c"))),(0,s.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,s.kt)("p",null,"\u679a\u4e3e\u6240\u6709\u5b50\u4e32\uff0c\u7d2f\u8ba1\u6240\u6709\u7f8e\u4e3d\u503c"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ca1\u60f3\u5230\u5b98\u89e3\u4e5f\u662f\u66b4\u529b\u679a\u4e3e\uff0c\u751a\u81f3\u6ca1\u6709\u4f18\u5316")),(0,s.kt)("h2",{id:"3code"},"3\u3001Code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function beautySum(s: string): number {\n    let ans = 0, chars = new Array(26).fill(0);\n    for (let i = 0; i < s.length; i++) {\n        chars[s.charCodeAt(i) - 97] += 1;\n\n        const counts = [...chars];\n        for (let j = 0; j < i - 1; j++) {\n            let max = 1, min = s.length;\n            for (const c of counts) {\n                if (c > max) max = c;\n                if (c && c < min) min = c;\n            }\n            ans += max - min;\n            counts[s.charCodeAt(j) - 97] -= 1;\n        }\n    }\n\n    return ans;\n}\n")),(0,s.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(C*n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"26")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C=26")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"26")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(C)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image.png",src:t(64413).Z,width:"1544",height:"404"})))}c.isMDXComponent=!0},64413:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/bb49395dfdebbcb13b826a49aea81747-c6e16c1d47747abccc140f9758a29db5.png"}}]);