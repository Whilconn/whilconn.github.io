"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[33651],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=o(a),u=l,d=s["".concat(c,".").concat(u)]||s[u]||k[u]||r;return a?n.createElement(d,m(m({ref:t},p),{},{components:a})):n.createElement(d,m({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,m=new Array(r);m[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,m[1]=i;for(var o=2;o<r;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const r={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u5b57\u7b26\u4e32","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/2/7"},m=void 0,i={permalink:"/algorithm/2022/02/07/1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",source:"@site/algorithm/2022/02/07/1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32.md",title:"1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",description:"1\u3001\u9898\u5e72",date:"2022-02-07T00:00:00.000Z",formattedDate:"2022\u5e742\u67087\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",permalink:"/algorithm/tags/\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"}],readingTime:4.435,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u5b57\u7b26\u4e32","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/2/7"},prevItem:{title:"1001.\u7f51\u683c\u7167\u660e",permalink:"/algorithm/2022/02/08/1001.\u7f51\u683c\u7167\u660e"},nextItem:{title:"1414.\u548c\u4e3a K \u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee",permalink:"/algorithm/2022/02/03/1414.\u548c\u4e3a K \u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee"}},c={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],p={toc:o};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u5982\u679c\u5b57\u7b26\u4e32\u4e2d\u4e0d\u542b\u6709\u4efb\u4f55 ",(0,l.kt)("code",null,"'aaa'"),"\uff0c",(0,l.kt)("code",null,"'bbb'")," \u6216 ",(0,l.kt)("code",null,"'ccc'")," \u8fd9\u6837\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5b50\u4e32\uff0c\u90a3\u4e48\u8be5\u5b57\u7b26\u4e32\u5c31\u662f\u4e00\u4e2a\u300c\u5feb\u4e50\u5b57\u7b26\u4e32\u300d\u3002"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e09\u4e2a\u6574\u6570 ",(0,l.kt)("code",null,"a"),"\uff0c",(0,l.kt)("code",null,"b")," \uff0c",(0,l.kt)("code",null,"c"),"\uff0c\u8bf7\u4f60\u8fd4\u56de ",(0,l.kt)("strong",null,"\u4efb\u610f\u4e00\u4e2a")," \u6ee1\u8db3\u4e0b\u5217\u5168\u90e8\u6761\u4ef6\u7684\u5b57\u7b26\u4e32 ",(0,l.kt)("code",null,"s"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"s")," \u662f\u4e00\u4e2a\u5c3d\u53ef\u80fd\u957f\u7684\u5feb\u4e50\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",null,(0,l.kt)("code",null,"s")," \u4e2d ",(0,l.kt)("strong",null,"\u6700\u591a")," \u6709",(0,l.kt)("code",null,"a")," \u4e2a\u5b57\u6bcd ",(0,l.kt)("code",null,"'a'"),"\u3001",(0,l.kt)("code",null,"b"),"\xa0\u4e2a\u5b57\u6bcd ",(0,l.kt)("code",null,"'b'"),"\u3001",(0,l.kt)("code",null,"c")," \u4e2a\u5b57\u6bcd ",(0,l.kt)("code",null,"'c'")," \u3002"),(0,l.kt)("li",null,(0,l.kt)("code",null,"s "),"\u4e2d\u53ea\u542b\u6709 ",(0,l.kt)("code",null,"'a'"),"\u3001",(0,l.kt)("code",null,"'b'")," \u3001",(0,l.kt)("code",null,"'c'")," \u4e09\u79cd\u5b57\u6bcd\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u5b57\u7b26\u4e32 ",(0,l.kt)("code",null,"s")," \uff0c\u8bf7\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32 ",(0,l.kt)("code",null,'""'),"\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"a = 1, b = 1, c = 7",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"ccaccbcc"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),'"ccbccacc" \u4e5f\u662f\u4e00\u79cd\u6b63\u786e\u7b54\u6848\u3002',(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"a = 2, b = 2, c = 1",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"aabbc"',(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"a = 7, b = 1, c = 0",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"aabaa"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u8fd9\u662f\u8be5\u6d4b\u8bd5\u7528\u4f8b\u7684\u552f\u4e00\u6b63\u786e\u7b54\u6848\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= a, b, c <= 100")),(0,l.kt)("li",null,(0,l.kt)("code",null,"a + b + c > 0"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9898\u76ee\u5bf9\u6211\u6765\u8bf4\u633a\u6709\u96be\u5ea6\uff0c\u60f3\u4e86\u86ee\u4e45\uff0c\u7528\u4e86\u4e24\u79cd\u601d\u8def\uff0c\u90fd\u662f\u57fa\u4e8e3\u79cd\u5b57\u6bcd\u7684\u6570\u91cf\u5173\u7cfb\u89e3\u9898\uff0c\u8fd9\u91cc\u8bb0\u5f55\u5176\u4e2d\u4e00\u79cd")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"e9de6ffd302988140f868f8f54c96d26.gif",src:a(41).Z,width:"440",height:"440"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u4f53\u601d\u8def")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6309\u6570\u91cf\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"'a'"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"'b'")," \u3001",(0,l.kt)("inlineCode",{parentName:"li"},"'c'")," \u4e09\u79cd\u5b57\u6bcd\u8fdb\u884c\u964d\u5e8f\u6392\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u5feb\u4e50\u5b57\u7b26\u4e32\u4e2d\u4e0d\u80fd\u51fa\u73b03\u4e2a\u8fde\u7eed\u76f8\u540c\u5b57\u7b26\uff0c\u53ef\u4ee5\u5148\u53d6\u6570\u91cf\u6700\u591a\u7684\u5b57\u6bcd\uff0c\u6bcf\u4e24\u4e2a\u7ec4\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u5e76\u5b58\u5165\u6570\u7ec4\u4e2d\uff0c\u8bb0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"arr")),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386 ",(0,l.kt)("inlineCode",{parentName:"li"},"arr")," \u4e2d\u7684\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u628a\u5269\u4f59\u5b57\u6bcd\u9010\u4e2a\u62fc\u63a5\u5230\u6bcf\u4e2a\u5b57\u7b26\u4e32\u672b\u5c3e\uff0c\u7531\u4e8e\u5269\u4f59\u4efb\u610f\u4e00\u79cd\u5b57\u6bcd\u6570\u91cf\u90fd\u4e0d\u4f1a\u8d85\u8fc7 ",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mn",{parentName:"mrow"},"2"),(0,l.kt)("mo",{parentName:"mrow"},"\u2217"),(0,l.kt)("mi",{parentName:"mrow"},"a"),(0,l.kt)("mi",{parentName:"mrow"},"r"),(0,l.kt)("mi",{parentName:"mrow"},"r"),(0,l.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,l.kt)("mi",{parentName:"mrow"},"l"),(0,l.kt)("mi",{parentName:"mrow"},"e"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mi",{parentName:"mrow"},"g"),(0,l.kt)("mi",{parentName:"mrow"},"t"),(0,l.kt)("mi",{parentName:"mrow"},"h")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2*arr.length")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},"2"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"rr"),(0,l.kt)("span",{parentName:"span",className:"mord"},"."),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"))))),"\uff0c\u56e0\u6b64\u4efb\u610f\u4e00\u79cd\u5b57\u6bcd\u5fc5\u5b9a\u53ef\u4ee5\u5728\u4e24\u8f6e\u5faa\u73af\u5185\u6d88\u8017\u5b8c\uff0c\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"arr")," \u4e2d\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26\u4e32\u90fd\u4e0d\u4f1a\u51fa\u73b03\u4e2a\u8fde\u7eed\u76f8\u540c\u5b57\u7b26"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u540e\u62fc\u63a5\u6240\u6709\u5b57\u7b26\u4e32\uff0c\u53ea\u53ef\u80fd\u5728\u672b\u5c3e\u51fa\u73b03\u4e2a\u4ee5\u4e0a\u8fde\u7eed\u76f8\u540c\u5b57\u7b26\uff0c\u628a\u672b\u5c3e\u591a\u4f59\u5b57\u7b26\u5904\u7406\u6389\u5373\u53ef")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3e\u4e2a\u4f8b\u5b50")," \uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"a = 1, b = 1, c = 7")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1\u3001\u53d6\u6570\u91cf\u6700\u591a\u7684\u5b57\u6bcd ",(0,l.kt)("inlineCode",{parentName:"li"},"c"),"\uff0c\u6bcf\u4e24\u4e2a\u7ec4\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5f97\u5230\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"['cc','cc','cc','c']")),(0,l.kt)("li",{parentName:"ul"},"2\u3001\u628a\u5269\u4f59\u5b57\u6bcd ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," \u9010\u4e2a\u62fc\u63a5\u5230\u6bcf\u4e2a\u5b57\u7b26\u4e32\u672b\u5c3e\uff0c\u5f97\u5230\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"['cca','cc','cc','c']"),"\uff0c\u6b64\u65f6\u4e00\u8f6e\u5faa\u73af\u5c1a\u672a\u7ed3\u675f"),(0,l.kt)("li",{parentName:"ul"},"3\u3001\u4e00\u8f6e\u5faa\u73af\u6ca1\u7ed3\u675f\uff0c\u5b57\u6bcd ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," \u5df2\u8017\u5c3d\uff0c\u7ee7\u7eed\u8be5\u8f6e\u5faa\u73af\uff0c\u628a\u5269\u4f59\u5b57\u6bcd ",(0,l.kt)("inlineCode",{parentName:"li"},"b")," \u9010\u4e2a\u62fc\u63a5\u5230\u6bcf\u4e2a\u5b57\u7b26\u4e32\u672b\u5c3e\uff0c\u5f97\u5230\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"['cca','ccb','cc','c']")),(0,l.kt)("li",{parentName:"ul"},"4\u3001\u62fc\u63a5\u6240\u6709\u5b57\u7b26\u4e32\u518d\u5904\u7406\u672b\u5c3e\u591a\u4f59\u5b57\u7b26\uff0c\u5f97\u5230\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"'ccaccbcc'"))),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u518d\u4e3e\u4e2a\u4f8b\u5b50")," \uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"a = 6, b = 6, c = 6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1\u3001\u53d6\u6570\u91cf\u6700\u591a\u7684\u5b57\u6bcd ",(0,l.kt)("inlineCode",{parentName:"li"},"a"),"\uff0c\u6bcf\u4e24\u4e2a\u7ec4\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5f97\u5230\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"['aa','aa','aa']")),(0,l.kt)("li",{parentName:"ul"},"2\u3001\u628a\u5269\u4f59\u5b57\u6bcd ",(0,l.kt)("inlineCode",{parentName:"li"},"b")," \u9010\u4e2a\u62fc\u63a5\u5230\u6bcf\u4e2a\u5b57\u7b26\u4e32\u672b\u5c3e\uff0c\u5f97\u5230\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"['aab','aab','aab']"),"\uff0c\u6b64\u65f6\u5df2\u7ed3\u675f\u4e00\u8f6e\u5faa\u73af"),(0,l.kt)("li",{parentName:"ul"},"3\u3001\u4e00\u8f6e\u5faa\u73af\u6ca1\u6709\u6d88\u8017\u6240\u6709\u5b57\u6bcd ",(0,l.kt)("inlineCode",{parentName:"li"},"b"),"\uff0c\u518d\u6765\u4e00\u8f6e\uff0c\u5f97\u5230\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"['aabb','aabb','aabb']"),"\uff0c\u6b64\u65f6\u5df2\u7ed3\u675f\u4e24\u8f6e\u5faa\u73af"),(0,l.kt)("li",{parentName:"ul"},"4\u3001\u540c\u7406\u628a\u5269\u4f59\u5b57\u6bcd ",(0,l.kt)("inlineCode",{parentName:"li"},"c")," \u9010\u4e2a\u62fc\u63a5\u5230\u6bcf\u4e2a\u5b57\u7b26\u4e32\u672b\u5c3e\uff0c\u5f97\u5230\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"['aabbcc','aabbcc','aabbcc']")),(0,l.kt)("li",{parentName:"ul"},"5\u3001\u62fc\u63a5\u6240\u6709\u5b57\u7b26\u4e32\u518d\u5904\u7406\u672b\u5c3e\u591a\u4f59\u5b57\u7b26\uff0c\u5f97\u5230\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"'aabbccaabbccaabbcc"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestDiverseString = function (a, b, c) {\n    const m = [['a', a], ['b', b], ['c', c]].sort((a, b) => b[1] - a[1]);\n\n    const len = Math.ceil(m[0][1] / 2);\n    const arr = new Array(len).fill(m[0][0] + m[0][0]);\n    if (m[0][1] % 2) arr[len - 1] = m[0][0];\n\n    for (let i = 0; m[1][1] || m[2][1]; i++) {\n        if (m[1][1]) arr[i % len] += m[1][0], m[1][1]--;\n        else arr[i % len] += m[2][0], m[2][1]--;\n    }\n\n    return arr.join('').replace(new RegExp(m[0][0] + '{3,}$'), m[0][0] + m[0][0]);\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(11008).Z,width:"1018",height:"478"})))}s.isMDXComponent=!0},11008:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1644216478-HMkYqG-image-45e69c598178c2bd89123efac7502b45.png"},41:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1644217675-IEDuVi-e9de6ffd302988140f868f8f54c96d26-1e10a4311c0c7788c23c39d5f305b080.gif"}}]);