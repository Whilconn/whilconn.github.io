"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[15324],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=o(a),u=r,d=c["".concat(i,".").concat(u)]||c[u]||k[u]||p;return a?n.createElement(d,l(l({ref:t},s),{},{components:a})):n.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=u;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[c]="string"==typeof e?e:r,l[1]=m;for(var o=2;o<p;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const p={authors:["Whilconn"],tags:["\u52a8\u6001\u89c4\u5212"],date:"2022/11/13"},l=void 0,m={permalink:"/algorithm/790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",source:"@site/algorithm/790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa.md",title:"790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",description:"1\u3001\u9898\u5e72",date:"2022-11-13T00:00:00.000Z",formattedDate:"2022\u5e7411\u670813\u65e5",tags:[{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:1.88,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u52a8\u6001\u89c4\u5212"],date:"2022/11/13"},prevItem:{title:"775.\u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e",permalink:"/algorithm/775.\u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e"},nextItem:{title:"791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f",permalink:"/algorithm/791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f"}},i={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],s={toc:o};function c(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u5f62\u72b6\u7684\u74f7\u7816\uff1a\u4e00\u79cd\u662f\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"2 x 1"),' \u7684\u591a\u7c73\u8bfa\u5f62\uff0c\u53e6\u4e00\u79cd\u662f\u5f62\u5982\xa0"L" \u7684\u6258\u7c73\u8bfa\u5f62\u3002\u4e24\u79cd\u5f62\u72b6\u90fd\u53ef\u4ee5\u65cb\u8f6c\u3002'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(93191).Z,width:"362",height:"195"})),(0,r.kt)("p",null,"\u7ed9\u5b9a\u6574\u6570 n \uff0c\u8fd4\u56de\u53ef\u4ee5\u5e73\u94fa\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"2 x n")," \u7684\u9762\u677f\u7684\u65b9\u6cd5\u7684\u6570\u91cf\u3002",(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u5bf9"),"\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"10^9\xa0+ 7"),"\xa0",(0,r.kt)("strong",{parentName:"p"},"\u53d6\u6a21"),"\xa0\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u5e73\u94fa\u6307\u7684\u662f\u6bcf\u4e2a\u6b63\u65b9\u5f62\u90fd\u5fc5\u987b\u6709\u74f7\u7816\u8986\u76d6\u3002\u4e24\u4e2a\u5e73\u94fa\u4e0d\u540c\uff0c\u5f53\u4e14\u4ec5\u5f53\u9762\u677f\u4e0a\u6709\u56db\u4e2a\u65b9\u5411\u4e0a\u7684\u76f8\u90bb\u5355\u5143\u4e2d\u7684\u4e24\u4e2a\uff0c\u4f7f\u5f97\u6070\u597d\u6709\u4e00\u4e2a\u5e73\u94fa\u6709\u4e00\u4e2a\u74f7\u7816\u5360\u636e\u4e24\u4e2a\u6b63\u65b9\u5f62\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{src:a(8261).Z,width:"803",height:"363"}),(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  n = 3",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  5",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),"  \u4e94\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5982\u4e0a\u6240\u793a\u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  n = 1",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  1",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Problem: ",(0,r.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/domino-and-tromino-tiling/description/"},"790. \u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u52a8\u6001\u89c4\u5212\uff0c\u633a\u96be\u60f3\u5230"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5217\u7684\u72b6\u6001\u67094\u4e2a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"\u65e0/\u4e0a/\u4e0b/\u6ee1")),(0,r.kt)("li",{parentName:"ul"},"\u72b6\u6001\u8f6c\u79fb\u4e5f\u67094\u4e2a\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dp[i][0] = dp[i-1][3]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dp[i][1] = dp[i-1][0] + dp[i-1][2]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dp[i][2] = dp[i-1][0] + dp[i-1][1]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dp[i][3] = dp[i-1][0] + dp[i-1][1] + dp[i-1][2] + dp[i-1][3]"))))),(0,r.kt)("h2",{id:"3code"},"3\u3001Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function numTilings(n: number): number {\n    // \u65e0/\u4e0a/\u4e0b/\u6ee1\n    let M = 1e9 + 7, dp = [1, 0, 0, 1];\n\n    for (let i = 2; i <= n; i++) {\n        const d0 = dp[3];\n        const d1 = (dp[0] + dp[2]) % M;\n        const d2 = (dp[0] + dp[1]) % M;\n        const d3 = (dp[0] + dp[1] + dp[2] + dp[3]) % M;\n        dp = [d0, d1, d2, d3];\n    }\n\n    return dp[3];\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(9322).Z,width:"889",height:"199"})))}c.isMDXComponent=!0},9322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1668317270-XZEDWj-image-88c9c6d9da5fc1e34ec55addcb36135f.png"},93191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lc-domino-a1b3726fae665ab518eb6fa76b025778.jpg"},8261:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lc-domino1-b29cd4d80f2a78020c72bdf4329f67fe.jpg"}}]);