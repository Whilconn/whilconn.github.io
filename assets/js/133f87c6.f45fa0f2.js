"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[51019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=l,d=m["".concat(u,".").concat(k)]||m[k]||s[k]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u4e8c\u5206\u67e5\u627e","\u540e\u7f00\u6570\u7ec4","\u6ed1\u52a8\u7a97\u53e3","\u54c8\u5e0c\u51fd\u6570","\u6eda\u52a8\u54c8\u5e0c"],date:new Date("2021-12-23T00:00:00.000Z")},i=void 0,o={permalink:"/algorithm/2021/12/23/1044.\u6700\u957f\u91cd\u590d\u5b50\u4e32",source:"@site/algorithm/2021/12/23/1044.\u6700\u957f\u91cd\u590d\u5b50\u4e32.md",title:"1044.\u6700\u957f\u91cd\u590d\u5b50\u4e32",description:"1\u3001\u9898\u5e72",date:"2021-12-23T00:00:00.000Z",formattedDate:"2021\u5e7412\u670823\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u4e8c\u5206\u67e5\u627e",permalink:"/algorithm/tags/\u4e8c\u5206\u67e5\u627e"},{label:"\u540e\u7f00\u6570\u7ec4",permalink:"/algorithm/tags/\u540e\u7f00\u6570\u7ec4"},{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/algorithm/tags/\u6ed1\u52a8\u7a97\u53e3"},{label:"\u54c8\u5e0c\u51fd\u6570",permalink:"/algorithm/tags/\u54c8\u5e0c\u51fd\u6570"},{label:"\u6eda\u52a8\u54c8\u5e0c",permalink:"/algorithm/tags/\u6eda\u52a8\u54c8\u5e0c"}],readingTime:4.3,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u4e8c\u5206\u67e5\u627e","\u540e\u7f00\u6570\u7ec4","\u6ed1\u52a8\u7a97\u53e3","\u54c8\u5e0c\u51fd\u6570","\u6eda\u52a8\u54c8\u5e0c"],date:"2021-12-23T00:00:00.000Z"},prevItem:{title:"1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee",permalink:"/algorithm/2021/12/24/1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee"},nextItem:{title:"686.\u91cd\u590d\u53e0\u52a0\u5b57\u7b26\u4e32\u5339\u914d",permalink:"/algorithm/2021/12/22/686.\u91cd\u590d\u53e0\u52a0\u5b57\u7b26\u4e32\u5339\u914d"}},u={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u6267\u884c\u7ed3\u679c",id:"2\u6267\u884c\u7ed3\u679c",level:2},{value:"3\u3001\u89e3\u9898\u601d\u8def",id:"3\u89e3\u9898\u601d\u8def",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u4f18\u5316",id:"5\u4f18\u5316",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,l.kt)("code",null,"s")," \uff0c\u8003\u8651\u5176\u6240\u6709 ",(0,l.kt)("em",null,"\u91cd\u590d\u5b50\u4e32")," \uff1a\u5373\xa0",(0,l.kt)("code",null,"s")," \u7684\uff08\u8fde\u7eed\uff09\u5b50\u4e32\uff0c\u5728 ",(0,l.kt)("code",null,"s")," \u4e2d\u51fa\u73b0 2 \u6b21\u6216\u66f4\u591a\u6b21\u3002\u8fd9\u4e9b\u51fa\u73b0\u4e4b\u95f4\u53ef\u80fd\u5b58\u5728\u91cd\u53e0\u3002"),(0,l.kt)("p",null,"\u8fd4\u56de ",(0,l.kt)("strong",null,"\u4efb\u610f\u4e00\u4e2a")," \u53ef\u80fd\u5177\u6709\u6700\u957f\u957f\u5ea6\u7684\u91cd\u590d\u5b50\u4e32\u3002\u5982\u679c ",(0,l.kt)("code",null,"s")," \u4e0d\u542b\u91cd\u590d\u5b50\u4e32\uff0c\u90a3\u4e48\u7b54\u6848\u4e3a ",(0,l.kt)("code",null,'""')," \u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "banana"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"ana"',(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "abcd"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),'""',(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"2 <= s.length <= 3 * 10",(0,l.kt)("sup",null,"4"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"s")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5377\u4e0d\u52a8\u4e86\uff0c\u6ed1\u52a8\u7a97\u53e3\u4ea4\u4e86")),(0,l.kt)("h2",{id:"2\u6267\u884c\u7ed3\u679c"},"2\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.png",src:n(52642).Z,width:"1358",height:"488"})),(0,l.kt)("h2",{id:"3\u89e3\u9898\u601d\u8def"},"3\u3001\u89e3\u9898\u601d\u8def"),(0,l.kt)("p",null,"\u4f7f\u7528\u6ed1\u52a8\u7a97\u53e3\u5904\u7406\uff0c\u5982\u679c\u5f53\u524d\u7a97\u53e3\u5b57\u7b26\u4e32\u957f\u5ea6\u5927\u4e8e\u5df2\u627e\u5230\u7684\u6700\u957f\u5b50\u4e32\u957f\u5ea6\uff0c\u4e14\u5728\u539f\u5b57\u7b26\u4e32\u7684\u672b\u5c3e\u80fd\u627e\u5230\u53e6\u4e00\u4e2a\u7a97\u53e3\u5b57\u7b26\u4e32\uff0c\u5219\u5f53\u524d\u7a97\u53e3\u5b57\u7b26\u4e32\u53ef\u4ee5\u66f4\u65b0\u4e3a\u6700\u957f\u5b50\u4e32\uff1b\u91cd\u590d\u8be5\u52a8\u4f5c\u76f4\u81f3\u7a97\u53e3\u95ed\u5408\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u957f\u91cd\u590d\u5b50\u4e32\u8bb0\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"maxStr"),"\uff0c\u7a97\u53e3\u5de6\u53f3\u8fb9\u754c\u5206\u522b\u8bb0\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"i"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"j"),"\uff0c\u7a97\u53e3\u5185\u7684\u5b57\u7b26\u4e32\u8bb0\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"curStr")),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u7a97\u53e3",(0,l.kt)("inlineCode",{parentName:"li"},"curStr"),"\u7684\u957f\u5ea6\u5927\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"maxStr"),"\u6216\u8005\u53f3\u8fb9\u754c",(0,l.kt)("inlineCode",{parentName:"li"},"j"),"\u8d8a\u754c\u65f6\uff0c\u7a97\u53e3\u5de6\u8fb9\u754c\u53f3\u79fb",(0,l.kt)("inlineCode",{parentName:"li"},"i++"),"\uff0c\u5e76\u79fb\u9664\u7a97\u53e3",(0,l.kt)("inlineCode",{parentName:"li"},"curStr"),"\u8d77\u59cb\u4f4d\u7f6e\u7684\u5b57\u6bcd"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u7a97\u53e3",(0,l.kt)("inlineCode",{parentName:"li"},"curStr"),"\u7684\u957f\u5ea6\u4e0d\u5927\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"maxStr"),"\u4e14\u53f3\u8fb9\u754c",(0,l.kt)("inlineCode",{parentName:"li"},"j"),"\u672a\u8d8a\u754c\u65f6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u7a97\u53e3",(0,l.kt)("inlineCode",{parentName:"li"},"curStr"),"\u672b\u5c3e\u8ffd\u52a0\u53f3\u8fb9\u754c\u4e4b\u540e\u7684\u5b57\u6bcd",(0,l.kt)("inlineCode",{parentName:"li"},"s[j]"),"\uff0c\u5e76\u5c06\u7a97\u53e3\u53f3\u8fb9\u754c\u53f3\u79fb",(0,l.kt)("inlineCode",{parentName:"li"},"j++")),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u7a97\u53e3",(0,l.kt)("inlineCode",{parentName:"li"},"curStr"),"\u7684\u957f\u5ea6\u5927\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"maxStr"),"\u4e14\u5728\u5b57\u7b26\u4e32",(0,l.kt)("inlineCode",{parentName:"li"},"s"),"\u5c3e\u90e8\u627e\u5230\u53e6\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"curStr"),"\uff0c\u5219\u66f4\u65b0",(0,l.kt)("inlineCode",{parentName:"li"},"maxStr")))),(0,l.kt)("li",{parentName:"ul"},"\u6700\u540e\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"maxStr"))),(0,l.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestDupSubstring = function (s) {\n  let maxStr = '',curStr = '';\n  for (let i = 0, j = 0; i < s.length; i++) {\n    curStr = curStr.replace(s[i - 1], '');\n    while (curStr.length <= maxStr.length && j < s.length) {\n      curStr += s[j], j++;\n      if (curStr.length > maxStr.length && s.lastIndexOf(curStr) > i) maxStr = curStr;\n    }\n  }\n  return maxStr;\n};\n")),(0,l.kt)("h2",{id:"5\u4f18\u5316"},"5\u3001\u4f18\u5316"),(0,l.kt)("p",null,"\u8bc4\u8bba\u533a\u6709\u540c\u5b66\u8868\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"Java"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"C++"),"\u7528\u8fd9\u4e2a\u601d\u8def\u4f1a\u8d85\u65f6\uff0c\u53ef\u80fd\u6709\u51e0\u4e2a\u65b9\u9762\u539f\u56e0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1\u3001\u53ef\u80fd",(0,l.kt)("inlineCode",{parentName:"li"},"Node.js"),"\u7684\u4e0b\u9650\u6bd4\u8f83\u4f4e\uff08\u53d7\u9650\u4e8e\u8bed\u8a00\u6267\u884c\u6548\u7387\uff09\uff0c\u6240\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"Node.js"),"\u80fd\u8fc7\u5176\u4ed6\u4e0d\u884c"),(0,l.kt)("li",{parentName:"ul"},"2\u3001\u5b57\u7b26\u4e32\u64cd\u4f5c\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"li"},"replace"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"+="),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Java"),"\u8fd9\u91cc\u5e94\u8be5\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"StringBuilder"),"\u4f18\u5316\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"C++"),"\u4e0d\u592a\u6e05\u695a\u80fd\u5426\u4f18\u5316"),(0,l.kt)("li",{parentName:"ul"},"3\u3001\u5b57\u7b26\u4e32\u7d22\u5f15\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"li"},"lastIndexOf"),"\u6ca1\u6709\u9650\u5236\u8fb9\u754c\uff0c\u6700\u574f\u60c5\u51b5\u4e0b\u4f1a\u5b8c\u6574\u904d\u5386\u539f\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u7a97\u53e3\u626b\u8fc7\u7684\u5b57\u7b26\u4e32\u5b9e\u9645\u662f\u4e0d\u9700\u8981\u904d\u5386\u7684\uff1b\u6539\u6210\u4e0b\u9762\u8fd9\u6837\u9650\u5236\u67e5\u627e\u8d77\u70b9\u80fd\u5feb700ms~1000ms\u5de6\u53f3")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"}," if (curStr.length > maxStr.length && s.indexOf(curStr, i + 1) > -1) maxStr = curStr;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd8\u53ef\u4ee5\u8003\u8651\u624b\u5199\u7d22\u5f15\u65b9\u6cd5\uff0c\u53e6\u5916\u5f15\u5165\u54c8\u5e0c\u8868\u505a\u7f13\u5b58\u907f\u514d\u91cd\u590d\u904d\u5386\uff1b\u5c1d\u8bd5\u4e86\u4e0b\uff0c\u7528\u4f8b64\uff0830000\u4e2av\u7684\u5b57\u7b26\u4e32\uff09\u8d85\u65f6\uff0c\u8fd9\u4e2a\u65f6\u5019\u7b80\u5355\u7684\u7f13\u5b58\u7b56\u7565\u662f\u5b8c\u5168\u5931\u6548\u7684\u3002")),(0,l.kt)("p",null,"\u9644\u4e0a\u4f18\u5316\u540e\u7684\u5b8c\u6574\u4ee3\u7801\uff0c\u53ea\u9700\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"lastIndexOf")," \u90a3\u4e00\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestDupSubstring = function (s) {\n    let maxStr = '', curStr = '';\n    for (let i = 0, j = 0; i < s.length; i++) {\n        curStr = curStr.replace(s[i - 1], '');\n        while (curStr.length <= maxStr.length && j < s.length) {\n            curStr += s[j], j++;\n            if (curStr.length > maxStr.length && s.indexOf(curStr, i + 1) > -1) maxStr = curStr;\n        }\n    }\n    return maxStr;\n};\n")),(0,l.kt)("p",null,"\u6574\u4f53\u8c03\u6574\uff0c\u66f4\u7b80\u6d01\u7684\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestDupSubstring = function (s) {\n    let maxStr = '';\n    for (let i = 0, j = 0; i < s.length; i++) {\n        while (j - i <= maxStr.length && j < s.length && ++j) {\n            if (j - i <= maxStr.length) continue;\n            const curStr = s.slice(i, j);\n            if (s.indexOf(curStr, i + 1) > -1) maxStr = curStr;\n        }\n    }\n    return maxStr;\n};\n")))}m.isMDXComponent=!0},52642:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02b4c2efec0f314e60faf239dc8c65ac-7a8240de8eec12f96fca3ae3540b158b.png"}}]);