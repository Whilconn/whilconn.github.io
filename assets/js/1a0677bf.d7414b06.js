"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[10436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=u(n),c=r,g=k["".concat(p,".").concat(c)]||k[c]||s[c]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u53cc\u6307\u9488","\u4e8c\u5206\u67e5\u627e","\u6392\u5e8f"],date:"2021/12/27"},i=void 0,o={permalink:"/algorithm/825.\u9002\u9f84\u7684\u670b\u53cb",source:"@site/algorithm/825.\u9002\u9f84\u7684\u670b\u53cb.md",title:"825.\u9002\u9f84\u7684\u670b\u53cb",description:"1\u3001\u9898\u5e72",date:"2021-12-27T00:00:00.000Z",formattedDate:"2021\u5e7412\u670827\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u4e8c\u5206\u67e5\u627e",permalink:"/algorithm/tags/\u4e8c\u5206\u67e5\u627e"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:4.985,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u53cc\u6307\u9488","\u4e8c\u5206\u67e5\u627e","\u6392\u5e8f"],date:"2021/12/27"},prevItem:{title:"472.\u8fde\u63a5\u8bcd",permalink:"/algorithm/472.\u8fde\u63a5\u8bcd"},nextItem:{title:"1078.Bigram \u5206\u8bcd",permalink:"/algorithm/1078.Bigram \u5206\u8bcd"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u9898\u76ee\u5206\u6790",id:"2\u9898\u76ee\u5206\u6790",level:2},{value:"3\u3001\u89e3\u6cd51-\u8ba1\u6570\u6392\u5e8f",id:"3\u89e3\u6cd51-\u8ba1\u6570\u6392\u5e8f",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u89e3\u6cd52-\u4e8c\u5206\u67e5\u627e",id:"6\u89e3\u6cd52-\u4e8c\u5206\u67e5\u627e",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u6267\u884c\u7ed3\u679c",id:"8\u6267\u884c\u7ed3\u679c",level:2}],m={toc:u};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u5728\u793e\u4ea4\u5a92\u4f53\u7f51\u7ad9\u4e0a\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a\u7528\u6237\u3002\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"ages")," \uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"ages[i]")," \u662f\u7b2c ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u4e2a\u7528\u6237\u7684\u5e74\u9f84\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e0b\u8ff0\u4efb\u610f\u4e00\u4e2a\u6761\u4ef6\u4e3a\u771f\uff0c\u90a3\u4e48\u7528\u6237 ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u5c06\u4e0d\u4f1a\u5411\u7528\u6237 ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),"\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"x != y"),"\uff09\u53d1\u9001\u597d\u53cb\u8bf7\u6c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ages[y] <= 0.5 * ages[x] + 7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ages[y] > ages[x]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ages[y] > 100 && ages[x] < 100"))),(0,r.kt)("p",null,"\u5426\u5219\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u5c06\u4f1a\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \u53d1\u9001\u4e00\u6761\u597d\u53cb\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \u53d1\u9001\u4e00\u6761\u597d\u53cb\u8bf7\u6c42\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \u4e0d\u5fc5\u4e5f\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u53d1\u9001\u4e00\u6761\u597d\u53cb\u8bf7\u6c42\u3002\u53e6\u5916\uff0c\u7528\u6237\u4e0d\u4f1a\u5411\u81ea\u5df1\u53d1\u9001\u597d\u53cb\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"\u8fd4\u56de\u5728\u8be5\u793e\u4ea4\u5a92\u4f53\u7f51\u7ad9\u4e0a\u4ea7\u751f\u7684\u597d\u53cb\u8bf7\u6c42\u603b\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," ages = ","[","16,16","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," 2 \u4eba\u4e92\u53d1\u597d\u53cb\u8bf7\u6c42\u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," ages = ","[","16,17,18","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4ea7\u751f\u7684\u597d\u53cb\u8bf7\u6c42\u4e3a 17 -> 16 \uff0c18 -> 17 \u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," ages = ","[","20,30,100,110,120","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 3",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4ea7\u751f\u7684\u597d\u53cb\u8bf7\u6c42\u4e3a 110 -> 100 \uff0c120 -> 110 \uff0c120 -> 100 \u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n == ages.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2 * 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= ages[i] <= 120"))),(0,r.kt)("h2",{id:"2\u9898\u76ee\u5206\u6790"},"2\u3001\u9898\u76ee\u5206\u6790"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u53cb\u5e74\u9f84\u9650\u5236\u7684\u9650\u5236\u6761\u4ef6\u8f6c\u6362\u540e\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\uff1a\u5bf9\u4e8e\u4efb\u610f\u5e74\u9f84",(0,r.kt)("inlineCode",{parentName:"li"},"ages[x]"),"\uff0c\u4ea4\u53cb\u8303\u56f4\u7684\u533a\u95f4\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"(0.5 * ages[x] + 7,ages[x]]"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u4ea4\u53cb\u8303\u56f4\u8fd8\u53ef\u63a8\u65ad\u51fa\uff0c\u5e74\u9f8415\u5c81\u4ee5\u4e0b\u7684\u7528\u6237\u4ea4\u53cb\u8303\u56f4\u533a\u95f4\u662f\u7a7a\u96c6\uff0c\u56e0\u6b64\u540e\u7eed\u7f16\u7801\u65f6\u53ef\u4ee5\u76f4\u63a5\u6392\u966415\u5c81\u4ee5\u4e0b\u7684\u6570\u636e\u3002")),(0,r.kt)("h2",{id:"3\u89e3\u6cd51-\u8ba1\u6570\u6392\u5e8f"},"3\u3001\u89e3\u6cd51-\u8ba1\u6570\u6392\u5e8f"),(0,r.kt)("p",null,"\u5bf9\u5e74\u9f84\u4f7f\u7528\u8ba1\u6570\u6392\u5e8f\uff0c\u904d\u5386\u6240\u6709\u5e74\u9f84",(0,r.kt)("inlineCode",{parentName:"p"},"age"),"\uff0c\u7d2f\u8ba1\u5e76\u66f4\u65b0\u4ea4\u53cb\u8303\u56f4\u533a\u95f4",(0,r.kt)("inlineCode",{parentName:"p"},"(0.5 * age + 7,age]"),"\u5185\u7684\u4eba\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"preCount"),"\uff0c\u7136\u540e\u5bf9\u6700\u7ec8\u7ed3\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"res"),"\u7d2f\u52a0\u5f53\u524d\u5e74\u9f84\u7684\u4ea4\u53cb\u8bf7\u6c42\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"(preCount - 1) * counts[age]")),(0,r.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var numFriendRequests = function (ages) {\n    const counts = new Array(121).fill(0);\n    for (const age of ages) if (age > 14) counts[age]++;\n    let preCount = 0, res = 0;\n    for (let age = 15; age < counts.length; age++) {\n        if (age % 2 === 0) preCount -= counts[((age - 1) / 2 + 8) >> 0];\n        preCount += counts[age];\n        res += (preCount - 1) * counts[age];\n    }\n    return res;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u7b80\u8981\u8bf4\u660e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"if (age % 2 === 0) preCount -= counts[((age - 1) / 2 + 8) >> 0]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4efb\u610f\u5e74\u9f84",(0,r.kt)("inlineCode",{parentName:"li"},"age"),"\u4e0e",(0,r.kt)("inlineCode",{parentName:"li"},"age-1"),"\u800c\u8a00\uff0c\u4ea4\u53cb\u5e74\u9f84\u4e0b\u9650\u5206\u522b\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"counts[(age / 2 + 8) >> 0]"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"counts[((age - 1) / 2 + 8) >> 0]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"age"),"\u4e3a\u5947\u6570\u65f6\u8fd9\u4e24\u4e2a\u4ea4\u53cb\u5e74\u9f84\u4e0b\u9650\u76f8\u540c\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"age"),"\u4e3a\u5076\u6570\u65f6\u4ea4\u53cb\u5e74\u9f84\u4e0b\u9650\u6bd4",(0,r.kt)("inlineCode",{parentName:"li"},"age-1"),"\u59271"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64",(0,r.kt)("inlineCode",{parentName:"li"},"age"),"\u4e3a\u5076\u6570\u65f6\uff0c\u9700\u8981\u51cf\u53bb",(0,r.kt)("inlineCode",{parentName:"li"},"age-1"),"\u7684\u4ea4\u53cb\u4e0b\u9650\u4eba\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"counts[((age - 1) / 2 + 8) >> 0]")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preCount += counts[age]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u52a0\u4e0a\u5f53\u524d\u5e74\u9f84\u7528\u6237\u7684\u6570\u91cf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"res += (preCount - 1) * counts[age]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d\u5e74\u9f84\u4eba\u6570\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"counts[age]"),"\uff0c\u4ed6\u4eec\u4f1a\u7ed9\u4ea4\u53cb\u8303\u56f4\u5185\u9664\u81ea\u5df1\u5916\u7684\u6240\u6709\u4eba",(0,r.kt)("inlineCode",{parentName:"li"},"preCount - 1"),"\u53d1\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"res += (preCount - 1) * counts[age]"))))),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.png",src:n(95786).Z,width:"1334",height:"488"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"6\u89e3\u6cd52-\u4e8c\u5206\u67e5\u627e"},"6\u3001\u89e3\u6cd52-\u4e8c\u5206\u67e5\u627e"),(0,r.kt)("p",null,"\u5148\u5bf9\u6240\u6709\u5e74\u9f84",(0,r.kt)("inlineCode",{parentName:"p"},"ages"),"\u8fdb\u884c\u964d\u5e8f\u6392\u5e8f\uff0c\u7136\u540e\u904d\u5386\u6240\u6709\u5e74\u9f84\uff0c\u5bf9\u5f53\u524d\u5e74\u9f84\u7684\u4ea4\u53cb\u5e74\u9f84\u4e0b\u9650\u8fdb\u884c\u4e8c\u5206\u67e5\u627e\uff0c\u7d2f\u8ba1\u6240\u6709\u4ea4\u53cb\u8bf7\u6c42\u6570\u3002\u5176\u4e2d\uff0c\u9047\u5230\u76f8\u540c\u5e74\u9f84\u65f6\u76f4\u63a5\u8df3\u8fc7\u5e76\u7d2f\u8ba1\u5176\u6570\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"same"),"\uff0c\u5f53\u5e74\u9f84\u4e0d\u518d\u76f8\u540c\u65f6\u5bf9\u6700\u7ec8\u7ed3\u679c\u7d2f\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"same * (same - 1)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8be5\u65b9\u6cd5\u5b58\u5728\u8f83\u591a\u8fb9\u754c\u6761\u4ef6\uff0c\u5904\u7406\u4e0d\u5f53\u5f88\u5bb9\u6613\u62a5\u9519\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u8be5\u65b9\u6cd5\u5b9e\u73b0")),(0,r.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var numFriendRequests = function (ages) {\n    ages.sort((a, b) => b - a);\n    let same = 1;\n    return ages.reduce((acc, cur, i) => {\n        if (cur === ages[i + 1]) same++;\n        if (cur <= 14 || (cur === ages[i + 1] && i !== ages.length - 1)) return acc;\n\n        let l = i + 1, r = ages.length - 1;\n        while (l < r) {\n            const m = Math.floor((l + r) / 2);\n            ages[m] <= cur / 2 + 7 ? (r = m - 1) : (l = m + 1);\n        }\n\n        acc += same * (same - 1 + Math.max(0, r - i - (ages[r] > cur / 2 + 7 ? 0 : 1)));\n        return (same = 1), acc;\n    }, 0);\n};\n")),(0,r.kt)("h2",{id:"8\u6267\u884c\u7ed3\u679c"},"8\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a124 ms\t\u5185\u5b58\u6d88\u8017\uff1a47.3 MB")))}k.isMDXComponent=!0},95786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1640594214-bDZtvG-1-8deb2c4cd8e19a836e9814b6556fe26e.png"}}]);