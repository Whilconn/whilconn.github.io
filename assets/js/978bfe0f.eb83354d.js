"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[63148],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,d=u["".concat(o,".").concat(m)]||u[m]||k[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(15882),l=(n(59496),n(49613));const a={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:"2022/2/18"},i=void 0,s={permalink:"/algorithm/\u5251\u6307 Offer II 087.\u590d\u539f IP ",source:"@site/algorithm/\u5251\u6307 Offer II 087.\u590d\u539f IP .md",title:"\u5251\u6307 Offer II 087.\u590d\u539f IP ",description:"1\u3001\u9898\u5e72",date:"2022-02-18T00:00:00.000Z",formattedDate:"2022\u5e742\u670818\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"}],readingTime:4.005,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:"2022/2/18"},prevItem:{title:"97.\u4ea4\u9519\u5b57\u7b26\u4e32",permalink:"/algorithm/97.\u4ea4\u9519\u5b57\u7b26\u4e32"},nextItem:{title:"\u5251\u6307 Offer II 096.\u5b57\u7b26\u4e32\u4ea4\u7ec7",permalink:"/algorithm/\u5251\u6307 Offer II 096.\u5b57\u7b26\u4e32\u4ea4\u7ec7"}},o={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u6cd51-\u5d4c\u5957\u5faa\u73af",id:"2\u89e3\u6cd51-\u5d4c\u5957\u5faa\u73af",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2},{value:"5\u3001\u89e3\u6cd52-\u56de\u6eaf",id:"5\u89e3\u6cd52-\u56de\u6eaf",level:2},{value:"6\u3001\u4ee3\u7801",id:"6\u4ee3\u7801",level:2},{value:"7\u3001\u6267\u884c\u7ed3\u679c",id:"7\u6267\u884c\u7ed3\u679c",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u53ea\u5305\u542b\u6570\u5b57\u7684\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \uff0c\u7528\u4ee5\u8868\u793a\u4e00\u4e2a IP \u5730\u5740\uff0c\u8fd4\u56de\u6240\u6709\u53ef\u80fd\u4ece\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u83b7\u5f97\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u6709\u6548 IP \u5730\u5740")," \u3002\u4f60\u53ef\u4ee5\u6309\u4efb\u4f55\u987a\u5e8f\u8fd4\u56de\u7b54\u6848\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6709\u6548 IP \u5730\u5740")," \u6b63\u597d\u7531\u56db\u4e2a\u6574\u6570\uff08\u6bcf\u4e2a\u6574\u6570\u4f4d\u4e8e 0 \u5230 255 \u4e4b\u95f4\u7ec4\u6210\uff0c\u4e14\u4e0d\u80fd\u542b\u6709\u524d\u5bfc ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uff09\uff0c\u6574\u6570\u4e4b\u95f4\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"'.'")," \u5206\u9694\u3002"),(0,l.kt)("p",null,'\u4f8b\u5982\uff1a"0.1.2.201" \u548c "192.168.1.1" \u662f ',(0,l.kt)("strong",{parentName:"p"},"\u6709\u6548"),' IP \u5730\u5740\uff0c\u4f46\u662f "0.011.255.245"\u3001"192.168.1.312" \u548c "',(0,l.kt)("a",{parentName:"p",href:"mailto:192.168@1.1"},"192.168@1.1"),'" \u662f ',(0,l.kt)("strong",{parentName:"p"},"\u65e0\u6548")," IP \u5730\u5740\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "25525511135"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"255.255.11.135","255.255.111.35"',"]",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "0000"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"0.0.0.0"',"]",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "1111"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"1.1.1.1"',"]",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "010010"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"0.10.0.10","0.100.1.0"',"]",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 5\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "10203040"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"10.20.30.40","102.0.30.40","10.203.0.40"',"]",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0 <= s.length <= 3000")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s")," \u4ec5\u7531\u6570\u5b57\u7ec4\u6210")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 93\xa0\u9898\u76f8\u540c\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/restore-ip-addresses/"},"https://leetcode-cn.com/problems/restore-ip-addresses/")),(0,l.kt)("h2",{id:"2\u89e3\u6cd51-\u5d4c\u5957\u5faa\u73af"},"2\u3001\u89e3\u6cd51-\u5d4c\u5957\u5faa\u73af"),(0,l.kt)("p",null,"\u4e09\u5c42\u5d4c\u5957\u5faa\u73af\u786e\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"IP")," \u5730\u5740\u76844\u4e2a\u5b50\u4e32\uff0c\u5e76\u68c0\u9a8c\u5176\u5408\u6cd5\u6027"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var restoreIpAddresses = function (s) {\n    const n = s.length;\n    const valid = (str) => !((str.length > 1 && str[0] === '0') || +str > 255);\n\n    const res = [];\n    for (let i = 1; i < 4; i++) {\n        if (n - i < 3 || n - i > 9) continue;\n        for (let j = i + 1; j < i + 4; j++) {\n            if (n - j < 2 || n - j > 6) continue;\n            for (let k = j + 1; k < j + 4; k++) {\n                if (n - k < 1 || n - k > 3) continue;\n                const s1 = s.slice(0, i), s2 = s.slice(i, j);\n                const s3 = s.slice(j, k), s4 = s.slice(k);\n                if (valid(s1) && valid(s2) && valid(s3) && valid(s4)) res.push(`${s1}.${s2}.${s3}.${s4}`);\n            }\n        }\n    }\n\n    return res;\n};\n")),(0,l.kt)("p",null,"\u4ee3\u7801\u4e2d\u7684\u6821\u9a8c\u53ef\u4ee5\u7b80\u5316\uff0c\u4f46\u904d\u5386\u6b21\u6570\u4f1a\u589e\u52a0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var restoreIpAddresses = function (s) {\n    const valid = (str) => !(str.length < 1 || str.length > 3 || (str.length > 1 && str[0] === '0') || +str > 255);\n\n    const res = [];\n    for (let i = 1; i < 4; i++) {\n        for (let j = i + 1; j < i + 4; j++) {\n            for (let k = j + 1; k < j + 4; k++) {\n                const s1 = s.slice(0, i), s2 = s.slice(i, j);\n                const s3 = s.slice(j, k), s4 = s.slice(k);\n                if (valid(s1) && valid(s2) && valid(s3) && valid(s4)) res.push(`${s1}.${s2}.${s3}.${s4}`);\n            }\n        }\n    }\n\n    return res;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1645152071-iILavG-image.png",alt:"image.png"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u89e3\u6cd52-\u56de\u6eaf"},"5\u3001\u89e3\u6cd52-\u56de\u6eaf"),(0,l.kt)("p",null,"\u4f7f\u7528\u56de\u6eaf\u7b97\u6cd5\uff0c\u5728\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u4e2d\u9009\u53d63\u4e2a\u7d22\u5f15\u4f5c\u4e3a\u9009\u62e9\u8def\u5f84\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"idxArr"),"\uff09\uff0c\u5176\u4e2d\u7d22\u5f15\u503c\u7528\u4e8e\u5c06\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u5206\u5272\u62104\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"IP")," \u5b50\u4e32\uff0c\u4ee5\u5b50\u4e32\u957f\u5ea6\u4f5c\u4e3a\u9009\u62e9\u5217\u8868\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5217\u8868\uff08\u5b50\u4e32\u957f\u5ea6\uff09\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"2"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"3")," \u4e09\u79cd\u9009\u62e9"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u4ee3\u7801\u7b80\u6d01\u6027\uff0c\u6bcf\u6b21\u9012\u5f52\u90fd\u4f20\u5165\u4e0d\u540c\u5f15\u7528\u7684\u9009\u62e9\u8def\u5f84\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"idxArr"),"\uff09\uff0c\u8fd9\u6837\u53ef\u4ee5\u7701\u7565\u64a4\u9500\u64cd\u4f5c\uff0c\u4f46\u662f\u6d88\u8017\u7684\u5185\u5b58\u4f1a\u504f\u591a")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"6\u4ee3\u7801"},"6\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var restoreIpAddresses = function (s) {\n    const n = s.length;\n    const valid = (str) => !((str.length > 1 && str[0] === '0') || +str > 255);\n\n    const res = [];\n    function backtrace(idxArr) {\n        const ln = idxArr.length, li = idxArr[ln - 1] || 0;\n\n        if (n - li < 4 - ln || n - li > 3 * (4 - ln)) return;\n        if (ln === 3) {\n            const s1 = s.slice(0, idxArr[0]), s2 = s.slice(idxArr[0], idxArr[1]);\n            const s3 = s.slice(idxArr[1], idxArr[2]), s4 = s.slice(idxArr[2]);\n            if (valid(s1) && valid(s2) && valid(s3) && valid(s4)) res.push(`${s1}.${s2}.${s3}.${s4}`);\n            return;\n        }\n\n        for (let i = 1; i <= 3; i++) backtrace([...idxArr, li + i]);\n    }\n\n    return backtrace([]), res;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"7\u6267\u884c\u7ed3\u679c"},"7\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 68 ms"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 43.4 MB")))}u.isMDXComponent=!0}}]);