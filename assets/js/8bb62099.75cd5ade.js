"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[25998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),k=l,d=c["".concat(i,".").concat(k)]||c[k]||u[k]||r;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var m=2;m<r;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},95796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32"],date:new Date("2023-04-16T00:00:00.000Z")},s=void 0,o={permalink:"/algorithm/2023/04/16/2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570",source:"@site/algorithm/2023/04/16/2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570.md",title:"2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570",description:"1\u3001\u9898\u5e72",date:"2023-04-16T00:00:00.000Z",formattedDate:"2023\u5e744\u670816\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:2.685,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32"],date:"2023-04-16T00:00:00.000Z"},nextItem:{title:"1032.\u5b57\u7b26\u6d41",permalink:"/algorithm/2023/03/24/1032.\u5b57\u7b26\u6d41"}},i={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"Alice \u548c Bob \u8ba1\u5212\u5206\u522b\u53bb\u7f57\u9a6c\u5f00\u4f1a\u3002"),(0,l.kt)("p",null,"\u7ed9\u4f60\u56db\u4e2a\u5b57\u7b26\u4e32\xa0",(0,l.kt)("code",null,"arriveAlice"),"\xa0\uff0c",(0,l.kt)("code",null,"leaveAlice"),"\xa0\uff0c",(0,l.kt)("code",null,"arriveBob"),"\xa0\u548c\xa0",(0,l.kt)("code",null,"leaveBob"),"\xa0\u3002Alice \u4f1a\u5728\u65e5\u671f\xa0",(0,l.kt)("code",null,"arriveAlice"),"\xa0\u5230\xa0",(0,l.kt)("code",null,"leaveAlice"),"\xa0\u4e4b\u95f4\u5728\u57ce\u5e02\u91cc\uff08",(0,l.kt)("strong",null,"\u65e5\u671f\u4e3a\u95ed\u533a\u95f4"),"\uff09\uff0c\u800c Bob \u5728\u65e5\u671f\xa0",(0,l.kt)("code",null,"arriveBob"),"\xa0\u5230\xa0",(0,l.kt)("code",null,"leaveBob"),"\xa0\u4e4b\u95f4\u5728\u57ce\u5e02\u91cc\uff08",(0,l.kt)("strong",null,"\u65e5\u671f\u4e3a\u95ed\u533a\u95f4"),"\uff09\u3002\u6bcf\u4e2a\u5b57\u7b26\u4e32\u90fd\u5305\u542b 5 \u4e2a\u5b57\u7b26\uff0c\u683c\u5f0f\u4e3a\xa0",(0,l.kt)("code",null,'"MM-DD"'),"\xa0\uff0c\u5bf9\u5e94\u7740\u4e00\u4e2a\u65e5\u671f\u7684\u6708\u548c\u65e5\u3002"),(0,l.kt)("p",null,"\u8bf7\u4f60\u8fd4\u56de Alice\u548c Bob \u540c\u65f6\u5728\u7f57\u9a6c\u7684\u5929\u6570\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5047\u8bbe\u6240\u6709\u65e5\u671f\u90fd\u5728 ",(0,l.kt)("strong",null,"\u540c\u4e00\u4e2a"),"\xa0\u81ea\u7136\u5e74\uff0c\u800c\u4e14 ",(0,l.kt)("strong",null,"\u4e0d\u662f"),"\xa0\u95f0\u5e74\u3002\u6bcf\u4e2a\u6708\u4efd\u7684\u5929\u6570\u5206\u522b\u4e3a\uff1a",(0,l.kt)("code",null,"[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]"),"\xa0\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("b",null,"\u8f93\u5165\uff1a"),'arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"',(0,l.kt)("br",null),(0,l.kt)("b",null,"\u8f93\u51fa\uff1a"),"3",(0,l.kt)("br",null),(0,l.kt)("b",null,"\u89e3\u91ca\uff1a"),"Alice \u4ece 8 \u6708 15 \u53f7\u5230 8 \u6708 18 \u53f7\u5728\u7f57\u9a6c\u3002Bob \u4ece 8 \u6708 16 \u53f7\u5230 8 \u6708 19 \u53f7\u5728\u7f57\u9a6c\uff0c\u4ed6\u4eec\u540c\u65f6\u5728\u7f57\u9a6c\u7684\u65e5\u671f\u4e3a 8 \u6708 16\u300117 \u548c 18 \u53f7\u3002\u6240\u4ee5\u7b54\u6848\u4e3a 3 \u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("b",null,"\u8f93\u5165\uff1a"),'arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"',(0,l.kt)("br",null),(0,l.kt)("b",null,"\u8f93\u51fa\uff1a"),"0",(0,l.kt)("br",null),(0,l.kt)("b",null,"\u89e3\u91ca\uff1a"),"Alice \u548c Bob \u6ca1\u6709\u540c\u65f6\u5728\u7f57\u9a6c\u7684\u65e5\u5b50\uff0c\u6240\u4ee5\u6211\u4eec\u8fd4\u56de 0 \u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u6240\u6709\u65e5\u671f\u7684\u683c\u5f0f\u5747\u4e3a\xa0",(0,l.kt)("code",null,'"MM-DD"'),"\xa0\u3002"),(0,l.kt)("li",null,"Alice \u548c Bob \u7684\u5230\u8fbe\u65e5\u671f\u90fd ",(0,l.kt)("strong",null,"\u65e9\u4e8e\u6216\u7b49\u4e8e")," \u4ed6\u4eec\u7684\u79bb\u5f00\u65e5\u671f\u3002"),(0,l.kt)("li",null,"\u9898\u76ee\u6d4b\u8bd5\u7528\u4f8b\u6240\u7ed9\u51fa\u7684\u65e5\u671f\u5747\u4e3a ",(0,l.kt)("strong",null,"\u975e\u95f0\u5e74")," \u7684\u6709\u6548\u65e5\u671f\u3002")),(0,l.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,l.kt)("p",null,"\u5148\u8ba1\u7b97\u4ea4\u96c6\u8d77\u6b62\u65f6\u95f4\uff0c\u518d\u628a\u65e5\u671f\u8f6c\u5316\u4e3a\u5929\u6570\u5e76\u6c42\u5dee\u503c\uff0c\u5177\u4f53\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u524d\u7f00\u548c\u9884\u5904\u7406\u6bcf\u6708\u5929\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5b57\u5178\u5e8f\u8ba1\u7b97\u4ea4\u96c6\u7684\u8d77\u6b62\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u8d77\u6b62\u65f6\u95f4\u662f\u8be5\u5e74\u7b2c\u51e0\u5929\u5e76\u6c42\u5dee\u503c")),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function countDaysTogether(s1: string, e1: string, s2: string, e2: string): number {\n    const days = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];\n    const s = s1 <= s2 ? s2 : s1, e = e1 <= e2 ? e1 : e2;\n    if (e < s) return 0;\n\n    const d1 = (days[+s.slice(0, 2) - 2] || 0) + +s.slice(3);\n    const d2 = (days[+e.slice(0, 2) - 2] || 0) + +e.slice(3);\n\n    return d2 - d1 + 1;\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mn",{parentName:"mrow"},"1"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},"1"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mn",{parentName:"mrow"},"1"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},"1"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(81489).Z,width:"1212",height:"400"})))}c.isMDXComponent=!0},81489:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/e3ae424f1855003d5e25204580db976a-0548c69f5b00053482d6416a8399ad50.png"}}]);