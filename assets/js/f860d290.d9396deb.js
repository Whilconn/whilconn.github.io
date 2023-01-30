"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[72164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,d=m["".concat(p,".").concat(s)]||m[s]||k[s]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},51884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4","\u54c8\u5e0c\u8868","\u6392\u5e8f"],date:"2021/12/30"},i=void 0,o={permalink:"/algorithm/846.\u4e00\u624b\u987a\u5b50",source:"@site/algorithm/846.\u4e00\u624b\u987a\u5b50.md",title:"846.\u4e00\u624b\u987a\u5b50",description:"1\u3001\u9898\u5e72",date:"2021-12-30T00:00:00.000Z",formattedDate:"2021\u5e7412\u670830\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:3.55,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4","\u54c8\u5e0c\u8868","\u6392\u5e8f"],date:"2021/12/30"},prevItem:{title:"507.\u5b8c\u7f8e\u6570",permalink:"/algorithm/507.\u5b8c\u7f8e\u6570"},nextItem:{title:"\u5251\u6307 Offer II 051.\u8282\u70b9\u4e4b\u548c\u6700\u5927\u7684\u8def\u5f84",permalink:"/algorithm/\u5251\u6307 Offer II 051.\u8282\u70b9\u4e4b\u548c\u6700\u5927\u7684\u8def\u5f84"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51",id:"2\u89e3\u6cd51",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd52",id:"5\u89e3\u6cd52",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u6267\u884c\u7ed3\u679c",id:"7\u6267\u884c\u7ed3\u679c",level:2}],c={toc:u};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"Alice \u624b\u4e2d\u6709\u4e00\u628a\u724c\uff0c\u5979\u60f3\u8981\u91cd\u65b0\u6392\u5217\u8fd9\u4e9b\u724c\uff0c\u5206\u6210\u82e5\u5e72\u7ec4\uff0c\u4f7f\u6bcf\u4e00\u7ec4\u7684\u724c\u6570\u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"groupSize")," \uff0c\u5e76\u4e14\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"groupSize")," \u5f20\u8fde\u7eed\u7684\u724c\u7ec4\u6210\u3002"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"hand")," \u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"hand[i]")," \u662f\u5199\u5728\u7b2c ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u5f20\u724c\uff0c\u548c\u4e00\u4e2a\u6574\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"groupSize")," \u3002\u5982\u679c\u5979\u53ef\u80fd\u91cd\u65b0\u6392\u5217\u8fd9\u4e9b\u724c\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \uff1b\u5426\u5219\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," hand = ","[","1,2,3,6,2,3,4,7,8","]",", groupSize = 3",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," true",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," Alice \u624b\u4e2d\u7684\u724c\u53ef\u4ee5\u88ab\u91cd\u65b0\u6392\u5217\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"[1,2,3]\uff0c[2,3,4]\uff0c[6,7,8]"),"\u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," hand = ","[","1,2,3,4,5","]",", groupSize = 4",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," false",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," Alice \u624b\u4e2d\u7684\u724c\u65e0\u6cd5\u88ab\u91cd\u65b0\u6392\u5217\u6210\u51e0\u4e2a\u5927\u5c0f\u4e3a 4 \u7684\u7ec4\u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= hand.length <= 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= hand[i] <= 10^9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= groupSize <= hand.length"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u6b64\u9898\u76ee\u4e0e 1296 \u91cd\u590d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/divide-array-in-sets-of-k-consecutive-numbers/"},"https://leetcode-cn.com/problems/divide-array-in-sets-of-k-consecutive-numbers/")),(0,r.kt)("h2",{id:"2\u89e3\u6cd51"},"2\u3001\u89e3\u6cd51"),(0,r.kt)("p",null,"\u5148\u5bf9\u539f\u6570\u7ec4\u5347\u5e8f\u6392\u5e8f\uff0c\u7136\u540e\u8fdb\u884c\u53cc\u6307\u9488\u5d4c\u5957\u904d\u5386\uff0c\u5916\u5c42\u904d\u5386\u627e\u987a\u5b50\u8d77\u70b9\uff0c\u5185\u5c42\u904d\u5386\u627e\u987a\u5b50\u540e\u7eed\u5143\u7d20\uff0c\u88ab\u627e\u5230\u7684\u5143\u7d20\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"\u5373\u5bfb\u627e\u5176\u4ed6\u987a\u5b50\u5143\u7d20\u65f6\u76f4\u63a5\u7565\u8fc7\uff0c\u82e5\u65e0\u6cd5\u627e\u5230\u5b8c\u6574\u987a\u5b50\u5219\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var isNStraightHand = function (hand, groupSize) {\n    hand.sort((a, b) => a - b);\n    for (let i = 0; i < hand.length; i++) {\n        if (hand[i] < 0) continue;\n        let count = 0;\n        for (let j = i + 1; j < hand.length && count !== groupSize - 1; j++) {\n            if (hand[j] - hand[i] === count + 1) count++, hand[j] = -1;\n        }\n        if (count !== groupSize - 1) return false;\n    }\n    return true;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u903b\u8f91\u7b80\u8981\u8bf4\u660e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5916\u5c42\u904d\u5386\uff1a\u4ece\u4e0b\u6807",(0,r.kt)("inlineCode",{parentName:"li"},"i=0"),"\u5f00\u59cb\u904d\u5386\u6570\u7ec4\u5185\u7684\u5143\u7d20\uff0c\u5982\u679c\u5f53\u524d\u5143\u7d20\u4e0d\u4e3a\u8d1f\u6570\u5219\u4f5c\u4e3a\u987a\u5b50\u8d77\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5c42\u904d\u5386\uff1a\u4ece\u4e0b\u6807",(0,r.kt)("inlineCode",{parentName:"li"},"j=i+1"),"(\u5373\u987a\u5b50\u8d77\u70b9\u7684\u4e0b\u4e00\u4e2a\u5143\u7d20)\u5f00\u59cb\u904d\u5386\u6570\u7ec4\u5185\u7684\u5143\u7d20\uff0c\u5bfb\u627e\u987a\u5b50\u540e\u7eed\u5143\u7d20",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5df2\u627e\u5230\u7684\u5143\u7d20\u8ba1\u6570\uff0c\u8ba1\u6570\u53d8\u91cf\u8bb0\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"count")),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u5143\u7d20\u4e0e\u987a\u5b50\u8d77\u70b9\u7684\u5dee\u503c\u7b49\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"count+1"),"\uff0c\u5219\u8bf4\u660e\u8be5\u5143\u7d20\u662f\u987a\u5b50\u7684\u540e\u7eed\u5143\u7d20"))),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5c42\u904d\u5386\u7ed3\u675f\uff0c\u82e5\u627e\u5230\u7684\u5143\u7d20\u6570\u91cf\u4e0d\u7b49\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"groupSize - 1"),"\uff0c\u8bf4\u660e\u987a\u5b50\u4e0d\u5b58\u5728\u5e94\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.png",src:n(8805).Z,width:"1728",height:"486"})),(0,r.kt)("h2",{id:"5\u89e3\u6cd52"},"5\u3001\u89e3\u6cd52"),(0,r.kt)("p",null,"\u5148\u5bf9\u539f\u6570\u7ec4\u5347\u5e8f\u6392\u5e8f\uff0c\u7136\u540e\u5bf9\u6570\u7ec4\u5185\u6570\u5b57\u8fdb\u884c\u54c8\u5e0c\u8868\u8ba1\u6570\uff08\u6570\u5b57\u4f5c",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u6570\u91cf\u4f5c",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\uff09\uff0c\u7136\u540e\u904d\u5386\u6570\u7ec4\u6240\u6709\u6570\u5b57\uff0c\u4ee5\u6570\u91cf\u5927\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u7684\u6570\u5b57\u4f5c\u4e3a\u987a\u5b50\u8d77\u70b9\uff0c\u5bfb\u627e\u987a\u5b50\u540e\u7eed\u5143\u7d20\uff0c\u82e5\u65e0\u6cd5\u627e\u5230\u5b8c\u6574\u987a\u5b50\u5219\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var isNStraightHand = function (hand, groupSize) {\n    hand.sort((a, b) => a - b);\n    const map = hand.reduce((acc, n) => acc.set(n, (acc.get(n) || 0) + 1), new Map());\n    for (const n of hand) {\n        if (!map.get(n)) continue;\n        for (let i = 0; i < groupSize; i++) {\n            if (!map.get(n + i)) return false;\n            else map.set(n + i, map.get(n + i) - 1);\n        }\n    }\n    return true;\n};\n")),(0,r.kt)("h2",{id:"7\u6267\u884c\u7ed3\u679c"},"7\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 100 ms  \u5185\u5b58\u6d88\u8017: 47.1 MB")))}m.isMDXComponent=!0},8805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1640832014-mNCDmj-1-bf442c16511861aac0aaeac03d4acd43.png"}}]);