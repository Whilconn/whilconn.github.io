"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[61490],{3905:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>g});var l=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,l,r=function(t,n){if(null==t)return{};var e,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)e=o[l],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)e=o[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=l.createContext({}),c=function(t){var n=l.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):u(u({},n),t)),e},s=function(t){var n=c(t.components);return l.createElement(i.Provider,{value:n},t.children)},k="mdxType",p={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(t,n){var e=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),k=c(e),m=r,g=k["".concat(i,".").concat(m)]||k[m]||p[m]||o;return e?l.createElement(g,u(u({ref:n},s),{},{components:e})):l.createElement(g,u({ref:n},s))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=e.length,u=new Array(o);u[0]=m;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=t,a[k]="string"==typeof t?t:r,u[1]=a;for(var c=2;c<o;c++)u[c]=e[c];return l.createElement.apply(null,u)}return l.createElement.apply(null,e)}m.displayName="MDXCreateElement"},83512:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>k,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var l=e(87462),r=(e(67294),e(3905));const o={authors:["Whilconn"],tags:["\u6570\u5b66","\u52a8\u6001\u89c4\u5212","\u6982\u7387\u4e0e\u7edf\u8ba1"],date:new Date("2022-11-21T00:00:00.000Z")},u=void 0,a={permalink:"/algorithm/2022/11/21/808.\u5206\u6c64",source:"@site/algorithm/2022/11/21/808.\u5206\u6c64.md",title:"808.\u5206\u6c64",description:"1\u3001\u9898\u5e72",date:"2022-11-21T00:00:00.000Z",formattedDate:"2022\u5e7411\u670821\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u6982\u7387\u4e0e\u7edf\u8ba1",permalink:"/algorithm/tags/\u6982\u7387\u4e0e\u7edf\u8ba1"}],readingTime:2.595,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66","\u52a8\u6001\u89c4\u5212","\u6982\u7387\u4e0e\u7edf\u8ba1"],date:"2022-11-21T00:00:00.000Z"},prevItem:{title:"809.\u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57",permalink:"/algorithm/2022/11/25/809.\u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57"},nextItem:{title:"891.\u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c",permalink:"/algorithm/2022/11/18/891.\u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c"}},i={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],s={toc:c};function k(t){let{components:n,...o}=t;return(0,r.kt)("wrapper",(0,l.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u6709\xa0",(0,r.kt)("strong",null,"A\xa0\u548c\xa0B \u4e24\u79cd\u7c7b\u578b\xa0"),"\u7684\u6c64\u3002\u4e00\u5f00\u59cb\u6bcf\u79cd\u7c7b\u578b\u7684\u6c64\u6709\xa0",(0,r.kt)("code",null,"n"),"\xa0\u6beb\u5347\u3002\u6709\u56db\u79cd\u5206\u914d\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"\u63d0\u4f9b ",(0,r.kt)("code",null,"100ml")," \u7684 ",(0,r.kt)("strong",null,"\u6c64A")," \u548c ",(0,r.kt)("code",null,"0ml")," \u7684 ",(0,r.kt)("strong",null,"\u6c64B")," \u3002"),(0,r.kt)("li",null,"\u63d0\u4f9b ",(0,r.kt)("code",null,"75ml")," \u7684 ",(0,r.kt)("strong",null,"\u6c64A")," \u548c ",(0,r.kt)("code",null,"25ml")," \u7684 ",(0,r.kt)("strong",null,"\u6c64B")," \u3002"),(0,r.kt)("li",null,"\u63d0\u4f9b ",(0,r.kt)("code",null,"50ml")," \u7684 ",(0,r.kt)("strong",null,"\u6c64A")," \u548c ",(0,r.kt)("code",null,"50ml")," \u7684 ",(0,r.kt)("strong",null,"\u6c64B")," \u3002"),(0,r.kt)("li",null,"\u63d0\u4f9b ",(0,r.kt)("code",null,"25ml")," \u7684 ",(0,r.kt)("strong",null,"\u6c64A")," \u548c ",(0,r.kt)("code",null,"75ml")," \u7684 ",(0,r.kt)("strong",null,"\u6c64B")," \u3002")),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u628a\u6c64\u5206\u914d\u7ed9\u67d0\u4eba\u4e4b\u540e\uff0c\u6c64\u5c31\u6ca1\u6709\u4e86\u3002\u6bcf\u4e2a\u56de\u5408\uff0c\u6211\u4eec\u5c06\u4ece\u56db\u79cd\u6982\u7387\u540c\u4e3a ",(0,r.kt)("code",null,"0.25")," \u7684\u64cd\u4f5c\u4e2d\u8fdb\u884c\u5206\u914d\u9009\u62e9\u3002\u5982\u679c\u6c64\u7684\u5269\u4f59\u91cf\u4e0d\u8db3\u4ee5\u5b8c\u6210\u67d0\u6b21\u64cd\u4f5c\uff0c\u6211\u4eec\u5c06\u5c3d\u53ef\u80fd\u5206\u914d\u3002\u5f53\u4e24\u79cd\u7c7b\u578b\u7684\u6c64\u90fd\u5206\u914d\u5b8c\u65f6\uff0c\u505c\u6b62\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u6ce8\u610f\xa0"),"\u4e0d\u5b58\u5728\u5148\u5206\u914d ",(0,r.kt)("code",null,"100")," ml ",(0,r.kt)("strong",null,"\u6c64B")," \u7684\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u8fd4\u56de\u7684\u503c\uff1a\xa0",(0,r.kt)("strong",null,"\u6c64A\xa0"),"\u5148\u5206\u914d\u5b8c\u7684\u6982\u7387 +\xa0\xa0",(0,r.kt)("strong",null,"\u6c64A\u548c\u6c64B\xa0"),"\u540c\u65f6\u5206\u914d\u5b8c\u7684\u6982\u7387 / 2\u3002\u8fd4\u56de\u503c\u5728\u6b63\u786e\u7b54\u6848\xa0",(0,r.kt)("code",null,"10",(0,r.kt)("sup",null,"-5")),"\xa0\u7684\u8303\u56f4\u5185\u5c06\u88ab\u8ba4\u4e3a\u662f\u6b63\u786e\u7684\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:")," n = 50",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa:")," 0.62500",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca:"),"\u5982\u679c\u6211\u4eec\u9009\u62e9\u524d\u4e24\u4e2a\u64cd\u4f5c",(0,r.kt)("strong",null,"\uff0c"),"A \u9996\u5148\u5c06\u53d8\u4e3a\u7a7a\u3002",(0,r.kt)("br",null),"\u5bf9\u4e8e\u7b2c\u4e09\u4e2a\u64cd\u4f5c\uff0cA \u548c B \u4f1a\u540c\u65f6\u53d8\u4e3a\u7a7a\u3002",(0,r.kt)("br",null),"\u5bf9\u4e8e\u7b2c\u56db\u4e2a\u64cd\u4f5c\uff0cB \u9996\u5148\u5c06\u53d8\u4e3a\u7a7a\u3002",(0,r.kt)("strong",null,(0,r.kt)("br",null)),"\u6240\u4ee5 A \u53d8\u4e3a\u7a7a\u7684\u603b\u6982\u7387\u52a0\u4e0a A \u548c B \u540c\u65f6\u53d8\u4e3a\u7a7a\u7684\u6982\u7387\u7684\u4e00\u534a\u662f 0.25 *(1 + 1 + 0.5 + 0)= 0.625\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:")," n = 100",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa:")," 0.71875",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a:")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"0 <= n <= 10",(0,r.kt)("sup",null,"9")),"\u200b\u200b\u200b\u200b\u200b\u200b\u200b")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Problem: ",(0,r.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/soup-servings/description/"},"808. \u5206\u6c64"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u8bb0\u5fc6\u5316\u641c\u7d22"),(0,r.kt)("h2",{id:"3code"},"3\u3001Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function soupServings(n: number): number {\n    const operations = [[100, 0], [75, 25], [50, 50], [25, 75]];\n    const visited = new Map();\n\n    function serve(ka: number, kb: number) {\n        const key = `${ka}-${kb}`;\n        if (visited.has(key)) return visited.get(key);\n\n        if (ka <= 0 && kb > 0) return 1;\n        else if (ka <= 0 && kb <= 0) return 1 / 2;\n        else if (kb <= 0) return 0;\n\n        let r = 0;\n        for (const [a, b] of operations) {\n            r += 1 / 4 * serve(ka - a, kb - b);\n        }\n\n        visited.set(key, r);\n\n        return r;\n    }\n\n    return n < 5000 ? serve(n, n) : 1;\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:e(28342).Z,width:"1618",height:"406"})))}k.isMDXComponent=!0},28342:(t,n,e)=>{e.d(n,{Z:()=>l});const l=e.p+"assets/images/9fa112c1da25387c49ecdaf49ceeaf75-954e9966f8c84cd150743819758254d0.png"}}]);