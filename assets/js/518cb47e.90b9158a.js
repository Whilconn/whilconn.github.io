"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[67634],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>d});var l=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,l,r=function(n,e){if(null==n)return{};var t,l,r={},u=Object.keys(n);for(l=0;l<u.length;l++)t=u[l],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(l=0;l<u.length;l++)t=u[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=l.createContext({}),c=function(n){var e=l.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},m=function(n){var e=c(n.components);return l.createElement(i.Provider,{value:e},n.children)},s="mdxType",k={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(n,e){var t=n.components,r=n.mdxType,u=n.originalType,i=n.parentName,m=o(n,["components","mdxType","originalType","parentName"]),s=c(t),p=r,d=s["".concat(i,".").concat(p)]||s[p]||k[p]||u;return t?l.createElement(d,a(a({ref:e},m),{},{components:t})):l.createElement(d,a({ref:e},m))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var u=t.length,a=new Array(u);a[0]=p;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=n,o[s]="string"==typeof n?n:r,a[1]=o;for(var c=2;c<u;c++)a[c]=t[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},55610:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var l=t(87462),r=(t(67294),t(3905));const u={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u4e8c\u5206\u67e5\u627e"],date:new Date("2023-01-04T00:00:00.000Z")},a=void 0,o={permalink:"/algorithm/2023/01/04/1802.\u6709\u754c\u6570\u7ec4\u4e2d\u6307\u5b9a\u4e0b\u6807\u5904\u7684\u6700\u5927\u503c",source:"@site/algorithm/2023/01/04/1802.\u6709\u754c\u6570\u7ec4\u4e2d\u6307\u5b9a\u4e0b\u6807\u5904\u7684\u6700\u5927\u503c.md",title:"1802.\u6709\u754c\u6570\u7ec4\u4e2d\u6307\u5b9a\u4e0b\u6807\u5904\u7684\u6700\u5927\u503c",description:"1\u3001\u9898\u5e72",date:"2023-01-04T00:00:00.000Z",formattedDate:"2023\u5e741\u67084\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u4e8c\u5206\u67e5\u627e",permalink:"/algorithm/tags/\u4e8c\u5206\u67e5\u627e"}],readingTime:2.4,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u4e8c\u5206\u67e5\u627e"],date:"2023-01-04T00:00:00.000Z"},prevItem:{title:"2180.\u7edf\u8ba1\u5404\u4f4d\u6570\u5b57\u4e4b\u548c\u4e3a\u5076\u6570\u7684\u6574\u6570\u4e2a\u6570",permalink:"/algorithm/2023/01/06/2180.\u7edf\u8ba1\u5404\u4f4d\u6570\u5b57\u4e4b\u548c\u4e3a\u5076\u6570\u7684\u6574\u6570\u4e2a\u6570"},nextItem:{title:"2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e",permalink:"/algorithm/2023/01/03/2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e"}},i={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],m={toc:c};function s(n){let{components:e,...u}=n;return(0,r.kt)("wrapper",(0,l.Z)({},m,u,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e09\u4e2a\u6b63\u6574\u6570 ",(0,r.kt)("code",null,"n"),"\u3001",(0,r.kt)("code",null,"index")," \u548c ",(0,r.kt)("code",null,"maxSum")," \u3002\u4f60\u9700\u8981\u6784\u9020\u4e00\u4e2a\u540c\u65f6\u6ee1\u8db3\u4e0b\u8ff0\u6240\u6709\u6761\u4ef6\u7684\u6570\u7ec4 ",(0,r.kt)("code",null,"nums"),"\uff08\u4e0b\u6807 ",(0,r.kt)("strong",null,"\u4ece 0 \u5f00\u59cb")," \u8ba1\u6570\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"nums.length == n")),(0,r.kt)("li",null,(0,r.kt)("code",null,"nums[i]")," \u662f ",(0,r.kt)("strong",null,"\u6b63\u6574\u6570")," \uff0c\u5176\u4e2d ",(0,r.kt)("code",null,"0 <= i < n")),(0,r.kt)("li",null,(0,r.kt)("code",null,"abs(nums[i] - nums[i+1]) <= 1")," \uff0c\u5176\u4e2d ",(0,r.kt)("code",null,"0 <= i < n-1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"nums")," \u4e2d\u6240\u6709\u5143\u7d20\u4e4b\u548c\u4e0d\u8d85\u8fc7 ",(0,r.kt)("code",null,"maxSum")),(0,r.kt)("li",null,(0,r.kt)("code",null,"nums[index]")," \u7684\u503c\u88ab ",(0,r.kt)("strong",null,"\u6700\u5927\u5316"))),(0,r.kt)("p",null,"\u8fd4\u56de\u4f60\u6240\u6784\u9020\u7684\u6570\u7ec4\u4e2d\u7684 ",(0,r.kt)("code",null,"nums[index]")," \u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a",(0,r.kt)("code",null,"abs(x)")," \u7b49\u4e8e ",(0,r.kt)("code",null,"x")," \u7684\u524d\u63d0\u662f ",(0,r.kt)("code",null,"x >= 0")," \uff1b\u5426\u5219\uff0c",(0,r.kt)("code",null,"abs(x)")," \u7b49\u4e8e ",(0,r.kt)("code",null,"-x")," \u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 4, index = 2,  maxSum = 6",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"2",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6570\u7ec4 [1,1,",(0,r.kt)("strong",null,"2"),",1] \u548c [1,2,",(0,r.kt)("strong",null,"2"),",1] \u6ee1\u8db3\u6240\u6709\u6761\u4ef6\u3002\u4e0d\u5b58\u5728\u5176\u4ed6\u5728\u6307\u5b9a\u4e0b\u6807\u5904\u5177\u6709\u66f4\u5927\u503c\u7684\u6709\u6548\u6570\u7ec4\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 6, index = 1,  maxSum = 10",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"3",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= n <= maxSum <= 10",(0,r.kt)("sup",null,"9"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"0 <= index < n"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u8ddf\u5b98\u89e3\u601d\u8def\u4e00\u8d2a\u5fc3+\u4e8c\u5206\u67e5\u627e\u76f8\u4f3c\uff0c\u4ece\u5747\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"Math.ceil(maxSum / n)")," \u5f00\u59cb\u679a\u4e3e\u6700\u5927\u5143\u7d20 ",(0,r.kt)("inlineCode",{parentName:"p"},"nums[index]"),"\uff0c\u7136\u540e\u6309\u7167\u8d2a\u5fc3\u601d\u8def\u8ba1\u7b97\u5de6\u53f3\u4e24\u8fb9\u5143\u7d20\uff0c\u5176\u5de6\u53f3\u4e24\u8fb9\u7684\u5143\u7d20\u662f\u516c\u5dee\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u7684\u9012\u51cf\u7684\u7b49\u5dee\u6570\u5217\uff0c\u9012\u51cf\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u4e4b\u540e\u5176\u4ed6\u5143\u7d20\u90fd\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u6700\u540e\u8fd4\u56de\u4f7f\u5f97\u6574\u4e2a\u6570\u7ec4\u4e4b\u548c\u5c0f\u4e8e\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSum")," \u7684\u6700\u5927 ",(0,r.kt)("inlineCode",{parentName:"p"},"nums[index]"),"\u3002"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function maxValue(n: number, index: number, maxSum: number): number {\n    function sumNums(ak: number, k: number) {\n        let sum = 0;\n        const a0 = ak - (k - 1);\n        \n        if (k > 0) {\n            if (a0 >= 1) sum += (a0 + ak) * k / 2;\n            else {\n                sum += (1 + ak) * ak / 2 + (k - ak);\n            }\n        }\n\n        return sum;\n    }\n\n    function search(max: number) {\n        let sum = -max;\n\n        // sum:0 ~ index\n        sum += sumNums(max, index + 1);\n\n        // sum:index ~ n-1\n        sum += sumNums(max, n - index);\n\n        return sum <= maxSum;\n    }\n\n    const avg = Math.ceil(maxSum / n);\n    for (let c = 0; c > -1; c++) {\n        const valid = search(avg + c);\n        if (!valid) return avg + c - 1;\n    }\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:t(86747).Z,width:"1448",height:"404"})))}s.isMDXComponent=!0},86747:(n,e,t)=>{t.d(e,{Z:()=>l});const l=t.p+"assets/images/78604d6323c7d3ac5be41925a6087a2d-a127249b8b5474ac78cd6650e7350f43.png"}}]);