"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[18019],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=l,g=m["".concat(i,".").concat(c)]||m[c]||k[c]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:l,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(15882),l=(n(59496),n(49613));const a={authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u6570\u7ec4","\u56de\u6eaf","\u679a\u4e3e"],date:"2022/2/28"},o=void 0,p={permalink:"/algorithm/1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",source:"@site/algorithm/1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee.md",title:"1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",description:"1\u3001\u9898\u5e72",date:"2022-02-28T00:00:00.000Z",formattedDate:"2022\u5e742\u670828\u65e5",tags:[{label:"\u4f4d\u8fd0\u7b97",permalink:"/algorithm/tags/\u4f4d\u8fd0\u7b97"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"},{label:"\u679a\u4e3e",permalink:"/algorithm/tags/\u679a\u4e3e"}],readingTime:4.73,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u6570\u7ec4","\u56de\u6eaf","\u679a\u4e3e"],date:"2022/2/28"},prevItem:{title:"6.Z \u5b57\u5f62\u53d8\u6362",permalink:"/algorithm/6.Z \u5b57\u5f62\u53d8\u6362"},nextItem:{title:"553.\u6700\u4f18\u9664\u6cd5",permalink:"/algorithm/553.\u6700\u4f18\u9664\u6cd5"}},i={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u56de\u6eaf",id:"2\u89e3\u6cd51-\u56de\u6eaf",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd52-BFS",id:"5\u89e3\u6cd52-bfs",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u6267\u884c\u7ed3\u679c",id:"7\u6267\u884c\u7ed3\u679c",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u6211\u4eec\u6709\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u680b\u697c\uff0c\u7f16\u53f7\u4ece\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\xa0\u5230\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"n - 1"),"\xa0\u3002\u6bcf\u680b\u697c\u6709\u82e5\u5e72\u5458\u5de5\u3002\u7531\u4e8e\u73b0\u5728\u662f\u6362\u697c\u7684\u5b63\u8282\uff0c\u90e8\u5206\u5458\u5de5\u60f3\u8981\u6362\u4e00\u680b\u697c\u5c45\u4f4f\u3002"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"requests"),"\xa0\uff0c\u5176\u4e2d\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"requests[i] = [fromi, toi]"),"\xa0\uff0c\u8868\u793a\u4e00\u4e2a\u5458\u5de5\u8bf7\u6c42\u4ece\u7f16\u53f7\u4e3a\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"fromi"),"\xa0\u7684\u697c\u642c\u5230\u7f16\u53f7\u4e3a\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"toi"),"\xa0\u7684\u697c\u3002"),(0,l.kt)("p",null,"\u4e00\u5f00\u59cb\xa0",(0,l.kt)("strong",{parentName:"p"},"\u6240\u6709\u697c\u90fd\u662f\u6ee1\u7684"),"\uff0c\u6240\u4ee5\u4ece\u8bf7\u6c42\u5217\u8868\u4e2d\u9009\u51fa\u7684\u82e5\u5e72\u4e2a\u8bf7\u6c42\u662f\u53ef\u884c\u7684\u9700\u8981\u6ee1\u8db3 ",(0,l.kt)("strong",{parentName:"p"},"\u6bcf\u680b\u697c\u5458\u5de5\u51c0\u53d8\u5316\u4e3a 0"),"\xa0\u3002\u610f\u601d\u662f\u6bcf\u680b\u697c ",(0,l.kt)("strong",{parentName:"p"},"\u79bb\u5f00"),"\xa0\u7684\u5458\u5de5\u6570\u76ee ",(0,l.kt)("strong",{parentName:"p"},"\u7b49\u4e8e"),"\xa0\u8be5\u697c ",(0,l.kt)("strong",{parentName:"p"},"\u642c\u5165"),"\xa0\u7684\u5458\u5de5\u6570\u6570\u76ee\u3002\u6bd4\u65b9\u8bf4\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"n = 3"),"\xa0\u4e14\u4e24\u4e2a\u5458\u5de5\u8981\u79bb\u5f00\u697c\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\xa0\uff0c\u4e00\u4e2a\u5458\u5de5\u8981\u79bb\u5f00\u697c\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\xa0\uff0c\u4e00\u4e2a\u5458\u5de5\u8981\u79bb\u5f00\u697c ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\xa0\uff0c\u5982\u679c\u8be5\u8bf7\u6c42\u5217\u8868\u53ef\u884c\uff0c\u5e94\u8be5\u8981\u6709\u4e24\u4e2a\u5458\u5de5\u642c\u5165\u697c\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\xa0\uff0c\u4e00\u4e2a\u5458\u5de5\u642c\u5165\u697c\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\xa0\uff0c\u4e00\u4e2a\u5458\u5de5\u642c\u5165\u697c\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\xa0\u3002"),(0,l.kt)("p",null,"\u8bf7\u4f60\u4ece\u539f\u8bf7\u6c42\u5217\u8868\u4e2d\u9009\u51fa\u82e5\u5e72\u4e2a\u8bf7\u6c42\uff0c\u4f7f\u5f97\u5b83\u4eec\u662f\u4e00\u4e2a\u53ef\u884c\u7684\u8bf7\u6c42\u5217\u8868\uff0c\u5e76\u8fd4\u56de\u6240\u6709\u53ef\u884c\u5217\u8868\u4e2d\u6700\u5927\u8bf7\u6c42\u6570\u76ee\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/09/26/move1.jpg",alt:null}),(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 5, requests = ","[","[","0,1","]",",","[","1,0","]",",","[","0,1","]",",","[","1,2","]",",","[","2,0","]",",","[","3,4","]","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 5",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u8bf7\u6c42\u5217\u8868\u5982\u4e0b\uff1a",(0,l.kt)("br",null),"\n\u4ece\u697c 0 \u79bb\u5f00\u7684\u5458\u5de5\u4e3a x \u548c y \uff0c\u4e14\u4ed6\u4eec\u90fd\u60f3\u8981\u642c\u5230\u697c 1 \u3002",(0,l.kt)("br",null),"\n\u4ece\u697c 1 \u79bb\u5f00\u7684\u5458\u5de5\u4e3a a \u548c b \uff0c\u4e14\u4ed6\u4eec\u5206\u522b\u60f3\u8981\u642c\u5230\u697c 2 \u548c 0 \u3002",(0,l.kt)("br",null),"\n\u4ece\u697c 2 \u79bb\u5f00\u7684\u5458\u5de5\u4e3a z \uff0c\u4e14\u4ed6\u60f3\u8981\u642c\u5230\u697c 0 \u3002",(0,l.kt)("br",null),"\n\u4ece\u697c 3 \u79bb\u5f00\u7684\u5458\u5de5\u4e3a c \uff0c\u4e14\u4ed6\u60f3\u8981\u642c\u5230\u697c 4 \u3002",(0,l.kt)("br",null),"\n\u6ca1\u6709\u5458\u5de5\u4ece\u697c 4 \u79bb\u5f00\u3002",(0,l.kt)("br",null),"\n\u6211\u4eec\u53ef\u4ee5\u8ba9 x \u548c b \u4ea4\u6362\u4ed6\u4eec\u7684\u697c\uff0c\u4ee5\u6ee1\u8db3\u4ed6\u4eec\u7684\u8bf7\u6c42\u3002",(0,l.kt)("br",null),"\n\u6211\u4eec\u53ef\u4ee5\u8ba9 y\uff0ca \u548c z \u4e09\u4eba\u5728\u4e09\u680b\u697c\u95f4\u4ea4\u6362\u4f4d\u7f6e\uff0c\u6ee1\u8db3\u4ed6\u4eec\u7684\u8981\u6c42\u3002",(0,l.kt)("br",null),"\n\u6240\u4ee5\u6700\u591a\u53ef\u4ee5\u6ee1\u8db3 5 \u4e2a\u8bf7\u6c42\u3002",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/09/26/move2.jpg",alt:null}),(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 3, requests = ","[","[","0,0","]",",","[","1,2","]",",","[","2,1","]","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 3",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u8bf7\u6c42\u5217\u8868\u5982\u4e0b\uff1a",(0,l.kt)("br",null),"\n\u4ece\u697c 0 \u79bb\u5f00\u7684\u5458\u5de5\u4e3a x \uff0c\u4e14\u4ed6\u60f3\u8981\u56de\u5230\u539f\u6765\u7684\u697c 0 \u3002",(0,l.kt)("br",null),"\n\u4ece\u697c 1 \u79bb\u5f00\u7684\u5458\u5de5\u4e3a y \uff0c\u4e14\u4ed6\u60f3\u8981\u642c\u5230\u697c 2 \u3002",(0,l.kt)("br",null),"\n\u4ece\u697c 2 \u79bb\u5f00\u7684\u5458\u5de5\u4e3a z \uff0c\u4e14\u4ed6\u60f3\u8981\u642c\u5230\u697c 1 \u3002",(0,l.kt)("br",null),"\n\u6211\u4eec\u53ef\u4ee5\u6ee1\u8db3\u6240\u6709\u7684\u8bf7\u6c42\u3002",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 4, requests = ","[","[","0,3","]",",","[","3,1","]",",","[","1,2","]",",","[","2,0","]","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 4",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= n <= 20")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= requests.length <= 16")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"requests[i].length == 2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= fromi, toi < n"))),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u56de\u6eaf"},"2\u3001\u89e3\u6cd51-\u56de\u6eaf"),(0,l.kt)("p",null,"\u56de\u6eaf\u679a\u4e3e ",(0,l.kt)("inlineCode",{parentName:"p"},"requests")," \u6240\u6709\u5b50\u96c6\uff0c\u5982\u679c\u6240\u6709\u8282\u70b9\u7684\u51fa\u5ea6\u548c\u5165\u5ea6\u90fd\u4e3a0\u5219\u5c5e\u4e8e\u53ef\u884c\u7684\u8bf7\u6c42\u5217\u8868\uff0c\u53d6\u6240\u6709\u53ef\u884c\u8bf7\u6c42\u5217\u8868\u7684\u6700\u5927\u957f\u5ea6\u4f5c\u4e3a\u8fd4\u56de\u7ed3\u679c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var maximumRequests = function (n, requests) {\n    let max = 0;\n    function backtrace(i, path) {\n        const sums = new Array(n).fill(0);\n        for (const [f, t] of path) sums[f]--, sums[t]++;\n        if (sums.every(s => !s)) max = Math.max(max, path.length);\n\n        for (let j = i + 1; j < requests.length; j++) {\n            path.push(requests[j]);\n            backtrace(j, path);\n            path.pop();\n        }\n    }\n\n    for (let i = 0; i < requests.length; i++) backtrace(i, [requests[i]]);\n\n    return max;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1646016290-ngLOFP-image.png",alt:"image.png"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u89e3\u6cd52-bfs"},"5\u3001\u89e3\u6cd52-BFS"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BFS")," \u679a\u4e3e ",(0,l.kt)("inlineCode",{parentName:"p"},"requests")," \u6240\u6709\u5b50\u96c6\uff0c\u5982\u679c\u6240\u6709\u8282\u70b9\u7684\u51fa\u5ea6\u548c\u5165\u5ea6\u90fd\u4e3a0\u5219\u5c5e\u4e8e\u53ef\u884c\u7684\u8bf7\u6c42\u5217\u8868\uff0c\u53d6\u6240\u6709\u53ef\u884c\u8bf7\u6c42\u5217\u8868\u7684\u6700\u5927\u957f\u5ea6\u4f5c\u4e3a\u8fd4\u56de\u7ed3\u679c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var maximumRequests = function (n, requests) {\n    let max = 0, queue = requests.map((r) => [r]);\n    while (queue.length) {\n        const nextQueue = [];\n        for (let i = 0; i < queue.length; i++) {\n            const reqs = queue[i], sums = new Array(n).fill(0);\n\n            for (const [f, t] of reqs) sums[f]--, sums[t]++;\n            if (sums.every((s) => !s)) max = Math.max(max, reqs.length);\n\n            const idx = requests.indexOf(reqs[reqs.length - 1]);\n            for (let j = idx + 1; j < requests.length; j++) nextQueue.push([...reqs, requests[j]]);\n        }\n        queue = nextQueue;\n    }\n    return max;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"7\u6267\u884c\u7ed3\u679c"},"7\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 924 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 68 MB")))}m.isMDXComponent=!0}}]);