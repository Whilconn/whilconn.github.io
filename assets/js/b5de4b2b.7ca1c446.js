"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[6872],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),c=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(i.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),m=c(n),k=r,g=m["".concat(i,".").concat(k)]||m[k]||s[k]||a;return n?l.createElement(g,o(o({ref:e},p),{},{components:n})):l.createElement(g,o({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[m]="string"==typeof t?t:r,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},38444:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u77e9\u9635"],date:new Date("2023-12-01T00:00:00.000Z")},o=void 0,u={permalink:"/algorithm/2023/12/01/2661.\u627e\u51fa\u53e0\u6d82\u5143\u7d20",source:"@site/algorithm/2023/12/01/2661.\u627e\u51fa\u53e0\u6d82\u5143\u7d20.md",title:"2661.\u627e\u51fa\u53e0\u6d82\u5143\u7d20",description:"1\u3001\u9898\u5e72",date:"2023-12-01T00:00:00.000Z",formattedDate:"2023\u5e7412\u67081\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:1.97,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u77e9\u9635"],date:"2023-12-01T00:00:00.000Z"},prevItem:{title:"1038.\u4ece\u4e8c\u53c9\u641c\u7d22\u6811\u5230\u66f4\u5927\u548c\u6811",permalink:"/algorithm/2023/12/04/1038.\u4ece\u4e8c\u53c9\u641c\u7d22\u6811\u5230\u66f4\u5927\u548c\u6811"},nextItem:{title:"1657.\u786e\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u63a5\u8fd1",permalink:"/algorithm/2023/11/30/1657.\u786e\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u63a5\u8fd1"}},i={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2}],p={toc:c};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece ",(0,r.kt)("strong",null,"0")," \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 ",(0,r.kt)("code",null,"arr")," \u548c\u4e00\u4e2a ",(0,r.kt)("code",null,"m x n")," \u7684\u6574\u6570 ",(0,r.kt)("strong",null,"\u77e9\u9635")," ",(0,r.kt)("code",null,"mat")," \u3002",(0,r.kt)("code",null,"arr")," \u548c ",(0,r.kt)("code",null,"mat")," \u90fd\u5305\u542b\u8303\u56f4 ",(0,r.kt)("code",null,"[1\uff0cm * n]")," \u5185\u7684 ",(0,r.kt)("strong",null,"\u6240\u6709")," \u6574\u6570\u3002"),(0,r.kt)("p",null,"\u4ece\u4e0b\u6807 ",(0,r.kt)("code",null,"0")," \u5f00\u59cb\u904d\u5386 ",(0,r.kt)("code",null,"arr")," \u4e2d\u7684\u6bcf\u4e2a\u4e0b\u6807 ",(0,r.kt)("code",null,"i")," \uff0c\u5e76\u5c06\u5305\u542b\u6574\u6570 ",(0,r.kt)("code",null,"arr[i]")," \u7684 ",(0,r.kt)("code",null,"mat")," \u5355\u5143\u683c\u6d82\u8272\u3002"),(0,r.kt)("p",null,"\u8bf7\u4f60\u627e\u51fa ",(0,r.kt)("code",null,"arr")," \u4e2d\u5728 ",(0,r.kt)("code",null,"mat")," \u7684\u67d0\u4e00\u884c\u6216\u67d0\u4e00\u5217\u4e0a\u90fd\u88ab\u6d82\u8272\u4e14\u4e0b\u6807\u6700\u5c0f\u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u5176\u4e0b\u6807 ",(0,r.kt)("code",null,"i")," \u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("img",{alt:"image explanation for example 1",src:"https://assets.leetcode.com/uploads/2023/01/18/grid1.jpg"}),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"arr = [1,3,4,2], mat = [[1,4],[2,3]]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"2",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u904d\u5386\u5982\u4e0a\u56fe\u6240\u793a\uff0carr[2] \u5728\u77e9\u9635\u4e2d\u7684\u7b2c\u4e00\u884c\u6216\u7b2c\u4e8c\u5217\u4e0a\u90fd\u88ab\u6d82\u8272\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("img",{alt:"image explanation for example 2",src:"https://assets.leetcode.com/uploads/2023/01/18/grid2.jpg"}),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"3",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u904d\u5386\u5982\u4e0a\u56fe\u6240\u793a\uff0carr[3] \u5728\u77e9\u9635\u4e2d\u7684\u7b2c\u4e8c\u5217\u4e0a\u90fd\u88ab\u6d82\u8272\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"m == mat.length")),(0,r.kt)("li",null,(0,r.kt)("code",null,"n = mat[i].length")),(0,r.kt)("li",null,(0,r.kt)("code",null,"arr.length == m * n")),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= m, n <= 10",(0,r.kt)("sup",null,"5"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= m * n <= 10",(0,r.kt)("sup",null,"5"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= arr[i], mat[r][c] <= m * n")),(0,r.kt)("li",null,(0,r.kt)("code",null,"arr")," \u4e2d\u7684\u6240\u6709\u6574\u6570 ",(0,r.kt)("strong",null,"\u4e92\u4e0d\u76f8\u540c")),(0,r.kt)("li",null,(0,r.kt)("code",null,"mat")," \u4e2d\u7684\u6240\u6709\u6574\u6570 ",(0,r.kt)("strong",null,"\u4e92\u4e0d\u76f8\u540c"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u6a21\u62df\u9898\uff0c\u5bf9\u884c\u5217\u6d82\u8272\u8ba1\u6570\u5373\u53ef"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function firstCompleteIndex(arr: number[], mat: number[][]): number {\n    const map = new Array(arr.length + 1);\n    for (let i = 0; i < mat.length; i++) {\n        for (let j = 0; j < mat[i].length; j++) {\n            map[mat[i][j]] = [i, j];\n        }\n    }\n\n    const rows = new Array(mat.length).fill(0), cols = new Array(mat[0].length).fill(0);\n    for (let i = 0; i < arr.length; i++) {\n        const [r, c] = map[arr[i]];\n        rows[r]++, cols[c]++;\n        if (rows[r] === mat[0].length || cols[c] === mat.length) return i;\n    }\n\n    return -1;\n};\n")))}m.isMDXComponent=!0}}]);