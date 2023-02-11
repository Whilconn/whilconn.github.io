"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[52507],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>N});var a=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var p=a.createContext({}),i=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=i(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,r=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),u=i(n),k=s,N=u["".concat(p,".").concat(k)]||u[k]||c[k]||r;return n?a.createElement(N,l(l({ref:e},o),{},{components:n})):a.createElement(N,l({ref:e},o))}));function N(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var r=n.length,l=new Array(r);l[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[u]="string"==typeof t?t:s,l[1]=m;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},13324:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>i});var a=n(87462),s=(n(67294),n(3905));const r={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:"2022/11/7"},l=void 0,m={permalink:"/algorithm/2022/11/07/816.\u6a21\u7cca\u5750\u6807",source:"@site/algorithm/2022/11/07/816.\u6a21\u7cca\u5750\u6807.md",title:"816.\u6a21\u7cca\u5750\u6807",description:"1\u3001\u9898\u5e72",date:"2022-11-07T00:00:00.000Z",formattedDate:"2022\u5e7411\u67087\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"}],readingTime:2.505,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:"2022/11/7"},prevItem:{title:"1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/algorithm/2022/11/08/1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee"},nextItem:{title:"1106.\u89e3\u6790\u5e03\u5c14\u8868\u8fbe\u5f0f",permalink:"/algorithm/2022/11/06/1106.\u89e3\u6790\u5e03\u5c14\u8868\u8fbe\u5f0f"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2}],o={toc:i};function u(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,s.kt)("p",null,"\u6211\u4eec\u6709\u4e00\u4e9b\u4e8c\u7ef4\u5750\u6807\uff0c\u5982\xa0",(0,s.kt)("code",null,'"(1, 3)"'),"\xa0\u6216\xa0",(0,s.kt)("code",null,'"(2, 0.5)"'),"\uff0c\u7136\u540e\u6211\u4eec\u79fb\u9664\u6240\u6709\u9017\u53f7\uff0c\u5c0f\u6570\u70b9\u548c\u7a7a\u683c\uff0c\u5f97\u5230\u4e00\u4e2a\u5b57\u7b26\u4e32",(0,s.kt)("code",null,"S"),"\u3002\u8fd4\u56de\u6240\u6709\u53ef\u80fd\u7684\u539f\u59cb\u5b57\u7b26\u4e32\u5230\u4e00\u4e2a\u5217\u8868\u4e2d\u3002"),(0,s.kt)("p",null,'\u539f\u59cb\u7684\u5750\u6807\u8868\u793a\u6cd5\u4e0d\u4f1a\u5b58\u5728\u591a\u4f59\u7684\u96f6\uff0c\u6240\u4ee5\u4e0d\u4f1a\u51fa\u73b0\u7c7b\u4f3c\u4e8e"00", "0.0", "0.00", "1.0", "001", "00.01"\u6216\u4e00\u4e9b\u5176\u4ed6\u66f4\u5c0f\u7684\u6570\u6765\u8868\u793a\u5750\u6807\u3002\u6b64\u5916\uff0c\u4e00\u4e2a\u5c0f\u6570\u70b9\u524d\u81f3\u5c11\u5b58\u5728\u4e00\u4e2a\u6570\uff0c\u6240\u4ee5\u4e5f\u4e0d\u4f1a\u51fa\u73b0\u201c.1\u201d\u5f62\u5f0f\u7684\u6570\u5b57\u3002'),(0,s.kt)("p",null,"\u6700\u540e\u8fd4\u56de\u7684\u5217\u8868\u53ef\u4ee5\u662f\u4efb\u610f\u987a\u5e8f\u7684\u3002\u800c\u4e14\u6ce8\u610f\u8fd4\u56de\u7684\u4e24\u4e2a\u6570\u5b57\u4e2d\u95f4\uff08\u9017\u53f7\u4e4b\u540e\uff09\u90fd\u6709\u4e00\u4e2a\u7a7a\u683c\u3002"),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u793a\u4f8b 1:"),(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u5165:"),' "(123)"',(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa:"),' ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]',(0,s.kt)("br",null)),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u793a\u4f8b 2:"),(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u5165:"),' "(00011)"',(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa:"),' \xa0["(0.001, 1)", "(0, 0.011)"]',(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u89e3\u91ca:")," ",(0,s.kt)("br",null),"0.0, 00, 0001 \u6216 00.01 \u662f\u4e0d\u88ab\u5141\u8bb8\u7684\u3002",(0,s.kt)("br",null)),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u793a\u4f8b 3:"),(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u5165:"),' "(0123)"',(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa:"),' ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]',(0,s.kt)("br",null)),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u793a\u4f8b 4:"),(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u5165:"),' "(100)"',(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa:")," [(10, 0)]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u89e3\u91ca:")," ",(0,s.kt)("br",null),"1.0 \u662f\u4e0d\u88ab\u5141\u8bb8\u7684\u3002",(0,s.kt)("br",null)),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u63d0\u793a:")),(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("code",null,"4 <= S.length <= 12"),"."),(0,s.kt)("li",null,(0,s.kt)("code",null,"S[0]"),' = "(", ',(0,s.kt)("code",null,"S[S.length - 1]"),' = ")", \u4e14\u5b57\u7b26\u4e32\xa0',(0,s.kt)("code",null,"S"),"\xa0\u4e2d\u7684\u5176\u4ed6\u5143\u7d20\u90fd\u662f\u6570\u5b57\u3002")),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Problem: ",(0,s.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/ambiguous-coordinates/description/"},"816. \u6a21\u7cca\u5750\u6807"))),(0,s.kt)("p",null,"[","TOC]"),(0,s.kt)("h1",{id:"\u601d\u8def"},"\u601d\u8def"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5254\u9664\u539f\u59cb\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u7684\u62ec\u53f7"),(0,s.kt)("li",{parentName:"ul"},"\u5c06 ",(0,s.kt)("inlineCode",{parentName:"li"},"s")," \u62c6\u5206\u6210\u4e24\u4e2a\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"li"},"s1"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"s2")),(0,s.kt)("li",{parentName:"ul"},"\u5206\u522b\u5bf9 ",(0,s.kt)("inlineCode",{parentName:"li"},"s1"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"s2")," \u6dfb\u52a0\u5c0f\u6570\u70b9\uff0c\u5f97\u5230\u4e24\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4 ",(0,s.kt)("inlineCode",{parentName:"li"},"nums1"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"nums2")),(0,s.kt)("li",{parentName:"ul"},"\u7ec4\u5408 ",(0,s.kt)("inlineCode",{parentName:"li"},"nums1"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"nums2")," \u4e2d\u7684\u5b57\u7b26\u4e32\u5f97\u5230\u6700\u7ec8\u7ed3\u679c")),(0,s.kt)("h1",{id:"\u590d\u6742\u5ea6"},"\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"3")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"3")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("h1",{id:"code"},"Code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"\nfunction ambiguousCoordinates(s: string): string[] {\n    s = s.slice(1, s.length - 1);\n\n    const res = [];\n\n    function insertDot(str: string) {\n        const nums = /^0\\d/.test(str) ? [] : [str];\n\n        for (let j = 1; j < str.length; j++) {\n            const ns = str.slice(0, j) + '.' + str.slice(j);\n            if (!/^0\\d|0$/.test(ns)) nums.push(ns);\n        }\n\n        return nums;\n    }\n\n    for (let i = 1; i < s.length; i++) {\n        const s1 = s.slice(0, i), s2 = s.slice(i);\n        const nums1 = insertDot(s1), nums2 = insertDot(s2);\n\n        for (const ns1 of nums1) {\n            for (const ns2 of nums2) {\n                res.push(`(${ns1}, ${ns2})`);\n            }\n        }\n    }\n\n    return res;\n}\n")))}u.isMDXComponent=!0}}]);