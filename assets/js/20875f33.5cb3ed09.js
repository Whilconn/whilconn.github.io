"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[7497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=m(n),c=a,g=s["".concat(i,".").concat(c)]||s[c]||u[c]||l;return n?r.createElement(g,p(p({ref:t},k),{},{components:n})):r.createElement(g,p({ref:t},k))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:a,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32"],date:"2023/1/3"},p=void 0,o={permalink:"/algorithm/2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e",source:"@site/algorithm/2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e.md",title:"2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e",description:"1\u3001\u9898\u5e72",date:"2023-01-03T00:00:00.000Z",formattedDate:"2023\u5e741\u67083\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.12,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32"],date:"2023/1/3"},prevItem:{title:"1802.\u6709\u754c\u6570\u7ec4\u4e2d\u6307\u5b9a\u4e0b\u6807\u5904\u7684\u6700\u5927\u503c",permalink:"/algorithm/1802.\u6709\u754c\u6570\u7ec4\u4e2d\u6307\u5b9a\u4e0b\u6807\u5904\u7684\u6700\u5927\u503c"},nextItem:{title:"1801.\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570",permalink:"/algorithm/1801.\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570"}},i={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],k={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u53e5\u5b50\u662f\u7531\u82e5\u5e72 ",(0,a.kt)("strong",{parentName:"p"},"token")," \u7ec4\u6210\u7684\u4e00\u4e2a\u5217\u8868\uff0c",(0,a.kt)("strong",{parentName:"p"},"token")," \u95f4\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u5355\u4e2a")," \u7a7a\u683c\u5206\u9694\uff0c\u53e5\u5b50\u6ca1\u6709\u524d\u5bfc\u6216\u5c3e\u968f\u7a7a\u683c\u3002\u6bcf\u4e2a token \u8981\u4e48\u662f\u4e00\u4e2a\u7531\u6570\u5b57 ",(0,a.kt)("inlineCode",{parentName:"p"},"0-9")," \u7ec4\u6210\u7684\u4e0d\u542b\u524d\u5bfc\u96f6\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6b63\u6574\u6570"),"\xa0\uff0c\u8981\u4e48\u662f\u4e00\u4e2a\u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u5355\u8bcd")," \u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u793a\u4f8b\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},'"a puppy has 2 eyes 4 legs"')," \u662f\u4e00\u4e2a\u7531 7 \u4e2a token \u7ec4\u6210\u7684\u53e5\u5b50\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'"2"')," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},'"4"')," \u662f\u6570\u5b57\uff0c\u5176\u4ed6\u50cf\xa0",(0,a.kt)("inlineCode",{parentName:"li"},'"puppy"')," \u8fd9\u6837\u7684 tokens \u5c5e\u4e8e\u5355\u8bcd\u3002")),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u8868\u793a\u53e5\u5b50\u7684\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \uff0c\u4f60\u9700\u8981\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u5168\u90e8")," \u6570\u5b57\u662f\u5426\u4ece\u5de6\u5230\u53f3\u4e25\u683c\u9012\u589e\uff08\u5373\uff0c\u9664\u4e86\u6700\u540e\u4e00\u4e2a\u6570\u5b57\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a")," \u6570\u5b57\u90fd\u4e25\u683c\u5c0f\u4e8e\u5b83 ",(0,a.kt)("strong",{parentName:"p"},"\u53f3\u4fa7")," \u7684\u6570\u5b57\uff09\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6ee1\u8db3\u9898\u76ee\u8981\u6c42\uff0c\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\xa0\uff0c\u5426\u5219\uff0c\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/09/30/example1.png",alt:"example-1"}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," true",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\uff1a1, 3, 4, 6, 12 \u3002",(0,a.kt)("br",null),"\n\u8fd9\u4e9b\u6570\u5b57\u662f\u6309\u4ece\u5de6\u5230\u53f3\u4e25\u683c\u9012\u589e\u7684 1 < 3 < 4 < 6 < 12 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "hello world 5 x 5"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," false",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\uff1a",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"5")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"5"))," \u3002\u8fd9\u4e9b\u6570\u5b57\u4e0d\u662f\u4e25\u683c\u9012\u589e\u7684\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/09/30/example3.png",alt:"example-3"}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," false",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," s \u4e2d\u7684\u6570\u5b57\u662f\uff1a7, ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"51")),", ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"50")),", 60 \u3002\u8fd9\u4e9b\u6570\u5b57\u4e0d\u662f\u4e25\u683c\u9012\u589e\u7684\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "4 5 11 26"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," true",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," s \u4e2d\u7684\u6570\u5b57\u662f\uff1a4, 5, 11, 26 \u3002",(0,a.kt)("br",null),"\n\u8fd9\u4e9b\u6570\u5b57\u662f\u6309\u4ece\u5de6\u5230\u53f3\u4e25\u683c\u9012\u589e\u7684\uff1a4 < 5 < 11 < 26 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3 <= s.length <= 200")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u3001\u7a7a\u683c\u548c\u6570\u5b57 ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"9")," \u7ec4\u6210\uff08\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"9"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u6570\u5b57 token \u7684\u6570\u76ee\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"100")," \u4e4b\u95f4\uff08\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"100"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u7684 token \u4e4b\u95f4\u7531\u5355\u4e2a\u7a7a\u683c\u5206\u9694"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u81f3\u5c11\u6709 ",(0,a.kt)("strong",{parentName:"li"},"\u4e24\u4e2a")," \u6570\u5b57"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u7684\u6bcf\u4e2a\u6570\u5b57\u90fd\u662f\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"li"},"\u5c0f\u4e8e")," ",(0,a.kt)("inlineCode",{parentName:"li"},"100")," \u7684 ",(0,a.kt)("strong",{parentName:"li"},"\u6b63")," \u6570\uff0c\u4e14\u4e0d\u542b\u524d\u5bfc\u96f6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e0d\u542b\u524d\u5bfc\u6216\u5c3e\u968f\u7a7a\u683c")),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("p",null,"\u6b63\u5219\u63d0\u53d6\u6240\u6709\u6570\u5b57\uff0c\u518d\u904d\u5386\u6240\u6709\u6570\u5b57\u662f\u5426\u5355\u8c03\u9012\u589e"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function areNumbersAscending(s: string): boolean {\n    return s.split(/[^\\d]+/).filter(Boolean).every((n, i, nums) => +n > (+nums[i - 1] || -1));\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function areNumbersAscending(s: string): boolean {\n    const nums = s.match(/\\d+/g);\n    return nums.every((n, i) => +n > (+nums[i - 1] || -1));\n};\n")),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1672676232-WamHuT-image.png",alt:"image.png"})))}s.isMDXComponent=!0}}]);