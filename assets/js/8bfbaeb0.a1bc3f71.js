"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[44222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},87515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u52a8\u6001\u89c4\u5212"],date:"2022/11/13"},i=void 0,o={permalink:"/algorithm/790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",source:"@site/algorithm/790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa.md",title:"790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",description:"1\u3001\u9898\u5e72",date:"2022-11-13T00:00:00.000Z",formattedDate:"2022\u5e7411\u670813\u65e5",tags:[{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:1.88,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u52a8\u6001\u89c4\u5212"],date:"2022/11/13"},prevItem:{title:"775.\u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e",permalink:"/algorithm/775.\u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e"},nextItem:{title:"791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f",permalink:"/algorithm/791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f"}},p={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],u={toc:c};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u6709\u4e24\u79cd\u5f62\u72b6\u7684\u74f7\u7816\uff1a\u4e00\u79cd\u662f\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"2 x 1"),' \u7684\u591a\u7c73\u8bfa\u5f62\uff0c\u53e6\u4e00\u79cd\u662f\u5f62\u5982\xa0"L" \u7684\u6258\u7c73\u8bfa\u5f62\u3002\u4e24\u79cd\u5f62\u72b6\u90fd\u53ef\u4ee5\u65cb\u8f6c\u3002'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(56230).Z,width:"362",height:"195"})),(0,a.kt)("p",null,"\u7ed9\u5b9a\u6574\u6570 n \uff0c\u8fd4\u56de\u53ef\u4ee5\u5e73\u94fa\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"2 x n")," \u7684\u9762\u677f\u7684\u65b9\u6cd5\u7684\u6570\u91cf\u3002",(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u5bf9"),"\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"10^9\xa0+ 7"),"\xa0",(0,a.kt)("strong",{parentName:"p"},"\u53d6\u6a21"),"\xa0\u7684\u503c\u3002"),(0,a.kt)("p",null,"\u5e73\u94fa\u6307\u7684\u662f\u6bcf\u4e2a\u6b63\u65b9\u5f62\u90fd\u5fc5\u987b\u6709\u74f7\u7816\u8986\u76d6\u3002\u4e24\u4e2a\u5e73\u94fa\u4e0d\u540c\uff0c\u5f53\u4e14\u4ec5\u5f53\u9762\u677f\u4e0a\u6709\u56db\u4e2a\u65b9\u5411\u4e0a\u7684\u76f8\u90bb\u5355\u5143\u4e2d\u7684\u4e24\u4e2a\uff0c\u4f7f\u5f97\u6070\u597d\u6709\u4e00\u4e2a\u5e73\u94fa\u6709\u4e00\u4e2a\u74f7\u7816\u5360\u636e\u4e24\u4e2a\u6b63\u65b9\u5f62\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{src:n(70184).Z,width:"803",height:"363"}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  n = 3",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  5",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),"  \u4e94\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5982\u4e0a\u6240\u793a\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  n = 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  1",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Problem: ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/domino-and-tromino-tiling/description/"},"790. \u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa"))),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("p",null,"\u52a8\u6001\u89c4\u5212\uff0c\u633a\u96be\u60f3\u5230"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5217\u7684\u72b6\u6001\u67094\u4e2a\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u65e0/\u4e0a/\u4e0b/\u6ee1")),(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u8f6c\u79fb\u4e5f\u67094\u4e2a\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dp[i][0] = dp[i-1][3]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dp[i][1] = dp[i-1][0] + dp[i-1][2]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dp[i][2] = dp[i-1][0] + dp[i-1][1]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dp[i][3] = dp[i-1][0] + dp[i-1][1] + dp[i-1][2] + dp[i-1][3]"))))),(0,a.kt)("h2",{id:"3code"},"3\u3001Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function numTilings(n: number): number {\n    // \u65e0/\u4e0a/\u4e0b/\u6ee1\n    let M = 1e9 + 7, dp = [1, 0, 0, 1];\n\n    for (let i = 2; i <= n; i++) {\n        const d0 = dp[3];\n        const d1 = (dp[0] + dp[2]) % M;\n        const d2 = (dp[0] + dp[1]) % M;\n        const d3 = (dp[0] + dp[1] + dp[2] + dp[3]) % M;\n        dp = [d0, d1, d2, d3];\n    }\n\n    return dp[3];\n};\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a $O(n)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a $O(1)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(86915).Z,width:"889",height:"199"})))}d.isMDXComponent=!0},86915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1668317270-XZEDWj-image-88c9c6d9da5fc1e34ec55addcb36135f.png"},56230:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lc-domino-a1b3726fae665ab518eb6fa76b025778.jpg"},70184:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lc-domino1-b29cd4d80f2a78020c72bdf4329f67fe.jpg"}}]);