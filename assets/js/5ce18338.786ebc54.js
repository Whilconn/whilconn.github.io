"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[69284],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),k=a,b=s["".concat(c,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},29952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(15882),a=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u8ba1\u6570"],date:"2022/12/12"},o=void 0,i={permalink:"/algorithm/1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",source:"@site/algorithm/1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c.md",title:"1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",description:"1\u3001\u9898\u5e72",date:"2022-12-12T00:00:00.000Z",formattedDate:"2022\u5e7412\u670812\u65e5",tags:[{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u8ba1\u6570",permalink:"/algorithm/tags/\u8ba1\u6570"}],readingTime:1.65,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u8ba1\u6570"],date:"2022/12/12"},prevItem:{title:"\u9762\u8bd5\u9898 17.09.\u7b2c k \u4e2a\u6570",permalink:"/algorithm/\u9762\u8bd5\u9898 17.09.\u7b2c k \u4e2a\u6570"},nextItem:{title:"1277.\u7edf\u8ba1\u5168\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u5b50\u77e9\u9635",permalink:"/algorithm/1277.\u7edf\u8ba1\u5168\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u5b50\u77e9\u9635"}},c={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],u={toc:p};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u7f8e\u4e3d\u503c"),"\xa0\u5b9a\u4e49\u4e3a\uff1a\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u5b57\u7b26\u4e0e\u51fa\u73b0\u9891\u7387\u6700\u4f4e\u5b57\u7b26\u7684\u51fa\u73b0\u6b21\u6570\u4e4b\u5dee\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u65b9\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},'"abaacc"'),"\xa0\u7684\u7f8e\u4e3d\u503c\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"3 - 1 = 2"),"\xa0\u3002")),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\xa0\uff0c\u8bf7\u4f60\u8fd4\u56de\u5b83\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7684\xa0",(0,a.kt)("strong",{parentName:"p"},"\u7f8e\u4e3d\u503c"),"\xa0\u4e4b\u548c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "aabcb"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 5",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7f8e\u4e3d\u503c\u4e0d\u4e3a\u96f6\u7684\u5b57\u7b26\u4e32\u5305\u62ec ","[",'"aab","aabc","aabcb","abcb","bcb"',"]"," \uff0c\u6bcf\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u7f8e\u4e3d\u503c\u90fd\u4e3a 1 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "aabcbaa"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 17",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 500")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s"),"\xa0\u53ea\u5305\u542b\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Problem: ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/sum-of-beauty-of-all-substrings/description/"},"1781. \u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c"))),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("p",null,"\u679a\u4e3e\u6240\u6709\u5b50\u4e32\uff0c\u7d2f\u8ba1\u6240\u6709\u7f8e\u4e3d\u503c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ca1\u60f3\u5230\u5b98\u89e3\u4e5f\u662f\u66b4\u529b\u679a\u4e3e\uff0c\u751a\u81f3\u6ca1\u6709\u4f18\u5316")),(0,a.kt)("h2",{id:"3code"},"3\u3001Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function beautySum(s: string): number {\n    let ans = 0, chars = new Array(26).fill(0);\n    for (let i = 0; i < s.length; i++) {\n        chars[s.charCodeAt(i) - 97] += 1;\n\n        const counts = [...chars];\n        for (let j = 0; j < i - 1; j++) {\n            let max = 1, min = s.length;\n            for (const c of counts) {\n                if (c > max) max = c;\n                if (c && c < min) min = c;\n            }\n            ans += max - min;\n            counts[s.charCodeAt(j) - 97] -= 1;\n        }\n    }\n\n    return ans;\n}\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(C*n^2)$\uff0c$C=26$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(C)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(87115).Z,width:"1544",height:"404"})))}s.isMDXComponent=!0},87115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1670815604-ODWMhb-image-c6e16c1d47747abccc140f9758a29db5.png"}}]);