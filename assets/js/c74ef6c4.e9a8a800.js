"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[67122],{3905:(a,t,e)=>{e.d(t,{Zo:()=>N,kt:()=>h});var n=e(67294);function s(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function m(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function p(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){s(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function r(a,t){if(null==a)return{};var e,n,s=function(a,t){if(null==a)return{};var e,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)e=m[n],t.indexOf(e)>=0||(s[e]=a[e]);return s}(a,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)e=m[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(s[e]=a[e])}return s}var l=n.createContext({}),i=function(a){var t=n.useContext(l),e=t;return a&&(e="function"==typeof a?a(t):p(p({},t),a)),e},N=function(a){var t=i(a.components);return n.createElement(l.Provider,{value:t},a.children)},k="mdxType",o={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(a,t){var e=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),k=i(e),c=s,h=k["".concat(l,".").concat(c)]||k[c]||o[c]||m;return e?n.createElement(h,p(p({ref:t},N),{},{components:e})):n.createElement(h,p({ref:t},N))}));function h(a,t){var e=arguments,s=t&&t.mdxType;if("string"==typeof a||s){var m=e.length,p=new Array(m);p[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=a,r[k]="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=e[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},59642:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>r,toc:()=>i});var n=e(87462),s=(e(67294),e(3905));const m={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u5b66","\u5b57\u7b26\u4e32"],date:"2/25/2023"},p=void 0,r={permalink:"/algorithm/2023/02/25/1247.\u4ea4\u6362\u5b57\u7b26\u4f7f\u5f97\u5b57\u7b26\u4e32\u76f8\u540c",source:"@site/algorithm/2023/02/25/1247.\u4ea4\u6362\u5b57\u7b26\u4f7f\u5f97\u5b57\u7b26\u4e32\u76f8\u540c.md",title:"1247.\u4ea4\u6362\u5b57\u7b26\u4f7f\u5f97\u5b57\u7b26\u4e32\u76f8\u540c",description:"1\u3001\u9898\u5e72",date:"2023-02-25T00:00:00.000Z",formattedDate:"2023\u5e742\u670825\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.24,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u5b66","\u5b57\u7b26\u4e32"],date:"2/25/2023"},prevItem:{title:"1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408",permalink:"/algorithm/2023/02/26/1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408"},nextItem:{title:"2357.\u4f7f\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u90fd\u7b49\u4e8e\u96f6",permalink:"/algorithm/2023/02/24/2357.\u4f7f\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u90fd\u7b49\u4e8e\u96f6"}},l={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],N={toc:i};function k(a){let{components:t,...m}=a;return(0,s.kt)("wrapper",(0,n.Z)({},N,m,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,s.kt)("p",null,"\u6709\u4e24\u4e2a\u957f\u5ea6\u76f8\u540c\u7684\u5b57\u7b26\u4e32\xa0",(0,s.kt)("code",null,"s1")," \u548c\xa0",(0,s.kt)("code",null,"s2"),"\uff0c\u4e14\u5b83\u4eec\u5176\u4e2d\xa0",(0,s.kt)("strong",null,"\u53ea\u542b\u6709"),"\xa0\u5b57\u7b26\xa0",(0,s.kt)("code",null,'"x"')," \u548c\xa0",(0,s.kt)("code",null,'"y"'),"\uff0c\u4f60\u9700\u8981\u901a\u8fc7\u300c\u4ea4\u6362\u5b57\u7b26\u300d\u7684\u65b9\u5f0f\u4f7f\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u540c\u3002"),(0,s.kt)("p",null,"\u6bcf\u6b21\u300c\u4ea4\u6362\u5b57\u7b26\u300d\u7684\u65f6\u5019\uff0c\u4f60\u90fd\u53ef\u4ee5\u5728\u4e24\u4e2a\u5b57\u7b26\u4e32\u4e2d\u5404\u9009\u4e00\u4e2a\u5b57\u7b26\u8fdb\u884c\u4ea4\u6362\u3002"),(0,s.kt)("p",null,"\u4ea4\u6362\u53ea\u80fd\u53d1\u751f\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u5b57\u7b26\u4e32\u4e4b\u95f4\uff0c\u7edd\u5bf9\u4e0d\u80fd\u53d1\u751f\u5728\u540c\u4e00\u4e2a\u5b57\u7b26\u4e32\u5185\u90e8\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u4ea4\u6362\xa0",(0,s.kt)("code",null,"s1[i]")," \u548c\xa0",(0,s.kt)("code",null,"s2[j]"),"\uff0c\u4f46\u4e0d\u80fd\u4ea4\u6362\xa0",(0,s.kt)("code",null,"s1[i]")," \u548c\xa0",(0,s.kt)("code",null,"s1[j]"),"\u3002"),(0,s.kt)("p",null,"\u6700\u540e\uff0c\u8bf7\u4f60\u8fd4\u56de\u4f7f ",(0,s.kt)("code",null,"s1")," \u548c ",(0,s.kt)("code",null,"s2")," \u76f8\u540c\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570\uff0c\u5982\u679c\u6ca1\u6709\u65b9\u6cd5\u80fd\u591f\u4f7f\u5f97\u8fd9\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u540c\uff0c\u5219\u8fd4\u56de\xa0",(0,s.kt)("code",null,"-1")," \u3002"),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),'s1 = "xx", s2 = "yy"',(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"1",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u89e3\u91ca\uff1a",(0,s.kt)("br",null)),'\u4ea4\u6362 s1[0] \u548c s2[1]\uff0c\u5f97\u5230 s1 = "yx"\uff0cs2 = "yx"\u3002'),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),'s1 = "xy", s2 = "yx"',(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"2",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u89e3\u91ca\uff1a",(0,s.kt)("br",null)),'\u4ea4\u6362 s1[0] \u548c s2[0]\uff0c\u5f97\u5230 s1 = "yy"\uff0cs2 = "xx" \u3002',(0,s.kt)("br",null),'\u4ea4\u6362 s1[0] \u548c s2[1]\uff0c\u5f97\u5230 s1 = "xy"\uff0cs2 = "xy" \u3002',(0,s.kt)("br",null),'\u6ce8\u610f\uff0c\u4f60\u4e0d\u80fd\u4ea4\u6362 s1[0] \u548c s1[1] \u4f7f\u5f97 s1 \u53d8\u6210 "yx"\uff0c\u56e0\u4e3a\u6211\u4eec\u53ea\u80fd\u4ea4\u6362\u5c5e\u4e8e\u4e24\u4e2a\u4e0d\u540c\u5b57\u7b26\u4e32\u7684\u5b57\u7b26\u3002'),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),'s1 = "xx", s2 = "xy"',(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"-1",(0,s.kt)("br",null)),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 4\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),'s1 = "xxyyxyxyxx", s2 = "xyyxyxxxyx"',(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"4",(0,s.kt)("br",null)),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("code",null,"1 <= s1.length, s2.length <= 1000")),(0,s.kt)("li",null,(0,s.kt)("code",null,"s1, s2"),"\xa0\u53ea\u5305\u542b\xa0",(0,s.kt)("code",null,"'x'"),"\xa0\u6216\xa0",(0,s.kt)("code",null,"'y'"),"\u3002")),(0,s.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,s.kt)("p",null,"\u51fa\u73b0\u4e0d\u540c\u5b57\u7b26\u9700\u8981\u4ea4\u6362\u65f6\u6709\u4e24\u79cd\u60c5\u51b5\uff1a",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mi",{parentName:"mrow"},"y")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{xx}{yy}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1765em",verticalAlign:"-0.4811em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6954em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"yy")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"xx"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4811em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))),"\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mi",{parentName:"mrow"},"x")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{xy}{yx}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2286em",verticalAlign:"-0.4811em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7475em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.4461em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4811em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u60c5\u51b51 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mi",{parentName:"mrow"},"y")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{xx}{yy}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1765em",verticalAlign:"-0.4811em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6954em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"yy")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"xx"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4811em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))),"\uff1a\u53ea\u75281\u6b21\u5bf9\u89d2\u7ebf\u4ea4\u6362"),(0,s.kt)("li",{parentName:"ul"},"\u60c5\u51b52 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mi",{parentName:"mrow"},"x")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{xy}{yx}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2286em",verticalAlign:"-0.4811em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7475em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.4461em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4811em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))),"\uff1a\u9700\u8981\u5148\u4e0a\u4e0b\u4ea4\u6362\u518d\u5bf9\u89d2\u7ebf\u4ea4\u6362\uff0c\u5171\u8ba12\u6b21\u4ea4\u6362"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u56e0\u6b64\u5c3d\u91cf\u5c06\u4e0d\u540c\u5b57\u7b26\u7ec4\u5408\u6210\u60c5\u51b51\u5c31\u80fd\u4f7f\u4ea4\u6362\u6b21\u6570\u6700\u5c11"))),(0,s.kt)("p",null,"\u5177\u4f53\u5b9e\u73b0\u65f6\uff0c\u5206\u522b\u7edf\u8ba1\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"p"},"s1")," \u4e2d\u9700\u8981\u4ea4\u6362\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," \u4e0e ",(0,s.kt)("inlineCode",{parentName:"p"},"y"),"\uff0c\u8bb0\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"dx"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"dy")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u82e5 ",(0,s.kt)("inlineCode",{parentName:"li"},"dx + dy")," \u4e3a\u5947\u6570\uff0c\u5219\u65e0\u6cd5\u4f7f\u5f97\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u540c\uff0c\u8fd4\u56de -1"),(0,s.kt)("li",{parentName:"ul"},"\u82e5 ",(0,s.kt)("inlineCode",{parentName:"li"},"dx + dy")," \u4e3a\u5076\u6570\uff0c\u4e14 ",(0,s.kt)("inlineCode",{parentName:"li"},"dx")," \u4e5f\u662f\u5076\u6570\uff0c\u90a3\u4e48\u4e0d\u540c\u5b57\u7b26\u53ef\u4ee5\u5168\u90e8\u7ec4\u5408\u6210\u60c5\u51b51\uff0c\u6700\u5c0f\u4ea4\u6362\u6b21\u6570\u4e3a ",(0,s.kt)("inlineCode",{parentName:"li"},"(dx + dy) / 2")),(0,s.kt)("li",{parentName:"ul"},"\u82e5 ",(0,s.kt)("inlineCode",{parentName:"li"},"dx + dy")," \u4e3a\u5076\u6570\uff0c",(0,s.kt)("inlineCode",{parentName:"li"},"dx")," \u662f\u5947\u6570\uff0c\u90a3\u4e48\u5c31\u4f1a\u51fa\u73b01\u7ec4\u60c5\u51b52\uff0c\u6700\u5c0f\u4ea4\u6362\u6b21\u6570\u4e3a ",(0,s.kt)("inlineCode",{parentName:"li"},"(dx + dy) / 2 + 1"))),(0,s.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function minimumSwap(s1: string, s2: string): number {\n    let dx = 0, dy = 0;\n    for (let i = 0; i < s1.length; i++) {\n        if (s1[i] !== s2[i]) s1[i] === 'x' ? dx++ : dy++;\n    }\n\n    return (dx + dy) % 2 ? -1 : (dx + dy) / 2 + (dx % 2);\n};\n")),(0,s.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image.png",src:e(95098).Z,width:"1312",height:"386"})))}k.isMDXComponent=!0},95098:(a,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/1677314962-ZTlVBj-image-44f77a6878c6308ee342195334bc757e.png"}}]);