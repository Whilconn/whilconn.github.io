"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[34642],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,g=m["".concat(p,".").concat(c)]||m[c]||k[c]||l;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},38606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(15882),a=(t(59496),t(49613));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:"2023/1/20"},i=void 0,o={permalink:"/algorithm/1817.\u67e5\u627e\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570",source:"@site/algorithm/1817.\u67e5\u627e\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570.md",title:"1817.\u67e5\u627e\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570",description:"1\u3001\u9898\u5e72",date:"2023-01-20T00:00:00.000Z",formattedDate:"2023\u5e741\u670820\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"}],readingTime:4.145,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:"2023/1/20"},nextItem:{title:"2299.\u5f3a\u5bc6\u7801\u68c0\u9a8c\u5668 II",permalink:"/algorithm/2299.\u5f3a\u5bc6\u7801\u68c0\u9a8c\u5668 II"}},p={authorsImageUrls:[void 0]},s=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],u={toc:s};function m(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u7528\u6237\u5728 LeetCode \u7684\u64cd\u4f5c\u65e5\u5fd7\uff0c\u548c\u4e00\u4e2a\u6574\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u3002\u65e5\u5fd7\u7528\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"logs")," \u8868\u793a\uff0c\u5176\u4e2d\u6bcf\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"logs[i] = [IDi, timei]")," \u8868\u793a ID \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"IDi")," \u7684\u7528\u6237\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"timei")," \u5206\u949f\u65f6\u6267\u884c\u4e86\u67d0\u4e2a\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u7528\u6237")," \u53ef\u4ee5\u540c\u65f6\u6267\u884c\u64cd\u4f5c\uff0c\u5355\u4e2a\u7528\u6237\u53ef\u4ee5\u5728\u540c\u4e00\u5206\u949f\u5185\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u64cd\u4f5c")," \u3002"),(0,a.kt)("p",null,"\u6307\u5b9a\u7528\u6237\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570\uff08user active minutes\uff0cUAM\uff09")," \u5b9a\u4e49\u4e3a\u7528\u6237\u5bf9 LeetCode \u6267\u884c\u64cd\u4f5c\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u552f\u4e00\u5206\u949f\u6570")," \u3002 \u5373\u4f7f\u4e00\u5206\u949f\u5185\u6267\u884c\u591a\u4e2a\u64cd\u4f5c\uff0c\u4e5f\u53ea\u80fd\u6309\u4e00\u5206\u949f\u8ba1\u6570\u3002"),(0,a.kt)("p",null,"\u8bf7\u4f60\u7edf\u8ba1\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570\u7684\u5206\u5e03\u60c5\u51b5\uff0c\u7edf\u8ba1\u7ed3\u679c\u662f\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u4e14 ",(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u6807\u4ece 1 \u5f00\u59cb\u8ba1\u6570")," \u7684\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"answer")," \uff0c\u5bf9\u4e8e\u6bcf\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"j"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"1 <= j <= k"),"\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"answer[j]")," \u8868\u793a ",(0,a.kt)("strong",{parentName:"p"},"\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570")," \u7b49\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"j")," \u7684\u7528\u6237\u6570\u3002"),(0,a.kt)("p",null,"\u8fd4\u56de\u4e0a\u9762\u63cf\u8ff0\u7684\u7b54\u6848\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"answer")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," logs = ","[","[","0,5","]",",","[","1,2","]",",","[","0,2","]",",","[","0,5","]",",","[","1,3","]","]",", k = 5",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","0,2,0,0,0","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),"\nID=0 \u7684\u7528\u6237\u6267\u884c\u64cd\u4f5c\u7684\u5206\u949f\u5206\u522b\u662f\uff1a5 \u30012 \u548c 5 \u3002\u56e0\u6b64\uff0c\u8be5\u7528\u6237\u7684\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570\u4e3a 2\uff08\u5206\u949f 5 \u53ea\u8ba1\u6570\u4e00\u6b21\uff09",(0,a.kt)("br",null),"\nID=1 \u7684\u7528\u6237\u6267\u884c\u64cd\u4f5c\u7684\u5206\u949f\u5206\u522b\u662f\uff1a2 \u548c 3 \u3002\u56e0\u6b64\uff0c\u8be5\u7528\u6237\u7684\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570\u4e3a 2",(0,a.kt)("br",null),"\n2 \u4e2a\u7528\u6237\u7684\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570\u90fd\u662f 2 \uff0canswer","[","2","]"," \u4e3a 2 \uff0c\u5176\u4f59 answer","[","j","]"," \u7684\u503c\u90fd\u662f 0",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," logs = ","[","[","1,1","]",",","[","2,2","]",",","[","2,3","]","]",", k = 4",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","1,1,0,0","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),"\nID=1 \u7684\u7528\u6237\u4ec5\u5728\u5206\u949f 1 \u6267\u884c\u5355\u4e2a\u64cd\u4f5c\u3002\u56e0\u6b64\uff0c\u8be5\u7528\u6237\u7684\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570\u4e3a 1",(0,a.kt)("br",null),"\nID=2 \u7684\u7528\u6237\u6267\u884c\u64cd\u4f5c\u7684\u5206\u949f\u5206\u522b\u662f\uff1a2 \u548c 3 \u3002\u56e0\u6b64\uff0c\u8be5\u7528\u6237\u7684\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570\u4e3a 2",(0,a.kt)("br",null),"\n1 \u4e2a\u7528\u6237\u7684\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570\u662f 1 \uff0c1 \u4e2a\u7528\u6237\u7684\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570\u662f 2 ",(0,a.kt)("br",null),"\n\u56e0\u6b64\uff0canswer","[","1","]"," = 1 \uff0canswer","[","2","]"," = 1 \uff0c\u5176\u4f59\u7684\u503c\u90fd\u662f 0",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= logs.length <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= IDi <= 10^9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= timei <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"k")," \u7684\u53d6\u503c\u8303\u56f4\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"[\u7528\u6237\u7684\u6700\u5927\u7528\u6237\u6d3b\u8dc3\u5206\u949f\u6570, 10^5]"))),(0,a.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,a.kt)("p",null,"\u4f7f\u7528\u54c8\u5e0c\u8868\u6a21\u62df"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function findingUsersActiveMinutes(logs: number[][], k: number): number[] {\n    const map = new Map<number, Set<number>>();\n    for (const [id, m] of logs) {\n        map.set(id, (map.get(id) ?? new Set()).add(m));\n    }\n\n    const ans = new Array(k).fill(0);\n    for (const [id, set] of map) {\n        if (set.size <= k) ans[set.size - 1] += 1;\n    }\n\n    return ans;\n};\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:t(48493).Z,width:"1398",height:"390"})),(0,a.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,a.kt)("p",null,"\u4f7f\u7528\u6392\u5e8f\u6a21\u62df\uff0c\u53ef\u4ee5\u6392\u5e8f+set\uff0c\u4e5f\u53ef\u4ee5\u6392\u5e8f+\u8fc7\u6ee4"),(0,a.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,a.kt)("p",null,"\u6392\u5e8f+set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function findingUsersActiveMinutes(logs: number[][], k: number): number[] {\n    logs.sort((a, b) => a[0] - b[0]);\n\n    const ans = new Array(k).fill(0);\n    for (let i = 0, set = new Set(); i < logs.length; i++) {\n        set.add(logs[i][1]);\n        \n        if (logs[i][0] !== logs[i + 1]?.at(0)) {\n            if (set.size <= k) ans[set.size - 1] += 1;\n            set = new Set();\n        }\n    }\n\n    return ans;\n};\n")),(0,a.kt)("p",null,"\u6392\u5e8f+\u8fc7\u6ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function findingUsersActiveMinutes(logs: number[][], k: number): number[] {\n    logs.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);\n    logs = logs.filter((l, i) => l[0] !== logs[i + 1]?.at(0) || l[1] !== logs[i + 1]?.at(1));\n\n    const ans = new Array(k).fill(0);\n    for (let i = 0, c = 0; i < logs.length; i++) {\n        c++;\n        if (logs[i][0] !== logs[i + 1]?.at(0)) {\n            if (c <= k) ans[c - 1] += 1;\n            c = 0;\n        }\n    }\n\n    return ans;\n};\n")),(0,a.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(nlogn)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,a.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:t(19157).Z,width:"1400",height:"398"})))}m.isMDXComponent=!0},48493:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1674178524-XzrhkI-image-3e3bb0c38a81a5dd9a0e4f635f53e61d.png"},19157:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1674178548-yhxWGf-image-fdb62a06bba560b94e030360f42f2292.png"}}]);