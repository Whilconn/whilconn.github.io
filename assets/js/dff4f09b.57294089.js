"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[98067],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>N});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,m=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=i(t),u=l,N=k["".concat(p,".").concat(u)]||k[u]||c[u]||m;return t?n.createElement(N,r(r({ref:a},o),{},{components:t})):n.createElement(N,r({ref:a},o))}));function N(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var m=t.length,r=new Array(m);r[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[k]="string"==typeof e?e:l,r[1]=s;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31278:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>m,metadata:()=>s,toc:()=>i});var n=t(87462),l=(t(67294),t(3905));const m={authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212"],date:"2022/11/9"},r=void 0,s={permalink:"/algorithm/2022/11/09/764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7",source:"@site/algorithm/2022/11/09/764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7.md",title:"764.\u6700\u5927\u52a0\u53f7\u6807\u5fd7",description:"1\u3001\u9898\u5e72",date:"2022-11-09T00:00:00.000Z",formattedDate:"2022\u5e7411\u67089\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:2.78,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212"],date:"2022/11/9"},prevItem:{title:"864.\u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84",permalink:"/algorithm/2022/11/10/864.\u83b7\u53d6\u6240\u6709\u94a5\u5319\u7684\u6700\u77ed\u8def\u5f84"},nextItem:{title:"1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/algorithm/2022/11/08/1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function k(e){let{components:a,...m}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,m,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u5728\u4e00\u4e2a ",(0,l.kt)("code",null,"n x n")," \u7684\u77e9\u9635\xa0",(0,l.kt)("code",null,"grid"),"\xa0\u4e2d\uff0c\u9664\u4e86\u5728\u6570\u7ec4\xa0",(0,l.kt)("code",null,"mines"),"\xa0\u4e2d\u7ed9\u51fa\u7684\u5143\u7d20\u4e3a\xa0",(0,l.kt)("code",null,"0"),"\uff0c\u5176\u4ed6\u6bcf\u4e2a\u5143\u7d20\u90fd\u4e3a\xa0",(0,l.kt)("code",null,"1"),"\u3002",(0,l.kt)("code",null,"mines[i] = [x",(0,l.kt)("sub",null,"i"),", y",(0,l.kt)("sub",null,"i"),"]"),"\u8868\u793a\xa0",(0,l.kt)("code",null,"grid[x",(0,l.kt)("sub",null,"i"),"][y",(0,l.kt)("sub",null,"i"),"] == 0")),(0,l.kt)("p",null,"\u8fd4\u56de ",(0,l.kt)("em",null,"\xa0"),(0,l.kt)("code",null,"grid"),(0,l.kt)("em",null," \u4e2d\u5305\u542b\xa0",(0,l.kt)("code",null,"1"),"\xa0\u7684\u6700\u5927\u7684 ",(0,l.kt)("strong",null,"\u8f74\u5bf9\u9f50")," \u52a0\u53f7\u6807\u5fd7\u7684\u9636\u6570")," \u3002\u5982\u679c\u672a\u627e\u5230\u52a0\u53f7\u6807\u5fd7\uff0c\u5219\u8fd4\u56de ",(0,l.kt)("code",null,"0")," \u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\xa0",(0,l.kt)("code",null,"k"),"\xa0\u9636\u7531\xa0",(0,l.kt)("em",null,(0,l.kt)("code",null,"1")),"\xa0\u7ec4\u6210\u7684 ",(0,l.kt)("strong",null,"\u201c\u8f74\u5bf9\u79f0\u201d\u52a0\u53f7\u6807\u5fd7")," \u5177\u6709\u4e2d\u5fc3\u7f51\u683c\xa0",(0,l.kt)("code",null,"grid[r][c] == 1"),"\xa0\uff0c\u4ee5\u53ca4\u4e2a\u4ece\u4e2d\u5fc3\u5411\u4e0a\u3001\u5411\u4e0b\u3001\u5411\u5de6\u3001\u5411\u53f3\u5ef6\u4f38\uff0c\u957f\u5ea6\u4e3a\xa0",(0,l.kt)("code",null,"k-1"),"\uff0c\u7531\xa0",(0,l.kt)("code",null,"1"),"\xa0\u7ec4\u6210\u7684\u81c2\u3002\u6ce8\u610f\uff0c\u53ea\u6709\u52a0\u53f7\u6807\u5fd7\u7684\u6240\u6709\u7f51\u683c\u8981\u6c42\u4e3a ",(0,l.kt)("code",null,"1")," \uff0c\u522b\u7684\u7f51\u683c\u53ef\u80fd\u4e3a ",(0,l.kt)("code",null,"0")," \u4e5f\u53ef\u80fd\u4e3a ",(0,l.kt)("code",null,"1")," \u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{src:"https://assets.leetcode.com/uploads/2021/06/13/plus1-grid.jpg"})),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165:")," n = 5, mines = [[4, 2]]",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa:")," 2",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca: "),"\u5728\u4e0a\u9762\u7684\u7f51\u683c\u4e2d\uff0c\u6700\u5927\u52a0\u53f7\u6807\u5fd7\u7684\u9636\u53ea\u80fd\u662f2\u3002\u4e00\u4e2a\u6807\u5fd7\u5df2\u5728\u56fe\u4e2d\u6807\u51fa\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{src:"../../../img/plus2-grid.jpg"})),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165:")," n = 1, mines = [[0, 0]]",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa:")," 0",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca: "),"\u6ca1\u6709\u52a0\u53f7\u6807\u5fd7\uff0c\u8fd4\u56de 0 \u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= n <= 500")),(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= mines.length <= 5000")),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= x",(0,l.kt)("sub",null,"i"),", y",(0,l.kt)("sub",null,"i"),"\xa0< n")),(0,l.kt)("li",null,"\u6bcf\u4e00\u5bf9\xa0",(0,l.kt)("code",null,"(x",(0,l.kt)("sub",null,"i"),", y",(0,l.kt)("sub",null,"i"),")"),"\xa0\u90fd ",(0,l.kt)("strong",null,"\u4e0d\u91cd\u590d"),"\u200b\u200b\u200b\u200b\u200b\u200b\u200b")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Problem: ",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/largest-plus-sign/description/"},"764. \u6700\u5927\u52a0\u53f7\u6807\u5fd7"))),(0,l.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u66b4\u529b\uff1a\u904d\u5386\u77e9\u9635 ",(0,l.kt)("inlineCode",{parentName:"li"},"grid"),"\uff0c\u628a\u6bcf\u4e2a\u7f51\u683c\u5f53\u6210\u4e2d\u5fc3\uff0c\u8ba1\u7b97\u52a0\u53f7\u6807\u5fd7\u7684\u6700\u5927\u9636\u6570 ",(0,l.kt)("inlineCode",{parentName:"li"},"k")),(0,l.kt)("li",{parentName:"ul"},"\u54c8\u5e0c\uff1a\u628a ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u7f51\u683c\u7684\u5750\u6807\u8f6c\u6362\u6210\u54c8\u5e0c\u8868\u964d\u4f4e\u67e5\u627e\u65f6\u95f4\u590d\u6742\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u526a\u679d\uff1a\u904d\u5386\u8fc7\u7a0b\u4e2d\uff0c\u901a\u8fc7\u5f53\u524d\u6c42\u5f97\u7684\u6700\u5927\u9636\u6570 ",(0,l.kt)("inlineCode",{parentName:"li"},"k")," \u8fdb\u4e00\u6b65\u7f29\u5c0f\u904d\u5386\u8303\u56f4")),(0,l.kt)("h2",{id:"3code"},"3\u3001Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function orderOfLargestPlusSign(n: number, mines: number[][]): number {\n    const M = 10007, hash = (x: number, y: number) => x * M + y;\n    const set = new Set(mines.map(([x, y]) => hash(x, y)));\n    \n    let k = 0;\n    for (let i = 0; i < n - k; i++) {\n        for (let j = k; i >= k && j < n - k; j++) {\n            for (let l = 0; l < n / 2; l++) {\n                if (i < l || j < l || i + l >= n || j + l >= n) break;\n                if (set.has(hash(i, j + l)) || set.has(hash(i, j - l)) || set.has(hash(i + l, j)) || set.has(hash(i - l, j))) break;\n                k = Math.max(k, l + 1);\n            }\n        }\n    }\n\n    return k;\n}\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("msup",{parentName:"mrow"},(0,l.kt)("mi",{parentName:"msup"},"n"),(0,l.kt)("mn",{parentName:"msup"},"3")),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"msupsub"},(0,l.kt)("span",{parentName:"span",className:"vlist-t"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,l.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"m"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"m"),(0,l.kt)("mo",{parentName:"mrow"},"="),(0,l.kt)("mi",{parentName:"mrow"},"m"),(0,l.kt)("mi",{parentName:"mrow"},"i"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mi",{parentName:"mrow"},"e"),(0,l.kt)("mi",{parentName:"mrow"},"s"),(0,l.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,l.kt)("mi",{parentName:"mrow"},"l"),(0,l.kt)("mi",{parentName:"mrow"},"e"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mi",{parentName:"mrow"},"g"),(0,l.kt)("mi",{parentName:"mrow"},"t"),(0,l.kt)("mi",{parentName:"mrow"},"h")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m=mines.length")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"="),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"min"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,l.kt)("span",{parentName:"span",className:"mord"},"."),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"))))))),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:t(9377).Z,width:"1512",height:"362"})))}k.isMDXComponent=!0},9377:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1667966262-FHmFxq-image-3534ec10e23d11aa7b4854852ad0ac4d.png"}}]);