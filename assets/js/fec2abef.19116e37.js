"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[59671],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||k[m]||l;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26967:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u8ba1\u6570"],date:"2023/1/13"},i=void 0,o={permalink:"/algorithm/2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",source:"@site/algorithm/2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32.md",title:"2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",description:"1\u3001\u9898\u5e72",date:"2023-01-13T00:00:00.000Z",formattedDate:"2023\u5e741\u670813\u65e5",tags:[{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u8ba1\u6570",permalink:"/algorithm/tags/\u8ba1\u6570"}],readingTime:2.9,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u8ba1\u6570"],date:"2023/1/13"},prevItem:{title:"1819.\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee",permalink:"/algorithm/1819.\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee"},nextItem:{title:"1807.\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u62ec\u53f7\u5185\u5bb9",permalink:"/algorithm/1807.\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u62ec\u53f7\u5185\u5bb9"}},c={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],u={toc:p};function s(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u4e0b\u6807\u4ece ",(0,a.kt)("strong",{parentName:"p"},"0")," \u5f00\u59cb\u7684\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u3002\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u53d6\u51fa\u4e00\u4e9b\u5b57\u7b26\u5e76\u5c06\u5176\u91cd\u6392\uff0c\u5f97\u5230\u82e5\u5e72\u65b0\u7684\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u4e2d\u53d6\u51fa\u5b57\u7b26\u5e76\u91cd\u65b0\u6392\u5217\uff0c\u8fd4\u56de\u53ef\u4ee5\u5f62\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6700\u5927")," \u526f\u672c\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "ilovecodingonleetcode", target = "code"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),'\n\u5bf9\u4e8e "code" \u7684\u7b2c 1 \u4e2a\u526f\u672c\uff0c\u9009\u53d6\u4e0b\u6807\u4e3a 4 \u30015 \u30016 \u548c 7 \u7684\u5b57\u7b26\u3002',(0,a.kt)("br",null),'\n\u5bf9\u4e8e "code" \u7684\u7b2c 2 \u4e2a\u526f\u672c\uff0c\u9009\u53d6\u4e0b\u6807\u4e3a 17 \u300118 \u300119 \u548c 20 \u7684\u5b57\u7b26\u3002',(0,a.kt)("br",null),'\n\u5f62\u6210\u7684\u5b57\u7b26\u4e32\u5206\u522b\u662f "ecod" \u548c "code" \uff0c\u90fd\u53ef\u4ee5\u91cd\u6392\u4e3a "code" \u3002',(0,a.kt)("br",null),'\n\u53ef\u4ee5\u5f62\u6210\u6700\u591a 2 \u4e2a "code" \u7684\u526f\u672c\uff0c\u6240\u4ee5\u8fd4\u56de 2 \u3002',(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "abcba", target = "abc"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),'\n\u9009\u53d6\u4e0b\u6807\u4e3a 0 \u30011 \u548c 2 \u7684\u5b57\u7b26\uff0c\u53ef\u4ee5\u5f62\u6210 "abc" \u7684 1 \u4e2a\u526f\u672c\u3002 ',(0,a.kt)("br",null),'\n\u53ef\u4ee5\u5f62\u6210\u6700\u591a 1 \u4e2a "abc" \u7684\u526f\u672c\uff0c\u6240\u4ee5\u8fd4\u56de 1 \u3002',(0,a.kt)("br",null),"\n\u6ce8\u610f\uff0c\u5c3d\u7ba1\u4e0b\u6807 3 \u548c 4 \u5206\u522b\u6709\u989d\u5916\u7684 'a' \u548c 'b' \uff0c\u4f46\u4e0d\u80fd\u91cd\u7528\u4e0b\u6807 2 \u5904\u7684 'c' \uff0c\u6240\u4ee5\u65e0\u6cd5\u5f62\u6210 \"abc\" \u7684\u7b2c 2 \u4e2a\u526f\u672c\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "abbaccaddaeea", target = "aaaaa"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),'\n\u9009\u53d6\u4e0b\u6807\u4e3a 0 \u30013 \u30016 \u30019 \u548c 12 \u7684\u5b57\u7b26\uff0c\u53ef\u4ee5\u5f62\u6210 "aaaaa" \u7684 1 \u4e2a\u526f\u672c\u3002',(0,a.kt)("br",null),'\n\u53ef\u4ee5\u5f62\u6210\u6700\u591a 1 \u4e2a "aaaaa" \u7684\u526f\u672c\uff0c\u6240\u4ee5\u8fd4\u56de 1 \u3002',(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= target.length <= 10")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),(0,a.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,a.kt)("p",null,"\u679a\u4e3e\u8ba1\u6570"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function rearrangeCharacters(s: string, target: string): number {\n    let ans = Infinity;\n\n    for (const t of target) {\n        const c1 = [...s].filter(c => c === t).length;\n        const c2 = [...target].filter(c => c === t).length;\n        ans = Math.min(ans, c1 / c2 >> 0);\n    }\n\n    return ans;\n};\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n^2)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(77578).Z,width:"1448",height:"398"})),(0,a.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,a.kt)("p",null,"\u54c8\u5e0c\u8ba1\u6570"),(0,a.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function rearrangeCharacters(s: string, target: string): number {\n    const dict1 = {};\n    for (const c of target) dict1[c] = (dict1[c] || 0) + 1;\n\n    const dict2 = {};\n    for (const c of s) dict2[c] = (dict2[c] || 0) + 1;\n\n    let ans = Infinity;\n    for (const k of Object.keys(dict1)) {\n        ans = Math.min(ans, (dict2[k] || 0) / dict1[k] >> 0);\n    }\n\n    return ans;\n};\n")),(0,a.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,a.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(96232).Z,width:"1448",height:"386"})))}s.isMDXComponent=!0},77578:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1673572797-KBLfXi-image-f485011017a9f0079393cad50385ed97.png"},96232:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1673572911-quwIiq-image-c16e5fafed1ec1edfe4a3f18ac22ab3f.png"}}]);