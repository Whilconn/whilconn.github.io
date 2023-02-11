"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[31955],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),p=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return l.createElement(u.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),k=p(n),m=r,d=k["".concat(u,".").concat(m)]||k[m]||s[m]||a;return n?l.createElement(d,o(o({ref:e},c),{},{components:n})):l.createElement(d,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[k]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52687:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:"2021/11/17"},o=void 0,i={permalink:"/algorithm/2021/11/17/318.\u6700\u5927\u5355\u8bcd\u957f\u5ea6\u4e58\u79ef",source:"@site/algorithm/2021/11/17/318.\u6700\u5927\u5355\u8bcd\u957f\u5ea6\u4e58\u79ef.md",title:"318.\u6700\u5927\u5355\u8bcd\u957f\u5ea6\u4e58\u79ef",description:"1\u3001\u9898\u5e72",date:"2021-11-17T00:00:00.000Z",formattedDate:"2021\u5e7411\u670817\u65e5",tags:[{label:"\u4f4d\u8fd0\u7b97",permalink:"/algorithm/tags/\u4f4d\u8fd0\u7b97"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:4.99,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:"2021/11/17"},prevItem:{title:"786.\u7b2c K \u4e2a\u6700\u5c0f\u7684\u7d20\u6570\u5206\u6570",permalink:"/algorithm/2021/11/29/786.\u7b2c K \u4e2a\u6700\u5c0f\u7684\u7d20\u6570\u5206\u6570"},nextItem:{title:"520.\u68c0\u6d4b\u5927\u5199\u5b57\u6bcd",permalink:"/algorithm/2021/11/13/520.\u68c0\u6d4b\u5927\u5199\u5b57\u6bcd"}},u={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u601d\u8def",id:"\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:3}],c={toc:p};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\xa0",(0,r.kt)("code",null,"words")," \uff0c\u627e\u51fa\u5e76\u8fd4\u56de ",(0,r.kt)("code",null,"length(words[i]) * length(words[j])"),"\xa0\u7684\u6700\u5927\u503c\uff0c\u5e76\u4e14\u8fd9\u4e24\u4e2a\u5355\u8bcd\u4e0d\u542b\u6709\u516c\u5171\u5b57\u6bcd\u3002\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u4e24\u4e2a\u5355\u8bcd\uff0c\u8fd4\u56de ",(0,r.kt)("code",null,"0")," \u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b\xa01\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"words = ",(0,r.kt)("code",null,'["abcw","baz","foo","bar","xtfn","abcdef"]'),(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),(0,r.kt)("code",null,"16 ",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca")),(0,r.kt)("strong",null,"\uff1a"),(0,r.kt)("code",null,"\u8fd9\u4e24\u4e2a\u5355\u8bcd\u4e3a",(0,r.kt)("strong",null," "),'"abcw", "xtfn"'),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"words = ",(0,r.kt)("code",null,'["a","ab","abc","d","cd","bcd","abcd"]'),(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),(0,r.kt)("code",null,"4 ",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca")),(0,r.kt)("strong",null,"\uff1a"),"\u8fd9\u4e24\u4e2a\u5355\u8bcd\u4e3a ",(0,r.kt)("code",null,'"ab", "cd"'),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"words = ",(0,r.kt)("code",null,'["a","aa","aaa","aaaa"]'),(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),(0,r.kt)("code",null,"0 ",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca")),(0,r.kt)("strong",null,"\uff1a"),(0,r.kt)("code",null,"\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u4e24\u4e2a\u5355\u8bcd\u3002"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"2 <= words.length <= 1000")),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= words[i].length <= 1000")),(0,r.kt)("li",null,(0,r.kt)("code",null,"words[i]"),"\xa0\u4ec5\u5305\u542b\u5c0f\u5199\u5b57\u6bcd")),(0,r.kt)("h3",{id:"\u601d\u8def"},"\u601d\u8def"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u66b4\u529b\u89e3\u6cd5\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u66b4\u529b\u89e3\u6cd5\u662f\u505a\u4e2a\u5d4c\u5957\u5faa\u73af\u904d\u5386\u6240\u6709words\uff0c\u5224\u65ad\u4e24\u4e2aword\u662f\u5426\u6709\u76f8\u540c\u5b57\u6bcd\u9700\u8981\u518d\u904d\u5386word\u4e2d\u7684\u5b57\u7b26"),(0,r.kt)("li",{parentName:"ul"},"\u6309\u66b4\u529b\u89e3\u6cd5\u4f30\u7b97\u65f6\u95f4\u590d\u6742\u5ea6\u5927\u6982\u662fO(n^3)\uff0cn\u53d61000\u7684\u8bdd\uff0c\u8d85\u65f6\u57fa\u672c\u6ca1\u8dd1\u4e86"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u4e0a2\u5c42\u5d4c\u5957\u5faa\u73af\u57fa\u672c\u65e0\u6cd5\u907f\u514d\uff0c\u4e5f\u5c31\u662f\u8bf4\u65f6\u95f4\u590d\u6742\u5ea6\u81f3\u5c11\u662fO(n^2)\uff0c\u90a3\u5c31\u60f3\u529e\u6cd5\u518d\u51cf\u5c11\u4e00\u5c42\u904d\u5386"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c1\u5c42\u4f18\u5316-\u5b57\u5178\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9898\u76ee\u4e2d\u8bf4\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u6bcf\u4e2a\u5355\u8bcd\u53ea\u5305\u542b\u5c0f\u5199\u5b57\u6bcd"),"\uff0c\u901a\u5e38\u4f1a\u60f3\u5230\u628a\u5355\u8bcd\u8f6c\u6362\u6210\u4ee5\u5b57\u6bcd\u4e3akey\u7684\u54c8\u5e0c\u8868\u6216\u8005\u6570\u7ec4\u5b57\u5178\u6765\u505a\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e\u9898\u610f\uff0c\u4f7f\u7528\u6570\u7ec4\u8868\u793a\u5355\u8bcd\u65f6\uff0c\u53ea\u8981\u5c06\u5b57\u6bcd\u5bf9\u5e94ASCII\u7801\u987a\u5e8f\u4f5c\u4e3a\u7d22\u5f15\uff0c\u503c\u4e3abool\u7c7b\u578b\u5373\u53ef"),(0,r.kt)("li",{parentName:"ul"},"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5355\u8bcd",(0,r.kt)("inlineCode",{parentName:"li"},"abc"),"\u53ef\u4ee5\u8868\u793a\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]"),"\uff0c\u5355\u8bcd",(0,r.kt)("inlineCode",{parentName:"li"},"a"),"\u53ef\u4ee5\u8868\u793a\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]")),(0,r.kt)("li",{parentName:"ul"},"\u5224\u65ad\u4e24\u4e2a\u5355\u8bcd\u662f\u5426\u5305\u542b\u76f8\u540c\u5b57\u6bcd\u9700\u8981\u505a\u4e00\u6b21\u904d\u5386\uff0c\u7531\u4e8e\u6570\u7ec4\u957f\u5ea6\u6052\u5b9a\u4e3a26\uff0c\u56e0\u6b64\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a\u5e38\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u81f3\u6b64\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u5df2\u7ecf\u53ef\u4ee5\u8fbe\u5230O(n^2)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c2\u5c42\u4f18\u5316-\u4f4d\u8fd0\u7b97\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u4e0a\uff0c\u5982\u679c\u7528\u4e8c\u8fdb\u5236\u6574\u6570\u6765\u8868\u793a\u5355\u8bcd\u4f1a\u66f4\u7b80\u6d01 ",(0,r.kt)("inlineCode",{parentName:"li"},"abc"),"\u53ef\u4ee5\u8868\u793a\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"0b111"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"a"),"\u53ef\u4ee5\u8868\u793a\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"0b1")),(0,r.kt)("li",{parentName:"ul"},"\u800c\u4e14\u5224\u65ad\u4e24\u4e2a\u5355\u8bcd\u662f\u5426\u6709\u76f8\u540c\u5b57\u6bcd\u53ea\u9700\u8981\u505a\u4e00\u6b21&\u8fd0\u7b97\u800c\u4e0d\u9700\u8981\u904d\u5386\u6570\u7ec4\uff0c&\u8fd0\u7b97\u7ed3\u679c\u4e3a0\u5219\u8868\u793a\u6ca1\u6709\u76f8\u540c\u5b57\u6bcd"),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u4f18\u5316\u4e0d\u80fd\u51cf\u5c11\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u4f46\u662f\u53ef\u4ee5\u51cf\u5c11\u6267\u884c\u65f6\u95f4"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u9898\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1\u3001\u904d\u5386words\uff0c\u5c06words\u4e2d\u7684\u5355\u8bcd\u8f6c\u6362\u4e3a\u957f\u5ea6\u4e3a2\u7684\u6570\u7ec4",(0,r.kt)("inlineCode",{parentName:"li"},"[bit,word.length]"),"\uff0c\u6570\u7ec4\u4e24\u4e2a\u5143\u7d20\u5206\u522b\u8868\u793a\u5355\u8bcd\u7684\u4e8c\u8fdb\u5236\u548c\u5355\u8bcd\u7684\u957f\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"2\u3001\u518d\u6b21\u904d\u5386words\uff0c\u628a\u5f53\u524d\u5355\u8bcd\u4e0e\u5269\u4f59\u5355\u8bcd\u505a\u5339\u914d\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u76f8\u540c\u5355\u8bcd\uff0c\u5219\u8ba1\u7b97\u957f\u5ea6\u4e58\u79ef"),(0,r.kt)("li",{parentName:"ul"},"3\u3001\u8fd4\u56de\u957f\u5ea6\u4e58\u79ef\u7684\u6700\u5927\u503c\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fdb\u4e00\u6b65\u4f18\u5316\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9898\u89e3\u4e2d\u8bf4\u5230\u5355\u8bcd\u8f6c\u6210\u4e8c\u8fdb\u5236\u4e4b\u540e\u53ef\u80fd\u4f1a\u76f8\u7b49\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528\u54c8\u5e0c\u8868\u505a\u8fdb\u4e00\u6b65\u4f18\u5316\uff08\u7b54\u9898\u7684\u65f6\u5019\u6ca1\u60f3\u5230\uff0c\u53e6\u5916\u8003\u8651\u5230\u5355\u8bcd\u7ec4\u5408\u95ee\u9898\uff0c26\u4e2a\u5b57\u6bcd\u7ec4\u62101000\u4e2a\u5355\u8bcd\uff0c\u6700\u574f\u60c5\u51b5\u4e0b\u8f6c\u6210\u4e8c\u8fdb\u5236\u4e4b\u540e\u53ef\u80fd\u6ca1\u6709\u76f8\u7b49\u7684\u60c5\u51b5\uff0c\u56e0\u6b64\u5c31\u4e0d\u5199\u4e86\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u7b54\u9898\u7684\u65f6\u5019\u53d1\u73b0\u8fd0\u7b97\u6b21\u6570\u8fbe\u5230\u4e00\u5b9a\u91cf\u7ea7\u4e4b\u540e\uff0c\u4f4d\u8fd0\u7b97\u7684\u901f\u5ea6\u6bd4\u4e58\u65b9\u8fd0\u7b97\u66f4\u5feb\u4e9b\uff08\u5c5e\u4e8e\u81ea\u5df1\u6316\u5751\u4e86\uff0c\u8fd9\u91cc\u8017\u65f6\u5dee\u8ddd\u80fd\u8fbe\u523010+\u500d\uff0c\u5177\u4f53\u53c2\u8003\u9644\u5f55\uff09")))),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var maxProduct = function (words) {\n    const CODEA = 'a'.charCodeAt(0);\n    for (let i = 0; i < words.length; i++) {\n        let bit = 0;\n        for (let j = 0; j < words[i].length; j++) {\n            const p = words[i].charCodeAt(j) - CODEA;\n            bit = bit | (1 << p);\n        }\n        words[i] = [bit, words[i].length];\n    }\n\n    let res = 0;\n    for (let i = 0; i < words.length; i++) {\n        for (let j = i + 1; j < words.length; j++) {\n            if ((words[i][0] & words[j][0]) === 0) {\n                res = Math.max(res, words[i][1] * words[j][1]);\n            }\n        }\n    }\n\n    return res;\n};\n")),(0,r.kt)("h3",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const K = 1e6;\nconst MOD = 10;\n\nconsole.time('\u4e58\u65b9');\nlet n = 0;\nfor (let i = 0; i < K; i++) {\n  n = n | (2 ** (i % MOD));\n}\nconsole.timeEnd('\u4e58\u65b9');\n\nconsole.time('\u4f4d\u8fd0\u7b97');\nn = 0;\nfor (let i = 0; i < K; i++) {\n  n = n | (1 << (i % MOD));\n}\nconsole.timeEnd('\u4f4d\u8fd0\u7b97');\n// \u6d4f\u89c8\u5668\u4e0b\u6267\u884c\u7ed3\u679c\n// \u4e58\u65b9: 78.853759765625 ms\n// \u4f4d\u8fd0\u7b97: 6.093994140625 ms\n")))}k.isMDXComponent=!0}}]);