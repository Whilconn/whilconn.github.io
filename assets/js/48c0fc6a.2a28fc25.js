"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[31051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,A=function(e,t){if(null==e)return{};var n,r,A={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}var o=r.createContext({}),I=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=I(e.components);return r.createElement(o.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,A=e.mdxType,l=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=I(n),s=A,p=f["".concat(o,".").concat(s)]||f[s]||c[s]||l;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function p(e,t){var n=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var l=n.length,i=new Array(l);i[0]=s;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[f]="string"==typeof e?e:A,i[1]=a;for(var I=2;I<l;I++)i[I]=n[I];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>I});var r=n(87462),A=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},i=void 0,a={permalink:"/algorithm/2021/12/21/\u5251\u6307 Offer II 045.\u4e8c\u53c9\u6811\u6700\u5e95\u5c42\u6700\u5de6\u8fb9\u7684\u503c",source:"@site/algorithm/2021/12/21/\u5251\u6307 Offer II 045.\u4e8c\u53c9\u6811\u6700\u5e95\u5c42\u6700\u5de6\u8fb9\u7684\u503c.md",title:"\u5251\u6307 Offer II 045.\u4e8c\u53c9\u6811\u6700\u5e95\u5c42\u6700\u5de6\u8fb9\u7684\u503c",description:"1\u3001\u9898\u5e72",date:"2021-12-21T00:00:00.000Z",formattedDate:"2021\u5e7412\u670821\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:1.755,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},prevItem:{title:"\u5251\u6307 Offer II 044.\u4e8c\u53c9\u6811\u6bcf\u5c42\u7684\u6700\u5927\u503c",permalink:"/algorithm/2021/12/21/\u5251\u6307 Offer II 044.\u4e8c\u53c9\u6811\u6bcf\u5c42\u7684\u6700\u5927\u503c"},nextItem:{title:"\u5251\u6307 Offer II 046.\u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe",permalink:"/algorithm/2021/12/21/\u5251\u6307 Offer II 046.\u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe"}},o={authorsImageUrls:[void 0]},I=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],u={toc:I};function f(e){let{components:t,...l}=e;return(0,A.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,A.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684 ",(0,A.kt)("strong",null,"\u6839\u8282\u70b9")," ",(0,A.kt)("code",null,"root"),"\uff0c\u8bf7\u627e\u51fa\u8be5\u4e8c\u53c9\u6811\u7684\xa0",(0,A.kt)("strong",null,"\u6700\u5e95\u5c42\xa0\u6700\u5de6\u8fb9\xa0"),"\u8282\u70b9\u7684\u503c\u3002"),(0,A.kt)("p",null,"\u5047\u8bbe\u4e8c\u53c9\u6811\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u8282\u70b9\u3002"),(0,A.kt)("p",null,"\xa0"),(0,A.kt)("p",null,(0,A.kt)("strong",null,"\u793a\u4f8b 1:")),(0,A.kt)("p",null,(0,A.kt)("img",{src:n(84934).Z})),(0,A.kt)("pre",null,(0,A.kt)("strong",null,"\u8f93\u5165: "),"root = [2,1,3]",(0,A.kt)("br",null),(0,A.kt)("strong",null,"\u8f93\u51fa: "),"1",(0,A.kt)("br",null)),(0,A.kt)("p",null,(0,A.kt)("strong",null,"\u793a\u4f8b 2:")),(0,A.kt)("p",null,(0,A.kt)("img",{src:n(31980).Z}),(0,A.kt)("strong",null)),(0,A.kt)("pre",null,(0,A.kt)("strong",null,"\u8f93\u5165: "),"[1,2,3,4,null,5,6,null,null,7]",(0,A.kt)("br",null),(0,A.kt)("strong",null,"\u8f93\u51fa: "),"7",(0,A.kt)("br",null)),(0,A.kt)("p",null,"\xa0"),(0,A.kt)("p",null,(0,A.kt)("strong",null,"\u63d0\u793a:")),(0,A.kt)("ul",null,(0,A.kt)("li",null,"\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e2a\u6570\u7684\u8303\u56f4\u662f ",(0,A.kt)("code",null,"[1,10",(0,A.kt)("sup",null,"4"),"]")),(0,A.kt)("li",null,(0,A.kt)("meta",{charset:"UTF-8"}),(0,A.kt)("code",null,"-2",(0,A.kt)("sup",null,"31"),"\xa0<= Node.val <= 2",(0,A.kt)("sup",null,"31"),"\xa0- 1"),"\xa0")),(0,A.kt)("p",null,"\xa0"),(0,A.kt)("p",null,(0,A.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 513\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,A.kt)("a",{href:"https://leetcode-cn.com/problems/find-bottom-left-tree-value/"},"https://leetcode-cn.com/problems/find-bottom-left-tree-value/")),(0,A.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"2.png",src:n(23260).Z,width:"1366",height:"498"})),(0,A.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,A.kt)("p",null,"\u603b\u4f53\u601d\u8def\uff1a\u4f7f\u7528DFS\u9012\u5f52\u904d\u5386\u6811\u7684\u6240\u6709\u8282\u70b9\uff0c\u5f53\u7b2c\u4e00\u6b21\u904d\u5386\u5230\u5c42\u7ea7\u5927\u4e8e\u6240\u6709\u5df2\u904d\u5386\u8282\u70b9\u7684\u8282\u70b9\u65f6\uff0c\u8be5\u8282\u70b9\u5c31\u662f\u5f53\u524d\u5c42\u7ea7\u7684\u6700\u5de6\u5b50\u8282\u70b9\uff1b\u968f\u7740\u904d\u5386\u5c42\u7ea7\u9012\u589e\uff0c\u6700\u7ec8\u80fd\u627e\u5230\u6700\u5e95\u5c42\u7684\u6700\u5de6\u5b50\u8282\u70b9\u3002"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"\u4f7f\u7528DFS\u9012\u5f52\u904d\u5386\u6811\u7684\u6240\u6709\u8282\u70b9"),(0,A.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u5f53\u524d\u8282\u70b9\u7684\u5c42\u7ea7",(0,A.kt)("inlineCode",{parentName:"li"},"level"),"\u4e0e\u5df2\u904d\u5386\u8282\u70b9\u7684\u6700\u5927\u5c42\u7ea7",(0,A.kt)("inlineCode",{parentName:"li"},"maxLevel")),(0,A.kt)("li",{parentName:"ul"},"\u6bcf\u5f53",(0,A.kt)("inlineCode",{parentName:"li"},"level"),"\u8d85\u8fc7",(0,A.kt)("inlineCode",{parentName:"li"},"maxLevel"),"\u65f6\uff0c\u5c06\u5f53\u524d\u8282\u70b9\u8d4b\u503c\u7ed9",(0,A.kt)("inlineCode",{parentName:"li"},"res"),"\uff0c\u53e6\u5916\u66f4\u65b0",(0,A.kt)("inlineCode",{parentName:"li"},"maxLevel")),(0,A.kt)("li",{parentName:"ul"},"\u904d\u5386\u5b8c\u6210\u540e\uff0c",(0,A.kt)("inlineCode",{parentName:"li"},"res"),"\u5c31\u662f\u8981\u627e\u7684\u8282\u70b9\uff0c\u8fd4\u56de\u8be5\u8282\u70b9\u7684\u503c\u5373\u53ef")),(0,A.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-javascript"},"var findBottomLeftValue = function (root) {\n    let res, maxLevel = 0;\n    function dfs(node, level) {\n        if (!node) return;\n        if (level > maxLevel) res = node, maxLevel = level;\n        dfs(node.left, level + 1);\n        dfs(node.right, level + 1);\n    }\n    dfs(root, 1);\n    return res && res.val;\n};\n")))}f.isMDXComponent=!0},84934:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/jpeg;base64,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"},31980:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tree2-e243ce88b2db41ddae528cf2331c3130.jpg"},23260:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1640067595-JeZuLK-2-201e6bdaa19155cb27f316fca758b3d2.png"}}]);