"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[7874],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>h});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},k="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),k=i(t),o=s,h=k["".concat(l,".").concat(o)]||k[o]||c[o]||m;return t?n.createElement(h,p(p({ref:e},N),{},{components:t})):n.createElement(h,p({ref:e},N))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=o;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[k]="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}o.displayName="MDXCreateElement"},29:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>r,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const m={authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32","\u6570\u8bba"],date:"2022/2/10"},p=void 0,r={permalink:"/algorithm/1447.\u6700\u7b80\u5206\u6570",source:"@site/algorithm/1447.\u6700\u7b80\u5206\u6570.md",title:"1447.\u6700\u7b80\u5206\u6570",description:"1\u3001\u9898\u5e72",date:"2022-02-10T00:00:00.000Z",formattedDate:"2022\u5e742\u670810\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u6570\u8bba",permalink:"/algorithm/tags/\u6570\u8bba"}],readingTime:3.53,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32","\u6570\u8bba"],date:"2022/2/10"},prevItem:{title:"821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb",permalink:"/algorithm/821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb"},nextItem:{title:"\u5251\u6307 Offer II 101.\u5206\u5272\u7b49\u548c\u5b50\u96c6",permalink:"/algorithm/\u5251\u6307 Offer II 101.\u5206\u5272\u7b49\u548c\u5b50\u96c6"}},l={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u54c8\u5e0c\u8868",id:"2\u89e3\u6cd51-\u54c8\u5e0c\u8868",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u89e3\u6cd52-\u6c42\u516c\u7ea6\u6570",id:"6\u89e3\u6cd52-\u6c42\u516c\u7ea6\u6570",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2},{value:"10\u3001\u89e3\u6cd53-\u5206\u6bcd\u56e0\u6570\u500d\u4e58+\u54c8\u5e0c\u96c6\u5408",id:"10\u89e3\u6cd53-\u5206\u6bcd\u56e0\u6570\u500d\u4e58\u54c8\u5e0c\u96c6\u5408",level:2},{value:"11\u3001\u4ee3\u7801",id:"11\u4ee3\u7801",level:2},{value:"12\u3001\u590d\u6742\u5ea6",id:"12\u590d\u6742\u5ea6",level:2},{value:"13\u3001\u6267\u884c\u7ed3\u679c",id:"13\u6267\u884c\u7ed3\u679c",level:2}],N={toc:i};function k(a){let{components:e,...m}=a;return(0,s.kt)("wrapper",(0,n.Z)({},N,m,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,s.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\uff0c\u8bf7\u4f60\u8fd4\u56de\u6240\u6709 0 \u5230 1 \u4e4b\u95f4\uff08\u4e0d\u5305\u62ec 0 \u548c 1\uff09\u6ee1\u8db3\u5206\u6bcd\u5c0f\u4e8e\u7b49\u4e8e\xa0\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u7684 ",(0,s.kt)("strong",{parentName:"p"},"\u6700\u7b80"),"\xa0\u5206\u6570\xa0\u3002\u5206\u6570\u53ef\u4ee5\u4ee5 ",(0,s.kt)("strong",{parentName:"p"},"\u4efb\u610f"),"\xa0\u987a\u5e8f\u8fd4\u56de\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 2",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"1/2"',"]",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' "1/2" \u662f\u552f\u4e00\u4e00\u4e2a\u5206\u6bcd\u5c0f\u4e8e\u7b49\u4e8e 2 \u7684\u6700\u7b80\u5206\u6570\u3002',(0,s.kt)("br",null))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 3",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"1/2","1/3","2/3"',"]",(0,s.kt)("br",null))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 4",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"1/2","1/3","1/4","2/3","3/4"',"]",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' "2/4" \u4e0d\u662f\u6700\u7b80\u5206\u6570\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u5316\u7b80\u4e3a "1/2" \u3002',(0,s.kt)("br",null))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 1",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","]",(0,s.kt)("br",null))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= n <= 100"))),(0,s.kt)("h2",{id:"2\u89e3\u6cd51-\u54c8\u5e0c\u8868"},"2\u3001\u89e3\u6cd51-\u54c8\u5e0c\u8868"),(0,s.kt)("p",null,"\u7528\u54c8\u5e0c\u6620\u5c04\u5b58\u50a8\u5c0f\u6570\u548c\u5206\u6570\u5b57\u7b26\u4e32\uff0c\u5176\u4e2d\u5c0f\u6570\u4f5c\u4e3a\u952e\u5206\u6570\u5b57\u7b26\u4e32\u4f5c\u4e3a\u503c\uff0c\u6700\u540e\u8fd4\u56de\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684\u6240\u6709\u503c"),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var simplifiedFractions = function (n) {\n    const map = new Map();\n    for (let i = 1; i < n; i++) {\n        for (let j = i + 1; j <= n; j++) {\n            if (!map.has(i / j)) map.set(i / j, `${i}/${j}`);\n        }\n    }\n\n    return [...map.values()];\n};\n")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 108 ms"),(0,s.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 46.3 MB")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"6\u89e3\u6cd52-\u6c42\u516c\u7ea6\u6570"},"6\u3001\u89e3\u6cd52-\u6c42\u516c\u7ea6\u6570"),(0,s.kt)("p",null,"\u53c2\u8003\u6c42\u7d20\u6570\u7684\u65b9\u6cd5\uff0c\u4ece ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," \u5f00\u59cb\u904d\u5386\u5230 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msqrt"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sqrt{n}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.04em",verticalAlign:"-0.2397em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8003em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.7603em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2397em"}},(0,s.kt)("span",{parentName:"span"}))))))))),"\uff0c\u770b\u5206\u5b50\u5206\u6bcd\u662f\u5426\u5b58\u5728\u516c\u7ea6\u6570"),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var simplifiedFractions = function (n) {\n    function skip(min, max) {\n        for (let i = 2; i * i <= max; i++) {\n            if (max % i === 0 && (min % i === 0 || min % (max / i) === 0)) return true;\n        }\n        return false;\n    }\n\n    const res = [];\n    for (let i = 1; i < n; i++) {\n        for (let j = i + 1; j <= n; j++) {\n            if (!skip(i, j)) res.push(i + '/' + j);\n        }\n    }\n\n    return res;\n};\n")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msqrt"},"n")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2*\\sqrt{n})")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0503em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8003em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.7603em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2397em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 88 ms"),(0,s.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 47.2 MB")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image.png",src:t(27201).Z,width:"1324",height:"490"})),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"10\u89e3\u6cd53-\u5206\u6bcd\u56e0\u6570\u500d\u4e58\u54c8\u5e0c\u96c6\u5408"},"10\u3001\u89e3\u6cd53-\u5206\u6bcd\u56e0\u6570\u500d\u4e58+\u54c8\u5e0c\u96c6\u5408"),(0,s.kt)("p",null,"\u53c2\u8003\u6c42\u7d20\u6570\u7684\u65b9\u6cd5\uff0c\u4ece ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," \u5f00\u59cb\u904d\u5386\u5230 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msqrt"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sqrt{n}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.04em",verticalAlign:"-0.2397em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8003em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.7603em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2397em"}},(0,s.kt)("span",{parentName:"span"}))))))))),"\uff0c\u6c42\u51fa\u6240\u6709\u5c0f\u4e8e\u5206\u6bcd\u7684\u56e0\u6570\u53ca\u5176\u500d\u4e58\u7ed3\u679c\u5e76\u5b58\u50a8\u5230\u54c8\u5e0c\u96c6\u5408 ",(0,s.kt)("inlineCode",{parentName:"p"},"cdSet")," \u4e2d\uff0c\u82e5\u5206\u5b50\u5b58\u5728\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"cdSet")," \u4e2d\u5219\u8bf4\u660e\u5206\u5b50\u5206\u6bcd\u5b58\u5728\u516c\u7ea6\u6570"),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"11\u4ee3\u7801"},"11\u3001\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var simplifiedFractions = function (n) {\n    const res = [];\n    for (let i = 2; i <= n; i++) {\n        const cdSet = new Set();\n        for (let c = 2; c * c <= i; c++) {\n            if (i % c) continue;\n            for (let m = 1; m * c < i; m++) {\n                cdSet.add(m * c);\n                if (m * i / c < i) cdSet.add(m * i / c);\n            }\n        }\n\n        for (let j = 1; j < i; j++) {\n            if (!cdSet.has(j)) res.push(j + '/' + i);\n        }\n    }\n\n    return res;\n};\n")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"12\u590d\u6742\u5ea6"},"12\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"13\u6267\u884c\u7ed3\u679c"},"13\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 84 ms"),(0,s.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 46.9 MB")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image.png",src:t(78420).Z,width:"1304",height:"488"})))}k.isMDXComponent=!0},27201:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/1644456947-pdtFRM-image-eb39e0c2a89463b3bfdfade9e3396deb.png"},78420:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/1644459772-yZOlsk-image-f6e9c402396d0466957426e2aad6cee4.png"}}]);