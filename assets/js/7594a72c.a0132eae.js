"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[70005],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>g});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},k=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),m=u(n),s=l,g=m["".concat(p,".").concat(s)]||m[s]||c[s]||a;return n?r.createElement(g,o(o({ref:e},k),{},{components:n})):r.createElement(g,o({ref:e},k))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44694:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u5b66"],date:"2022/1/18"},o=void 0,i={permalink:"/algorithm/2139.\u5f97\u5230\u76ee\u6807\u503c\u7684\u6700\u5c11\u884c\u52a8\u6b21\u6570",source:"@site/algorithm/2139.\u5f97\u5230\u76ee\u6807\u503c\u7684\u6700\u5c11\u884c\u52a8\u6b21\u6570.md",title:"2139.\u5f97\u5230\u76ee\u6807\u503c\u7684\u6700\u5c11\u884c\u52a8\u6b21\u6570",description:"1\u3001\u9898\u5e72",date:"2022-01-18T00:00:00.000Z",formattedDate:"2022\u5e741\u670818\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"}],readingTime:2.68,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u5b66"],date:"2022/1/18"},prevItem:{title:"2138.\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u82e5\u5e72\u957f\u5ea6\u4e3a k \u7684\u7ec4",permalink:"/algorithm/2138.\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u82e5\u5e72\u957f\u5ea6\u4e3a k \u7684\u7ec4"},nextItem:{title:"2140.\u89e3\u51b3\u667a\u529b\u95ee\u9898",permalink:"/algorithm/2140.\u89e3\u51b3\u667a\u529b\u95ee\u9898"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],k={toc:u};function m(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u4f60\u6b63\u5728\u73a9\u4e00\u4e2a\u6574\u6570\u6e38\u620f\u3002\u4ece\u6574\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u5f00\u59cb\uff0c\u671f\u671b\u5f97\u5230\u6574\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," \u3002"),(0,l.kt)("p",null,"\u5728\u4e00\u6b21\u884c\u52a8\u4e2d\uff0c\u4f60\u53ef\u4ee5\u505a\u4e0b\u8ff0\u4e24\u79cd\u64cd\u4f5c\u4e4b\u4e00\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u9012\u589e"),"\uff0c\u5c06\u5f53\u524d\u6574\u6570\u7684\u503c\u52a0 1\uff08\u5373\uff0c ",(0,l.kt)("inlineCode",{parentName:"li"},"x = x + 1"),"\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u52a0\u500d"),"\uff0c\u4f7f\u5f53\u524d\u6574\u6570\u7684\u503c\u7ffb\u500d\uff08\u5373\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"x = 2 * x"),"\uff09\u3002")),(0,l.kt)("p",null,"\u5728\u6574\u4e2a\u6e38\u620f\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"\u9012\u589e")," \u64cd\u4f5c ",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u610f")," \u6b21\u6570\u3002\u4f46\u662f\u53ea\u80fd\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"\u52a0\u500d")," \u64cd\u4f5c ",(0,l.kt)("strong",{parentName:"p"},"\u81f3\u591a")," ",(0,l.kt)("inlineCode",{parentName:"p"},"maxDoubles")," \u6b21\u3002"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"maxDoubles")," \uff0c\u8fd4\u56de\u4ece 1 \u5f00\u59cb\u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," \u9700\u8981\u7684\u6700\u5c11\u884c\u52a8\u6b21\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," target = 5, maxDoubles = 0",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 4",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4e00\u76f4\u9012\u589e 1 \u76f4\u5230\u5f97\u5230 target \u3002",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," target = 19, maxDoubles = 2",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 7",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6700\u521d\uff0cx = 1 \u3002",(0,l.kt)("br",null),"\n\u9012\u589e 3 \u6b21\uff0cx = 4 \u3002",(0,l.kt)("br",null),"\n\u52a0\u500d 1 \u6b21\uff0cx = 8 \u3002",(0,l.kt)("br",null),"\n\u9012\u589e 1 \u6b21\uff0cx = 9 \u3002",(0,l.kt)("br",null),"\n\u52a0\u500d 1 \u6b21\uff0cx = 18 \u3002",(0,l.kt)("br",null),"\n\u9012\u589e 1 \u6b21\uff0cx = 19 \u3002",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," target = 10, maxDoubles = 4",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 4",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,l.kt)("br",null),"\n\u6700\u521d\uff0cx = 1 \u3002 ",(0,l.kt)("br",null),"\n\u9012\u589e 1 \u6b21\uff0cx = 2 \u3002 ",(0,l.kt)("br",null),"\n\u52a0\u500d 1 \u6b21\uff0cx = 4 \u3002 ",(0,l.kt)("br",null),"\n\u9012\u589e 1 \u6b21\uff0cx = 5 \u3002 ",(0,l.kt)("br",null),"\n\u52a0\u500d 1 \u6b21\uff0cx = 10 \u3002 ",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= target <= 10^9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= maxDoubles <= 100"))),(0,l.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\b\u4f7f\u7528\u8d2a\u5fc3\u7b97\u6cd5\u5012\u5e8f\u5904\u7406\uff0c\u52a0\u500d\u53d8\u6210\u51cf\u534a\uff0c\u9012\u589e\u53d8\u6210\u9012\u51cf"),(0,l.kt)("li",{parentName:"ul"},"\u5148\u6d88\u8017\u6389\u6240\u6709\u51cf\u534a\u6b21\u6570 ",(0,l.kt)("inlineCode",{parentName:"li"},"maxDoubles"),"\uff0c\u6d88\u8017\u8fc7\u7a0b\u4e2d\u5982\u679c\u662f\u5076\u6570\u5219\u51cf\u534a\uff0c\u5982\u679c\u662f\u5947\u6570\u5219\u9012\u51cf\uff0c\u6bcf\u6b21\u6d88\u8017\u6b21\u6570 ",(0,l.kt)("inlineCode",{parentName:"li"},"count")," \u90fd\u52a01"),(0,l.kt)("li",{parentName:"ul"},"\u5269\u4f59\u7684\u64cd\u4f5c\u53ea\u80fd\u662f\u9012\u51cf\uff0c\u9700\u8981\u7684\u64cd\u4f5c\u6b21\u6570\u4e3a\u5269\u4f59\u6574\u6570\u51cf1\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"target - 1")),(0,l.kt)("li",{parentName:"ul"},"\u6700\u540e\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"count + target - 1"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(logn)$"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var minMoves = function (target, maxDoubles) {\n  let count = 0;\n  while (target > 1 && maxDoubles && ++count) {\n    if (target % 2 === 0) maxDoubles--, (target /= 2);\n    else target -= 1;\n  }\n  return count + target - 1;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 64 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 37.8 MB")))}m.isMDXComponent=!0}}]);