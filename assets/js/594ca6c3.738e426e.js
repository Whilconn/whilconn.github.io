"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[99959],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=l,g=m["".concat(p,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},51410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(15882),l=(n(59496),n(49613));const i={authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635"],date:"2022/4/25"},a=void 0,o={permalink:"/algorithm/\u5251\u6307 Offer 47.\u793c\u7269\u7684\u6700\u5927\u4ef7\u503c",source:"@site/algorithm/\u5251\u6307 Offer 47.\u793c\u7269\u7684\u6700\u5927\u4ef7\u503c.md",title:"\u5251\u6307 Offer 47.\u793c\u7269\u7684\u6700\u5927\u4ef7\u503c",description:"1\u3001\u9898\u5e72",date:"2022-04-25T00:00:00.000Z",formattedDate:"2022\u5e744\u670825\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:2.02,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635"],date:"2022/4/25"},prevItem:{title:"427.\u5efa\u7acb\u56db\u53c9\u6811",permalink:"/algorithm/427.\u5efa\u7acb\u56db\u53c9\u6811"},nextItem:{title:"2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",permalink:"/algorithm/2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u52a8\u6001\u89c4\u5212",id:"2\u89e3\u6cd51-\u52a8\u6001\u89c4\u5212",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd52-\u8bb0\u5fc6\u5316DFS",id:"5\u89e3\u6cd52-\u8bb0\u5fc6\u5316dfs",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u6267\u884c\u7ed3\u679c",id:"7\u6267\u884c\u7ed3\u679c",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u5728\u4e00\u4e2a m","*","n \u7684\u68cb\u76d8\u7684\u6bcf\u4e00\u683c\u90fd\u653e\u6709\u4e00\u4e2a\u793c\u7269\uff0c\u6bcf\u4e2a\u793c\u7269\u90fd\u6709\u4e00\u5b9a\u7684\u4ef7\u503c\uff08\u4ef7\u503c\u5927\u4e8e 0\uff09\u3002\u4f60\u53ef\u4ee5\u4ece\u68cb\u76d8\u7684\u5de6\u4e0a\u89d2\u5f00\u59cb\u62ff\u683c\u5b50\u91cc\u7684\u793c\u7269\uff0c\u5e76\u6bcf\u6b21\u5411\u53f3\u6216\u8005\u5411\u4e0b\u79fb\u52a8\u4e00\u683c\u3001\u76f4\u5230\u5230\u8fbe\u68cb\u76d8\u7684\u53f3\u4e0b\u89d2\u3002\u7ed9\u5b9a\u4e00\u4e2a\u68cb\u76d8\u53ca\u5176\u4e0a\u9762\u7684\u793c\u7269\u7684\u4ef7\u503c\uff0c\u8bf7\u8ba1\u7b97\u4f60\u6700\u591a\u80fd\u62ff\u5230\u591a\u5c11\u4ef7\u503c\u7684\u793c\u7269\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"[ \xa0 [1,3,1], \xa0 [1,5,1], \xa0 [4,2,1] ]"),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"12"),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca:")," \u8def\u5f84 1\u21923\u21925\u21922\u21921 \u53ef\u4ee5\u62ff\u5230\u6700\u591a\u4ef7\u503c\u7684\u793c\u7269"),(0,l.kt)("p",null,"\u63d0\u793a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 < grid.length <= 200")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 < grid[0].length <= 200"))),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u52a8\u6001\u89c4\u5212"},"2\u3001\u89e3\u6cd51-\u52a8\u6001\u89c4\u5212"),(0,l.kt)("p",null,"\u5faa\u73af\u904d\u5386\u77e9\u9635\uff0c\u7d2f\u52a0\u793c\u7269\u4ef7\u503c"),(0,l.kt)("p",null,"\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\uff1a$dp","[i][j]"," += max(dp","[i-1][j]",", dp","[i][j-1]",")$"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function maxValue(grid: number[][]): number {\n    const m = grid.length, n = grid[0].length;\n    for (let i = 0; i < m; i++) {\n        for (let j = 0; j < n; j++) {\n            grid[i][j] += Math.max(i > 0 ? grid[i - 1][j] : 0, j > 0 ? grid[i][j - 1] : 0);\n        }\n    }\n    return grid[m - 1][n - 1];\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1650889139-qtJTdq-image.png",alt:"image.png"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u89e3\u6cd52-\u8bb0\u5fc6\u5316dfs"},"5\u3001\u89e3\u6cd52-\u8bb0\u5fc6\u5316DFS"),(0,l.kt)("p",null,"DFS\u904d\u5386\u77e9\u9635\uff0c\u7d2f\u52a0\u793c\u7269\u4ef7\u503c"),(0,l.kt)("p",null,"\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u6700\u5927\u4ef7\u503c\u4f5c\u4e3a\u7f13\u5b58\u907f\u514d\u91cd\u590d\u8ba1\u7b97"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function maxValue(grid: number[][]): number {\n    const m = grid.length, n = grid[0].length;\n    const visited = grid.map(row => row.map(() => 0));\n    function dfs(i: number, j: number) {\n        if (i < 0 || j < 0 || i >= m || j >= n) return 0;\n        if (!visited[i][j]) visited[i][j] = grid[i][j] + Math.max(dfs(i - 1, j), dfs(i, j - 1));\n        return visited[i][j];\n    }\n    return dfs(m - 1, n - 1);\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"7\u6267\u884c\u7ed3\u679c"},"7\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 56 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 44.1 MB")))}m.isMDXComponent=!0}}]);