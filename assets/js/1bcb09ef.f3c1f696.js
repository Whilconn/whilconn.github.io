"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[25360],{3905:(t,l,n)=>{n.d(l,{Zo:()=>c,kt:()=>m});var e=n(67294);function r(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function o(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function u(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?o(Object(n),!0).forEach((function(l){r(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function s(t,l){if(null==t)return{};var n,e,r=function(t,l){if(null==t)return{};var n,e,r={},o=Object.keys(t);for(e=0;e<o.length;e++)n=o[e],l.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)n=o[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=e.createContext({}),k=function(t){var l=e.useContext(a),n=l;return t&&(n="function"==typeof t?t(l):u(u({},l),t)),n},c=function(t){var l=k(t.components);return e.createElement(a.Provider,{value:l},t.children)},i="mdxType",p={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},g=e.forwardRef((function(t,l){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),i=k(n),g=r,m=i["".concat(a,".").concat(g)]||i[g]||p[g]||o;return n?e.createElement(m,u(u({ref:l},c),{},{components:n})):e.createElement(m,u({ref:l},c))}));function m(t,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var o=n.length,u=new Array(o);u[0]=g;var s={};for(var a in l)hasOwnProperty.call(l,a)&&(s[a]=l[a]);s.originalType=t,s[i]="string"==typeof t?t:r,u[1]=s;for(var k=2;k<o;k++)u[k]=n[k];return e.createElement.apply(null,u)}return e.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45770:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>u,default:()=>i,frontMatter:()=>o,metadata:()=>s,toc:()=>k});var e=n(87462),r=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32"],date:"2023/1/3"},u=void 0,s={permalink:"/algorithm/2023/01/03/2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e",source:"@site/algorithm/2023/01/03/2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e.md",title:"2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e",description:"1\u3001\u9898\u5e72",date:"2023-01-03T00:00:00.000Z",formattedDate:"2023\u5e741\u67083\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.22,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32"],date:"2023/1/3"},prevItem:{title:"1802.\u6709\u754c\u6570\u7ec4\u4e2d\u6307\u5b9a\u4e0b\u6807\u5904\u7684\u6700\u5927\u503c",permalink:"/algorithm/2023/01/04/1802.\u6709\u754c\u6570\u7ec4\u4e2d\u6307\u5b9a\u4e0b\u6807\u5904\u7684\u6700\u5927\u503c"},nextItem:{title:"1801.\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570",permalink:"/algorithm/2023/01/02/1801.\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570"}},a={authorsImageUrls:[void 0]},k=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],c={toc:k};function i(t){let{components:l,...n}=t;return(0,r.kt)("wrapper",(0,e.Z)({},c,n,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u53e5\u5b50\u662f\u7531\u82e5\u5e72 ",(0,r.kt)("strong",null,"token")," \u7ec4\u6210\u7684\u4e00\u4e2a\u5217\u8868\uff0c",(0,r.kt)("strong",null,"token")," \u95f4\u7528 ",(0,r.kt)("strong",null,"\u5355\u4e2a")," \u7a7a\u683c\u5206\u9694\uff0c\u53e5\u5b50\u6ca1\u6709\u524d\u5bfc\u6216\u5c3e\u968f\u7a7a\u683c\u3002\u6bcf\u4e2a token \u8981\u4e48\u662f\u4e00\u4e2a\u7531\u6570\u5b57 ",(0,r.kt)("code",null,"0-9")," \u7ec4\u6210\u7684\u4e0d\u542b\u524d\u5bfc\u96f6\u7684 ",(0,r.kt)("strong",null,"\u6b63\u6574\u6570"),"\xa0\uff0c\u8981\u4e48\u662f\u4e00\u4e2a\u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210\u7684 ",(0,r.kt)("strong",null,"\u5355\u8bcd")," \u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u793a\u4f8b\uff0c",(0,r.kt)("code",null,'"a puppy has 2 eyes 4 legs"')," \u662f\u4e00\u4e2a\u7531 7 \u4e2a token \u7ec4\u6210\u7684\u53e5\u5b50\uff1a",(0,r.kt)("code",null,'"2"')," \u548c ",(0,r.kt)("code",null,'"4"')," \u662f\u6570\u5b57\uff0c\u5176\u4ed6\u50cf\xa0",(0,r.kt)("code",null,'"puppy"')," \u8fd9\u6837\u7684 tokens \u5c5e\u4e8e\u5355\u8bcd\u3002")),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u8868\u793a\u53e5\u5b50\u7684\u5b57\u7b26\u4e32 ",(0,r.kt)("code",null,"s")," \uff0c\u4f60\u9700\u8981\u68c0\u67e5 ",(0,r.kt)("code",null,"s")," \u4e2d\u7684 ",(0,r.kt)("strong",null,"\u5168\u90e8")," \u6570\u5b57\u662f\u5426\u4ece\u5de6\u5230\u53f3\u4e25\u683c\u9012\u589e\uff08\u5373\uff0c\u9664\u4e86\u6700\u540e\u4e00\u4e2a\u6570\u5b57\uff0c",(0,r.kt)("code",null,"s")," \u4e2d\u7684 ",(0,r.kt)("strong",null,"\u6bcf\u4e2a")," \u6570\u5b57\u90fd\u4e25\u683c\u5c0f\u4e8e\u5b83 ",(0,r.kt)("strong",null,"\u53f3\u4fa7")," \u7684\u6570\u5b57\uff09\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6ee1\u8db3\u9898\u76ee\u8981\u6c42\uff0c\u8fd4\u56de ",(0,r.kt)("code",null,"true"),"\xa0\uff0c\u5426\u5219\uff0c\u8fd4\u56de",(0,r.kt)("em",null," "),(0,r.kt)("code",null,"false")," \u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"example-1",src:"https://assets.leetcode.com/uploads/2021/09/30/example1.png"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\uff1a1, 3, 4, 6, 12 \u3002",(0,r.kt)("br",null),"\u8fd9\u4e9b\u6570\u5b57\u662f\u6309\u4ece\u5de6\u5230\u53f3\u4e25\u683c\u9012\u589e\u7684 1 < 3 < 4 < 6 < 12 \u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "hello world 5 x 5"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\uff1a",(0,r.kt)("em",null,(0,r.kt)("strong",null,"5")),", ",(0,r.kt)("strong",null,(0,r.kt)("em",null,"5"))," \u3002\u8fd9\u4e9b\u6570\u5b57\u4e0d\u662f\u4e25\u683c\u9012\u589e\u7684\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"example-3",src:"https://assets.leetcode.com/uploads/2021/09/30/example3.png"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"s \u4e2d\u7684\u6570\u5b57\u662f\uff1a7, ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"51")),", ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"50")),", 60 \u3002\u8fd9\u4e9b\u6570\u5b57\u4e0d\u662f\u4e25\u683c\u9012\u589e\u7684\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 4\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "4 5 11 26"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"s \u4e2d\u7684\u6570\u5b57\u662f\uff1a4, 5, 11, 26 \u3002",(0,r.kt)("br",null),"\u8fd9\u4e9b\u6570\u5b57\u662f\u6309\u4ece\u5de6\u5230\u53f3\u4e25\u683c\u9012\u589e\u7684\uff1a4 < 5 < 11 < 26 \u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"3 <= s.length <= 200")),(0,r.kt)("li",null,(0,r.kt)("code",null,"s")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u3001\u7a7a\u683c\u548c\u6570\u5b57 ",(0,r.kt)("code",null,"0")," \u5230 ",(0,r.kt)("code",null,"9")," \u7ec4\u6210\uff08\u5305\u542b ",(0,r.kt)("code",null,"0")," \u548c ",(0,r.kt)("code",null,"9"),"\uff09"),(0,r.kt)("li",null,(0,r.kt)("code",null,"s")," \u4e2d\u6570\u5b57 token \u7684\u6570\u76ee\u5728 ",(0,r.kt)("code",null,"2")," \u548c ",(0,r.kt)("code",null,"100")," \u4e4b\u95f4\uff08\u5305\u542b ",(0,r.kt)("code",null,"2")," \u548c ",(0,r.kt)("code",null,"100"),"\uff09"),(0,r.kt)("li",null,(0,r.kt)("code",null,"s")," \u4e2d\u7684 token \u4e4b\u95f4\u7531\u5355\u4e2a\u7a7a\u683c\u5206\u9694"),(0,r.kt)("li",null,(0,r.kt)("code",null,"s")," \u4e2d\u81f3\u5c11\u6709 ",(0,r.kt)("strong",null,"\u4e24\u4e2a")," \u6570\u5b57"),(0,r.kt)("li",null,(0,r.kt)("code",null,"s")," \u4e2d\u7684\u6bcf\u4e2a\u6570\u5b57\u90fd\u662f\u4e00\u4e2a ",(0,r.kt)("strong",null,"\u5c0f\u4e8e")," ",(0,r.kt)("code",null,"100")," \u7684 ",(0,r.kt)("strong",null,"\u6b63")," \u6570\uff0c\u4e14\u4e0d\u542b\u524d\u5bfc\u96f6"),(0,r.kt)("li",null,(0,r.kt)("code",null,"s")," \u4e0d\u542b\u524d\u5bfc\u6216\u5c3e\u968f\u7a7a\u683c")),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u6b63\u5219\u63d0\u53d6\u6240\u6709\u6570\u5b57\uff0c\u518d\u904d\u5386\u6240\u6709\u6570\u5b57\u662f\u5426\u5355\u8c03\u9012\u589e"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function areNumbersAscending(s: string): boolean {\n    return s.split(/[^\\d]+/).filter(Boolean).every((n, i, nums) => +n > (+nums[i - 1] || -1));\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function areNumbersAscending(s: string): boolean {\n    const nums = s.match(/\\d+/g);\n    return nums.every((n, i) => +n > (+nums[i - 1] || -1));\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1672676232-WamHuT-image.png",alt:"image.png"})))}i.isMDXComponent=!0}}]);