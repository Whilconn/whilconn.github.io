"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[83461],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(n),k=l,g=s["".concat(u,".").concat(k)]||s[k]||m[k]||a;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},51743:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5206\u6cbb","\u6876\u6392\u5e8f","\u8ba1\u6570","\u5feb\u901f\u9009\u62e9","\u6392\u5e8f","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2021/11/6"},o=void 0,i={permalink:"/algorithm/2021/11/06/347.\u524d K \u4e2a\u9ad8\u9891\u5143\u7d20",source:"@site/algorithm/2021/11/06/347.\u524d K \u4e2a\u9ad8\u9891\u5143\u7d20.md",title:"347.\u524d K \u4e2a\u9ad8\u9891\u5143\u7d20",description:"1\u3001\u9898\u5e72",date:"2021-11-06T00:00:00.000Z",formattedDate:"2021\u5e7411\u67086\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5206\u6cbb",permalink:"/algorithm/tags/\u5206\u6cbb"},{label:"\u6876\u6392\u5e8f",permalink:"/algorithm/tags/\u6876\u6392\u5e8f"},{label:"\u8ba1\u6570",permalink:"/algorithm/tags/\u8ba1\u6570"},{label:"\u5feb\u901f\u9009\u62e9",permalink:"/algorithm/tags/\u5feb\u901f\u9009\u62e9"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"},{label:"\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",permalink:"/algorithm/tags/\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"}],readingTime:1.98,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5206\u6cbb","\u6876\u6392\u5e8f","\u8ba1\u6570","\u5feb\u901f\u9009\u62e9","\u6392\u5e8f","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2021/11/6"},prevItem:{title:"520.\u68c0\u6d4b\u5927\u5199\u5b57\u6bcd",permalink:"/algorithm/2021/11/13/520.\u68c0\u6d4b\u5927\u5199\u5b57\u6bcd"},nextItem:{title:"1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",permalink:"/algorithm/2021/11/05/1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217"}},u={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,l.kt)("code",null,"nums")," \u548c\u4e00\u4e2a\u6574\u6570 ",(0,l.kt)("code",null,"k")," \uff0c\u8bf7\u4f60\u8fd4\u56de\u5176\u4e2d\u51fa\u73b0\u9891\u7387\u524d ",(0,l.kt)("code",null,"k")," \u9ad8\u7684\u5143\u7d20\u3002\u4f60\u53ef\u4ee5\u6309 ",(0,l.kt)("strong",null,"\u4efb\u610f\u987a\u5e8f")," \u8fd4\u56de\u7b54\u6848\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1:")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165: "),"nums = [1,1,1,2,2,3], k = 2",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa: "),"[1,2]",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2:")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165: "),"nums = [1], k = 1",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa: "),"[1]"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= nums.length <= 10",(0,l.kt)("sup",null,"5"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"k")," \u7684\u53d6\u503c\u8303\u56f4\u662f ",(0,l.kt)("code",null,"[1, \u6570\u7ec4\u4e2d\u4e0d\u76f8\u540c\u7684\u5143\u7d20\u7684\u4e2a\u6570]")),(0,l.kt)("li",null,"\u9898\u76ee\u6570\u636e\u4fdd\u8bc1\u7b54\u6848\u552f\u4e00\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u6570\u7ec4\u4e2d\u524d ",(0,l.kt)("code",null,"k")," \u4e2a\u9ad8\u9891\u5143\u7d20\u7684\u96c6\u5408\u662f\u552f\u4e00\u7684")),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u8fdb\u9636\uff1a"),"\u4f60\u6240\u8bbe\u8ba1\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6 ",(0,l.kt)("strong",null,"\u5fc5\u987b")," \u4f18\u4e8e ",(0,l.kt)("code",null,"O(n log n)")," \uff0c\u5176\u4e2d ",(0,l.kt)("code",null,"n"),(0,l.kt)("em",null,"\xa0"),"\u662f\u6570\u7ec4\u5927\u5c0f\u3002"),(0,l.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u54c8\u5e0c\u6620\u5c04map\uff0c\u7528\u4e8e\u7edf\u8ba1\u6570\u5b57\u51fa\u73b0\u6b21\u6570\uff0ckey\u4e3a\u6570\u5b57\uff0cvalue\u4e3a\u51fa\u73b0\u6b21\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6570\u7ec4arr\uff0c\u7528\u4e8e\u7edf\u8ba1\u6bcf\u4e2a\u51fa\u73b0\u6b21\u6570\u5bf9\u5e94\u7684\u6570\u5b57\u96c6\u5408\uff0c\u6570\u7ec4\u4e0b\u6807\u4ee3\u8868\u6570\u5b57\u51fa\u73b0\u6b21\u6570\uff0c\u503c\u4e3a\u51fa\u73b0\u6b21\u6570\u4e0e\u4e4b\u76f8\u7b49\u7684\u6570\u5b57\u7684\u96c6\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u5012\u5e8f\u904d\u5386\u6570\u7ec4arr\uff0c\u63d0\u53d6\u524d\u51fa\u73b0\u9891\u7387\u524d k \u9ad8\u7684\u6570\u5b57")),(0,l.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nvar topKFrequent = function(nums, k) {\n    const map = {};\n    for (let i = 0; i < nums.length; i++) {\n        map[nums[i]] = (map[nums[i]] || 0) + 1;\n    }\n\n    const matrix = Object.entries(map);\n    const arr = [];\n    for (let i = 0; i < matrix.length; i++) {\n        const [n, c] = matrix[i];\n        if (!arr[c]) arr[c] = [];\n        arr[c].push(+n);\n    }\n\n    const res = [];\n    for (let i = arr.length - 1; i > -1; i--) {\n        if (arr[i] && res.length < k) {\n            res.push(...arr[i].slice(0, k - res.length));\n        }\n    }\n\n    return res;\n};\n")))}s.isMDXComponent=!0}}]);