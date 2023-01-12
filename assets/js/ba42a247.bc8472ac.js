"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[23197],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=a,g=c["".concat(p,".").concat(s)]||c[s]||k[s]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(15882),a=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u77e9\u9635"],date:"2022/2/15"},i=void 0,o={permalink:"/algorithm/1380.\u77e9\u9635\u4e2d\u7684\u5e78\u8fd0\u6570",source:"@site/algorithm/1380.\u77e9\u9635\u4e2d\u7684\u5e78\u8fd0\u6570.md",title:"1380.\u77e9\u9635\u4e2d\u7684\u5e78\u8fd0\u6570",description:"1\u3001\u9898\u5e72",date:"2022-02-15T00:00:00.000Z",formattedDate:"2022\u5e742\u670815\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:2.475,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u77e9\u9635"],date:"2022/2/15"},prevItem:{title:"1719.\u91cd\u6784\u4e00\u68f5\u6811\u7684\u65b9\u6848\u6570",permalink:"/algorithm/1719.\u91cd\u6784\u4e00\u68f5\u6811\u7684\u65b9\u6848\u6570"},nextItem:{title:"926.\u5c06\u5b57\u7b26\u4e32\u7ffb\u8f6c\u5230\u5355\u8c03\u9012\u589e",permalink:"/algorithm/926.\u5c06\u5b57\u7b26\u4e32\u7ffb\u8f6c\u5230\u5355\u8c03\u9012\u589e"}},p={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"m * n")," \u7684\u77e9\u9635\uff0c\u77e9\u9635\u4e2d\u7684\u6570\u5b57 ",(0,a.kt)("strong",{parentName:"p"},"\u5404\u4e0d\u76f8\u540c")," \u3002\u8bf7\u4f60\u6309 ",(0,a.kt)("strong",{parentName:"p"},"\u4efb\u610f")," \u987a\u5e8f\u8fd4\u56de\u77e9\u9635\u4e2d\u7684\u6240\u6709\u5e78\u8fd0\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5e78\u8fd0\u6570")," \u662f\u6307\u77e9\u9635\u4e2d\u6ee1\u8db3\u540c\u65f6\u4e0b\u5217\u4e24\u4e2a\u6761\u4ef6\u7684\u5143\u7d20\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u540c\u4e00\u884c\u7684\u6240\u6709\u5143\u7d20\u4e2d\u6700\u5c0f"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u540c\u4e00\u5217\u7684\u6240\u6709\u5143\u7d20\u4e2d\u6700\u5927")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," matrix = ","[","[","3,7,8","]",",","[","9,11,13","]",",","[","15,16,17","]","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","15","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," 15 \u662f\u552f\u4e00\u7684\u5e78\u8fd0\u6570\uff0c\u56e0\u4e3a\u5b83\u662f\u5176\u6240\u5728\u884c\u4e2d\u7684\u6700\u5c0f\u503c\uff0c\u4e5f\u662f\u6240\u5728\u5217\u4e2d\u7684\u6700\u5927\u503c\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," matrix = ","[","[","1,10,4,2","]",",","[","9,3,8,7","]",",","[","15,16,17,12","]","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","12","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," 12 \u662f\u552f\u4e00\u7684\u5e78\u8fd0\u6570\uff0c\u56e0\u4e3a\u5b83\u662f\u5176\u6240\u5728\u884c\u4e2d\u7684\u6700\u5c0f\u503c\uff0c\u4e5f\u662f\u6240\u5728\u5217\u4e2d\u7684\u6700\u5927\u503c\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," matrix = ","[","[","7,8","]",",","[","1,2","]","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","7","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," 7\u662f\u552f\u4e00\u7684\u5e78\u8fd0\u6570\u5b57\uff0c\u56e0\u4e3a\u5b83\u662f\u884c\u4e2d\u7684\u6700\u5c0f\u503c\uff0c\u5217\u4e2d\u7684\u6700\u5927\u503c\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m == mat.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == mat[i].length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n, m <= 50")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <=\xa0matrix[i][j]\xa0<= 10^5")),(0,a.kt)("li",{parentName:"ul"},"\u77e9\u9635\u4e2d\u7684\u6240\u6709\u5143\u7d20\u90fd\u662f\u4e0d\u540c\u7684")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6700\u8fd1JS\u7684\u8fd0\u884c\u73af\u5883\u662f\u4e0d\u662f\u8c03\u6574\u4e86\uff0c\u6267\u884c\u7ed3\u679c\u7684\u5185\u5b58\u6d88\u8017\u666e\u904d\u6bd4\u5e74\u524d\u9ad8\u4e86\u4e00\u5927\u622a\uff0c\u660e\u660e\u7a7a\u95f4\u590d\u6742\u5ea6\u662f $O(1)$ \u7ed3\u679c\u4e00\u63d0\u4ea4\u53d1\u73b0\u51fb\u8d257%\uff0c\u8fd9\u5230\u5e95\u662f\u4e3a\u4ec0\u4e48\u554a\u5582\uff1f")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1644894333-InbKth-wecom-temp-7e880fd1f913b7acf9e1efa1143efdd8.gif",alt:"wecom-temp-7e880fd1f913b7acf9e1efa1143efdd8.gif"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u53cc\u5c42\u904d\u5386\uff0c\u5916\u5c42\u6309\u884c\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u9010\u884c\u904d\u5386\uff0c\u5185\u5c42\u5148\u904d\u5386\u627e\u51fa\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u884c\u6700\u5c0f\u5217\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"minCol"),"\uff1b\u518d\u904d\u5386\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"minCol")," \u5217\u6240\u6709\u5143\u7d20\uff0c\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"matrix[i][minCol]")," \u662f\u5426\u8be5\u5217\u6700\u5927\u503c\uff0c\u82e5\u662f\u5219\u52a0\u5165\u7ed3\u679c\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"res")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var luckyNumbers = function (matrix) {\n    const res = [];\n    for (let i = 0; i < matrix.length; i++) {\n        const minCol = matrix[i].reduce((a, c, j) => c < matrix[i][a] ? j : a, 0);\n        for (let r = 0; r < matrix.length; r++) {\n            if (matrix[r][minCol] > matrix[i][minCol]) break;\n            if (r === matrix.length - 1) res.push(matrix[i][minCol]);\n        }\n    }\n    return res;\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n^2)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1644892480-TZvYFU-image.png",alt:"image.png"})))}c.isMDXComponent=!0}}]);