"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[39494],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(t),c=r,d=s["".concat(o,".").concat(c)]||s[c]||k[c]||l;return t?a.createElement(d,i(i({ref:n},m),{},{components:t})):a.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},28698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u6ed1\u52a8\u7a97\u53e3"],date:"2022/1/19"},i=void 0,p={permalink:"/algorithm/219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II",source:"@site/algorithm/219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II.md",title:"219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II",description:"1\u3001\u9898\u5e72",date:"2022-01-19T00:00:00.000Z",formattedDate:"2022\u5e741\u670819\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/algorithm/tags/\u6ed1\u52a8\u7a97\u53e3"}],readingTime:3.265,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u6ed1\u52a8\u7a97\u53e3"],date:"2022/1/19"},prevItem:{title:"1345.\u8df3\u8dc3\u6e38\u620f IV",permalink:"/algorithm/1345.\u8df3\u8dc3\u6e38\u620f IV"},nextItem:{title:"\u5251\u6307 Offer II 060.\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684 k \u4e2a\u6570\u5b57",permalink:"/algorithm/\u5251\u6307 Offer II 060.\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684 k \u4e2a\u6570\u5b57"}},o={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u54c8\u5e0c\u6620\u5c04",id:"2\u89e3\u6cd51-\u54c8\u5e0c\u6620\u5c04",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u89e3\u6cd52-\u6ed1\u52a8\u7a97\u53e3+\u54c8\u5e0c\u96c6\u5408",id:"5\u89e3\u6cd52-\u6ed1\u52a8\u7a97\u53e3\u54c8\u5e0c\u96c6\u5408",level:2},{value:"6\u3001\u590d\u6742\u5ea6",id:"6\u590d\u6742\u5ea6",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2}],m={toc:u};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," \u548c\u4e00\u4e2a\u6574\u6570\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \uff0c\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u4e24\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u7684\u7d22\u5f15"),"\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"i"),"\xa0\u548c\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"j")," \uff0c\u6ee1\u8db3 ",(0,r.kt)("inlineCode",{parentName:"p"},"nums[i] == nums[j]")," \u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"abs(i - j) <= k")," \u3002\u5982\u679c\u5b58\u5728\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \uff1b\u5426\u5219\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\xa01\uff1a")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),"nums = ","[","1,2,3,1","]",", k \\= 3\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),"true"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,0,1,1","]",", k \\= 1",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," true",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,2,3,1,2,3","]",", k \\= 2",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," false",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^9 <= nums[i] <= 10^9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= k <= 10^5"))),(0,r.kt)("h2",{id:"2\u89e3\u6cd51-\u54c8\u5e0c\u6620\u5c04"},"2\u3001\u89e3\u6cd51-\u54c8\u5e0c\u6620\u5c04"),(0,r.kt)("p",null,"\u904d\u5386\u6570\u7ec4\u6240\u6709\u5143\u7d20\uff0c\u5e76\u5c06\u5f53\u524d\u6570\u5b57\u548c\u7d22\u5f15\u4f5c\u4e3a\u952e\u503c\u5b58\u5165\u54c8\u5e0c\u6620\u5c04 ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," \u4e2d\uff0c\u5982\u679c\u5f53\u524d\u6570\u5b57 ",(0,r.kt)("inlineCode",{parentName:"p"},"nums[i]")," \u5df2\u5b58\u5728\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," \u4e2d\u4e14\u5176\u7d22\u5f15\u4e0e\u5f53\u524d\u7d22\u5f15\u7684\u5dee\u503c\u4e0d\u5927\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u904d\u5386\u7ed3\u675f\u4ecd\u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u6570\u5b57\u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript",metastring:"[g1-JavaScript]","[g1-JavaScript]":!0},"var containsNearbyDuplicate = function (nums, k) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) return true;\n        map.set(nums[i], i);\n    }\n    return false;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python",metastring:"[g1-Python]","[g1-Python]":!0},"class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        map = {}\n        for i in range(len(nums)):\n            if(nums[i] in map and i - map[nums[i]] <= k):\n                return True\n            map[nums[i]] = i\n        return False\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"5\u89e3\u6cd52-\u6ed1\u52a8\u7a97\u53e3\u54c8\u5e0c\u96c6\u5408"},"5\u3001\u89e3\u6cd52-\u6ed1\u52a8\u7a97\u53e3+\u54c8\u5e0c\u96c6\u5408"),(0,r.kt)("p",null,"\u904d\u5386\u6570\u7ec4\u6240\u6709\u5143\u7d20\uff0c\u4f7f\u7528\u54c8\u5e0c\u96c6\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," \u4f5c\u4e3a\u6ed1\u52a8\u7a97\u53e3\u5bb9\u5668\u5b58\u50a8\u6570\u7ec4\u4e2d\u8fde\u7eed\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u5143\u7d20\uff0c\u7d22\u5f15 ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u5927\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u4e4b\u540e\u9700\u8981\u5254\u9664\u6ed1\u52a8\u7a97\u53e3\u5bb9\u5668\u7684\u9996\u4e2a\u5143\u7d20 ",(0,r.kt)("inlineCode",{parentName:"p"},"nums[i - k - 1]")," \u4ee5\u4fdd\u8bc1\u5176\u957f\u5ea6\u4e0d\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\uff0c\u5982\u679c\u5f53\u524d\u5143\u7d20\u5df2\u5b58\u5728\u4e8e\u54c8\u5e0c\u96c6\u5408\u5219\u8bf4\u660e\u4e8c\u8005\u7d22\u5f15\u5dee\u503c\u4e0d\u5927\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u5e94\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u904d\u5386\u7ed3\u675f\u4ecd\u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u6570\u5b57\u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u89e3\u6cd51\u7684\u4f18\u52bf\u5728\u4e8e\u66f4\u5bb9\u6613\u60f3\u5230\u548c\u7406\u89e3\u3002\u89e3\u6cd52\u7684\u4f18\u52bf\u5728\u4e8e\u53ea\u9700\u8981\u5b58\u50a8\u503c\u800c\u4e0d\u9700\u8981\u5b58\u50a8\u952e\u503c\u5bf9\uff0c\u56e0\u6b64\u7a7a\u95f4\u5360\u7528\u4f1a\u66f4\u5c11\uff1b\u53e6\u5916\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u6bd4 ",(0,r.kt)("inlineCode",{parentName:"p"},"nums.length")," \u5c0f\u7684\u60c5\u51b5\u4e0b\uff0c\u89e3\u6cd52\u7684\u7a7a\u95f4\u590d\u6742\u5ea6\u4f1a\u66f4\u5c0f\u4e14\u4e0d\u53d7 ",(0,r.kt)("inlineCode",{parentName:"p"},"nums.length")," \u53d8\u5927\u800c\u5f71\u54cd\u3002")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"6\u590d\u6742\u5ea6"},"6\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(k)$")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript",metastring:"[g2-JavaScript]","[g2-JavaScript]":!0},"var containsNearbyDuplicate = function (nums, k) {\n    const set = new Set();\n    for (let i = 0; i < nums.length; i++) {\n        if (i > k) set.delete(nums[i - k - 1]);\n        if (set.has(nums[i])) return true;\n        set.add(nums[i]);\n    }\n    return false;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python",metastring:"[g2-Python]","[g2-Python]":!0},"class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        s = set()\n        for i in range(len(nums)):\n            if(i > k):\n                s.remove(nums[i - k - 1])\n            if(nums[i] in s):\n                return True\n            s.add(nums[i])\n        return False\n")))}s.isMDXComponent=!0}}]);