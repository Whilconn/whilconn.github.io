"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[24279],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,s=c["".concat(p,".").concat(d)]||c[d]||k[d]||a;return n?r.createElement(s,o(o({ref:t},m),{},{components:n})):r.createElement(s,o({ref:t},m))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(15882),l=(n(59496),n(49613));const a={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u641c\u7d22\u6811","\u54c8\u5e0c\u8868","\u53cc\u6307\u9488","\u4e8c\u53c9\u6811"],date:"2022/1/7"},o=void 0,i={permalink:"/algorithm/\u5251\u6307 Offer II 056.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u4e24\u4e2a\u8282\u70b9\u4e4b\u548c",source:"@site/algorithm/\u5251\u6307 Offer II 056.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u4e24\u4e2a\u8282\u70b9\u4e4b\u548c.md",title:"\u5251\u6307 Offer II 056.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u4e24\u4e2a\u8282\u70b9\u4e4b\u548c",description:"1\u3001\u9898\u5e72",date:"2022-01-07T00:00:00.000Z",formattedDate:"2022\u5e741\u67087\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u641c\u7d22\u6811"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:2.76,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u641c\u7d22\u6811","\u54c8\u5e0c\u8868","\u53cc\u6307\u9488","\u4e8c\u53c9\u6811"],date:"2022/1/7"},prevItem:{title:"1614.\u62ec\u53f7\u7684\u6700\u5927\u5d4c\u5957\u6df1\u5ea6",permalink:"/algorithm/1614.\u62ec\u53f7\u7684\u6700\u5927\u5d4c\u5957\u6df1\u5ea6"},nextItem:{title:"71.\u7b80\u5316\u8def\u5f84",permalink:"/algorithm/71.\u7b80\u5316\u8def\u5f84"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51",id:"2\u89e3\u6cd51",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u89e3\u6cd52",id:"6\u89e3\u6cd52",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u641c\u7d22\u6811\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u6839\u8282\u70b9")," ",(0,l.kt)("inlineCode",{parentName:"p"},"root"),"\xa0\u548c\u4e00\u4e2a\u6574\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," , \u8bf7\u5224\u65ad\u8be5\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u662f\u5426\u5b58\u5728\u4e24\u4e2a\u8282\u70b9\u5b83\u4eec\u7684\u503c\u4e4b\u548c\u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u3002\u5047\u8bbe\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u8282\u70b9\u7684\u503c\u5747\u552f\u4e00\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  root = ","[","8,6,10,5,7,9,11","]",", k = 12",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  true",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),"  \u8282\u70b9 5 \u548c\u8282\u70b9 7 \u4e4b\u548c\u7b49\u4e8e 12",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  root = ","[","8,6,10,5,7,9,11","]",", k = 22",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  false",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),"  \u4e0d\u5b58\u5728\u4e24\u4e2a\u8282\u70b9\u503c\u4e4b\u548c\u4e3a 22 \u7684\u8282\u70b9",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e2a\u6570\u7684\u8303\u56f4\u662f\xa0\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"[1, 10^4]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-10^4\xa0<= Node.val <= 10^4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"root"),"\xa0\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-10^5\xa0<= k <= 10^5"))),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 653 \u9898\u76f8\u540c\uff1a\xa0",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/"},"https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/")),(0,l.kt)("h2",{id:"2\u89e3\u6cd51"},"2\u3001\u89e3\u6cd51"),(0,l.kt)("p",null,"DFS\u904d\u5386+\u54c8\u5e0c\u67e5\u627e\uff1aDFS\u904d\u5386\u6240\u6709\u8282\u70b9",(0,l.kt)("inlineCode",{parentName:"p"},"node"),"\uff0c\u5728\u54c8\u5e0c\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"set"),"\u4e2d\u67e5\u627e\u662f\u5426\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"k - node.val"),"\uff0c\u82e5\u5b58\u5728\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u5426\u5219\u7ee7\u7eed\u904d\u5386\u76f4\u81f3\u7ed3\u675f\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var findTarget = function (root, k) {\n    const set = new Set();\n    function dfs(node) {\n        if (!node) return false;\n        if (set.has(k - node.val)) return true;\n        set.add(node.val);\n        return dfs(node.left) || dfs(node.right);\n    }\n    return dfs(root);\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,l.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1641536115-DDtmTl-1.png",alt:"1.png"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u89e3\u6cd52"},"6\u3001\u89e3\u6cd52"),(0,l.kt)("p",null,"DFS\u904d\u5386+DFS\u4e8c\u5206\u67e5\u627e\uff1aDFS\u904d\u5386\u6240\u6709\u8282\u70b9",(0,l.kt)("inlineCode",{parentName:"p"},"node"),"\uff0c\u5229\u7528BST\u7279\u6027\u8fdb\u884cDFS\u4e8c\u5206\u67e5\u627e\u662f\u5426\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"k - node.val"),"\uff0c\u82e5\u5b58\u5728\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u5426\u5219\u7ee7\u7eed\u904d\u5386\u76f4\u81f3\u7ed3\u675f\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u4e8c\u5206\u641c\u7d22\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u53d7\u5230\u4e8c\u53c9\u6811\u5e73\u8861\u6027\u7684\u5f71\u54cd\uff0c\u6700\u574f\u60c5\u51b5\u4e0b\u4e8c\u53c9\u6811\u53ef\u80fd\u9000\u5316\u6210\u94fe\u8868\uff0c\u5bfc\u81f4\u641c\u7d22\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a$O(n)$\uff0c\u603b\u4f53\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a$O(n^2)$")),(0,l.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var findTarget = function (root, k) {\n    function find(node, num) {\n        if (!node) return false;\n        if (num === node.val) return true;\n        return num > node.val ? find(node.right, num) : find(node.left, num);\n    }\n\n    function findSum(node, num) {\n        if (!node) return false;\n        return (num !== 2 * node.val && find(root, num - node.val)) || findSum(node.right, num) || findSum(node.left, num);\n    }\n\n    return findSum(root, k);\n};\n")),(0,l.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u60c5\u51b5\u4e0b\u4e3a$O(nlogn)$ \uff0c\u975e\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u60c5\u51b5\u4e0b\u8d85\u8fc7$O(nlogn)$\uff0c\u6700\u5dee\u4e3a$O(n^2)$"),(0,l.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$"),(0,l.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1641535849-FHvsJN-1.png",alt:"1.png"})))}c.isMDXComponent=!0}}]);