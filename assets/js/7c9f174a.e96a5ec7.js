"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[45544],{49613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),k=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=k(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=k(t),d=r,s=u["".concat(o,".").concat(d)]||u[d]||c[d]||l;return t?a.createElement(s,i(i({ref:n},m),{},{components:t})):a.createElement(s,i({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var k=2;k<l;k++)i[k]=t[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=t(15882),r=(t(59496),t(49613));const l={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u5b57\u7b26\u4e32"],date:"2023/1/26"},i=void 0,p={permalink:"/algorithm/1663.\u5177\u6709\u7ed9\u5b9a\u6570\u503c\u7684\u6700\u5c0f\u5b57\u7b26\u4e32",source:"@site/algorithm/1663.\u5177\u6709\u7ed9\u5b9a\u6570\u503c\u7684\u6700\u5c0f\u5b57\u7b26\u4e32.md",title:"1663.\u5177\u6709\u7ed9\u5b9a\u6570\u503c\u7684\u6700\u5c0f\u5b57\u7b26\u4e32",description:"1\u3001\u9898\u5e72",date:"2023-01-26T00:00:00.000Z",formattedDate:"2023\u5e741\u670826\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.455,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u5b57\u7b26\u4e32"],date:"2023/1/26"},nextItem:{title:"1817.\u67e5\u627e\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570",permalink:"/algorithm/1817.\u67e5\u627e\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570"}},o={authorsImageUrls:[void 0]},k=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],m={toc:k};function u(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c0f\u5199\u5b57\u7b26")," \u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u6570\u503c")," \u662f\u5b83\u5728\u5b57\u6bcd\u8868\u4e2d\u7684\u4f4d\u7f6e\uff08\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u5f00\u59cb\uff09\uff0c\u56e0\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u6570\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u7684\u6570\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," \uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"c")," \u7684\u6570\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," \uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"),(0,r.kt)("p",null,"\u5b57\u7b26\u4e32\u7531\u82e5\u5e72\u5c0f\u5199\u5b57\u7b26\u7ec4\u6210\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32\u7684\u6570\u503c")," \u4e3a\u5404\u5b57\u7b26\u7684\u6570\u503c\u4e4b\u548c\u3002\u4f8b\u5982\uff0c\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},'"abe"')," \u7684\u6570\u503c\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2 + 5 = 8")," \u3002"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u3002\u8fd4\u56de ",(0,r.kt)("strong",{parentName:"p"},"\u957f\u5ea6")," \u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u4e14 ",(0,r.kt)("strong",{parentName:"p"},"\u6570\u503c")," \u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u5b57\u5178\u5e8f\u6700\u5c0f")," \u7684\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u5728\u5b57\u5178\u6392\u5e8f\u4e2d\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \u4e4b\u524d\uff0c\u5c31\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \u5b57\u5178\u5e8f\u6bd4 ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \u5c0f\uff0c\u6709\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," \u7684\u4e00\u4e2a\u524d\u7f00\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"i")," \u662f\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"x[i] != y[i]")," \u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u4e14 ",(0,r.kt)("inlineCode",{parentName:"li"},"x[i]"),"\xa0\u5728\u5b57\u6bcd\u8868\u4e2d\u7684\u4f4d\u7f6e\u6bd4\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"y[i]"),"\xa0\u9760\u524d\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 3, k = 27",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "aay"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u5b57\u7b26\u4e32\u7684\u6570\u503c\u4e3a 1 + 1 + 25 = 27\uff0c\u5b83\u662f\u6570\u503c\u6ee1\u8db3\u8981\u6c42\u4e14\u957f\u5ea6\u7b49\u4e8e 3 \u5b57\u5178\u5e8f\u6700\u5c0f\u7684\u5b57\u7b26\u4e32\u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 5, k = 73",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "aaszz"',(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n <= k <= 26 * n"))),(0,r.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,r.kt)("p",null,"\u6570\u7ec4+\u8d2a\u5fc3\u6a21\u62df\uff0c\u4f7f\u7528\u957f\u5ea6\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u7684\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"codes")," \u5b58\u50a8\u6bcf\u4e2a\u5b57\u7b26\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u503c"),"\uff0c\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"codes")," \u4e4b\u548c\u4ee3\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5b57\u7b26\u4e32\u7684\u6570\u503c"),"\uff0c\u521d\u59cb\u5316\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"codes")," \u6240\u6709\u5143\u7d20\u90fd\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff08\u4ee3\u8868\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\uff09\uff0c\u4e4b\u540e\u4ece\u6570\u7ec4\u5c3e\u90e8\u5f00\u59cb\u5c06\u5143\u7d20\u66ff\u6362\u6210\u5c3d\u53ef\u80fd\u5927\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u503c")," \u76f4\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u4e3a 0"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function getSmallestString(n: number, k: number): string {\n    k = k - n;\n    const codes = new Array(n).fill(1);\n\n    for (let i = codes.length - 1; i > -1 && k > 0; i--) {\n        codes[i] = Math.min(k + 1, 26);\n        k = k - codes[i] + 1;\n    }\n\n    return codes.map(c => String.fromCharCode(96 + c)).join('');\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:t(11387).Z,width:"1366",height:"394"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u867d\u7136\u65f6\u95f4\u590d\u6742\u5ea6\u548c\u7a7a\u95f4\u590d\u6742\u5ea6\u5df2\u7ecf\u5f88\u4e0d\u9519\uff0c\u4f46\u662f\u7531\u4e8e\u6570\u7ec4\u5b58\u50a8\u6570\u636e\uff0c\u4ee5\u53ca\u5b57\u7b26\u4e32\u64cd\u4f5c\u8fc7\u591a\u5bfc\u81f4\u6d88\u8017\u7684\u65f6\u95f4\u548c\u5185\u5b58\u504f\u9ad8\u3002\u4e0b\u9762\u5bf9\u6b64\u7a0d\u52a0\u4f18\u5316\u3002")),(0,r.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,r.kt)("p",null,"\u4ece\u4e0a\u8ff0\u6a21\u62df\u8fc7\u7a0b\u53ef\u4ee5\u63a8\u65ad\u51fa\uff0c\u6240\u6c42\u6700\u5c0f\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"aaaaamzzzzz"),"\uff0c\u5373 \u82e5\u5e72\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," + \u4e00\u4e2a\u4e2d\u95f4\u5b57\u7b26 + \u82e5\u5e72\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"z"),"\u3002\u56e0\u6b64\u53ea\u8981\u6c42\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u4e2a\u6570\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"z")," \u7684\u4e2a\u6570\u3001\u4ee5\u53ca\u4e2d\u95f4\u5b57\u7b26\uff0c\u5c31\u80fd\u62fc\u63a5\u51fa\u6240\u6c42\u6700\u5c0f\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function getSmallestString(n: number, k: number): string {\n    let na = 0, nz = 0;\n    for (k -= n; k >= 25; k -= 25)  nz++;\n    na = n - nz - (k > 0 ? 1 : 0);\n\n    const m = k > 0 ? String.fromCharCode(97 + k) : '';\n\n    return 'a'.repeat(na) + m + 'z'.repeat(nz);\n};\n")),(0,r.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,r.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:t(24214).Z,width:"1372",height:"388"})))}u.isMDXComponent=!0},24214:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/1674740338-uPCmZr-image-b87f7e0003ced41064ad2914b7b86b87.png"},11387:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/1674740375-WzFnFl-image-9710f9247ff0144be022334c69ba977c.png"}}]);