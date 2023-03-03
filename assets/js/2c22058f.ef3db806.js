"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[62718],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),i=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},o=function(t){var e=i(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),c=i(n),k=r,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(d,s(s({ref:e},o),{},{components:n})):a.createElement(d,s({ref:e},o))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[c]="string"==typeof t?t:r,s[1]=m;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77119:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u77e9\u9635"],date:new Date("2023-03-01T00:00:00.000Z")},s=void 0,m={permalink:"/algorithm/2023/03/01/2373.\u77e9\u9635\u4e2d\u7684\u5c40\u90e8\u6700\u5927\u503c",source:"@site/algorithm/2023/03/01/2373.\u77e9\u9635\u4e2d\u7684\u5c40\u90e8\u6700\u5927\u503c.md",title:"2373.\u77e9\u9635\u4e2d\u7684\u5c40\u90e8\u6700\u5927\u503c",description:"1\u3001\u9898\u5e72",date:"2023-03-01T00:00:00.000Z",formattedDate:"2023\u5e743\u67081\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:2.15,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u77e9\u9635"],date:"2023-03-01T00:00:00.000Z"},prevItem:{title:"\u9762\u8bd5\u9898 05.02.\u4e8c\u8fdb\u5236\u6570\u8f6c\u5b57\u7b26\u4e32",permalink:"/algorithm/2023/03/02/\u9762\u8bd5\u9898 05.02.\u4e8c\u8fdb\u5236\u6570\u8f6c\u5b57\u7b26\u4e32"},nextItem:{title:"2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1",permalink:"/algorithm/2023/02/28/2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5927\u5c0f\u4e3a ",(0,r.kt)("code",null,"n x n")," \u7684\u6574\u6570\u77e9\u9635 ",(0,r.kt)("code",null,"grid")," \u3002"),(0,r.kt)("p",null,"\u751f\u6210\u4e00\u4e2a\u5927\u5c0f\u4e3a\xa0",(0,r.kt)("code",null,"(n - 2) x (n - 2)")," \u7684\u6574\u6570\u77e9\u9635\xa0 ",(0,r.kt)("code",null,"maxLocal")," \uff0c\u5e76\u6ee1\u8db3\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"maxLocal[i][j]")," \u7b49\u4e8e ",(0,r.kt)("code",null,"grid")," \u4e2d\u4ee5 ",(0,r.kt)("code",null,"i + 1")," \u884c\u548c ",(0,r.kt)("code",null,"j + 1")," \u5217\u4e3a\u4e2d\u5fc3\u7684 ",(0,r.kt)("code",null,"3 x 3")," \u77e9\u9635\u4e2d\u7684 ",(0,r.kt)("strong",null,"\u6700\u5927\u503c")," \u3002")),(0,r.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u4eec\u5e0c\u671b\u627e\u51fa ",(0,r.kt)("code",null,"grid")," \u4e2d\u6bcf\u4e2a\xa0",(0,r.kt)("code",null,"3 x 3")," \u77e9\u9635\u4e2d\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("p",null,"\u8fd4\u56de\u751f\u6210\u7684\u77e9\u9635\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2022/06/21/ex1.png"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[[9,9],[8,6]]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u539f\u77e9\u9635\u548c\u751f\u6210\u7684\u77e9\u9635\u5982\u4e0a\u56fe\u6240\u793a\u3002",(0,r.kt)("br",null),"\u6ce8\u610f\uff0c\u751f\u6210\u7684\u77e9\u9635\u4e2d\uff0c\u6bcf\u4e2a\u503c\u90fd\u5bf9\u5e94 grid \u4e2d\u4e00\u4e2a\u76f8\u63a5\u7684 3 x 3 \u77e9\u9635\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2022/07/02/ex2new2.png"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[[2,2,2],[2,2,2],[2,2,2]]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6ce8\u610f\uff0c2 \u5305\u542b\u5728 grid \u4e2d\u6bcf\u4e2a 3 x 3 \u7684\u77e9\u9635\u4e2d\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"n == grid.length == grid[i].length")),(0,r.kt)("li",null,(0,r.kt)("code",null,"3 <= n <= 100")),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= grid[i][j] <= 100"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u904d\u5386\u77e9\u9635 ",(0,r.kt)("inlineCode",{parentName:"p"},"[1,n-2]")," \u884c\u5217\u8303\u56f4\u5185\u7684\u5143\u7d20\uff0c\u8be5\u5143\u7d20\u6240\u5728\u4e5d\u5bab\u683c\u7684\u6700\u5927\u6574\u6570\u4f5c\u4e3a\u6700\u5927\u503c\u5b58\u5165\u7ed3\u679c\u77e9\u9635"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function largestLocal(grid: number[][]): number[][] {\n    const n = grid.length;\n    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, -1], [-1, -1], [-1, 1], [1, 1]];\n    const ans = Array.from({ length: n - 2 }, () => Array.from({ length: n - 2 }, () => 0));\n\n    for (let i = 1; i < n - 1; i++) {\n        for (let j = 1; j < n - 1; j++) {\n            ans[i - 1][j - 1] = grid[i][j];\n            \n            for (let k = 0; k < dirs.length; k++) {\n                ans[i - 1][j - 1] = Math.max(ans[i - 1][j - 1], grid[i + dirs[k][0]][j + dirs[k][1]]);\n            }\n        }\n    }\n\n    return ans;\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(5718).Z,width:"1312",height:"396"})))}c.isMDXComponent=!0},5718:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/e234dcc300dd367603d3a24c4384e376-df94258306e4ef53d27d2648757600a1.png"}}]);