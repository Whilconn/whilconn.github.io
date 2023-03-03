"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[27996],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>h});var s=t(67294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),N=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=N(a.components);return s.createElement(l.Provider,{value:e},a.children)},k="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},o=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=N(t),o=n,h=k["".concat(l,".").concat(o)]||k[o]||c[o]||m;return t?s.createElement(h,p(p({ref:e},i),{},{components:t})):s.createElement(h,p({ref:e},i))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=o;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[k]="string"==typeof a?a:n,p[1]=r;for(var N=2;N<m;N++)p[N]=t[N];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}o.displayName="MDXCreateElement"},53054:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>r,toc:()=>N});var s=t(87462),n=(t(67294),t(3905));const m={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u6392\u5e8f"],date:new Date("2022-11-18T00:00:00.000Z")},p=void 0,r={permalink:"/algorithm/2022/11/18/891.\u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c",source:"@site/algorithm/2022/11/18/891.\u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c.md",title:"891.\u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c",description:"1\u3001\u9898\u5e72",date:"2022-11-18T00:00:00.000Z",formattedDate:"2022\u5e7411\u670818\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:2.605,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u6392\u5e8f"],date:"2022-11-18T00:00:00.000Z"},prevItem:{title:"808.\u5206\u6c64",permalink:"/algorithm/2022/11/21/808.\u5206\u6c64"},nextItem:{title:"792.\u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570",permalink:"/algorithm/2022/11/17/792.\u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570"}},l={authorsImageUrls:[void 0]},N=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],i={toc:N};function k(a){let{components:e,...m}=a;return(0,n.kt)("wrapper",(0,s.Z)({},i,m,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e8f\u5217\u7684 ",(0,n.kt)("strong",null,"\u5bbd\u5ea6")," \u5b9a\u4e49\u4e3a\u8be5\u5e8f\u5217\u4e2d\u6700\u5927\u5143\u7d20\u548c\u6700\u5c0f\u5143\u7d20\u7684\u5dee\u503c\u3002"),(0,n.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,n.kt)("code",null,"nums")," \uff0c\u8fd4\u56de ",(0,n.kt)("code",null,"nums")," \u7684\u6240\u6709\u975e\u7a7a ",(0,n.kt)("strong",null,"\u5b50\u5e8f\u5217")," \u7684 ",(0,n.kt)("strong",null,"\u5bbd\u5ea6\u4e4b\u548c")," \u3002\u7531\u4e8e\u7b54\u6848\u53ef\u80fd\u975e\u5e38\u5927\uff0c\u8bf7\u8fd4\u56de\u5bf9 ",(0,n.kt)("code",null,"10",(0,n.kt)("sup",null,"9")," + 7")," ",(0,n.kt)("strong",null,"\u53d6\u4f59")," \u540e\u7684\u7ed3\u679c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",null,"\u5b50\u5e8f\u5217")," \u5b9a\u4e49\u4e3a\u4ece\u4e00\u4e2a\u6570\u7ec4\u91cc\u5220\u9664\u4e00\u4e9b\uff08\u6216\u8005\u4e0d\u5220\u9664\uff09\u5143\u7d20\uff0c\u4f46\u4e0d\u6539\u53d8\u5269\u4e0b\u5143\u7d20\u7684\u987a\u5e8f\u5f97\u5230\u7684\u6570\u7ec4\u3002\u4f8b\u5982\uff0c",(0,n.kt)("code",null,"[3,6,2,7]")," \u5c31\u662f\u6570\u7ec4 ",(0,n.kt)("code",null,"[0,3,1,6,2,2,7]")," \u7684\u4e00\u4e2a\u5b50\u5e8f\u5217\u3002"),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,(0,n.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [2,1,3]",(0,n.kt)("br",null),(0,n.kt)("strong",null,"\u8f93\u51fa\uff1a"),"6",(0,n.kt)("br",null),(0,n.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5b50\u5e8f\u5217\u4e3a [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3] \u3002",(0,n.kt)("br",null),"\u76f8\u5e94\u7684\u5bbd\u5ea6\u662f 0, 0, 0, 1, 1, 2, 2 \u3002",(0,n.kt)("br",null),"\u5bbd\u5ea6\u4e4b\u548c\u662f 6 \u3002",(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [2]",(0,n.kt)("br",null),(0,n.kt)("strong",null,"\u8f93\u51fa\uff1a"),"0",(0,n.kt)("br",null)),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,(0,n.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("code",null,"1 <= nums.length <= 10",(0,n.kt)("sup",null,"5"))),(0,n.kt)("li",null,(0,n.kt)("code",null,"1 <= nums[i] <= 10",(0,n.kt)("sup",null,"5")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Problem: ",(0,n.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/sum-of-subsequence-widths/description/"},"891. \u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c"))),(0,n.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,n.kt)("p",null,"\u8fd8\u5f97\u662f\u6309\u5b98\u89e3\u7684\u6392\u5e8f+\u8ba1\u7b97\u8d21\u732e\u503c\u7684\u601d\u8def\u53bb\u505a\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u957f\u5ea6\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"n")," \u7684\u6574\u6570\u6570\u7ec4 ",(0,n.kt)("inlineCode",{parentName:"li"},"nums")," \u5347\u5e8f\u6392\u5217"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u7ec4 ",(0,n.kt)("inlineCode",{parentName:"li"},"nums")," \u4e2d\u7b2c ",(0,n.kt)("inlineCode",{parentName:"li"},"i")," \u4e2a\u6574\u6570\u8d21\u732e\u7684\u6700\u5c0f\u503c\u6b21\u6570\u662f\uff1a ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"2"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"1"))),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"1")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2 ^ {n-i-1} - 1")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.908em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8247em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))))),(0,n.kt)("li",{parentName:"ul"},"\u6570\u7ec4 ",(0,n.kt)("inlineCode",{parentName:"li"},"nums")," \u4e2d\u7b2c ",(0,n.kt)("inlineCode",{parentName:"li"},"i")," \u4e2a\u6574\u6570\u8d21\u732e\u7684\u6700\u5927\u503c\u6b21\u6570\u662f\uff1a ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"2"),(0,n.kt)("mi",{parentName:"msup"},"i")),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"1")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2 ^ i - 1")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.908em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8247em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))))),(0,n.kt)("li",{parentName:"ul"},"\u7d2f\u8ba1\u6bcf\u4e2a\u5143\u7d20\u7684\u8d21\u732e\u503c ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,n.kt)("mo",{parentName:"mrow"},"\u2217"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"2"),(0,n.kt)("mi",{parentName:"msup"},"i")),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"m"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,n.kt)("mo",{parentName:"mrow"},"\u2217"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"2"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"1"))),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums[i] * (2 ^ i - 1) - nums[i] * (2 ^ {n-i-1} - 1)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"["),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0747em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8247em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"["),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0747em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8247em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,n.kt)("p",null,"\u8ba1\u7b97\u8d21\u732e\u6b21\u6570\u5b9e\u9645\u662f\u8ba1\u7b97\u7ec4\u5408\u6570\uff1a",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msubsup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msubsup"},"C"),(0,n.kt)("mi",{parentName:"msubsup"},"n"),(0,n.kt)("mn",{parentName:"msubsup"},"1")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msubsup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msubsup"},"C"),(0,n.kt)("mi",{parentName:"msubsup"},"n"),(0,n.kt)("mn",{parentName:"msubsup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msubsup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msubsup"},"C"),(0,n.kt)("mi",{parentName:"msubsup"},"n"),(0,n.kt)("mi",{parentName:"msubsup"},"n"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C_{n}^{1} + C_{n}^{2} + ... + C_{n}^{n}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0611em",verticalAlign:"-0.247em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.453em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.247em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0611em",verticalAlign:"-0.247em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.453em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.247em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"..."),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9303em",verticalAlign:"-0.247em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.453em",marginLeft:"-0.0715em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.247em"}},(0,n.kt)("span",{parentName:"span"}))))))))))),(0,n.kt)("p",null,"\u7531\u4e8e\u6570\u636e\u8fc7\u5927\u9700\u8981\u53d6\u4f59\uff0c\u7b2c\u4e00\u7248\u7528\u5feb\u901f\u5e42\u5b9e\u73b0\uff0c\u5c45\u7136\u53ea\u901a\u8fc7\u4e86 20+ \u4e2a\u7528\u4f8b\uff0c\u771f\u662f\u88c2\u5f00\u4e86\ud83d\ude33\uff1b\u628a\u5feb\u901f\u5e42\u6539\u6210\u6253\u8868\u540e\u8fc7\u4e86\u3002\u3002\u3002"),(0,n.kt)("h2",{id:"3code"},"3\u3001Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function sumSubseqWidths(nums: number[]): number {\n    const n = nums.length, MOD = 1e9 + 7;\n    nums.sort((a, b) => a - b);\n    const pow = new Array(n).fill(1);\n    for (let i = 1; i < n; i++) pow[i] = 2 * pow[i - 1] % MOD;\n\n    let res = 0;\n    for (let i = 0; i < n; i++) {\n        res = (res + nums[i] * (pow[i] - pow[n - i - 1])) % MOD;\n    }\n\n    return res;\n};\n")),(0,n.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"O"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow"},"\u2217"),(0,n.kt)("mi",{parentName:"mrow"},"l"),(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n*logn)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,n.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"O"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,n.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image.png",src:t(22407).Z,width:"1520",height:"400"})))}k.isMDXComponent=!0},22407:(a,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/2d3a3a809c6a7f7d2ff6b5a0899daf18-71411fd74e9c2669cdd22fe746959508.png"}}]);