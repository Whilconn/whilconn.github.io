"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[78392],{3905:(a,t,e)=>{e.d(t,{Zo:()=>o,kt:()=>N});var n=e(67294);function s(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function r(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function m(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){s(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t){if(null==a)return{};var e,n,s=function(a,t){if(null==a)return{};var e,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||(s[e]=a[e]);return s}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(s[e]=a[e])}return s}var p=n.createContext({}),i=function(a){var t=n.useContext(p),e=t;return a&&(e="function"==typeof a?a(t):m(m({},t),a)),e},o=function(a){var t=i(a.components);return n.createElement(p.Provider,{value:t},a.children)},k="mdxType",c={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(a,t){var e=a.components,s=a.mdxType,r=a.originalType,p=a.parentName,o=l(a,["components","mdxType","originalType","parentName"]),k=i(e),u=s,N=k["".concat(p,".").concat(u)]||k[u]||c[u]||r;return e?n.createElement(N,m(m({ref:t},o),{},{components:e})):n.createElement(N,m({ref:t},o))}));function N(a,t){var e=arguments,s=t&&t.mdxType;if("string"==typeof a||s){var r=e.length,m=new Array(r);m[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=a,l[k]="string"==typeof a?a:s,m[1]=l;for(var i=2;i<r;i++)m[i]=e[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3409:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=e(87462),s=(e(67294),e(3905));const r={authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635"],date:new Date("2022-12-08T00:00:00.000Z")},m=void 0,l={permalink:"/algorithm/2022/12/08/1277.\u7edf\u8ba1\u5168\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u5b50\u77e9\u9635",source:"@site/algorithm/2022/12/08/1277.\u7edf\u8ba1\u5168\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u5b50\u77e9\u9635.md",title:"1277.\u7edf\u8ba1\u5168\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u5b50\u77e9\u9635",description:"1\u3001\u9898\u5e72",date:"2022-12-08T00:00:00.000Z",formattedDate:"2022\u5e7412\u67088\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:2.54,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635"],date:"2022-12-08T00:00:00.000Z"},prevItem:{title:"1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",permalink:"/algorithm/2022/12/12/1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c"},nextItem:{title:"1775.\u901a\u8fc7\u6700\u5c11\u64cd\u4f5c\u6b21\u6570\u4f7f\u6570\u7ec4\u7684\u548c\u76f8\u7b49",permalink:"/algorithm/2022/12/07/1775.\u901a\u8fc7\u6700\u5c11\u64cd\u4f5c\u6b21\u6570\u4f7f\u6570\u7ec4\u7684\u548c\u76f8\u7b49"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u65b9\u6cd51",id:"2\u65b9\u6cd51",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u65b9\u6cd52",id:"6\u65b9\u6cd52",level:2},{value:"7\u3001Code",id:"7code",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function k(a){let{components:t,...r}=a;return(0,s.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,s.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\xa0",(0,s.kt)("code",null,"m * n"),"\xa0\u7684\u77e9\u9635\uff0c\u77e9\u9635\u4e2d\u7684\u5143\u7d20\u4e0d\u662f ",(0,s.kt)("code",null,"0")," \u5c31\u662f ",(0,s.kt)("code",null,"1"),"\uff0c\u8bf7\u4f60\u7edf\u8ba1\u5e76\u8fd4\u56de\u5176\u4e2d\u5b8c\u5168\u7531 ",(0,s.kt)("code",null,"1")," \u7ec4\u6210\u7684 ",(0,s.kt)("strong",null,"\u6b63\u65b9\u5f62")," \u5b50\u77e9\u9635\u7684\u4e2a\u6570\u3002"),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),"matrix =",(0,s.kt)("br",null),"[",(0,s.kt)("br",null),"\xa0 [0,1,1,1],",(0,s.kt)("br",null),"\xa0 [1,1,1,1],",(0,s.kt)("br",null),"\xa0 [0,1,1,1]",(0,s.kt)("br",null),"]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"15",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u89e3\u91ca\uff1a")," ",(0,s.kt)("br",null),"\u8fb9\u957f\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u6709 ",(0,s.kt)("strong",null,"10")," \u4e2a\u3002",(0,s.kt)("br",null),"\u8fb9\u957f\u4e3a 2 \u7684\u6b63\u65b9\u5f62\u6709 ",(0,s.kt)("strong",null,"4")," \u4e2a\u3002",(0,s.kt)("br",null),"\u8fb9\u957f\u4e3a 3 \u7684\u6b63\u65b9\u5f62\u6709 ",(0,s.kt)("strong",null,"1")," \u4e2a\u3002",(0,s.kt)("br",null),"\u6b63\u65b9\u5f62\u7684\u603b\u6570 = 10 + 4 + 1 = ",(0,s.kt)("strong",null,"15"),".",(0,s.kt)("br",null)),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),"matrix = ",(0,s.kt)("br",null),"[",(0,s.kt)("br",null),"  [1,0,1],",(0,s.kt)("br",null),"  [1,1,0],",(0,s.kt)("br",null),"  [1,1,0]",(0,s.kt)("br",null),"]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"7",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u89e3\u91ca\uff1a"),(0,s.kt)("br",null),"\u8fb9\u957f\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u6709 ",(0,s.kt)("strong",null,"6")," \u4e2a\u3002 ",(0,s.kt)("br",null),"\u8fb9\u957f\u4e3a 2 \u7684\u6b63\u65b9\u5f62\u6709 ",(0,s.kt)("strong",null,"1")," \u4e2a\u3002",(0,s.kt)("br",null),"\u6b63\u65b9\u5f62\u7684\u603b\u6570 = 6 + 1 = ",(0,s.kt)("strong",null,"7"),".",(0,s.kt)("br",null)),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("code",null,"1 <= arr.length\xa0<= 300")),(0,s.kt)("li",null,(0,s.kt)("code",null,"1 <= arr[0].length\xa0<= 300")),(0,s.kt)("li",null,(0,s.kt)("code",null,"0 <= arr[i][j] <= 1"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Problem: ",(0,s.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/count-square-submatrices-with-all-ones/description/"},"1277. \u7edf\u8ba1\u5168\u4e3a 1 \u7684\u6b63\u65b9\u5f62\u5b50\u77e9\u9635"))),(0,s.kt)("h2",{id:"2\u65b9\u6cd51"},"2\u3001\u65b9\u6cd51"),(0,s.kt)("p",null,"\u524d\u7f00\u548c+\u66b4\u529b\u679a\u4e3e"),(0,s.kt)("h2",{id:"3code"},"3\u3001Code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function countSquares(matrix: number[][]): number {\n    const preSum = matrix.map(m => m.map(() => 0));\n\n    for (let i = 0; i < matrix.length; i++) {\n        let sumRow = 0;\n        for (let j = 0; j < matrix[0].length; j++) {\n            sumRow += matrix[i][j];\n            preSum[i][j] = sumRow + (i ? preSum[i - 1][j] : 0);\n        }\n    }\n\n    let ans = 0;\n\n    for (let i = 0; i < matrix.length; i++) {\n        for (let j = 0; j < matrix[0].length; j++) {\n            for (let k = 1; k <= j + 1; k++) {\n                const sr = i - k > -1 ? preSum[i - k][j] : 0;\n                const sc = preSum[i][j - k] || 0;\n                const src = i - k > -1 && j - k > -1 ? preSum[i - k][j - k] : 0;\n                const s = preSum[i][j] - sr - sc + src;\n                if (s !== k ** 2) break;\n                ans++;\n            }\n        }\n    }\n\n    return ans;\n};\n")),(0,s.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"3")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image.png",src:e(15169).Z,width:"1424",height:"396"})),(0,s.kt)("h2",{id:"6\u65b9\u6cd52"},"6\u3001\u65b9\u6cd52"),(0,s.kt)("p",null,"\u52a8\u6001\u89c4\u5212"),(0,s.kt)("h2",{id:"7code"},"7\u3001Code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function countSquares(matrix: number[][]): number {\n    let ans = 0;\n\n    for (let i = 0; i < matrix.length; i++) {\n        for (let j = 0; j < matrix[0].length; j++) {\n            if (i && j && matrix[i][j]) matrix[i][j] = Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) + 1;\n            ans += matrix[i][j];\n        }\n    }\n\n    return ans;\n};\n")),(0,s.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image.png",src:e(61568).Z,width:"1422",height:"398"})))}k.isMDXComponent=!0},15169:(a,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/62b45d21c5283a5f1babe6d007e7e7d6-32dacb249ea50b533f335102e350b7b5.png"},61568:(a,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/e86898b3ecf2a934e20760a1e15a2d67-da1f5a17bf4778a4cde5e31322af24e1.png"}}]);