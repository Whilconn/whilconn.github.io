"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[28637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,g=c["".concat(o,".").concat(k)]||c[k]||m[k]||a;return n?l.createElement(g,i(i({ref:t},u),{},{components:n})):l.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},82912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/12/28"},i=void 0,p={permalink:"/algorithm/1750.\u5220\u9664\u5b57\u7b26\u4e32\u4e24\u7aef\u76f8\u540c\u5b57\u7b26\u540e\u7684\u6700\u77ed\u957f\u5ea6",source:"@site/algorithm/1750.\u5220\u9664\u5b57\u7b26\u4e32\u4e24\u7aef\u76f8\u540c\u5b57\u7b26\u540e\u7684\u6700\u77ed\u957f\u5ea6.md",title:"1750.\u5220\u9664\u5b57\u7b26\u4e32\u4e24\u7aef\u76f8\u540c\u5b57\u7b26\u540e\u7684\u6700\u77ed\u957f\u5ea6",description:"1\u3001\u9898\u5e72",date:"2022-12-28T00:00:00.000Z",formattedDate:"2022\u5e7412\u670828\u65e5",tags:[{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.47,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/12/28"},prevItem:{title:"2032.\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c",permalink:"/algorithm/2032.\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c"},nextItem:{title:"1759.\u7edf\u8ba1\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/algorithm/1759.\u7edf\u8ba1\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee"}},o={authorsImageUrls:[void 0]},s=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u6267\u884c\u7ed3\u679c",id:"8\u6267\u884c\u7ed3\u679c",level:2},{value:"9\u3001\u601d\u8def3",id:"9\u601d\u8def3",level:2},{value:"10\u3001\u4ee3\u7801",id:"10\u4ee3\u7801",level:2},{value:"11\u3001\u6267\u884c\u7ed3\u679c",id:"11\u6267\u884c\u7ed3\u679c",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u53ea\u5305\u542b\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"'a'"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"'b'"),"\xa0\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"'c'"),"\xa0\u7684\u5b57\u7b26\u4e32\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"\xa0\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u4e0b\u9762\u8fd9\u4e2a\u64cd\u4f5c\uff085 \u4e2a\u6b65\u9aa4\uff09\u4efb\u610f\u6b21\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"li"},"s"),"\xa0\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"\u975e\u7a7a")," \u7684\u524d\u7f00\uff0c\u8fd9\u4e2a\u524d\u7f00\u7684\u6240\u6709\u5b57\u7b26\u90fd\u76f8\u540c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"li"},"s"),"\xa0\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"\u975e\u7a7a")," \u7684\u540e\u7f00\uff0c\u8fd9\u4e2a\u540e\u7f00\u7684\u6240\u6709\u5b57\u7b26\u90fd\u76f8\u540c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u524d\u7f00\u548c\u540e\u7f00\u5728\u5b57\u7b26\u4e32\u4e2d\u4efb\u610f\u4f4d\u7f6e\u90fd\u4e0d\u80fd\u6709\u4ea4\u96c6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u524d\u7f00\u548c\u540e\u7f00\u5305\u542b\u7684\u6240\u6709\u5b57\u7b26\u90fd\u8981\u76f8\u540c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u540c\u65f6\u5220\u9664\u524d\u7f00\u548c\u540e\u7f00\u3002")),(0,r.kt)("p",null,"\u8bf7\u4f60\u8fd4\u56de\u5bf9\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"\xa0\u6267\u884c\u4e0a\u9762\u64cd\u4f5c\u4efb\u610f\u6b21\u4ee5\u540e\uff08\u53ef\u80fd 0 \u6b21\uff09\uff0c\u80fd\u5f97\u5230\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u6700\u77ed\u957f\u5ea6"),"\xa0\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "ca"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4f60\u6ca1\u6cd5\u5220\u9664\u4efb\u4f55\u4e00\u4e2a\u5b57\u7b26\uff0c\u6240\u4ee5\u5b57\u7b26\u4e32\u957f\u5ea6\u4ecd\u7136\u4fdd\u6301\u4e0d\u53d8\u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "cabaabac"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 0",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6700\u4f18\u64cd\u4f5c\u5e8f\u5217\u4e3a\uff1a",(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},'\u9009\u62e9\u524d\u7f00 "c" \u548c\u540e\u7f00 "c" \u5e76\u5220\u9664\u5b83\u4eec\uff0c\u5f97\u5230 s = "abaaba" \u3002',(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},'\u9009\u62e9\u524d\u7f00 "a" \u548c\u540e\u7f00 "a" \u5e76\u5220\u9664\u5b83\u4eec\uff0c\u5f97\u5230 s = "baab" \u3002',(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},'\u9009\u62e9\u524d\u7f00 "b" \u548c\u540e\u7f00 "b" \u5e76\u5220\u9664\u5b83\u4eec\uff0c\u5f97\u5230 s = "aa" \u3002',(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},'\u9009\u62e9\u524d\u7f00 "a" \u548c\u540e\u7f00 "a" \u5e76\u5220\u9664\u5b83\u4eec\uff0c\u5f97\u5230 s = "" \u3002',(0,r.kt)("br",null)))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "aabccabba"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 3",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6700\u4f18\u64cd\u4f5c\u5e8f\u5217\u4e3a\uff1a",(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},'\u9009\u62e9\u524d\u7f00 "aa" \u548c\u540e\u7f00 "a" \u5e76\u5220\u9664\u5b83\u4eec\uff0c\u5f97\u5230 s = "bccabb" \u3002',(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},'\u9009\u62e9\u524d\u7f00 "b" \u548c\u540e\u7f00 "bb" \u5e76\u5220\u9664\u5b83\u4eec\uff0c\u5f97\u5230 s = "cca" \u3002',(0,r.kt)("br",null)))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s"),"\xa0\u53ea\u5305\u542b\u5b57\u7b26\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"'a'"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"'b'"),"\xa0\u548c\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"'c'"),"\xa0\u3002")),(0,r.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,r.kt)("p",null,"\u53cc\u6307\u9488\u904d\u5386\u76f4\u5230\u6307\u9488\u4ea4\u53c9\u6216\u5bf9\u5e94\u4e0d\u540c\u5b57\u7b26"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function minimumLength(s: string): number {\n    let l = 0, r = s.length - 1;\n    while (l < r && s[l] === s[r]) {\n        const c = s[l];\n        while (l <= r && s[l] === c) l++;\n        while (l <= r && s[r] === c) r--;\n    }\n    return r - l + 1;\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(39314).Z,width:"1486",height:"392"})),(0,r.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,r.kt)("p",null,"\u6309\u9898\u610f\u6a21\u62df\uff0c\u5254\u9664\u9996\u5c3e\u76f8\u540c\u5b57\u7b26\uff0c\u76f4\u5230\u9996\u5c3e\u5b57\u7b26\u4e0d\u540c\u6216\u5b57\u7b26\u4e32\u957f\u5ea6\u5c0f\u4e8e2"),(0,r.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function minimumLength(s: string): number {\n    while (s[1] && s[0] === s[s.length - 1]) {\n        const c = s[0];\n        while (s[0] === c) s = s.slice(1);\n        while (s[s.length - 1] === c) s = s.slice(0, s.length - 1);\n    }\n    return s.length;\n};\n")),(0,r.kt)("h2",{id:"8\u6267\u884c\u7ed3\u679c"},"8\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(50420).Z,width:"1486",height:"390"})),(0,r.kt)("h2",{id:"9\u601d\u8def3"},"9\u3001\u601d\u8def3"),(0,r.kt)("p",null,"\u6309\u9898\u610f\u6a21\u62df\uff0c\u501f\u52a9\u6b63\u5219\u5254\u9664\u9996\u5c3e\u76f8\u540c\u5b57\u7b26\uff0c\u76f4\u5230\u9996\u5c3e\u5b57\u7b26\u4e0d\u540c\u6216\u5b57\u7b26\u4e32\u957f\u5ea6\u5c0f\u4e8e2"),(0,r.kt)("h2",{id:"10\u4ee3\u7801"},"10\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function minimumLength(s: string): number {\n    if (!s[1] || s[0] !== s[s.length - 1]) return s.length;\n    return minimumLength(s.replace(new RegExp(`^${s[0]}+|${s[0]}+$`, 'g'), ''));\n};\n")),(0,r.kt)("h2",{id:"11\u6267\u884c\u7ed3\u679c"},"11\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(24696).Z,width:"1492",height:"388"})))}c.isMDXComponent=!0},39314:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/1672195172-vSknUQ-image-97b112ee51b5f9212a11ebd5cf5e2811.png"},24696:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/1672195352-WEgEeV-image-94ccd7c8a9d6e486778b6b104167ad49.png"},50420:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/1672195769-GVyKqi-image-08ec8df7ec236896762a763c6cb0c339.png"}}]);