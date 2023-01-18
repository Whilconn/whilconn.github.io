"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[42675],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,u=m["".concat(o,".").concat(d)]||m[d]||h[d]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(15882),r=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["Chrome","\u6d4f\u89c8\u5668"]},i=void 0,p={permalink:"/blog/2022/12/16/Chrome\u5c06\u5168\u9762\u79fb\u9664Event.path",source:"@site/blog/2022/12/16/Chrome\u5c06\u5168\u9762\u79fb\u9664Event.path.md",title:"Chrome\u5c06\u5168\u9762\u79fb\u9664Event.path",description:"1\u3001\u80cc\u666f",date:"2022-12-16T00:00:00.000Z",formattedDate:"2022\u5e7412\u670816\u65e5",tags:[{label:"Chrome",permalink:"/blog/tags/chrome"},{label:"\u6d4f\u89c8\u5668",permalink:"/blog/tags/\u6d4f\u89c8\u5668"}],readingTime:7.18,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["Chrome","\u6d4f\u89c8\u5668"]},nextItem:{title:"\u8c03\u8bd5\u5206\u6790yarn\u5b58\u57286\u5e74\u7684bug",permalink:"/blog/2022/11/04/\u8c03\u8bd5\u5206\u6790yarn\u5b58\u57286\u5e74\u7684bug"}},o={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u80cc\u666f",id:"1\u80cc\u666f",level:2},{value:"2\u3001\u8fdb\u4e00\u6b65\u6392\u67e5",id:"2\u8fdb\u4e00\u6b65\u6392\u67e5",level:2},{value:"3\u3001chromium issue \u7684\u52a9\u653b",id:"3chromium-issue-\u7684\u52a9\u653b",level:2},{value:"4\u3001\u53d8\u66f4\u8be6\u60c5\u548c\u8ba1\u5212",id:"4\u53d8\u66f4\u8be6\u60c5\u548c\u8ba1\u5212",level:2},{value:"5\u3001\u9a8c\u8bc1",id:"5\u9a8c\u8bc1",level:2},{value:"6\u3001\u89e3\u51b3\u65b9\u6848",id:"6\u89e3\u51b3\u65b9\u6848",level:2}],s={toc:c};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u80cc\u666f"},"1\u3001\u80cc\u666f"),(0,r.kt)("p",null,"\u524d\u4e24\u5929\u4e0b\u5348\uff0c\u6d4b\u8bd5\u540c\u5b66\u53cd\u9988\u751f\u4ea7\u73af\u5883\u6709\u4e2a\u529f\u80fd\u51fa\u73b0\u5f02\u5e38\uff0c\u7136\u540e\u7ed9\u6211\u53d1\u4e86\u5f20\u62a5\u9519\u622a\u56fe\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(14608).Z,width:"1598",height:"448"})),(0,r.kt)("p",null,"\u968f\u540e\u5728\u6d4b\u8bd5\u540c\u5b66\u7684\u7535\u8111\u590d\u73b0\u5e76\u6392\u67e5\u95ee\u9898\uff0c\u901a\u8fc7\u5f02\u5e38\u65ad\u70b9\uff0c\u6355\u6349\u5230\u5f02\u5e38\u4fe1\u606f\u5982\u4e0b\uff1a\n",(0,r.kt)("img",{alt:"image.png",src:n(386).Z,width:"2322",height:"2092"})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5f02\u5e38\u7684\u539f\u56e0\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"n.path")," \u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u56e0\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"n.path.find")," \u7b49\u4ef7\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined.find"),"\uff0c\u56e0\u6b64\u7a0b\u5e8f\u62a5\u9519\u3002\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," \u5b9e\u4f8b\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"path")," \u662f\u4e8b\u4ef6\u5192\u6ce1\u7ecf\u8fc7\u7684\u8282\u70b9\u7ec4\u6210\u7684\u6570\u7ec4\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"n.path")," \u6709\u503c\u7684\u60c5\u51b5\u5982\u4e0b\uff1a\n",(0,r.kt)("img",{alt:"image.png",src:n(98829).Z,width:"2212",height:"2062"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Event.path")," \u4e0d\u662f\u6807\u51c6\u5c5e\u6027\uff0c\u5e38\u89c1\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome")," \u6d4f\u89c8\u5668\uff0c\u53d6\u4e0d\u5230\u503c\u51fa\u73b0\u5f02\u5e38\u4e0d\u8db3\u4e3a\u5947\uff0c\u53ea\u8981\u505a\u4e2a\u517c\u5bb9\u5c31\u641e\u5b9a\u4e86\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.path")," \u53d6\u4e0d\u5230\u503c\u65f6\u5c31\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.composedPath()"),"\u3002\u90a3\u8fd9\u662f\u517c\u5bb9\u6027\u95ee\u9898\u5417\uff0c\u4e8b\u60c5\u597d\u50cf\u6ca1\u6709\u8fd9\u4e48\u7b80\u5355\u3002\u4ed4\u7ec6\u5bf9\u6bd4\u4e0a\u8ff0\u4e24\u5f20\u622a\u56fe\u53ef\u4ee5\u53d1\u73b0\uff0c\u5f02\u5e38\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," \u5b9e\u4f8b\u751a\u81f3\u4e0d\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," \u5c5e\u6027\uff0c\u8fd9\u8ddf\u5c5e\u6027\u5b58\u5728\u4f46\u503c\u4e3a\u7a7a\u662f\u4e24\u7801\u4e8b\u3002"),(0,r.kt)("h2",{id:"2\u8fdb\u4e00\u6b65\u6392\u67e5"},"2\u3001\u8fdb\u4e00\u6b65\u6392\u67e5"),(0,r.kt)("p",null,"\u597d\u597d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," \u5c5e\u6027\u600e\u4e48\u5c31\u4e0d\u7ffc\u800c\u98de\u4e86\uff0c\u8fd9\u662f\u4e2a\u795e\u5947\u7684\u95ee\u9898\u3002\u5f53\u6211\u7528\u81ea\u5df1\u7535\u8111\u5c1d\u8bd5\u590d\u73b0\u95ee\u9898\u65f6\uff0c\u53d1\u73b0\u529f\u80fd\u6b63\u5e38\u4e14\u65e0\u6cd5\u590d\u73b0\uff0c\u4e8b\u60c5\u53d8\u5f97\u66f4\u52a0\u795e\u5947\u3002\u4e24\u8fb9\u6d4f\u89c8\u5668\u90fd\u5347\u5230\u4e86\u6700\u65b0\u7248 chrome 108\uff0c\u533a\u522b\u662f\u7cfb\u7edf\u4e0d\u540c\uff0c\u4e00\u4e2a\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"windows")," \u4e00\u4e2a\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"macOS"),"\u3002\u4e5f\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u540c\u6837\u7684\u4ee3\u7801\u5728\u540c\u6837\u7684\u8f6f\u4ef6\u4e0a\u8dd1\u51fa\u4e86\u4e0d\u540c\u7ed3\u679c\uff0c\u8fd9\u8bf4\u660e\u53ef\u80fd\u4e0d\u662f\u4ee3\u7801\u6216\u517c\u5bb9\u6027\u95ee\u9898\u3002")),(0,r.kt)("p",null,"\u4e3a\u627e\u51fa\u771f\u6b63\u7684\u539f\u56e0\uff0c\u6211\u505a\u4e86\u51e0\u7ec4\u5bf9\u7167\u5b9e\u9a8c\uff0c\u4ee5\u6392\u9664\u4ee3\u7801\u3001\u786c\u4ef6\u3001\u64cd\u4f5c\u7cfb\u7edf\u548c\u6d4f\u89c8\u5668\u7684\u5f71\u54cd\u3002\u60c5\u51b5\u5982\u4e0b \uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("strong",null,"A \u7ec4")),(0,r.kt)("th",null,(0,r.kt)("strong",null,"B \u7ec4")),(0,r.kt)("th",null,(0,r.kt)("strong",null,"\u7ed3\u679c")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"4"},"\u6d4b\u8bd5\u540c\u5b66\u7535\u8111 win10\u3001chrome 108"),(0,r.kt)("td",null,"\u5176\u4ed6\u7535\u8111 win10\u3001chrome 108"),(0,r.kt)("td",{rowspan:"4"},"A \u7ec4\u5f02\u5e38\uff0cB \u7ec4\u6b63\u5e38")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u5176\u4ed6\u7535\u8111 macOS\u3001chrome 108")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u6d4b\u8bd5\u540c\u5b66\u7535\u8111 win10\u3001edge 108")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u6d4b\u8bd5\u540c\u5b66\u7535\u8111 win10\u3001chrome 104")))),(0,r.kt)("p",null,"\u5206\u6790\u8fd9\u4e9b\u7ed3\u679c\uff0c\u51fa\u73b0\u4e86\u66f4\u6709\u610f\u601d\u7684\u4e8b\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u6709\u4e00\u79cd\u60c5\u51b5\u4f1a\u51fa\u73b0\u5f02\u5e38\uff0c\u4f7f\u7528\u6d4b\u8bd5\u540c\u5b66\u7684\u7535\u8111\u4e14\u6d4f\u89c8\u5668\u662f chrome 108\uff1b\u5f53\u6539\u53d8\u7535\u8111\u3001\u7cfb\u7edf\u3001\u6d4f\u89c8\u5668\u3001\u6d4f\u89c8\u5668\u7248\u672c\u7b49\u56e0\u7d20\u65f6\u7ed3\u679c\u90fd\u662f\u6b63\u5e38\u3002")," \u4e5f\u5c31\u662f\u8bf4\u5bfc\u81f4\u5f02\u5e38\u7684\u56e0\u7d20\u5c45\u7136\u4e0d\u662f\u5355\u4e00\u7684\uff0c\u800c\u662f\u591a\u4e2a\u56e0\u7d20\u7ec4\u5408\uff08\u6d4b\u8bd5\u540c\u5b66\u7535\u8111+chrome+108 \u7248\u672c\uff09\u4ea7\u751f\u7684\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"3chromium-issue-\u7684\u52a9\u653b"},"3\u3001chromium issue \u7684\u52a9\u653b"),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u7ed3\u679c\u770b\u597d\u50cf\u6ca1\u529e\u6cd5\u518d\u7ee7\u7eed\u6392\u67e5\u4e0b\u53bb\uff0c\u4e0d\u8fc7\u4ece\u7ecf\u9a8c\u5224\u65ad\uff0c\u591a\u534a\u662f chrome \u53c8\u5728\u641e\u4e8b\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u53bb ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/list"},"chromium issue")," \u91cc\u627e\u627e\u86db\u4e1d\u9a6c\u8ff9\uff0c\u7ecf\u8fc7\u4e00\u756a\u641c\u7d22\u627e\u5230\u4e86\u8fd9\u6761 issue: ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=1277431"},"Issue 1277431: Remove event.path"),"\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(18568).Z,width:"2068",height:"570"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"issue \u6807\u9898\u5f88\u76f4\u767d\uff0c",(0,r.kt)("inlineCode",{parentName:"strong"},"Event.path")," \u5c06\u88ab\u5220\u9664\u3002")," \u4ece issue \u5185\u5bb9\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u6b21\u641e\u4e8b\u662f\u4ece 2021 \u5e74 12 \u6708 7 \u65e5\u5f00\u59cb\uff0c\u8d77\u56e0\u662f chromium \u5f00\u53d1\u56e2\u961f\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.path")," \u5c5e\u4e8e\u975e\u6807\u51c6 API\uff0c\u4f1a\u5bfc\u81f4 Firefox \u7b49\u5176\u4ed6\u6d4f\u89c8\u5668\u7684\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u4e8e\u662f\u4ed6\u4eec\u51b3\u5b9a\u5c06\u5176\u5220\u9664\u3002\u76ee\u524d\u8fd9\u4e2a\u53d8\u66f4\u5728 chrome 108 \u5c5e\u4e8e\u7070\u5ea6\u9636\u6bb5\uff0c\u5728\u5373\u5c06\u53d1\u5e03\u7684 chrome 109 \u4e0a\u4f1a\u5168\u9762\u5e94\u7528\uff0cwebview \u5219\u662f\u4ece 109 \u7248\u672c\u5f00\u59cb\u9010\u6b65\u7981\u7528\u3002"),(0,r.kt)("h2",{id:"4\u53d8\u66f4\u8be6\u60c5\u548c\u8ba1\u5212"},"4\u3001\u53d8\u66f4\u8be6\u60c5\u548c\u8ba1\u5212"),(0,r.kt)("p",null,"\u53e6\u5916 issue \u4e2d\u63d0\u5230\u8fd9\u4e2a\u53d8\u66f4\u4f1a\u5728 console \u4e2d\u8fdb\u884c\u544a\u8b66\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(59906).Z,width:"1412",height:"584"})),(0,r.kt)("p",null,"console \u4e2d\u786e\u5b9e\u6709\u8fd9\u4e2a\u544a\u8b66\uff0c\u4e0d\u8fc7\u85cf\u5728 console \u9762\u677f\u7684\u53f3\u4e0a\u89d2\uff0c\u4e0d\u592a\u5bb9\u6613\u53d1\u73b0\uff0c\u800c\u4e14\u9700\u8981\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.path")," \u540e\u624d\u4f1a\u663e\u793a\u3002\u70b9\u8fdb\u53bb\u4e4b\u540e\u4f1a\u8df3\u8f6c\u5230 Issues \u9762\u677f\u5e76\u663e\u793a\u8be6\u7ec6\u4fe1\u606f\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(55280).Z,width:"1510",height:"236"}),"\n",(0,r.kt)("img",{alt:"image.png",src:n(78907).Z,width:"1588",height:"794"})),(0,r.kt)("p",null,"\u4ece\u56fe\u4e2d\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u53d8\u66f4\u5c5e\u4e8e Breaking Change\uff0c\u5373\u7834\u574f\u6027\u53d8\u66f4\u3002\u53e6\u5916\u53ef\u4ee5\u770b\u5230",(0,r.kt)("a",{parentName:"p",href:"https://chromestatus.com/feature/5726124632965120"},"\u53d8\u66f4\u8be6\u60c5\u94fe\u63a5"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://chromiumdash.appspot.com/schedule"},"\u7248\u672c\u8ba1\u5212\u94fe\u63a5"),"\u3002\u6253\u5f00\u53d8\u66f4\u8be6\u60c5\u94fe\u63a5\u53ef\u4ee5\u770b\u5230\u8be6\u7ec6\u7684\u8bf4\u660e\u3001\u76ee\u7684\u3001\u72b6\u6001\u3001\u5f00\u53d1\u9636\u6bb5\u7b49\u4fe1\u606f\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(53503).Z,width:"1812",height:"1710"})),(0,r.kt)("p",null,"\u6253\u5f00\u7248\u672c\u8ba1\u5212\u94fe\u63a5\u53ef\u4ee5\u770b\u5230\uff0cchrome 108 \u5df2\u7ecf\u5728 2022-11-29 \u6b63\u5f0f\u53d1\u5e03\uff08Stable Release Tue, Nov 29, 2022\uff09\uff0cchrome 109 \u5c06\u5728 2023-01-10 \u6b63\u5f0f\u53d1\u5e03\uff08Stable Release Tue, Jan 10, 2023\uff09\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(83131).Z,width:"1692",height:"1382"})),(0,r.kt)("h2",{id:"5\u9a8c\u8bc1"},"5\u3001\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u7531\u4e8e\u82f1\u6587\u6c34\u5e73\u6709\u9650\uff0c\u4e3a\u4e86\u907f\u514d\u4e2a\u4eba\u7406\u89e3\u5b58\u5728\u6b67\u4e49\uff0c\u4f7f\u7528 chrome \u7684\u524d\u77bb\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4ee5\u9a8c\u8bc1 chrome 108 \u4e4b\u540e\u7684\u7248\u672c\u662f\u5426\u771f\u7684\u4f1a\u5e94\u7528\u8fd9\u4e2a\u53d8\u66f4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u4f7f\u7528\u7684\u7cfb\u7edf\u4e3a macOS\uff0c\u6d4f\u89c8\u5668\u7248\u672c\u5305\u62ec\uff1achrome-stable\uff08108.0.5359.124\uff09\u3001chrome-beta\uff08109.0.5414.36\uff09\u3001chrome-dev\uff08110.0.5464.2\uff09\u3001chrome-canary\uff08110.0.5477.0\uff09\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(24427).Z,width:"2224",height:"1056"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u4ee3\u7801\u5982\u4e0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head></head>\n  <body>\n    <script>\n      function test() {\n        console.log("event.path is:", window.event.path);\n      }\n    <\/script>\n    <h1 onclick="test()">click me</h1>\n  </body>\n</html>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b")),(0,r.kt)("p",null,"chrome-stable\uff08108.0.5359.124\uff09\u5728 macOS \u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.path")," \u6709\u503c\uff0c\u7ed3\u5408\u4e0a\u6587\u7684\u5bf9\u7167\u5b9e\u9a8c\u4e2d windows10 \u4e0b\u4e00\u4e2a\u6709\u503c\u4e00\u4e2a\u4e3a\u7a7a\u3002\u8bf4\u660e chrome 108 \u4e2d\u8be5\u53d8\u66f4\u5c5e\u4e8e\u7070\u5ea6\u9636\u6bb5\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(4532).Z,width:"1778",height:"542"})),(0,r.kt)("p",null,"chrome-beta\uff08109.0.5414.36\uff09\u3001chrome-dev\uff08110.0.5464.2\uff09\u3001chrome-canary\uff08110.0.5477.0\uff09\u5728 macOS \u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.path")," \u90fd\u4e3a\u7a7a\uff0c\u8bf4\u660e chrome 109 \u4e4b\u540e\u5168\u9762\u5220\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.path")," \u5c5e\u6027\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(55846).Z,width:"1246",height:"312"})),(0,r.kt)("h2",{id:"6\u89e3\u51b3\u65b9\u6848"},"6\u3001\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u5148\u770b\u5f71\u54cd\u8303\u56f4\uff0c\u4ece\u9879\u76ee\u7ef4\u5ea6\u6765\u770b\uff0c\u6240\u6709\u524d\u7aef\u9879\u76ee\u90fd\u53ef\u80fd\u53d7\u5230\u5f71\u54cd\uff1b\u4ece\u4ee3\u7801\u7ef4\u5ea6\u6765\u770b\uff0c\u9879\u76ee\u6e90\u7801\u548c\u7b2c\u4e09\u65b9\u4f9d\u8d56\u90fd\u53ef\u80fd\u53d7\u5f71\u54cd\u3002\u5728 github \u4e2d\u641c\u7d22\u53d1\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"swipper"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"openlayers")," \u7b49\u7b2c\u4e09\u65b9\u5e93\u4e2d\u90fd\u6709\u76f8\u5173 issue\u3002\u56e0\u6b64\u89e3\u51b3\u65b9\u6848\u9700\u8981\u5168\u9762\u8003\u8651\uff1a\u6700\u597d\u5bf9\u6240\u6709\u9879\u76ee\u90fd\u8fdb\u884c\u6392\u67e5\u4fee\u590d\uff0c\u53e6\u5916\u4e0d\u4ec5\u8981\u6392\u67e5\u6e90\u7801\uff0c\u8fd8\u8981\u8003\u8651\u7b2c\u4e09\u65b9\u5e93\u3002"),(0,r.kt)("p",null,"\u6839\u636e\u5b98\u65b9\u5efa\u8bae\u53ca\u7efc\u5408\u8003\u8651\uff0c\u63a8\u8350\u5728\u524d\u7aef\u9879\u76ee\u4e2d\u7edf\u4e00\u6dfb\u52a0\u5982\u4e0b polyfill \u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  Object.defineProperty(Event.prototype, "path", {\n    get() {\n      return this.composedPath();\n    },\n  });\n')),(0,r.kt)("h1",{id:"\u6700\u540e"},"\u6700\u540e"),(0,r.kt)("p",null,"chrome 109 \u9884\u8ba1\u5728 2023-01-10 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5c4a\u65f6\u4f1a\u5168\u9762\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.path"),"\uff0c\u6240\u6709\u6e90\u7801\u4e2d\u4f7f\u7528\u8be5\u5c5e\u6027\u6216\u7b2c\u4e09\u65b9\u5e93\u4f7f\u7528\u8be5\u5c5e\u6027\u7684\u524d\u7aef\u9879\u76ee\u90fd\u53ef\u80fd\u4f1a\u51fa\u73b0\u5f02\u5e38\uff0c\u8fd8\u6709 20 \u51e0\u5929\u65f6\u95f4\uff0c\u5efa\u8bae\u5c3d\u5feb\u6392\u67e5\u4fee\u590d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e9b\u7ecf\u9a8c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5173\u6ce8 devtools \u4e2d\u7684 console\u3001issue \u7b49\u5404\u79cd\u544a\u8b66\u4fe1\u606f\uff0c\u6709\u52a9\u4e8e\u8c03\u8bd5\u548c\u6392\u67e5\u95ee\u9898\u3001\u4ee5\u53ca\u53d1\u73b0\u6f5c\u5728\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u5173\u6ce8 ",(0,r.kt)("a",{parentName:"li",href:"https://chromestatus.com/roadmap"},"chorme \u8fed\u4ee3\u8ba1\u5212"),"\uff0c\u6709\u6761\u4ef6\u53ef\u4ee5\u505a\u524d\u77bb\u6027\u6d4b\u8bd5\uff0c\u9884\u9632\u672a\u6765\u53ef\u80fd\u53d1\u751f\u7684\u5f02\u5e38")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(38057).Z,width:"3144",height:"1942"})))}m.isMDXComponent=!0},53503:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671017225815-fd04fe34-6fb4-4182-baf1-a2236c8b1732-f78299af82f7b45ece75f6f0bfb27852.png"},83131:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671017377618-e227aa4b-8e72-464f-ac8f-c8ac14919a1a-117a04ab24fe8cd02c0f22dc4467443b.png"},78907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671017947543-df28d677-1aa1-4073-9aea-6f085aa79a8d-19a91d466a1c7f86a05d5ee47a1e0c11.png"},55846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671018942700-d3a79445-8d50-4b9b-9996-8cb1699d3228-c7c2de22c02cf4ad7a93feacac33dd07.png"},24427:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671019312532-a439a90b-108e-4e49-87f6-6df2007ca187-35b2a54603cab5273cf7dedf6d31102a.png"},4532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671019349391-796b81ac-1b12-4cd3-bc26-f2cc1adf139f-64567c47cc57c28ad985b1f6329623f5.png"},14608:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671084565670-00d6056c-e4f7-40bf-aafa-569d1283fc10-dc0ebfce6f70689e18eb6a280be05879.png"},386:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671084877437-0bb90a73-c34b-4637-b0d7-57a73f8e6390-e9941efbe45be98e07b3724c30d24f11.png"},98829:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671085450703-3a204885-f73d-4b3a-a073-4505de58e5b8-cd0505937883c2054a889650fb7d234d.png"},18568:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671161458797-bbb1715e-d9cd-4c24-b5eb-90f8f4bf3413-1498158eeaeab63ee6b54134a5b25dc5.png"},55280:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671162523013-a1b7ad44-2ec9-4c7e-9912-36b21118b353-a59243f0b94fbe9a6f28f3068c3d5e96.png"},59906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671162608341-44c43fb2-b65d-46d0-91f9-7581b3ee173f-4e928c31f8b7fba39eb4170d3304e73c.png"},38057:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1671170175115-12bb34ed-9595-4a96-8560-f00b6cce61c3-bfa3c4614bed6f314f26cf8a52126954.png"}}]);