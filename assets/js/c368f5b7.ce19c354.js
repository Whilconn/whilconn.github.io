"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[10689],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>h});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},k="mdxType",o={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),k=i(t),c=s,h=k["".concat(l,".").concat(c)]||k[c]||o[c]||m;return t?n.createElement(h,p(p({ref:e},N),{},{components:t})):n.createElement(h,p({ref:e},N))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[k]="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},55503:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>r,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const m={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],date:"2022/1/22"},p=void 0,r={permalink:"/algorithm/647.\u56de\u6587\u5b50\u4e32",source:"@site/algorithm/647.\u56de\u6587\u5b50\u4e32.md",title:"647.\u56de\u6587\u5b50\u4e32",description:"1\u3001\u9898\u5e72",date:"2022-01-22T00:00:00.000Z",formattedDate:"2022\u5e741\u670822\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:4.4,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],date:"2022/1/22"},prevItem:{title:"2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",permalink:"/algorithm/2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4"},nextItem:{title:"\u5251\u6307 Offer II 020.\u56de\u6587\u5b50\u5b57\u7b26\u4e32\u7684\u4e2a\u6570",permalink:"/algorithm/\u5251\u6307 Offer II 020.\u56de\u6587\u5b50\u5b57\u7b26\u4e32\u7684\u4e2a\u6570"}},l={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u66b4\u529b\u89e3\u6cd5",id:"2\u89e3\u6cd51-\u66b4\u529b\u89e3\u6cd5",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u89e3\u6cd52-\u53cc\u6307\u9488",id:"6\u89e3\u6cd52-\u53cc\u6307\u9488",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2},{value:"10\u3001\u89e3\u6cd53-\u4e2d\u5fc3\u6269\u5c55",id:"10\u89e3\u6cd53-\u4e2d\u5fc3\u6269\u5c55",level:2},{value:"11\u3001\u4ee3\u7801",id:"11\u4ee3\u7801",level:2},{value:"12\u3001\u590d\u6742\u5ea6",id:"12\u590d\u6742\u5ea6",level:2},{value:"13\u3001\u6267\u884c\u7ed3\u679c",id:"13\u6267\u884c\u7ed3\u679c",level:2}],N={toc:i};function k(a){let{components:e,...m}=a;return(0,s.kt)("wrapper",(0,n.Z)({},N,m,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,s.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," \uff0c\u8bf7\u4f60\u7edf\u8ba1\u5e76\u8fd4\u56de\u8fd9\u4e2a\u5b57\u7b26\u4e32\u4e2d ",(0,s.kt)("strong",{parentName:"p"},"\u56de\u6587\u5b50\u4e32")," \u7684\u6570\u76ee\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u56de\u6587\u5b57\u7b26\u4e32")," \u662f\u6b63\u7740\u8bfb\u548c\u5012\u8fc7\u6765\u8bfb\u4e00\u6837\u7684\u5b57\u7b26\u4e32\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5b50\u5b57\u7b26\u4e32")," \u662f\u5b57\u7b26\u4e32\u4e2d\u7684\u7531\u8fde\u7eed\u5b57\u7b26\u7ec4\u6210\u7684\u4e00\u4e2a\u5e8f\u5217\u3002"),(0,s.kt)("p",null,"\u5177\u6709\u4e0d\u540c\u5f00\u59cb\u4f4d\u7f6e\u6216\u7ed3\u675f\u4f4d\u7f6e\u7684\u5b50\u4e32\uff0c\u5373\u4f7f\u662f\u7531\u76f8\u540c\u7684\u5b57\u7b26\u7ec4\u6210\uff0c\u4e5f\u4f1a\u88ab\u89c6\u4f5c\u4e0d\u540c\u7684\u5b50\u4e32\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "abc"',(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 3",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' \u4e09\u4e2a\u56de\u6587\u5b50\u4e32: "a", "b", "c"',(0,s.kt)("br",null))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "aaa"',(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 6",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' 6\u4e2a\u56de\u6587\u5b50\u4e32: "a", "a", "a", "aa", "aa", "aaa"',(0,s.kt)("br",null))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 1000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),(0,s.kt)("h2",{id:"2\u89e3\u6cd51-\u66b4\u529b\u89e3\u6cd5"},"2\u3001\u89e3\u6cd51-\u66b4\u529b\u89e3\u6cd5"),(0,s.kt)("p",null,"\u53cc\u6307\u9488 ",(0,s.kt)("inlineCode",{parentName:"p"},"i")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"j")," \u679a\u4e3e\u6240\u6709\u5b50\u4e32\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\uff0c\u904d\u5386 ",(0,s.kt)("inlineCode",{parentName:"p"},"i")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"j")," \u533a\u95f4\u6bb5\u5185\u7684\u5b57\u7b26\u5224\u65ad\u5176\u662f\u5426\u56de\u6587\u3002"),(0,s.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u65f6\u95f4\u590d\u6742\u5ea6\u662f ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"3")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u590d\u6742\u5ea6\u592a\u9ad8\uff0c\u5982\u679c\u6570\u636e\u91cf\u518d\u5927\u70b9\u53ef\u80fd\u4f1a\u8d85\u65f6\u3002\u5176\u4e2d\u53cc\u6307\u9488\u679a\u4e3e\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u56de\u6587\u5224\u65ad\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002\u89e3\u6cd52\u5c31\u662f\u5728\u6b64\u57fa\u7840\u4e0a\u4f18\u5316\u4e86\u56de\u6587\u5224\u65ad\u7684\u590d\u6742\u5ea6\u3002"),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var countSubstrings = function (s) {\n    function isPal(s, l, r) {\n        for (let i = l; i < (l + r) / 2; i++) {\n            if (s[i] !== s[l + r - i - 1]) return false;\n        }\n        return true\n    }\n\n    let count = 0;\n    for (let i = 0; i < s.length; i++) {\n        for (let j = i + 1; j <= s.length; j++) {\n            if (isPal(s, i, j)) count++;\n        }\n    }\n\n    return count;\n};\n")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"3")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 308 ms"),(0,s.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 38.4 MB")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"6\u89e3\u6cd52-\u53cc\u6307\u9488"},"6\u3001\u89e3\u6cd52-\u53cc\u6307\u9488"),(0,s.kt)("p",null,"\u8be5\u89e3\u6cd5\u662f\u89e3\u6cd51\u7684\u4f18\u5316\u7248\u672c\u3002\u5148\u4f7f\u7528\u53cc\u6307\u9488 ",(0,s.kt)("inlineCode",{parentName:"p"},"i")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"j")," \u679a\u4e3e\u6240\u6709\u5b50\u4e32\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\uff0c\u540c\u65f6\u5206\u522b\u6309\u987a\u5e8f\u548c\u9006\u5e8f\u7d2f\u52a0\u6240\u6709\u904d\u5386\u8fc7\u7684\u5b57\u7b26\u5f97\u5230\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"p"},"s1")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"s2"),"\uff0c\u5224\u65ad\u662f\u5426\u56de\u6587\u53ea\u9700\u5bf9 ",(0,s.kt)("inlineCode",{parentName:"p"},"s1")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"s2")," \u5224\u7b49\u5373\u53ef\u3002\u8fd9\u91cc\u5c06\u56de\u6587\u5224\u65ad\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4ece ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u4f18\u5316\u5230  ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u4f46\u6574\u4f53\u7a7a\u95f4\u590d\u6742\u5ea6\u4ece ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u5347\u5230  ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u7b97\u662f\u7a7a\u95f4\u6362\u65f6\u95f4\u3002"),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var countSubstrings = function (s) {\n    let count = 0;\n    for (let i = 0; i < s.length; i++) {\n        let s1 = '', s2 = '';\n        for (let j = i; j < s.length; j++) {\n            s1 += s[j], s2 = s[j] + s2;\n            if (s1 === s2) count++;\n        }\n    }\n\n    return count;\n};\n")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 196 ms"),(0,s.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 44.3 MB")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u7684\u6267\u884c\u7528\u65f6\u4ecd\u7136\u6bd4\u8f83\u9ad8\uff0c\u662f\u56e0\u4e3a\u5b57\u7b26\u4e32\u62fc\u63a5\u5c5e\u4e8e\u8017\u65f6\u64cd\u4f5c\u3002")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"10\u89e3\u6cd53-\u4e2d\u5fc3\u6269\u5c55"},"10\u3001\u89e3\u6cd53-\u4e2d\u5fc3\u6269\u5c55"),(0,s.kt)("p",null,"\u679a\u4e3e\u6240\u6709\u53ef\u80fd\u7684\u56de\u6587\u4e2d\u5fc3 ",(0,s.kt)("inlineCode",{parentName:"p"},"s[i]")," \u6216 ",(0,s.kt)("inlineCode",{parentName:"p"},"s[i]\u3001s[i + 1]"),"\uff0c\u82e5\u56de\u6587\u5b50\u4e32\u957f\u5ea6\u4e3a\u5947\u6570\u5219\u5176\u4e2d\u5fc3\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"s[i]"),"\uff0c\u56de\u6587\u5b50\u4e32\u957f\u5ea6\u4e3a\u5076\u6570\u5219\u5176\u4e2d\u5fc3\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"s[i]\u3001s[i + 1]"),"\uff1b\u4ee5\u4e2d\u5fc3\u5411\u5de6\u53f3\u4e24\u8fb9\u6269\u5c55\uff0c\u5373\u5de6\u8fb9\u754c ",(0,s.kt)("inlineCode",{parentName:"p"},"l")," \u51cf\u4e00\u53f3\u8fb9\u754c ",(0,s.kt)("inlineCode",{parentName:"p"},"r")," \u52a01\uff0c\u5982\u679c ",(0,s.kt)("inlineCode",{parentName:"p"},"s[l]")," \u4e0e ",(0,s.kt)("inlineCode",{parentName:"p"},"s[r]")," \u76f8\u7b49\u5219\u56de\u6587\u6570\u52a01\u3002  "),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"11\u4ee3\u7801"},"11\u3001\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var countSubstrings = function (s) {\n    let count = 0;\n    for (let i = 0; i < s.length; i++) {\n        for (let l = i, r = i; l >= 0 && s[l] === s[r]; l--, r++) count++;\n        for (let l = i, r = i + 1; l >= 0 && s[l] === s[r]; l--, r++) count++;\n    }\n    return count;\n};\n")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"12\u590d\u6742\u5ea6"},"12\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"13\u6267\u884c\u7ed3\u679c"},"13\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image.png",src:t(46350).Z,width:"1232",height:"500"})))}k.isMDXComponent=!0},46350:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/1642831231-vexUNc-image-1b73f70081e20b69e37b592745f2a169.png"}}]);