"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[69895],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),i=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},o=function(t){var e=i(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),u=i(n),c=r,N=u["".concat(p,".").concat(c)]||u[c]||k[c]||l;return n?a.createElement(N,s(s({ref:e},o),{},{components:n})):a.createElement(N,s({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=c;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[u]="string"==typeof t?t:r,s[1]=m;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21349:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u5b57\u5178\u6811","\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:new Date("2022-01-26T00:00:00.000Z")},s=void 0,m={permalink:"/algorithm/2022/01/26/LCR 067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c",source:"@site/algorithm/2022/01/26/LCR 067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c.md",title:"LCR 067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c",description:"1\u3001\u9898\u5e72",date:"2022-01-26T00:00:00.000Z",formattedDate:"2022\u5e741\u670826\u65e5",tags:[{label:"\u4f4d\u8fd0\u7b97",permalink:"/algorithm/tags/\u4f4d\u8fd0\u7b97"},{label:"\u5b57\u5178\u6811",permalink:"/algorithm/tags/\u5b57\u5178\u6811"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"}],readingTime:3.84,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u5b57\u5178\u6811","\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:"2022-01-26T00:00:00.000Z"},prevItem:{title:"\u5251\u6307 Offer II 118.\u591a\u4f59\u7684\u8fb9",permalink:"/algorithm/2022/01/27/\u5251\u6307 Offer II 118.\u591a\u4f59\u7684\u8fb9"},nextItem:{title:"\u5251\u6307 Offer II 067.\u6700\u5927\u7684\u5f02\u6216",permalink:"/algorithm/2022/01/26/\u5251\u6307 Offer II 067.\u6700\u5927\u7684\u5f02\u6216"}},p={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,r.kt)("code",null,"nums")," \uff0c\u8fd4\u56de",(0,r.kt)("em",null," "),(0,r.kt)("code",null,"nums[i] XOR nums[j]")," \u7684\u6700\u5927\u8fd0\u7b97\u7ed3\u679c\uff0c\u5176\u4e2d ",(0,r.kt)("code",null,"0 \u2264 i \u2264 j < n")," \u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [3,10,5,25,2,8]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"28",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6700\u5927\u8fd0\u7b97\u7ed3\u679c\u662f 5 XOR 25 = 28."),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [0]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"0",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [2,4]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"6",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 4\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [8,10,2]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"10",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [14,70,53,83,49,91,36,80,92,51,66,70]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"127",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= nums.length <= 2 * 10",(0,r.kt)("sup",null,"5"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"0 <= nums[i] <= 2",(0,r.kt)("sup",null,"31")," - 1"))),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u8fdb\u9636\uff1a"),"\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("code",null,"O(n)")," \u7684\u65f6\u95f4\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5417\uff1f"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 421\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,r.kt)("a",{href:"https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/"},"https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9898\u76ee\u6bd4\u8f83\u96be\uff0c\u6ca1\u80fd\u60f3\u5230\u5b98\u89e3\u90a3\u4e9b\u4f18\u79c0\u89e3\u6cd5\uff0c\u5c1d\u8bd5\u4e86\u66b4\u529b\u89e3\u6cd5\u5e76\u4e24\u6b21\u526a\u679d\u4f18\u5316\u540e\uff0c\u4e0d\u4ec5AC\u8fd8\u8d85\u8fc782%\u63d0\u4ea4")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u89e3\u9898\u5173\u952e\u662f\uff1a\u6700\u5927\u5f02\u6216\u7ed3\u679c\u4e00\u5b9a\u662f\u7531 ",(0,r.kt)("strong",{parentName:"p"},"\u4e8c\u8fdb\u5236\u4f4d\u6570\u6700\u591a\u7684\u4e00\u4e2a\u6570")," \u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u53e6\u4e00\u4e2a\u6570")," \u8fdb\u884c\u5f02\u6216\u8fd0\u7b97\u5f97\u6765\u3002\n\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"[3,10,5,25,2,8]")," \u4e3a\u4f8b\uff0c\u7528\u4e8c\u8fdb\u5236\u8868\u793a\u662f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"[11, 1010, 101, 11001, 10, 1000]"),"\uff0c\u5176\u4e2d ",(0,r.kt)("strong",{parentName:"p"},"\u4e8c\u8fdb\u5236\u4f4d\u6570\u6700\u591a")," \u7684\u53ea\u67091\u4e2a\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"25(11001)"),"\uff0c\u63a5\u7740\u8ba1\u7b97 ",(0,r.kt)("inlineCode",{parentName:"p"},"25")," \u8ddf\u5176\u4ed6\u6570\u7684\u5f02\u6216\u7ed3\u679c\u5e76\u53d6\u6700\u5927\u503c\u5373\u53ef\u3002"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u66b4\u529b\u89e3\u6cd5\u6b65\u9aa4")," \uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5148\u5bf9\u6570\u7ec4\u8fdb\u884c\u964d\u5e8f\u6392\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u6240\u6709\u6570\u8fdb\u884c\u5f02\u6216\u8fd0\u7b97\u5e76\u53d6\u6700\u5927\u503c")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u526a\u679d\u4f18\u5316"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f18\u53161\uff1a\u5f02\u6216\u7ed3\u679c\u7684\u6700\u5927\u53ef\u80fd\u662f\uff1a\u4e8c\u8fdb\u5236\u4f4d\u6570\u6700\u591a\u7684\u6570\u5f02\u6216\u4e4b\u540e\u6240\u6709\u4e8c\u8fdb\u5236\u4f4d\u53d8\u6210 1\uff0c\u5047\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"MAX_NUM"),"\u3002\u5982\u679c\u8fd0\u7b97\u7ed3\u679c\u5df2\u8fbe\u5230\u6700\u5927\u53ef\u80fd ",(0,r.kt)("inlineCode",{parentName:"li"},"MAX_NUM"),"\uff0c\u5219\u76f4\u63a5\u9000\u51fa\u7a0b\u5e8f\u3002\uff08\u6548\u679c\u663e\u8457\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f18\u53162\uff1a\u5f02\u6216\u8fd0\u7b97\u65f6\uff0c\u7b2c\u4e00\u4e2a\u6570\u53d6 ",(0,r.kt)("strong",{parentName:"li"},"\u4e8c\u8fdb\u5236\u4f4d\u6570\u6700\u591a\u7684\u6570")," \uff0c\u7b2c\u4e8c\u4e2a\u6570\u53d6  ",(0,r.kt)("strong",{parentName:"li"},"\u4e8c\u8fdb\u5236\u4f4d\u6570\u66f4\u5c11\u7684\u6570")," \u3002\u7b2c\u4e00\u4e2a\u6570\u4e0d\u53d8\u7684\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e8c\u4e2a\u6570\u7684\u4e8c\u8fdb\u5236\u4f4d\u6570\u4e0e\u5176\u76f8\u540c\u5219\u5f02\u6216\u4f1a\u5bfc\u81f4\u6700\u9ad8\u4f4d\u53d8\u4e3a 0\uff0c\u7ed3\u679c\u5fc5\u7136\u5c0f\u4e8e\u7b2c\u4e8c\u4e2a\u6570\u7684\u4e8c\u8fdb\u5236\u4f4d\u6570\u66f4\u5c11\u7684\u60c5\u51b5\u3002")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u4f18\u53161\nvar findMaximumXOR = function (nums) {\n    nums.sort((a, b) => b - a);\n    const c = Math.log2(nums[0]) >> 0;\n    let idx = nums.findIndex((n) => n < 1 << c);\n    if (idx < 0) idx = nums.length;\n\n    const MAX_NUM = (1 << (c + 1)) - 1;\n    let res = 0;\n\n    for (let i = 0; i < idx; i++) {\n        for (let j = i + 1; j < nums.length; j++) {\n            res = Math.max(res, nums[i] ^ nums[j]);\n            if (res === MAX_NUM) return res;\n        }\n    }\n\n    return res;\n};\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u4f18\u53161 + \u4f18\u53162\nvar findMaximumXOR = function (nums) {\n    nums.sort((a, b) => b - a);\n    const c = Math.log2(nums[0]) >> 0;\n    const idx = nums.findIndex((n) => n < 1 << c);\n\n    const MAX_NUM = (1 << (c + 1)) - 1;\n    let res = 0;\n\n    if (idx > -1) {\n        for (let i = 0; i < idx; i++) {\n            for (let j = idx; j < nums.length; j++) {\n                res = Math.max(res, nums[i] ^ nums[j]);\n                if (res === MAX_NUM) return res;\n            }\n        }\n    } else {\n        for (let i = 0; i < nums.length; i++) {\n            for (let j = i + 1; j < nums.length; j++) res = Math.max(res, nums[i] ^ nums[j]);\n        }\n    }\n\n    return res;\n};\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(22298).Z,width:"1238",height:"482"})))}u.isMDXComponent=!0},22298:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/6ee783092d30a2134bd995409c83af90-44cb47e9edc0eaa3e47d6e94ef393912.png"}}]);