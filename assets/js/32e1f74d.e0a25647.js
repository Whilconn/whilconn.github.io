"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[1495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),k=r,f=s["".concat(u,".").concat(k)]||s[k]||d[k]||a;return n?l.createElement(f,o(o({ref:t},p),{},{components:n})):l.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},45101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u94fe\u8868"],date:new Date("2021-12-16T00:00:00.000Z")},o=void 0,i={permalink:"/algorithm/2021/12/16/\u5251\u6307 Offer II 029.\u6392\u5e8f\u7684\u5faa\u73af\u94fe\u8868",source:"@site/algorithm/2021/12/16/\u5251\u6307 Offer II 029.\u6392\u5e8f\u7684\u5faa\u73af\u94fe\u8868.md",title:"\u5251\u6307 Offer II 029.\u6392\u5e8f\u7684\u5faa\u73af\u94fe\u8868",description:"1\u3001\u9898\u5e72",date:"2021-12-16T00:00:00.000Z",formattedDate:"2021\u5e7412\u670816\u65e5",tags:[{label:"\u94fe\u8868",permalink:"/algorithm/tags/\u94fe\u8868"}],readingTime:2.755,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u94fe\u8868"],date:"2021-12-16T00:00:00.000Z"},prevItem:{title:"\u5251\u6307 Offer II 028.\u5c55\u5e73\u591a\u7ea7\u53cc\u5411\u94fe\u8868",permalink:"/algorithm/2021/12/16/\u5251\u6307 Offer II 028.\u5c55\u5e73\u591a\u7ea7\u53cc\u5411\u94fe\u8868"},nextItem:{title:"630.\u8bfe\u7a0b\u8868 III",permalink:"/algorithm/2021/12/14/630.\u8bfe\u7a0b\u8868 III"}},u={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a",(0,r.kt)("strong",null,"\u5faa\u73af\u5355\u8c03\u975e\u9012\u51cf\u5217\u8868"),"\u4e2d\u7684\u4e00\u4e2a\u70b9\uff0c\u5199\u4e00\u4e2a\u51fd\u6570\u5411\u8fd9\u4e2a\u5217\u8868\u4e2d\u63d2\u5165\u4e00\u4e2a\u65b0\u5143\u7d20\xa0",(0,r.kt)("code",null,"insertVal")," \uff0c\u4f7f\u8fd9\u4e2a\u5217\u8868\u4ecd\u7136\u662f\u5faa\u73af\u5347\u5e8f\u7684\u3002"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u7684\u53ef\u4ee5\u662f\u8fd9\u4e2a\u5217\u8868\u4e2d\u4efb\u610f\u4e00\u4e2a\u9876\u70b9\u7684\u6307\u9488\uff0c\u5e76\u4e0d\u4e00\u5b9a\u662f\u8fd9\u4e2a\u5217\u8868\u4e2d\u6700\u5c0f\u5143\u7d20\u7684\u6307\u9488\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u6ee1\u8db3\u6761\u4ef6\u7684\u63d2\u5165\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u4e00\u4e2a\u4f4d\u7f6e\u63d2\u5165\u65b0\u7684\u503c\uff0c\u63d2\u5165\u540e\u6574\u4e2a\u5217\u8868\u4ecd\u7136\u4fdd\u6301\u6709\u5e8f\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5217\u8868\u4e3a\u7a7a\uff08\u7ed9\u5b9a\u7684\u8282\u70b9\u662f ",(0,r.kt)("code",null,"null"),"\uff09\uff0c\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u5faa\u73af\u6709\u5e8f\u5217\u8868\u5e76\u8fd4\u56de\u8fd9\u4e2a\u8282\u70b9\u3002\u5426\u5219\u3002\u8bf7\u8fd4\u56de\u539f\u5148\u7ed9\u5b9a\u7684\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2019/01/19/example_1_before_65p.jpg"}),(0,r.kt)("br",null),"\xa0"),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"head = [3,4,1], insertVal = 2",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[3,4,1,2]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5728\u4e0a\u56fe\u4e2d\uff0c\u6709\u4e00\u4e2a\u5305\u542b\u4e09\u4e2a\u5143\u7d20\u7684\u5faa\u73af\u6709\u5e8f\u5217\u8868\uff0c\u4f60\u83b7\u5f97\u503c\u4e3a 3 \u7684\u8282\u70b9\u7684\u6307\u9488\uff0c\u6211\u4eec\u9700\u8981\u5411\u8868\u4e2d\u63d2\u5165\u5143\u7d20 2 \u3002\u65b0\u63d2\u5165\u7684\u8282\u70b9\u5e94\u8be5\u5728 1 \u548c 3 \u4e4b\u95f4\uff0c\u63d2\u5165\u4e4b\u540e\uff0c\u6574\u4e2a\u5217\u8868\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6700\u540e\u8fd4\u56de\u8282\u70b9 3 \u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2019/01/19/example_1_after_65p.jpg"}),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"head = [], insertVal = 1",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[1]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5217\u8868\u4e3a\u7a7a\uff08\u7ed9\u5b9a\u7684\u8282\u70b9\u662f ",(0,r.kt)("code",null,"null"),"\uff09\uff0c\u521b\u5efa\u4e00\u4e2a\u5faa\u73af\u6709\u5e8f\u5217\u8868\u5e76\u8fd4\u56de\u8fd9\u4e2a\u8282\u70b9\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"head = [1], insertVal = 0",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[1,0]",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"0 <= Number of Nodes <= 5 * 10^4")),(0,r.kt)("li",null,(0,r.kt)("code",null,(0,r.kt)("font",{face:"monospace"},"-10^6 <= Node.val <= 10^6"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"-10^6 <=\xa0insertVal <= 10^6"))),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 708\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,r.kt)("a",{href:"https://leetcode-cn.com/problems/insert-into-a-sorted-circular-linked-list/"},"https://leetcode-cn.com/problems/insert-into-a-sorted-circular-linked-list/")),(0,r.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.png",src:n(75663).Z,width:"1360",height:"508"})),(0,r.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001head\u4e3a\u7a7a\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u94fe\u8868\u8fd4\u56de\u5373\u53ef"),(0,r.kt)("li",{parentName:"ul"},"2\u3001head\u4e0d\u4e3a\u7a7a\uff0c\u5728\u4e2d\u95f4\u4f4d\u7f6e\uff08\u5373",(0,r.kt)("inlineCode",{parentName:"li"},"node.next.val >= insertVal >= node.val"),"\uff09\u63d2\u5165\u65b0\u8282\u70b9"),(0,r.kt)("li",{parentName:"ul"},"3\u3001head\u4e0d\u4e3a\u7a7a\uff0c\u6ca1\u6709\u4e2d\u95f4\u4f4d\u7f6e\uff0c\u5219\u904d\u5386\u4e00\u8f6e\u627e\u5230\u6700\u5927\u503c\u8282\u70b9\uff0c\u5728\u6700\u5927\u503c\u8282\u70b9\u540e\u65b9\u63d2\u5165\u65b0\u8282\u70b9")),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var insert = function (head, val) {\n    let node = head, maxNode = head;\n    while (node) {\n        if (node.val >= maxNode.val) maxNode = node;\n        if (val >= node.val && val <= node.next.val) break;\n        if (head === node.next) { node = maxNode; break; }\n        node = node.next;\n    }\n    if (node) node.next = new Node(val, node.next);\n\n    if (!head) head = new Node(val), head.next = head;\n    return head;\n};\n")))}s.isMDXComponent=!0},75663:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/669e55a10f61e12983bff92685cefdc1-20cb8a9ecd8f58eaedb3b70da44d66c0.png"}}]);