"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[64943],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>N});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var p=n.createContext({}),i=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(p.Provider,{value:e},a.children)},k="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,l=a.originalType,p=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),k=i(t),u=m,N=k["".concat(p,".").concat(u)]||k[u]||c[u]||l;return t?n.createElement(N,s(s({ref:e},o),{},{components:t})):n.createElement(N,s({ref:e},o))}));function N(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var l=t.length,s=new Array(l);s[0]=u;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=a,r[k]="string"==typeof a?a:m,s[1]=r;for(var i=2;i<l;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74169:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>r,toc:()=>i});var n=t(87462),m=(t(67294),t(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6392\u5e8f"],date:"2/7/2023"},s=void 0,r={permalink:"/algorithm/1604.\u8b66\u544a\u4e00\u5c0f\u65f6\u5185\u4f7f\u7528\u76f8\u540c\u5458\u5de5\u5361\u5927\u4e8e\u7b49\u4e8e\u4e09\u6b21\u7684\u4eba",source:"@site/algorithm/1604.\u8b66\u544a\u4e00\u5c0f\u65f6\u5185\u4f7f\u7528\u76f8\u540c\u5458\u5de5\u5361\u5927\u4e8e\u7b49\u4e8e\u4e09\u6b21\u7684\u4eba.md",title:"1604.\u8b66\u544a\u4e00\u5c0f\u65f6\u5185\u4f7f\u7528\u76f8\u540c\u5458\u5de5\u5361\u5927\u4e8e\u7b49\u4e8e\u4e09\u6b21\u7684\u4eba",description:"1\u3001\u9898\u5e72",date:"2023-02-07T00:00:00.000Z",formattedDate:"2023\u5e742\u67087\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:3.715,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6392\u5e8f"],date:"2/7/2023"},nextItem:{title:"2331.\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c",permalink:"/algorithm/2331.\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function k(a){let{components:e,...l}=a;return(0,m.kt)("wrapper",(0,n.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,m.kt)("p",null,"\u529b\u6263\u516c\u53f8\u7684\u5458\u5de5\u90fd\u4f7f\u7528\u5458\u5de5\u5361\u6765\u5f00\u529e\u516c\u5ba4\u7684\u95e8\u3002\u6bcf\u5f53\u4e00\u4e2a\u5458\u5de5\u4f7f\u7528\u4e00\u6b21\u4ed6\u7684\u5458\u5de5\u5361\uff0c\u5b89\u4fdd\u7cfb\u7edf\u4f1a\u8bb0\u5f55\u4e0b\u5458\u5de5\u7684\u540d\u5b57\u548c\u4f7f\u7528\u65f6\u95f4\u3002\u5982\u679c\u4e00\u4e2a\u5458\u5de5\u5728\u4e00\u5c0f\u65f6\u65f6\u95f4\u5185\u4f7f\u7528\u5458\u5de5\u5361\u7684\u6b21\u6570\u5927\u4e8e\u7b49\u4e8e\u4e09\u6b21\uff0c\u8fd9\u4e2a\u7cfb\u7edf\u4f1a\u81ea\u52a8\u53d1\u5e03\u4e00\u4e2a ",(0,m.kt)("strong",null,"\u8b66\u544a"),"\xa0\u3002"),(0,m.kt)("p",null,"\u7ed9\u4f60\u5b57\u7b26\u4e32\u6570\u7ec4\xa0",(0,m.kt)("code",null,"keyName"),"\xa0\u548c\xa0",(0,m.kt)("code",null,"keyTime")," \uff0c\u5176\u4e2d\xa0",(0,m.kt)("code",null,"[keyName[i], keyTime[i]]"),"\xa0\u5bf9\u5e94\u4e00\u4e2a\u4eba\u7684\u540d\u5b57\u548c\u4ed6\u5728\xa0",(0,m.kt)("strong",null,"\u67d0\u4e00\u5929")," \u5185\u4f7f\u7528\u5458\u5de5\u5361\u7684\u65f6\u95f4\u3002"),(0,m.kt)("p",null,"\u4f7f\u7528\u65f6\u95f4\u7684\u683c\u5f0f\u662f ",(0,m.kt)("strong",null,"24\u5c0f\u65f6\u5236"),"\xa0\uff0c\u5f62\u5982",(0,m.kt)("strong",null,'\xa0"HH:MM"'),"\xa0\uff0c\u6bd4\u65b9\u8bf4\xa0",(0,m.kt)("code",null,'"23:51"')," \u548c\xa0",(0,m.kt)("code",null,'"09:49"'),"\xa0\u3002"),(0,m.kt)("p",null,"\u8bf7\u4f60\u8fd4\u56de\u53bb\u91cd\u540e\u7684\u6536\u5230\u7cfb\u7edf\u8b66\u544a\u7684\u5458\u5de5\u540d\u5b57\uff0c\u5c06\u5b83\u4eec\u6309 ",(0,m.kt)("strong",null,"\u5b57\u5178\u5e8f"),(0,m.kt)("strong",null,"\u5347\u5e8f\xa0"),"\u6392\u5e8f\u540e\u8fd4\u56de\u3002"),(0,m.kt)("p",null,"\u8bf7\u6ce8\u610f\xa0",(0,m.kt)("code",null,'"10:00"')," - ",(0,m.kt)("code",null,'"11:00"'),"\xa0\u89c6\u4e3a\u4e00\u4e2a\u5c0f\u65f6\u65f6\u95f4\u8303\u56f4\u5185\uff0c\u800c\xa0",(0,m.kt)("code",null,'"23:51"')," - ",(0,m.kt)("code",null,'"00:10"'),"\xa0\u4e0d\u88ab\u89c6\u4e3a\u4e00\u5c0f\u65f6\u5185\uff0c\u56e0\u4e3a\u7cfb\u7edf\u8bb0\u5f55\u7684\u662f\u67d0\u4e00\u5929\u5185\u7684\u4f7f\u7528\u60c5\u51b5\u3002"),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),'keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]',(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),'["daniel"]',(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u89e3\u91ca\uff1a"),'"daniel" \u5728\u4e00\u5c0f\u65f6\u5185\u4f7f\u7528\u4e86 3 \u6b21\u5458\u5de5\u5361\uff08"10:00"\uff0c"10:40"\uff0c"11:00"\uff09\u3002',(0,m.kt)("br",null)),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),'keyName = ["alice","alice","alice","bob","bob","bob","bob"], keyTime = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]',(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),'["bob"]',(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u89e3\u91ca\uff1a"),'"bob" \u5728\u4e00\u5c0f\u65f6\u5185\u4f7f\u7528\u4e86 3 \u6b21\u5458\u5de5\u5361\uff08"21:00"\uff0c"21:20"\uff0c"21:30"\uff09\u3002',(0,m.kt)("br",null)),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),'keyName = ["john","john","john"], keyTime = ["23:58","23:59","00:01"]',(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[]",(0,m.kt)("br",null)),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 4\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),'keyName = ["leslie","leslie","leslie","clare","clare","clare","clare"], keyTime = ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]',(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),'["clare","leslie"]',(0,m.kt)("br",null)),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,m.kt)("ul",null,(0,m.kt)("li",null,(0,m.kt)("code",null,"1 <= keyName.length, keyTime.length <= 10",(0,m.kt)("sup",null,"5"))),(0,m.kt)("li",null,(0,m.kt)("code",null,"keyName.length == keyTime.length")),(0,m.kt)("li",null,(0,m.kt)("code",null,"keyTime")," \u683c\u5f0f\u4e3a\xa0",(0,m.kt)("strong",null,'"HH:MM"\xa0'),"\u3002"),(0,m.kt)("li",null,"\u4fdd\u8bc1\xa0",(0,m.kt)("code",null,"[keyName[i], keyTime[i]]"),"\xa0\u5f62\u6210\u7684\u4e8c\u5143\u5bf9\xa0",(0,m.kt)("strong",null,"\u4e92\u4e0d\u76f8\u540c\xa0"),"\u3002"),(0,m.kt)("li",null,(0,m.kt)("code",null,"1 <= keyName[i].length <= 10")),(0,m.kt)("li",null,(0,m.kt)("code",null,"keyName[i]"),"\xa0\u53ea\u5305\u542b\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u3002")),(0,m.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,m.kt)("p",null,"\u54c8\u5e0c\u8868\u5b58\u50a8\u5458\u5de5\u59d3\u540d\uff08\u952e\uff09\u548c\u5f00\u95e8\u65f6\u95f4\u6570\u7ec4\uff08\u503c\uff09\uff0c\u65f6\u95f4\u8f6c\u4e3a\u5206\u949f\u6570\u5e76\u6392\u5e8f\uff0c\u6700\u540e\u68c0\u67e5\u6bcf\u4e2a\u5458\u5de5\u7684\u5f00\u95e8\u65f6\u95f4\u662f\u5426\u8fdd\u89c4"),(0,m.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function alertNames(names: string[], times: string[]): string[] {\n    const map = new Map<string, number[]>();\n    for (let i = 0; i < names.length; i++) {\n        if (!map.has(names[i])) map.set(names[i], []);\n        map.get(names[i]).push(60 * (+times[i].slice(0, 2)) + +(times[i].slice(3)));\n    }\n\n    const ans = [];\n    for (const [name, minutes] of map) {\n        if (minutes.length < 3) continue;\n\n        minutes.sort((a, b) => a - b);\n        for (let i = 0; i < minutes.length - 2 && ans.at(-1) !== name; i++) {\n            if (minutes[i + 2] - minutes[i] <= 60) ans.push(name);\n        }\n    }\n\n    return ans.sort();\n};\n")),(0,m.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n*logn)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("li",{parentName:"ul"},"\u7a7a\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,m.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"image.png",src:t(76130).Z,width:"1364",height:"396"})),(0,m.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,m.kt)("p",null,"\u4e8c\u7ef4\u6570\u7ec4\u5b58\u50a8\u5458\u5de5\u59d3\u540d\u548c\u5f00\u95e8\u65f6\u95f4\uff0c\u65f6\u95f4\u8f6c\u4e3a\u5206\u949f\u6570\uff0c\u5bf9\u4e8c\u7ef4\u6570\u7ec4\u6309\u59d3\u540d\u548c\u5206\u949f\u6570\u5347\u5e8f\u6392\u5e8f\uff0c\u6700\u540e\u68c0\u67e5\u6bcf\u4e2a\u5458\u5de5\u7684\u5f00\u95e8\u65f6\u95f4\u662f\u5426\u8fdd\u89c4"),(0,m.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function alertNames(names: string[], times: string[]): string[] {\n    const matrix: [string, number][] = names.map((n, i) => [n, 60 * (+times[i].slice(0, 2)) + +(times[i].slice(3))]);\n    matrix.sort((a, b) => {\n        if (a[0] === b[0]) return a[1] - b[1];\n        return a[0] > b[0] ? 1 : -1;\n    });\n\n    const ans = [];\n\n    for (let i = 0; i < matrix.length - 2; i++) {\n        if (matrix[i + 2][0] !== matrix[i][0] || matrix[i][0] === ans.at(-1)) continue;\n        if (matrix[i + 2][1] - matrix[i][1] <= 60) ans.push(matrix[i][0]);\n    }\n\n    return ans;\n};\n")),(0,m.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n*logn)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("li",{parentName:"ul"},"\u7a7a\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,m.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"image.png",src:t(98977).Z,width:"1366",height:"402"})))}k.isMDXComponent=!0},76130:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/1675735128-MfQliN-image-37294adcecc173648aea31242786d8bb.png"},98977:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/1675735169-nnPmeT-image-2ebb0b2b7c67b13019ef38bf4b74de83.png"}}]);