"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[12941],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var i=t(59496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=i.createContext({}),o=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=o(e.components);return i.createElement(p.Provider,{value:n},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=o(t),m=l,d=k["".concat(p,".").concat(m)]||k[m]||c[m]||a;return t?i.createElement(d,r(r({ref:n},u),{},{components:t})):i.createElement(d,r({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[k]="string"==typeof e?e:l,r[1]=s;for(var o=2;o<a;o++)r[o]=t[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var i=t(15882),l=(t(59496),t(49613));const a={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],date:"2022/2/18"},r=void 0,s={permalink:"/algorithm/\u5251\u6307 Offer II 096.\u5b57\u7b26\u4e32\u4ea4\u7ec7",source:"@site/algorithm/\u5251\u6307 Offer II 096.\u5b57\u7b26\u4e32\u4ea4\u7ec7.md",title:"\u5251\u6307 Offer II 096.\u5b57\u7b26\u4e32\u4ea4\u7ec7",description:"1\u3001\u9898\u5e72",date:"2022-02-18T00:00:00.000Z",formattedDate:"2022\u5e742\u670818\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:7.925,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],date:"2022/2/18"},prevItem:{title:"\u5251\u6307 Offer II 087.\u590d\u539f IP ",permalink:"/algorithm/\u5251\u6307 Offer II 087.\u590d\u539f IP "},nextItem:{title:"1719.\u91cd\u6784\u4e00\u68f5\u6811\u7684\u65b9\u6848\u6570",permalink:"/algorithm/1719.\u91cd\u6784\u4e00\u68f5\u6811\u7684\u65b9\u6848\u6570"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u56de\u6eaf+\u8bb0\u5fc6\u5316",id:"2\u89e3\u6cd51-\u56de\u6eaf\u8bb0\u5fc6\u5316",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd52-\u4e09\u6307\u9488+\u6a21\u62df\u56de\u6eaf+\u8bb0\u5fc6\u5316",id:"5\u89e3\u6cd52-\u4e09\u6307\u9488\u6a21\u62df\u56de\u6eaf\u8bb0\u5fc6\u5316",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u6267\u884c\u7ed3\u679c",id:"7\u6267\u884c\u7ed3\u679c",level:2},{value:"8\u3001\u89e3\u6cd53-BFS+\u53bb\u91cd",id:"8\u89e3\u6cd53-bfs\u53bb\u91cd",level:2},{value:"9\u3001\u4ee3\u7801",id:"9\u4ee3\u7801",level:2},{value:"10\u3001\u6267\u884c\u7ed3\u679c",id:"10\u6267\u884c\u7ed3\u679c",level:2},{value:"11\u3001\u89e3\u6cd54-\u52a8\u6001\u89c4\u5212",id:"11\u89e3\u6cd54-\u52a8\u6001\u89c4\u5212",level:2},{value:"12\u3001\u4ee3\u7801",id:"12\u4ee3\u7801",level:2},{value:"13\u3001\u6267\u884c\u7ed3\u679c",id:"13\u6267\u884c\u7ed3\u679c",level:2}],u={toc:o};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e09\u4e2a\u5b57\u7b26\u4e32\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"s1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"s2"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"s3"),"\uff0c\u8bf7\u5224\u65ad\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"s3"),"\xa0\u80fd\u4e0d\u80fd\u7531\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"s1"),"\xa0\u548c\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"s2"),"\xa0",(0,l.kt)("strong",{parentName:"p"},"\u4ea4\u7ec7\uff08\u4ea4\u9519\uff09"),"\xa0\u7ec4\u6210\u3002"),(0,l.kt)("p",null,"\u4e24\u4e2a\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," ",(0,l.kt)("strong",{parentName:"p"},"\u4ea4\u7ec7"),"\xa0\u7684\u5b9a\u4e49\u4e0e\u8fc7\u7a0b\u5982\u4e0b\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5b57\u7b26\u4e32\u90fd\u4f1a\u88ab\u5206\u5272\u6210\u82e5\u5e72 ",(0,l.kt)("strong",{parentName:"p"},"\u975e\u7a7a")," \u5b50\u5b57\u7b26\u4e32\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s = s1 + s2 + ... + sn")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"t = t1 + t2 + ... + tm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"|n - m| <= 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4ea4\u7ec7")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"s1 + t1 + s2 + t2 + s3 + t3 + ...")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"t1 + s1 + t2 + s2 + t3 + s3 + ..."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a"),(0,l.kt)("inlineCode",{parentName:"p"},"a + b")," \u610f\u5473\u7740\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"b")," \u8fde\u63a5\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg",alt:null}),(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," true",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," false",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s1 = "", s2 = "", s3 = ""',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," true",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= s1.length, s2.length <= 100")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= s3.length <= 200")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"s2"),"\u3001\u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"s3")," \u90fd\u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 97\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/interleaving-string/"},"https://leetcode-cn.com/problems/interleaving-string/")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u904d\u5386\u89e3\u9898\u9700\u8981\u7528\u52303\u4e2a\u6307\u9488\uff0c\u5206\u522b\u5bf9\u5e94\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"s2"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"s3"),"\u3002\u5b98\u89e3\u8bf4\u53cc\u6307\u9488\u4e0d\u53ef\u884c\u5e94\u8be5\u53ea\u8003\u8651\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"s1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"s2")," \u7684\u6307\u9488\u4e14\u6ca1\u6709\u8003\u8651\u6307\u9488\u91cd\u7f6e\u7684\u60c5\u51b5\uff0c\u5b9e\u9645\u53ef\u4ee5\u501f\u52a9\u6307\u9488\u91cd\u7f6e\u8fdb\u884c\u89e3\u9898\uff0c\u8be6\u60c5\u89c1\u89e3\u6cd52\u3002")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u56de\u6eaf\u8bb0\u5fc6\u5316"},"2\u3001\u89e3\u6cd51-\u56de\u6eaf+\u8bb0\u5fc6\u5316"),(0,l.kt)("p",null,"\u56de\u6eaf\u8fc7\u7a0b\u53ef\u4ee5\u7406\u89e3\u4e3a\u540c\u65f6\u6309\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"s2"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"s3")," \u6b65\u8fdb\uff0c\u82e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"s1")," \u5f53\u524d\u5b57\u7b26\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"s3")," \u5f53\u524d\u5b57\u7b26\u76f8\u7b49\u5219 ",(0,l.kt)("inlineCode",{parentName:"p"},"s1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"s3")," \u7684\u4e0b\u6807\u540c\u65f6\u52a01\uff0c\u82e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"s2")," \u5f53\u524d\u5b57\u7b26\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"s3")," \u5f53\u524d\u5b57\u7b26\u76f8\u7b49\u5219 ",(0,l.kt)("inlineCode",{parentName:"p"},"s2")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"s3")," \u7684\u4e0b\u6807\u540c\u65f6\u52a01\uff0c\u82e5\u6700\u7ec83\u4e2a\u5b57\u7b26\u4e32\u80fd\u8d70\u5230\u5b57\u7b26\u4e32\u672b\u5c3e\u8bf4\u660e\u7ed3\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5176\u4e2d\u8bb0\u5fc6\u5316\u662f\u5c06\u5df2\u8bbf\u95ee\u8fc7\u7684\u8def\u5f84\u4f7f\u7528\u54c8\u5e0c\u96c6\u5408\u5b58\u50a8\uff0c\u82e5\u540e\u7eed\u8bbf\u95ee\u5230\u5df2\u8bbf\u95ee\u8fc7\u7684\u8def\u5f84\uff0c\u5219\u76f4\u63a5\u9000\u51fa\u5f53\u524d\u9012\u5f52\u3002"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var isInterleave = function (s1, s2, s3) {\n    if (s1.length + s2.length !== s3.length) return false;\n\n    const visited = new Set();\n    let res = false;\n    function backtrace(i1, i2, i3) {\n        if (i1 === s1.length && i2 === s2.length && i3 === s3.length) return res = true;\n        if (visited.has(`${i1}-${i2}-${i3}`)) return false;\n        visited.add(`${i1}-${i2}-${i3}`);\n\n        if (s1[i1] === s3[i3]) backtrace(i1 + 1, i2, i3 + 1);\n        if (s2[i2] === s3[i3]) backtrace(i1, i2 + 1, i3 + 1);\n    }\n\n    backtrace(0, 0, 0);\n\n    return res;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1645168475-ydzPUS-image.png",alt:"image.png"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u89e3\u6cd52-\u4e09\u6307\u9488\u6a21\u62df\u56de\u6eaf\u8bb0\u5fc6\u5316"},"5\u3001\u89e3\u6cd52-\u4e09\u6307\u9488+\u6a21\u62df\u56de\u6eaf+\u8bb0\u5fc6\u5316"),(0,l.kt)("p",null,"\u672c\u8d28\u4e0a\u4e5f\u662f\u56de\u6eaf+\u8bb0\u5fc6\u5316\uff0c\u53ea\u662f\u4f7f\u7528\u4e09\u6307\u9488\u904d\u5386\u6a21\u62df\u56de\u6eaf\u8fc7\u7a0b\uff0c\u8fd9\u662f\u4e2a\u975e\u5e38\u89c4\u89e3\u6cd5\u968f\u4fbf\u770b\u770b\u5c31\u597d\u3002"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4e09\u6307\u9488\u904d\u5386\u6a21\u62df\u56de\u6eaf\u7684\u5927\u4f53\u65b9\u6848\u662f\uff1a\u904d\u5386 ",(0,l.kt)("inlineCode",{parentName:"p"},"s3"),"\uff0c\u82e5\u9047\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"s1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"s2")," \u90fd\u53ef\u9009\u7684\u60c5\u51b5\u5219\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"s1"),"\uff0c\u5e76\u4f7f\u7528\u6808\u5b58\u50a8\u5f53\u524d3\u4e2a\u6307\u9488\u4f5c\u4e3a\u5feb\u7167\uff1b\u82e5\u540e\u7eed\u904d\u5386\u65e0\u6cd5\u7ee7\u7eed\u4e0b\u53bb\u4e14\u6808\u4e0d\u4e3a\u7a7a\u5219\u5f39\u51fa\u6808\u9876\u5feb\u7167\uff0c\u91cd\u7f6e3\u4e2a\u6307\u9488\u5e76\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"s2")," \u7ee7\u7eed\u904d\u5386\uff1b\u82e5\u540e\u7eed\u904d\u5386\u65e0\u6cd5\u7ee7\u7eed\u4e14\u6808\u4e3a\u7a7a\uff0c\u5219\u7ed3\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5176\u4e2d\u8bb0\u5fc6\u5316\u662f\u5c06\u5df2\u8bbf\u95ee\u8fc7\u7684\u8def\u5f84\u4f7f\u7528\u54c8\u5e0c\u96c6\u5408\u5b58\u50a8\uff0c\u82e5\u540e\u7eed\u8bbf\u95ee\u5230\u5df2\u8bbf\u95ee\u8fc7\u7684\u8def\u5f84\u5219\u770b\u6808\u662f\u5426\u4e3a\u7a7a\uff0c\u6808\u4e3a\u7a7a\u5219\u76f4\u63a5\u9000\u51fa\u5f53\u524d\u9012\u5f52\uff0c\u6808\u4e0d\u4e3a\u7a7a\u5219\u5f39\u51fa\u6808\u9876\u5feb\u7167\u5e76\u91cd\u7f6e\u6307\u9488\u3002"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var isInterleave = function (s1, s2, s3) {\n    if (s1.length + s2.length !== s3.length) return false;\n\n    let i1 = -1, i2 = -1, useStack = false;\n    const stack = [], visited = new Set();\n\n    for (let i = 0; i < s3.length; i++) {\n        if (s1[i1 + 1] === s3[i] && s2[i2 + 1] === s3[i]) {\n            if (!useStack) stack.push([i, i1, i2]), i1 += 1;\n            else i2 += 1, useStack = false;\n        }\n        else if (s1[i1 + 1] === s3[i]) i1 += 1;\n        else if (s2[i2 + 1] === s3[i]) i2 += 1;\n        else {\n            if (!stack.length) return false;\n            [i, i1, i2] = stack.pop(), i -= 1, useStack = true;\n            continue;\n        }\n\n        if (visited.has(`${i}-${i1}-${i2}`)) {\n            if (!stack.length) return false;\n            [i, i1, i2] = stack.pop(), i -= 1, useStack = true;\n        }\n        else visited.add(`${i}-${i1}-${i2}`);\n    }\n\n    return true;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"7\u6267\u884c\u7ed3\u679c"},"7\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 72 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 45.4 MB")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"8\u89e3\u6cd53-bfs\u53bb\u91cd"},"8\u3001\u89e3\u6cd53-BFS+\u53bb\u91cd"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u975e\u9012\u5f52BFS\u89e3\u9898\uff0c\u5927\u4f53\u601d\u8def\u662f\uff1a\u5916\u5c42\u904d\u5386\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s3"),"\uff0c\u5185\u5c42\u904d\u5386\u5f53\u524d\u53ef\u9009\u62e9\u7684\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"s1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"s2")," \u7684\u4e0b\u6807\u7ec4\u5408\uff0c\u5e76\u4e14\u628a\u4e0b\u4e00\u5c42\u53ef\u9009\u62e9\u7684\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"s1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"s2")," \u7684\u4e0b\u6807\u7ec4\u5408\u6dfb\u52a0\u5230\u4e0b\u4e00\u5c42\u7684\u961f\u5217\u4e2d\uff0c\u5982\u6b64\u904d\u5386\u6240\u6709\u53ef\u884c\u7ec4\u5408\u76f4\u81f3\u7ed3\u675f\uff0c\u82e5\u6700\u7ec8\u961f\u5217\u4e0d\u4e3a\u7a7a\u5219\u7ed3\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5176\u4e2d\u6dfb\u52a0\u4e0b\u6807\u7ec4\u5408\u5230\u961f\u5217\u4e2d\u65f6\u4e00\u5b9a\u8981\u53bb\u91cd\uff0c\u5426\u5219\u4f1a\u8d85\u65f6\u6216\u5185\u5b58\u6ea2\u51fa\uff0c\u53bb\u91cd\u53ef\u4ee5\u4f7f\u7528\u53cc\u5c42 ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," \u6216\u8005\u5b57\u7b26\u4e32\u54c8\u5e0c\u96c6\u5408\u3002"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"9\u4ee3\u7801"},"9\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// BFS+\u53cc\u5c42map\u53bb\u91cd\nvar isInterleave = function (s1, s2, s3) {\n    if (s1.length + s2.length !== s3.length) return false;\n\n    let choices = [[-1, -1]];\n    for (let i = 0; i < s3.length; i++) {\n        const nextChoices = [], map = {};\n        for (const [i1, i2] of choices) {\n            if (s3[i] === s1[i1 + 1] && (!map[i1 + 1] || !map[i1 + 1][i2])) {\n                nextChoices.push([i1 + 1, i2]);\n                map[i1 + 1] ? (map[i1 + 1][i2] = 1) : (map[i1 + 1] = { [i2]: 1 });\n            }\n            if (s3[i] === s2[i2 + 1] && (!map[i1] || !map[i1][i2 + 1])) {\n                nextChoices.push([i1, i2 + 1]);\n                map[i1] ? (map[i1][i2 + 1] = 1) : (map[i1] = { [i2 + 1]: 1 });\n            }\n        }\n        choices = nextChoices;\n    }\n\n    return choices.length > 0;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// BFS+\u5b57\u7b26\u4e32\u54c8\u5e0c\u96c6\u5408\u53bb\u91cd\nvar isInterleave = function (s1, s2, s3) {\n    if (s1.length + s2.length !== s3.length) return false;\n\n    let choices = [[-1, -1]];\n    for (let i = 0; i < s3.length; i++) {\n        const nextChoices = [], set = new Set();\n        for (const [i1, i2] of choices) {\n            if (s3[i] === s1[i1 + 1] && !set.has(`${i1 + 1},${i2}`)) {\n                nextChoices.push([i1 + 1, i2]);\n                set.add(`${i1 + 1},${i2}`);\n            }\n            if (s3[i] === s2[i2 + 1] && !set.has(`${i1},${i2 + 1}`)) {\n                nextChoices.push([i1, i2 + 1]);\n                set.add(`${i1},${i2 + 1}`);\n            }\n        }\n        choices = nextChoices;\n    }\n\n    return choices.length > 0;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"10\u6267\u884c\u7ed3\u679c"},"10\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 72 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 48.3 MB")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"11\u89e3\u6cd54-\u52a8\u6001\u89c4\u5212"},"11\u3001\u89e3\u6cd54-\u52a8\u6001\u89c4\u5212"),(0,l.kt)("p",null,"\u5b98\u89e3\u548c\u5176\u4ed6\u4f18\u79c0\u9898\u89e3\u5bf9\u4e8e\u52a8\u6001\u89c4\u5212\u89e3\u6cd5\u5df2\u7ecf\u8bf4\u5f97\u5f88\u6e05\u695a\u4e86\uff0c\u8fd9\u91cc\u5c31\u8d34\u4e0b\u4ee3\u7801\u548c\u6267\u884c\u7ed3\u679c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"12\u4ee3\u7801"},"12\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var isInterleave = function (s1, s2, s3) {\n    if (s1.length + s2.length !== s3.length) return false;\n\n    const dp = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(true));\n    for (let i = 1; i < dp.length; i++) dp[i][0] = dp[i - 1][0] && s3[i - 1] === s1[i - 1];\n    for (let j = 1; j < dp[0].length; j++) dp[0][j] = dp[0][j - 1] && s3[j - 1] === s2[j - 1];\n\n    for (let i = 1; i < dp.length; i++) {\n        for (let j = 1; j < dp[i].length; j++) {\n            dp[i][j] = (dp[i - 1][j] && s3[i + j - 1] === s1[i - 1]) || (dp[i][j - 1] && s3[i + j - 1] === s2[j - 1]);\n        }\n    }\n\n    return dp[s1.length][s2.length];\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"13\u6267\u884c\u7ed3\u679c"},"13\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 92 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 47.7 MB")))}k.isMDXComponent=!0}}]);