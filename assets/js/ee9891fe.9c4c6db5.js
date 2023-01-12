"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[65563],{49613:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,d=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return n?r.createElement(d,i(i({ref:t},k),{},{components:n})):r.createElement(d,i({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(15882),a=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212"],date:"2022/11/9"},i=void 0,o={permalink:"/algorithm/764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7",source:"@site/algorithm/764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7.md",title:"764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7",description:"1\u3001\u9898\u5e72",date:"2022-11-09T00:00:00.000Z",formattedDate:"2022\u5e7411\u67089\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:2.725,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212"],date:"2022/11/9"},prevItem:{title:"864.\u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84",permalink:"/algorithm/864.\u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84"},nextItem:{title:"1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/algorithm/1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee"}},p={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],k={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"n x n")," \u7684\u77e9\u9635\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"grid"),"\xa0\u4e2d\uff0c\u9664\u4e86\u5728\u6570\u7ec4\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"mines"),"\xa0\u4e2d\u7ed9\u51fa\u7684\u5143\u7d20\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u5176\u4ed6\u6bcf\u4e2a\u5143\u7d20\u90fd\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"mines[i] = [xi, yi]"),"\u8868\u793a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"grid[xi][yi] == 0")),(0,a.kt)("p",null,"\u8fd4\u56de \xa0",(0,a.kt)("inlineCode",{parentName:"p"},"grid")," ",(0,a.kt)("em",{parentName:"p"},"\u4e2d\u5305\u542b\xa0",(0,a.kt)("inlineCode",{parentName:"em"},"1"),"\xa0\u7684\u6700\u5927\u7684 ",(0,a.kt)("strong",{parentName:"em"},"\u8f74\u5bf9\u9f50")," \u52a0\u53f7\u6807\u5fd7\u7684\u9636\u6570")," \u3002\u5982\u679c\u672a\u627e\u5230\u52a0\u53f7\u6807\u5fd7\uff0c\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"\xa0\u9636\u7531\xa0",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"1")),"\xa0\u7ec4\u6210\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u201c\u8f74\u5bf9\u79f0\u201d\u52a0\u53f7\u6807\u5fd7")," \u5177\u6709\u4e2d\u5fc3\u7f51\u683c\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"grid[r][c] == 1"),"\xa0\uff0c\u4ee5\u53ca4\u4e2a\u4ece\u4e2d\u5fc3\u5411\u4e0a\u3001\u5411\u4e0b\u3001\u5411\u5de6\u3001\u5411\u53f3\u5ef6\u4f38\uff0c\u957f\u5ea6\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"k-1"),"\uff0c\u7531\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\xa0\u7ec4\u6210\u7684\u81c2\u3002\u6ce8\u610f\uff0c\u53ea\u6709\u52a0\u53f7\u6807\u5fd7\u7684\u6240\u6709\u7f51\u683c\u8981\u6c42\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \uff0c\u522b\u7684\u7f51\u683c\u53ef\u80fd\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u4e5f\u53ef\u80fd\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/06/13/plus1-grid.jpg",alt:null}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  n = 5, mines = ","[","[","4, 2","]","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),"  \u5728\u4e0a\u9762\u7684\u7f51\u683c\u4e2d\uff0c\u6700\u5927\u52a0\u53f7\u6807\u5fd7\u7684\u9636\u53ea\u80fd\u662f2\u3002\u4e00\u4e2a\u6807\u5fd7\u5df2\u5728\u56fe\u4e2d\u6807\u51fa\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/06/13/plus2-grid.jpg",alt:null}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  n = 1, mines = ","[","[","0, 0","]","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  0",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),"  \u6ca1\u6709\u52a0\u53f7\u6807\u5fd7\uff0c\u8fd4\u56de 0 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 500")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= mines.length <= 5000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= xi, yi\xa0< n")),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u5bf9\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"(xi, yi)"),"\xa0\u90fd ",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u91cd\u590d"),"\u200b\u200b\u200b\u200b\u200b\u200b\u200b")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Problem: ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/largest-plus-sign/description/"},"764. \u6700\u5927\u52a0\u53f7\u6807\u5fd7"))),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66b4\u529b\uff1a\u904d\u5386\u77e9\u9635 ",(0,a.kt)("inlineCode",{parentName:"li"},"grid"),"\uff0c\u628a\u6bcf\u4e2a\u7f51\u683c\u5f53\u6210\u4e2d\u5fc3\uff0c\u8ba1\u7b97\u52a0\u53f7\u6807\u5fd7\u7684\u6700\u5927\u9636\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"k")," "),(0,a.kt)("li",{parentName:"ul"},"\u54c8\u5e0c\uff1a\u628a ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u7f51\u683c\u7684\u5750\u6807\u8f6c\u6362\u6210\u54c8\u5e0c\u8868\u964d\u4f4e\u67e5\u627e\u65f6\u95f4\u590d\u6742\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u526a\u679d\uff1a\u904d\u5386\u8fc7\u7a0b\u4e2d\uff0c\u901a\u8fc7\u5f53\u524d\u6c42\u5f97\u7684\u6700\u5927\u9636\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"k")," \u8fdb\u4e00\u6b65\u7f29\u5c0f\u904d\u5386\u8303\u56f4")),(0,a.kt)("h2",{id:"3code"},"3\u3001Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function orderOfLargestPlusSign(n: number, mines: number[][]): number {\n    const M = 10007, hash = (x: number, y: number) => x * M + y;\n    const set = new Set(mines.map(([x, y]) => hash(x, y)));\n    \n    let k = 0;\n    for (let i = 0; i < n - k; i++) {\n        for (let j = k; i >= k && j < n - k; j++) {\n            for (let l = 0; l < n / 2; l++) {\n                if (i < l || j < l || i + l >= n || j + l >= n) break;\n                if (set.has(hash(i, j + l)) || set.has(hash(i, j - l)) || set.has(hash(i + l, j)) || set.has(hash(i - l, j))) break;\n                k = Math.max(k, l + 1);\n            }\n        }\n    }\n\n    return k;\n}\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n^3)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(m)$\uff0c$m=mines.length$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1667966262-FHmFxq-image.png",alt:"image.png"})))}u.isMDXComponent=!0}}]);