"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[789],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>N});var n=t(67294);function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function m(a,e){if(null==a)return{};var t,n,l=function(a,e){if(null==a)return{};var t,n,l={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(l[t]=a[t]);return l}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(l[t]=a[t])}return l}var p=n.createContext({}),i=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(p.Provider,{value:e},a.children)},c="mdxType",k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,l=a.mdxType,s=a.originalType,p=a.parentName,o=m(a,["components","mdxType","originalType","parentName"]),c=i(t),u=l,N=c["".concat(p,".").concat(u)]||c[u]||k[u]||s;return t?n.createElement(N,r(r({ref:e},o),{},{components:t})):n.createElement(N,r({ref:e},o))}));function N(a,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var s=t.length,r=new Array(s);r[0]=u;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=a,m[c]="string"==typeof a?a:l,r[1]=m;for(var i=2;i<s;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79717:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>i});var n=t(87462),l=(t(67294),t(3905));const s={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6392\u5e8f"],date:new Date("2023-03-23T00:00:00.000Z")},r=void 0,m={permalink:"/algorithm/2023/03/23/1630.\u7b49\u5dee\u5b50\u6570\u7ec4",source:"@site/algorithm/2023/03/23/1630.\u7b49\u5dee\u5b50\u6570\u7ec4.md",title:"1630.\u7b49\u5dee\u5b50\u6570\u7ec4",description:"1\u3001\u9898\u5e72",date:"2023-03-23T00:00:00.000Z",formattedDate:"2023\u5e743\u670823\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:3.57,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6392\u5e8f"],date:"2023-03-23T00:00:00.000Z"},prevItem:{title:"1032.\u5b57\u7b26\u6d41",permalink:"/algorithm/2023/03/24/1032.\u5b57\u7b26\u6d41"},nextItem:{title:"2595.\u5947\u5076\u4f4d\u6570",permalink:"/algorithm/2023/03/21/2595.\u5947\u5076\u4f4d\u6570"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function c(a){let{components:e,...s}=a;return(0,l.kt)("wrapper",(0,n.Z)({},o,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u6570\u5217\u7531\u81f3\u5c11\u4e24\u4e2a\u5143\u7d20\u7ec4\u6210\uff0c\u4e14\u6bcf\u4e24\u4e2a\u8fde\u7eed\u5143\u7d20\u4e4b\u95f4\u7684\u5dee\u503c\u90fd\u76f8\u540c\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5e8f\u5217\u5c31\u662f ",(0,l.kt)("strong",null,"\u7b49\u5dee\u6570\u5217")," \u3002\u66f4\u6b63\u5f0f\u5730\uff0c\u6570\u5217 ",(0,l.kt)("code",null,"s")," \u662f\u7b49\u5dee\u6570\u5217\uff0c\u53ea\u9700\u8981\u6ee1\u8db3\uff1a\u5bf9\u4e8e\u6bcf\u4e2a\u6709\u6548\u7684 ",(0,l.kt)("code",null,"i")," \uff0c ",(0,l.kt)("code",null,"s[i+1] - s[i] == s[1] - s[0]")," \u90fd\u6210\u7acb\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u8fd9\u4e9b\u90fd\u662f ",(0,l.kt)("strong",null,"\u7b49\u5dee\u6570\u5217")," \uff1a"),(0,l.kt)("pre",null,"1, 3, 5, 7, 9",(0,l.kt)("br",null),"7, 7, 7, 7",(0,l.kt)("br",null),"3, -1, -5, -9"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u6570\u5217 ",(0,l.kt)("strong",null,"\u4e0d\u662f\u7b49\u5dee\u6570\u5217")," \uff1a"),(0,l.kt)("pre",null,"1, 1, 2, 5, 7"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u7531 ",(0,l.kt)("code",null,"n")," \u4e2a\u6574\u6570\u7ec4\u6210\u7684\u6570\u7ec4 ",(0,l.kt)("code",null,"nums"),"\uff0c\u548c\u4e24\u4e2a\u7531 ",(0,l.kt)("code",null,"m")," \u4e2a\u6574\u6570\u7ec4\u6210\u7684\u6570\u7ec4 ",(0,l.kt)("code",null,"l")," \u548c ",(0,l.kt)("code",null,"r"),"\uff0c\u540e\u4e24\u4e2a\u6570\u7ec4\u8868\u793a ",(0,l.kt)("code",null,"m")," \u7ec4\u8303\u56f4\u67e5\u8be2\uff0c\u5176\u4e2d\u7b2c ",(0,l.kt)("code",null,"i")," \u4e2a\u67e5\u8be2\u5bf9\u5e94\u8303\u56f4 ",(0,l.kt)("code",null,"[l[i], r[i]]")," \u3002\u6240\u6709\u6570\u7ec4\u7684\u4e0b\u6807\u90fd\u662f ",(0,l.kt)("strong",null,"\u4ece 0 \u5f00\u59cb")," \u7684\u3002"),(0,l.kt)("p",null,"\u8fd4\u56de",(0,l.kt)("em",null," "),(0,l.kt)("code",null,"boolean")," \u5143\u7d20\u6784\u6210\u7684\u7b54\u6848\u5217\u8868 ",(0,l.kt)("code",null,"answer")," \u3002\u5982\u679c\u5b50\u6570\u7ec4 ",(0,l.kt)("code",null,"nums[l[i]], nums[l[i]+1], ... , nums[r[i]]")," \u53ef\u4ee5 ",(0,l.kt)("strong",null,"\u91cd\u65b0\u6392\u5217")," \u5f62\u6210 ",(0,l.kt)("strong",null,"\u7b49\u5dee\u6570\u5217")," \uff0c",(0,l.kt)("code",null,"answer[i]")," \u7684\u503c\u5c31\u662f ",(0,l.kt)("code",null,"true"),"\uff1b\u5426\u5219",(0,l.kt)("code",null,"answer[i]")," \u7684\u503c\u5c31\u662f ",(0,l.kt)("code",null,"false")," \u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = ",(0,l.kt)("code",null,"[4,6,5,9,3,7]"),", l = ",(0,l.kt)("code",null,"[0,0,2]"),", r = ",(0,l.kt)("code",null,"[2,3,5]"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),(0,l.kt)("code",null,"[true,false,true]"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),(0,l.kt)("br",null),"\u7b2c 0 \u4e2a\u67e5\u8be2\uff0c\u5bf9\u5e94\u5b50\u6570\u7ec4 [4,6,5] \u3002\u53ef\u4ee5\u91cd\u65b0\u6392\u5217\u4e3a\u7b49\u5dee\u6570\u5217 [6,5,4] \u3002",(0,l.kt)("br",null),"\u7b2c 1 \u4e2a\u67e5\u8be2\uff0c\u5bf9\u5e94\u5b50\u6570\u7ec4 [4,6,5,9] \u3002\u65e0\u6cd5\u91cd\u65b0\u6392\u5217\u5f62\u6210\u7b49\u5dee\u6570\u5217\u3002",(0,l.kt)("br",null),"\u7b2c 2 \u4e2a\u67e5\u8be2\uff0c\u5bf9\u5e94\u5b50\u6570\u7ec4 ",(0,l.kt)("code",null,"[5,9,3,7] \u3002"),"\u53ef\u4ee5\u91cd\u65b0\u6392\u5217\u4e3a\u7b49\u5dee\u6570\u5217 ",(0,l.kt)("code",null,"[3,5,7,9] \u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[false,true,false,false,true,true]",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"n == nums.length")),(0,l.kt)("li",null,(0,l.kt)("code",null,"m == l.length")),(0,l.kt)("li",null,(0,l.kt)("code",null,"m == r.length")),(0,l.kt)("li",null,(0,l.kt)("code",null,"2 <= n <= 500")),(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= m <= 500")),(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= l[i] < r[i] < n")),(0,l.kt)("li",null,(0,l.kt)("code",null,"-10",(0,l.kt)("sup",null,"5")," <= nums[i] <= 10",(0,l.kt)("sup",null,"5")))),(0,l.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,l.kt)("p",null,"\u6a21\u62df+\u8ba1\u6570\u6392\u5e8f"),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {\n    const ans = new Array(l.length).fill(true);\n\n    for (let i = 0; i < l.length; i++) {\n        const len = r[i] - l[i] + 1;\n        if (len < 3) continue;\n\n        let min = 1e5, max = -1e5;\n        for (let j = l[i]; j <= r[i]; j++) {\n            min = Math.min(nums[j], min);\n            max = Math.max(nums[j], max);\n        }\n\n        if (min === max) continue;\n\n        const d = (max - min) / (len - 1);\n        const buckt = new Array(len).fill(0);\n\n        for (let j = l[i]; j <= r[i]; j++) {\n            const m = (nums[j] - min) % d;\n            const bi = (nums[j] - min) / d;\n            if (m || buckt[bi]) {\n                ans[i] = false;\n                break;\n            }\n            buckt[bi] = 1;\n        }\n    }\n\n    return ans;\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("msup",{parentName:"mrow"},(0,l.kt)("mi",{parentName:"msup"},"n"),(0,l.kt)("mn",{parentName:"msup"},"2")),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"msupsub"},(0,l.kt)("span",{parentName:"span",className:"vlist-t"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,l.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:t(87875).Z,width:"1228",height:"392"})),(0,l.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,l.kt)("p",null,"\u6a21\u62df+\u6392\u5e8fAPI"),(0,l.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {\n    const ans = l.map(() => true);\n\n    for (let i = 0; i < l.length; i++) {\n        if (r[i] - l[i] < 2) continue;\n        const arr = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);\n\n        const d = arr[1] - arr[0];\n        for (let j = 2; j < arr.length; j++) {\n            if (arr[j] - arr[j - 1] !== d) {\n                ans[i] = false;\n                break;\n            }\n        }\n    }\n\n    return ans;\n};\n")),(0,l.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("msup",{parentName:"mrow"},(0,l.kt)("mi",{parentName:"msup"},"n"),(0,l.kt)("mn",{parentName:"msup"},"2")),(0,l.kt)("mi",{parentName:"mrow"},"log"),(0,l.kt)("mo",{parentName:"mrow"},"\u2061"),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2 \\log{n})")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"msupsub"},(0,l.kt)("span",{parentName:"span",className:"vlist-t"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,l.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.kt)("span",{parentName:"span",className:"mop"},"lo",(0,l.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:t(73742).Z,width:"1232",height:"392"})))}c.isMDXComponent=!0},73742:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/43e4574bb8932431c9af4ecd26831761-672fa0a0db43383546a48dd95dc89168.png"},87875:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/6a992b10c89fcdaa064e4b293b54ec72-74fe94492452c2719d8562fa6fd57bcd.png"}}]);