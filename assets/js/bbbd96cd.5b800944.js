"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[55478],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(t),c=l,d=s["".concat(o,".").concat(c)]||s[c]||k[c]||r;return t?a.createElement(d,i(i({ref:n},m),{},{components:t})):a.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=t(87462),l=(t(67294),t(3905));const r={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66"],date:"2022/11/16"},i=void 0,p={permalink:"/algorithm/775.\u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e",source:"@site/algorithm/775.\u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e.md",title:"775.\u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e",description:"1\u3001\u9898\u5e72",date:"2022-11-16T00:00:00.000Z",formattedDate:"2022\u5e7411\u670816\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"}],readingTime:3.735,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66"],date:"2022/11/16"},prevItem:{title:"792.\u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570",permalink:"/algorithm/792.\u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570"},nextItem:{title:"790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",permalink:"/algorithm/790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa"}},o={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001Code",id:"7code",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2},{value:"10\u3001\u601d\u8def3",id:"10\u601d\u8def3",level:2},{value:"11\u3001Code",id:"11code",level:2},{value:"12\u3001\u590d\u6742\u5ea6",id:"12\u590d\u6742\u5ea6",level:2},{value:"13\u3001\u6267\u884c\u7ed3\u679c",id:"13\u6267\u884c\u7ed3\u679c",level:2}],m={toc:u};function s(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u7684\u6574\u6570\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums")," \uff0c\u8868\u793a\u7531\u8303\u56f4 ",(0,l.kt)("inlineCode",{parentName:"p"},"[0, n - 1]")," \u5185\u6240\u6709\u6574\u6570\u7ec4\u6210\u7684\u4e00\u4e2a\u6392\u5217\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u5012\u7f6e")," \u7684\u6570\u76ee\u7b49\u4e8e\u6ee1\u8db3\u4e0b\u8ff0\u6761\u4ef6\u4e0d\u540c\u4e0b\u6807\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"(i, j)")," \u7684\u6570\u76ee\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= i < j < n")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nums[i] > nums[j]"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5c40\u90e8\u5012\u7f6e")," \u7684\u6570\u76ee\u7b49\u4e8e\u6ee1\u8db3\u4e0b\u8ff0\u6761\u4ef6\u7684\u4e0b\u6807 ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \u7684\u6570\u76ee\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= i < n - 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nums[i] > nums[i + 1]"))),(0,l.kt)("p",null,"\u5f53\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums")," \u4e2d ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u5012\u7f6e")," \u7684\u6570\u91cf\u7b49\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"\u5c40\u90e8\u5012\u7f6e")," \u7684\u6570\u91cf\u65f6\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \uff1b\u5426\u5219\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,0,2","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," true",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6709 1 \u4e2a\u5168\u5c40\u5012\u7f6e\uff0c\u548c 1 \u4e2a\u5c40\u90e8\u5012\u7f6e\u3002",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,2,0","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," false",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6709 2 \u4e2a\u5168\u5c40\u5012\u7f6e\uff0c\u548c 1 \u4e2a\u5c40\u90e8\u5012\u7f6e\u3002",(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\xa0",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n == nums.length")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] < n")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nums")," \u4e2d\u7684\u6240\u6709\u6574\u6570 ",(0,l.kt)("strong",{parentName:"li"},"\u4e92\u4e0d\u76f8\u540c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nums")," \u662f\u8303\u56f4 ",(0,l.kt)("inlineCode",{parentName:"li"},"[0, n - 1]")," \u5185\u6240\u6709\u6570\u5b57\u7ec4\u6210\u7684\u4e00\u4e2a\u6392\u5217")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Problem: ",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/global-and-local-inversions/description/"},"775. \u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e"))),(0,l.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,l.kt)("p",null,"\u6839\u636e\u9898\u610f\u53ef\u77e5\uff0c\u5c40\u90e8\u5012\u7f6e\u662f\u5168\u5c40\u5012\u7f6e\uff0c\u5168\u5c40\u5012\u7f6e\u4e0d\u4e00\u5b9a\u662f\u5c40\u90e8\u5012\u7f6e\uff0c\u56e0\u6b64\u5168\u5c40\u5012\u7f6e\u7684\u6570\u91cf\u5fc5\u7136\u5927\u4e8e\u7b49\u4e8e\u5c40\u90e8\u5012\u7f6e\u3002"),(0,l.kt)("p",null,"\u5f53\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums")," \u5347\u5e8f\u6392\u5217\u65f6\u4e0d\u5b58\u5728\u5012\u7f6e\u60c5\u51b5\uff0c\u82e5\u5c06\u4efb\u610f\u6574\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u7f6e\u6362\u5230\u4f4d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \u5c31\u4f1a\u51fa\u73b0\u5012\u7f6e\uff0c\u4e8c\u8005\u5dee\u503c\u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u65f6\u5fc5\u7136\u4f1a\u51fa\u73b0\u5168\u5c40\u5012\u7f6e\u7684\u6570\u91cf\u5927\u4e8e\u5c40\u90e8\u5012\u7f6e\u3002"),(0,l.kt)("h2",{id:"3code"},"3\u3001Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function isIdealPermutation(nums: number[]): boolean {\n    for (let i = 0; i < nums.length; i++) {\n        if (Math.abs(nums[i] - i) > 1) return false;\n    }\n    return true;\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:t(31226).Z,width:"1504",height:"376"})),(0,l.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,l.kt)("p",null,"\u7d2f\u8ba1\u5c40\u90e8\u5012\u7f6e\u6570\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"pc")," \u548c\u5168\u5c40\u5012\u7f6e\u6570\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"ac"),"\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums[i] > nums[i + 1]")," \u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"pc")," \u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums[i] > i")," \u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"ac")," \u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums[i] - i"),"\uff0c\u6700\u540e\u5224\u65ad\u4e8c\u8005\u662f\u5426\u76f8\u7b49\u3002\u5176\u4e2d\u6709\u4e00\u79cd\u7279\u6b8a\u60c5\u51b5\uff1a\u51fa\u73b03\u4e2a\u8fde\u7eed\u9012\u51cf\u7684\u6570\u65f6\u5168\u5c40\u5012\u7f6e\u6570\u91cf\u5fc5\u5b9a\u5927\u4e8e\u5012\u7f6e\u6570\u91cf\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u601d\u8def\u6b63\u786e\u6027\u6ca1\u6709\u9a8c\u8bc1\uff0c\u5b8c\u5168\u662f\u8fd0\u6c14\u901a\u8fc7")),(0,l.kt)("h2",{id:"7code"},"7\u3001Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function isIdealPermutation(nums: number[]): boolean {\n    let pc = 0, ac = 0;\n\n    for (let i = 0; i < nums.length; i++) {\n        if (nums[i] > nums[i + 1] && nums[i + 1] > nums[i + 2]) return false;\n\n        if (nums[i] > nums[i + 1]) pc++;\n        if (nums[i] > i) ac += nums[i] - i;\n    }\n\n    return pc === ac;\n};\n")),(0,l.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,l.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:t(22940).Z,width:"1496",height:"364"})),(0,l.kt)("h2",{id:"10\u601d\u8def3"},"10\u3001\u601d\u8def3"),(0,l.kt)("p",null,"\u5355\u8c03\u6808\uff0c\u8017\u65f6\u5f88\u957f"),(0,l.kt)("h2",{id:"11code"},"11\u3001Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function isIdealPermutation(nums: number[]): boolean {\n    let pc = 0, ac = 0, stack = [];\n\n    for (let i = 0; i < nums.length; i++) {\n        if (nums[i] > nums[i + 1]) pc++;\n\n        if (!stack.length || stack.at(-1) > nums[i]) {\n            ac += stack.length;\n            stack.push(nums[i]);\n        } else {\n            const j = stack.findIndex(s => s < nums[i]);\n            ac += j;\n            stack.splice(j, 0, nums[i]);\n        }\n    }\n\n    return pc === ac;\n};\n")),(0,l.kt)("h2",{id:"12\u590d\u6742\u5ea6"},"12\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n^2)$"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,l.kt)("h2",{id:"13\u6267\u884c\u7ed3\u679c"},"13\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:t(15519).Z,width:"1462",height:"356"})))}s.isMDXComponent=!0},31226:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/1668591065-MFtYCF-image-12aaa5abe39f819d81d1b0636cb993b8.png"},22940:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/1668591118-jmlyLY-image-2b594de4c7774e784598ad96061cdc58.png"},15519:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/1668591829-KRaVMg-image-e492606ec63f9075f3817d4cd2dfb1e3.png"}}]);