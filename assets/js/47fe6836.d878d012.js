"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[43235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=a,d=c["".concat(p,".").concat(s)]||c[s]||k[s]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},48176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212","\u56de\u6eaf"],date:"2022/2/20"},i=void 0,o={permalink:"/algorithm/\u5251\u6307 Offer II 085.\u751f\u6210\u5339\u914d\u7684\u62ec\u53f7",source:"@site/algorithm/\u5251\u6307 Offer II 085.\u751f\u6210\u5339\u914d\u7684\u62ec\u53f7.md",title:"\u5251\u6307 Offer II 085.\u751f\u6210\u5339\u914d\u7684\u62ec\u53f7",description:"1\u3001\u9898\u5e72",date:"2022-02-20T00:00:00.000Z",formattedDate:"2022\u5e742\u670820\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"}],readingTime:1.69,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212","\u56de\u6eaf"],date:"2022/2/20"},prevItem:{title:"717.1 \u6bd4\u7279\u4e0e 2 \u6bd4\u7279\u5b57\u7b26",permalink:"/algorithm/717.1 \u6bd4\u7279\u4e0e 2 \u6bd4\u7279\u5b57\u7b26"},nextItem:{title:"97.\u4ea4\u9519\u5b57\u7b26\u4e32",permalink:"/algorithm/97.\u4ea4\u9519\u5b57\u7b26\u4e32"}},p={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4e3e\u4e2a\u4f8b\u5b50",id:"3\u4e3e\u4e2a\u4f8b\u5b50",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u6b63\u6574\u6570\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u4ee3\u8868\u751f\u6210\u62ec\u53f7\u7684\u5bf9\u6570\uff0c\u8bf7\u8bbe\u8ba1\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u80fd\u591f\u751f\u6210\u6240\u6709\u53ef\u80fd\u7684\u5e76\u4e14 ",(0,a.kt)("strong",{parentName:"p"},"\u6709\u6548\u7684")," \u62ec\u53f7\u7ec4\u5408\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 3",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"((()))","(()())","(())()","()(())","()()()"',"]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[",'"()"',"]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 8"))),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 22\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/generate-parentheses/"},"https://leetcode-cn.com/problems/generate-parentheses/")),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u603b\u4f53\u601d\u8def\u662f\uff1a\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"n-1")," \u63a8\u5bfc\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u7684\u7ec4\u5408\u60c5\u51b5\uff0c\u53ea\u9700\u8981\u904d\u5386 ",(0,a.kt)("inlineCode",{parentName:"p"},"n-1")," \u7684\u6240\u6709\u7ec4\u5408\uff0c\u5e76\u5728\u6240\u6709\u7ec4\u5408\u7684\u6bcf\u4e2a\u4f4d\u7f6e\u586b\u5165\u4e00\u5bf9\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," \u5e76\u53bb\u91cd\u5373\u53ef\u3002"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\u4e3e\u4e2a\u4f8b\u5b50"},"3\u3001\u4e3e\u4e2a\u4f8b\u5b50"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n=1"),"\u65f6\uff0c\u7ec4\u5408\u60c5\u51b5\u4ec5\u4e00\u79cd\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'["()"]')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n=2"),"\u65f6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u904d\u5386 ",(0,a.kt)("inlineCode",{parentName:"li"},"n=1")," \u7684\u7ec4\u5408\u60c5\u51b5 ",(0,a.kt)("inlineCode",{parentName:"li"},'["()"]')),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u60c5\u51b5 ",(0,a.kt)("inlineCode",{parentName:"li"},'"()"'),"\uff0c\u5728\u8be5\u5b57\u7b26\u4e32\u6bcf\u4e2a\u4f4d\u7f6e\u586b\u5165\u4e00\u5bf9\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"()")," \u540e\u5f97\u5230\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'["()()","(())","()()"]')),(0,a.kt)("li",{parentName:"ul"},"\u53bb\u91cd\u5f97\u5230\u6700\u7ec8\u7ec4\u5408\u60c5\u51b5\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'["()()","(())"]')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n=3"),"\u65f6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u904d\u5386 ",(0,a.kt)("inlineCode",{parentName:"li"},"n=2")," \u7684\u7ec4\u5408\u60c5\u51b5 ",(0,a.kt)("inlineCode",{parentName:"li"},'["()()","(())"]')),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u60c5\u51b5 ",(0,a.kt)("inlineCode",{parentName:"li"},'"()()"'),"\uff0c\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u586b\u5165\u4e00\u5bf9\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"()")," \u540e\u5f97\u5230\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'["()()()","(())()","()()()","()(())","()()()"]')),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u60c5\u51b5 ",(0,a.kt)("inlineCode",{parentName:"li"},'"(())"'),"\uff0c\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u586b\u5165\u4e00\u5bf9\u62ec\u53f7 ",(0,a.kt)("inlineCode",{parentName:"li"},"()")," \u540e\u5f97\u5230\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'["()(())","(()())","((()))","(()())","(())()"]')),(0,a.kt)("li",{parentName:"ul"},"\u53bb\u91cd\u5f97\u5230\u6700\u7ec8\u7ec4\u5408\u60c5\u51b5\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},'["()()()","(())()","()(())","(()())","((()))"]'))))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"var generateParenthesis = function (n) {\n    let set = new Set(['()']);\n    for (let c = 2; c <= n; c++) {\n        let nextSet = new Set();\n        for (const s of set) {\n            for (let j = 0; j <= s.length; j++) {\n                nextSet.add(s.slice(0, j) + '()' + s.slice(j));\n            }\n        }\n        set = nextSet;\n    }\n    return [...set];\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1645358804-XLvcEi-image.png",alt:"image.png"})))}c.isMDXComponent=!0}}]);