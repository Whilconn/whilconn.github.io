"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,g=c["".concat(i,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(g,s(s({ref:t},o),{},{components:n})):a.createElement(g,s({ref:t},o))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=k;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[c]="string"==typeof e?e:r,s[1]=m;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635"],date:"2/17/2023"},s=void 0,m={permalink:"/algorithm/2023/02/17/1139.\u6700\u5927\u7684\u4ee5 1 \u4e3a\u8fb9\u754c\u7684\u6b63\u65b9\u5f62",source:"@site/algorithm/2023/02/17/1139.\u6700\u5927\u7684\u4ee5 1 \u4e3a\u8fb9\u754c\u7684\u6b63\u65b9\u5f62.md",title:"1139.\u6700\u5927\u7684\u4ee5 1 \u4e3a\u8fb9\u754c\u7684\u6b63\u65b9\u5f62",description:"1\u3001\u9898\u5e72",date:"2023-02-17T00:00:00.000Z",formattedDate:"2023\u5e742\u670817\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:2.845,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u77e9\u9635"],date:"2/17/2023"},prevItem:{title:"1237.\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3",permalink:"/algorithm/2023/02/18/1237.\u627e\u51fa\u7ed9\u5b9a\u65b9\u7a0b\u7684\u6b63\u6574\u6570\u89e3"},nextItem:{title:"2341.\u6570\u7ec4\u80fd\u5f62\u6210\u591a\u5c11\u6570\u5bf9",permalink:"/algorithm/2023/02/16/2341.\u6570\u7ec4\u80fd\u5f62\u6210\u591a\u5c11\u6570\u5bf9"}},i={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],o={toc:p};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u7531\u82e5\u5e72 ",(0,r.kt)("code",null,"0")," \u548c ",(0,r.kt)("code",null,"1")," \u7ec4\u6210\u7684\u4e8c\u7ef4\u7f51\u683c\xa0",(0,r.kt)("code",null,"grid"),"\uff0c\u8bf7\u4f60\u627e\u51fa\u8fb9\u754c\u5168\u90e8\u7531 ",(0,r.kt)("code",null,"1")," \u7ec4\u6210\u7684\u6700\u5927 ",(0,r.kt)("strong",null,"\u6b63\u65b9\u5f62")," \u5b50\u7f51\u683c\uff0c\u5e76\u8fd4\u56de\u8be5\u5b50\u7f51\u683c\u4e2d\u7684\u5143\u7d20\u6570\u91cf\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de ",(0,r.kt)("code",null,"0"),"\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[1,1,1],[1,0,1],[1,1,1]]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"9",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[1,1,0,0]]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"1",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= grid.length <= 100")),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= grid[0].length <= 100")),(0,r.kt)("li",null,(0,r.kt)("code",null,"grid[i][j]")," \u4e3a\xa0",(0,r.kt)("code",null,"0"),"\xa0\u6216\xa0",(0,r.kt)("code",null,"1"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u7eaf\u6a21\u62df\uff0c\u6beb\u65e0\u6280\u5de7\uff0c\u5168\u662f\u611f\u60c5\ud83e\udd21"),(0,r.kt)("p",null,"\u904d\u5386\u7f51\u683c\uff0c\u4ee5\u5f53\u524d\u7f51\u683c\u5355\u5143\u4f5c\u4e3a\u6b63\u65b9\u5f62\u5de6\u4e0a\u9876\u70b9\uff0c\u5148\u6c42\u51fa\u5de6\u4e0a\u4e24\u6761\u8fb9\u957f\u7684\u6700\u5927\u53ef\u80fd\u503c\uff0c\u518d\u9a8c\u8bc1\u53f3\u4e0b\u4e24\u6761\u8fb9\u662f\u5426\u6ee1\u8db3\u8981\u6c42\u3002"),(0,r.kt)("p",null,"\u4f18\u5316\u4ee3\u7801\u53c8\u6298\u817e\u4e86\u4e00\u756a\uff0c\u901f\u5ea6\u5f97\u5230\u4e00\u4e9b\u63d0\u5347\uff0c\u4ece\u6700\u5feb 88ms \u8fbe\u5230\u6700\u5feb 68ms\u3002"),(0,r.kt)("p",null,"\u4e3b\u8981\u4f18\u5316\u5728\u4e8e\u68c0\u67e5\u8fb9\u957f\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u662f\u6b63\u65b9\u5f62\u53ef\u4ee5\u540c\u65f6\u68c0\u67e5\u4e24\u6761\u8fb9\u3002\u505a\u6cd5\u662f\u56fa\u5b9a\u8d77\u59cb\u4f4d\u7f6e\uff0c\u7136\u540e\u6539\u53d8\u8fb9\u957f\uff0c\u4e24\u6761\u8fb9\u540c\u65f6\u6ee1\u8db3\u8981\u6c42\u65f6\u624d\u5f80\u4e0b\u904d\u5386\u3002"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function largest1BorderedSquare(grid: number[][]): number {\n    let maxLen = 0;\n    const m = grid.length, n = grid[0].length;\n\n    for (let i = 0; i < m - maxLen; i++) {\n        for (let j = 0; j < n - maxLen; j++) {\n            if (!grid[i][j]) continue;\n\n            let len = 1;\n            while (grid[i][j + len] && grid[i + len]?.at(j)) len++;\n\n            for (; len > maxLen; len--) {\n                let step = 1, ei = i + len - 1, ej = j + len - 1;\n                while (step < len && grid[i + step][ej] && grid[ei][j + step]) step++;\n\n                if (step === len) maxLen = len;\n            }\n        }\n    }\n\n    return maxLen ** 2;\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u662f\u6700\u5f00\u59cb\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u5bf9\u7167\u770b\u770b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function largest1BorderedSquare(grid: number[][]): number {\n    let maxLen = 0;\n    const m = grid.length, n = grid[0].length;\n\n    for (let i = 0; i < m - maxLen; i++) {\n        for (let j = 0; j < n - maxLen; j++) {\n            if (!grid[i][j]) continue;\n\n            let si = i + 1, sj = j + 1;\n            while (si < m && grid[si]?.at(j)) si++;\n            while (sj < n && grid[i][sj]) sj++;\n\n            let len = Math.min(si - i, sj - j);\n            for (; len > maxLen; len--) {\n                let ei = i + len - 1, ej = j + len - 1;\n                while (ei > i && grid[ei][j + len - 1]) ei--;\n                while (ej > j && grid[i + len - 1][ej]) ej--;\n\n                if (ei === i && ej === j) maxLen = Math.max(maxLen, len);\n            }\n        }\n    }\n\n    return maxLen ** 2;\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a\u6700\u5dee",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"4")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^4)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"4")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(78386).Z,width:"1344",height:"398"})))}c.isMDXComponent=!0},78386:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1676619716-ELudZk-image-a66f1dde8d6be95ee3f954c5e4cb7fe5.png"}}]);