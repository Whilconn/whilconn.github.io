"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[4311],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),c=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(i.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},f=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),s=c(n),f=r,d=s["".concat(i,".").concat(f)]||s[f]||k[f]||o;return n?l.createElement(d,u(u({ref:e},p),{},{components:n})):l.createElement(d,u({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,u=new Array(o);u[0]=f;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a[s]="string"==typeof t?t:r,u[1]=a;for(var c=2;c<o;c++)u[c]=n[c];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91254:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>u,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},u=void 0,a={permalink:"/algorithm/2021/12/21/\u5251\u6307 Offer II 047.\u4e8c\u53c9\u6811\u526a\u679d",source:"@site/algorithm/2021/12/21/\u5251\u6307 Offer II 047.\u4e8c\u53c9\u6811\u526a\u679d.md",title:"\u5251\u6307 Offer II 047.\u4e8c\u53c9\u6811\u526a\u679d",description:"1\u3001\u9898\u5e72",date:"2021-12-21T00:00:00.000Z",formattedDate:"2021\u5e7412\u670821\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:1.555,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},prevItem:{title:"\u5251\u6307 Offer II 046.\u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe",permalink:"/algorithm/2021/12/21/\u5251\u6307 Offer II 046.\u4e8c\u53c9\u6811\u7684\u53f3\u4fa7\u89c6\u56fe"},nextItem:{title:"\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c",permalink:"/algorithm/2021/12/21/\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c"}},i={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811 ",(0,r.kt)("strong",null,"\u6839\u8282\u70b9"),"\xa0",(0,r.kt)("code",null,"root"),"\xa0\uff0c\u6811\u7684\u6bcf\u4e2a\u8282\u70b9\u7684\u503c\u8981\u4e48\u662f ",(0,r.kt)("code",null,"0"),"\uff0c\u8981\u4e48\u662f ",(0,r.kt)("code",null,"1"),"\u3002\u8bf7\u526a\u9664\u8be5\u4e8c\u53c9\u6811\u4e2d\u6240\u6709\u8282\u70b9\u7684\u503c\u4e3a ",(0,r.kt)("code",null,"0")," \u7684\u5b50\u6811\u3002"),(0,r.kt)("p",null,"\u8282\u70b9 ",(0,r.kt)("code",null,"node")," \u7684\u5b50\u6811\u4e3a\xa0",(0,r.kt)("code",null,"node")," \u672c\u8eab\uff0c\u4ee5\u53ca\u6240\u6709 ",(0,r.kt)("code",null,"node"),"\xa0\u7684\u540e\u4ee3\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:")," [1,null,0,0,1]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa: "),"[1,null,0,null,1] ",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca:")," ",(0,r.kt)("br",null),"\u53ea\u6709\u7ea2\u8272\u8282\u70b9\u6ee1\u8db3\u6761\u4ef6\u201c\u6240\u6709\u4e0d\u5305\u542b 1 \u7684\u5b50\u6811\u201d\u3002",(0,r.kt)("br",null),"\u53f3\u56fe\u4e3a\u8fd4\u56de\u7684\u7b54\u6848\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("img",{alt:"",src:"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_2.png"}),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:")," [1,0,1,0,0,0,1]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa: "),"[1,null,1,null,1]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca:")," ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("img",{alt:"",src:"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png"}),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 3:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:")," [1,1,0,1,1,0,1,0]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa: "),"[1,1,0,1,1,null,1]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca:")," ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("img",{alt:"",src:"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png"}),(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a:")),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e2a\u6570\u7684\u8303\u56f4\u662f ",(0,r.kt)("code",null,"[1,200]")),(0,r.kt)("li",null,"\u4e8c\u53c9\u6811\u8282\u70b9\u7684\u503c\u53ea\u4f1a\u662f ",(0,r.kt)("code",null,"0")," \u6216 ",(0,r.kt)("code",null,"1"))),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 814\xa0\u9898\u76f8\u540c\uff1a",(0,r.kt)("a",{href:"https://leetcode-cn.com/problems/binary-tree-pruning/"},"https://leetcode-cn.com/problems/binary-tree-pruning/")),(0,r.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1640074550-biZhoZ-1.png?1",alt:"1.png"})),(0,r.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u603b\u4f53\u601d\u8def\uff1a\u4f7f\u7528DFS\u9012\u5f52\u904d\u5386\u6811\u7684\u8282\u70b9\uff0c\u9012\u5f52\u8fc7\u7a0b\u4e2d\u628a\u503c\u4e3a0\u7684\u53f6\u5b50\u8282\u70b9\u9010\u4e2a\u526a\u9664\uff0c\u5c31\u80fd\u5f97\u5230\u526a\u679d\u540e\u7684\u4e8c\u53c9\u6811\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var pruneTree = function (root) {\n    function dfs(node) {\n        if (!node) return;\n        if (dfs(node.left)) node.left = null;\n        if (dfs(node.right)) node.right = null;\n        if (node.val === 0 && !node.left && !node.right) return true;\n    }\n    return dfs(root) ? null : root;\n};\n")))}s.isMDXComponent=!0}}]);