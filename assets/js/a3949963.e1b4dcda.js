"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[7529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,d=m["".concat(o,".").concat(s)]||m[s]||c[s]||l;return n?r.createElement(d,p(p({ref:t},k),{},{components:n})):r.createElement(d,p({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6808","\u5b57\u7b26\u4e32"],date:"2022/1/6"},p=void 0,i={permalink:"/algorithm/71.\u7b80\u5316\u8def\u5f84",source:"@site/algorithm/71.\u7b80\u5316\u8def\u5f84.md",title:"71.\u7b80\u5316\u8def\u5f84",description:"1\u3001\u9898\u5e72",date:"2022-01-06T00:00:00.000Z",formattedDate:"2022\u5e741\u67086\u65e5",tags:[{label:"\u6808",permalink:"/algorithm/tags/\u6808"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:2.875,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6808","\u5b57\u7b26\u4e32"],date:"2022/1/6"},prevItem:{title:"\u5251\u6307 Offer II 056.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u4e24\u4e2a\u8282\u70b9\u4e4b\u548c",permalink:"/algorithm/\u5251\u6307 Offer II 056.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u4e24\u4e2a\u8282\u70b9\u4e4b\u548c"},nextItem:{title:"\u5251\u6307 Offer II 054.\u6240\u6709\u5927\u4e8e\u7b49\u4e8e\u8282\u70b9\u7684\u503c\u4e4b\u548c",permalink:"/algorithm/\u5251\u6307 Offer II 054.\u6240\u6709\u5927\u4e8e\u7b49\u4e8e\u8282\u70b9\u7684\u503c\u4e4b\u548c"}},o={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51",id:"2\u89e3\u6cd51",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd52",id:"5\u89e3\u6cd52",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u6267\u884c\u7ed3\u679c",id:"7\u6267\u884c\u7ed3\u679c",level:2}],k={toc:u};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," \uff0c\u8868\u793a\u6307\u5411\u67d0\u4e00\u6587\u4ef6\u6216\u76ee\u5f55\u7684\xa0Unix \u98ce\u683c ",(0,a.kt)("strong",{parentName:"p"},"\u7edd\u5bf9\u8def\u5f84")," \uff08\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"'/'")," \u5f00\u5934\uff09\uff0c\u8bf7\u4f60\u5c06\u5176\u8f6c\u5316\u4e3a\u66f4\u52a0\u7b80\u6d01\u7684\u89c4\u8303\u8def\u5f84\u3002"),(0,a.kt)("p",null,"\u5728 Unix \u98ce\u683c\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0c\u4e00\u4e2a\u70b9\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"."),"\uff09\u8868\u793a\u5f53\u524d\u76ee\u5f55\u672c\u8eab\uff1b\u6b64\u5916\uff0c\u4e24\u4e2a\u70b9 \uff08",(0,a.kt)("inlineCode",{parentName:"p"},".."),"\uff09\xa0\u8868\u793a\u5c06\u76ee\u5f55\u5207\u6362\u5230\u4e0a\u4e00\u7ea7\uff08\u6307\u5411\u7236\u76ee\u5f55\uff09\uff1b\u4e24\u8005\u90fd\u53ef\u4ee5\u662f\u590d\u6742\u76f8\u5bf9\u8def\u5f84\u7684\u7ec4\u6210\u90e8\u5206\u3002\u4efb\u610f\u591a\u4e2a\u8fde\u7eed\u7684\u659c\u6760\uff08\u5373\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"'//'"),"\uff09\u90fd\u88ab\u89c6\u4e3a\u5355\u4e2a\u659c\u6760 ",(0,a.kt)("inlineCode",{parentName:"p"},"'/'")," \u3002 \u5bf9\u4e8e\u6b64\u95ee\u9898\uff0c\u4efb\u4f55\u5176\u4ed6\u683c\u5f0f\u7684\u70b9\uff08\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"'...'"),"\uff09\u5747\u88ab\u89c6\u4e3a\u6587\u4ef6/\u76ee\u5f55\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd4\u56de\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u89c4\u8303\u8def\u5f84")," \u5fc5\u987b\u9075\u5faa\u4e0b\u8ff0\u683c\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u59cb\u7ec8\u4ee5\u659c\u6760 ",(0,a.kt)("inlineCode",{parentName:"li"},"'/'")," \u5f00\u5934\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u76ee\u5f55\u540d\u4e4b\u95f4\u5fc5\u987b\u53ea\u6709\u4e00\u4e2a\u659c\u6760 ",(0,a.kt)("inlineCode",{parentName:"li"},"'/'")," \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\u4e00\u4e2a\u76ee\u5f55\u540d\uff08\u5982\u679c\u5b58\u5728\uff09",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u80fd")," \u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"'/'")," \u7ed3\u5c3e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6b64\u5916\uff0c\u8def\u5f84\u4ec5\u5305\u542b\u4ece\u6839\u76ee\u5f55\u5230\u76ee\u6807\u6587\u4ef6\u6216\u76ee\u5f55\u7684\u8def\u5f84\u4e0a\u7684\u76ee\u5f55\uff08\u5373\uff0c\u4e0d\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"'.'")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'..'"),"\uff09\u3002")),(0,a.kt)("p",null,"\u8fd4\u56de\u7b80\u5316\u540e\u5f97\u5230\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u89c4\u8303\u8def\u5f84")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' path = "/home/"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "/home"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6ce8\u610f\uff0c\u6700\u540e\u4e00\u4e2a\u76ee\u5f55\u540d\u540e\u9762\u6ca1\u6709\u659c\u6760\u3002 ",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' path = "/../"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "/"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4ece\u6839\u76ee\u5f55\u5411\u4e0a\u4e00\u7ea7\u662f\u4e0d\u53ef\u884c\u7684\uff0c\u56e0\u4e3a\u6839\u76ee\u5f55\u662f\u4f60\u53ef\u4ee5\u5230\u8fbe\u7684\u6700\u9ad8\u7ea7\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' path = "/home//foo/"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "/home/foo"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u5728\u89c4\u8303\u8def\u5f84\u4e2d\uff0c\u591a\u4e2a\u8fde\u7eed\u659c\u6760\u9700\u8981\u7528\u4e00\u4e2a\u659c\u6760\u66ff\u6362\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' path = "/a/./b/../../c/"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "/c"',(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= path.length <= 3000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," \u7531\u82f1\u6587\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"'.'"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"'/'")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'_'")," \u7ec4\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," \u662f\u4e00\u4e2a\u6709\u6548\u7684 Unix \u98ce\u683c\u7edd\u5bf9\u8def\u5f84\u3002")),(0,a.kt)("h2",{id:"2\u89e3\u6cd51"},"2\u3001\u89e3\u6cd51"),(0,a.kt)("p",null,"\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\u5b57\u7b26\u4e32\u6309",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"\u5206\u5272\u4e3a\u76ee\u5f55\u6570\u7ec4",(0,a.kt)("inlineCode",{parentName:"p"},"dirs"),"\uff0c\u8fc7\u6ee4",(0,a.kt)("inlineCode",{parentName:"p"},"dirs"),"\u4e2d\u7684\u7a7a\u4e32\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"."),"\u53f7\uff1b\u518d\u904d\u5386",(0,a.kt)("inlineCode",{parentName:"p"},"dirs"),"\uff0c\u9047\u5230",(0,a.kt)("inlineCode",{parentName:"p"},".."),"\u5219\u51fa\u6808\uff0c\u53cd\u4e4b\u5165\u6808\uff1b\u6700\u540e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"\u62fc\u63a5\u6808\u4e2d\u5269\u4f59\u76ee\u5f55\u3002"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var simplifyPath = function (path) {\n    const dirs = path.split('/').filter(c => c && c !== '.');\n    return '/' + dirs.reduce((acc, cur) => (cur === '..' ? acc.pop() : acc.push(cur), acc), []).join('/');\n};\n")),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1.png",src:n(41888).Z,width:"1356",height:"490"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"5\u89e3\u6cd52"},"5\u3001\u89e3\u6cd52"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Node.js"),"\u5185\u7f6e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\u6a21\u5757\u89e3\u6790\u8def\u5f84\u3002"),(0,a.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var simplifyPath = function (p) {\n    return require('path').resolve(p);\n};\n")),(0,a.kt)("h2",{id:"7\u6267\u884c\u7ed3\u679c"},"7\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 84 ms   \u5185\u5b58\u6d88\u8017: 39.9 MB")))}m.isMDXComponent=!0},41888:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1641433492-NDvXRY-1-c91b13f9be5da7241ac2ca8a027bb72c.png"}}]);