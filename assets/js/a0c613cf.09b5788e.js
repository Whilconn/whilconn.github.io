"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[40562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=u(n),c=a,g=k["".concat(i,".").concat(c)]||k[c]||s[c]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[k]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5206\u6cbb","\u6876\u6392\u5e8f","\u8ba1\u6570","\u5feb\u901f\u9009\u62e9","\u6392\u5e8f","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/1/19"},o=void 0,p={permalink:"/algorithm/\u5251\u6307 Offer II 060.\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684 k \u4e2a\u6570\u5b57",source:"@site/algorithm/\u5251\u6307 Offer II 060.\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684 k \u4e2a\u6570\u5b57.md",title:"\u5251\u6307 Offer II 060.\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684 k \u4e2a\u6570\u5b57",description:"1\u3001\u9898\u5e72",date:"2022-01-19T00:00:00.000Z",formattedDate:"2022\u5e741\u670819\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5206\u6cbb",permalink:"/algorithm/tags/\u5206\u6cbb"},{label:"\u6876\u6392\u5e8f",permalink:"/algorithm/tags/\u6876\u6392\u5e8f"},{label:"\u8ba1\u6570",permalink:"/algorithm/tags/\u8ba1\u6570"},{label:"\u5feb\u901f\u9009\u62e9",permalink:"/algorithm/tags/\u5feb\u901f\u9009\u62e9"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"},{label:"\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",permalink:"/algorithm/tags/\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"}],readingTime:2.42,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5206\u6cbb","\u6876\u6392\u5e8f","\u8ba1\u6570","\u5feb\u901f\u9009\u62e9","\u6392\u5e8f","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/1/19"},prevItem:{title:"219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II",permalink:"/algorithm/219.\u5b58\u5728\u91cd\u590d\u5143\u7d20 II"},nextItem:{title:"2138.\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u82e5\u5e72\u957f\u5ea6\u4e3a k \u7684\u7ec4",permalink:"/algorithm/2138.\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u82e5\u5e72\u957f\u5ea6\u4e3a k \u7684\u7ec4"}},i={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-API\u6392\u5e8f",id:"2\u89e3\u6cd51-api\u6392\u5e8f",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u89e3\u6cd52-\u6876\u6392\u5e8f",id:"5\u89e3\u6cd52-\u6876\u6392\u5e8f",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u590d\u6742\u5ea6",id:"7\u590d\u6742\u5ea6",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," \u548c\u4e00\u4e2a\u6574\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"\xa0\uff0c\u8bf7\u8fd4\u56de\u5176\u4e2d\u51fa\u73b0\u9891\u7387\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u9ad8\u7684\u5143\u7d20\u3002\u53ef\u4ee5\u6309 ",(0,a.kt)("strong",{parentName:"p"},"\u4efb\u610f\u987a\u5e8f")," \u8fd4\u56de\u7b54\u6848\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  nums = ","[","1,1,1,2,2,3","]",", k = 2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  ","[","1,2","]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),"  nums = ","[","1","]",", k = 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  ","[","1","]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"k")," \u7684\u53d6\u503c\u8303\u56f4\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"[1, \u6570\u7ec4\u4e2d\u4e0d\u76f8\u540c\u7684\u5143\u7d20\u7684\u4e2a\u6570]")),(0,a.kt)("li",{parentName:"ul"},"\u9898\u76ee\u6570\u636e\u4fdd\u8bc1\u7b54\u6848\u552f\u4e00\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u6570\u7ec4\u4e2d\u524d ",(0,a.kt)("inlineCode",{parentName:"li"},"k")," \u4e2a\u9ad8\u9891\u5143\u7d20\u7684\u96c6\u5408\u662f\u552f\u4e00\u7684")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a"),"\u6240\u8bbe\u8ba1\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6 ",(0,a.kt)("strong",{parentName:"p"},"\u5fc5\u987b")," \u4f18\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"O(n log n)")," \uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u662f\u6570\u7ec4\u5927\u5c0f\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 347\xa0\u9898\u76f8\u540c\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/top-k-frequent-elements/"},"https://leetcode-cn.com/problems/top-k-frequent-elements/")),(0,a.kt)("h2",{id:"2\u89e3\u6cd51-api\u6392\u5e8f"},"2\u3001\u89e3\u6cd51-API\u6392\u5e8f"),(0,a.kt)("p",null,"\u5148\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04 ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," \u5bf9\u6240\u6709\u6574\u6570\u8fdb\u884c\u8ba1\u6570\uff0c\u7136\u540e\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," \u4e2d\u7684\u952e\u503c\u5bf9\u5b58\u5165\u6570\u7ec4\u5e76\u4f7f\u7528\u6392\u5e8fAPI\u6309\u6570\u91cf\u964d\u5e8f\u6392\u5e8f\uff0c\u6700\u540e\u8fd4\u56de\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u6570\u5b57 "),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var topKFrequent = function (nums, k) {\n    const map = new Map();\n    for (const n of nums) map.set(n, 1 + (map.get(n) || 0));\n\n    const arr = [];\n    for (const kv of map) arr.push(kv);\n    return arr.sort((a, b) => b[1] - a[1]).slice(0, k).map(a => a[0]);\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(nlogn)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"5\u89e3\u6cd52-\u6876\u6392\u5e8f"},"5\u3001\u89e3\u6cd52-\u6876\u6392\u5e8f"),(0,a.kt)("p",null,"\u5148\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04 ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," \u5bf9\u6240\u6709\u6574\u6570\u8fdb\u884c\u8ba1\u6570\uff0c\u7136\u540e\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," \u4e2d\u7684\u952e\u503c\u5bf9\u5b58\u5165\u6309\u6570\u91cf\u5b58\u5165\u6876\u4e2d\uff0c\u6700\u540e\u8fd4\u56de\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u6570\u5b57\u3002\u5176\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a $O(n)$\uff0c\u89e3\u51b3\u4e86\u8fdb\u9636\u95ee\u9898\u3002"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var topKFrequent = function (nums, k) {\n    const map = new Map();\n    for (const n of nums) map.set(n, 1 + (map.get(n) || 0));\n\n    const buckets = new Array(nums.length + 1);\n    for (const [n, v] of map) !buckets[v] ? buckets[v] = [n] : buckets[v].push(n);\n\n    const res = [];\n    for (let i = buckets.length - 1; i > -1; i--) {\n        if (res.length >= k) break;\n        if (buckets[i]) res.push(...buckets[i]);\n    }\n\n    return res.length > k ? res.slice(0, k) : res;\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"7\u590d\u6742\u5ea6"},"7\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")))}k.isMDXComponent=!0}}]);