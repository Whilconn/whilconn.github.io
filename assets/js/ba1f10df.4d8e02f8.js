"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[41432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=u(n),s=l,d=k["".concat(o,".").concat(s)]||k[s]||m[s]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},10717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32","\u6570\u8bba"],date:"2022/2/10"},i=void 0,p={permalink:"/algorithm/1447.\u6700\u7b80\u5206\u6570",source:"@site/algorithm/1447.\u6700\u7b80\u5206\u6570.md",title:"1447.\u6700\u7b80\u5206\u6570",description:"1\u3001\u9898\u5e72",date:"2022-02-10T00:00:00.000Z",formattedDate:"2022\u5e742\u670810\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u6570\u8bba",permalink:"/algorithm/tags/\u6570\u8bba"}],readingTime:3.53,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32","\u6570\u8bba"],date:"2022/2/10"},prevItem:{title:"821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb",permalink:"/algorithm/821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb"},nextItem:{title:"\u5251\u6307 Offer II 101.\u5206\u5272\u7b49\u548c\u5b50\u96c6",permalink:"/algorithm/\u5251\u6307 Offer II 101.\u5206\u5272\u7b49\u548c\u5b50\u96c6"}},o={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u54c8\u5e0c\u8868",id:"2\u89e3\u6cd51-\u54c8\u5e0c\u8868",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u89e3\u6cd52-\u6c42\u516c\u7ea6\u6570",id:"6\u89e3\u6cd52-\u6c42\u516c\u7ea6\u6570",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2},{value:"10\u3001\u89e3\u6cd53-\u5206\u6bcd\u56e0\u6570\u500d\u4e58+\u54c8\u5e0c\u96c6\u5408",id:"10\u89e3\u6cd53-\u5206\u6bcd\u56e0\u6570\u500d\u4e58\u54c8\u5e0c\u96c6\u5408",level:2},{value:"11\u3001\u4ee3\u7801",id:"11\u4ee3\u7801",level:2},{value:"12\u3001\u590d\u6742\u5ea6",id:"12\u590d\u6742\u5ea6",level:2},{value:"13\u3001\u6267\u884c\u7ed3\u679c",id:"13\u6267\u884c\u7ed3\u679c",level:2}],c={toc:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\uff0c\u8bf7\u4f60\u8fd4\u56de\u6240\u6709 0 \u5230 1 \u4e4b\u95f4\uff08\u4e0d\u5305\u62ec 0 \u548c 1\uff09\u6ee1\u8db3\u5206\u6bcd\u5c0f\u4e8e\u7b49\u4e8e\xa0\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u6700\u7b80"),"\xa0\u5206\u6570\xa0\u3002\u5206\u6570\u53ef\u4ee5\u4ee5 ",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u610f"),"\xa0\u987a\u5e8f\u8fd4\u56de\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 2",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"1/2"',"]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' "1/2" \u662f\u552f\u4e00\u4e00\u4e2a\u5206\u6bcd\u5c0f\u4e8e\u7b49\u4e8e 2 \u7684\u6700\u7b80\u5206\u6570\u3002',(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 3",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"1/2","1/3","2/3"',"]",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 4",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"1/2","1/3","1/4","2/3","3/4"',"]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' "2/4" \u4e0d\u662f\u6700\u7b80\u5206\u6570\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u5316\u7b80\u4e3a "1/2" \u3002',(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 1",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","]",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= n <= 100"))),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u54c8\u5e0c\u8868"},"2\u3001\u89e3\u6cd51-\u54c8\u5e0c\u8868"),(0,l.kt)("p",null,"\u7528\u54c8\u5e0c\u6620\u5c04\u5b58\u50a8\u5c0f\u6570\u548c\u5206\u6570\u5b57\u7b26\u4e32\uff0c\u5176\u4e2d\u5c0f\u6570\u4f5c\u4e3a\u952e\u5206\u6570\u5b57\u7b26\u4e32\u4f5c\u4e3a\u503c\uff0c\u6700\u540e\u8fd4\u56de\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684\u6240\u6709\u503c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var simplifiedFractions = function (n) {\n    const map = new Map();\n    for (let i = 1; i < n; i++) {\n        for (let j = i + 1; j <= n; j++) {\n            if (!map.has(i / j)) map.set(i / j, `${i}/${j}`);\n        }\n    }\n\n    return [...map.values()];\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n^2)$"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 108 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 46.3 MB")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u89e3\u6cd52-\u6c42\u516c\u7ea6\u6570"},"6\u3001\u89e3\u6cd52-\u6c42\u516c\u7ea6\u6570"),(0,l.kt)("p",null,"\u53c2\u8003\u6c42\u7d20\u6570\u7684\u65b9\u6cd5\uff0c\u4ece $2$ \u5f00\u59cb\u904d\u5386\u5230 $\\sqrt{n}$\uff0c\u770b\u5206\u5b50\u5206\u6bcd\u662f\u5426\u5b58\u5728\u516c\u7ea6\u6570"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var simplifiedFractions = function (n) {\n    function skip(min, max) {\n        for (let i = 2; i * i <= max; i++) {\n            if (max % i === 0 && (min % i === 0 || min % (max / i) === 0)) return true;\n        }\n        return false;\n    }\n\n    const res = [];\n    for (let i = 1; i < n; i++) {\n        for (let j = i + 1; j <= n; j++) {\n            if (!skip(i, j)) res.push(i + '/' + j);\n        }\n    }\n\n    return res;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n^2*\\sqrt{n})$"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 88 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 47.2 MB")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1644456947-pdtFRM-image.png",alt:"image.png"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"10\u89e3\u6cd53-\u5206\u6bcd\u56e0\u6570\u500d\u4e58\u54c8\u5e0c\u96c6\u5408"},"10\u3001\u89e3\u6cd53-\u5206\u6bcd\u56e0\u6570\u500d\u4e58+\u54c8\u5e0c\u96c6\u5408"),(0,l.kt)("p",null,"\u53c2\u8003\u6c42\u7d20\u6570\u7684\u65b9\u6cd5\uff0c\u4ece $2$ \u5f00\u59cb\u904d\u5386\u5230 $\\sqrt{n}$\uff0c\u6c42\u51fa\u6240\u6709\u5c0f\u4e8e\u5206\u6bcd\u7684\u56e0\u6570\u53ca\u5176\u500d\u4e58\u7ed3\u679c\u5e76\u5b58\u50a8\u5230\u54c8\u5e0c\u96c6\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"cdSet")," \u4e2d\uff0c\u82e5\u5206\u5b50\u5b58\u5728\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"cdSet")," \u4e2d\u5219\u8bf4\u660e\u5206\u5b50\u5206\u6bcd\u5b58\u5728\u516c\u7ea6\u6570"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"11\u4ee3\u7801"},"11\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var simplifiedFractions = function (n) {\n    const res = [];\n    for (let i = 2; i <= n; i++) {\n        const cdSet = new Set();\n        for (let c = 2; c * c <= i; c++) {\n            if (i % c) continue;\n            for (let m = 1; m * c < i; m++) {\n                cdSet.add(m * c);\n                if (m * i / c < i) cdSet.add(m * i / c);\n            }\n        }\n\n        for (let j = 1; j < i; j++) {\n            if (!cdSet.has(j)) res.push(j + '/' + i);\n        }\n    }\n\n    return res;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"12\u590d\u6742\u5ea6"},"12\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n^2)$"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"13\u6267\u884c\u7ed3\u679c"},"13\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 84 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 46.9 MB")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1644459772-yZOlsk-image.png",alt:"image.png"})))}k.isMDXComponent=!0}}]);