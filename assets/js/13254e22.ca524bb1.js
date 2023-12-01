"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[58194],{3905:(t,l,n)=>{n.d(l,{Zo:()=>i,kt:()=>b});var r=n(67294);function e(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function o(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);l&&(r=r.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?o(Object(n),!0).forEach((function(l){e(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function a(t,l){if(null==t)return{};var n,r,e=function(t,l){if(null==t)return{};var n,r,e={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],l.indexOf(n)>=0||(e[n]=t[n]);return e}(t,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}var c=r.createContext({}),k=function(t){var l=r.useContext(c),n=l;return t&&(n="function"==typeof t?t(l):u(u({},l),t)),n},i=function(t){var l=k(t.components);return r.createElement(c.Provider,{value:l},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var l=t.children;return r.createElement(r.Fragment,{},l)}},d=r.forwardRef((function(t,l){var n=t.components,e=t.mdxType,o=t.originalType,c=t.parentName,i=a(t,["components","mdxType","originalType","parentName"]),s=k(n),d=e,b=s["".concat(c,".").concat(d)]||s[d]||g[d]||o;return n?r.createElement(b,u(u({ref:l},i),{},{components:n})):r.createElement(b,u({ref:l},i))}));function b(t,l){var n=arguments,e=l&&l.mdxType;if("string"==typeof t||e){var o=n.length,u=new Array(o);u[0]=d;var a={};for(var c in l)hasOwnProperty.call(l,c)&&(a[c]=l[c]);a.originalType=t,a[s]="string"==typeof t?t:e,u[1]=a;for(var k=2;k<o;k++)u[k]=n[k];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49956:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>u,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>k});var r=n(87462),e=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6392\u5e8f"],date:new Date("2023-11-30T00:00:00.000Z")},u=void 0,a={permalink:"/algorithm/2023/11/30/1657.\u786e\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u63a5\u8fd1",source:"@site/algorithm/2023/11/30/1657.\u786e\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u63a5\u8fd1.md",title:"1657.\u786e\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u63a5\u8fd1",description:"1\u3001\u9898\u5e72",date:"2023-11-30T00:00:00.000Z",formattedDate:"2023\u5e7411\u670830\u65e5",tags:[{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:2.59,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6392\u5e8f"],date:"2023-11-30T00:00:00.000Z"},prevItem:{title:"2661.\u627e\u51fa\u53e0\u6d82\u5143\u7d20",permalink:"/algorithm/2023/12/01/2661.\u627e\u51fa\u53e0\u6d82\u5143\u7d20"},nextItem:{title:"2336.\u65e0\u9650\u96c6\u4e2d\u7684\u6700\u5c0f\u6570\u5b57",permalink:"/algorithm/2023/11/29/2336.\u65e0\u9650\u96c6\u4e2d\u7684\u6700\u5c0f\u6570\u5b57"}},c={authorsImageUrls:[void 0]},k=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2}],i={toc:k};function s(t){let{components:l,...n}=t;return(0,e.kt)("wrapper",(0,r.Z)({},i,n,{components:l,mdxType:"MDXLayout"}),(0,e.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,e.kt)("p",null,"\u5982\u679c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u64cd\u4f5c\u4ece\u4e00\u4e2a\u5b57\u7b26\u4e32\u5f97\u5230\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5219\u8ba4\u4e3a\u4e24\u4e2a\u5b57\u7b26\u4e32 ",(0,e.kt)("strong",null,"\u63a5\u8fd1")," \uff1a"),(0,e.kt)("ul",null,(0,e.kt)("li",null,"\u64cd\u4f5c 1\uff1a\u4ea4\u6362\u4efb\u610f\u4e24\u4e2a ",(0,e.kt)("strong",null,"\u73b0\u6709")," \u5b57\u7b26\u3002",(0,e.kt)("ul",null,(0,e.kt)("li",null,"\u4f8b\u5982\uff0c",(0,e.kt)("code",null,"a",(0,e.kt)("strong",null,"b"),"cd",(0,e.kt)("strong",null,"e")," -> a",(0,e.kt)("strong",null,"e"),"cd",(0,e.kt)("strong",null,"b"))))),(0,e.kt)("li",null,"\u64cd\u4f5c 2\uff1a\u5c06\u4e00\u4e2a ",(0,e.kt)("strong",null,"\u73b0\u6709")," \u5b57\u7b26\u7684\u6bcf\u6b21\u51fa\u73b0\u8f6c\u6362\u4e3a\u53e6\u4e00\u4e2a ",(0,e.kt)("strong",null,"\u73b0\u6709")," \u5b57\u7b26\uff0c\u5e76\u5bf9\u53e6\u4e00\u4e2a\u5b57\u7b26\u6267\u884c\u76f8\u540c\u7684\u64cd\u4f5c\u3002",(0,e.kt)("ul",null,(0,e.kt)("li",null,"\u4f8b\u5982\uff0c",(0,e.kt)("code",null,(0,e.kt)("strong",null,"aa"),"c",(0,e.kt)("strong",null,"abb")," -> ",(0,e.kt)("strong",null,"bb"),"c",(0,e.kt)("strong",null,"baa")),"\uff08\u6240\u6709 ",(0,e.kt)("code",null,"a")," \u8f6c\u5316\u4e3a ",(0,e.kt)("code",null,"b")," \uff0c\u800c\u6240\u6709\u7684 ",(0,e.kt)("code",null,"b")," \u8f6c\u6362\u4e3a ",(0,e.kt)("code",null,"a")," \uff09")))),(0,e.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5bf9\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26\u4e32\u591a\u6b21\u4f7f\u7528\u8fd9\u4e24\u79cd\u64cd\u4f5c\u3002"),(0,e.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c",(0,e.kt)("code",null,"word1")," \u548c ",(0,e.kt)("code",null,"word2")," \u3002\u5982\u679c",(0,e.kt)("em",null," "),(0,e.kt)("code",null,"word1"),(0,e.kt)("em",null," "),"\u548c",(0,e.kt)("em",null," "),(0,e.kt)("code",null,"word2"),(0,e.kt)("em",null," "),(0,e.kt)("strong",null,"\u63a5\u8fd1 "),"\uff0c\u5c31\u8fd4\u56de ",(0,e.kt)("code",null,"true")," \uff1b\u5426\u5219\uff0c\u8fd4\u56de",(0,e.kt)("em",null," "),(0,e.kt)("code",null,"false"),(0,e.kt)("em",null," "),"\u3002"),(0,e.kt)("p",null,"\xa0"),(0,e.kt)("p",null,(0,e.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,e.kt)("pre",null,(0,e.kt)("strong",null,"\u8f93\u5165\uff1a"),'word1 = "abc", word2 = "bca"',(0,e.kt)("br",null),(0,e.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,e.kt)("br",null),(0,e.kt)("strong",null,"\u89e3\u91ca\uff1a"),"2 \u6b21\u64cd\u4f5c\u4ece word1 \u83b7\u5f97 word2 \u3002",(0,e.kt)("br",null),'\u6267\u884c\u64cd\u4f5c 1\uff1a"a',(0,e.kt)("strong",null,"bc"),'" -> "a',(0,e.kt)("strong",null,"cb"),'"',(0,e.kt)("br",null),'\u6267\u884c\u64cd\u4f5c 1\uff1a"',(0,e.kt)("strong",null,"a"),"c",(0,e.kt)("strong",null,"b"),'" -> "',(0,e.kt)("strong",null,"b"),"c",(0,e.kt)("strong",null,"a"),'"',(0,e.kt)("br",null)),(0,e.kt)("p",null,(0,e.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,e.kt)("pre",null,(0,e.kt)("strong",null,"\u8f93\u5165\uff1a"),'word1 = "a", word2 = "aa"',(0,e.kt)("br",null),(0,e.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,e.kt)("br",null),(0,e.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u4e0d\u7ba1\u6267\u884c\u591a\u5c11\u6b21\u64cd\u4f5c\uff0c\u90fd\u65e0\u6cd5\u4ece word1 \u5f97\u5230 word2 \uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,e.kt)("p",null,(0,e.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,e.kt)("pre",null,(0,e.kt)("strong",null,"\u8f93\u5165\uff1a"),'word1 = "cabbba", word2 = "abbccc"',(0,e.kt)("br",null),(0,e.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,e.kt)("br",null),(0,e.kt)("strong",null,"\u89e3\u91ca\uff1a"),"3 \u6b21\u64cd\u4f5c\u4ece word1 \u83b7\u5f97 word2 \u3002",(0,e.kt)("br",null),'\u6267\u884c\u64cd\u4f5c 1\uff1a"ca',(0,e.kt)("strong",null,"b"),"bb",(0,e.kt)("strong",null,"a"),'" -> "ca',(0,e.kt)("strong",null,"a"),"bb",(0,e.kt)("strong",null,"b"),'"',(0,e.kt)("br",null),"\u6267\u884c\u64cd\u4f5c 2\uff1a",(0,e.kt)("code",null,'"'),(0,e.kt)("strong",null,"c"),"aa",(0,e.kt)("strong",null,"bbb"),'" -> "',(0,e.kt)("strong",null,"b"),"aa",(0,e.kt)("strong",null,"ccc"),'"',(0,e.kt)("br",null),'\u6267\u884c\u64cd\u4f5c 2\uff1a"',(0,e.kt)("strong",null,"baa"),'ccc" -> "',(0,e.kt)("strong",null,"abb"),'ccc"',(0,e.kt)("br",null)),(0,e.kt)("p",null,(0,e.kt)("strong",null,"\u793a\u4f8b 4\uff1a")),(0,e.kt)("pre",null,(0,e.kt)("strong",null,"\u8f93\u5165\uff1a"),'word1 = "cabbba", word2 = "aabbss"',(0,e.kt)("br",null),(0,e.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,e.kt)("br",null),(0,e.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u4e0d\u7ba1\u6267\u884c\u591a\u5c11\u6b21\u64cd\u4f5c\uff0c\u90fd\u65e0\u6cd5\u4ece word1 \u5f97\u5230 word2 \uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,e.kt)("p",null,"\xa0"),(0,e.kt)("p",null,(0,e.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,e.kt)("ul",null,(0,e.kt)("li",null,(0,e.kt)("code",null,"1 <= word1.length, word2.length <= 10",(0,e.kt)("sup",null,"5"))),(0,e.kt)("li",null,(0,e.kt)("code",null,"word1")," \u548c ",(0,e.kt)("code",null,"word2")," \u4ec5\u5305\u542b\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd")),(0,e.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,e.kt)("p",null,"\u9700\u8981\u6821\u9a8c\u4e24\u4e2a\u5173\u952e\u70b9\uff1a"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u5b57\u7b26\u4e32\u5305\u542b\u7684\u5b57\u6bcd\u76f8\u540c"),(0,e.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u5b57\u7b26\u4e32\u5206\u522b\u6309\u5b57\u6bcd\u8ba1\u6570\uff0c\u8ba1\u6570\u7ed3\u679c\u6392\u5e8f\u540e\u76f8\u540c")),(0,e.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function closeStrings(word1: string, word2: string): boolean {\n    if (word1.length !== word2.length) return false;\n\n    const K = 26, AC = 'a'.charCodeAt(0);\n    const c1 = new Array(K).fill(0), c2 = new Array(K).fill(0);\n\n    for (let i = 0; i < word1.length; i++) {\n        c1[word1.charCodeAt(i) - AC] += 1;\n        c2[word2.charCodeAt(i) - AC] += 1;\n    }\n\n    return c1.every((c, i) => +!c === +!c2[i]) && c1.sort().toString() === c2.sort().toString();\n};\n")))}s.isMDXComponent=!0}}]);