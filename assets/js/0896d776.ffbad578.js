"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[65081],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>u});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),k=o(t),N=l,u=k["".concat(p,".").concat(N)]||k[N]||c[N]||r;return t?n.createElement(u,m(m({ref:a},i),{},{components:t})):n.createElement(u,m({ref:a},i))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,m=new Array(r);m[0]=N;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[k]="string"==typeof e?e:l,m[1]=s;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},50761:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=t(87462),l=(t(67294),t(3905));const r={authors:["Whilconn"],tags:["\u5b57\u5178\u6811","\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:"2023/2/8"},m=void 0,s={permalink:"/algorithm/2023/02/08/1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939",source:"@site/algorithm/2023/02/08/1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939.md",title:"1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939",description:"1\u3001\u9898\u5e72",date:"2023-02-08T00:00:00.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"\u5b57\u5178\u6811",permalink:"/algorithm/tags/\u5b57\u5178\u6811"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.075,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u5178\u6811","\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:"2023/2/8"},prevItem:{title:"1797.\u8bbe\u8ba1\u4e00\u4e2a\u9a8c\u8bc1\u7cfb\u7edf",permalink:"/algorithm/2023/02/09/1797.\u8bbe\u8ba1\u4e00\u4e2a\u9a8c\u8bc1\u7cfb\u7edf"},nextItem:{title:"1604.\u8b66\u544a\u4e00\u5c0f\u65f6\u5185\u4f7f\u7528\u76f8\u540c\u5458\u5de5\u5361\u5927\u4e8e\u7b49\u4e8e\u4e09\u6b21\u7684\u4eba",permalink:"/algorithm/2023/02/07/1604.\u8b66\u544a\u4e00\u5c0f\u65f6\u5185\u4f7f\u7528\u76f8\u540c\u5458\u5de5\u5361\u5927\u4e8e\u7b49\u4e8e\u4e09\u6b21\u7684\u4eba"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1-\u6392\u5e8f",id:"2\u601d\u8def1-\u6392\u5e8f",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2-\u54c8\u5e0c",id:"6\u601d\u8def2-\u54c8\u5e0c",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function k(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u4f60\u662f\u4e00\u4f4d\u7cfb\u7edf\u7ba1\u7406\u5458\uff0c\u624b\u91cc\u6709\u4e00\u4efd\u6587\u4ef6\u5939\u5217\u8868 ",(0,l.kt)("code",null,"folder"),"\uff0c\u4f60\u7684\u4efb\u52a1\u662f\u8981\u5220\u9664\u8be5\u5217\u8868\u4e2d\u7684\u6240\u6709 ",(0,l.kt)("strong",null,"\u5b50\u6587\u4ef6\u5939"),"\uff0c\u5e76\u4ee5 ",(0,l.kt)("strong",null,"\u4efb\u610f\u987a\u5e8f")," \u8fd4\u56de\u5269\u4e0b\u7684\u6587\u4ef6\u5939\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u5939\xa0",(0,l.kt)("code",null,"folder[i]"),"\xa0\u4f4d\u4e8e\u53e6\u4e00\u4e2a\u6587\u4ef6\u5939\xa0",(0,l.kt)("code",null,"folder[j]"),"\xa0\u4e0b\uff0c\u90a3\u4e48\xa0",(0,l.kt)("code",null,"folder[i]"),"\xa0\u5c31\u662f\xa0",(0,l.kt)("code",null,"folder[j]"),"\xa0\u7684 ",(0,l.kt)("strong",null,"\u5b50\u6587\u4ef6\u5939")," \u3002"),(0,l.kt)("p",null,"\u6587\u4ef6\u5939\u7684\u300c\u8def\u5f84\u300d\u662f\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u6309\u4ee5\u4e0b\u683c\u5f0f\u4e32\u8054\u5f62\u6210\u7684\u5b57\u7b26\u4e32\uff1a",(0,l.kt)("font",{color:"#c7254e"},(0,l.kt)("font",{face:"Menlo, Monaco, Consolas, Courier New, monospace"},(0,l.kt)("span",null,(0,l.kt)("span",null,"'/'")))),"\xa0\u540e\u8ddf\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u4f8b\u5982\uff0c",(0,l.kt)("code",null,'"/leetcode"'),"\xa0\u548c\xa0",(0,l.kt)("code",null,'"/leetcode/problems"'),"\xa0\u90fd\u662f\u6709\u6548\u7684\u8def\u5f84\uff0c\u800c\u7a7a\u5b57\u7b26\u4e32\u548c\xa0",(0,l.kt)("code",null,'"/"'),"\xa0\u4e0d\u662f\u3002")),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'["/a","/c/d","/c/f"]',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),'"/a/b" \u662f "/a" \u7684\u5b50\u6587\u4ef6\u5939\uff0c\u800c "/c/d/e" \u662f "/c/d" \u7684\u5b50\u6587\u4ef6\u5939\u3002',(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'folder = ["/a","/a/b/c","/a/b/d"]',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'["/a"]',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),'\u6587\u4ef6\u5939 "/a/b/c" \u548c "/a/b/d" \u90fd\u4f1a\u88ab\u5220\u9664\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u662f "/a" \u7684\u5b50\u6587\u4ef6\u5939\u3002',(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165:"),' folder = ["/a/b/c","/a/b/ca","/a/b/d"]',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa:"),' ["/a/b/c","/a/b/ca","/a/b/d"]'),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= folder.length <= 4 * 10",(0,l.kt)("sup",null,"4"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"2 <= folder[i].length <= 100")),(0,l.kt)("li",null,(0,l.kt)("code",null,"folder[i]"),"\xa0\u53ea\u5305\u542b\u5c0f\u5199\u5b57\u6bcd\u548c ",(0,l.kt)("code",null,"'/'")),(0,l.kt)("li",null,(0,l.kt)("code",null,"folder[i]"),"\xa0\u603b\u662f\u4ee5\u5b57\u7b26 ",(0,l.kt)("code",null,"'/'"),"\xa0\u8d77\u59cb"),(0,l.kt)("li",null,(0,l.kt)("code",null,"folder"),"\xa0\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f ",(0,l.kt)("strong",null,"\u552f\u4e00")," \u7684")),(0,l.kt)("h2",{id:"2\u601d\u8def1-\u6392\u5e8f"},"2\u3001\u601d\u8def1-\u6392\u5e8f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6587\u4ef6\u5939\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"li"},"folder")," \u5347\u5e8f\u6392\u5e8f\uff0c\u521d\u59cb\u5316\u7236\u6587\u4ef6\u5939 ",(0,l.kt)("inlineCode",{parentName:"li"},"pf = folder[0] + '/'")),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u68c0\u67e5\u6240\u6709\u6587\u4ef6\u5939 ",(0,l.kt)("inlineCode",{parentName:"li"},"folder[i]")," \u4e0e\u5f53\u524d\u7236\u6587\u4ef6\u5939 ",(0,l.kt)("inlineCode",{parentName:"li"},"pf")," \u662f\u5426\u7236\u5b50\u5173\u7cfb\uff0c\u662f\u5219\u8bf4\u660e ",(0,l.kt)("inlineCode",{parentName:"li"},"folder[i]")," \u662f\u5b50\u6587\u4ef6\u5939\uff0c\u4e0d\u662f\u5219\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"folder[i]")," \u7f6e\u4e3a\u7236\u6587\u4ef6\u5939\u7ee7\u7eed\u68c0\u67e5")),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function removeSubfolders(folder: string[]): string[] {\n    folder.sort();\n\n    const ans = [folder[0]];\n    let pf = folder[0] + '/';\n\n    for (let i = 1; i < folder.length; i++) {\n        if (!folder[i].startsWith(pf)) {\n            ans.push(folder[i]);\n            pf = folder[i] + '/';\n        }\n    }\n\n    return ans;\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mi",{parentName:"mrow"},"m"),(0,l.kt)("mo",{parentName:"mrow"},"\u2217"),(0,l.kt)("mi",{parentName:"mrow"},"l"),(0,l.kt)("mi",{parentName:"mrow"},"o"),(0,l.kt)("mi",{parentName:"mrow"},"g"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nm*logn)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"nm"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"l"),(0,l.kt)("mi",{parentName:"mrow"},"o"),(0,l.kt)("mi",{parentName:"mrow"},"g"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logn)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1675821335-vpDkqv-image.png",alt:"image.png"})),(0,l.kt)("h2",{id:"6\u601d\u8def2-\u54c8\u5e0c"},"6\u3001\u601d\u8def2-\u54c8\u5e0c"),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"folder")," \u6570\u7ec4\u4e2d\u6240\u6709\u6587\u4ef6\u5939\u5b58\u5165\u54c8\u5e0c\u96c6\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"set"),"\uff0c\u904d\u5386\u68c0\u67e5\u6587\u4ef6\u5939 ",(0,l.kt)("inlineCode",{parentName:"p"},"folder[i]")," \u6240\u6709\u524d\u7f00\u8def\u5f84\uff0c\u82e5\u524d\u7f00\u8def\u5f84\u5b58\u5728\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," \u4e2d\uff0c\u5219\u8bf4\u660e ",(0,l.kt)("inlineCode",{parentName:"p"},"folder[i]")," \u662f\u5b50\u6587\u4ef6\u5939"),(0,l.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function removeSubfolders(folder: string[]): string[] {\n    const ans = [], set = new Set(folder);\n\n    for (const f of folder) {\n        let found = false;\n\n        for (let i = 0; i < f.length;) {\n            i = f.indexOf('/', i + 1);\n            if (i < 0) break;\n\n            const dir = f.slice(0, i);\n\n            if (set.has(dir)) {\n                found = true;\n                break;\n            }\n        }\n\n        if (!found) ans.push(f);\n    }\n\n    return ans;\n};\n")),(0,l.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mi",{parentName:"mrow"},"m"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nm)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"nm"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mi",{parentName:"mrow"},"m"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nm)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"nm"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1675820964-OtwsoK-image.png",alt:"image.png"})))}k.isMDXComponent=!0}}]);