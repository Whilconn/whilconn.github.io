"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[99771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,f=s["".concat(u,".").concat(k)]||s[k]||m[k]||a;return n?l.createElement(f,o(o({ref:t},c),{},{components:n})):l.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},o=void 0,i={permalink:"/algorithm/2021/12/21/\u5251\u6307 Offer II 045.\u4e8c\u53c9\u6811\u6700\u5e95\u5c42\u6700\u5de6\u8fb9\u7684\u503c",source:"@site/algorithm/2021/12/21/\u5251\u6307 Offer II 045.\u4e8c\u53c9\u6811\u6700\u5e95\u5c42\u6700\u5de6\u8fb9\u7684\u503c.md",title:"\u5251\u6307 Offer II 045.\u4e8c\u53c9\u6811\u6700\u5e95\u5c42\u6700\u5de6\u8fb9\u7684\u503c",description:"1\u3001\u9898\u5e72",date:"2021-12-21T00:00:00.000Z",formattedDate:"2021\u5e7412\u670821\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:1.755,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},prevItem:{title:"\u5251\u6307 Offer II 044.\u4e8c\u53c9\u6811\u6bcf\u5c42\u7684\u6700\u5927\u503c",permalink:"/algorithm/2021/12/21/\u5251\u6307 Offer II 044.\u4e8c\u53c9\u6811\u6bcf\u5c42\u7684\u6700\u5927\u503c"},nextItem:{title:"\u5251\u6307 Offer II 046.\u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe",permalink:"/algorithm/2021/12/21/\u5251\u6307 Offer II 046.\u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe"}},u={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684 ",(0,r.kt)("strong",null,"\u6839\u8282\u70b9")," ",(0,r.kt)("code",null,"root"),"\uff0c\u8bf7\u627e\u51fa\u8be5\u4e8c\u53c9\u6811\u7684\xa0",(0,r.kt)("strong",null,"\u6700\u5e95\u5c42\xa0\u6700\u5de6\u8fb9\xa0"),"\u8282\u70b9\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u4e8c\u53c9\u6811\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://assets.leetcode.com/uploads/2020/12/14/tree1.jpg"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165: "),"root = [2,1,3]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa: "),"1",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2:")),(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://assets.leetcode.com/uploads/2020/12/14/tree2.jpg"}),(0,r.kt)("strong",null)),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165: "),"[1,2,3,4,null,5,6,null,null,7]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa: "),"7",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a:")),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e2a\u6570\u7684\u8303\u56f4\u662f ",(0,r.kt)("code",null,"[1,10",(0,r.kt)("sup",null,"4"),"]")),(0,r.kt)("li",null,(0,r.kt)("meta",{charset:"UTF-8"}),(0,r.kt)("code",null,"-2",(0,r.kt)("sup",null,"31"),"\xa0<= Node.val <= 2",(0,r.kt)("sup",null,"31"),"\xa0- 1"),"\xa0")),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 513\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,r.kt)("a",{href:"https://leetcode-cn.com/problems/find-bottom-left-tree-value/"},"https://leetcode-cn.com/problems/find-bottom-left-tree-value/")),(0,r.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1640067595-JeZuLK-2.png",alt:"2.png"})),(0,r.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u603b\u4f53\u601d\u8def\uff1a\u4f7f\u7528DFS\u9012\u5f52\u904d\u5386\u6811\u7684\u6240\u6709\u8282\u70b9\uff0c\u5f53\u7b2c\u4e00\u6b21\u904d\u5386\u5230\u5c42\u7ea7\u5927\u4e8e\u6240\u6709\u5df2\u904d\u5386\u8282\u70b9\u7684\u8282\u70b9\u65f6\uff0c\u8be5\u8282\u70b9\u5c31\u662f\u5f53\u524d\u5c42\u7ea7\u7684\u6700\u5de6\u5b50\u8282\u70b9\uff1b\u968f\u7740\u904d\u5386\u5c42\u7ea7\u9012\u589e\uff0c\u6700\u7ec8\u80fd\u627e\u5230\u6700\u5e95\u5c42\u7684\u6700\u5de6\u5b50\u8282\u70b9\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528DFS\u9012\u5f52\u904d\u5386\u6811\u7684\u6240\u6709\u8282\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u5f53\u524d\u8282\u70b9\u7684\u5c42\u7ea7",(0,r.kt)("inlineCode",{parentName:"li"},"level"),"\u4e0e\u5df2\u904d\u5386\u8282\u70b9\u7684\u6700\u5927\u5c42\u7ea7",(0,r.kt)("inlineCode",{parentName:"li"},"maxLevel")),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5f53",(0,r.kt)("inlineCode",{parentName:"li"},"level"),"\u8d85\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"maxLevel"),"\u65f6\uff0c\u5c06\u5f53\u524d\u8282\u70b9\u8d4b\u503c\u7ed9",(0,r.kt)("inlineCode",{parentName:"li"},"res"),"\uff0c\u53e6\u5916\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"li"},"maxLevel")),(0,r.kt)("li",{parentName:"ul"},"\u904d\u5386\u5b8c\u6210\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"res"),"\u5c31\u662f\u8981\u627e\u7684\u8282\u70b9\uff0c\u8fd4\u56de\u8be5\u8282\u70b9\u7684\u503c\u5373\u53ef")),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var findBottomLeftValue = function (root) {\n    let res, maxLevel = 0;\n    function dfs(node, level) {\n        if (!node) return;\n        if (level > maxLevel) res = node, maxLevel = level;\n        dfs(node.left, level + 1);\n        dfs(node.right, level + 1);\n    }\n    dfs(root, 1);\n    return res && res.val;\n};\n")))}s.isMDXComponent=!0}}]);