"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[61141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),i=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(n),k=l,d=u["".concat(m,".").concat(k)]||u[k]||c[k]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<r;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var a=n(87462),l=(n(67294),n(3905));const r={authors:["Whilconn"],tags:["\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u56fe"],date:new Date("2023-02-02T00:00:00.000Z")},s=void 0,o={permalink:"/algorithm/2023/02/02/1129.\u989c\u8272\u4ea4\u66ff\u7684\u6700\u77ed\u8def\u5f84",source:"@site/algorithm/2023/02/02/1129.\u989c\u8272\u4ea4\u66ff\u7684\u6700\u77ed\u8def\u5f84.md",title:"1129.\u989c\u8272\u4ea4\u66ff\u7684\u6700\u77ed\u8def\u5f84",description:"1\u3001\u9898\u5e72",date:"2023-02-02T00:00:00.000Z",formattedDate:"2023\u5e742\u67082\u65e5",tags:[{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u56fe",permalink:"/algorithm/tags/\u56fe"}],readingTime:2.465,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u56fe"],date:"2023-02-02T00:00:00.000Z"},prevItem:{title:"1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f",permalink:"/algorithm/2023/02/03/1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f"},nextItem:{title:"2319.\u5224\u65ad\u77e9\u9635\u662f\u5426\u662f\u4e00\u4e2a X \u77e9\u9635",permalink:"/algorithm/2023/01/31/2319.\u5224\u65ad\u77e9\u9635\u662f\u5426\u662f\u4e00\u4e2a X \u77e9\u9635"}},m={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570 ",(0,l.kt)("code",null,"n"),"\uff0c\u5373\u6709\u5411\u56fe\u4e2d\u7684\u8282\u70b9\u6570\uff0c\u5176\u4e2d\u8282\u70b9\u6807\u8bb0\u4e3a ",(0,l.kt)("code",null,"0")," \u5230 ",(0,l.kt)("code",null,"n - 1"),"\u3002\u56fe\u4e2d\u7684\u6bcf\u6761\u8fb9\u4e3a\u7ea2\u8272\u6216\u8005\u84dd\u8272\uff0c\u5e76\u4e14\u53ef\u80fd\u5b58\u5728\u81ea\u73af\u6216\u5e73\u884c\u8fb9\u3002"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u6570\u7ec4\xa0",(0,l.kt)("code",null,"redEdges"),"\xa0\u548c\xa0",(0,l.kt)("code",null,"blueEdges"),"\uff0c\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"redEdges[i] = [a",(0,l.kt)("sub",null,"i"),", b",(0,l.kt)("sub",null,"i"),"]"),"\xa0\u8868\u793a\u56fe\u4e2d\u5b58\u5728\u4e00\u6761\u4ece\u8282\u70b9\xa0",(0,l.kt)("code",null,"a",(0,l.kt)("sub",null,"i")),"\xa0\u5230\u8282\u70b9\xa0",(0,l.kt)("code",null,"b",(0,l.kt)("sub",null,"i")),"\xa0\u7684\u7ea2\u8272\u6709\u5411\u8fb9\uff0c"),(0,l.kt)("li",null,(0,l.kt)("code",null,"blueEdges[j] = [u",(0,l.kt)("sub",null,"j"),", v",(0,l.kt)("sub",null,"j"),"]"),"\xa0\u8868\u793a\u56fe\u4e2d\u5b58\u5728\u4e00\u6761\u4ece\u8282\u70b9\xa0",(0,l.kt)("code",null,"u",(0,l.kt)("sub",null,"j")),"\xa0\u5230\u8282\u70b9\xa0",(0,l.kt)("code",null,"v",(0,l.kt)("sub",null,"j")),"\xa0\u7684\u84dd\u8272\u6709\u5411\u8fb9\u3002")),(0,l.kt)("p",null,"\u8fd4\u56de\u957f\u5ea6\u4e3a ",(0,l.kt)("code",null,"n")," \u7684\u6570\u7ec4\xa0",(0,l.kt)("code",null,"answer"),"\uff0c\u5176\u4e2d\xa0",(0,l.kt)("code",null,"answer[X]"),"\xa0\u662f\u4ece\u8282\u70b9\xa0",(0,l.kt)("code",null,"0"),"\xa0\u5230\u8282\u70b9\xa0",(0,l.kt)("code",null,"X"),"\xa0\u7684\u7ea2\u8272\u8fb9\u548c\u84dd\u8272\u8fb9\u4ea4\u66ff\u51fa\u73b0\u7684\u6700\u77ed\u8def\u5f84\u7684\u957f\u5ea6\u3002\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u8def\u5f84\uff0c\u90a3\u4e48 ",(0,l.kt)("code",null,"answer[x] = -1"),"\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 3, red_edges = [[0,1],[1,2]], blue_edges = []",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[0,1,-1]",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[0,1,-1]",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= n <= 100")),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= redEdges.length,\xa0blueEdges.length <= 400")),(0,l.kt)("li",null,(0,l.kt)("code",null,"redEdges[i].length == blueEdges[j].length == 2")),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= a",(0,l.kt)("sub",null,"i"),", b",(0,l.kt)("sub",null,"i"),", u",(0,l.kt)("sub",null,"j"),", v",(0,l.kt)("sub",null,"j"),"\xa0< n"))),(0,l.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,l.kt)("p",null,"\u6574\u4f53\u601d\u8def\u5206\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5efa\u8868")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"BFS")," \u4e24\u6b65\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8868\uff1a\u5c06\u6240\u6709\u90bb\u63a5\u70b9\u5173\u7cfb\u5b58\u5165\u4e8c\u7ef4\u77e9\u9635\uff0c\u7b2c\u4e00\u7ef4\u4e0b\u6807\u8868\u793a\u51fa\u53d1\u70b9\uff0c\u7b2c\u4e8c\u7ef4\u5143\u7d20\u8868\u793a\u5230\u8fbe\u70b9\uff0c\u5230\u8fbe\u70b9\u4f7f\u7528\u6b63\u8d1f\u6570\u8868\u793a\u7ea2\u84dd\u4e24\u79cd\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"BFS\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u6240\u6709\u53ef\u80fd\u5b58\u5728\u7684\u7ea2\u84dd\u4ea4\u66ff\u8def\u5f84\uff0c\u627e\u51fa\u6700\u77ed\u8def\u5f84")),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {\n    const edges: Set<number>[] = new Array(n).fill(0).map(() => new Set());\n    for (const [e0, e1] of redEdges) edges[e0].add(e1);\n    for (const [e0, e1] of blueEdges) edges[e0].add(-e1);\n\n    const ans = new Array(n).fill(Infinity);\n    let nodes = edges[0], visited = new Set([0]);\n\n    for (let depth = 1; nodes.size; depth++) {\n        const nextNodes: Set<number> = new Set();\n\n        for (const n of nodes) {\n            if (visited.has(n)) continue;\n            visited.add(n);\n\n            const i = n < 0 ? -n : n;\n            ans[i] = Math.min(ans[i], depth);\n\n            for (const e of edges[i]) {\n                if (Math.sign(n) !== Math.sign(e)) nextNodes.add(e);\n            }\n        }\n\n        nodes = nextNodes;\n    }\n\n    return ans[0] = 0, ans.map(a => a === Infinity ? -1 : a);\n}\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(83089).Z,width:"1470",height:"404"})))}u.isMDXComponent=!0},83089:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/52185d4124d78a228e98b14089578b58-00c6ae02acde6998633ca6b07f68a53f.png"}}]);