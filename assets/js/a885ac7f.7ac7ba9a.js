"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[81819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},o=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=i(a),c=l,N=k["".concat(p,".").concat(c)]||k[c]||u[c]||r;return a?n.createElement(N,m(m({ref:t},o),{},{components:a})):n.createElement(N,m({ref:t},o))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,m=new Array(r);m[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[k]="string"==typeof e?e:l,m[1]=s;for(var i=2;i<r;i++)m[i]=a[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},92389:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u6ed1\u52a8\u7a97\u53e3"],date:new Date("2022-01-19T00:00:00.000Z")},m=void 0,s={permalink:"/algorithm/2022/01/19/219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II",source:"@site/algorithm/2022/01/19/219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II.md",title:"219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II",description:"1\u3001\u9898\u5e72",date:"2022-01-19T00:00:00.000Z",formattedDate:"2022\u5e741\u670819\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/algorithm/tags/\u6ed1\u52a8\u7a97\u53e3"}],readingTime:3.26,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u6ed1\u52a8\u7a97\u53e3"],date:"2022-01-19T00:00:00.000Z"},prevItem:{title:"1345.\u8df3\u8dc3\u6e38\u620f IV",permalink:"/algorithm/2022/01/21/1345.\u8df3\u8dc3\u6e38\u620f IV"},nextItem:{title:"LCR 060.\u524d K \u4e2a\u9ad8\u9891\u5143\u7d20",permalink:"/algorithm/2022/01/19/LCR 060.\u524d K \u4e2a\u9ad8\u9891\u5143\u7d20"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u54c8\u5e0c\u6620\u5c04",id:"2\u89e3\u6cd51-\u54c8\u5e0c\u6620\u5c04",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u89e3\u6cd52-\u6ed1\u52a8\u7a97\u53e3+\u54c8\u5e0c\u96c6\u5408",id:"5\u89e3\u6cd52-\u6ed1\u52a8\u7a97\u53e3\u54c8\u5e0c\u96c6\u5408",level:2},{value:"6\u3001\u590d\u6742\u5ea6",id:"6\u590d\u6742\u5ea6",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2}],o={toc:i};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\xa0",(0,l.kt)("code",null,"nums")," \u548c\u4e00\u4e2a\u6574\u6570\xa0",(0,l.kt)("code",null,"k")," \uff0c\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u4e24\u4e2a ",(0,l.kt)("strong",null,"\u4e0d\u540c\u7684\u7d22\u5f15"),(0,l.kt)("em",null,"\xa0"),(0,l.kt)("code",null,"i"),"\xa0\u548c",(0,l.kt)("em",null,"\xa0"),(0,l.kt)("code",null,"j")," \uff0c\u6ee1\u8db3 ",(0,l.kt)("code",null,"nums[i] == nums[j]")," \u4e14 ",(0,l.kt)("code",null,"abs(i - j) <= k")," \u3002\u5982\u679c\u5b58\u5728\uff0c\u8fd4\u56de ",(0,l.kt)("code",null,"true")," \uff1b\u5426\u5219\uff0c\u8fd4\u56de ",(0,l.kt)("code",null,"false")," \u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b\xa01\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [1,2,3,1], k",(0,l.kt)("em",null," "),"= 3",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [1,0,1,1], k",(0,l.kt)("em",null," "),"=",(0,l.kt)("em",null," "),"1",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [1,2,3,1,2,3], k",(0,l.kt)("em",null," "),"=",(0,l.kt)("em",null," "),"2",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= nums.length <= 10",(0,l.kt)("sup",null,"5"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"-10",(0,l.kt)("sup",null,"9")," <= nums[i] <= 10",(0,l.kt)("sup",null,"9"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= k <= 10",(0,l.kt)("sup",null,"5")))),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u54c8\u5e0c\u6620\u5c04"},"2\u3001\u89e3\u6cd51-\u54c8\u5e0c\u6620\u5c04"),(0,l.kt)("p",null,"\u904d\u5386\u6570\u7ec4\u6240\u6709\u5143\u7d20\uff0c\u5e76\u5c06\u5f53\u524d\u6570\u5b57\u548c\u7d22\u5f15\u4f5c\u4e3a\u952e\u503c\u5b58\u5165\u54c8\u5e0c\u6620\u5c04 ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," \u4e2d\uff0c\u5982\u679c\u5f53\u524d\u6570\u5b57 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums[i]")," \u5df2\u5b58\u5728\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," \u4e2d\u4e14\u5176\u7d22\u5f15\u4e0e\u5f53\u524d\u7d22\u5f15\u7684\u5dee\u503c\u4e0d\u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u904d\u5386\u7ed3\u675f\u4ecd\u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u6570\u5b57\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JavaScript",metastring:"[g1-JavaScript]","[g1-JavaScript]":!0},"var containsNearbyDuplicate = function (nums, k) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) return true;\n        map.set(nums[i], i);\n    }\n    return false;\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Python",metastring:"[g1-Python]","[g1-Python]":!0},"class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        map = {}\n        for i in range(len(nums)):\n            if(nums[i] in map and i - map[nums[i]] <= k):\n                return True\n            map[nums[i]] = i\n        return False\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u89e3\u6cd52-\u6ed1\u52a8\u7a97\u53e3\u54c8\u5e0c\u96c6\u5408"},"5\u3001\u89e3\u6cd52-\u6ed1\u52a8\u7a97\u53e3+\u54c8\u5e0c\u96c6\u5408"),(0,l.kt)("p",null,"\u904d\u5386\u6570\u7ec4\u6240\u6709\u5143\u7d20\uff0c\u4f7f\u7528\u54c8\u5e0c\u96c6\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," \u4f5c\u4e3a\u6ed1\u52a8\u7a97\u53e3\u5bb9\u5668\u5b58\u50a8\u6570\u7ec4\u4e2d\u8fde\u7eed\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u5143\u7d20\uff0c\u7d22\u5f15 ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u4e4b\u540e\u9700\u8981\u5254\u9664\u6ed1\u52a8\u7a97\u53e3\u5bb9\u5668\u7684\u9996\u4e2a\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums[i - k - 1]")," \u4ee5\u4fdd\u8bc1\u5176\u957f\u5ea6\u4e0d\u8d85\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"k"),"\uff0c\u5982\u679c\u5f53\u524d\u5143\u7d20\u5df2\u5b58\u5728\u4e8e\u54c8\u5e0c\u96c6\u5408\u5219\u8bf4\u660e\u4e8c\u8005\u7d22\u5f15\u5dee\u503c\u4e0d\u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u5e94\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u904d\u5386\u7ed3\u675f\u4ecd\u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u6570\u5b57\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u89e3\u6cd51\u7684\u4f18\u52bf\u5728\u4e8e\u66f4\u5bb9\u6613\u60f3\u5230\u548c\u7406\u89e3\u3002\u89e3\u6cd52\u7684\u4f18\u52bf\u5728\u4e8e\u53ea\u9700\u8981\u5b58\u50a8\u503c\u800c\u4e0d\u9700\u8981\u5b58\u50a8\u952e\u503c\u5bf9\uff0c\u56e0\u6b64\u7a7a\u95f4\u5360\u7528\u4f1a\u66f4\u5c11\uff1b\u53e6\u5916\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u6bd4 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums.length")," \u5c0f\u7684\u60c5\u51b5\u4e0b\uff0c\u89e3\u6cd52\u7684\u7a7a\u95f4\u590d\u6742\u5ea6\u4f1a\u66f4\u5c0f\u4e14\u4e0d\u53d7 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums.length")," \u53d8\u5927\u800c\u5f71\u54cd\u3002")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u590d\u6742\u5ea6"},"6\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"k"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(k)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JavaScript",metastring:"[g2-JavaScript]","[g2-JavaScript]":!0},"var containsNearbyDuplicate = function (nums, k) {\n    const set = new Set();\n    for (let i = 0; i < nums.length; i++) {\n        if (i > k) set.delete(nums[i - k - 1]);\n        if (set.has(nums[i])) return true;\n        set.add(nums[i]);\n    }\n    return false;\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Python",metastring:"[g2-Python]","[g2-Python]":!0},"class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        s = set()\n        for i in range(len(nums)):\n            if(i > k):\n                s.remove(nums[i - k - 1])\n            if(nums[i] in s):\n                return True\n            s.add(nums[i])\n        return False\n")))}k.isMDXComponent=!0}}]);