"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[5329],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var i=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=i.createContext({}),o=function(e){var n=i.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=o(e.components);return i.createElement(m.Provider,{value:n},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=o(t),s=l,c=k["".concat(m,".").concat(s)]||k[s]||d[s]||r;return t?i.createElement(c,a(a({ref:n},u),{},{components:t})):i.createElement(c,a({ref:n},u))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=s;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p[k]="string"==typeof e?e:l,a[1]=p;for(var o=2;o<r;o++)a[o]=t[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=t(87462),l=(t(67294),t(3905));const r={authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635"],date:"2022/1/25"},a=void 0,p={permalink:"/algorithm/\u5251\u6307 Offer II 099.\u6700\u5c0f\u8def\u5f84\u4e4b\u548c",source:"@site/algorithm/\u5251\u6307 Offer II 099.\u6700\u5c0f\u8def\u5f84\u4e4b\u548c.md",title:"\u5251\u6307 Offer II 099.\u6700\u5c0f\u8def\u5f84\u4e4b\u548c",description:"1\u3001\u9898\u5e72",date:"2022-01-25T00:00:00.000Z",formattedDate:"2022\u5e741\u670825\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:6.945,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635"],date:"2022/1/25"},prevItem:{title:"\u5251\u6307 Offer II 067.\u6700\u5927\u7684\u5f02\u6216",permalink:"/algorithm/\u5251\u6307 Offer II 067.\u6700\u5927\u7684\u5f02\u6216"},nextItem:{title:"2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",permalink:"/algorithm/2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4"}},m={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u66b4\u529bDFS",id:"2\u89e3\u6cd51-\u66b4\u529bdfs",level:2},{value:"3\u3001\u66b4\u529bDFS-\u4f18\u5316",id:"3\u66b4\u529bdfs-\u4f18\u5316",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u89e3\u6cd52-\u8bb0\u5fc6\u5316DFS",id:"6\u89e3\u6cd52-\u8bb0\u5fc6\u5316dfs",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u6267\u884c\u7ed3\u679c",id:"8\u6267\u884c\u7ed3\u679c",level:2},{value:"9\u3001\u89e3\u6cd53-\u52a8\u6001\u89c4\u5212",id:"9\u89e3\u6cd53-\u52a8\u6001\u89c4\u5212",level:2},{value:"10\u3001\u4ee3\u7801",id:"10\u4ee3\u7801",level:2},{value:"11\u3001\u6267\u884c\u7ed3\u679c",id:"11\u6267\u884c\u7ed3\u679c",level:2},{value:"12\u3001\u6700\u540e",id:"12\u6700\u540e",level:2}],u={toc:o};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5305\u542b\u975e\u8d1f\u6574\u6570\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"_m_\xa0x\xa0_n_"),"\xa0\u7f51\u683c\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"grid")," \uff0c\u8bf7\u627e\u51fa\u4e00\u6761\u4ece\u5de6\u4e0a\u89d2\u5230\u53f3\u4e0b\u89d2\u7684\u8def\u5f84\uff0c\u4f7f\u5f97\u8def\u5f84\u4e0a\u7684\u6570\u5b57\u603b\u548c\u4e3a\u6700\u5c0f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a"),"\u4e00\u4e2a\u673a\u5668\u4eba\u6bcf\u6b21\u53ea\u80fd\u5411\u4e0b\u6216\u8005\u5411\u53f3\u79fb\u52a8\u4e00\u6b65\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg",alt:null}),(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," grid = ","[","[","1,3,1","]",",","[","1,5,1","]",",","[","4,2,1","]","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 7",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u56e0\u4e3a\u8def\u5f84 1\u21923\u21921\u21921\u21921 \u7684\u603b\u548c\u6700\u5c0f\u3002",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," grid = ","[","[","1,2,3","]",",","[","4,5,6","]","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 12",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"m == grid.length")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n == grid[i].length")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 200")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= grid[i][j] <= 100"))),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 64\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/minimum-path-sum/"},"https://leetcode-cn.com/problems/minimum-path-sum/")),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u66b4\u529bdfs"},"2\u3001\u89e3\u6cd51-\u66b4\u529bDFS"),(0,l.kt)("p",null,"\u770b\u5b8c\u9898\u76ee\u4e4b\u540e\u6ca1\u591a\u60f3\u8bef\u8ba4\u4e3a\u662f\u8d70\u8ff7\u5bab\u7684\u9898\uff0c\u4e8e\u662f\u5199\u4e86\u4e00\u7248\u66b4\u529b ",(0,l.kt)("inlineCode",{parentName:"p"},"DFS")," \uff0c\u7ed3\u679c\u8d85\u65f6\u4e86\u3002\u4ee3\u7801\u903b\u8f91\u662f\u4ece\u5de6\u4e0a\u89d2\u5230\u53f3\u4e0b\u89d2\u8fdb\u884c\u6df1\u5ea6\u904d\u5386\uff0c\u5e76\u4e14\u7d2f\u8ba1\u8def\u5f84\u548c\u4ee3\u5165\u4e0b\u4e00\u6b65\u8ba1\u7b97\u3002"),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8d85\u65f6\u7684\u539f\u56e0\u5728\u4e8e")," \uff1a\u901a\u5e38\u8d70\u8ff7\u5bab\u7684\u9898\u4e0d\u4f1a\u91cd\u590d\u7ecf\u8fc7\u67d0\u4e2a\u8282\u70b9\uff0c\u56e0\u6b64\u65f6\u95f4\u590d\u6742\u5ea6\u662f $O(mn)$\uff0c\u4ee5 $m\uff0cn <= 200$ \u6765\u7b97\u4e0d\u4f1a\u8d85\u65f6\uff1b \u4f46\u8fd9\u4e2a\u9898\u76ee\u7684\u66b4\u529b ",(0,l.kt)("inlineCode",{parentName:"p"},"DFS")," \u53ef\u4ee5\u770b\u505a\u662f\u904d\u5386\u4e00\u68f5\u9ad8\u5ea6\u4e3a $n+m-1$ \u7684\u4e8c\u53c9\u6811\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u63a5\u8fd1\u6307\u6570\u7ea7\u7684 $2^{n+m-1}$\uff0c\u8d85\u65f6\u4e5f\u4e0d\u8db3\u4e3a\u5947\u3002"),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ece\u7f51\u683c\u5de6\u4e0a\u89d2\u5230\u53f3\u4e0b\u89d2\u7684\u6700\u77ed\u8def\u5f84\u957f\u5ea6\u4e3a $n+m-1$\uff0c\u56e0\u6b64\u628a\u5b83\u5f53\u6210\u6811\u7684\u8bdd\u9ad8\u5ea6\u4e3a $n+m-1$ ")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u66b4\u529bDFS\u8d85\u65f6\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var minPathSum = function (grid) {\n    const m = grid.length, n = grid[0].length\n    let min = Infinity;\n\n    function dfs(i, j, sum) {\n        if (i >= m || j >= n) return;\n        sum += grid[i][j]\n\n        if (i === m - 1 && j === n - 1) min = Math.min(min, sum);\n\n        dfs(i + 1, j, sum);\n        dfs(i, j + 1, sum);\n    }\n\n    dfs(0, 0, 0);\n    return min;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u66b4\u529bdfs-\u4f18\u5316"},"3\u3001\u66b4\u529bDFS-\u4f18\u5316"),(0,l.kt)("p",null,"\u901a\u5e38\u66b4\u529b ",(0,l.kt)("inlineCode",{parentName:"p"},"DFS")," \u53ef\u4ee5\u901a\u8fc7\u526a\u679d\u3001\u8bb0\u5fc6\u5316\u7b49\u65b9\u5f0f\u8fdb\u884c\u4f18\u5316\uff0c\u8fd9\u91cc\u91c7\u7528\u4e86\u526a\u679d\u4f18\u5316\uff0c\u4f18\u5316\u540eAC\u4e86\u4f46\u8017\u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"3208 ms")," \u4f9d\u7136\u5f88\u9ad8\u3002"),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u91cc\u7684\u95ee\u9898\u5728\u4e8e"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u8ff0DFS\u4ee3\u7801\u5c5e\u4e8e\u66b4\u529b\u904d\u5386\u6240\u6709\u60c5\u51b5\u5e76\u5728\u7ec8\u70b9\u65f6\u8ba1\u7b97\u6700\u5c0f\u503c\uff0c\u6ca1\u6709\u6c42\u5c40\u90e8\u6700\u4f18\u89e3\u7684\u503e\u5411"),(0,l.kt)("li",{parentName:"ul"},"\u526a\u679d\u4f18\u5316\u4e0d\u7a33\u5b9a\uff1a\u8fd9\u91cc\u526a\u679d\u7684\u65b9\u5f0f\u662f\u8bb0\u5f55\u8282\u70b9\u524d\u5e8f\u8def\u5f84\u548c\uff0c\u5f53\u518d\u6b21\u8bbf\u95ee\u8be5\u8282\u70b9\u65f6\u5224\u65ad\u5f53\u524d\u60c5\u51b5\u7684\u524d\u5e8f\u8def\u5f84\u548c\u662f\u5426\u66f4\u5c0f\uff0c\u4ee5\u51b3\u5b9a\u662f\u5426\u7ee7\u7eed\u904d\u5386\u4ee5\u53ca\u662f\u5426\u66f4\u65b0\u8be5\u524d\u5e8f\u8def\u5f84\u548c\uff0c\u8fd9\u79cd\u526a\u679d\u65b9\u5f0f\u5b58\u5728\u4e0d\u7a33\u5b9a\u6027\uff0c\u56e0\u4e3a\u8bb0\u5f55\u7684\u524d\u5e8f\u8def\u5f84\u548c\u4e0d\u662f\u6700\u5c0f\uff0c\u540e\u7eed\u904d\u5386\u53ef\u80fd\u4f1a\u6709\u66f4\u5c0f\u7684\u524d\u5e8f\u8def\u5f84\u548c\u51fa\u73b0\uff0c\u6240\u4ee5\u8fd9\u79cd\u526a\u679d\u6ca1\u529e\u6cd5\u6392\u9664\u6389\u6700\u5c0f\u503c\u4ee5\u5916\u7684\u6240\u6709\u60c5\u51b5")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var minPathSum = function (grid) {\n    const m = grid.length, n = grid[0].length\n    let min = Infinity, minPreSum = new Map();\n\n    function dfs(i, j, sum) {\n        const key = i + '-' + j;\n        if (i >= m || j >= n || sum >= (minPreSum.get(key) || Infinity)) return;\n        minPreSum.set(key, sum);\n\n        sum += grid[i][j]\n\n        if (i === m - 1 && j === n - 1) min = Math.min(min, sum);\n\n        dfs(i + 1, j, sum);\n        dfs(i, j + 1, sum);\n    }\n\n    dfs(0, 0, 0);\n    return min;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 3208 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 53 MB")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u89e3\u6cd52-\u8bb0\u5fc6\u5316dfs"},"6\u3001\u89e3\u6cd52-\u8bb0\u5fc6\u5316DFS"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u89e3\u6cd5\u601d\u8def\u63a5\u8fd1\u4e8e\u52a8\u6001\u89c4\u5212\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"dfs")," \u51fd\u6570\u7684\u610f\u56fe\u662f\u6c42\u5c40\u90e8\u6700\u4f18\u89e3\u6700\u7ec8\u5f97\u5230\u5168\u5c40\u6700\u4f18\u89e3\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"dfs(i, j)")," \u4ee3\u8868\u4ece\u7ec8\u70b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"(m, n)")," \u5230\u70b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"(i, j)")," \u7684\u6700\u5c0f\u8def\u5f84\u548c\uff0c\u7136\u540e\u901a\u8fc7\u54c8\u5e0c\u8868\u8bb0\u5f55\u70b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"(i, j)")," \u7684\u6700\u5c0f\u8def\u5f84\u548c\uff0c\u540e\u7eed\u518d\u6b21\u904d\u5386\u5230\u8be5\u8282\u70b9\u76f4\u63a5\u8fd4\u56de\u6700\u5c0f\u8def\u5f84\u548c\uff0c\u65e0\u9700\u591a\u4f59\u904d\u5386\u4e0e\u8ba1\u7b97\u3002"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var minPathSum = function (grid) {\n    const m = grid.length, n = grid[0].length\n    const minSum = new Map();\n\n    function dfs(i, j) {\n        if (i >= m || j >= n) return Infinity;\n        if (i === m - 1 && j === n - 1) return grid[i][j];\n\n        const key = i + '-' + j;\n        if (minSum.has(key)) return minSum.get(key);\n\n        const min = Math.min(dfs(i + 1, j), dfs(i, j + 1)) + grid[i][j];\n        return minSum.set(key, min), min;\n    }\n\n    return dfs(0, 0);\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"8\u6267\u884c\u7ed3\u679c"},"8\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 76 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 49.2 MB")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"9\u89e3\u6cd53-\u52a8\u6001\u89c4\u5212"},"9\u3001\u89e3\u6cd53-\u52a8\u6001\u89c4\u5212"),(0,l.kt)("p",null,"\u89e3\u6cd52\u91c7\u7528\u7684\u662f\u9006\u5e8f\u7d2f\u52a0\u548c\u6c42\u89e3\uff0c\u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\u7406\u89e3\u91c7\u7528\u987a\u5e8f\u7d2f\u52a0\u548c\u8fdb\u884c\u6c42\u89e3\u3002\u4ece\u9898\u610f\u53ef\u4ee5\u770b\u51fa\u5bf9\u4e8e\u4efb\u610f\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"(i, j)"),"\uff0c\u5176\u6700\u5c0f\u8def\u5f84\u548c\u53d6\u51b3\u4e8e\u4e0a\u65b9\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"(i-1, j)")," \u548c\u5de6\u65b9\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"(i, j-1)"),"\uff0c\u5176\u503c\u4e3a\u5de6\u4e0a\u4e24\u4e2a\u8282\u70b9\u4e2d\u6700\u5c0f\u8def\u5f84\u548c\u7684\u8f83\u5c0f\u503c\u52a0\u4e0a\u81ea\u8eab\u7684\u503c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dp")," \u6570\u7ec4\u542b\u4e49\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"dp")," \u6570\u7ec4\u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"(m+1)*(n+1)")," \u7684\u6570\u7ec4\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"dp[i][j]")," \u8868\u793a\u4ece\u8d77\u70b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"(0, 0)")," \u5230\u70b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"(i, j)")," \u7684\u6700\u5c0f\u8def\u5f84\u548c\uff0c\u5176\u4e2d\u7b2c\u4e00\u884c\u548c\u7b2c\u4e00\u5217\u53ea\u662f\u4e3a\u4e86\u65b9\u4fbf\u8ba1\u7b97\uff0c\u6ca1\u6709\u5b9e\u9645\u542b\u4e49"),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u662f\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"i === 1 && j === 1")," \u65f6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"dp[i][j] = grid[i - 1][j - 1]")),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u60c5\u51b5\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1]")," "))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dp[i][j]")," \u5bf9\u5e94\u7684\u8282\u70b9\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"grid[i - 1][j - 1]"),"\uff0c\u56e0\u6b64\u904d\u5386 ",(0,l.kt)("inlineCode",{parentName:"li"},"dp")," \u6570\u7ec4\u65f6 ",(0,l.kt)("inlineCode",{parentName:"li"},"i")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"j")," \u90fd\u4ece\u4e0b\u6807 ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," \u5f00\u59cb")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"10\u4ee3\u7801"},"10\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var minPathSum = function (grid) {\n    const m = grid.length, n = grid[0].length\n    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(Infinity));\n\n    for (let i = 1; i <= m; i++) {\n        for (let j = 1; j <= n; j++) {\n            if (i === 1 && j === 1) dp[i][j] = grid[i - 1][j - 1];\n            else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];\n        }\n    }\n\n    return dp[m][n];\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"11\u6267\u884c\u7ed3\u679c"},"11\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 76 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 44 MB")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"12\u6700\u540e"},"12\u3001\u6700\u540e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9898\u89e3\u533a\u6709\u66f4\u4f18\u79c0\u7684\u52a8\u6001\u89c4\u5212\u89e3\u6cd5\uff0c\u6709\u964d\u7ef4 ",(0,l.kt)("inlineCode",{parentName:"p"},"DP"),"\uff08\u4e00\u7ef4\uff09\u3001\u6709\u628a\u539f\u59cb\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"grid")," \u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"DP")," \u6570\u7ec4\u7b49\uff0c\u4e3b\u8981\u964d\u4f4e\u4e86\u7a7a\u95f4\u590d\u6742\u5ea6\uff0c\u5f88\u503c\u5f97\u5b66\u4e60\u3002")))}k.isMDXComponent=!0}}]);