"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[73420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,g=c["".concat(o,".").concat(m)]||c[m]||k[m]||i;return n?a.createElement(g,p(p({ref:t},d),{},{components:n})):a.createElement(g,p({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,p=new Array(i);p[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[c]="string"==typeof e?e:l,p[1]=r;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const i={authors:["Whilconn"],tags:["yarn","Node.js","\u8c03\u8bd5"]},p=void 0,r={permalink:"/blog/2022/11/04/\u8c03\u8bd5\u5206\u6790yarn\u5b58\u57286\u5e74\u7684bug",source:"@site/blog/2022/11/04/\u8c03\u8bd5\u5206\u6790yarn\u5b58\u57286\u5e74\u7684bug.md",title:"\u8c03\u8bd5\u5206\u6790yarn\u5b58\u57286\u5e74\u7684bug",description:"1\u3001\u95ee\u9898\u63cf\u8ff0",date:"2022-11-04T00:00:00.000Z",formattedDate:"2022\u5e7411\u67084\u65e5",tags:[{label:"yarn",permalink:"/blog/tags/yarn"},{label:"Node.js",permalink:"/blog/tags/node-js"},{label:"\u8c03\u8bd5",permalink:"/blog/tags/\u8c03\u8bd5"}],readingTime:8.47,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["yarn","Node.js","\u8c03\u8bd5"]},prevItem:{title:"Chrome\u5c06\u5168\u9762\u79fb\u9664Event.path",permalink:"/blog/2022/12/16/Chrome\u5c06\u5168\u9762\u79fb\u9664Event.path"},nextItem:{title:"\u6d4f\u89c8\u5668\u4ee3\u7406",permalink:"/blog/2022/06/20/\u6d4f\u89c8\u5668\u4ee3\u7406"}},o={authorsImageUrls:[void 0]},s=[{value:"1\u3001\u95ee\u9898\u63cf\u8ff0",id:"1\u95ee\u9898\u63cf\u8ff0",level:2},{value:"2\u3001\u95ee\u9898\u6392\u67e5",id:"2\u95ee\u9898\u6392\u67e5",level:2},{value:"2.1\u3001\u5173\u952e\u8bcd\u641c\u7d22",id:"21\u5173\u952e\u8bcd\u641c\u7d22",level:3},{value:"2.1.1\u3001\u641c\u7d22 github",id:"211\u641c\u7d22-github",level:4},{value:"2.1.2\u3001\u641c\u7d22\u4ee3\u7801",id:"212\u641c\u7d22\u4ee3\u7801",level:4},{value:"2.2\u3001\u7a0b\u5e8f\u8c03\u8bd5",id:"22\u7a0b\u5e8f\u8c03\u8bd5",level:3},{value:"2.2.1\u3001\u786e\u5b9a\u8c03\u8bd5\u547d\u4ee4",id:"221\u786e\u5b9a\u8c03\u8bd5\u547d\u4ee4",level:4},{value:"2.2.2\u3001\u5f00\u59cb\u8c03\u8bd5",id:"222\u5f00\u59cb\u8c03\u8bd5",level:4},{value:"2.2.3\u3001\u6df1\u5165\u6392\u67e5",id:"223\u6df1\u5165\u6392\u67e5",level:4},{value:"3\u3001\u786e\u5b9a\u539f\u56e0",id:"3\u786e\u5b9a\u539f\u56e0",level:2},{value:"4\u3001\u89e3\u51b3\u65b9\u6848",id:"4\u89e3\u51b3\u65b9\u6848",level:2},{value:"4.1\u3001\u4f18\u5316\u7f51\u7edc",id:"41\u4f18\u5316\u7f51\u7edc",level:3},{value:"4.2\u3001\u8c03\u6574\u8d85\u65f6\u65f6\u95f4",id:"42\u8c03\u6574\u8d85\u65f6\u65f6\u95f4",level:3},{value:"4.3\u3001\u8df3\u8fc7\u68c0\u67e5\u66f4\u65b0",id:"43\u8df3\u8fc7\u68c0\u67e5\u66f4\u65b0",level:3},{value:"5\u3001\u6700\u540e",id:"5\u6700\u540e",level:2}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u95ee\u9898\u63cf\u8ff0"},"1\u3001\u95ee\u9898\u63cf\u8ff0"),(0,l.kt)("p",null,"\u6700\u8fd1\u63a5\u624b\u7684\u51e0\u4e2a\u9879\u76ee\u7528\u7684\u5305\u7ba1\u7406\u5668\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn@v1.22.19"),"\uff0c\u5728\u5b89\u88c5\u4f9d\u8d56\u540e\u65e0\u8bba\u662f\u5426\u6210\u529f\uff0c\u603b\u662f\u51fa\u73b0\u7f51\u7edc\u8fde\u63a5\u95ee\u9898\u800c\u4e14\u4f1a\u5361\u5f88\u957f\u65f6\u95f4\uff0c\u7136\u540e\u4f1a\u51fa\u73b0\u51e0\u884c\u8fd9\u6837\u7684\u5f02\u5e38\u65e5\u5fd7\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"info There appears to be trouble with your network connection. Retrying..."),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(89272).Z,width:"1588",height:"470"})),(0,l.kt)("p",null,"\u6709\u65f6\u4e00\u4e9b\u795e\u5947\u7684\u5305(\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"node-sass"),")\u51fa\u73b0\u5f02\u5e38\u4f1a\u5bfc\u81f4\u5b89\u88c5\u5931\u8d25\uff0c\u7ed3\u679c\u5361\u4e86\u534a\u5929\u624d\u53d1\u73b0\u5931\u8d25\uff0c\u771f\u7684\u8ba9\u4eba\u5f88\u5d29\u6e83\u3002\u53e6\u5916\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"github")," \u4ed3\u5e93\u4e2d\u6709\u6570\u5341\u6761\u76f8\u5173\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"issue"),"\uff0c\u65f6\u95f4\u8de8\u5ea6\u4ece2016\u5e74\u52302022\u5e74\u8db3\u8db36\u5e74\uff0c\u539f\u56e0\u548c\u65b9\u6848\u4f17\u8bf4\u7eb7\u7ead\u3002\u6211\u5f88\u597d\u5947\u8fd9\u5230\u5e95\u662f\u4e2a\u4ec0\u4e48\u795e\u5947\u7684\u95ee\u9898\u5c45\u71366\u5e74\u90fd\u6ca1\u89e3\u51b3\uff0c\u56e0\u6b64\u51b3\u5b9a\u4e00\u63a2\u7a76\u7adf\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(91863).Z,width:"2096",height:"1270"})),(0,l.kt)("h2",{id:"2\u95ee\u9898\u6392\u67e5"},"2\u3001\u95ee\u9898\u6392\u67e5"),(0,l.kt)("h3",{id:"21\u5173\u952e\u8bcd\u641c\u7d22"},"2.1\u3001\u5173\u952e\u8bcd\u641c\u7d22"),(0,l.kt)("h4",{id:"211\u641c\u7d22-github"},"2.1.1\u3001\u641c\u7d22 github"),(0,l.kt)("p",null,"\u78b0\u5230\u6ca1\u5565\u601d\u8def\u7684\u95ee\u9898\u548c\u62a5\u9519\uff0c\u7b2c\u4e00\u6280\u5de7\u662f\u641c\u5b83\u3002\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"github")," \u4ed3\u5e93\u4e2d\u641c\u7d22\u62a5\u9519\u4fe1\u606f ",(0,l.kt)("inlineCode",{parentName:"p"},"There appears to be trouble with your network connection"),"\uff0c\u53ef\u4ee5\u770b\u5230\u7ed3\u679c\u4e2d\u67091\u4e2a\u76f8\u5173\u4ee3\u7801\u548c91\u4e2a\u76f8\u5173 ",(0,l.kt)("inlineCode",{parentName:"p"},"issue"),"\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"issue")," \u91cc\u627e\u4e86\u4e00\u4f1a\u6ca1\u627e\u5230\u5408\u9002\u7684\u65b9\u6848\uff0c\u63a5\u7740\u8fdb\u5165\u4e0b\u4e00\u6b65\uff1a\u641c\u7d22\u4ee3\u7801\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(81686).Z,width:"2012",height:"514"})),(0,l.kt)("h4",{id:"212\u641c\u7d22\u4ee3\u7801"},"2.1.2\u3001\u641c\u7d22\u4ee3\u7801"),(0,l.kt)("p",null,"\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\u8fd9\u91cc\u76f4\u63a5\u8f6c\u5230\u672c\u5730 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \u7684\u5b89\u88c5\u76ee\u5f55\u8fdb\u884c\u67e5\u627e\u3002\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"vscode")," \u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \u7684\u5b89\u88c5\u76ee\u5f55\uff08\u6211\u7684\u672c\u5730\u76ee\u5f55\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"~/.volta/tools/image/yarn/1.22.19"),"\uff09\uff0c\u5168\u5c40\u641c\u7d22\u5173\u952e\u8bcd ",(0,l.kt)("inlineCode",{parentName:"p"},"There appears to be trouble with your network connection"),"\u3002\u53ef\u4ee5\u770b\u5230\u7ed3\u679c\u540c\u6837\u53ea\u67091\u4e2a\uff0c\u4e0e\u9519\u8bef\u4fe1\u606f\u5173\u8054\u7684\u5173\u952e\u8bcd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"offlineRetrying"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(61335).Z,width:"3178",height:"848"})),(0,l.kt)("p",null,"\u5168\u5c40\u641c\u7d22\u5173\u952e\u8bcd",(0,l.kt)("inlineCode",{parentName:"p"},"offlineRetrying")," \u51712\u5904\u7ed3\u679c\uff0c\u9664\u53bb\u4e0a\u4e00\u6b65\u7684\u7ed3\u679c\u53ea\u67091\u5904\u5f15\u7528\u3002\u8fd9\u91cc\u7684\u4ee3\u7801\u4e3b\u8981\u662f\u629b\u51fa\u5f02\u5e38\u548c\u91cd\u8bd5\uff0c\u6ca1\u6709\u66f4\u591a\u5173\u952e\u8bcd\u53ef\u4ee5\u6316\u6398\u3002\u63a5\u4e0b\u6765\u8fdb\u5165\u8c03\u8bd5\u73af\u8282\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"offlineRetrying")," \u8fd9\u884c\u4ee3\u7801\u524d\u9762\u6253\u4e2a\u65ad\u70b9\uff0c\u8c03\u8bd5\u770b\u770b\u5177\u4f53\u9519\u8bef\u4fe1\u606f\u548c\u4e0a\u4e0b\u6587\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(4355).Z,width:"2458",height:"732"})),(0,l.kt)("h3",{id:"22\u7a0b\u5e8f\u8c03\u8bd5"},"2.2\u3001\u7a0b\u5e8f\u8c03\u8bd5"),(0,l.kt)("h4",{id:"221\u786e\u5b9a\u8c03\u8bd5\u547d\u4ee4"},"2.2.1\u3001\u786e\u5b9a\u8c03\u8bd5\u547d\u4ee4"),(0,l.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\u9700\u8981\u8fd0\u884c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),"\uff0c \u90a3\u8981\u600e\u4e48\u8c03\u8bd5\u5b83\u5462\uff1f",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," \u5305\uff0c\u6267\u884c\u65f6\u5b9e\u9645\u662f\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"node xxx.js"),"\uff0c\u800c\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx.js")," \u4e00\u822c\u914d\u7f6e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/configuring-npm/package-json#bin"},"bin")," \u5b57\u6bb5\u4e2d\u3002\u4ece\u4e0b\u56fe\u53ef\u4ee5\u770b\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \u5bf9\u5e94\u7684\u6587\u4ef6\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"./bin/yarn.js"),"\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\u8fd9\u884c\u8c03\u8bd5\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"node --inspect-brk ~/.volta/tools/image/yarn/1.22.19/bin/yarn.js"),"\u3002\uff08\u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Node.js")," \u7684\u8c03\u8bd5\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/debugging-getting-started/"},"\u5b98\u65b9\u6587\u6863"),"\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(7232).Z,width:"2438",height:"1672"})),(0,l.kt)("h4",{id:"222\u5f00\u59cb\u8c03\u8bd5"},"2.2.2\u3001\u5f00\u59cb\u8c03\u8bd5"),(0,l.kt)("p",null,"\u5148\u5728\u5173\u952e\u8bcd ",(0,l.kt)("inlineCode",{parentName:"p"},"offlineRetrying")," \u6240\u5728\u7684\u4ee3\u7801\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"cli.js:66099"),"\u4e4b\u524d\u6dfb\u52a0 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/debugger"},"debugger")," \u8bed\u53e5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(93076).Z,width:"1716",height:"514"})),(0,l.kt)("p",null,"\u7136\u540e\u56de\u5230\u4e1a\u52a1\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\uff0c\u8fd0\u884c\u8c03\u8bd5\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"node --inspect-brk ~/.volta/tools/image/yarn/1.22.19/bin/yarn.js"),"\u3002\u6b64\u65f6\u7a0b\u5e8f\u6302\u8d77\u7b49\u5f85\u8c03\u8bd5\u5de5\u5177\u8fde\u63a5\uff0c\u5e76\u6253\u5370\u51fa\u4ee5\u4e0b\u65e5\u5fd7\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(14771).Z,width:"2536",height:"284"})),(0,l.kt)("p",null,"\u63a5\u7740\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"chrome")," \u5185\u7f6e\u7684\u8c03\u8bd5\u9875\u9762 ",(0,l.kt)("inlineCode",{parentName:"p"},"chrome://inspect/#devices"),"\uff0c\u627e\u5230\u6587\u4ef6\u8def\u5f84\u76f8\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Target"),"\uff0c\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"inspect"),"\u6309\u94ae\u5f00\u59cb\u8c03\u8bd5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(53336).Z,width:"1848",height:"806"})),(0,l.kt)("p",null,"\u63a5\u7740 ",(0,l.kt)("inlineCode",{parentName:"p"},"chrome")," \u4f1a\u6253\u5f00\u4e00\u4e2a\u72ec\u7acb\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"DevTools")," \u7a97\u53e3\uff0c\u7531\u4e8e\u4f7f\u7528\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"node --inspect-brk")," \u547d\u4ee4\uff0c\u6b64\u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"DevTools")," \u81ea\u52a8\u65ad\u70b9\u5728\u88ab\u8c03\u8bd5\u6587\u4ef6\u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u9700\u8981\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"F8")," \u8df3\u8fc7\u8be5\u65ad\u70b9\u7ee7\u7eed\u6267\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(81241).Z,width:"2320",height:"1220"})),(0,l.kt)("p",null,"\u7b49\u5f85\u4e00\u5c0f\u6bb5\u65f6\u95f4\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"DevTools")," \u505c\u5728\u4e4b\u524d\u6dfb\u52a0\u7684\u65ad\u70b9\u5904\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u662f\u4e00\u4e2a\u8d85\u65f6\u5f02\u5e38\uff0c\u5bfc\u81f4\u5f02\u5e38\u7684\u8bf7\u6c42\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"GET: https://yarnpkg.com/latest-version"),"\u3002\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," \u8bf7\u6c42\u8fd9\u4e2a\u94fe\u63a5\uff0c\u7ed3\u679c\u662f 210s \u8d85\u65f6\u3002\u4f7f\u7528\u4ee3\u7406\u8bbf\u95ee\u8fd9\u4e2a\u94fe\u63a5\u53ef\u4ee5\u6210\u529f\uff0c\u4f46\u662f\u8bf7\u6c42\u88ab\u91cd\u5b9a\u5411\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/latest-version"},"https://classic.yarnpkg.com/latest-version"),"\uff0c\u5176\u8fd4\u56de\u7ed3\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"1.22.19"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(6441).Z,width:"2320",height:"1220"})),(0,l.kt)("p",null,"\u81f3\u6b64\u95ee\u9898\u57fa\u672c\u6e05\u695a\u4e86\uff0c\u4e3b\u8981\u662f\u8bf7\u6c42\u8d85\u65f6\u5e76\u4e14\u591a\u6b21\u91cd\u8bd5\u5bfc\u81f4\u4e86\u6587\u7ae0\u5f00\u5934\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u89c4\u907f\u8fd9\u4e2a\u95ee\u9898\u3002\u5982\u679c\u6392\u67e5\u5230\u6b64\u7ed3\u675f\u5c31\u6ca1\u610f\u601d\u4e86\u3002"),(0,l.kt)("h4",{id:"223\u6df1\u5165\u6392\u67e5"},"2.2.3\u3001\u6df1\u5165\u6392\u67e5"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8fdb\u4e00\u6b65\u4e86\u89e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \u4e3a\u4ec0\u4e48\u8981\u8bf7\u6c42 ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/latest-version"},"https://yarnpkg.com/latest-version"),"\uff0c\u4ee5\u8be5\u94fe\u63a5\u4e3a\u5173\u952e\u8bcd\u5728\u4ee3\u7801\u4e2d\u641c\u7d22\uff0c\u627e\u5230\u4e86\u8fd9\u4e2a\u5173\u952e\u8bcd\u94fe\u6761\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"https://yarnpkg.com/latest-version")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"SELF_UPDATE_VERSION_URL")," ->  ",(0,l.kt)("inlineCode",{parentName:"p"},"_checkUpdate")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"checkUpdate"),"\uff0c\u5b9e\u9645\u8c03\u7528\u5173\u7cfb\u5219\u6b63\u597d\u76f8\u53cd\uff0c\u5177\u4f53\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(17840).Z,width:"3050",height:"718"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(58440).Z,width:"2914",height:"982"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(15578).Z,width:"1850",height:"1612"})),(0,l.kt)("h2",{id:"3\u786e\u5b9a\u539f\u56e0"},"3\u3001\u786e\u5b9a\u539f\u56e0"),(0,l.kt)("p",null,"\u524d\u9762\u5df2\u7ecf\u63a8\u65ad\u51fa\u8d85\u65f6\u94fe\u63a5\u7684\u8c03\u7528\u5173\u7cfb\u662f\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"checkUpdate")," ->  ",(0,l.kt)("inlineCode",{parentName:"p"},"_checkUpdate"),"  ->  ",(0,l.kt)("inlineCode",{parentName:"p"},"SELF_UPDATE_VERSION_URL")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"https://yarnpkg.com/latest-version"),"\uff0c\u518d\u7ed3\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"checkUpdate"),"\u51fd\u6570\u7684\u6ce8\u91ca\u548c\u4ee3\u7801\u6765\u770b\uff0c\u6bcf\u6b21\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \u5b89\u88c5\u547d\u4ee4\u7684\u65f6\u5019\u90fd\u4f1a\u8bf7\u6c42 ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/latest-version"},"https://yarnpkg.com/latest-version"),"\uff0c\u4ece\u800c\u68c0\u67e5\u662f\u5426\u6709\u65b0\u7248\u672c\u9700\u8981\u66f4\u65b0\u3002\u4f46\u662f\u8fd9\u4e2a\u94fe\u63a5\u8bbf\u95ee\u8d85\u65f6\u800c\u4e14\u5931\u8d25\u540e\u4f1a\u91cd\u8bd5\uff0c\u9ed8\u8ba4\u7684\u8d85\u65f6\u65f6\u95f4\u4e3a 30s \u91cd\u8bd5\u6b21\u6570\u4e3a 4 \u6b21\uff0c\u6240\u4ee5\u5b89\u88c5\u5b8c\u6210\u540e\u8fd8\u4f1a\u5361 120s \u7a0b\u5e8f\u624d\u4f1a\u771f\u6b63\u7ed3\u675f\u3002"),(0,l.kt)("h2",{id:"4\u89e3\u51b3\u65b9\u6848"},"4\u3001\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("p",null,"\u5f15\u53d1\u95ee\u9898\u7684\u5173\u952e\u56e0\u7d20\u67093\u4e2a\uff1a\u68c0\u67e5\u66f4\u65b0\u3001\u8d85\u65f6\u3001\u91cd\u8bd5\uff0c\u56e0\u6b64\u53ef\u4ee5\u4ece\u4f18\u5316\u7f51\u7edc\u3001\u8c03\u6574\u8d85\u65f6\u65f6\u95f4\u3001\u8df3\u8fc7\u68c0\u67e5\u66f4\u65b03\u4e2a\u65b9\u5411\u53bb\u89e3\u51b3\u95ee\u9898\uff0c\u4ee5\u4e0b\u67096\u4e2a\u89e3\u51b3\u65b9\u6848\u53ef\u4ee5\u53c2\u8003\u3002"),(0,l.kt)("h3",{id:"41\u4f18\u5316\u7f51\u7edc"},"4.1\u3001\u4f18\u5316\u7f51\u7edc"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u601d\u8def\u5f88\u5bb9\u6613\u60f3\u5230\uff0c\u65e2\u7136\u8bbf\u95ee\u8d85\u65f6\uff0c\u90a3\u5c31\u63d0\u5347\u8bf7\u6c42\u901f\u5ea6\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u3010\u65b9\u68481\u3011\u4f7f\u7528\u4ee3\u7406\u4f18\u5316\u7f51\u7edc\uff08\u63a8\u8350\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ yarn install --proxy "http://{domain}:{port}" --https-proxy "http://{domain}:{port}"\n')),(0,l.kt)("p",null,"\u4ee5\u6211\u7684\u5f00\u53d1\u73af\u5883\u4e3e\u4f8b\uff0c\u547d\u4ee4\u957f\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ yarn install --proxy "http://10.180.55.191:7890" --https-proxy "http://10.180.55.191:7890"\n')),(0,l.kt)("h3",{id:"42\u8c03\u6574\u8d85\u65f6\u65f6\u95f4"},"4.2\u3001\u8c03\u6574\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u601d\u8def\u6bd4\u8f83\u76f4\u63a5\uff0c\u9002\u7528\u573a\u666f\u66f4\u591a\u4e9b\uff0c\u5982\u679c\u5176\u4ed6\u65b9\u6cd5\u4e0d\u594f\u6548\u53ef\u4ee5\u8bd5\u8bd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u3010\u65b9\u68482\u3011\u4fee\u6539 network-timeout\uff08\u770b\u60c5\u51b5\uff09")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u4e3a 30s \u53ef\u4ee5\u6539\u5c0f\u4e3a 2s\uff0c\u4fee\u6539\u540e\u5f02\u5e38\u4f9d\u7136\u5b58\u5728\uff0c\u4f46\u662f\u53ef\u4ee5\u8ba9\u68c0\u67e5\u66f4\u65b0\u5feb\u901f\u5931\u8d25\u4e0d\u7528\u7b49\u51e0\u5206\u949f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn install --network-timeout 2000\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6709\u4e00\u90e8\u5206\u5f00\u53d1\u8005\u8868\u793a\u51fa\u73b0\u5f02\u5e38\u662f\u56e0\u4e3a\u67d0\u4e9b\u5927\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," \u5305\u5b89\u88c5\u592a\u4e45\u8d85\u8fc7\u4e86\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4 30s\uff0c\u56e0\u6b64\u4e5f\u53ef\u4ee5\u628anetwork-timeout \u6539\u5f97\u66f4\u5927\u907f\u514d\u5f02\u5e38\u3002")),(0,l.kt)("h3",{id:"43\u8df3\u8fc7\u68c0\u67e5\u66f4\u65b0"},"4.3\u3001\u8df3\u8fc7\u68c0\u67e5\u66f4\u65b0"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u601d\u8def\u7684\u89e3\u51b3\u65b9\u6848\u4e3b\u8981\u6765\u81ea ",(0,l.kt)("inlineCode",{parentName:"p"},"checkUpdate")," \u51fd\u6570\u4e2d\u7684\u51e0\u4e2a\u7ec8\u6b62\u6761\u4ef6\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u3010\u65b9\u68483\u3011\u4fee\u6539\u914d\u7f6e\u7981\u6b62\u68c0\u67e5\u66f4\u65b0\uff08\u63a8\u8350\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn config set disable-self-update-check true\n$ yarn install\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u3010\u65b9\u68484\u3011\u4fee\u6539\u914d\u7f6e\u628a\u4e0a\u6b21\u66f4\u65b0\u65f6\u95f4\u8c03\u5230\u767e\u5e74\u540e\uff08\u63a8\u8350\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn config set lastUpdateCheck 1e13\n$ yarn install\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u3010\u65b9\u68485\u3011\u6267\u884c\u547d\u4ee4\u65f6\u7981\u7528\u4ea4\u4e92\u5f0f\u63d0\u793a\uff08\u63a8\u8350\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn install --non-interactive\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u3010\u65b9\u68486\u3011\u4fee\u6539\u4ee3\u7801\u8df3\u8fc7\u68c0\u67e5\u66f4\u65b0\uff08\u4e0d\u63a8\u8350\uff09",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- \u627e\u5230 `yarn` \u7684\u5b89\u88c5\u76ee\u5f55\u6ce8\u91ca `checkUpdate` \u7684\u8c03\u7528\uff0c\u5177\u4f53\u4ee3\u7801\u4f4d\u4e8e `cli.js:7261`\uff0c\u4fee\u6539\u540e\u957f\u8fd9\u6837\uff1a`// this.checkUpdate();`\n- \u4e5f\u53ef\u4ee5\u4fee\u6539\u5176\u4ed6\u53ef\u4ee5\u963b\u65ad `checkUpdate` \u51fd\u6570\u7684\u4ee3\u7801...\n")))),(0,l.kt)("h2",{id:"5\u6700\u540e"},"5\u3001\u6700\u540e"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4e3b\u8981\u662f\u5206\u4eab\u4e00\u4e9b\u95ee\u9898\u5206\u6790\u6392\u67e5\u7684\u7ecf\u9a8c\uff0c\u53e6\u5916\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn install")," \u8d85\u65f6\u5f02\u5e38\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5e0c\u671b\u80fd\u5bf9\u524d\u7aef\u540c\u5b66\u4eec\u6709\u6240\u5e2e\u52a9\u3002"),(0,l.kt)("p",null,"\u5728\u5feb\u5199\u5b8c\u8fd9\u7bc7\u6587\u7ae0\u7684\u65f6\u5019\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/latest-version"},"https://yarnpkg.com/latest-version")," \u5df2\u7ecf\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\uff0c\u4e0d\u77e5\u9053\u8fd8\u4f1a\u4e0d\u4f1a\u6709\u4eba\u518d\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53e6\u5916\u6211\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"github issue")," \u4e2d",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/yarn/issues/8724#issuecomment-1301928867"},"\u56de\u590d"),"\u4e86\u4ee5\u4e0a\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5e0c\u671b\u524d\u7aef\u540c\u5b66\u4eec\u5c11\u53d7\u70b9\u6298\u78e8\uff0c\u4e5f\u5e0c\u671b\u5b98\u65b9\u65e9\u70b9\u4fee\u590d\u8fd9\u4e2a6\u5e74\u9648\u7684\u8001Bug\u3002\ud83e\udd23")))}c.isMDXComponent=!0},89272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667465602823-e505a613-b6d5-4b1f-b4e4-6aa581eb1505-dc4c1ba564a77f018ed03c6450777261.png"},61335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667466290985-54aba65e-02c3-4997-86da-185cfa4d1946-5d2b450db7140fcdf91ace8bd83da1d2.png"},17840:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667467012720-f493ad18-0f14-4e31-ab58-86fd65ca11f4-fd680e87cea8d488e46dff6d80d4749e.png"},58440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667467235239-33a3cc0b-a2b9-402c-a576-30d53a42ac67-ababf9ac994e4730f0f8370ca2da275c.png"},91863:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667528571264-91aece70-f16b-4615-bf27-a5fddb9f05de-c195036ce6b4deeeb0b81198a2639762.png"},81686:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667531533974-7067a2a7-b447-4de3-a163-892d1e0ae1d5-297a937692d6bdb10cfa7c603438ce7d.png"},4355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667532291161-14e3caf9-57e1-411a-8261-7688a68e337f-dd6ad182692e0f6fb89d6917363b1f84.png"},7232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667533468984-cf83c062-3757-4bf5-928e-d11fcb0e63e8-bdcb902e195c316bb4ebd242b6fa7f73.png"},14771:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667537705471-7f8ea271-c21f-43b8-960a-11a36da2e992-f3d7607f77195019f9555e47183df80b.png"},53336:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667537844124-f4cdfd53-1954-4414-a25f-b680fd0dd290-2a61c3458964a55d80dadebf3c7f6136.png"},15578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667538360579-3be45228-346f-4794-af1e-b5875f1f539f-76221b04dcdd268b9ab2b9e4ae7af002.png"},81241:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667540418495-f0a494e5-3892-4382-8e5f-a8e7f43646c0-2e62f82d6929c69d1be89efd6dcb3c53.png"},6441:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667541059130-b1b2e0f1-e474-4008-bf40-793f90b94229-b139ee5a42b580db32c31eddbf802254.png"},93076:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1667541409520-9096816c-c40f-41d3-ba65-55c64c65247f-781352604203e62b82f8ff50bcf569a1.png"}}]);