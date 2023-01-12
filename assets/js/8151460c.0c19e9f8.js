"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[82955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,g=u["".concat(c,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:"2022/3/3"},o=void 0,i={permalink:"/algorithm/301.\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7",source:"@site/algorithm/301.\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7.md",title:"301.\u5220\u9664\u65e0\u6548\u7684\u62ec\u53f7",description:"1\u3001\u9898\u5e72",date:"2022-03-03T00:00:00.000Z",formattedDate:"2022\u5e743\u67083\u65e5",tags:[{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"}],readingTime:2.575,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:"2022/3/3"},prevItem:{title:"2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",permalink:"/algorithm/2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50"},nextItem:{title:"564.\u5bfb\u627e\u6700\u8fd1\u7684\u56de\u6587\u6570",permalink:"/algorithm/564.\u5bfb\u627e\u6700\u8fd1\u7684\u56de\u6587\u6570"}},c={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u7531\u82e5\u5e72\u62ec\u53f7\u548c\u5b57\u6bcd\u7ec4\u6210\u7684\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \uff0c\u5220\u9664\u6700\u5c0f\u6570\u91cf\u7684\u65e0\u6548\u62ec\u53f7\uff0c\u4f7f\u5f97\u8f93\u5165\u7684\u5b57\u7b26\u4e32\u6709\u6548\u3002"),(0,a.kt)("p",null,"\u8fd4\u56de\u6240\u6709\u53ef\u80fd\u7684\u7ed3\u679c\u3002\u7b54\u6848\u53ef\u4ee5\u6309 ",(0,a.kt)("strong",{parentName:"p"},"\u4efb\u610f\u987a\u5e8f")," \u8fd4\u56de\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "()())()"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"(())()","()()()"',"]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "(a)())()"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"(a())()","(a)()()"',"]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = ")("',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'""',"]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 25")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u4ee5\u53ca\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"'('")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"')'")," \u7ec4\u6210"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u81f3\u591a\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"20")," \u4e2a\u62ec\u53f7")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6df1\u5733\u963f\u91ccLazada\u7b14\u8bd5\u9898T4\uff0c30min\u949f4\u9053\u9898\uff0c\u8fd9\u9053\u9898\u6ca1\u65f6\u95f4\u5199")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1646279675-guHHZD-1d58c1fc375efb4172fc38ed625cfb94.gif",alt:"1d58c1fc375efb4172fc38ed625cfb94.gif"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u56de\u6eaf+\u526a\u679d\u679a\u4e3e\u6240\u6709\u53ef\u884c\u7684\u60c5\u51b5\uff0c\u904d\u5386\u8fc7\u7a0b\u4e2d\u5224\u65ad\u5408\u6cd5\u5b50\u4e32\u53ea\u9700\u8981\u5224\u65ad\u5df2\u9009\u5b50\u4e32\u957f\u5ea6\u4e0d\u4e3a0\u4e14\u5de6\u62ec\u53f7\u88ab\u6d88\u8017\u5b8c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"lc=0"),"\uff0c\u8be6\u7ec6\u903b\u8f91\u89c1\u6ce8\u91ca"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var removeInvalidParentheses = function (s) {\n    let res = [''];\n\n    // \u521d\u59cb\u72b6\u6001\uff1a\u5b57\u7b26\u4e32\u4e0b\u6807i\uff0c\u5df2\u9009\u5b57\u7b26\u6570\u7ec4chars\uff0c\u5de6\u62ec\u53f7\u6570\u91cflc\n    function backtrace(i, chars, lc) {\n        // \u5408\u6cd5\u5b50\u4e32\uff0c\u6bd4\u8f83\u957f\u5ea6\u5e76\u586b\u5165\u6700\u7ec8\u7ed3\u679c\n        if (!lc && chars.length && chars.length > res[0].length) res = [chars.join('')];\n        else if (!lc && chars.length && chars.length === res[0].length) res.push(chars.join(''));\n\n        // \u4e0b\u6807\u8d8a\u754c\uff0c\u904d\u5386\u7ed3\u675f\n        if (i >= s.length - 1) return;\n\n        // \u904d\u5386\u6240\u6709\u5f85\u9009\u5b57\u7b26\n        for (let j = i + 1; j < s.length; j++) {\n            const c = s[j];\n            // \u526a\u679d\uff1a\u5b58\u5728\u65e0\u6cd5\u914d\u5bf9\u7684\u53f3\u62ec\u53f7\n            if (c === ')' && !lc) continue;\n            // \u526a\u679d\uff1a1\u3001\u5de6\u62ec\u53f7\u6bd4\u5269\u4f59\u5b50\u4e32\u66f4\u957f\uff1b2\u3001\u5df2\u9009\u5b50\u4e32\u957f\u5ea6\u52a0\u4e0a\u672a\u904d\u5386\u5b50\u4e32\u957f\u5ea6\u8fd8\u662f\u5c0f\u4e8e\u7ed3\u679c\u5b50\u4e32\u7684\u957f\u5ea6\n            if (lc > s.length - j || chars.length + s.length - j < res[0].length) break;\n\n            // \u9009\u62e9\u5f53\u524d\u5b57\u7b26\n            chars.push(c);\n            // \u9012\u5f52\u641c\u7d22\n            backtrace(j, chars, c === '(' ? lc + 1 : (c === ')' ? lc - 1 : lc));\n            // \u64a4\u9500\u9009\u62e9\n            chars.pop();\n        }\n    }\n\n    // \u521d\u59cb\u72b6\u6001\uff1a\u5b57\u7b26\u4e32\u4e0b\u6807i\u4e3a-1\uff0c\u5df2\u9009\u5b57\u7b26\u6570\u7ec4chars\u4e3a\u7a7a\u6570\u7ec4\uff0c\u5de6\u62ec\u53f7\u6570\u91cflc\u4e3a0\n    backtrace(-1, [], 0);\n\n    return [...new Set(res)];\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1646278088-eHkTgi-image.png",alt:"image.png"})))}u.isMDXComponent=!0}}]);