"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[7854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),p=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||o;return n?l.createElement(m,a(a({ref:t},c),{},{components:n})):l.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:r,a[1]=u;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},48629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u641c\u7d22\u6811","\u4e8c\u53c9\u6811"],date:new Date("2022-01-03T00:00:00.000Z")},a=void 0,u={permalink:"/algorithm/2022/01/03/\u5251\u6307 Offer II 053.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7",source:"@site/algorithm/2022/01/03/\u5251\u6307 Offer II 053.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7.md",title:"\u5251\u6307 Offer II 053.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7",description:"1\u3001\u9898\u5e72",date:"2022-01-03T00:00:00.000Z",formattedDate:"2022\u5e741\u67083\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u641c\u7d22\u6811"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:1.745,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u641c\u7d22\u6811","\u4e8c\u53c9\u6811"],date:"2022-01-03T00:00:00.000Z"},prevItem:{title:"1576.\u66ff\u6362\u6240\u6709\u7684\u95ee\u53f7",permalink:"/algorithm/2022/01/05/1576.\u66ff\u6362\u6240\u6709\u7684\u95ee\u53f7"},nextItem:{title:"390.\u6d88\u9664\u6e38\u620f",permalink:"/algorithm/2022/01/02/390.\u6d88\u9664\u6e38\u620f"}},i={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],c={toc:p};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e00\u68f5\u4e8c\u53c9\u641c\u7d22\u6811\u548c\u5176\u4e2d\u7684\u4e00\u4e2a\u8282\u70b9 ",(0,r.kt)("code",null,"p")," \uff0c\u627e\u5230\u8be5\u8282\u70b9\u5728\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7\u3002\u5982\u679c\u8282\u70b9\u6ca1\u6709\u4e2d\u5e8f\u540e\u7ee7\uff0c\u8bf7\u8fd4\u56de ",(0,r.kt)("code",null,"null")," \u3002"),(0,r.kt)("p",null,"\u8282\u70b9\xa0",(0,r.kt)("code",null,"p"),"\xa0\u7684\u540e\u7ee7\u662f\u503c\u6bd4\xa0",(0,r.kt)("code",null,"p.val"),"\xa0\u5927\u7684\u8282\u70b9\u4e2d\u952e\u503c\u6700\u5c0f\u7684\u8282\u70b9\uff0c\u5373\u6309\u4e2d\u5e8f\u904d\u5386\u7684\u987a\u5e8f\u8282\u70b9 ",(0,r.kt)("code",null,"p")," \u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2019/01/23/285_example_1.PNG"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [2,1,3], p = 1",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"2",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u8fd9\u91cc 1 \u7684\u4e2d\u5e8f\u540e\u7ee7\u662f 2\u3002\u8bf7\u6ce8\u610f p \u548c\u8fd4\u56de\u503c\u90fd\u5e94\u662f TreeNode \u7c7b\u578b\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b\xa02\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2019/01/23/285_example_2.PNG"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [5,3,6,2,4,null,null,1], p = 6",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"null",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u56e0\u4e3a\u7ed9\u51fa\u7684\u8282\u70b9\u6ca1\u6709\u4e2d\u5e8f\u540e\u7ee7\uff0c\u6240\u4ee5\u7b54\u6848\u5c31\u8fd4\u56de ",(0,r.kt)("code",null,"null \u4e86\u3002"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u6811\u4e2d\u8282\u70b9\u7684\u6570\u76ee\u5728\u8303\u56f4 ",(0,r.kt)("code",null,"[1, 10",(0,r.kt)("sup",null,"4"),"]")," \u5185\u3002"),(0,r.kt)("li",null,(0,r.kt)("code",null,"-10",(0,r.kt)("sup",null,"5")," <= Node.val <= 10",(0,r.kt)("sup",null,"5"))),(0,r.kt)("li",null,"\u6811\u4e2d\u5404\u8282\u70b9\u7684\u503c\u5747\u4fdd\u8bc1\u552f\u4e00\u3002")),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 285\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,r.kt)("a",{href:"https://leetcode-cn.com/problems/inorder-successor-in-bst/"},"https://leetcode-cn.com/problems/inorder-successor-in-bst/")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u4e2d\u5e8f\u904d\u5386\u8bb0\u5f55\u524d\u4e00\u8282\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"pre"),"\uff0c\u82e5\u524d\u4e00\u8282\u70b9\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"\u5f15\u7528\u76f8\u540c\uff0c\u5219\u5f53\u524d\u8282\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"\u7684\u4e2d\u5e8f\u540e\u7ee7\uff0c\u8bb0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"res"),"\u5373\u6700\u7ec8\u8fd4\u56de\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var inorderSuccessor = function (root, p) {\n    let pre, res = null;\n    function dfs(node) {\n        if (!node) return;\n        dfs(node.left);\n        if (pre === p) res = node;\n        pre = node;\n        dfs(node.right);\n    }\n    return dfs(root), res;\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.png",src:n(43865).Z,width:"583",height:"248"})))}s.isMDXComponent=!0},43865:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/b5d0beb22829d2df8f719658b7329b69-01bbb5b7b66842821853aaf65eb88bc7.png"}}]);