"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[61214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),c=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,k=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return n?l.createElement(k,a(a({ref:t},m),{},{components:n})):l.createElement(k,a({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u6570\u7ec4","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/11/25"},a=void 0,i={permalink:"/algorithm/809.\u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57",source:"@site/algorithm/809.\u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57.md",title:"809.\u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57",description:"1\u3001\u9898\u5e72",date:"2022-11-25T00:00:00.000Z",formattedDate:"2022\u5e7411\u670825\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:2.715,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/11/25"},prevItem:{title:"1769.\u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570",permalink:"/algorithm/1769.\u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570"},nextItem:{title:"808.\u5206\u6c64",permalink:"/algorithm/808.\u5206\u6c64"}},p={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],m={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u4eba\u4eec\u4f1a\u7528\u91cd\u590d\u5199\u4e00\u4e9b\u5b57\u6bcd\u6765\u8868\u793a\u989d\u5916\u7684\u611f\u53d7\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},'"hello" -> "heeellooo"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"hi" -> "hiii"'),'\u3002\u6211\u4eec\u5c06\u76f8\u90bb\u5b57\u6bcd\u90fd\u76f8\u540c\u7684\u4e00\u4e32\u5b57\u7b26\u5b9a\u4e49\u4e3a\u76f8\u540c\u5b57\u6bcd\u7ec4\uff0c\u4f8b\u5982\uff1a"h", "eee", "ll", "ooo"\u3002'),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32 S \uff0c\u5982\u679c\u53e6\u4e00\u4e2a\u5355\u8bcd\u80fd\u591f\u901a\u8fc7\u5c06\u4e00\u4e9b\u5b57\u6bcd\u7ec4\u6269\u5f20\u4ece\u800c\u4f7f\u5176\u548c S \u76f8\u540c\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a\u5355\u8bcd\u5b9a\u4e49\u4e3a\u53ef\u6269\u5f20\u7684\uff08stretchy\uff09\u3002\u6269\u5f20\u64cd\u4f5c\u5b9a\u4e49\u5982\u4e0b\uff1a\u9009\u62e9\u4e00\u4e2a\u5b57\u6bcd\u7ec4\uff08\u5305\u542b\u5b57\u6bcd\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"c"),"\xa0\uff09\uff0c\u7136\u540e\u5f80\u5176\u4e2d\u6dfb\u52a0\u76f8\u540c\u7684\u5b57\u6bcd\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"c"),"\xa0\u4f7f\u5176\u957f\u5ea6\u8fbe\u5230 3 \u6216\u4ee5\u4e0a\u3002"),(0,r.kt)("p",null,'\u4f8b\u5982\uff0c\u4ee5\xa0"hello" \u4e3a\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u5b57\u6bcd\u7ec4\xa0"o" \u6269\u5f20\u5f97\u5230 "hellooo"\uff0c\u4f46\u662f\u65e0\u6cd5\u4ee5\u540c\u6837\u7684\u65b9\u6cd5\u5f97\u5230 "helloo" \u56e0\u4e3a\u5b57\u6bcd\u7ec4 "oo" \u957f\u5ea6\u5c0f\u4e8e\xa03\u3002\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u53e6\u4e00\u79cd\u6269\u5f20 "ll" -> "lllll" \u4ee5\u83b7\u5f97\xa0"helllllooo"\u3002\u5982\u679c\xa0',(0,r.kt)("inlineCode",{parentName:"p"},'s = "helllllooo"'),'\uff0c\u90a3\u4e48\u67e5\u8be2\u8bcd\xa0"hello" \u662f\u53ef\u6269\u5f20\u7684\uff0c\u56e0\u4e3a\u53ef\u4ee5\u5bf9\u5b83\u6267\u884c\u8fd9\u4e24\u79cd\u6269\u5f20\u64cd\u4f5c\u4f7f\u5f97\xa0',(0,r.kt)("inlineCode",{parentName:"p"},'query = "hello" -> "hellooo" ->\xa0"helllllooo" = s'),"\u3002"),(0,r.kt)("p",null,"\u8f93\u5165\u4e00\u7ec4\u67e5\u8be2\u5355\u8bcd\uff0c\u8f93\u51fa\u5176\u4e2d\u53ef\u6269\u5f20\u7684\u5355\u8bcd\u6570\u91cf\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),'\ns = "heeellooo"\nwords = ',"[",'"hello", "hi", "helo"',"]","\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),"1\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca"),'\uff1a\n\u6211\u4eec\u80fd\u901a\u8fc7\u6269\u5f20 "hello" \u7684 "e" \u548c "o" \u6765\u5f97\u5230 "heeellooo"\u3002\n\u6211\u4eec\u4e0d\u80fd\u901a\u8fc7\u6269\u5f20 "helo" \u6765\u5f97\u5230 "heeellooo" \u56e0\u4e3a "ll" \u7684\u957f\u5ea6\u5c0f\u4e8e 3 \u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= s.length, words.length <= 100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length <= 100")),(0,r.kt)("li",{parentName:"ul"},"s \u548c\u6240\u6709\u5728\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"words"),"\xa0\u4e2d\u7684\u5355\u8bcd\u90fd\u53ea\u7531\u5c0f\u5199\u5b57\u6bcd\u7ec4\u6210\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Problem: ",(0,r.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/expressive-words/description/"},"809. \u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u603b\u4f53\u601d\u8def\u662f\uff1a\u5148\u63d0\u53d6\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern"),"\uff0c\u7136\u540e\u904d\u5386 ",(0,r.kt)("inlineCode",{parentName:"p"},"words")," \u4e2d\u6bcf\u4e00\u9879\u662f\u5426\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern")," \u76f8\u5339\u914d\u3002\u8fd9\u91cc\u4f7f\u7528\u6b63\u5219\u5b9e\u73b0\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u53d6\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u7684\u6b63\u5219",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u8fde\u7eed 3 \u4e2a\u4ee5\u4e0a\u76f8\u540c\u7684\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," \u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"a{1,a.count}"),"\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"ooooo")," \u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"o{1,5}")),(0,r.kt)("li",{parentName:"ul"},"\u66ff\u6362\u540e\u7684\u5b57\u7b26\u4e32\u6dfb\u52a0\u9996\u5c3e\u6807\u5fd7 ",(0,r.kt)("inlineCode",{parentName:"li"},"^"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"$")," \u5e76\u8f6c\u4e3a\u6b63\u5219"))),(0,r.kt)("li",{parentName:"ul"},"\u904d\u5386 ",(0,r.kt)("inlineCode",{parentName:"li"},"words")," \u5e76\u4e0e\u6b63\u5219\u5339\u914d\uff0c\u82e5\u5339\u914d\u5219\u7ed3\u679c\u7d2f\u8ba1 1")),(0,r.kt)("h2",{id:"3code"},"3\u3001Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function expressiveWords(s: string, words: string[]): number {\n    const r = s.replace(/(\\w)\\1{2,}/g, (m, a) => `${a}{1,${m.length}}`);\n    const reg = new RegExp(`^${r}$`);\n    return words.reduce((a, c) => a + +reg.test(c), 0);\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1669342722-GiwQOz-image.png",alt:"image.png"})))}s.isMDXComponent=!0}}]);