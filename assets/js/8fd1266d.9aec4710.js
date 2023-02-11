"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[34455],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>g});var a=e(67294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=a.createContext({}),m=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):s(s({},n),t)),e},p=function(t){var n=m(t.components);return a.createElement(o.Provider,{value:n},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=m(e),k=l,g=u["".concat(o,".").concat(k)]||u[k]||c[k]||r;return e?a.createElement(g,s(s({ref:n},p),{},{components:e})):a.createElement(g,s({ref:n},p))}));function g(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,s=new Array(r);s[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=t,i[u]="string"==typeof t?t:l,s[1]=i;for(var m=2;m<r;m++)s[m]=e[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},9703:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=e(87462),l=(e(67294),e(3905));const r={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4","\u77e9\u9635"],date:"2021/12/13"},s=void 0,i={permalink:"/algorithm/2021/12/13/807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf",source:"@site/algorithm/2021/12/13/807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf.md",title:"807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf",description:"1\u3001\u9898\u5e72",date:"2021-12-13T00:00:00.000Z",formattedDate:"2021\u5e7412\u670813\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:3.31,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4","\u77e9\u9635"],date:"2021/12/13"},prevItem:{title:"207.\u8bfe\u7a0b\u8868",permalink:"/algorithm/2021/12/13/207.\u8bfe\u7a0b\u8868"},nextItem:{title:"794.\u6709\u6548\u7684\u4e95\u5b57\u6e38\u620f",permalink:"/algorithm/2021/12/09/794.\u6709\u6548\u7684\u4e95\u5b57\u6e38\u620f"}},o={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:m};function u(t){let{components:n,...e}=t;return(0,l.kt)("wrapper",(0,a.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u5ea7\u7531 ",(0,l.kt)("code",null,"n x n")," \u4e2a\u8857\u533a\u7ec4\u6210\u7684\u57ce\u5e02\uff0c\u6bcf\u4e2a\u8857\u533a\u90fd\u5305\u542b\u4e00\u5ea7\u7acb\u65b9\u4f53\u5efa\u7b51\u3002\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece ",(0,l.kt)("strong",null,"0")," \u5f00\u59cb\u7684 ",(0,l.kt)("code",null,"n x n")," \u6574\u6570\u77e9\u9635 ",(0,l.kt)("code",null,"grid")," \uff0c\u5176\u4e2d ",(0,l.kt)("code",null,"grid[r][c]")," \u8868\u793a\u5750\u843d\u4e8e ",(0,l.kt)("code",null,"r")," \u884c ",(0,l.kt)("code",null,"c")," \u5217\u7684\u5efa\u7b51\u7269\u7684 ",(0,l.kt)("strong",null,"\u9ad8\u5ea6")," \u3002"),(0,l.kt)("p",null,"\u57ce\u5e02\u7684 ",(0,l.kt)("strong",null,"\u5929\u9645\u7ebf")," \u662f\u4ece\u8fdc\u5904\u89c2\u5bdf\u57ce\u5e02\u65f6\uff0c\u6240\u6709\u5efa\u7b51\u7269\u5f62\u6210\u7684\u5916\u90e8\u8f6e\u5ed3\u3002\u4ece\u4e1c\u3001\u5357\u3001\u897f\u3001\u5317\u56db\u4e2a\u4e3b\u8981\u65b9\u5411\u89c2\u6d4b\u5230\u7684 ",(0,l.kt)("strong",null,"\u5929\u9645\u7ebf")," \u53ef\u80fd\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u88ab\u5141\u8bb8\u4e3a ",(0,l.kt)("strong",null,"\u4efb\u610f\u6570\u91cf\u7684\u5efa\u7b51\u7269 "),"\u7684\u9ad8\u5ea6\u589e\u52a0",(0,l.kt)("strong",null," \u4efb\u610f\u589e\u91cf\uff08\u4e0d\u540c\u5efa\u7b51\u7269\u7684\u589e\u91cf\u53ef\u80fd\u4e0d\u540c\uff09")," \u3002 \u9ad8\u5ea6\u4e3a ",(0,l.kt)("code",null,"0")," \u7684\u5efa\u7b51\u7269\u7684\u9ad8\u5ea6\u4e5f\u53ef\u4ee5\u589e\u52a0\u3002\u7136\u800c\uff0c\u589e\u52a0\u7684\u5efa\u7b51\u7269\u9ad8\u5ea6 ",(0,l.kt)("strong",null,"\u4e0d\u80fd\u5f71\u54cd")," \u4ece\u4efb\u4f55\u4e3b\u8981\u65b9\u5411\u89c2\u5bdf\u57ce\u5e02\u5f97\u5230\u7684 ",(0,l.kt)("strong",null,"\u5929\u9645\u7ebf")," \u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("strong",null,"\u4e0d\u6539\u53d8")," \u4ece\u4efb\u4f55\u4e3b\u8981\u65b9\u5411\u89c2\u6d4b\u5230\u7684\u57ce\u5e02 ",(0,l.kt)("strong",null,"\u5929\u9645\u7ebf")," \u7684\u524d\u63d0\u4e0b\uff0c\u8fd4\u56de\u5efa\u7b51\u7269\u53ef\u4ee5\u589e\u52a0\u7684 ",(0,l.kt)("strong",null,"\u6700\u5927\u9ad8\u5ea6\u589e\u91cf\u603b\u548c")," \u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2021/06/21/807-ex1.png"}),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"35",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5efa\u7b51\u7269\u7684\u9ad8\u5ea6\u5982\u4e0a\u56fe\u4e2d\u5fc3\u6240\u793a\u3002",(0,l.kt)("br",null),"\u7528\u7ea2\u8272\u7ed8\u5236\u4ece\u4e0d\u540c\u65b9\u5411\u89c2\u770b\u5f97\u5230\u7684\u5929\u9645\u7ebf\u3002",(0,l.kt)("br",null),"\u5728\u4e0d\u5f71\u54cd\u5929\u9645\u7ebf\u7684\u60c5\u51b5\u4e0b\uff0c\u589e\u52a0\u5efa\u7b51\u7269\u7684\u9ad8\u5ea6\uff1a",(0,l.kt)("br",null),"gridNew = [ [8, 4, 8, 7],",(0,l.kt)("br",null),"            [7, 4, 7, 7],",(0,l.kt)("br",null),"            [9, 4, 8, 7],",(0,l.kt)("br",null),"            [3, 3, 3, 3] ]",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[0,0,0],[0,0,0],[0,0,0]]",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"0",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u589e\u52a0\u4efb\u4f55\u5efa\u7b51\u7269\u7684\u9ad8\u5ea6\u90fd\u4f1a\u5bfc\u81f4\u5929\u9645\u7ebf\u7684\u53d8\u5316\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"n == grid.length")),(0,l.kt)("li",null,(0,l.kt)("code",null,"n == grid[r].length")),(0,l.kt)("li",null,(0,l.kt)("code",null,"2 <= n <= 50")),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= grid[r][c] <= 100"))),(0,l.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,l.kt)("p",null,"\u9898\u76ee\u6bd4\u8f83\u7b80\u5355\uff0c\u4e24\u6b21\u904d\u5386\u5148\u53d6\u884c\u5217\u6700\u5927\u503c\u518d\u7d2f\u52a0\u6700\u5927\u5dee\u503c\u5373\u53ef\u3002\u8be6\u7ec6\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5148\u8ba1\u7b97\u5404\u884c\u6700\u5927\u503c",(0,l.kt)("inlineCode",{parentName:"li"},"maxInRows"),"\u548c\u5404\u5217\u6700\u5927\u503c",(0,l.kt)("inlineCode",{parentName:"li"},"maxInCols")),(0,l.kt)("li",{parentName:"ul"},"\u518d\u904d\u5386\u77e9\u9635",(0,l.kt)("inlineCode",{parentName:"li"},"grid"),"\u4e2d\u6bcf\u4e2a\u5143\u7d20\uff0c\u5143\u7d20\u589e\u5927\u7684\u4e0a\u9650\u662f\u8be5\u884c\u6700\u5927\u503c",(0,l.kt)("inlineCode",{parentName:"li"},"maxInRows[i]"),"\u548c\u8be5\u5217\u6700\u5927\u503c",(0,l.kt)("inlineCode",{parentName:"li"},"maxInCols[j]"),"\u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a"),(0,l.kt)("li",{parentName:"ul"},"\u6c42\u5c40\u90e8\u6700\u4f18\u89e3\uff1a\u8ba1\u7b97\u51fa\u6bcf\u4e2a\u5efa\u7b51\u7269\u53ef\u4ee5\u589e\u52a0\u7684\u6700\u5927\u9ad8\u5ea6",(0,l.kt)("inlineCode",{parentName:"li"},"(Math.min(maxInRows[i], maxInCols[j]) - grid[i][j])")),(0,l.kt)("li",{parentName:"ul"},"\u7d2f\u52a0\u53ef\u5f97\u5168\u5c40\u6700\u4f18\u89e3\uff1a\u5efa\u7b51\u7269\u9ad8\u5ea6\u53ef\u4ee5\u589e\u52a0\u7684\u6700\u5927\u603b\u548c")),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("msup",{parentName:"mrow"},(0,l.kt)("mi",{parentName:"msup"},"n"),(0,l.kt)("mn",{parentName:"msup"},"2")),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"msupsub"},(0,l.kt)("span",{parentName:"span",className:"vlist-t"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,l.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var maxIncreaseKeepingSkyline = function (grid) {\n    const maxInRows = new Array(grid.length).fill(0);\n    const maxInCols = new Array(grid[0].length).fill(0);\n\n    for (let i = 0; i < grid.length; i++) {\n        for (let j = 0; j < grid[i].length; j++) {\n            maxInRows[i] = Math.max(maxInRows[i], grid[i][j]);\n            maxInCols[j] = Math.max(maxInCols[j], grid[i][j]);\n        }\n    }\n\n    let res = 0;\n    for (let i = 0; i < grid.length; i++) {\n        for (let j = 0; j < grid[i].length; j++) {\n            res += (Math.min(maxInRows[i], maxInCols[j]) - grid[i][j]);\n        }\n    }\n\n    return res;\n};\n")))}u.isMDXComponent=!0}}]);