"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[58010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=m(n),k=r,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(d,i(i({ref:t},o),{},{components:n})):a.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4","\u52a8\u6001\u89c4\u5212"],date:"2/21/2023"},i=void 0,p={permalink:"/algorithm/2023/02/21/1326.\u704c\u6e89\u82b1\u56ed\u7684\u6700\u5c11\u6c34\u9f99\u5934\u6570\u76ee",source:"@site/algorithm/2023/02/21/1326.\u704c\u6e89\u82b1\u56ed\u7684\u6700\u5c11\u6c34\u9f99\u5934\u6570\u76ee.md",title:"1326.\u704c\u6e89\u82b1\u56ed\u7684\u6700\u5c11\u6c34\u9f99\u5934\u6570\u76ee",description:"1\u3001\u9898\u5e72",date:"2023-02-21T00:00:00.000Z",formattedDate:"2023\u5e742\u670821\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:3.075,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4","\u52a8\u6001\u89c4\u5212"],date:"2/21/2023"},nextItem:{title:"2347.\u6700\u597d\u7684\u6251\u514b\u624b\u724c",permalink:"/algorithm/2023/02/20/2347.\u6700\u597d\u7684\u6251\u514b\u624b\u724c"}},s={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],o={toc:m};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u5728 x \u8f74\u4e0a\u6709\u4e00\u4e2a\u4e00\u7ef4\u7684\u82b1\u56ed\u3002\u82b1\u56ed\u957f\u5ea6\u4e3a\xa0",(0,r.kt)("code",null,"n"),"\uff0c\u4ece\u70b9\xa0",(0,r.kt)("code",null,"0"),"\xa0\u5f00\u59cb\uff0c\u5230\u70b9\xa0",(0,r.kt)("code",null,"n"),"\xa0\u7ed3\u675f\u3002"),(0,r.kt)("p",null,"\u82b1\u56ed\u91cc\u603b\u5171\u6709\xa0",(0,r.kt)("code",null,"n + 1")," \u4e2a\u6c34\u9f99\u5934\uff0c\u5206\u522b\u4f4d\u4e8e\xa0",(0,r.kt)("code",null,"[0, 1, ..., n]")," \u3002"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\xa0",(0,r.kt)("code",null,"n"),"\xa0\u548c\u4e00\u4e2a\u957f\u5ea6\u4e3a\xa0",(0,r.kt)("code",null,"n + 1")," \u7684\u6574\u6570\u6570\u7ec4\xa0",(0,r.kt)("code",null,"ranges"),"\xa0\uff0c\u5176\u4e2d\xa0",(0,r.kt)("code",null,"ranges[i]")," \uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\u8868\u793a\uff1a\u5982\u679c\u6253\u5f00\u70b9\xa0",(0,r.kt)("code",null,"i"),"\xa0\u5904\u7684\u6c34\u9f99\u5934\uff0c\u53ef\u4ee5\u704c\u6e89\u7684\u533a\u57df\u4e3a\xa0",(0,r.kt)("code",null,"[i -\xa0 ranges[i], i + ranges[i]]"),"\xa0\u3002"),(0,r.kt)("p",null,"\u8bf7\u4f60\u8fd4\u56de\u53ef\u4ee5\u704c\u6e89\u6574\u4e2a\u82b1\u56ed\u7684\xa0",(0,r.kt)("strong",null,"\u6700\u5c11\u6c34\u9f99\u5934\u6570\u76ee"),"\xa0\u3002\u5982\u679c\u82b1\u56ed\u59cb\u7ec8\u5b58\u5728\u65e0\u6cd5\u704c\u6e89\u5230\u7684\u5730\u65b9\uff0c\u8bf7\u4f60\u8fd4\u56de\xa0",(0,r.kt)("strong",null,"-1"),"\xa0\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"",src:"../../../img/1685_example_1.png"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 5, ranges = [3,4,1,1,0,0]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"1",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a",(0,r.kt)("br",null)),"\u70b9 0 \u5904\u7684\u6c34\u9f99\u5934\u53ef\u4ee5\u704c\u6e89\u533a\u95f4 [-3,3]",(0,r.kt)("br",null),"\u70b9 1 \u5904\u7684\u6c34\u9f99\u5934\u53ef\u4ee5\u704c\u6e89\u533a\u95f4 [-3,5]",(0,r.kt)("br",null),"\u70b9 2 \u5904\u7684\u6c34\u9f99\u5934\u53ef\u4ee5\u704c\u6e89\u533a\u95f4 [1,3]",(0,r.kt)("br",null),"\u70b9 3 \u5904\u7684\u6c34\u9f99\u5934\u53ef\u4ee5\u704c\u6e89\u533a\u95f4 [2,4]",(0,r.kt)("br",null),"\u70b9 4 \u5904\u7684\u6c34\u9f99\u5934\u53ef\u4ee5\u704c\u6e89\u533a\u95f4 [4,4]",(0,r.kt)("br",null),"\u70b9 5 \u5904\u7684\u6c34\u9f99\u5934\u53ef\u4ee5\u704c\u6e89\u533a\u95f4 [5,5]",(0,r.kt)("br",null),"\u53ea\u9700\u8981\u6253\u5f00\u70b9 1 \u5904\u7684\u6c34\u9f99\u5934\u5373\u53ef\u704c\u6e89\u6574\u4e2a\u82b1\u56ed [0,5] \u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 3, ranges = [0,0,0,0]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"-1",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u5373\u4f7f\u6253\u5f00\u6240\u6709\u6c34\u9f99\u5934\uff0c\u4f60\u4e5f\u65e0\u6cd5\u704c\u6e89\u6574\u4e2a\u82b1\u56ed\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= n <= 10",(0,r.kt)("sup",null,"4"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"ranges.length == n + 1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"0 <= ranges[i] <= 100"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5199\u4e86\u4e2a\u5947\u602a\u7684\u52a8\u6001\u89c4\u5212\u601d\u8def")),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"[i-r,i)")," \u533a\u95f4\u7684\u6700\u5c11\u6c34\u9f99\u5934\u6570\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"dp[i]"),"\uff0c\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"dp[i]")," \u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"(i,i+r]")," \u533a\u95f4\u7684\u6700\u5c11\u6c34\u9f99\u5934\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dp")," \u6570\u7ec4\u5143\u7d20\u6709\u6b63\u8d1f\u4e24\u79cd\u72b6\u6001\uff0c\u6b63\u6570\u8868\u793a\u81ea\u8eab\u53ef\u4ee5\u8fbe\u5230\u6700\u5c11\u6c34\u9f99\u5934\u6570\uff0c\u8d1f\u6570\u8868\u793a\u88ab\u5176\u4ed6\u6c34\u9f99\u5934\u8986\u76d6\u8fbe\u5230\u6700\u5c11\u6c34\u9f99\u5934\u6570\uff1b\u8d1f\u6570\u5728\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"(i,i+r]")," \u533a\u95f4\u65f6\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"+1"),"\uff0c\u6b63\u6570\u5219\u4e0d\u9700\u8981\u3002"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function minTaps(n: number, ranges: number[]): number {\n    const dp = ranges.map(() => Infinity);\n\n    for (let i = 0, r = 0; i <= n; i++) {\n        r = ranges[i];\n        if (i - r < 1) dp[i] = 1;\n\n        for (let j = Math.max(0, i - r); j <= Math.min(n, i + r); j++) {\n            const di = Math.abs(dp[i]), dj = Math.abs(dp[j]);\n            if (j < i && dj + 1 <= di) dp[i] = dj + 1;\n            else if (j > i) {\n                if (dp[i] > 0 && di <= dj) dp[j] = -di;\n                else if (dp[i] <= 0 && di + 1 <= dj) dp[j] = -di - 1;\n            }\n        }\n    }\n\n    return dp.at(-1) < Infinity ? Math.abs(dp.at(-1)) : -1;\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(mn)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"mn"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(13470).Z,width:"1394",height:"402"})))}c.isMDXComponent=!0},13470:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1676958920-bhTmgh-image-015066757149d5edbe38b11ddca86034.png"}}]);