"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[702],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),c=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return l.createElement(i.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(t),d=r,g=s["".concat(i,".").concat(d)]||s[d]||k[d]||a;return t?l.createElement(g,o(o({ref:n},p),{},{components:t})):l.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[s]="string"==typeof e?e:r,o[1]=u;for(var c=2;c<a;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var l=t(87462),r=(t(67294),t(3905));const a={authors:["Whilconn"],tags:["\u6808","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:new Date("2023-03-07T00:00:00.000Z")},o=void 0,u={permalink:"/algorithm/2023/03/07/1096.\u82b1\u62ec\u53f7\u5c55\u5f00 II",source:"@site/algorithm/2023/03/07/1096.\u82b1\u62ec\u53f7\u5c55\u5f00 II.md",title:"1096.\u82b1\u62ec\u53f7\u5c55\u5f00 II",description:"1\u3001\u9898\u5e72",date:"2023-03-07T00:00:00.000Z",formattedDate:"2023\u5e743\u67087\u65e5",tags:[{label:"\u6808",permalink:"/algorithm/tags/\u6808"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"}],readingTime:3.915,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6808","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u5b57\u7b26\u4e32","\u56de\u6eaf"],date:"2023-03-07T00:00:00.000Z"},prevItem:{title:"2379.\u5f97\u5230 K \u4e2a\u9ed1\u5757\u7684\u6700\u5c11\u6d82\u8272\u6b21\u6570",permalink:"/algorithm/2023/03/09/2379.\u5f97\u5230 K \u4e2a\u9ed1\u5757\u7684\u6700\u5c11\u6d82\u8272\u6b21\u6570"},nextItem:{title:"1653.\u4f7f\u5b57\u7b26\u4e32\u5e73\u8861\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570",permalink:"/algorithm/2023/03/06/1653.\u4f7f\u5b57\u7b26\u4e32\u5e73\u8861\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570"}},i={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],p={toc:c};function s(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u719f\u6089 Shell \u7f16\u7a0b\uff0c\u90a3\u4e48\u4e00\u5b9a\u4e86\u89e3\u8fc7\u82b1\u62ec\u53f7\u5c55\u5f00\uff0c\u5b83\u53ef\u4ee5\u7528\u6765\u751f\u6210\u4efb\u610f\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"\u82b1\u62ec\u53f7\u5c55\u5f00\u7684\u8868\u8fbe\u5f0f\u53ef\u4ee5\u770b\u4f5c\u4e00\u4e2a\u7531 ",(0,r.kt)("strong",null,"\u82b1\u62ec\u53f7"),"\u3001",(0,r.kt)("strong",null,"\u9017\u53f7")," \u548c ",(0,r.kt)("strong",null,"\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd")," \u7ec4\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u5b9a\u4e49\u4e0b\u9762\u51e0\u6761\u8bed\u6cd5\u89c4\u5219\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u5982\u679c\u53ea\u7ed9\u51fa\u5355\u4e00\u7684\u5143\u7d20\xa0",(0,r.kt)("code",null,"x"),"\uff0c\u90a3\u4e48\u8868\u8fbe\u5f0f\u8868\u793a\u7684\u5b57\u7b26\u4e32\u5c31\u53ea\u6709\xa0",(0,r.kt)("code",null,'"x"'),"\u3002",(0,r.kt)("code",null,"R(x) = {x}"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4f8b\u5982\uff0c\u8868\u8fbe\u5f0f ",(0,r.kt)("code",null,'"a"')," \u8868\u793a\u5b57\u7b26\u4e32 ",(0,r.kt)("code",null,'"a"'),"\u3002"),(0,r.kt)("li",null,"\u800c\u8868\u8fbe\u5f0f ",(0,r.kt)("code",null,'"w"')," \u5c31\u8868\u793a\u5b57\u7b26\u4e32 ",(0,r.kt)("code",null,'"w"'),"\u3002"))),(0,r.kt)("li",null,"\u5f53\u4e24\u4e2a\u6216\u591a\u4e2a\u8868\u8fbe\u5f0f\u5e76\u5217\uff0c\u4ee5\u9017\u53f7\u5206\u9694\uff0c\u6211\u4eec\u53d6\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u4e2d\u5143\u7d20\u7684\u5e76\u96c6\u3002",(0,r.kt)("code",null,"R({e_1,e_2,...}) = R(e_1)\xa0\u222a R(e_2)\xa0\u222a ..."),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4f8b\u5982\uff0c\u8868\u8fbe\u5f0f ",(0,r.kt)("code",null,'"{a,b,c}"')," \u8868\u793a\u5b57\u7b26\u4e32\xa0",(0,r.kt)("code",null,'"a","b","c"'),"\u3002"),(0,r.kt)("li",null,"\u800c\u8868\u8fbe\u5f0f ",(0,r.kt)("code",null,'"{{a,b},{b,c}}"')," \u4e5f\u53ef\u4ee5\u8868\u793a\u5b57\u7b26\u4e32\xa0",(0,r.kt)("code",null,'"a","b","c"'),"\u3002"))),(0,r.kt)("li",null,"\u8981\u662f\u4e24\u4e2a\u6216\u591a\u4e2a\u8868\u8fbe\u5f0f\u76f8\u63a5\uff0c\u4e2d\u95f4\u6ca1\u6709\u9694\u5f00\u65f6\uff0c\u6211\u4eec\u4ece\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u4e2d\u5404\u53d6\u4e00\u4e2a\u5143\u7d20\u4f9d\u6b21\u8fde\u63a5\u5f62\u6210\u5b57\u7b26\u4e32\u3002",(0,r.kt)("code",null,"R(e_1 + e_2) = {a + b for (a, b) in\xa0R(e_1)\xa0\xd7 R(e_2)}"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4f8b\u5982\uff0c\u8868\u8fbe\u5f0f ",(0,r.kt)("code",null,'"{a,b}{c,d}"')," \u8868\u793a\u5b57\u7b26\u4e32\xa0",(0,r.kt)("code",null,'"ac","ad","bc","bd"'),"\u3002"))),(0,r.kt)("li",null,"\u8868\u8fbe\u5f0f\u4e4b\u95f4\u5141\u8bb8\u5d4c\u5957\uff0c\u5355\u4e00\u5143\u7d20\u4e0e\u8868\u8fbe\u5f0f\u7684\u8fde\u63a5\u4e5f\u662f\u5141\u8bb8\u7684\u3002",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4f8b\u5982\uff0c\u8868\u8fbe\u5f0f ",(0,r.kt)("code",null,'"a{b,c,d}"')," \u8868\u793a\u5b57\u7b26\u4e32\xa0",(0,r.kt)("code",null,'"ab","ac","ad"\u200b\u200b\u200b\u200b\u200b\u200b'),"\u3002"),(0,r.kt)("li",null,"\u4f8b\u5982\uff0c\u8868\u8fbe\u5f0f ",(0,r.kt)("code",null,'"a{b,c}{d,e}f{g,h}"')," \u53ef\u4ee5\u8868\u793a\u5b57\u7b26\u4e32\xa0",(0,r.kt)("code",null,'"abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh", "acefg", "acefh"'),"\u3002")))),(0,r.kt)("p",null,"\u7ed9\u51fa\u8868\u793a\u57fa\u4e8e\u7ed9\u5b9a\u8bed\u6cd5\u89c4\u5219\u7684\u8868\u8fbe\u5f0f\xa0",(0,r.kt)("code",null,"expression"),"\uff0c\u8fd4\u56de\u5b83\u6240\u8868\u793a\u7684\u6240\u6709\u5b57\u7b26\u4e32\u7ec4\u6210\u7684\u6709\u5e8f\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u5047\u5982\u4f60\u5e0c\u671b\u4ee5\u300c\u96c6\u5408\u300d\u7684\u6982\u5ff5\u4e86\u89e3\u6b64\u9898\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb \u201c",(0,r.kt)("strong",null,"\u663e\u793a\u82f1\u6587\u63cf\u8ff0"),"\u201d \u83b7\u53d6\u8be6\u60c5\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'expression = "{a,b}{c,{d,e}}"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),'["ac","ad","ae","bc","bd","be"]'),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'expression = "{{a,z},a{b,c},{ab,z}}"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),'["a","ab","ac","z"]',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u8f93\u51fa\u4e2d ",(0,r.kt)("strong",null,"\u4e0d\u5e94 "),"\u51fa\u73b0\u91cd\u590d\u7684\u7ec4\u5408\u7ed3\u679c\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= expression.length <= 60")),(0,r.kt)("li",null,(0,r.kt)("code",null,"expression[i]")," \u7531 ",(0,r.kt)("code",null,"'{'"),"\uff0c",(0,r.kt)("code",null,"'}'"),"\uff0c",(0,r.kt)("code",null,"','"),"\xa0\u6216\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210"),(0,r.kt)("li",null,"\u7ed9\u51fa\u7684\u8868\u8fbe\u5f0f\xa0",(0,r.kt)("code",null,"expression"),"\xa0\u7528\u4ee5\u8868\u793a\u4e00\u7ec4\u57fa\u4e8e\u9898\u76ee\u63cf\u8ff0\u4e2d\u8bed\u6cd5\u6784\u9020\u7684\u5b57\u7b26\u4e32")),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u672c\u9898\u8981\u5904\u7406\u7684\u5b50\u8868\u8fbe\u5f0f\u4e3b\u8981\u5305\u62ec3\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u5c42\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"{xxx,xxx}")),(0,r.kt)("li",{parentName:"ul"},"\u5d4c\u5957\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"{{xxx},{xxx}}")),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u63a5\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"{xxx}{xxx}"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"xxx{xxx}"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"{xxx}xxx"))),(0,r.kt)("p",null,"\u5177\u4f53\u4ee3\u7801\u5b9e\u73b0\u903b\u8f91\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6241\u5e73\u5316\uff1a\u628a\u6700\u5185\u5c42\u7684\u5355\u5c42\u8868\u8fbe\u5f0f\u63d0\u53d6\u5230\u4e0a\u4e00\u5c42\uff08\u8fd9\u4f1a\u9010\u6e10\u628a\u5d4c\u5957\u548c\u5355\u5c42\u8868\u8fbe\u5f0f\u90fd\u5904\u7406\u6389\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u62fc\u63a5\u7ec4\u5408\uff1a\u62fc\u63a5\u7ec4\u5408\u6700\u5185\u5c42\u76f8\u63a5\u5b50\u8868\u8fbe\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u590d\u8fd9\u4e24\u4e2a\u6b65\u9aa4\u76f4\u5230\u8868\u8fbe\u5f0f\u4e2d\u6ca1\u6709\u4efb\u4f55\u82b1\u62ec\u53f7"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\u5bf9\u8868\u8fbe\u5f0f\u8fdb\u884c\u62c6\u5206\u3001\u53bb\u91cd\u3001\u6392\u5e8f")),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function braceExpansionII(exp: string): string[] {\n    const reg0 = /\\{([a-z,]+)\\}/g;\n    const reg1 = new RegExp(`(?<![a-z}])${reg0.source}(?![a-z{])`, 'g');\n    const reg2 = new RegExp(`(${reg0.source}){2,}|[a-z]+(${reg0.source})+|(${reg0.source})+[a-z]+`, 'g');\n\n    while (1) {\n        const f1 = reg1.test(exp);\n        if (f1) exp = exp.replace(reg1, '$1');\n\n        const f2 = reg2.test(exp);\n        if (f2) {\n            exp = exp.replace(reg2, (m) => {\n                const reg = new RegExp(`${reg0.source}|[a-z]+`, 'g');\n\n                const tokenGroup = (m.match(reg) || []).map(s => s.split(/,|\\{|\\}/).filter(Boolean));\n\n                let ans = tokenGroup[0];\n                for (let i = 1; i < tokenGroup.length; i++) {\n                    const newAns = [];\n                    for (const h of ans) {\n                        for (const t of tokenGroup[i]) {\n                            newAns.push(h + t);\n                        }\n                    }\n                    ans = newAns;\n                }\n\n                return `{${ans.join(',')}}`\n            });\n        }\n\n        if (!f1 && !f2) break;\n    }\n\n    return [...new Set(exp.split(','))].sort();\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:t(2142).Z,width:"1194",height:"396"})))}s.isMDXComponent=!0},2142:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/295ca86c40f15ae9bb8ba1263cbd93c5-f8ec0d30a8b7eed79d57bd7da88cc04a.png"}}]);