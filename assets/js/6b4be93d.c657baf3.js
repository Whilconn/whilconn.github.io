"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[49280],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>u});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},N=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},k="mdxType",o={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,l=a.parentName,N=p(a,["components","mdxType","originalType","parentName"]),k=i(t),c=m,u=k["".concat(l,".").concat(c)]||k[c]||o[c]||s;return t?n.createElement(u,r(r({ref:e},N),{},{components:t})):n.createElement(u,r({ref:e},N))}));function u(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[k]="string"==typeof a?a:m,r[1]=p;for(var i=2;i<s;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42453:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=t(87462),m=(t(67294),t(3905));const s={authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u6570\u7ec4","\u6570\u5b66","\u52a8\u6001\u89c4\u5212","\u72b6\u6001\u538b\u7f29"],date:"2022/2/22"},r=void 0,p={permalink:"/algorithm/1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee",source:"@site/algorithm/1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee.md",title:"1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee",description:"1\u3001\u9898\u5e72",date:"2022-02-22T00:00:00.000Z",formattedDate:"2022\u5e742\u670822\u65e5",tags:[{label:"\u4f4d\u8fd0\u7b97",permalink:"/algorithm/tags/\u4f4d\u8fd0\u7b97"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u72b6\u6001\u538b\u7f29",permalink:"/algorithm/tags/\u72b6\u6001\u538b\u7f29"}],readingTime:4.925,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u6570\u7ec4","\u6570\u5b66","\u52a8\u6001\u89c4\u5212","\u72b6\u6001\u538b\u7f29"],date:"2022/2/22"},prevItem:{title:"917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",permalink:"/algorithm/917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd"},nextItem:{title:"22.\u62ec\u53f7\u751f\u6210",permalink:"/algorithm/22.\u62ec\u53f7\u751f\u6210"}},l={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],N={toc:i};function k(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,m.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\xa0",(0,m.kt)("inlineCode",{parentName:"p"},"nums"),"\xa0\u3002\u5982\u679c\xa0",(0,m.kt)("inlineCode",{parentName:"p"},"nums"),"\xa0\u7684\u4e00\u4e2a\u5b50\u96c6\u4e2d\uff0c\u6240\u6709\u5143\u7d20\u7684\u4e58\u79ef\u53ef\u4ee5\u8868\u793a\u4e3a\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,m.kt)("strong",{parentName:"p"},"\u4e92\u4e0d\u76f8\u540c\u7684\u8d28\u6570")," \u7684\u4e58\u79ef\uff0c\u90a3\u4e48\u6211\u4eec\u79f0\u5b83\u4e3a\xa0",(0,m.kt)("strong",{parentName:"p"},"\u597d\u5b50\u96c6"),"\xa0\u3002"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u6bd4\u65b9\u8bf4\uff0c\u5982\u679c\xa0",(0,m.kt)("inlineCode",{parentName:"li"},"nums = [1, 2, 3, 4]"),"\xa0\uff1a",(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"[2, 3]"),"\xa0\uff0c",(0,m.kt)("inlineCode",{parentName:"li"},"[1, 2, 3]"),"\xa0\u548c\xa0",(0,m.kt)("inlineCode",{parentName:"li"},"[1, 3]"),"\xa0\u662f ",(0,m.kt)("strong",{parentName:"li"},"\u597d"),"\xa0\u5b50\u96c6\uff0c\u4e58\u79ef\u5206\u522b\u4e3a\xa0",(0,m.kt)("inlineCode",{parentName:"li"},"6 = 2*3"),"\xa0\uff0c",(0,m.kt)("inlineCode",{parentName:"li"},"6 = 2*3"),"\xa0\u548c\xa0",(0,m.kt)("inlineCode",{parentName:"li"},"3 = 3"),"\xa0\u3002"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"[1, 4]")," \u548c\xa0",(0,m.kt)("inlineCode",{parentName:"li"},"[4]"),"\xa0\u4e0d\u662f ",(0,m.kt)("strong",{parentName:"li"},"\u597d"),"\xa0\u5b50\u96c6\uff0c\u56e0\u4e3a\u4e58\u79ef\u5206\u522b\u4e3a\xa0",(0,m.kt)("inlineCode",{parentName:"li"},"4 = 2*2")," \u548c\xa0",(0,m.kt)("inlineCode",{parentName:"li"},"4 = 2*2"),"\xa0\u3002")))),(0,m.kt)("p",null,"\u8bf7\u4f60\u8fd4\u56de ",(0,m.kt)("inlineCode",{parentName:"p"},"nums"),"\xa0\u4e2d\u4e0d\u540c\u7684\xa0",(0,m.kt)("strong",{parentName:"p"},"\u597d"),"\xa0\u5b50\u96c6\u7684\u6570\u76ee\u5bf9\xa0",(0,m.kt)("inlineCode",{parentName:"p"},"10^9 + 7"),"\xa0",(0,m.kt)("strong",{parentName:"p"},"\u53d6\u4f59"),"\xa0\u7684\u7ed3\u679c\u3002"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"nums"),"\xa0\u4e2d\u7684 ",(0,m.kt)("strong",{parentName:"p"},"\u5b50\u96c6"),"\xa0\u662f\u901a\u8fc7\u5220\u9664 ",(0,m.kt)("inlineCode",{parentName:"p"},"nums"),"\xa0\u4e2d\u4e00\u4e9b\uff08\u53ef\u80fd\u4e00\u4e2a\u90fd\u4e0d\u5220\u9664\uff0c\u4e5f\u53ef\u80fd\u5168\u90e8\u90fd\u5220\u9664\uff09\u5143\u7d20\u540e\u5269\u4f59\u5143\u7d20\u7ec4\u6210\u7684\u6570\u7ec4\u3002\u5982\u679c\u4e24\u4e2a\u5b50\u96c6\u5220\u9664\u7684\u4e0b\u6807\u4e0d\u540c\uff0c\u90a3\u4e48\u5b83\u4eec\u88ab\u89c6\u4e3a\u4e0d\u540c\u7684\u5b50\u96c6\u3002"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},(0,m.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,2,3,4","]",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 6",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u597d\u5b50\u96c6\u4e3a\uff1a",(0,m.kt)("br",null)),(0,m.kt)("ul",{parentName:"blockquote"},(0,m.kt)("li",{parentName:"ul"},"[","1,2","]","\uff1a\u4e58\u79ef\u4e3a 2 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u8d28\u6570 2 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)),(0,m.kt)("li",{parentName:"ul"},"[","1,2,3","]","\uff1a\u4e58\u79ef\u4e3a 6 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u4e92\u4e0d\u76f8\u540c\u7684\u8d28\u6570 2 \u548c 3 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)),(0,m.kt)("li",{parentName:"ul"},"[","1,3","]","\uff1a\u4e58\u79ef\u4e3a 3 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u8d28\u6570 3 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)),(0,m.kt)("li",{parentName:"ul"},"[","2","]","\uff1a\u4e58\u79ef\u4e3a 2 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u8d28\u6570 2 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)),(0,m.kt)("li",{parentName:"ul"},"[","2,3","]","\uff1a\u4e58\u79ef\u4e3a 6 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u4e92\u4e0d\u76f8\u540c\u7684\u8d28\u6570 2 \u548c 3 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)),(0,m.kt)("li",{parentName:"ul"},"[","3","]","\uff1a\u4e58\u79ef\u4e3a 3 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u8d28\u6570 3 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},(0,m.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","4,2,3,15","]",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 5",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u597d\u5b50\u96c6\u4e3a\uff1a",(0,m.kt)("br",null)),(0,m.kt)("ul",{parentName:"blockquote"},(0,m.kt)("li",{parentName:"ul"},"[","2","]","\uff1a\u4e58\u79ef\u4e3a 2 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u8d28\u6570 2 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)),(0,m.kt)("li",{parentName:"ul"},"[","2,3","]","\uff1a\u4e58\u79ef\u4e3a 6 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u4e92\u4e0d\u76f8\u540c\u8d28\u6570 2 \u548c 3 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)),(0,m.kt)("li",{parentName:"ul"},"[","2,15","]","\uff1a\u4e58\u79ef\u4e3a 30 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u4e92\u4e0d\u76f8\u540c\u8d28\u6570 2\uff0c3 \u548c 5 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)),(0,m.kt)("li",{parentName:"ul"},"[","3","]","\uff1a\u4e58\u79ef\u4e3a 3 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u8d28\u6570 3 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)),(0,m.kt)("li",{parentName:"ul"},"[","15","]","\uff1a\u4e58\u79ef\u4e3a 15 \uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u4e92\u4e0d\u76f8\u540c\u8d28\u6570 3 \u548c 5 \u7684\u4e58\u79ef\u3002",(0,m.kt)("br",null)))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 30"))),(0,m.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u72b6\u6001\u538b\u7f29\uff1a\u5bf9\u6570\u7ec4 ",(0,m.kt)("inlineCode",{parentName:"li"},"nums")," \u4f7f\u7528\u54c8\u5e0c\u8868\u8ba1\u6570\uff0c\u6240\u6709\u7684\u952e\u90fd\u4f1a\u96c6\u4e2d\u5728 ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"30"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1,30]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"30"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]")))))," \u8fd9\u4e2a\u533a\u95f4"),(0,m.kt)("li",{parentName:"ul"},"\u4ece\u54c8\u5e0c\u8868\u4e2d\u5254\u9664\u5b58\u5728\u591a\u4e2a\u76f8\u540c\u56e0\u5b50\u7684\u6570\uff0c\u6bd4\u5982",(0,m.kt)("inlineCode",{parentName:"li"},"4"),",",(0,m.kt)("inlineCode",{parentName:"li"},"8"),",",(0,m.kt)("inlineCode",{parentName:"li"},"12")),(0,m.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,m.kt)("inlineCode",{parentName:"li"},"BFS")," \u601d\u8def\u5bf9\u7b26\u5408\u8981\u6c42\u7684\u6570\u5b57\u8fdb\u884c\u597d\u5b50\u96c6\u7ec4\u5408\uff0c\u7b2c\u4e00\u5c42\u4e3a1\u4e2a\u6570\u7684\u7ec4\u5408\uff0c\u7b2c\u4e8c\u5c42\u4e3a2\u4e2a\u6570\u7684\u7ec4\u5408\uff0c\u4ee5\u6b64\u7c7b\u63a8"),(0,m.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u8fc7\u7a0b\u4e2d\u8bb0\u5f97\u5254\u9664\u6389\u5b58\u5728\u6700\u5927\u516c\u7ea6\u6570\u4e0d\u4e3a1\u7684\u60c5\u51b5\uff0c\u53e6\u5916\u6ce8\u610f\u53bb\u91cd"),(0,m.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u6bcf\u5c42\u597d\u5b50\u96c6\u6570\u91cf\u5e76\u7d2f\u52a0",(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},"\u597d\u5b50\u96c6\u6570\u91cf\u7b49\u4e8e\u5b50\u96c6\u5404\u5143\u7d20\u4e2a\u6570\u76f8\u4e58"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"\u82e5\u5b50\u96c6\u4e2d\u5b58\u5728 ",(0,m.kt)("span",{parentName:"strong",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),"\uff0c\u4e0d\u662f\u4e58\u4ee5 ",(0,m.kt)("span",{parentName:"strong",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))," \u7684\u6570\u91cf ",(0,m.kt)("span",{parentName:"strong",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),"\uff0c\u800c\u5e94\u8be5\u4e58\u4ee5 ",(0,m.kt)("span",{parentName:"strong",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))," \u7684\u7ec4\u5408\u603b\u6570 ",(0,m.kt)("span",{parentName:"strong",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mn",{parentName:"mrow"},"1"))),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{c1}-1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),"\uff0c\u7531\u4e8e ",(0,m.kt)("span",{parentName:"strong",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))," \u53ef\u80fd\u5f88\u5927\u76f4\u63a5\u8ba1\u7b97\u4f1a\u6ea2\u51fa\uff0c\u53ef\u4ee5\u4f7f\u7528\u7d2f\u4e58\u5e76\u6a21 ",(0,m.kt)("span",{parentName:"strong",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mn",{parentName:"mrow"},"9"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mn",{parentName:"mrow"},"7")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1e9+7")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord"},"9"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"7"))))))," ")))),(0,m.kt)("br",null),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u8fd9\u9053\u9898\u6700\u5927\u7684\u5751\u5728\u4e8e\u5bf9\u6570\u5b57 ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))," \u7684\u7279\u6b8a\u5904\u7406\uff0c\u8fd9\u4e2a\u89e3\u6cd5\u548c\u4ee3\u7801\u90fd\u4e0d\u662f\u6700\u4f18\u7684\uff0c\u62bd\u7a7a\u518d\u4f18\u5316\u4e86")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var numberOfGoodSubsets = function (nums) {\n    const MOD = 1e9 + 7;\n    const nMap = nums.reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());\n    const bNums = [4, 9, 16, 25, 8, 27, 16];\n    const gNums = [...nMap.keys()].filter(n => bNums.every((b) => n % b)).sort((a, b) => a - b);\n    const gcd = (a, b) => (b ? gcd(b, a % b) : a);\n\n    let cn1 = 1;\n    for (let c1 = nMap.get(1); c1; c1--) cn1 = 2 * cn1 % MOD;\n\n    let count = 0, queue = gNums.map((n) => [n]);\n    while (queue.length) {\n        const nextQueue = [];\n        for (const arr of queue) {\n            for (const g of gNums) {\n                if (g <= arr[arr.length - 1] || arr.some((a) => gcd(a, g) > 1)) continue;\n                nextQueue.push([...arr, g]);\n            }\n\n            if (arr.length === 1 && arr[0] === 1) continue;\n            count += arr.reduce((a, c) => {\n                const cn = c > 1 ? nMap.get(c) : cn1 - 1;\n                return a * cn % MOD;\n            }, 1);\n            count = count % MOD;\n        }\n        queue = nextQueue;\n    }\n\n    return count;\n};\n")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 468 ms"),(0,m.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 63.9 MB")))}k.isMDXComponent=!0}}]);