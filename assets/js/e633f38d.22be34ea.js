"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[33521],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),k=o(t),s=l,d=k["".concat(u,".").concat(s)]||k[s]||c[s]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=s;var m={};for(var u in n)hasOwnProperty.call(n,u)&&(m[u]=n[u]);m.originalType=e,m[k]="string"==typeof e?e:l,i[1]=m;for(var o=2;o<a;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},47716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>m,toc:()=>o});var r=t(87462),l=(t(67294),t(3905));const a={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:"2022/1/10"},i=void 0,m={permalink:"/algorithm/306.\u7d2f\u52a0\u6570",source:"@site/algorithm/306.\u7d2f\u52a0\u6570.md",title:"306.\u7d2f\u52a0\u6570",description:"1\u3001\u9898\u5e72",date:"2022-01-10T00:00:00.000Z",formattedDate:"2022\u5e741\u670810\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"}],readingTime:6.86,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:"2022/1/10"},prevItem:{title:"1036.\u9003\u79bb\u5927\u8ff7\u5bab",permalink:"/algorithm/1036.\u9003\u79bb\u5927\u8ff7\u5bab"},nextItem:{title:"1629.\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e",permalink:"/algorithm/1629.\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e"}},u={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u56de\u6eaf",id:"2\u89e3\u6cd51-\u56de\u6eaf",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd51-\u4f18\u5316\u7248",id:"5\u89e3\u6cd51-\u4f18\u5316\u7248",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u6267\u884c\u7ed3\u679c",id:"7\u6267\u884c\u7ed3\u679c",level:2},{value:"8\u3001\u89e3\u6cd52-\u53cc\u6307\u9488\u904d\u5386",id:"8\u89e3\u6cd52-\u53cc\u6307\u9488\u904d\u5386",level:2},{value:"9\u3001\u4ee3\u7801",id:"9\u4ee3\u7801",level:2},{value:"10\u3001\u6267\u884c\u7ed3\u679c",id:"10\u6267\u884c\u7ed3\u679c",level:2}],p={toc:o};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7d2f\u52a0\u6570")," \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7ec4\u6210\u5b83\u7684\u6570\u5b57\u53ef\u4ee5\u5f62\u6210\u7d2f\u52a0\u5e8f\u5217\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u6709\u6548\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u7d2f\u52a0\u5e8f\u5217")," \u5fc5\u987b ",(0,l.kt)("strong",{parentName:"p"},"\u81f3\u5c11")," \u5305\u542b 3 \u4e2a\u6570\u3002\u9664\u4e86\u6700\u5f00\u59cb\u7684\u4e24\u4e2a\u6570\u4ee5\u5916\uff0c\u5e8f\u5217\u4e2d\u7684\u6bcf\u4e2a\u540e\u7eed\u6570\u5b57\u5fc5\u987b\u662f\u5b83\u4e4b\u524d\u4e24\u4e2a\u6570\u5b57\u4e4b\u548c\u3002"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u53ea\u5305\u542b\u6570\u5b57\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"'0'-'9'"),"\xa0\u7684\u5b57\u7b26\u4e32\uff0c\u7f16\u5199\u4e00\u4e2a\u7b97\u6cd5\u6765\u5224\u65ad\u7ed9\u5b9a\u8f93\u5165\u662f\u5426\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u7d2f\u52a0\u6570")," \u3002\u5982\u679c\u662f\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \uff1b\u5426\u5219\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a"),"\u7d2f\u52a0\u5e8f\u5217\u91cc\u7684\u6570\uff0c\u9664\u6570\u5b57 0 \u4e4b\u5916\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a")," \u4ee5 0 \u5f00\u5934\uff0c\u6240\u4ee5\u4e0d\u4f1a\u51fa\u73b0\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"1, 2, 03")," \u6216\u8005\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"1, 02, 3"),"\xa0\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"112358"'),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," true ",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7d2f\u52a0\u5e8f\u5217\u4e3a: ",(0,l.kt)("inlineCode",{parentName:"p"},"1, 1, 2, 3, 5, 8")," \u30021 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8",(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\xa02\uff1a")," ",(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"strong"},"\uff1a"))," ",(0,l.kt)("inlineCode",{parentName:"p"},'"199100199"'),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," true ",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7d2f\u52a0\u5e8f\u5217\u4e3a: ",(0,l.kt)("inlineCode",{parentName:"p"},"1, 99, 100, 199\u3002"),"1 + 99 = 100, 99 + 100 = 199",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= num.length <= 35")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"num")," \u4ec5\u7531\u6570\u5b57\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"0")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"9"),"\uff09\u7ec4\u6210")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a"),"\u4f60\u8ba1\u5212\u5982\u4f55\u5904\u7406\u7531\u8fc7\u5927\u7684\u6574\u6570\u8f93\u5165\u5bfc\u81f4\u7684\u6ea2\u51fa?"),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u56de\u6eaf"},"2\u3001\u89e3\u6cd51-\u56de\u6eaf"),(0,l.kt)("p",null,"\u603b\u4f53\u601d\u8def\uff1a\u4f7f\u7528\u56de\u6eaf\u5bf9\u6240\u6709\u53ef\u80fd\u6027\u8fdb\u884c\u5339\u914d\u76f4\u5230\u6210\u529f\u3002\u5927\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u9012\u5f52\u5b9e\u73b0\u56de\u6eaf\u7b97\u6cd5\uff0c\u9012\u5f52\u51fd\u6570",(0,l.kt)("inlineCode",{parentName:"li"},"match"),"\uff0c\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"li"},"l"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"m"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"r"),"\u5206\u522b\u8868\u793a\u5f85\u5339\u914d\u76843\u4e2a\u6570\u7684\u8d77\u59cb\u4f4d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"match"),"\u51fd\u6570\u7b2c\u4e00\u6b65\u5148\u5904\u7406\u8fb9\u754c\u60c5\u51b5\u30010\u5f00\u5934\u7684\u7279\u6b8a\u60c5\u51b5"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b65\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"num"),"\u5b57\u7b26\u4e32\u4e2d\u53d6\u51fa\u524d\u4e24\u4e2a\u6570\u5e76\u6c42\u548c\uff0c\u5f97\u5230\u7b2c\u4e09\u4e2a\u6570",(0,l.kt)("inlineCode",{parentName:"li"},"n3")),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b65\u526a\u679d\uff0c\u5982\u679c\u5269\u4f59\u5b57\u7b26\u6bd4\u8981\u67e5\u627e\u7684\u7ed3\u679c\u66f4\u77ed\uff0c\u76f4\u63a5\u8fd4\u56defalse"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u6b65\u5728\u5269\u4f59\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e",(0,l.kt)("inlineCode",{parentName:"li"},"n3"),"\u662f\u5426\u5b58\u5728\uff0c\u82e5\u5b58\u5728\u4e14\u6b63\u597d\u7528\u5c3d\u6240\u6709\u5b57\u7b26\u5219\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4e0d\u5b58\u5728\u5219\u5c1d\u8bd5",(0,l.kt)("inlineCode",{parentName:"li"},"r"),"\u53f3\u79fb\u4e00\u4f4d\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"li"},"m"),"\u53f3\u79fb\u4e00\u4f4d\u7684\u60c5\u51b5",(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u70b9")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u4e0d\u5b58\u5728\u5927\u6574\u6570\uff0c\u56e0\u6b64\u6ca1\u6709\u505a\u5927\u6574\u6570\u7279\u6b8a\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u8fb9\u754c\u6761\u4ef6\u3001\u7279\u6b8a\u60c5\u51b5\u7565\u591a\uff0c\u5982\u679c\u4e0d\u80fdAC\u53ef\u4ee5\u591a\u8c03\u8bd5\u770b\u770b\u662f\u5426\u8fb9\u754c\u6ca1\u5904\u7406\u597d"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u5b9a\u8981\u526a\u679d\uff0c\u5426\u5219\u5927\u6982\u7387\u4f1a\u8d85\u65f6"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JavaScript"},"var isAdditiveNumber = function (num) {\n    function match(l, m, r) {\n        // \u5904\u7406\u8fb9\u754c\u60c5\u51b5\u3001\u7279\u6b8a\u60c5\u51b5\uff080\u5f00\u5934\u7684\u6570\uff09\n        if (r > num.length || m > num.length - 1 || (num[l] === '0' && m - l > 1)) return false;\n        if (m >= r) return match(l, m, r + 1);\n        if (num[m] === '0' && r - m > 1) return match(l, m + 1, r);\n\n        const n3 = `${+num.slice(l, m) + +num.slice(m, r)}`;\n        // \u526a\u679d\uff1a\u5982\u679c\u5269\u4f59\u5b57\u7b26\u6bd4\u8981\u67e5\u627e\u7684\u7ed3\u679c\u66f4\u77ed\uff0c\u76f4\u63a5\u8fd4\u56defalse\n        if (n3.length > num.length - r) return false;\n        // \u5339\u914d\u6210\u529f \ud83d\ude80\ud83d\ude80\ud83d\ude80\n        if (num.slice(r, r + n3.length) === n3 && (r + n3.length === num.length || match(m, r, r + n3.length))) return true;\n\n        // \u5339\u914d\u5931\u8d25\uff1a\u5c1d\u8bd5\u67e5\u627e\u5176\u4ed6\u53ef\u80fd\u6027\n        return match(l, m, r + 1) || match(l, m + 1, r);\n    }\n    return match(0, 1, 2);\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 108 ms  \u5185\u5b58\u6d88\u8017: 44.7 MB")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u89e3\u6cd51-\u4f18\u5316\u7248"},"5\u3001\u89e3\u6cd51-\u4f18\u5316\u7248"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u95ee\u98981\uff1a\u786e\u5b9a\u5f00\u5934\u4e24\u4e2a\u6570\u5b57\u4e4b\u540e\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"num.slice(r, r + n3.length) === n3"),"\uff09\u7684\u540e\u7eed\u5339\u914d\u65b9\u5f0f\u5b58\u5728\u65e0\u6548\u904d\u5386\uff0c\u539f\u5148\u4f7f\u7528\u9012\u5f52\u8fdb\u884c\u540e\u7eed\u5339\u914d\uff0c\u6bcf\u6b21\u53f3\u79fb1\u4f4d\uff0c\u56e0\u6b64\u5b58\u5728\u5927\u91cf\u65e0\u6548\u5339\u914d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u98982\uff1a\u5df2\u904d\u5386\u8fc7\u7684\u60c5\u51b5\u6ca1\u6709\u76f4\u63a5\u8df3\u8fc7\uff0c\u5bfc\u81f4\u5b58\u5728\u5927\u91cf\u91cd\u590d\u904d\u5386\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u53161\uff1a\u786e\u5b9a\u5f00\u5934\u4e24\u4e2a\u6570\u5b57\u4e4b\u540e\uff0c\u7531\u4e8e\u540e\u9762\u7684\u6570\u5b57\u662f\u524d\u9762\u7d2f\u52a0\u800c\u6765\uff0c\u56e0\u6b64\u540e\u9762\u7684\u6570\u5b57\u90fd\u662f\u786e\u5b9a\u7684\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"while"),"\u5faa\u73af\u5339\u914d\u7d2f\u52a0\u548c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u53162\uff1a\u4f7f\u7528\u54c8\u5e0c\u8868\u8bb0\u5f55\u5df2\u904d\u5386\u8fc7\u7684\u60c5\u51b5\uff0c\u540e\u7eed\u76f4\u63a5\u8df3\u8fc7\u8fd9\u4e9b\u60c5\u51b5\uff0c\u8fdb\u884c\u8bb0\u5fc6\u5316\u641c\u7d22\u3002\uff08\u611f\u8c22\u8bc4\u8bba\u533a ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.cn/u/jvaeyhcd/"},"@Jvaeyhcd")," \u7684\u63d0\u9192\uff09",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u7528\u4f8b",(0,l.kt)("inlineCode",{parentName:"p"},'"1991000199299498797"'),"\u4e2d\u904d\u5386\u6b21\u6570\u4ece\u89e3\u6cd51\u768415000+\u6b21\u964d\u523099\u6b21\u3002")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JavaScript"},"var isAdditiveNumber = function (num) {\n    const set = new Set();\n\n    function match(l, m, r) {\n        if (set.has(`${l}-${m}-${r}`)) return false;\n        set.add(`${l}-${m}-${r}`);\n        if (r > num.length || m > num.length - 1 || (num[l] === '0' && m - l > 1)) return false;\n        if (r - m > num.length - r || m - l > num.length - r) return false;\n\n        if (m >= r) return match(l, m, r + 1);\n        if (num[m] === '0' && r - m > 1) return match(l, m + 1, r);\n\n        let r2 = r, n1 = +num.slice(l, m), n2 = +num.slice(m, r), n3 = n1 + n2;\n        while (num.slice(r2, r2 + `${n3}`.length) === `${n3}`) {\n            (r2 = r2 + `${n3}`.length), (n1 = n2), (n2 = n3), (n3 = n1 + n2);\n        }\n        if (r2 === num.length) return true;\n\n        return match(l, m, r + 1) || match(l, m + 1, r);\n    }\n    return match(0, 1, 2);\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"7\u6267\u884c\u7ed3\u679c"},"7\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 68 ms   \u5185\u5b58\u6d88\u8017: 38.1 MB")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"8\u89e3\u6cd52-\u53cc\u6307\u9488\u904d\u5386"},"8\u3001\u89e3\u6cd52-\u53cc\u6307\u9488\u904d\u5386"),(0,l.kt)("p",null,"\u603b\u4f53\u601d\u8def\uff1a\u53cc\u5c42\u904d\u5386\u786e\u5b9a\u5f00\u5934\u4e24\u4e2a\u6570\u5b57\u4e4b\u540e\uff0c\u7531\u4e8e\u540e\u9762\u7684\u6570\u5b57\u662f\u524d\u9762\u7d2f\u52a0\u800c\u6765\uff0c\u56e0\u6b64\u540e\u9762\u7684\u6570\u5b57\u90fd\u662f\u786e\u5b9a\u7684\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"while"),"\u5faa\u73af\u5339\u914d\u7d2f\u52a0\u548c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u7528\u4f8b",(0,l.kt)("inlineCode",{parentName:"p"},'"1991000199299498797"'),"\u4e2d\u904d\u5386\u6b21\u6570\u4ece\u89e3\u6cd51\u768415000+\u6b21\u964d\u5230120\u6b21\u3002")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"9\u4ee3\u7801"},"9\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JavaScript"},"var isAdditiveNumber = function (num) {\n    for (let m = 1; m < num.length; m++) {\n        let n1 = +num.slice(0, m);\n        if (num[0] === '0' && m > 1) return false;\n\n        for (let r = m + 1; r < num.length; r++) {\n            if (num[m] === '0' && r - m > 1) break;\n            let n2 = +num.slice(m, r), r_2 = r, n_1 = n1, n3 = n1 + n2;\n            while (num.slice(r_2, r_2 + `${n3}`.length) === `${n3}`) {\n                (r_2 = r_2 + `${n3}`.length), (n_1 = n2), (n2 = n3), (n3 = n_1 + n2);\n            }\n            if (r_2 === num.length) return true;\n        }\n    }\n\n    return false;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"10\u6267\u884c\u7ed3\u679c"},"10\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 60 ms \u5185\u5b58\u6d88\u8017: 38.1 MB")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1641806425-tPxAyt-1.png",alt:"1.png"})))}k.isMDXComponent=!0}}]);