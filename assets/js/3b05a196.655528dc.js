"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[87],{3905:(e,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>N});var t=n(67294);function m(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){m(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,m=function(e,a){if(null==e)return{};var n,t,m={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(m[n]=e[n]);return m}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(m[n]=e[n])}return m}var p=t.createContext({}),i=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},k=function(e){var a=i(e.components);return t.createElement(p.Provider,{value:a},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,m=e.mdxType,r=e.originalType,p=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),o=i(n),c=m,N=o["".concat(p,".").concat(c)]||o[c]||u[c]||r;return n?t.createElement(N,s(s({ref:a},k),{},{components:n})):t.createElement(N,s({ref:a},k))}));function N(e,a){var n=arguments,m=a&&a.mdxType;if("string"==typeof e||m){var r=n.length,s=new Array(r);s[0]=c;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[o]="string"==typeof e?e:m,s[1]=l;for(var i=2;i<r;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78230:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var t=n(87462),m=(n(67294),n(3905));const r={authors:["Whilconn"],tags:["\u6570\u7ec4","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/1/14"},s=void 0,l={permalink:"/algorithm/373.\u67e5\u627e\u548c\u6700\u5c0f\u7684 K \u5bf9\u6570\u5b57",source:"@site/algorithm/373.\u67e5\u627e\u548c\u6700\u5c0f\u7684 K \u5bf9\u6570\u5b57.md",title:"373.\u67e5\u627e\u548c\u6700\u5c0f\u7684 K \u5bf9\u6570\u5b57",description:"1\u3001\u9898\u5e72",date:"2022-01-14T00:00:00.000Z",formattedDate:"2022\u5e741\u670814\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",permalink:"/algorithm/tags/\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"}],readingTime:7.29,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/1/14"},prevItem:{title:"1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",permalink:"/algorithm/1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1"},nextItem:{title:"747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570",permalink:"/algorithm/747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u4f18\u5148\u961f\u5217",id:"2\u89e3\u6cd51-\u4f18\u5148\u961f\u5217",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd51-\u4f18\u5316",id:"5\u89e3\u6cd51-\u4f18\u5316",level:2},{value:"6\u3001\u590d\u6742\u5ea6",id:"6\u590d\u6742\u5ea6",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u6267\u884c\u7ed3\u679c",id:"8\u6267\u884c\u7ed3\u679c",level:2},{value:"9\u3001\u89e3\u6cd52-\u5355\u8c03\u6808",id:"9\u89e3\u6cd52-\u5355\u8c03\u6808",level:2},{value:"10\u3001\u4ee3\u7801",id:"10\u4ee3\u7801",level:2},{value:"11\u3001\u6267\u884c\u7ed3\u679c",id:"11\u6267\u884c\u7ed3\u679c",level:2},{value:"12\u3001\u89e3\u6cd52-\u4f18\u5316",id:"12\u89e3\u6cd52-\u4f18\u5316",level:2},{value:"13\u3001\u590d\u6742\u5ea6",id:"13\u590d\u6742\u5ea6",level:2},{value:"14\u3001\u4ee3\u7801",id:"14\u4ee3\u7801",level:2},{value:"15\u3001\u6267\u884c\u7ed3\u679c",id:"15\u6267\u884c\u7ed3\u679c",level:2}],k={toc:i};function o(e){let{components:a,...r}=e;return(0,m.kt)("wrapper",(0,t.Z)({},k,r,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,m.kt)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u4ee5 ",(0,m.kt)("strong",{parentName:"p"},"\u5347\u5e8f\u6392\u5217")," \u7684\u6574\u6570\u6570\u7ec4 ",(0,m.kt)("inlineCode",{parentName:"p"},"nums1")," \u548c ",(0,m.kt)("inlineCode",{parentName:"p"},"nums2"),"\xa0,\xa0\u4ee5\u53ca\u4e00\u4e2a\u6574\u6570 ",(0,m.kt)("inlineCode",{parentName:"p"},"k"),"\xa0\u3002"),(0,m.kt)("p",null,"\u5b9a\u4e49\u4e00\u5bf9\u503c\xa0",(0,m.kt)("inlineCode",{parentName:"p"},"(u,v)"),"\uff0c\u5176\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u6765\u81ea\xa0",(0,m.kt)("inlineCode",{parentName:"p"},"nums1"),"\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u6765\u81ea ",(0,m.kt)("inlineCode",{parentName:"p"},"nums2"),"\xa0\u3002"),(0,m.kt)("p",null,"\u8bf7\u627e\u5230\u548c\u6700\u5c0f\u7684 ",(0,m.kt)("inlineCode",{parentName:"p"},"k"),"\xa0\u4e2a\u6570\u5bf9\xa0",(0,m.kt)("inlineCode",{parentName:"p"},"(u1,v1)"),", \xa0",(0,m.kt)("inlineCode",{parentName:"p"},"(u2,v2)")," \xa0... \xa0",(0,m.kt)("inlineCode",{parentName:"p"},"(uk,vk)"),"\xa0\u3002"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},(0,m.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  nums1 = ","[","1,7,11","]",", nums2 = ","[","2,4,6","]",", k = 3",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  ","[","1,2","]",",","[","1,4","]",",","[","1,6","]",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),"  \u8fd4\u56de\u5e8f\u5217\u4e2d\u7684\u524d 3 \u5bf9\u6570\uff1a",(0,m.kt)("br",null),"\n","[","1,2","]",",","[","1,4","]",",","[","1,6","]",",","[","7,2","]",",","[","7,4","]",",","[","11,2","]",",","[","7,6","]",",","[","11,4","]",",","[","11,6","]",(0,m.kt)("br",null))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},(0,m.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  nums1 = ","[","1,1,2","]",", nums2 = ","[","1,2,3","]",", k = 2",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  ","[","1,1","]",",","[","1,1","]",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),"  \u8fd4\u56de\u5e8f\u5217\u4e2d\u7684\u524d 2 \u5bf9\u6570\uff1a",(0,m.kt)("br",null),"\n\xa0    ","[","1,1","]",",","[","1,1","]",",","[","1,2","]",",","[","2,1","]",",","[","1,2","]",",","[","2,2","]",",","[","1,3","]",",","[","1,3","]",",","[","2,3","]",(0,m.kt)("br",null))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3:")),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},(0,m.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  nums1 = ","[","1,2","]",", nums2 = ","[","3","]",", k = 3 ",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  ","[","1,3","]",",","[","2,3","]",(0,m.kt)("br",null),"\n",(0,m.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),"  \u4e5f\u53ef\u80fd\u5e8f\u5217\u4e2d\u6240\u6709\u7684\u6570\u5bf9\u90fd\u88ab\u8fd4\u56de:","[","1,3","]",",","[","2,3","]",(0,m.kt)("br",null))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\u63d0\u793a:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums1.length, nums2.length <= 10^5")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"-10^9 <= nums1[i], nums2[i] <= 10^9")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"nums1")," \u548c ",(0,m.kt)("inlineCode",{parentName:"li"},"nums2")," \u5747\u4e3a\u5347\u5e8f\u6392\u5217"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= k <= 1000"))),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u6700\u8fd1\u53d1\u73b0\uff0c\u529b\u6263\u7684JS\u73af\u5883\u652f\u6301\u6700\u5c0f\u4f18\u5148\u961f\u5217 ",(0,m.kt)("inlineCode",{parentName:"p"},"MinPriorityQueue")," \u548c \u6700\u5927\u4f18\u5148\u961f\u5217 ",(0,m.kt)("inlineCode",{parentName:"p"},"MaxPriorityQueue"),"\uff0c\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\uff0c\u65e0\u9700\u5f15\u5165\u6216\u7279\u6b8a\u914d\u7f6e\uff0c\u5176 ",(0,m.kt)("inlineCode",{parentName:"p"},"API")," \u548c\u76f8\u5173\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003",(0,m.kt)("a",{parentName:"p",href:"https://github.com/datastructures-js/priority-queue"},"datastructures-js"))),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"2\u89e3\u6cd51-\u4f18\u5148\u961f\u5217"},"2\u3001\u89e3\u6cd51-\u4f18\u5148\u961f\u5217"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6700\u5c0f\u4f18\u5148\u961f\u5217 ",(0,m.kt)("inlineCode",{parentName:"li"},"MinPriorityQueue")," \u5b58\u50a8 ",(0,m.kt)("inlineCode",{parentName:"li"},"nums1")," \u4e2d\u6240\u6709\u5143\u7d20\u4e0b\u6807\u4e0e ",(0,m.kt)("inlineCode",{parentName:"li"},"nums2")," \u7684 ",(0,m.kt)("inlineCode",{parentName:"li"},"0")," \u4e0b\u6807\u6784\u6210\u7684\u6570\u5bf9"),(0,m.kt)("li",{parentName:"ul"},"\u7136\u540e\u53d6\u961f\u5934\u4e0b\u6807\u6570\u5bf9\u8fdb\u884c\u904d\u5386\uff0c\u904d\u5386\u65f6\u4ee5 ",(0,m.kt)("inlineCode",{parentName:"li"},"nums2")," \u7684\u4e0b\u6807\u6b65\u8fdb"),(0,m.kt)("li",{parentName:"ul"},"\u82e5\u961f\u5934\u4e0b\u6807\u6570\u5bf9\u6240\u5bf9\u5e94\u5143\u7d20\u4e4b\u548c\u6bd4\u5f53\u524d\u6570\u5bf9\u4e4b\u548c\u66f4\u5c0f\u5219\u5c06\u5f53\u524d\u4e0b\u6807\u5165\u961f\u5e76\u4e2d\u65ad\u904d\u5386\uff0c\u53cd\u4e4b\u5c06\u5f53\u524d\u6570\u5bf9\u63a8\u5165\u7ed3\u679c\u6570\u7ec4 ",(0,m.kt)("inlineCode",{parentName:"li"},"res")),(0,m.kt)("li",{parentName:"ul"},"\u91cd\u590d\u524d\u4e24\u6b65\u904d\u5386\u76f4\u81f3\u7ed3\u675f")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var kSmallestPairs = function (nums1, nums2, k) {\n    const res = [];\n    const pq = new MinPriorityQueue({ compare: (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]) });\n\n    for (let i = 0; i < nums1.length; i++) pq.enqueue([i, 0]);\n\n    while (res.length < k && pq.size()) {\n        let [i, j] = pq.dequeue();\n\n        for (; res.length < k && j < nums2.length; j++) {\n            // \u961f\u5934\u7684\u6570\u5bf9\u548c\u66f4\u5c0f\n            const [i1, j1] = pq.front() || [];\n            if (pq.size() && nums1[i1] + nums2[j1] < nums1[i] + nums2[j]) {\n                pq.enqueue([i, j]);\n                break;\n            }\n\n            // \u961f\u5934\u7684\u6570\u5bf9\u548c\u76f8\u7b49\u6216\u66f4\u5927\n            res.push([nums1[i], nums2[j]]);\n        }\n    }\n\n    return res;\n};\n")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 160 ms  \u5185\u5b58\u6d88\u8017: 61.7 MB")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"5\u89e3\u6cd51-\u4f18\u5316"},"5\u3001\u89e3\u6cd51-\u4f18\u5316"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u95ee\u98981\uff1a\u56e0\u4e3a\u662f\u6c42 TopK\uff0c\u6240\u4ee5\u4f18\u5148\u961f\u5217\u6ca1\u5fc5\u8981\u5b58\u50a8\u8d85\u8fc7 ",(0,m.kt)("inlineCode",{parentName:"li"},"k")," \u4e2a\u5143\u7d20\uff0c\u8fd9\u662f\u5bfc\u81f4\u65f6\u95f4\u7a7a\u95f4\u8fc7\u9ad8\u7684\u4e3b\u8981\u539f\u56e0"),(0,m.kt)("li",{parentName:"ul"},"\u95ee\u98982\uff1a\u65e2\u7136\u662f\u6c42 TopK\uff0c\u961f\u5217\u521d\u59cb\u65f6\u5df2\u52a0\u5165 ",(0,m.kt)("inlineCode",{parentName:"li"},"k")," \u4e2a\u5143\u7d20\uff0c\u540e\u7eed\u53ea\u8981\u5728\u961f\u5217\u4e2d\u6392\u5e8f\u548c\u8f6e\u66ff\u6240\u6709\u6570\u636e\u5373\u53ef\uff1b\u800c\u4e0a\u8ff0\u903b\u8f91\u662f\u4e00\u8fb9\u904d\u5386\u4e00\u8fb9\u4e0e\u961f\u5934\u5143\u7d20\u6bd4\u8f83\uff0c\u867d\u7136\u4e0d\u5f71\u54cd\u65f6\u95f4\u548c\u7a7a\u95f4\uff0c\u4f46\u662f\u4ee3\u7801\u548c\u903b\u8f91\u90fd\u66f4\u590d\u6742"),(0,m.kt)("li",{parentName:"ul"},"\u4f18\u53161\uff1a\u4f18\u5148\u961f\u5217\u6dfb\u52a0\u521d\u59cb\u6570\u636e\u65f6\uff0c\u53ea\u9700\u8981\u52a0\u5165 ",(0,m.kt)("inlineCode",{parentName:"li"},"Math.min(k, nums1.length)")," \u4e2a\u5143\u7d20\u5373\u53ef"),(0,m.kt)("li",{parentName:"ul"},"\u4f18\u53162\uff1a",(0,m.kt)("inlineCode",{parentName:"li"},"while")," \u5faa\u73af\u90a3\u6bb5\u4ee3\u7801\u7684\u903b\u8f91\u6539\u6210\uff1a\u6bcf\u6b21\u53d6\u961f\u5934\u4e0b\u6807\u5bf9\u5e94\u7684\u6570\u5bf9\u63a8\u5165\u7ed3\u679c\u6570\u7ec4 ",(0,m.kt)("inlineCode",{parentName:"li"},"res"),"\uff0c\u5e76\u4e14\u5c06\u4e0b\u4e00\u5bf9\u672a\u5165\u961f\u7684\u4e0b\u6807 ",(0,m.kt)("inlineCode",{parentName:"li"},"[i, j + 1]")," \u52a0\u5165\u961f\u5217\u4e2d")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"6\u590d\u6742\u5ea6"},"6\u3001\u590d\u6742\u5ea6"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(klogk)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(k)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var kSmallestPairs = function (nums1, nums2, k) {\n    const res = [];\n    const pq = new MinPriorityQueue({ compare: (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]) });\n\n    for (let i = 0; i < Math.min(k, nums1.length); i++) pq.enqueue([i, 0]);\n\n    while (res.length < k && pq.size()) {\n        const [i, j] = pq.dequeue();\n        if (j + 1 < nums2.length) pq.enqueue([i, j + 1]);\n        res.push([nums1[i], nums2[j]]);\n    }\n\n    return res;\n};\n")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"8\u6267\u884c\u7ed3\u679c"},"8\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"1.png",src:n(62674).Z,width:"1334",height:"488"})),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"9\u89e3\u6cd52-\u5355\u8c03\u6808"},"9\u3001\u89e3\u6cd52-\u5355\u8c03\u6808"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u601d\u8def\u8ddf\u4f18\u5148\u961f\u5217\u7684\u65b9\u5f0f\u7c7b\u4f3c\uff0c\u4f7f\u7528\u9012\u51cf\u6808 ",(0,m.kt)("inlineCode",{parentName:"li"},"minStack")," \u5b58\u50a8 ",(0,m.kt)("inlineCode",{parentName:"li"},"nums1")," \u4e2d\u6240\u6709\u5143\u7d20\u4e0b\u6807\u4e0e ",(0,m.kt)("inlineCode",{parentName:"li"},"nums2")," \u7684 ",(0,m.kt)("inlineCode",{parentName:"li"},"0")," \u4e0b\u6807\u6784\u6210\u7684\u6570\u5bf9\uff0c\u6ce8\u610f\u8981\u5012\u5e8f\u5165\u6808\u4ee5\u4fdd\u8bc1 ",(0,m.kt)("inlineCode",{parentName:"li"},"minStack")," \u5fc5\u5b9a\u662f\u4e00\u4e2a\u9012\u51cf\u6808"),(0,m.kt)("li",{parentName:"ul"},"\u7136\u540e\u53d6\u6808\u9876\u4e0b\u6807\u6570\u5bf9\u8fdb\u884c\u904d\u5386\uff0c\u904d\u5386\u65f6\u4ee5 ",(0,m.kt)("inlineCode",{parentName:"li"},"nums2")," \u7684\u4e0b\u6807\u6b65\u8fdb"),(0,m.kt)("li",{parentName:"ul"},"\u82e5\u6808\u9876\u4e0b\u6807\u6570\u5bf9\u6240\u5bf9\u5e94\u5143\u7d20\u4e4b\u548c\u6bd4\u5f53\u524d\u6570\u5bf9\u4e4b\u548c\u66f4\u5c0f\u5219\u5c06\u5f53\u524d\u4e0b\u6807\u5165\u6808\u5e76\u4e2d\u65ad\u904d\u5386\uff0c\u53cd\u4e4b\u5c06\u5f53\u524d\u6570\u5bf9\u63a8\u5165\u7ed3\u679c\u6570\u7ec4 ",(0,m.kt)("inlineCode",{parentName:"li"},"res")),(0,m.kt)("li",{parentName:"ul"},"\u4e0a\u4e00\u6b65\u7684\u5165\u6808\u4e0d\u662f\u538b\u5165\u6808\u9876\uff0c\u800c\u662f\u5012\u5e8f\u904d\u5386\u63d2\u5165\u66f4\u5927\u5143\u7d20\u4e4b\u540e\u4ee5\u4fdd\u6301 ",(0,m.kt)("inlineCode",{parentName:"li"},"minStack")," \u9012\u51cf\uff08\u6b64\u65f6\u4e8c\u5206\u67e5\u627e\u518d\u5165\u6808\u65e0\u6cd5\u964d\u65f6\u95f4\u590d\u6742\u5ea6\uff09"),(0,m.kt)("li",{parentName:"ul"},"\u91cd\u590d\u524d\u4e09\u6b65\u904d\u5386\u76f4\u81f3\u7ed3\u675f")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"10\u4ee3\u7801"},"10\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var kSmallestPairs = function (nums1, nums2, k) {\n    const res = [], minStack = [];\n    for (let i = nums1.length - 1; i > -1; i--) minStack.push([i, 0]);\n\n    while (res.length < k && minStack.length) {\n        let [i, j] = minStack.pop();\n\n        for (; res.length < k && j < nums2.length; j++) {\n            // \u6808\u9876\u7684\u6570\u5bf9\u548c\u76f8\u7b49\u6216\u66f4\u5927\n            const [i1, j1] = minStack[minStack.length - 1] || [];\n            if (!minStack.length || nums1[i1] + nums2[j1] >= nums1[i] + nums2[j]) {\n                res.push([nums1[i], nums2[j]]);\n                continue;\n            }\n\n            // \u6808\u9876\u7684\u6570\u5bf9\u548c\u66f4\u5c0f\n            if (nums1[minStack[0][0]] + nums2[minStack[0][1]] <= nums1[i] + nums2[j]) {\n                minStack.unshift([i, j]);\n                break;\n            }\n\n            for (let m = minStack.length - 1; m > -1; m--) {\n                const [i1, j1] = minStack[m];\n                if (nums1[i1] + nums2[j1] >= nums1[i] + nums2[j]) {\n                    minStack.splice(m + 1, 0, [i, j]);\n                    break;\n                }\n            }\n            break;\n        }\n    }\n\n    return res;\n};\n")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"11\u6267\u884c\u7ed3\u679c"},"11\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 152 ms  \u5185\u5b58\u6d88\u8017: 60.4 MB")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"12\u89e3\u6cd52-\u4f18\u5316"},"12\u3001\u89e3\u6cd52-\u4f18\u5316"),(0,m.kt)("p",null,"\u95ee\u9898\u548c\u4f18\u5316\u70b9\u90fd\u8ddf\u89e3\u6cd51\u7684\u95ee\u9898\u548c\u4f18\u5316\u70b9\u4e00\u6837\uff0c\u5355\u8c03\u6808 ",(0,m.kt)("inlineCode",{parentName:"p"},"minStack")," \u6ca1\u5fc5\u8981\u5b58\u50a8\u8d85\u8fc7 ",(0,m.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u5143\u7d20\uff0c\u540e\u7eed\u627e\u6700\u5c0f\u7684 ",(0,m.kt)("inlineCode",{parentName:"p"},"k")," \u5bf9\u6570\u5b57\u53ea\u8981\u5728\u5355\u8c03\u6808\u4e2d\u6392\u5e8f\u548c\u8f6e\u66ff\u6240\u6709\u6570\u636e\u5373\u53ef"),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"13\u590d\u6742\u5ea6"},"13\u3001\u590d\u6742\u5ea6"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a\u590d\u6742\u5ea6\u4e0d\u7a33\u5b9a\uff0c\u4ecb\u4e8e ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(k)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u5230 ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"k"),(0,m.kt)("mn",{parentName:"msup"},"2")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(k^2)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u4e4b\u95f4"),(0,m.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(k)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"14\u4ee3\u7801"},"14\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-javascript"},"var kSmallestPairs = function (nums1, nums2, k) {\n    const res = [], minStack = [];\n    for (let i = Math.min(k, nums1.length) - 1; i > -1; i--) minStack.push([i, 0]);\n\n    while (res.length < k && minStack.length) {\n        const [i, j] = minStack.pop();\n        res.push([nums1[i], nums2[j]]);\n\n        if (j + 1 >= nums2.length) continue;\n        const len = minStack.length;\n        for (let m = len - 1; m > -1; m--) {\n            const [i1, j1] = minStack[m];\n            if (nums1[i1] + nums2[j1] >= nums1[i] + nums2[j + 1]) {\n                minStack.splice(m + 1, 0, [i, j + 1]);\n                break;\n            }\n        }\n        if (len === minStack.length) minStack.unshift([i, j + 1]);\n    }\n\n    return res;\n};\n")),(0,m.kt)("br",null),(0,m.kt)("h2",{id:"15\u6267\u884c\u7ed3\u679c"},"15\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 120 m   \u5185\u5b58\u6d88\u8017: 51.6 MB")))}o.isMDXComponent=!0},62674:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/1642143312-Wyvsjs-1-cbd370c42ed133d2bd5a61911f33d9f1.png"}}]);