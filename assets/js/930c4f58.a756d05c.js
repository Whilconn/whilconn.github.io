"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[12239],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>u});var n=t(67294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var p=n.createContext({}),o=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},i=function(a){var e=o(a.components);return n.createElement(p.Provider,{value:e},a.children)},k="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,m=a.originalType,p=a.parentName,i=l(a,["components","mdxType","originalType","parentName"]),k=o(t),N=r,u=k["".concat(p,".").concat(N)]||k[N]||c[N]||m;return t?n.createElement(u,s(s({ref:e},i),{},{components:t})):n.createElement(u,s({ref:e},i))}));function u(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var m=t.length,s=new Array(m);s[0]=N;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=a,l[k]="string"==typeof a?a:r,s[1]=l;for(var o=2;o<m;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},94398:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>m,metadata:()=>l,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const m={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5206\u6cbb","\u6876\u6392\u5e8f","\u8ba1\u6570","\u5feb\u901f\u9009\u62e9","\u6392\u5e8f","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/1/19"},s=void 0,l={permalink:"/algorithm/2022/01/19/\u5251\u6307 Offer II 060.\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684 k \u4e2a\u6570\u5b57",source:"@site/algorithm/2022/01/19/\u5251\u6307 Offer II 060.\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684 k \u4e2a\u6570\u5b57.md",title:"\u5251\u6307 Offer II 060.\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684 k \u4e2a\u6570\u5b57",description:"1\u3001\u9898\u5e72",date:"2022-01-19T00:00:00.000Z",formattedDate:"2022\u5e741\u670819\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5206\u6cbb",permalink:"/algorithm/tags/\u5206\u6cbb"},{label:"\u6876\u6392\u5e8f",permalink:"/algorithm/tags/\u6876\u6392\u5e8f"},{label:"\u8ba1\u6570",permalink:"/algorithm/tags/\u8ba1\u6570"},{label:"\u5feb\u901f\u9009\u62e9",permalink:"/algorithm/tags/\u5feb\u901f\u9009\u62e9"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"},{label:"\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",permalink:"/algorithm/tags/\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"}],readingTime:2.51,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5206\u6cbb","\u6876\u6392\u5e8f","\u8ba1\u6570","\u5feb\u901f\u9009\u62e9","\u6392\u5e8f","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/1/19"},prevItem:{title:"219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II",permalink:"/algorithm/2022/01/19/219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II"},nextItem:{title:"2138.\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u82e5\u5e72\u957f\u5ea6\u4e3a k \u7684\u7ec4",permalink:"/algorithm/2022/01/18/2138.\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u82e5\u5e72\u957f\u5ea6\u4e3a k \u7684\u7ec4"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-API\u6392\u5e8f",id:"2\u89e3\u6cd51-api\u6392\u5e8f",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u89e3\u6cd52-\u6876\u6392\u5e8f",id:"5\u89e3\u6cd52-\u6876\u6392\u5e8f",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u590d\u6742\u5ea6",id:"7\u590d\u6742\u5ea6",level:2}],i={toc:o};function k(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,r.kt)("code",null,"nums")," \u548c\u4e00\u4e2a\u6574\u6570 ",(0,r.kt)("code",null,"k"),"\xa0\uff0c\u8bf7\u8fd4\u56de\u5176\u4e2d\u51fa\u73b0\u9891\u7387\u524d ",(0,r.kt)("code",null,"k")," \u9ad8\u7684\u5143\u7d20\u3002\u53ef\u4ee5\u6309 ",(0,r.kt)("strong",null,"\u4efb\u610f\u987a\u5e8f")," \u8fd4\u56de\u7b54\u6848\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165: "),"nums = [1,1,1,2,2,3], k = 2",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa: "),"[1,2]",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165: "),"nums = [1], k = 1",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa: "),"[1]"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= nums.length <= 10",(0,r.kt)("sup",null,"5"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"k")," \u7684\u53d6\u503c\u8303\u56f4\u662f ",(0,r.kt)("code",null,"[1, \u6570\u7ec4\u4e2d\u4e0d\u76f8\u540c\u7684\u5143\u7d20\u7684\u4e2a\u6570]")),(0,r.kt)("li",null,"\u9898\u76ee\u6570\u636e\u4fdd\u8bc1\u7b54\u6848\u552f\u4e00\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u6570\u7ec4\u4e2d\u524d ",(0,r.kt)("code",null,"k")," \u4e2a\u9ad8\u9891\u5143\u7d20\u7684\u96c6\u5408\u662f\u552f\u4e00\u7684")),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u8fdb\u9636\uff1a"),"\u6240\u8bbe\u8ba1\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6 ",(0,r.kt)("strong",null,"\u5fc5\u987b")," \u4f18\u4e8e ",(0,r.kt)("code",null,"O(n log n)")," \uff0c\u5176\u4e2d ",(0,r.kt)("code",null,"n"),(0,r.kt)("em",null,"\xa0"),"\u662f\u6570\u7ec4\u5927\u5c0f\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 347\xa0\u9898\u76f8\u540c\uff1a",(0,r.kt)("a",{href:"https://leetcode-cn.com/problems/top-k-frequent-elements/"},"https://leetcode-cn.com/problems/top-k-frequent-elements/")),(0,r.kt)("h2",{id:"2\u89e3\u6cd51-api\u6392\u5e8f"},"2\u3001\u89e3\u6cd51-API\u6392\u5e8f"),(0,r.kt)("p",null,"\u5148\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04 ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," \u5bf9\u6240\u6709\u6574\u6570\u8fdb\u884c\u8ba1\u6570\uff0c\u7136\u540e\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," \u4e2d\u7684\u952e\u503c\u5bf9\u5b58\u5165\u6570\u7ec4\u5e76\u4f7f\u7528\u6392\u5e8fAPI\u6309\u6570\u91cf\u964d\u5e8f\u6392\u5e8f\uff0c\u6700\u540e\u8fd4\u56de\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u6570\u5b57"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var topKFrequent = function (nums, k) {\n    const map = new Map();\n    for (const n of nums) map.set(n, 1 + (map.get(n) || 0));\n\n    const arr = [];\n    for (const kv of map) arr.push(kv);\n    return arr.sort((a, b) => b[1] - a[1]).slice(0, k).map(a => a[0]);\n};\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlogn)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"5\u89e3\u6cd52-\u6876\u6392\u5e8f"},"5\u3001\u89e3\u6cd52-\u6876\u6392\u5e8f"),(0,r.kt)("p",null,"\u5148\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04 ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," \u5bf9\u6240\u6709\u6574\u6570\u8fdb\u884c\u8ba1\u6570\uff0c\u7136\u540e\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," \u4e2d\u7684\u952e\u503c\u5bf9\u5b58\u5165\u6309\u6570\u91cf\u5b58\u5165\u6876\u4e2d\uff0c\u6700\u540e\u8fd4\u56de\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u6570\u5b57\u3002\u5176\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u89e3\u51b3\u4e86\u8fdb\u9636\u95ee\u9898\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var topKFrequent = function (nums, k) {\n    const map = new Map();\n    for (const n of nums) map.set(n, 1 + (map.get(n) || 0));\n\n    const buckets = new Array(nums.length + 1);\n    for (const [n, v] of map) !buckets[v] ? buckets[v] = [n] : buckets[v].push(n);\n\n    const res = [];\n    for (let i = buckets.length - 1; i > -1; i--) {\n        if (res.length >= k) break;\n        if (buckets[i]) res.push(...buckets[i]);\n    }\n\n    return res.length > k ? res.slice(0, k) : res;\n};\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"7\u590d\u6742\u5ea6"},"7\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))))}k.isMDXComponent=!0}}]);