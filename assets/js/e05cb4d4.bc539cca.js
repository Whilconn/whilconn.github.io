"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[81515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,d=m["".concat(p,".").concat(s)]||m[s]||k[s]||a;return n?l.createElement(d,i(i({ref:t},c),{},{components:n})):l.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212","\u56de\u6eaf"],date:"2022/2/20"},i=void 0,o={permalink:"/algorithm/2022/02/20/\u5251\u6307 Offer II 085.\u751f\u6210\u5339\u914d\u7684\u62ec\u53f7",source:"@site/algorithm/2022/02/20/\u5251\u6307 Offer II 085.\u751f\u6210\u5339\u914d\u7684\u62ec\u53f7.md",title:"\u5251\u6307 Offer II 085.\u751f\u6210\u5339\u914d\u7684\u62ec\u53f7",description:"1\u3001\u9898\u5e72",date:"2022-02-20T00:00:00.000Z",formattedDate:"2022\u5e742\u670820\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"}],readingTime:1.74,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212","\u56de\u6eaf"],date:"2022/2/20"},prevItem:{title:"22.\u62ec\u53f7\u751f\u6210",permalink:"/algorithm/2022/02/20/22.\u62ec\u53f7\u751f\u6210"},nextItem:{title:"717.1 \u6bd4\u7279\u4e0e 2 \u6bd4\u7279\u5b57\u7b26",permalink:"/algorithm/2022/02/19/717.1 \u6bd4\u7279\u4e0e 2 \u6bd4\u7279\u5b57\u7b26"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4e3e\u4e2a\u4f8b\u5b50",id:"3\u4e3e\u4e2a\u4f8b\u5b50",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u6b63\u6574\u6570\xa0",(0,r.kt)("code",null,"n"),"\xa0\u4ee3\u8868\u751f\u6210\u62ec\u53f7\u7684\u5bf9\u6570\uff0c\u8bf7\u8bbe\u8ba1\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u80fd\u591f\u751f\u6210\u6240\u6709\u53ef\u80fd\u7684\u5e76\u4e14 ",(0,r.kt)("strong",null,"\u6709\u6548\u7684 "),"\u62ec\u53f7\u7ec4\u5408\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 3",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),'["((()))","(()())","(())()","()(())","()()()"]',(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 1",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),'["()"]',(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= n <= 8"))),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 22\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,r.kt)("a",{href:"https://leetcode-cn.com/problems/generate-parentheses/"},"https://leetcode-cn.com/problems/generate-parentheses/")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u603b\u4f53\u601d\u8def\u662f\uff1a\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"n-1")," \u63a8\u5bfc\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u7684\u7ec4\u5408\u60c5\u51b5\uff0c\u53ea\u9700\u8981\u904d\u5386 ",(0,r.kt)("inlineCode",{parentName:"p"},"n-1")," \u7684\u6240\u6709\u7ec4\u5408\uff0c\u5e76\u5728\u6240\u6709\u7ec4\u5408\u7684\u6bcf\u4e2a\u4f4d\u7f6e\u586b\u5165\u4e00\u5bf9\u62ec\u53f7 ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," \u5e76\u53bb\u91cd\u5373\u53ef\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\u4e3e\u4e2a\u4f8b\u5b50"},"3\u3001\u4e3e\u4e2a\u4f8b\u5b50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n=1"),"\u65f6\uff0c\u7ec4\u5408\u60c5\u51b5\u4ec5\u4e00\u79cd\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'["()"]')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n=2"),"\u65f6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u904d\u5386 ",(0,r.kt)("inlineCode",{parentName:"li"},"n=1")," \u7684\u7ec4\u5408\u60c5\u51b5 ",(0,r.kt)("inlineCode",{parentName:"li"},'["()"]')),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u60c5\u51b5 ",(0,r.kt)("inlineCode",{parentName:"li"},'"()"'),"\uff0c\u5728\u8be5\u5b57\u7b26\u4e32\u6bcf\u4e2a\u4f4d\u7f6e\u586b\u5165\u4e00\u5bf9\u62ec\u53f7 ",(0,r.kt)("inlineCode",{parentName:"li"},"()")," \u540e\u5f97\u5230\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'["()()","(())","()()"]')),(0,r.kt)("li",{parentName:"ul"},"\u53bb\u91cd\u5f97\u5230\u6700\u7ec8\u7ec4\u5408\u60c5\u51b5\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'["()()","(())"]')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n=3"),"\u65f6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u904d\u5386 ",(0,r.kt)("inlineCode",{parentName:"li"},"n=2")," \u7684\u7ec4\u5408\u60c5\u51b5 ",(0,r.kt)("inlineCode",{parentName:"li"},'["()()","(())"]')),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u60c5\u51b5 ",(0,r.kt)("inlineCode",{parentName:"li"},'"()()"'),"\uff0c\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u586b\u5165\u4e00\u5bf9\u62ec\u53f7 ",(0,r.kt)("inlineCode",{parentName:"li"},"()")," \u540e\u5f97\u5230\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'["()()()","(())()","()()()","()(())","()()()"]')),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u60c5\u51b5 ",(0,r.kt)("inlineCode",{parentName:"li"},'"(())"'),"\uff0c\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u586b\u5165\u4e00\u5bf9\u62ec\u53f7 ",(0,r.kt)("inlineCode",{parentName:"li"},"()")," \u540e\u5f97\u5230\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'["()(())","(()())","((()))","(()())","(())()"]')),(0,r.kt)("li",{parentName:"ul"},"\u53bb\u91cd\u5f97\u5230\u6700\u7ec8\u7ec4\u5408\u60c5\u51b5\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'["()()()","(())()","()(())","(()())","((()))"]'))))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"var generateParenthesis = function (n) {\n    let set = new Set(['()']);\n    for (let c = 2; c <= n; c++) {\n        let nextSet = new Set();\n        for (const s of set) {\n            for (let j = 0; j <= s.length; j++) {\n                nextSet.add(s.slice(0, j) + '()' + s.slice(j));\n            }\n        }\n        set = nextSet;\n    }\n    return [...set];\n};\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(73814).Z,width:"1306",height:"480"})))}m.isMDXComponent=!0},73814:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/1645358804-XLvcEi-image-d9e0196c73d139067606fc09008522f7.png"}}]);