"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[86861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(n),k=a,d=c["".concat(i,".").concat(k)]||c[k]||s[k]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:"2023/1/8"},o=void 0,p={permalink:"/algorithm/2185.\u7edf\u8ba1\u5305\u542b\u7ed9\u5b9a\u524d\u7f00\u7684\u5b57\u7b26\u4e32",source:"@site/algorithm/2185.\u7edf\u8ba1\u5305\u542b\u7ed9\u5b9a\u524d\u7f00\u7684\u5b57\u7b26\u4e32.md",title:"2185.\u7edf\u8ba1\u5305\u542b\u7ed9\u5b9a\u524d\u7f00\u7684\u5b57\u7b26\u4e32",description:"1\u3001\u9898\u5e72",date:"2023-01-08T00:00:00.000Z",formattedDate:"2023\u5e741\u67088\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:1.115,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:"2023/1/8"},prevItem:{title:"1806.\u8fd8\u539f\u6392\u5217\u7684\u6700\u5c11\u64cd\u4f5c\u6b65\u6570",permalink:"/algorithm/1806.\u8fd8\u539f\u6392\u5217\u7684\u6700\u5c11\u64cd\u4f5c\u6b65\u6570"},nextItem:{title:"1658.\u5c06 x \u51cf\u5230 0 \u7684\u6700\u5c0f\u64cd\u4f5c\u6570",permalink:"/algorithm/1658.\u5c06 x \u51cf\u5230 0 \u7684\u6700\u5c0f\u64cd\u4f5c\u6570"}},i={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"words")," \u548c\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"pref")," \u3002"),(0,a.kt)("p",null,"\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"words")," \u4e2d\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"pref")," \u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u524d\u7f00")," \u7684\u5b57\u7b26\u4e32\u7684\u6570\u76ee\u3002"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u524d\u7f00")," \u5c31\u662f\xa0 ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u7684\u4efb\u4e00\u524d\u5bfc\u8fde\u7eed\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," words = ","[",'"pay","',(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"at"),'_tention","practice","'),(0,a.kt)("strong",{parentName:"p"},"at"),(0,a.kt)("em",{parentName:"p"},'tend"',"]",", ",(0,a.kt)("inlineCode",{parentName:"em"},"pref"),' \\= "at"',(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\u8f93\u51fa\uff1a")," 2",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\u89e3\u91ca\uff1a"),' \u4ee5 "at" \u4f5c\u4e3a\u524d\u7f00\u7684\u5b57\u7b26\u4e32\u6709\u4e24\u4e2a\uff0c\u5206\u522b\u662f\uff1a"'),(0,a.kt)("strong",{parentName:"p"},"at"),(0,a.kt)("em",{parentName:"p"},'tention" \u548c "'),(0,a.kt)("strong",{parentName:"p"},"at"),'_tend" \u3002',(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," words = ","[",'"leetcode","win","loops","success"',"]",", ",(0,a.kt)("inlineCode",{parentName:"p"},"pref"),' \\= "code"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 0",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' \u4e0d\u5b58\u5728\u4ee5 "code" \u4f5c\u4e3a\u524d\u7f00\u7684\u5b57\u7b26\u4e32\u3002',(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length, pref.length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"words[i]")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"pref")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("p",null,"\u6839\u636e\u9898\u610f\u6a21\u62df"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function prefixCount(words: string[], pref: string): number {\n    return words.reduce((a, c) => a + +c.startsWith(pref), 0);\n};\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(mn)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1673109246-wfQyCU-image.png",alt:"image.png"})))}c.isMDXComponent=!0}}]);