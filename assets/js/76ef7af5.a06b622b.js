"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[67406],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=u(n),d=r,s=k["".concat(o,".").concat(d)]||k[d]||m[d]||l;return n?a.createElement(s,i(i({ref:t},c),{},{components:n})):a.createElement(s,i({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(15882),r=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u5b57\u7b26\u4e32\u5339\u914d"],date:"2021/12/22"},i=void 0,p={permalink:"/algorithm/686.\u91cd\u590d\u53e0\u52a0\u5b57\u7b26\u4e32\u5339\u914d",source:"@site/algorithm/686.\u91cd\u590d\u53e0\u52a0\u5b57\u7b26\u4e32\u5339\u914d.md",title:"686.\u91cd\u590d\u53e0\u52a0\u5b57\u7b26\u4e32\u5339\u914d",description:"1\u3001\u9898\u5e72",date:"2021-12-22T00:00:00.000Z",formattedDate:"2021\u5e7412\u670822\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u5b57\u7b26\u4e32\u5339\u914d",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32\u5339\u914d"}],readingTime:2.85,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u5b57\u7b26\u4e32\u5339\u914d"],date:"2021/12/22"},prevItem:{title:"1044.\u6700\u957f\u91cd\u590d\u5b50\u4e32",permalink:"/algorithm/1044.\u6700\u957f\u91cd\u590d\u5b50\u4e32"},nextItem:{title:"1154.\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929",permalink:"/algorithm/1154.\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929"}},o={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u89e3\u6cd51\uff1a\u62fc\u63a5\u518d\u5224\u65ad\u662f\u5426\u5305\u542b",id:"\u89e3\u6cd51\u62fc\u63a5\u518d\u5224\u65ad\u662f\u5426\u5305\u542b",level:3},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u89e3\u6cd52\uff1a\u6b63\u5219\u66ff\u6362\u518d\u5224\u65ad\u5934\u5c3e",id:"\u89e3\u6cd52\u6b63\u5219\u66ff\u6362\u518d\u5224\u65ad\u5934\u5c3e",level:3},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c-1",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-1",level:3}],c={toc:u};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"\uff0c\u5bfb\u627e\u91cd\u590d\u53e0\u52a0\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u6700\u5c0f\u6b21\u6570\uff0c\u4f7f\u5f97\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u6210\u4e3a\u53e0\u52a0\u540e\u7684\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u5b50\u4e32\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},'"abc"'),"\xa0\u91cd\u590d\u53e0\u52a0 0 \u6b21\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"\uff0c\u91cd\u590d\u53e0\u52a0 1 \u6b21\u662f\xa0",(0,r.kt)("inlineCode",{parentName:"p"},'"abc"'),"\uff0c\u91cd\u590d\u53e0\u52a0 2 \u6b21\u662f\xa0",(0,r.kt)("inlineCode",{parentName:"p"},'"abcabc"'),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' a = "abcd", b = "cdabcdab"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 3",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' a \u91cd\u590d\u53e0\u52a0\u4e09\u904d\u540e\u4e3a "ab',(0,r.kt)("strong",{parentName:"p"},"cdabcdab"),'cd", \u6b64\u65f6 b \u662f\u5176\u5b50\u4e32\u3002',(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' a = "a", b = "aa"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' a = "a", b = "a"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' a = "abc", b = "wxyz"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","-","1",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= a.length <= 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= b.length <= 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"b")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),(0,r.kt)("h3",{id:"\u89e3\u6cd51\u62fc\u63a5\u518d\u5224\u65ad\u662f\u5426\u5305\u542b"},"\u89e3\u6cd51\uff1a\u62fc\u63a5\u518d\u5224\u65ad\u662f\u5426\u5305\u542b"),(0,r.kt)("p",null,"\u76f4\u63a5\u62fc\u63a5\u5b57\u7b26\u4e32",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u5e76\u5224\u65ad",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u662f\u5426\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"\uff0c\u800c\u62fc\u63a5\u6b21\u6570\u5c31\u662f\u9898\u76ee\u7684\u89e3\uff1b\u62fc\u63a5\u6b21\u6570\u6700\u5c11\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Math.ceil(b.length / a.length)"),"\u6b21\uff0c\u5982\u679c\u4e0d\u884c\u5c31\u518d\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u518d\u4e0d\u884c\u5c31\u8bf4\u660e\u89e3\u4e0d\u5b58\u5728\u5e94\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,r.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1640143246-qqPhoo-1.png?2",alt:"1.png"})),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var repeatedStringMatch = function (a, b) {\n    const count = Math.ceil(b.length / a.length);\n    if (a.repeat(count).includes(b)) return count;\n    if (a.repeat(count + 1).includes(b)) return count + 1;\n    return -1;\n};\n")),(0,r.kt)("h3",{id:"\u89e3\u6cd52\u6b63\u5219\u66ff\u6362\u518d\u5224\u65ad\u5934\u5c3e"},"\u89e3\u6cd52\uff1a\u6b63\u5219\u66ff\u6362\u518d\u5224\u65ad\u5934\u5c3e"),(0,r.kt)("p",null,"\u5148\u5c06\u5b57\u7b26\u4e32",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u90fd\u66ff\u6362\u6389\u5e76\u8bb0\u5f55\u5339\u914d\u6570\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"\uff0c\u7136\u540e\u518d\u5224\u65ad\u5b57\u7b26\u4e32",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"\u5269\u4e0b\u7684\u5934\u548c\u5c3e\u662f\u5426\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u7684\u5934\u5c3e\u76f8\u540c\u5373\u53ef\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u5934\u548c\u5c3e\uff0c\u8bf4\u660e\u6b63\u597d\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"li"},"count"),"\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"a"),"\u62fc\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u6709\u5934\u6216\u5c3e\uff0c\u8bf4\u660e\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"li"},"count+1"),"\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"a"),"\u62fc\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u5934\u53c8\u6709\u5c3e\uff0c\u8bf4\u660e\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"li"},"count+2"),"\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"a"),"\u62fc\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u90fd\u4e0d\u662f\uff0c\u8bf4\u660e\u89e3\u4e0d\u5b58\u5728\u5e94\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"li"},"-1"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6700\u5f00\u59cb\u7528\u7684\u662f\u89e3\u6cd52\uff0c\u8e29\u4e862\u4e2a\u5751\u8d39\u4e86\u4e0d\u5c11\u65f6\u95f4\u3002\u901a\u8fc7\u4e4b\u540e\u60f3\u5199\u4e2a\u6b63\u7ecf\u7b97\u6cd5\uff0c\u7ed3\u679c\u5199\u51fa\u4e86\u89e3\u6cd51\u3002\n\u518d\u4e4b\u540e\u3002\u3002\u3002\u653e\u5f03\u4e86\u3002\u3002\u3002\u505a\u4e2aAPI\u6218\u58eb\u5427 \ud83d\ude02")),(0,r.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c-1"},"\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1640144080-MRgauL-1.png?3",alt:"1.png"})),(0,r.kt)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var repeatedStringMatch = function (a, b) {\n    let count = 0;\n    b = b.replace(new RegExp(a, 'g'), () => (count++, '$'));\n\n    const s = ''.padEnd(count, '$');\n    if (b === s) return count;\n    if ((a + s).includes(b) || (s + a).includes(b)) return count + 1;\n    if ((a + s + a).includes(b)) return count + 2;\n    return -1;\n};\n")))}k.isMDXComponent=!0}}]);