"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[90824],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>N});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var p=n.createContext({}),o=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},i=function(a){var e=o(a.components);return n.createElement(p.Provider,{value:e},a.children)},c="mdxType",k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,p=a.parentName,i=l(a,["components","mdxType","originalType","parentName"]),c=o(t),u=m,N=c["".concat(p,".").concat(u)]||c[u]||k[u]||r;return t?n.createElement(N,s(s({ref:e},i),{},{components:t})):n.createElement(N,s({ref:e},i))}));function N(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,s=new Array(r);s[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=a,l[c]="string"==typeof a?a:m,s[1]=l;for(var o=2;o<r;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45664:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=t(87462),m=(t(67294),t(3905));const r={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:new Date("2021-12-29T00:00:00.000Z")},s=void 0,l={permalink:"/algorithm/2021/12/29/\u5251\u6307 Offer II 050.\u5411\u4e0b\u7684\u8def\u5f84\u8282\u70b9\u4e4b\u548c",source:"@site/algorithm/2021/12/29/\u5251\u6307 Offer II 050.\u5411\u4e0b\u7684\u8def\u5f84\u8282\u70b9\u4e4b\u548c.md",title:"\u5251\u6307 Offer II 050.\u5411\u4e0b\u7684\u8def\u5f84\u8282\u70b9\u4e4b\u548c",description:"1\u3001\u9898\u5e72",date:"2021-12-29T00:00:00.000Z",formattedDate:"2021\u5e7412\u670829\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:3.58,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021-12-29T00:00:00.000Z"},prevItem:{title:"LCR 050.\u8def\u5f84\u603b\u548c III",permalink:"/algorithm/2021/12/29/LCR 050.\u8def\u5f84\u603b\u548c III"},nextItem:{title:"472.\u8fde\u63a5\u8bcd",permalink:"/algorithm/2021/12/28/472.\u8fde\u63a5\u8bcd"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51",id:"2\u89e3\u6cd51",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd52",id:"5\u89e3\u6cd52",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u6267\u884c\u7ed3\u679c",id:"7\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function c(a){let{components:e,...r}=a;return(0,m.kt)("wrapper",(0,n.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,m.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 ",(0,m.kt)("code",null,"root"),"\xa0\uff0c\u548c\u4e00\u4e2a\u6574\u6570 ",(0,m.kt)("code",null,"targetSum")," \uff0c\u6c42\u8be5\u4e8c\u53c9\u6811\u91cc\u8282\u70b9\u503c\u4e4b\u548c\u7b49\u4e8e ",(0,m.kt)("code",null,"targetSum")," \u7684 ",(0,m.kt)("strong",null,"\u8def\u5f84")," \u7684\u6570\u76ee\u3002"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u8def\u5f84")," \u4e0d\u9700\u8981\u4ece\u6839\u8282\u70b9\u5f00\u59cb\uff0c\u4e5f\u4e0d\u9700\u8981\u5728\u53f6\u5b50\u8282\u70b9\u7ed3\u675f\uff0c\u4f46\u662f\u8def\u5f84\u65b9\u5411\u5fc5\u987b\u662f\u5411\u4e0b\u7684\uff08\u53ea\u80fd\u4ece\u7236\u8282\u70b9\u5230\u5b50\u8282\u70b9\uff09\u3002"),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,m.kt)("p",null,(0,m.kt)("img",{src:t(4706).Z})),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),"3",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u548c\u7b49\u4e8e 8 \u7684\u8def\u5f84\u6709 3 \u6761\uff0c\u5982\u56fe\u6240\u793a\u3002",(0,m.kt)("br",null)),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),"3",(0,m.kt)("br",null)),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u63d0\u793a:")),(0,m.kt)("ul",null,(0,m.kt)("li",null,"\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e2a\u6570\u7684\u8303\u56f4\u662f ",(0,m.kt)("code",null,"[0,1000]")),(0,m.kt)("li",null,(0,m.kt)("meta",{charset:"UTF-8"}),(0,m.kt)("code",null,"-10",(0,m.kt)("sup",null,(0,m.kt)("span",null,"9")),"\xa0<= Node.val <= 10",(0,m.kt)("sup",null,(0,m.kt)("span",null,"9"))),"\xa0"),(0,m.kt)("li",null,(0,m.kt)("code",null,"-1000\xa0<= targetSum\xa0<= 1000"),"\xa0")),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 437\xa0\u9898\u76f8\u540c\uff1a",(0,m.kt)("a",{href:"https://leetcode-cn.com/problems/path-sum-iii/"},"https://leetcode-cn.com/problems/path-sum-iii/")),(0,m.kt)("h2",{id:"2\u89e3\u6cd51"},"2\u3001\u89e3\u6cd51"),(0,m.kt)("p",null,"\u4f7f\u7528DFS\u9012\u5f52\u904d\u5386\u6811\u7684\u6240\u6709\u8282\u70b9\uff0c\u9012\u5f52\u51fd\u6570\u63a5\u6536\u4e0a\u5c42\u4f20\u9012\u4e0b\u6765\u7684\u8def\u5f84\u4e0a\u6240\u6709\u524d\u7f00\u548c\uff0c\u904d\u5386\u6240\u6709\u524d\u7f00\u548c\u5e76\u8ba1\u7b97\u662f\u5426\u5b58\u5728\u548c\u7b49\u4e8e",(0,m.kt)("inlineCode",{parentName:"p"},"targetSum"),"\u7684\u8def\u5f84\uff08\u8ba1\u7b97\u516c\u5f0f",(0,m.kt)("inlineCode",{parentName:"p"},"node.val + sums[sums.length - 1] - (sums[i] || 0) === targetSum"),"\uff09\uff0c\u5b58\u5728\u5219\u6700\u7ec8\u7ed3\u679c",(0,m.kt)("inlineCode",{parentName:"p"},"+1"),"\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlogn)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u4e0a\u8ff0\u65f6\u95f4\u590d\u6742\u5ea6\u662f\u4f30\u7b97\u503c\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u8282\u70b9\u9700\u8981\u8bbf\u95ee\u4e00\u6b21\uff0c\u56e0\u6b64\u81f3\u5c11\u6709",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u7684\u590d\u6742\u5ea6\uff0c\u53e6\u5916\u6bcf\u4e2a\u8282\u70b9\u5185\u90e8\u9700\u8981\u518d\u904d\u5386\u524d\u7f00\u548c\u6570\u7ec4\uff0c\u800c\u6570\u7ec4\u957f\u5ea6\u6700\u5927\u4e3a\u6811\u7684\u6700\u5927\u9ad8\u5ea6",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"logn")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"\uff0c\u56e0\u6b64\u7efc\u5408\u4f30\u7b97\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlogn)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002")),(0,m.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var pathSum = function (root, targetSum) {\n    if (!root) return 0;\n    let res = root.val === targetSum ? 1 : 0;\n\n    function dfs(node, sums) {\n        if (!node) return;\n        for (let i = -1; i < sums.length; i++) {\n            if (node.val + sums[sums.length - 1] - (sums[i] || 0) === targetSum) res++;\n        }\n\n        dfs(node.left, [...sums, (sums[sums.length - 1] || 0) + node.val]);\n        dfs(node.right, [...sums, (sums[sums.length - 1] || 0) + node.val]);\n    }\n\n    return dfs(root, []), res;\n};\n")),(0,m.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 148 ms  \u5185\u5b58\u6d88\u8017: 57.8 MB")),(0,m.kt)("h2",{id:"5\u89e3\u6cd52"},"5\u3001\u89e3\u6cd52"),(0,m.kt)("p",null,"\u8be5\u89e3\u6cd5\u662f\u89e3\u6cd51\u7684\u4f18\u5316\u7248\u672c\uff0c\u5229\u7528\u4e86\u54c8\u5e0c\u8868\u5b58\u50a8\u524d\u7f00\u548c\uff0c\u53e6\u5916\u4f7f\u7528\u4e86\u56de\u6eaf\u7684\u601d\u60f3\u91cd\u7f6e\u524d\u7f00\u548c\u72b6\u6001\uff0c\u4f18\u5316\u540e\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u540c\u6837\u4f7f\u7528DFS\u9012\u5f52\u904d\u5386\u6811\u7684\u6240\u6709\u8282\u70b9\uff0c\u4f46\u4f7f\u7528",(0,m.kt)("inlineCode",{parentName:"li"},"Map"),"\u5b58\u50a8\u524d\u7f00\u548c\u53ca\u5176\u6570\u91cf\uff0c\u9012\u5f52\u65f6\u5728",(0,m.kt)("inlineCode",{parentName:"li"},"Map"),"\u4e2d\u67e5\u627e\u662f\u5426\u5df2\u5b58\u5728\u7b49\u4e8e",(0,m.kt)("inlineCode",{parentName:"li"},"sum - targetSum"),"\u7684\u8def\u5f84\u524d\u7f00\u548c\uff0c\u5b58\u5728\u5219\u6700\u7ec8\u7ed3\u679c\u7d2f\u52a0\u5176\u6570\u91cf"),(0,m.kt)("li",{parentName:"ul"},"\u5c06\u5f53\u524d\u8def\u5f84\u603b\u548c\u5bf9\u5e94\u7684\u6570\u91cf\u7d2f\u52a01"),(0,m.kt)("li",{parentName:"ul"},"\u7136\u540e\u8fdb\u5165\u4e0b\u5c42\u9012\u5f52\uff0c\u540c\u6837\u6267\u884c\u4e0a\u8ff0\u903b\u8f91"),(0,m.kt)("li",{parentName:"ul"},"\u4e0b\u5c42\u9012\u5f52\u7ed3\u675f\u65f6\uff0c\u5c06\u5f53\u524d\u8def\u5f84\u603b\u548c\u5bf9\u5e94\u7684\u6570\u91cf\u7d2f\u51cf1")),(0,m.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var pathSum = function (root, targetSum) {\n    if (!root) return 0;\n    let res = 0, map = new Map();\n    map.set(0, 1);\n\n    function dfs(node, sum) {\n        if (!node) return;\n        sum = sum + node.val;\n        res += map.get(sum - targetSum) || 0;\n        map.set(sum, (map.get(sum) || 0) + 1);\n        dfs(node.left, sum);\n        dfs(node.right, sum);\n        map.set(sum, map.get(sum) - 1);\n    }\n\n    return dfs(root, 0), res;\n};\n")),(0,m.kt)("h2",{id:"7\u6267\u884c\u7ed3\u679c"},"7\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"1.png",src:t(31369).Z,width:"1360",height:"486"})))}c.isMDXComponent=!0},4706:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/d65ec1b5b1e7e2f2268e537c64391d52-db57c2d6ce0ae43a68e6b9f2ed4ad823.jpg"},31369:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/2335933f2c5c1d705b681d606b1875d9-758222baaceee0d4bba66c3ea047edac.png"}}]);