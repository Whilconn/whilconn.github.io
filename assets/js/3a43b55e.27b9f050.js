"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[75829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,d=c["".concat(u,".").concat(s)]||c[s]||m[s]||a;return n?l.createElement(d,o(o({ref:t},k),{},{components:n})):l.createElement(d,o({ref:t},k))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u94fe\u8868","\u53cc\u5411\u94fe\u8868"],date:"2021/12/16"},o=void 0,i={permalink:"/algorithm/\u5251\u6307 Offer II 028.\u5c55\u5e73\u591a\u7ea7\u53cc\u5411\u94fe\u8868",source:"@site/algorithm/\u5251\u6307 Offer II 028.\u5c55\u5e73\u591a\u7ea7\u53cc\u5411\u94fe\u8868.md",title:"\u5251\u6307 Offer II 028.\u5c55\u5e73\u591a\u7ea7\u53cc\u5411\u94fe\u8868",description:"1\u3001\u9898\u5e72",date:"2021-12-16T00:00:00.000Z",formattedDate:"2021\u5e7412\u670816\u65e5",tags:[{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u94fe\u8868",permalink:"/algorithm/tags/\u94fe\u8868"},{label:"\u53cc\u5411\u94fe\u8868",permalink:"/algorithm/tags/\u53cc\u5411\u94fe\u8868"}],readingTime:2.945,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u94fe\u8868","\u53cc\u5411\u94fe\u8868"],date:"2021/12/16"},prevItem:{title:"\u5251\u6307 Offer II 035.\u6700\u5c0f\u65f6\u95f4\u5dee",permalink:"/algorithm/\u5251\u6307 Offer II 035.\u6700\u5c0f\u65f6\u95f4\u5dee"},nextItem:{title:"\u5251\u6307 Offer II 029.\u6392\u5e8f\u7684\u5faa\u73af\u94fe\u8868",permalink:"/algorithm/\u5251\u6307 Offer II 029.\u6392\u5e8f\u7684\u5faa\u73af\u94fe\u8868"}},u={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],k={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u591a\u7ea7\u53cc\u5411\u94fe\u8868\u4e2d\uff0c\u9664\u4e86\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\u548c\u524d\u4e00\u4e2a\u8282\u70b9\u6307\u9488\u4e4b\u5916\uff0c\u5b83\u8fd8\u6709\u4e00\u4e2a\u5b50\u94fe\u8868\u6307\u9488\uff0c\u53ef\u80fd\u6307\u5411\u5355\u72ec\u7684\u53cc\u5411\u94fe\u8868\u3002\u8fd9\u4e9b\u5b50\u5217\u8868\u4e5f\u53ef\u80fd\u4f1a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u81ea\u5df1\u7684\u5b50\u9879\uff0c\u4f9d\u6b64\u7c7b\u63a8\uff0c\u751f\u6210\u591a\u7ea7\u6570\u636e\u7ed3\u6784\uff0c\u5982\u4e0b\u9762\u7684\u793a\u4f8b\u6240\u793a\u3002"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4f4d\u4e8e\u5217\u8868\u7b2c\u4e00\u7ea7\u7684\u5934\u8282\u70b9\uff0c\u8bf7\u6241\u5e73\u5316\u5217\u8868\uff0c\u5373\u5c06\u8fd9\u6837\u7684\u591a\u7ea7\u53cc\u5411\u94fe\u8868\u5c55\u5e73\u6210\u666e\u901a\u7684\u53cc\u5411\u94fe\u8868\uff0c\u4f7f\u6240\u6709\u7ed3\u70b9\u51fa\u73b0\u5728\u5355\u7ea7\u53cc\u94fe\u8868\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," head = ","[","1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","1,2,3,7,8,11,12,9,10,4,5,6","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,r.kt)("br",null),"\n\u8f93\u5165\u7684\u591a\u7ea7\u5217\u8868\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{src:n(7905).Z,width:"1341",height:"761"}),(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6241\u5e73\u5316\u540e\u7684\u94fe\u8868\u5982\u4e0b\u56fe\uff1a",(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{src:n(44945).Z,width:"2781",height:"201"}),(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," head = ","[","1,2,null,3","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","1,3,2","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8f93\u5165\u7684\u591a\u7ea7\u5217\u8868\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"  1---2---NULL",(0,r.kt)("br",null),"\n|",(0,r.kt)("br",null),"\n3---NULL",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," head = ","[","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","]",(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u5982\u4f55\u8868\u793a\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u7684\u591a\u7ea7\u94fe\u8868\uff1f")," ",(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5 ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1")," \u4e3a\u4f8b\uff1a")),(0,r.kt)("p",null," 1---2---3---4---5---6--NULL\n|\n7---8---9---10--NULL\n|\n11--12--NULL"),(0,r.kt)("p",null,"\u5e8f\u5217\u5316\u5176\u4e2d\u7684\u6bcf\u4e00\u7ea7\u4e4b\u540e\uff1a"),(0,r.kt)("p",null,"[","1,2,3,4,5,6,null","]","\n","[","7,8,9,10,null","]","\n","[","11,12,null","]"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5c06\u6bcf\u4e00\u7ea7\u90fd\u5e8f\u5217\u5316\u5230\u4e00\u8d77\uff0c\u6211\u4eec\u9700\u8981\u6bcf\u4e00\u7ea7\u4e2d\u6dfb\u52a0\u503c\u4e3a null \u7684\u5143\u7d20\uff0c\u4ee5\u8868\u793a\u6ca1\u6709\u8282\u70b9\u8fde\u63a5\u5230\u4e0a\u4e00\u7ea7\u7684\u4e0a\u7ea7\u8282\u70b9\u3002"),(0,r.kt)("p",null,"[","1,2,3,4,5,6,null","]","\n","[","null,null,7,8,9,10,null","]","\n","[","null,11,12,null","]"),(0,r.kt)("p",null,"\u5408\u5e76\u6240\u6709\u5e8f\u5217\u5316\u7ed3\u679c\uff0c\u5e76\u53bb\u9664\u672b\u5c3e\u7684 null \u3002"),(0,r.kt)("p",null,"[","1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12","]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8282\u70b9\u6570\u76ee\u4e0d\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= Node.val <= 10^5"))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 430\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/"},"https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/")),(0,r.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.png",src:n(66657).Z,width:"1362",height:"510"})),(0,r.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6808\u5b58\u50a8\u540e\u7eed\u9700\u8981\u904d\u5386\u7684\u8282\u70b9\uff0c\u5148\u538b\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"node.next"),"\u518d\u538b\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"node.child")),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6808\u5185\u5143\u7d20\u4e0d\u4e3a\u7a7a\u65f6\uff0c\u5f39\u51fa\u6808\u9876\u5143\u7d20\u8fdb\u884c\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d\u8282\u70b9\u5c5e\u4e8e\u4ee5\u4e0b2\u79cd\u60c5\u51b5\u9700\u7279\u6b8a\u5904\u7406\uff08\u4ee3\u7801\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"link()"),"\u51fd\u6570\uff09\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"child"),"\u6709\u503c\uff1a\u5c06\u5f53\u524d\u8282\u70b9\u4e0e\u5b50\u8282\u70b9\u8f6c\u6210\u5144\u5f1f\u8282\u70b9\uff0c\u5e76\u5c06\u5f53\u524d\u8282\u70b9\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"child"),"\u7f6e\u4f4d\u7a7a"),(0,r.kt)("li",{parentName:"ul"},"2\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"next"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"child"),"\u4e3a\u7a7a\u503c\uff1a\u5c06\u5f53\u524d\u8282\u70b9\u4e0e\u6808\u9876\u8282\u70b9\u8f6c\u6210\u5144\u5f1f\u8282\u70b9\uff0c\u5e76\u5c06\u5f53\u524d\u8282\u70b9\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"child"),"\u7f6e\u4f4d\u7a7a")))),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var flatten = function (head) {\n    const link = (cur, next) => (cur.next = next, cur.child = null, next.prev = cur);\n    let node, stack = [head];\n\n    while (node = stack.pop()) {\n        if (node.next) stack.push(node.next);\n        if (node.child) stack.push(node.child), link(node, node.child);\n        if (!node.next && !node.child && stack.length) link(node, stack[stack.length - 1]);\n    }\n\n    return head;\n};\n")))}c.isMDXComponent=!0},66657:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/1639638747-lUPUYk-1-2278f99175e6829c02282f2c3507d6d5.png"},7905:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/multilevellinkedlist-ea7fd37d8b759e9f238043c2f730fabd.png"},44945:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/multilevellinkedlistflattened-ee9e1b62416bf219ae957cf65e71802c.png"}}]);