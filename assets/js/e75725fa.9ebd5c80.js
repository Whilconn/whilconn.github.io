"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[92553],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>h});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),i=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},k=function(t){var e=i(t.components);return n.createElement(p.Provider,{value:e},t.children)},o="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,k=m(t,["components","mdxType","originalType","parentName"]),o=i(a),u=l,h=o["".concat(p,".").concat(u)]||o[u]||c[u]||r;return a?n.createElement(h,s(s({ref:e},k),{},{components:a})):n.createElement(h,s({ref:e},k))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,s=new Array(r);s[0]=u;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[o]="string"==typeof t?t:l,s[1]=m;for(var i=2;i<r;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3105:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>m,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={authors:["Whilconn"],tags:["\u6811","\u8bbe\u8ba1","\u4e8c\u53c9\u641c\u7d22\u6811","\u4e8c\u53c9\u6811","\u6570\u636e\u6d41","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:new Date("2022-01-13T00:00:00.000Z")},s=void 0,m={permalink:"/algorithm/2022/01/13/\u5251\u6307 Offer II 059.\u6570\u636e\u6d41\u7684\u7b2c K \u5927\u6570\u503c",source:"@site/algorithm/2022/01/13/\u5251\u6307 Offer II 059.\u6570\u636e\u6d41\u7684\u7b2c K \u5927\u6570\u503c.md",title:"\u5251\u6307 Offer II 059.\u6570\u636e\u6d41\u7684\u7b2c K \u5927\u6570\u503c",description:"1\u3001\u9898\u5e72",date:"2022-01-13T00:00:00.000Z",formattedDate:"2022\u5e741\u670813\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u8bbe\u8ba1",permalink:"/algorithm/tags/\u8bbe\u8ba1"},{label:"\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u641c\u7d22\u6811"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"},{label:"\u6570\u636e\u6d41",permalink:"/algorithm/tags/\u6570\u636e\u6d41"},{label:"\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",permalink:"/algorithm/tags/\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"}],readingTime:3.595,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u8bbe\u8ba1","\u4e8c\u53c9\u641c\u7d22\u6811","\u4e8c\u53c9\u6811","\u6570\u636e\u6d41","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022-01-13T00:00:00.000Z"},prevItem:{title:"\u5251\u6307 Offer II 058.\u65e5\u7a0b\u8868",permalink:"/algorithm/2022/01/13/\u5251\u6307 Offer II 058.\u65e5\u7a0b\u8868"},nextItem:{title:"334.\u9012\u589e\u7684\u4e09\u5143\u5b50\u5e8f\u5217",permalink:"/algorithm/2022/01/12/334.\u9012\u589e\u7684\u4e09\u5143\u5b50\u5e8f\u5217"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u4f18\u5148\u961f\u5217",id:"2\u89e3\u6cd51-\u4f18\u5148\u961f\u5217",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u89e3\u6cd52-\u8ba1\u6570\u6392\u5e8f",id:"6\u89e3\u6cd52-\u8ba1\u6570\u6392\u5e8f",level:2},{value:"7\u3001\u590d\u6742\u5ea6",id:"7\u590d\u6742\u5ea6",level:2},{value:"8\u3001\u4ee3\u7801",id:"8\u4ee3\u7801",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],k={toc:i};function o(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u8bbe\u8ba1\u4e00\u4e2a\u627e\u5230\u6570\u636e\u6d41\u4e2d\u7b2c ",(0,l.kt)("code",null,"k")," \u5927\u5143\u7d20\u7684\u7c7b\uff08class\uff09\u3002\u6ce8\u610f\u662f\u6392\u5e8f\u540e\u7684\u7b2c ",(0,l.kt)("code",null,"k")," \u5927\u5143\u7d20\uff0c\u4e0d\u662f\u7b2c ",(0,l.kt)("code",null,"k")," \u4e2a\u4e0d\u540c\u7684\u5143\u7d20\u3002"),(0,l.kt)("p",null,"\u8bf7\u5b9e\u73b0 ",(0,l.kt)("code",null,"KthLargest"),"\xa0\u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"KthLargest(int k, int[] nums)")," \u4f7f\u7528\u6574\u6570 ",(0,l.kt)("code",null,"k")," \u548c\u6574\u6570\u6d41 ",(0,l.kt)("code",null,"nums")," \u521d\u59cb\u5316\u5bf9\u8c61\u3002"),(0,l.kt)("li",null,(0,l.kt)("code",null,"int add(int val)")," \u5c06 ",(0,l.kt)("code",null,"val")," \u63d2\u5165\u6570\u636e\u6d41 ",(0,l.kt)("code",null,"nums")," \u540e\uff0c\u8fd4\u56de\u5f53\u524d\u6570\u636e\u6d41\u4e2d\u7b2c ",(0,l.kt)("code",null,"k")," \u5927\u7684\u5143\u7d20\u3002")),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),(0,l.kt)("br",null),'["KthLargest", "add", "add", "add", "add", "add"]',(0,l.kt)("br",null),"[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),(0,l.kt)("br",null),"[null, 4, 5, 5, 8, 8]",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),(0,l.kt)("br",null),"KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);",(0,l.kt)("br",null),"kthLargest.add(3);   // return 4",(0,l.kt)("br",null),"kthLargest.add(5);   // return 5",(0,l.kt)("br",null),"kthLargest.add(10);  // return 5",(0,l.kt)("br",null),"kthLargest.add(9);   // return 8",(0,l.kt)("br",null),"kthLargest.add(4);   // return 8",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= k <= 10",(0,l.kt)("sup",null,"4"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= nums.length <= 10",(0,l.kt)("sup",null,"4"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"-10",(0,l.kt)("sup",null,"4")," <= nums[i] <= 10",(0,l.kt)("sup",null,"4"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"-10",(0,l.kt)("sup",null,"4")," <= val <= 10",(0,l.kt)("sup",null,"4"))),(0,l.kt)("li",null,"\u6700\u591a\u8c03\u7528 ",(0,l.kt)("code",null,"add")," \u65b9\u6cd5 ",(0,l.kt)("code",null,"10",(0,l.kt)("sup",null,"4"))," \u6b21"),(0,l.kt)("li",null,"\u9898\u76ee\u6570\u636e\u4fdd\u8bc1\uff0c\u5728\u67e5\u627e\u7b2c ",(0,l.kt)("code",null,"k")," \u5927\u5143\u7d20\u65f6\uff0c\u6570\u7ec4\u4e2d\u81f3\u5c11\u6709 ",(0,l.kt)("code",null,"k")," \u4e2a\u5143\u7d20")),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 703\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,l.kt)("a",{href:"https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/"},"https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/")),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u4f18\u5148\u961f\u5217"},"2\u3001\u89e3\u6cd51-\u4f18\u5148\u961f\u5217"),(0,l.kt)("p",null,"\u4f7f\u7528\u4f18\u5148\u961f\u5217\u89e3\u9898\uff0c\u521d\u59cb\u5316\u65f6\u628a\u6240\u6709\u5143\u7d20\u52a0\u5165\u5230\u6700\u5c0f\u4f18\u5148\u961f\u5217",(0,l.kt)("inlineCode",{parentName:"p"},"pq"),"\u4e2d\uff0c\u6dfb\u52a0\u5143\u7d20\u65f6\u76f4\u63a5\u628a\u5143\u7d20\u52a0\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"pq"),"\uff0c\u82e5",(0,l.kt)("inlineCode",{parentName:"p"},"pq"),"\u5143\u7d20\u4e2a\u6570\u5c0f\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"k"),"\u5219\u76f4\u63a5\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"-1"),"\uff0c\u82e5",(0,l.kt)("inlineCode",{parentName:"p"},"pq"),"\u5143\u7d20\u4e2a\u6570\u8d85\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"k"),"\u5219\u9010\u4e00\u79fb\u9664\u6700\u540e\u8fd4\u56de\u961f\u5934\u5143\u7d20\u3002"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var KthLargest = function (k, nums) {\n    this.k = k;\n    this.pq = new MinPriorityQueue({ compare: (a, b) => a - b });\n    for (const n of nums) this.pq.enqueue(n);\n};\n\nKthLargest.prototype.add = function (val) {\n    this.pq.enqueue(val);\n    if (this.pq.size() < this.k) return -1;\n    while (this.pq.size() > this.k) this.pq.dequeue();\n    return this.pq.front();\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mi",{parentName:"mrow"},"l"),(0,l.kt)("mi",{parentName:"mrow"},"o"),(0,l.kt)("mi",{parentName:"mrow"},"g"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlogn)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 132 ms  \u5185\u5b58\u6d88\u8017: 46.6 MB")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u89e3\u6cd52-\u8ba1\u6570\u6392\u5e8f"},"6\u3001\u89e3\u6cd52-\u8ba1\u6570\u6392\u5e8f"),(0,l.kt)("p",null,"\u5bf9\u6570\u636e\u6d41\u4f7f\u7528\u8ba1\u6570\u6392\u5e8f\uff0c\u9996\u6b21\u786e\u5b9a\u7b2c ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u5927\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"kIdx")," \u9700\u8981\u904d\u5386\u6240\u6709\u5143\u7d20\uff1b\u6b64\u540e\u6dfb\u52a0\u6570\u636e\u9700\u8981\u518d\u786e\u5b9a\u7b2c ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u5927\u5143\u7d20\u65f6\uff0c\u5982\u679c\u6dfb\u52a0\u7684\u6570\u636e\u6bd4 ",(0,l.kt)("inlineCode",{parentName:"p"},"kIdx")," \u5c0f\u5219\u76f4\u63a5\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"kIdx")," \uff1b\u5982\u679c\u6dfb\u52a0\u7684\u6570\u636e\u6bd4 ",(0,l.kt)("inlineCode",{parentName:"p"},"kIdx")," \u5c0f\u5219\u4ece\u4e0b\u6807 ",(0,l.kt)("inlineCode",{parentName:"p"},"kIdx")," \u5f00\u59cb\u5728\u5bb9\u5668 ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," \u627e\u5230\u66f4\u5927\u4e14\u5143\u7d20\u503c\u4e0d\u4e3a0\u7684\u4e0b\u6807\u8fd4\u56de\u5373\u53ef\u3002"),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u8fd9\u4e2a\u9898\u76ee\u4e2d\u4f7f\u7528\u8be5\u7b97\u6cd5\u5751\u7565\u591a\uff0c\u53ea\u4f5c\u53c2\u8003\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"7\u590d\u6742\u5ea6"},"7\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"8\u4ee3\u7801"},"8\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var KthLargest = function (k, nums) {\n    this.k = k;\n    this.size = nums.length;\n    this.kIdx = -1;\n    this.list = new Array(2e4 + 1).fill(0);\n    for (const n of nums) this.list[n + 1e4]++;\n};\n\nKthLargest.prototype.add = function (val) {\n    (val += 1e4), this.list[val]++, this.size++;\n    if (this.size < this.k) return -1;\n\n    if (this.kIdx < 0) {\n        for (let i = this.list.length - 1, k = this.k; i >= 0; i--) {\n            if (k < this.list[i]) this.list[i] = k;\n            if ((k -= this.list[i]) <= 0) {\n                this.kIdx = i;\n                break;\n            }\n        }\n        return this.kIdx - 1e4;\n    }\n\n    if (this.size > this.k && val >= this.kIdx) {\n        this.list[this.kIdx]--;\n        for (let i = this.kIdx; i < this.list.length; i++) {\n            if (this.list[i]) {\n                this.kIdx = i;\n                break;\n            }\n        }\n    }\n\n    return this.kIdx - 1e4;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.png",src:a(39739).Z,width:"1356",height:"480"})))}o.isMDXComponent=!0},39739:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1dde7becbfa2d5e86afae11fdee6cc55-c4afa148541ad20cacc35279fb787a50.png"}}]);