"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[37601],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},o=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),u=p(n),k=r,h=u["".concat(i,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(h,s(s({ref:e},o),{},{components:n})):a.createElement(h,s({ref:e},o))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=k;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m[u]="string"==typeof t?t:r,s[1]=m;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},67953:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4"],date:"2/27/2023"},s=void 0,m={permalink:"/algorithm/2023/02/27/1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",source:"@site/algorithm/2023/02/27/1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6.md",title:"1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6",description:"1\u3001\u9898\u5e72",date:"2023-02-27T00:00:00.000Z",formattedDate:"2023\u5e742\u670827\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"}],readingTime:2.375,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4"],date:"2/27/2023"},prevItem:{title:"2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1",permalink:"/algorithm/2023/02/28/2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1"},nextItem:{title:"1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408",permalink:"/algorithm/2023/02/26/1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408"}},i={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],o={toc:p};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\xa0",(0,r.kt)("code",null,"nums"),"\uff0c\u6bcf\u6b21 ",(0,r.kt)("strong",null,"\u64cd\u4f5c"),"\xa0\u4f1a\u4ece\u4e2d\u9009\u62e9\u4e00\u4e2a\u5143\u7d20\u5e76 ",(0,r.kt)("strong",null,"\u5c06\u8be5\u5143\u7d20\u7684\u503c\u51cf\u5c11\xa01"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u7b26\u5408\u4e0b\u5217\u60c5\u51b5\u4e4b\u4e00\uff0c\u5219\u6570\u7ec4\xa0",(0,r.kt)("code",null,"A"),"\xa0\u5c31\u662f ",(0,r.kt)("strong",null,"\u952f\u9f7f\u6570\u7ec4"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u6bcf\u4e2a\u5076\u6570\u7d22\u5f15\u5bf9\u5e94\u7684\u5143\u7d20\u90fd\u5927\u4e8e\u76f8\u90bb\u7684\u5143\u7d20\uff0c\u5373\xa0",(0,r.kt)("code",null,"A[0] > A[1] < A[2] > A[3] < A[4] > ...")),(0,r.kt)("li",null,"\u6216\u8005\uff0c\u6bcf\u4e2a\u5947\u6570\u7d22\u5f15\u5bf9\u5e94\u7684\u5143\u7d20\u90fd\u5927\u4e8e\u76f8\u90bb\u7684\u5143\u7d20\uff0c\u5373\xa0",(0,r.kt)("code",null,"A[0] < A[1] > A[2] < A[3] > A[4] < ..."))),(0,r.kt)("p",null,"\u8fd4\u56de\u5c06\u6570\u7ec4\xa0",(0,r.kt)("code",null,"nums"),"\xa0\u8f6c\u6362\u4e3a\u952f\u9f7f\u6570\u7ec4\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6b21\u6570\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [1,2,3]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"2",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6211\u4eec\u53ef\u4ee5\u628a 2 \u9012\u51cf\u5230 0\uff0c\u6216\u628a 3 \u9012\u51cf\u5230 1\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [9,6,1,6,2]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"4",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= nums.length <= 1000")),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= nums[i] <= 1000"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u8fd9\u91cc\u64cd\u4f5c\u7684\u65b9\u5f0f\u53ef\u4ee5\u8003\u86513\u79cd\uff1a\u53ea\u51cf\u5c0f\u5076\u6570\u7d22\u5f15\u7684\u6570\uff0c\u53ea\u51cf\u5c0f\u5947\u6570\u7d22\u5f15\u7684\u6570\uff0c\u4e24\u79cd\u7d22\u5f15\u7684\u6570\u90fd\u51cf\u5c0f\u3002\u663e\u7136\u7b2c\u4e09\u79cd\u64cd\u4f5c\u65e0\u6cd5\u8fbe\u5230\u6700\u5c0f\u64cd\u4f5c\u6b21\u6570\u3002"),(0,r.kt)("p",null,"\u603b\u4f53\u601d\u8def\u662f\uff1a\u5c1d\u8bd5\u53ea\u51cf\u5c0f\u5076\u6570\u7d22\u5f15\u7684\u6570\u6216\u5947\u6570\u7d22\u5f15\u7684\u6570\uff0c\u51cf\u5c0f\u540e\u7684\u6570\u5c3d\u53ef\u80fd\u4e0e\u76f8\u90bb\u7684\u6570\u76f8\u5dee\u6700\u5c0f\uff0c\u90a3\u51cf\u5c0f\u540e\u7684\u6570\u5b57\u5e94\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"min(nums[i-1],nums[i+1])"),"\uff1b\u6700\u540e\u53d6\u4e24\u4e2a\u7ed3\u679c\u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a\u6570\u5b57\u3002"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function movesToMakeZigzag(nums: number[]): number {\n    let ans1 = 0;\n    for (let i = 0; i < nums.length; i += 2) {\n        const min = Math.min(nums[i - 1] ?? nums[i + 1], nums[i + 1] ?? nums[i - 1]);\n        if (nums[i] >= min) ans1 += nums[i] - min + 1;\n    }\n\n    let ans2 = 0;\n    for (let i = 1; i < nums.length; i += 2) {\n        const min = Math.min(nums[i - 1] ?? nums[i + 1], nums[i + 1] ?? nums[i - 1]);\n        if (nums[i] >= min) ans2 += nums[i] - min + 1;\n    }\n\n    return Math.min(ans1, ans2);\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(69323).Z,width:"1220",height:"398"})))}u.isMDXComponent=!0},69323:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1677487649-PsRNuD-image-59d79c8c9409c5d8054c1b19f498a1cb.png"}}]);