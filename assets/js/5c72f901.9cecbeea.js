"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[41992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),k=l,m=s["".concat(u,".").concat(k)]||s[k]||c[k]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32"],date:"2021/12/17"},a=void 0,i={permalink:"/algorithm/2021/12/17/\u5251\u6307 Offer II 034.\u5916\u661f\u8bed\u8a00\u662f\u5426\u6392\u5e8f",source:"@site/algorithm/2021/12/17/\u5251\u6307 Offer II 034.\u5916\u661f\u8bed\u8a00\u662f\u5426\u6392\u5e8f.md",title:"\u5251\u6307 Offer II 034.\u5916\u661f\u8bed\u8a00\u662f\u5426\u6392\u5e8f",description:"1\u3001\u9898\u5e72",date:"2021-12-17T00:00:00.000Z",formattedDate:"2021\u5e7412\u670817\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.175,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32"],date:"2021/12/17"},prevItem:{title:"953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",permalink:"/algorithm/2021/12/17/953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178"},nextItem:{title:"\u5251\u6307 Offer II 035.\u6700\u5c0f\u65f6\u95f4\u5dee",permalink:"/algorithm/2021/12/17/\u5251\u6307 Offer II 035.\u6700\u5c0f\u65f6\u95f4\u5dee"}},u={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u67d0\u79cd\u5916\u661f\u8bed\u4e5f\u4f7f\u7528\u82f1\u6587\u5c0f\u5199\u5b57\u6bcd\uff0c\u4f46\u53ef\u80fd\u987a\u5e8f ",(0,l.kt)("code",null,"order")," \u4e0d\u540c\u3002\u5b57\u6bcd\u8868\u7684\u987a\u5e8f\uff08",(0,l.kt)("code",null,"order"),"\uff09\u662f\u4e00\u4e9b\u5c0f\u5199\u5b57\u6bcd\u7684\u6392\u5217\u3002"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u7ec4\u7528\u5916\u661f\u8bed\u4e66\u5199\u7684\u5355\u8bcd ",(0,l.kt)("code",null,"words"),"\uff0c\u4ee5\u53ca\u5176\u5b57\u6bcd\u8868\u7684\u987a\u5e8f ",(0,l.kt)("code",null,"order"),"\uff0c\u53ea\u6709\u5f53\u7ed9\u5b9a\u7684\u5355\u8bcd\u5728\u8fd9\u79cd\u5916\u661f\u8bed\u4e2d\u6309\u5b57\u5178\u5e8f\u6392\u5217\u65f6\uff0c\u8fd4\u56de ",(0,l.kt)("code",null,"true"),"\uff1b\u5426\u5219\uff0c\u8fd4\u56de ",(0,l.kt)("code",null,"false"),"\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5728\u8be5\u8bed\u8a00\u7684\u5b57\u6bcd\u8868\u4e2d\uff0c'h' \u4f4d\u4e8e 'l' \u4e4b\u524d\uff0c\u6240\u4ee5\u5355\u8bcd\u5e8f\u5217\u662f\u6309\u5b57\u5178\u5e8f\u6392\u5217\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5728\u8be5\u8bed\u8a00\u7684\u5b57\u6bcd\u8868\u4e2d\uff0c'd' \u4f4d\u4e8e 'l' \u4e4b\u540e\uff0c\u90a3\u4e48 words[0] > words[1]\uff0c\u56e0\u6b64\u5355\u8bcd\u5e8f\u5217\u4e0d\u662f\u6309\u5b57\u5178\u5e8f\u6392\u5217\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5f53\u524d\u4e09\u4e2a\u5b57\u7b26 \"app\" \u5339\u914d\u65f6\uff0c\u7b2c\u4e8c\u4e2a\u5b57\u7b26\u4e32\u76f8\u5bf9\u77ed\u4e00\u4e9b\uff0c\u7136\u540e\u6839\u636e\u8bcd\u5178\u7f16\u7e82\u89c4\u5219 \"apple\" > \"app\"\uff0c\u56e0\u4e3a 'l' > '\u2205'\uff0c\u5176\u4e2d '\u2205' \u662f\u7a7a\u767d\u5b57\u7b26\uff0c\u5b9a\u4e49\u4e3a\u6bd4\u4efb\u4f55\u5176\u4ed6\u5b57\u7b26\u90fd\u5c0f\uff08",(0,l.kt)("a",{href:"https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E5%BA%8F",target:"_blank"},"\u66f4\u591a\u4fe1\u606f"),"\uff09\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= words.length <= 100")),(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= words[i].length <= 20")),(0,l.kt)("li",null,(0,l.kt)("code",null,"order.length == 26")),(0,l.kt)("li",null,"\u5728\xa0",(0,l.kt)("code",null,"words[i]"),"\xa0\u548c\xa0",(0,l.kt)("code",null,"order"),"\xa0\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u90fd\u662f\u82f1\u6587\u5c0f\u5199\u5b57\u6bcd\u3002")),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 953\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,l.kt)("a",{href:"https://leetcode-cn.com/problems/verifying-an-alien-dictionary/"},"https://leetcode-cn.com/problems/verifying-an-alien-dictionary/")),(0,l.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u601d\u8def"),"\n\u5c06words\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u66ff\u6362\u4e3a\u6b63\u5e38\u5b57\u5178\u5e8f\u7684\u5b57\u7b26\uff0c\u7136\u540e\u4f7f\u7528\u6bd4\u8f83\u8fd0\u7b97\u7b26\uff08\u5927\u4e8e\u53f7\u3001\u5c0f\u4e8e\u53f7\u7b49\uff09\u53bb\u6bd4\u8f83\u6240\u6709words\u5373\u53ef\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'words = ["hl","la"], order = "hlabcdefgijkmnopqrstuvwxyz"')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"words"),"\u4e2d\u7684\u5b57\u7b26\u66ff\u6362\u4e3a\u6b63\u5e38\u5b57\u5178\u5e8f\u7684\u5b57\u7b26\uff0c\u7ed3\u679c\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},'words = ["ab","bc"]')),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6bd4\u8f83\u8fd0\u7b97\u7b26\u6bd4\u8f83\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"words"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},'"ab"<"bc"'),"\u7ed3\u679c\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u6700\u7ec8\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6b65\u9aa4")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u54c8\u5e0c\u6620\u5c04",(0,l.kt)("inlineCode",{parentName:"li"},"map"),"\uff0c\u904d\u5386",(0,l.kt)("inlineCode",{parentName:"li"},"order"),"\uff0c\u83b7\u5f97\u5916\u661f\u5b57\u5178\u5e8f\uff08\u952e\uff09\u4e0e\u6b63\u5e38\u5b57\u5178\u5e8f\uff08\u503c\uff09\u7684\u6620\u5c04"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386",(0,l.kt)("inlineCode",{parentName:"li"},"words"),"\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u4e32",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c06",(0,l.kt)("inlineCode",{parentName:"li"},"words[i]"),"\u4e2d\u7684\u5b57\u7b26\u66ff\u6362\u4e3a\u6b63\u5e38\u5b57\u5178\u5e8f\u7684\u5b57\u7b26"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6bd4\u8f83\u8fd0\u7b97\u7b26\u6bd4\u8f83",(0,l.kt)("inlineCode",{parentName:"li"},"words[i]"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"li"},"words[i - 1]"),"\u7684\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"li"},"i && words[i] < words[i - 1]"),"\u5219\u4e0d\u7b26\u5408\u5916\u661f\u5b57\u5178\u5e8f\u76f4\u63a5\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"false")))),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u6570\u8fd0\u884c\u5230\u7ed3\u5c3e\uff0c\u5219\u8bf4\u660e\u7b26\u5408\u5916\u661f\u5b57\u5178\u5e8f\uff0c\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var isAlienSorted = function (words, order) {\n    const map = new Map();\n    for (let i = 0; i < order.length; i++) map.set(order[i], String.fromCharCode(97 + i));\n\n    for (let i = 0; i < words.length; i++) {\n        words[i] = [...words[i]].reduce((a, c) => a + map.get(c), '');\n        if (i && words[i] < words[i - 1]) return false;\n    }\n\n    return true;\n};\n")))}s.isMDXComponent=!0}}]);