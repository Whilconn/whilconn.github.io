"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[70005],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,N=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(N,m(m({ref:t},i),{},{components:a})):n.createElement(N,m({ref:t},i))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,m=new Array(l);m[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:r,m[1]=p;for(var s=2;s<l;s++)m[s]=a[s];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u5b66"],date:"2022/1/18"},m=void 0,p={permalink:"/algorithm/2139.\u5f97\u5230\u76ee\u6807\u503c\u7684\u6700\u5c11\u884c\u52a8\u6b21\u6570",source:"@site/algorithm/2139.\u5f97\u5230\u76ee\u6807\u503c\u7684\u6700\u5c11\u884c\u52a8\u6b21\u6570.md",title:"2139.\u5f97\u5230\u76ee\u6807\u503c\u7684\u6700\u5c11\u884c\u52a8\u6b21\u6570",description:"1\u3001\u9898\u5e72",date:"2022-01-18T00:00:00.000Z",formattedDate:"2022\u5e741\u670818\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"}],readingTime:2.68,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u5b66"],date:"2022/1/18"},prevItem:{title:"2138.\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u82e5\u5e72\u957f\u5ea6\u4e3a k \u7684\u7ec4",permalink:"/algorithm/2138.\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u82e5\u5e72\u957f\u5ea6\u4e3a k \u7684\u7ec4"},nextItem:{title:"2140.\u89e3\u51b3\u667a\u529b\u95ee\u9898",permalink:"/algorithm/2140.\u89e3\u51b3\u667a\u529b\u95ee\u9898"}},o={authorsImageUrls:[void 0]},s=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],i={toc:s};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u4f60\u6b63\u5728\u73a9\u4e00\u4e2a\u6574\u6570\u6e38\u620f\u3002\u4ece\u6574\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u5f00\u59cb\uff0c\u671f\u671b\u5f97\u5230\u6574\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," \u3002"),(0,r.kt)("p",null,"\u5728\u4e00\u6b21\u884c\u52a8\u4e2d\uff0c\u4f60\u53ef\u4ee5\u505a\u4e0b\u8ff0\u4e24\u79cd\u64cd\u4f5c\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9012\u589e"),"\uff0c\u5c06\u5f53\u524d\u6574\u6570\u7684\u503c\u52a0 1\uff08\u5373\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"x = x + 1"),"\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u52a0\u500d"),"\uff0c\u4f7f\u5f53\u524d\u6574\u6570\u7684\u503c\u7ffb\u500d\uff08\u5373\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"x = 2 * x"),"\uff09\u3002")),(0,r.kt)("p",null,"\u5728\u6574\u4e2a\u6e38\u620f\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"\u9012\u589e")," \u64cd\u4f5c ",(0,r.kt)("strong",{parentName:"p"},"\u4efb\u610f")," \u6b21\u6570\u3002\u4f46\u662f\u53ea\u80fd\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u500d")," \u64cd\u4f5c ",(0,r.kt)("strong",{parentName:"p"},"\u81f3\u591a")," ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDoubles")," \u6b21\u3002"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDoubles")," \uff0c\u8fd4\u56de\u4ece 1 \u5f00\u59cb\u5f97\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," \u9700\u8981\u7684\u6700\u5c11\u884c\u52a8\u6b21\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," target = 5, maxDoubles = 0",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 4",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4e00\u76f4\u9012\u589e 1 \u76f4\u5230\u5f97\u5230 target \u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," target = 19, maxDoubles = 2",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 7",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6700\u521d\uff0cx = 1 \u3002",(0,r.kt)("br",null),"\n\u9012\u589e 3 \u6b21\uff0cx = 4 \u3002",(0,r.kt)("br",null),"\n\u52a0\u500d 1 \u6b21\uff0cx = 8 \u3002",(0,r.kt)("br",null),"\n\u9012\u589e 1 \u6b21\uff0cx = 9 \u3002",(0,r.kt)("br",null),"\n\u52a0\u500d 1 \u6b21\uff0cx = 18 \u3002",(0,r.kt)("br",null),"\n\u9012\u589e 1 \u6b21\uff0cx = 19 \u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," target = 10, maxDoubles = 4",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 4",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,r.kt)("br",null),"\n\u6700\u521d\uff0cx = 1 \u3002 ",(0,r.kt)("br",null),"\n\u9012\u589e 1 \u6b21\uff0cx = 2 \u3002 ",(0,r.kt)("br",null),"\n\u52a0\u500d 1 \u6b21\uff0cx = 4 \u3002 ",(0,r.kt)("br",null),"\n\u9012\u589e 1 \u6b21\uff0cx = 5 \u3002 ",(0,r.kt)("br",null),"\n\u52a0\u500d 1 \u6b21\uff0cx = 10 \u3002 ",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= target <= 10^9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= maxDoubles <= 100"))),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\b\u4f7f\u7528\u8d2a\u5fc3\u7b97\u6cd5\u5012\u5e8f\u5904\u7406\uff0c\u52a0\u500d\u53d8\u6210\u51cf\u534a\uff0c\u9012\u589e\u53d8\u6210\u9012\u51cf"),(0,r.kt)("li",{parentName:"ul"},"\u5148\u6d88\u8017\u6389\u6240\u6709\u51cf\u534a\u6b21\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"maxDoubles"),"\uff0c\u6d88\u8017\u8fc7\u7a0b\u4e2d\u5982\u679c\u662f\u5076\u6570\u5219\u51cf\u534a\uff0c\u5982\u679c\u662f\u5947\u6570\u5219\u9012\u51cf\uff0c\u6bcf\u6b21\u6d88\u8017\u6b21\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"count")," \u90fd\u52a01"),(0,r.kt)("li",{parentName:"ul"},"\u5269\u4f59\u7684\u64cd\u4f5c\u53ea\u80fd\u662f\u9012\u51cf\uff0c\u9700\u8981\u7684\u64cd\u4f5c\u6b21\u6570\u4e3a\u5269\u4f59\u6574\u6570\u51cf1\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"target - 1")),(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"count + target - 1"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logn)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var minMoves = function (target, maxDoubles) {\n  let count = 0;\n  while (target > 1 && maxDoubles && ++count) {\n    if (target % 2 === 0) maxDoubles--, (target /= 2);\n    else target -= 1;\n  }\n  return count + target - 1;\n};\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 64 ms"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 37.8 MB")))}k.isMDXComponent=!0}}]);