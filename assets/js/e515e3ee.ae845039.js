"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[12592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),k=i(a),u=l,N=k["".concat(p,".").concat(u)]||k[u]||c[u]||r;return a?n.createElement(N,s(s({ref:t},o),{},{components:a})):n.createElement(N,s({ref:t},o))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[k]="string"==typeof e?e:l,s[1]=m;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6876\u6392\u5e8f","\u6709\u5e8f\u96c6\u5408","\u6392\u5e8f","\u6ed1\u52a8\u7a97\u53e3"],date:new Date("2022-01-13T00:00:00.000Z")},s=void 0,m={permalink:"/algorithm/2022/01/13/\u5251\u6307 Offer II 057.\u503c\u548c\u4e0b\u6807\u4e4b\u5dee\u90fd\u5728\u7ed9\u5b9a\u7684\u8303\u56f4\u5185",source:"@site/algorithm/2022/01/13/\u5251\u6307 Offer II 057.\u503c\u548c\u4e0b\u6807\u4e4b\u5dee\u90fd\u5728\u7ed9\u5b9a\u7684\u8303\u56f4\u5185.md",title:"\u5251\u6307 Offer II 057.\u503c\u548c\u4e0b\u6807\u4e4b\u5dee\u90fd\u5728\u7ed9\u5b9a\u7684\u8303\u56f4\u5185",description:"1\u3001\u9898\u5e72",date:"2022-01-13T00:00:00.000Z",formattedDate:"2022\u5e741\u670813\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6876\u6392\u5e8f",permalink:"/algorithm/tags/\u6876\u6392\u5e8f"},{label:"\u6709\u5e8f\u96c6\u5408",permalink:"/algorithm/tags/\u6709\u5e8f\u96c6\u5408"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"},{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/algorithm/tags/\u6ed1\u52a8\u7a97\u53e3"}],readingTime:2.97,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6876\u6392\u5e8f","\u6709\u5e8f\u96c6\u5408","\u6392\u5e8f","\u6ed1\u52a8\u7a97\u53e3"],date:"2022-01-13T00:00:00.000Z"},prevItem:{title:"LCR 059.\u6570\u636e\u6d41\u4e2d\u7684\u7b2c K \u5927\u5143\u7d20",permalink:"/algorithm/2022/01/13/LCR 059.\u6570\u636e\u6d41\u4e2d\u7684\u7b2c K \u5927\u5143\u7d20"},nextItem:{title:"\u5251\u6307 Offer II 058.\u65e5\u7a0b\u8868",permalink:"/algorithm/2022/01/13/\u5251\u6307 Offer II 058.\u65e5\u7a0b\u8868"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u66b4\u529b\u89e3\u6cd5",id:"2\u89e3\u6cd51-\u66b4\u529b\u89e3\u6cd5",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u89e3\u6cd52-\u6876\u6392\u5e8f",id:"6\u89e3\u6cd52-\u6876\u6392\u5e8f",level:2},{value:"7\u3001\u590d\u6742\u5ea6",id:"7\u590d\u6742\u5ea6",level:2},{value:"8\u3001\u4ee3\u7801",id:"8\u4ee3\u7801",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,l.kt)("code",null,"nums")," \u548c\u4e24\u4e2a\u6574\u6570\xa0",(0,l.kt)("code",null,"k")," \u548c ",(0,l.kt)("code",null,"t")," \u3002\u8bf7\u4f60\u5224\u65ad\u662f\u5426\u5b58\u5728 ",(0,l.kt)("b",null,"\u4e24\u4e2a\u4e0d\u540c\u4e0b\u6807")," ",(0,l.kt)("code",null,"i")," \u548c ",(0,l.kt)("code",null,"j"),"\uff0c\u4f7f\u5f97\xa0",(0,l.kt)("code",null,"abs(nums[i] - nums[j]) <= t")," \uff0c\u540c\u65f6\u53c8\u6ee1\u8db3 ",(0,l.kt)("code",null,"abs(i - j) <= k"),(0,l.kt)("em",null," "),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5b58\u5728\u5219\u8fd4\u56de ",(0,l.kt)("code",null,"true"),"\uff0c\u4e0d\u5b58\u5728\u8fd4\u56de ",(0,l.kt)("code",null,"false"),"\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b\xa01\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [1,2,3,1], k",(0,l.kt)("em",null," "),"= 3, t = 0",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [1,0,1,1], k",(0,l.kt)("em",null," "),"=",(0,l.kt)("em",null," "),"1, t = 2",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [1,5,9,1,5,9], k = 2, t = 3",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= nums.length <= 2 * 10",(0,l.kt)("sup",null,"4"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"-2",(0,l.kt)("sup",null,"31")," <= nums[i] <= 2",(0,l.kt)("sup",null,"31")," - 1")),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= k <= 10",(0,l.kt)("sup",null,"4"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= t <= 2",(0,l.kt)("sup",null,"31")," - 1"))),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 220\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,l.kt)("a",{href:"https://leetcode-cn.com/problems/contains-duplicate-iii/"},"https://leetcode-cn.com/problems/contains-duplicate-iii/")),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u66b4\u529b\u89e3\u6cd5"},"2\u3001\u89e3\u6cd51-\u66b4\u529b\u89e3\u6cd5"),(0,l.kt)("p",null,"\u53cc\u5c42\u904d\u5386\uff0c\u5916\u5c42\u4ece\u5934\u5230\u5c3e\u904d\u5386\uff0c\u5185\u5c42\u904d\u5386\u5916\u5c42\u5143\u7d20\u4e4b\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u5143\u7d20\uff0c\u5982\u679c\u627e\u5230\u4e24\u4e2a\u5143\u7d20\u5dee\u503c\u7684\u7edd\u5bf9\u503c\u5c0f\u4e8e\u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," \u5219\u7ed3\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5185\u5c42\u53ea\u9700\u8981\u904d\u5386\u540e ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u5143\u7d20\uff0c\u56e0\u4e3a\u524d ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u5143\u7d20\u5728\u5916\u5c42\u904d\u5386\u65f6\u5df2\u7ecf\u5224\u65ad\u8fc7")),(0,l.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mi",{parentName:"mrow"},"k"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nk)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"nk"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mn",{parentName:"mrow"},"1"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},"1"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var containsNearbyAlmostDuplicate = function (nums, k, t) {\n    for (let i = 0; i < nums.length; i++) {\n        for (let j = i + 1; j <= i + k && j < nums.length; j++) {\n            if (Math.abs(nums[j] - nums[i]) <= t) return true;\n        }\n    }\n    return false;\n};\n")),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 500 ms    \u5185\u5b58\u6d88\u8017: 39.1 MB")),(0,l.kt)("h2",{id:"6\u89e3\u6cd52-\u6876\u6392\u5e8f"},"6\u3001\u89e3\u6cd52-\u6876\u6392\u5e8f"),(0,l.kt)("p",null,"\u904d\u5386\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u6876\u6392\u5e8f\u7ef4\u62a4 ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u5143\u7d20\u7684\u6709\u5e8f\u96c6\u5408\uff0c\u6876\u7684\u5927\u5c0f\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"t + 1")," \u4ee5\u4fdd\u8bc1\u540c\u4e00\u4e2a\u6876\u5185\u51fa\u73b0\u4e24\u4e2a\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"n1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"n2")," \u65f6\uff0c\u5fc5\u5b9a\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"abs(n1 - n2) <= t")," \u5373\u7ed3\u679c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u53e6\u5916\u5982\u679c\u76f8\u90bb\u7684\u6876\u5185\u6709\u6570\u5b57\u4e14\u6ee1\u8db3\u4e0e\u5f53\u524d\u6570\u5b57\u7684\u5dee\u503c\u7684\u7edd\u5bf9\u503c\u5c0f\u4e8e\u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," \u5219\u7ed3\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,l.kt)("h2",{id:"7\u590d\u6742\u5ea6"},"7\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"k"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(k)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"8\u4ee3\u7801"},"8\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var containsNearbyAlmostDuplicate = function (nums, k, t) {\n    const buckets = new Map();\n    const genIdx = (n) => ((n + 2147483648) / (t + 1)) >> 0;\n\n    for (let i = 0; i < nums.length; i++) {\n        if (i > k) buckets.delete(genIdx(nums[i - k - 1]));\n        const idx = genIdx(nums[i]);\n        if (buckets.has(idx)) return true;\n        if (buckets.has(idx - 1) && nums[i] - buckets.get(idx - 1) <= t) return true;\n        if (buckets.has(idx + 1) && buckets.get(idx + 1) - nums[i] <= t) return true;\n        buckets.set(idx, nums[i]);\n    }\n\n    return false;\n};\n")),(0,l.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(10956).Z,width:"1342",height:"498"})))}k.isMDXComponent=!0},10956:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/b4b07910d2b1e3de1f83dc1448eb2a3b-c8ef687c51e466cdf894b7219772ec01.png"}}]);