"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[31680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),k=l,d=c["".concat(i,".").concat(k)]||c[k]||u[k]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},63153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u6570\u7ec4","\u77e9\u9635"],date:"2022/11/10"},s=void 0,o={permalink:"/algorithm/2022/11/10/864.\u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84",source:"@site/algorithm/2022/11/10/864.\u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84.md",title:"864.\u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84",description:"1\u3001\u9898\u5e72",date:"2022-11-10T00:00:00.000Z",formattedDate:"2022\u5e7411\u670810\u65e5",tags:[{label:"\u4f4d\u8fd0\u7b97",permalink:"/algorithm/tags/\u4f4d\u8fd0\u7b97"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:4.78,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u6570\u7ec4","\u77e9\u9635"],date:"2022/11/10"},prevItem:{title:"791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f",permalink:"/algorithm/2022/11/13/791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f"},nextItem:{title:"764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7",permalink:"/algorithm/2022/11/09/764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7"}},i={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u7ef4\u7f51\u683c\xa0",(0,l.kt)("code",null,"grid"),"\xa0\uff0c\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("font",{color:"#c7254e"},(0,l.kt)("font",{face:"Menlo, Monaco, Consolas, Courier New, monospace"},(0,l.kt)("span",null,(0,l.kt)("span",null,"'.'"))))," \u4ee3\u8868\u4e00\u4e2a\u7a7a\u623f\u95f4"),(0,l.kt)("li",null,(0,l.kt)("font",{color:"#c7254e"},(0,l.kt)("font",{face:"Menlo, Monaco, Consolas, Courier New, monospace"},(0,l.kt)("span",null,(0,l.kt)("span",null,"'#'"))))," \u4ee3\u8868\u4e00\u5835\u5899"),(0,l.kt)("li",null,(0,l.kt)("font",{color:"#c7254e"},(0,l.kt)("font",{face:"Menlo, Monaco, Consolas, Courier New, monospace"},(0,l.kt)("span",null,(0,l.kt)("span",null,"'@'")))),"\xa0\u662f\u8d77\u70b9"),(0,l.kt)("li",null,"\u5c0f\u5199\u5b57\u6bcd\u4ee3\u8868\u94a5\u5319"),(0,l.kt)("li",null,"\u5927\u5199\u5b57\u6bcd\u4ee3\u8868\u9501")),(0,l.kt)("p",null,"\u6211\u4eec\u4ece\u8d77\u70b9\u5f00\u59cb\u51fa\u53d1\uff0c\u4e00\u6b21\u79fb\u52a8\u662f\u6307\u5411\u56db\u4e2a\u57fa\u672c\u65b9\u5411\u4e4b\u4e00\u884c\u8d70\u4e00\u4e2a\u5355\u4f4d\u7a7a\u95f4\u3002\u6211\u4eec\u4e0d\u80fd\u5728\u7f51\u683c\u5916\u9762\u884c\u8d70\uff0c\u4e5f\u65e0\u6cd5\u7a7f\u8fc7\u4e00\u5835\u5899\u3002\u5982\u679c\u9014\u7ecf\u4e00\u4e2a\u94a5\u5319\uff0c\u6211\u4eec\u5c31\u628a\u5b83\u6361\u8d77\u6765\u3002\u9664\u975e\u6211\u4eec\u624b\u91cc\u6709\u5bf9\u5e94\u7684\u94a5\u5319\uff0c\u5426\u5219\u65e0\u6cd5\u901a\u8fc7\u9501\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe k\xa0\u4e3a \u94a5\u5319/\u9501 \u7684\u4e2a\u6570\uff0c\u4e14\u6ee1\u8db3\xa0",(0,l.kt)("code",null,"1 <= k\xa0<= 6"),"\uff0c\u5b57\u6bcd\u8868\u4e2d\u7684\u524d ",(0,l.kt)("code",null,"k"),"\xa0\u4e2a\u5b57\u6bcd\u5728\u7f51\u683c\u4e2d\u90fd\u6709\u81ea\u5df1\u5bf9\u5e94\u7684\u4e00\u4e2a\u5c0f\u5199\u548c\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd\u3002\u6362\u8a00\u4e4b\uff0c\u6bcf\u4e2a\u9501\u6709\u552f\u4e00\u5bf9\u5e94\u7684\u94a5\u5319\uff0c\u6bcf\u4e2a\u94a5\u5319\u4e5f\u6709\u552f\u4e00\u5bf9\u5e94\u7684\u9501\u3002\u53e6\u5916\uff0c\u4ee3\u8868\u94a5\u5319\u548c\u9501\u7684\u5b57\u6bcd\u4e92\u4e3a\u5927\u5c0f\u5199\u5e76\u6309\u5b57\u6bcd\u987a\u5e8f\u6392\u5217\u3002"),(0,l.kt)("p",null,"\u8fd4\u56de\u83b7\u53d6\u6240\u6709\u94a5\u5319\u6240\u9700\u8981\u7684\u79fb\u52a8\u7684\u6700\u5c11\u6b21\u6570\u3002\u5982\u679c\u65e0\u6cd5\u83b7\u53d6\u6240\u6709\u94a5\u5319\uff0c\u8fd4\u56de\xa0",(0,l.kt)("code",null,"-1"),"\xa0\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{src:"../../../img/lc-keys2.jpg"})),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'grid = ["@.a.#","###.#","b.A.B"]',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"8",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u76ee\u6807\u662f\u83b7\u5f97\u6240\u6709\u94a5\u5319\uff0c\u800c\u4e0d\u662f\u6253\u5f00\u6240\u6709\u9501\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{src:"../../../img/lc-key2.jpg"})),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'grid = ["@..aA","..B#.","....b"]',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"6",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 3:")),(0,l.kt)("img",{alt:"",src:"../../../img/lc-keys3.jpg"}),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165:"),' grid = ["@Aa"]',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa:")," -1"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"m == grid.length")),(0,l.kt)("li",null,(0,l.kt)("code",null,"n == grid[i].length")),(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= m, n <= 30")),(0,l.kt)("li",null,(0,l.kt)("code",null,"grid[i][j]"),"\xa0\u53ea\u542b\u6709\xa0",(0,l.kt)("code",null,"'.'"),",\xa0",(0,l.kt)("code",null,"'#'"),",\xa0",(0,l.kt)("code",null,"'@'"),",\xa0",(0,l.kt)("code",null,"'a'-"),(0,l.kt)("code",null,"'f"),(0,l.kt)("code",null,"'"),"\xa0\u4ee5\u53ca\xa0",(0,l.kt)("code",null,"'A'-'F'")),(0,l.kt)("li",null,"\u94a5\u5319\u7684\u6570\u76ee\u8303\u56f4\u662f\xa0",(0,l.kt)("code",null,"[1, 6]"),"\xa0"),(0,l.kt)("li",null,"\u6bcf\u4e2a\u94a5\u5319\u90fd\u5bf9\u5e94\u4e00\u4e2a ",(0,l.kt)("strong",null,"\u4e0d\u540c")," \u7684\u5b57\u6bcd"),(0,l.kt)("li",null,"\u6bcf\u4e2a\u94a5\u5319\u6b63\u597d\u6253\u5f00\u4e00\u4e2a\u5bf9\u5e94\u7684\u9501")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Problem: ",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/shortest-path-to-get-all-keys/description/"},"864. \u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84"))),(0,l.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,l.kt)("p",null,"\u5199\u8fc7\u6700\u957f\u7684\u4ee3\u7801\uff0c\u5fc3\u6001\u5d29\u4e86"),(0,l.kt)("p",null,"\u601d\u8def\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u56de\u6eaf\uff0c\u5bf9\u6240\u6709\u94a5\u5319\u8fdb\u884c\u6392\u5217\u7ec4\u5408\uff0c\u5f97\u5230\u6240\u6709\u8def\u5f84\uff08\u4e0d\u6821\u9a8c\u8def\u5f84\u662f\u5426\u8fde\u901a\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u6240\u6709\u8def\u5f84\uff0c\u7d2f\u8ba1\u4ece\u8d77\u70b9\u7ecf\u8fc7\u6240\u6709\u94a5\u5319\u9700\u8981\u7684\u6b65\u6570\uff0c\u7ed3\u679c\u53d6\u6700\u5c0f\u6b65\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u5e7f\u641c\u8ba1\u7b97\u4e24\u628a\u94a5\u5319\u4e4b\u95f4\u7684\u6700\u77ed\u8def\u5f84\uff08\u9700\u8981\u6821\u9a8c\u8def\u5f84\u662f\u5426\u8fde\u901a\uff09")),(0,l.kt)("h2",{id:"3code"},"3\u3001Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},'function shortestPathAllKeys(grid: string[]): number {\n    const m = grid.length, n = grid[0].length;\n\n    const M = 10007;\n    const encode = (i: number, j: number) => i * M + j;\n    const decode = (d: number) => [(d / M) >> 0, d % M];\n\n    let start = 0;\n    const keys: number[] = [];\n    for (let i = 0; i < m; i++) {\n        for (let j = 0; j < n; j++) {\n            if (grid[i][j] === "@") start = encode(i, j);\n            if (grid[i][j] >= "a" && grid[i][j] <= "f") keys.push(encode(i, j));\n        }\n    }\n\n    // \u5bfb\u627e\u4e24\u628a\u94a5\u5319\u4e4b\u95f4\u7684\u6700\u77ed\u8def\u5f84\n    function bfs(source: number, target: number, visited: Set<number>, foundKeys: Set<string>): number {\n        let queue = [source];\n        const [ti, tj] = decode(target);\n\n        let step = 1;\n        while (queue.length) {\n            const nextQueue = new Set<number>();\n\n            for (const q of queue) {\n                if (visited.has(q)) continue;\n                visited.add(q);\n\n                const [qi, qj] = decode(q);\n                const dirs = [[qi, qj + 1], [qi, qj - 1], [qi + 1, qj], [qi - 1, qj],];\n\n                for (const [i, j] of dirs) {\n                    if (!grid[i] || !grid[i][j] || grid[i][j] === "#") continue;\n                    if (grid[i][j] >= "A" && grid[i][j] <= "F" && !foundKeys.has(grid[i][j].toLowerCase())) continue;\n                    if (i === ti && j === tj) return step;\n\n                    nextQueue.add(encode(i, j));\n                }\n            }\n\n            step++;\n            queue = [...nextQueue];\n        }\n\n        return 0;\n    }\n\n    // \u904d\u5386\u6240\u6709\u8def\u5f84\uff0c\u7d2f\u8ba1\u4ece\u8d77\u70b9\u7ecf\u8fc7\u6240\u6709\u94a5\u5319\u9700\u8981\u7684\u6b65\u6570\uff0c\u7ed3\u679c\u53d6\u6700\u5c0f\u6b65\u6570\n    let res = Infinity;\n    function calcSteps(path: Set<number>) {\n        let step = 0, source = start, foundKeys = new Set<string>();\n\n        for (const p of path) {\n            const st = bfs(source, p, new Set(), foundKeys);\n            step += st;\n            if (!st || step >= res) return;\n\n            const [pi, pj] = decode(p);\n            foundKeys.add(grid[pi][pj]);\n            source = p;\n        }\n\n        if (step < res) res = step;\n    }\n\n    // \u5bf9\u94a5\u5319\u8fdb\u884c\u6392\u5217\u7ec4\u5408\n    function dfs(path: Set<number>) {\n        for (const k of keys) {\n            if (path.has(k)) continue;\n            path.add(k);\n            dfs(path);\n            if (path.size === keys.length) calcSteps(path);\n            path.delete(k);\n        }\n    }\n\n    dfs(new Set());\n\n    return res === Infinity ? -1 : res;\n}\n')),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"k"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,l.kt)("mo",{parentName:"mrow"},"\u2217"),(0,l.kt)("mi",{parentName:"mrow"},"m"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(k!*mn)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,l.kt)("span",{parentName:"span",className:"mclose"},"!"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"mn"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"m"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(mn)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"mn"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(10319).Z,width:"1688",height:"348"})))}c.isMDXComponent=!0},10319:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1668078530-biAQkG-image-a53d0729ea3be82b7c827b5f1a6d127d.png"}}]);