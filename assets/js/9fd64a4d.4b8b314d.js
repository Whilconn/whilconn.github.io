"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[38955],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>h});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},i=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},k="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,l=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),k=o(t),c=m,h=k["".concat(l,".").concat(c)]||k[c]||N[c]||s;return t?n.createElement(h,r(r({ref:e},i),{},{components:t})):n.createElement(h,r({ref:e},i))}));function h(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[k]="string"==typeof a?a:m,r[1]=p;for(var o=2;o<s;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},98570:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=t(87462),m=(t(67294),t(3905));const s={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u641c\u7d22\u6811","\u54c8\u5e0c\u8868","\u53cc\u6307\u9488","\u4e8c\u53c9\u6811"],date:"2022/1/7"},r=void 0,p={permalink:"/algorithm/2022/01/07/\u5251\u6307 Offer II 056.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u4e24\u4e2a\u8282\u70b9\u4e4b\u548c",source:"@site/algorithm/2022/01/07/\u5251\u6307 Offer II 056.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u4e24\u4e2a\u8282\u70b9\u4e4b\u548c.md",title:"\u5251\u6307 Offer II 056.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u4e24\u4e2a\u8282\u70b9\u4e4b\u548c",description:"1\u3001\u9898\u5e72",date:"2022-01-07T00:00:00.000Z",formattedDate:"2022\u5e741\u67087\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u641c\u7d22\u6811"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:2.785,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u641c\u7d22\u6811","\u54c8\u5e0c\u8868","\u53cc\u6307\u9488","\u4e8c\u53c9\u6811"],date:"2022/1/7"},prevItem:{title:"1614.\u62ec\u53f7\u7684\u6700\u5927\u5d4c\u5957\u6df1\u5ea6",permalink:"/algorithm/2022/01/07/1614.\u62ec\u53f7\u7684\u6700\u5927\u5d4c\u5957\u6df1\u5ea6"},nextItem:{title:"71.\u7b80\u5316\u8def\u5f84",permalink:"/algorithm/2022/01/06/71.\u7b80\u5316\u8def\u5f84"}},l={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51",id:"2\u89e3\u6cd51",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u89e3\u6cd52",id:"6\u89e3\u6cd52",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function k(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,m.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u641c\u7d22\u6811\u7684 ",(0,m.kt)("strong",null,"\u6839\u8282\u70b9")," ",(0,m.kt)("code",null,"root"),"\xa0\u548c\u4e00\u4e2a\u6574\u6570 ",(0,m.kt)("code",null,"k")," , \u8bf7\u5224\u65ad\u8be5\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u662f\u5426\u5b58\u5728\u4e24\u4e2a\u8282\u70b9\u5b83\u4eec\u7684\u503c\u4e4b\u548c\u7b49\u4e8e ",(0,m.kt)("code",null,"k")," \u3002\u5047\u8bbe\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u8282\u70b9\u7684\u503c\u5747\u552f\u4e00\u3002"),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165: "),"root =",(0,m.kt)("strong",null," "),"[8,6,10,5,7,9,11], k = 12",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa: "),"true",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u89e3\u91ca: "),"\u8282\u70b9 5 \u548c\u8282\u70b9 7 \u4e4b\u548c\u7b49\u4e8e 12",(0,m.kt)("br",null)),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165: "),"root =",(0,m.kt)("strong",null," "),"[8,6,10,5,7,9,11], k = 22",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa: "),"false",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u89e3\u91ca: "),"\u4e0d\u5b58\u5728\u4e24\u4e2a\u8282\u70b9\u503c\u4e4b\u548c\u4e3a 22 \u7684\u8282\u70b9",(0,m.kt)("br",null)),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,m.kt)("ul",null,(0,m.kt)("li",null,"\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e2a\u6570\u7684\u8303\u56f4\u662f\xa0\xa0",(0,m.kt)("code",null,"[1, 10",(0,m.kt)("sup",null,"4"),"]"),"."),(0,m.kt)("li",null,(0,m.kt)("code",null,"-10",(0,m.kt)("sup",null,"4"),"\xa0<= Node.val <= 10",(0,m.kt)("sup",null,"4"))),(0,m.kt)("li",null,(0,m.kt)("code",null,"root"),"\xa0\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811"),(0,m.kt)("li",null,(0,m.kt)("code",null,"-10",(0,m.kt)("sup",null,"5"),"\xa0<= k <= 10",(0,m.kt)("sup",null,"5")))),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 653 \u9898\u76f8\u540c\uff1a\xa0",(0,m.kt)("a",{href:"https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/"},"https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/")),(0,m.kt)("h2",{id:"2\u89e3\u6cd51"},"2\u3001\u89e3\u6cd51"),(0,m.kt)("p",null,"DFS\u904d\u5386+\u54c8\u5e0c\u67e5\u627e\uff1aDFS\u904d\u5386\u6240\u6709\u8282\u70b9",(0,m.kt)("inlineCode",{parentName:"p"},"node"),"\uff0c\u5728\u54c8\u5e0c\u8868",(0,m.kt)("inlineCode",{parentName:"p"},"set"),"\u4e2d\u67e5\u627e\u662f\u5426\u5b58\u5728",(0,m.kt)("inlineCode",{parentName:"p"},"k - node.val"),"\uff0c\u82e5\u5b58\u5728\u5219\u8fd4\u56de",(0,m.kt)("inlineCode",{parentName:"p"},"true"),"\u5426\u5219\u7ee7\u7eed\u904d\u5386\u76f4\u81f3\u7ed3\u675f\u5219\u8fd4\u56de",(0,m.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,m.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var findTarget = function (root, k) {\n    const set = new Set();\n    function dfs(node) {\n        if (!node) return false;\n        if (set.has(k - node.val)) return true;\n        set.add(node.val);\n        return dfs(node.left) || dfs(node.right);\n    }\n    return dfs(root);\n};\n")),(0,m.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,m.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1641536115-DDtmTl-1.png",alt:"1.png"})),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"6\u89e3\u6cd52"},"6\u3001\u89e3\u6cd52"),(0,m.kt)("p",null,"DFS\u904d\u5386+DFS\u4e8c\u5206\u67e5\u627e\uff1aDFS\u904d\u5386\u6240\u6709\u8282\u70b9",(0,m.kt)("inlineCode",{parentName:"p"},"node"),"\uff0c\u5229\u7528BST\u7279\u6027\u8fdb\u884cDFS\u4e8c\u5206\u67e5\u627e\u662f\u5426\u5b58\u5728",(0,m.kt)("inlineCode",{parentName:"p"},"k - node.val"),"\uff0c\u82e5\u5b58\u5728\u5219\u8fd4\u56de",(0,m.kt)("inlineCode",{parentName:"p"},"true"),"\u5426\u5219\u7ee7\u7eed\u904d\u5386\u76f4\u81f3\u7ed3\u675f\u5219\u8fd4\u56de",(0,m.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u4e8c\u5206\u641c\u7d22\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u53d7\u5230\u4e8c\u53c9\u6811\u5e73\u8861\u6027\u7684\u5f71\u54cd\uff0c\u6700\u574f\u60c5\u51b5\u4e0b\u4e8c\u53c9\u6811\u53ef\u80fd\u9000\u5316\u6210\u94fe\u8868\uff0c\u5bfc\u81f4\u641c\u7d22\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u603b\u4f53\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"n"),(0,m.kt)("mn",{parentName:"msup"},"2")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,m.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var findTarget = function (root, k) {\n    function find(node, num) {\n        if (!node) return false;\n        if (num === node.val) return true;\n        return num > node.val ? find(node.right, num) : find(node.left, num);\n    }\n\n    function findSum(node, num) {\n        if (!node) return false;\n        return (num !== 2 * node.val && find(root, num - node.val)) || findSum(node.right, num) || findSum(node.left, num);\n    }\n\n    return findSum(root, k);\n};\n")),(0,m.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,m.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u60c5\u51b5\u4e0b\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlogn)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," \uff0c\u975e\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u60c5\u51b5\u4e0b\u8d85\u8fc7",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlogn)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u6700\u5dee\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"n"),(0,m.kt)("mn",{parentName:"msup"},"2")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1641535849-FHvsJN-1.png",alt:"1.png"})))}k.isMDXComponent=!0}}]);