"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[29440],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>u});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},i=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},k="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,l=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),k=o(t),c=m,u=k["".concat(l,".").concat(c)]||k[c]||N[c]||s;return t?n.createElement(u,r(r({ref:e},i),{},{components:t})):n.createElement(u,r({ref:e},i))}));function u(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[k]="string"==typeof a?a:m,r[1]=p;for(var o=2;o<s;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},44254:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=t(87462),m=(t(67294),t(3905));const s={authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32","\u6a21\u62df"],date:new Date("2022-02-09T00:00:00.000Z")},r=void 0,p={permalink:"/algorithm/2022/02/09/\u5251\u6307 Offer II 101.\u5206\u5272\u7b49\u548c\u5b50\u96c6",source:"@site/algorithm/2022/02/09/\u5251\u6307 Offer II 101.\u5206\u5272\u7b49\u548c\u5b50\u96c6.md",title:"\u5251\u6307 Offer II 101.\u5206\u5272\u7b49\u548c\u5b50\u96c6",description:"1\u3001\u9898\u5e72",date:"2022-02-09T00:00:00.000Z",formattedDate:"2022\u5e742\u67089\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u6a21\u62df",permalink:"/algorithm/tags/\u6a21\u62df"}],readingTime:2.04,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32","\u6a21\u62df"],date:"2022-02-09T00:00:00.000Z"},prevItem:{title:"1447.\u6700\u7b80\u5206\u6570",permalink:"/algorithm/2022/02/10/1447.\u6700\u7b80\u5206\u6570"},nextItem:{title:"1001.\u7f51\u683c\u7167\u660e",permalink:"/algorithm/2022/02/08/1001.\u7f51\u683c\u7167\u660e"}},l={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function k(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,m.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u975e\u7a7a\u7684\u6b63\u6574\u6570\u6570\u7ec4 ",(0,m.kt)("code",null,"nums")," \uff0c\u8bf7\u5224\u65ad\u80fd\u5426\u5c06\u8fd9\u4e9b\u6570\u5b57\u5206\u6210\u5143\u7d20\u548c\u76f8\u7b49\u7684\u4e24\u90e8\u5206\u3002"),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b\xa01\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [1,5,11,5]",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u89e3\u91ca\uff1a"),"nums",(0,m.kt)("strong",null," "),"\u53ef\u4ee5\u5206\u5272\u6210 [1, 5, 5] \u548c [11] \u3002"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b\xa02\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [1,2,3,5]",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u89e3\u91ca\uff1a"),"nums",(0,m.kt)("strong",null," "),"\u4e0d\u53ef\u4ee5\u5206\u4e3a\u548c\u76f8\u7b49\u7684\u4e24\u90e8\u5206",(0,m.kt)("br",null)),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("meta",{charset:"UTF-8"})),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,m.kt)("ul",null,(0,m.kt)("li",null,(0,m.kt)("code",null,"1 <= nums.length <= 200")),(0,m.kt)("li",null,(0,m.kt)("code",null,"1 <= nums[i] <= 100"))),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 416\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,m.kt)("a",{href:"https://leetcode-cn.com/problems/partition-equal-subset-sum/"},"https://leetcode-cn.com/problems/partition-equal-subset-sum/")),(0,m.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,m.kt)("p",null,"\u6839\u636e\u9898\u610f\u9700\u8981\u627e\u5230\u6570\u7ec4 ",(0,m.kt)("inlineCode",{parentName:"p"},"nums")," \u6240\u6709\u5143\u7d20\u548c\u7684\u4e00\u534a ",(0,m.kt)("inlineCode",{parentName:"p"},"target"),"\uff0c\u53ef\u4ee5\u8fd9\u4e48\u505a\uff1a\u904d\u5386\u6570\u7ec4 ",(0,m.kt)("inlineCode",{parentName:"p"},"nums"),"\uff0c\u7528\u54c8\u5e0c\u96c6\u5408 ",(0,m.kt)("inlineCode",{parentName:"p"},"set")," \u8bb0\u5f55\u6240\u6709\u5143\u7d20\u548c\uff0c\u82e5 ",(0,m.kt)("inlineCode",{parentName:"p"},"nums")," \u6216 ",(0,m.kt)("inlineCode",{parentName:"p"},"set")," \u4e2d\u5b58\u5728 ",(0,m.kt)("inlineCode",{parentName:"p"},"target"),"\uff0c\u5219\u8fd4\u56de ",(0,m.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u8fd9\u4e2a\u89e3\u6cd5\u7684\u5173\u952e\u5728\u4e8e\u5fc5\u987b\u9650\u5b9a ",(0,m.kt)("inlineCode",{parentName:"p"},"set")," \u53ea\u80fd\u5b58\u50a8\u6bd4 ",(0,m.kt)("inlineCode",{parentName:"p"},"target")," \u66f4\u5c0f\u7684\u5143\u7d20\u548c\uff0c\u5426\u5219\u5927\u6982\u7387\u4f1a\u8d85\u65f6\u3002\u7531\u4e8e\u6570\u7ec4 ",(0,m.kt)("inlineCode",{parentName:"p"},"nums")," \u957f\u5ea6\u5df2\u7ecf\u56fa\u5b9a\uff0c\u800c ",(0,m.kt)("inlineCode",{parentName:"p"},"set")," \u88ab\u9650\u5236\u540e\u5176\u957f\u5ea6\u5fc5\u7136\u5c0f\u4e8e ",(0,m.kt)("inlineCode",{parentName:"p"},"target"),"\uff0c\u56e0\u6b64\u603b\u4f53\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a\uff1a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n*target)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u8ba1\u7b97\u91cf\u7ea7\u6700\u5927\u7ea6\u4e3a ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"0"),(0,m.kt)("mn",{parentName:"msup"},"6"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^6")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"6")))))))))))),"\uff0c\u8d85\u65f6\u7684\u53ef\u80fd\u6027\u4e0d\u5927\u3002"),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var canPartition = function (nums) {\n    const sum = nums.reduce((a, c) => a + c, 0);\n    if (sum % 2) return false;\n\n    const target = sum / 2, set = new Set();\n    for (const n of nums) {\n        if (n > target) continue;\n        if (target === n || set.has(target - n)) return true;\n        for (const s of [...set]) if (n + s < target) set.add(n + s);\n        set.add(n);\n    }\n\n    return false;\n};\n")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n*target)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(target)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 112 ms"),(0,m.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 47.1 MB")))}k.isMDXComponent=!0}}]);