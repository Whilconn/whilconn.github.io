"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[67789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u6808","\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u641c\u7d22\u6811","\u4e8c\u53c9\u6811"],date:"2022/1/1"},o=void 0,i={permalink:"/algorithm/\u5251\u6307 Offer II 052.\u5c55\u5e73\u4e8c\u53c9\u641c\u7d22\u6811",source:"@site/algorithm/\u5251\u6307 Offer II 052.\u5c55\u5e73\u4e8c\u53c9\u641c\u7d22\u6811.md",title:"\u5251\u6307 Offer II 052.\u5c55\u5e73\u4e8c\u53c9\u641c\u7d22\u6811",description:"1\u3001\u9898\u5e72",date:"2022-01-01T00:00:00.000Z",formattedDate:"2022\u5e741\u67081\u65e5",tags:[{label:"\u6808",permalink:"/algorithm/tags/\u6808"},{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u641c\u7d22\u6811"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:2.23,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6808","\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u641c\u7d22\u6811","\u4e8c\u53c9\u6811"],date:"2022/1/1"},prevItem:{title:"2022.\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4",permalink:"/algorithm/2022.\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4"},nextItem:{title:"507.\u5b8c\u7f8e\u6570",permalink:"/algorithm/507.\u5b8c\u7f8e\u6570"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-DFS+\u6539\u53d8\u6307\u9488",id:"2\u89e3\u6cd51-dfs\u6539\u53d8\u6307\u9488",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd52-DFS+\u6570\u7ec4",id:"5\u89e3\u6cd52-dfs\u6570\u7ec4",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u6267\u884c\u7ed3\u679c",id:"7\u6267\u884c\u7ed3\u679c",level:2}],c={toc:u};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u68f5\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u8bf7\xa0",(0,l.kt)("strong",{parentName:"p"},"\u6309\u4e2d\u5e8f\u904d\u5386")," \u5c06\u5176\u91cd\u65b0\u6392\u5217\u4e3a\u4e00\u68f5\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811\uff0c\u4f7f\u6811\u4e2d\u6700\u5de6\u8fb9\u7684\u8282\u70b9\u6210\u4e3a\u6811\u7684\u6839\u8282\u70b9\uff0c\u5e76\u4e14\u6bcf\u4e2a\u8282\u70b9\u6ca1\u6709\u5de6\u5b50\u8282\u70b9\uff0c\u53ea\u6709\u4e00\u4e2a\u53f3\u5b50\u8282\u70b9\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/17/ex1.jpg",alt:null}),(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," root = ","[","5,3,6,2,4,null,8,1,null,null,null,7,9","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9","]",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/17/ex2.jpg",alt:null}),(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," root = ","[","5,1,7","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","1,null,5,null,7","]",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6811\u4e2d\u8282\u70b9\u6570\u7684\u53d6\u503c\u8303\u56f4\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"[1, 100]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 1000"))),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 897\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/increasing-order-search-tree/"},"https://leetcode-cn.com/problems/increasing-order-search-tree/")),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-dfs\u6539\u53d8\u6307\u9488"},"2\u3001\u89e3\u6cd51-DFS+\u6539\u53d8\u6307\u9488"),(0,l.kt)("p",null,"\u6df1\u5ea6\u904d\u5386\u6240\u6709\u8282\u70b9\uff0c\u5728\u9012\u5f52\u5de6\u5b50\u8282\u70b9\u540e\u6784\u9020\u65b0\u7684\u4e8c\u53c9\u6811\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"newRoot"),"\u7528\u4e8e\u8bb0\u5f55\u65b0\u6811\u7684\u6839\u8282\u70b9\uff0c\u82e5",(0,l.kt)("inlineCode",{parentName:"p"},"newRoot"),"\u4e3a\u7a7a\u5219\u8d4b\u503c\u4e3a\u5f53\u524d\u8282\u70b9\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"lastNode"),"\u7528\u4e8e\u8bb0\u5f55\u65b0\u6811\u7684\u6700\u540e\u4e00\u4e2a\u8282\u70b9\uff0c\u82e5",(0,l.kt)("inlineCode",{parentName:"p"},"lastNode"),"\u6709\u503c\u5219\u5c06\u5176\u53f3\u5b50\u8282\u70b9\u7f6e\u4e3a\u5f53\u524d\u8282\u70b9\uff0c\u7136\u540e\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"lastNode"),"\u7f6e\u4e3a\u5f53\u524d\u8282\u70b9\uff0c\u5f53\u524d\u8282\u70b9\u7684\u5de6\u5b50\u8282\u70b9\u7f6e\u4e3a\u7a7a\uff0c\u6700\u540e\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"newRoot")),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var increasingBST = function (root) {\n    let newRoot = null, lastNode = null;\n    function dfs(node) {\n        if (!node) return;\n        dfs(node.left);\n        if (!newRoot) newRoot = node;\n        if (lastNode) lastNode.right = node;\n        lastNode = node;\n        node.left = null;\n        dfs(node.right);\n    }\n    dfs(root);\n\n    return newRoot;\n};\n")),(0,l.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.png",src:n(12770).Z,width:"1358",height:"486"})),(0,l.kt)("h2",{id:"5\u89e3\u6cd52-dfs\u6570\u7ec4"},"5\u3001\u89e3\u6cd52-DFS+\u6570\u7ec4"),(0,l.kt)("p",null,"\u6df1\u5ea6\u904d\u5386\u5c06\u8282\u70b9\u6309\u4e2d\u5e8f\u5b58\u5165\u6570\u7ec4\u4e2d\uff0c\u7ed3\u675f\u540e\u5bf9\u8282\u70b9\u6570\u7ec4\u8fdb\u884c\u904d\u5386\uff0c\u5c06\u5f53\u524d\u8282\u70b9\u7684\u5de6\u5b50\u8282\u70b9\u7f6e\u7a7a\u53f3\u5b50\u8282\u70b9\u7f6e\u4e3a\u4e0b\u4e00\u4e2a\u6570\u7ec4\u5143\u7d20\uff0c\u6700\u540e\u8fd4\u56de\u6570\u7ec4\u9996\u4e2a\u5143\u7d20\u3002"),(0,l.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var increasingBST = function (root) {\n    const arr = [];\n    function dfs(node) {\n        if (!node) return;\n        dfs(node.left);\n        arr.push(node);\n        dfs(node.right);\n    }\n    dfs(root);\n\n    for (let i = 0; i < arr.length; i++) {\n        arr[i].left = null;\n        arr[i].right = arr[i + 1] || null;\n    }\n\n    return arr[0];\n};\n")),(0,l.kt)("h2",{id:"7\u6267\u884c\u7ed3\u679c"},"7\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 68 ms \u5185\u5b58\u6d88\u8017: 39.2 MB")))}s.isMDXComponent=!0},12770:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1641032466-XXAzmf-1-400a8fbebfc250958fb697c6ec95334b.png"}}]);