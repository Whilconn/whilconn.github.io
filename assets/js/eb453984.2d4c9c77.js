"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[88321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),u=o(n),c=r,N=u["".concat(p,".").concat(c)]||u[c]||k[c]||l;return n?a.createElement(N,s(s({ref:t},i),{},{components:n})):a.createElement(N,s({ref:t},i))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[u]="string"==typeof e?e:r,s[1]=m;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212"],date:"2023/1/28"},s=void 0,m={permalink:"/algorithm/1664.\u751f\u6210\u5e73\u8861\u6570\u7ec4\u7684\u65b9\u6848\u6570",source:"@site/algorithm/1664.\u751f\u6210\u5e73\u8861\u6570\u7ec4\u7684\u65b9\u6848\u6570.md",title:"1664.\u751f\u6210\u5e73\u8861\u6570\u7ec4\u7684\u65b9\u6848\u6570",description:"1\u3001\u9898\u5e72",date:"2023-01-28T00:00:00.000Z",formattedDate:"2023\u5e741\u670828\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:3.265,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212"],date:"2023/1/28"},prevItem:{title:"2315.\u7edf\u8ba1\u661f\u53f7",permalink:"/algorithm/2315.\u7edf\u8ba1\u661f\u53f7"},nextItem:{title:"2309.\u517c\u5177\u5927\u5c0f\u5199\u7684\u6700\u597d\u82f1\u6587\u5b57\u6bcd",permalink:"/algorithm/2309.\u517c\u5177\u5927\u5c0f\u5199\u7684\u6700\u597d\u82f1\u6587\u5b57\u6bcd"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"nums"),"\xa0\u3002\u4f60\u9700\u8981\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"\u6070\u597d"),"\xa0\u4e00\u4e2a\u4e0b\u6807\uff08\u4e0b\u6807\u4ece ",(0,r.kt)("strong",{parentName:"p"},"0"),"\xa0\u5f00\u59cb\uff09\u5e76\u5220\u9664\u5bf9\u5e94\u7684\u5143\u7d20\u3002\u8bf7\u6ce8\u610f\u5269\u4e0b\u5143\u7d20\u7684\u4e0b\u6807\u53ef\u80fd\u4f1a\u56e0\u4e3a\u5220\u9664\u64cd\u4f5c\u800c\u53d1\u751f\u6539\u53d8\u3002"),(0,r.kt)("p",null,"\u6bd4\u65b9\u8bf4\uff0c\u5982\u679c\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"nums = [6,1,7,4,1]"),"\xa0\uff0c\u90a3\u4e48\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5220\u9664\u4e0b\u6807 ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," \uff0c\u5269\u4e0b\u7684\u6570\u7ec4\u4e3a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"nums = [6,7,4,1]"),"\xa0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5220\u9664\u4e0b\u6807\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"2"),"\xa0\uff0c\u5269\u4e0b\u7684\u6570\u7ec4\u4e3a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"nums = [6,1,4,1]"),"\xa0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5220\u9664\u4e0b\u6807\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"4"),"\xa0\uff0c\u5269\u4e0b\u7684\u6570\u7ec4\u4e3a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"nums = [6,1,7,4]"),"\xa0\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u6570\u7ec4\u6ee1\u8db3\u5947\u6570\u4e0b\u6807\u5143\u7d20\u7684\u548c\u4e0e\u5076\u6570\u4e0b\u6807\u5143\u7d20\u7684\u548c\u76f8\u7b49\uff0c\u8be5\u6570\u7ec4\u5c31\u662f\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u5e73\u8861\u6570\u7ec4")," \u3002"),(0,r.kt)("p",null,"\u8bf7\u4f60\u8fd4\u56de\u5220\u9664\u64cd\u4f5c\u540e\uff0c\u5269\u4e0b\u7684\u6570\u7ec4\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"nums"),"\xa0\u662f\xa0",(0,r.kt)("strong",{parentName:"p"},"\u5e73\u8861\u6570\u7ec4")," \u7684\xa0",(0,r.kt)("strong",{parentName:"p"},"\u65b9\u6848\u6570"),"\xa0\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","2,1,6,4","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,r.kt)("br",null),"\n\u5220\u9664\u4e0b\u6807 0 \uff1a","[","1,6,4","]"," -> \u5076\u6570\u5143\u7d20\u4e0b\u6807\u4e3a\uff1a1 + 4 = 5 \u3002\u5947\u6570\u5143\u7d20\u4e0b\u6807\u4e3a\uff1a6 \u3002\u4e0d\u5e73\u8861\u3002",(0,r.kt)("br",null),"\n\u5220\u9664\u4e0b\u6807 1 \uff1a","[","2,6,4","]"," -> \u5076\u6570\u5143\u7d20\u4e0b\u6807\u4e3a\uff1a2 + 4 = 6 \u3002\u5947\u6570\u5143\u7d20\u4e0b\u6807\u4e3a\uff1a6 \u3002\u5e73\u8861\u3002",(0,r.kt)("br",null),"\n\u5220\u9664\u4e0b\u6807 2 \uff1a","[","2,1,4","]"," -> \u5076\u6570\u5143\u7d20\u4e0b\u6807\u4e3a\uff1a2 + 4 = 6 \u3002\u5947\u6570\u5143\u7d20\u4e0b\u6807\u4e3a\uff1a1 \u3002\u4e0d\u5e73\u8861\u3002",(0,r.kt)("br",null),"\n\u5220\u9664\u4e0b\u6807 3 \uff1a","[","2,1,6","]"," -> \u5076\u6570\u5143\u7d20\u4e0b\u6807\u4e3a\uff1a2 + 6 = 8 \u3002\u5947\u6570\u5143\u7d20\u4e0b\u6807\u4e3a\uff1a1 \u3002\u4e0d\u5e73\u8861\u3002",(0,r.kt)("br",null),"\n\u53ea\u6709\u4e00\u79cd\u8ba9\u5269\u4f59\u6570\u7ec4\u6210\u4e3a\u5e73\u8861\u6570\u7ec4\u7684\u65b9\u6848\u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,1,1","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 3",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4f60\u53ef\u4ee5\u5220\u9664\u4efb\u610f\u5143\u7d20\uff0c\u5269\u4f59\u6570\u7ec4\u90fd\u662f\u5e73\u8861\u6570\u7ec4\u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,2,3","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 0",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4e0d\u7ba1\u5220\u9664\u54ea\u4e2a\u5143\u7d20\uff0c\u5269\u4e0b\u6570\u7ec4\u90fd\u4e0d\u662f\u5e73\u8861\u6570\u7ec4\u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^4"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u524d\u7f00\u548c\u6a21\u62df"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function waysToMakeFair(nums: number[]): number {\n    let oddSum = 0, evenSum = 0;\n    const sums = new Array(nums.length).fill(0);\n    for (let i = 0; i < nums.length; i++) {\n        sums[i] = i % 2 ? oddSum += nums[i] : evenSum += nums[i];\n    }\n\n    let ans = 0;\n    const oddTail = !!((nums.length - 1) % 2);\n\n    for (let i = 0; i < nums.length; i++) {\n        const os1 = (i % 2 ? sums[i] : sums[i - 1]) || 0;\n        const es1 = (i % 2 ? sums[i - 1] : sums[i]) || 0;\n\n        const os2 = (sums.at(oddTail ? -2 : -1) || 0) - es1;\n        const es2 = (sums.at(oddTail ? -1 : -2) || 0) - os1;\n\n        if (i % 2 === 1 && os1 + os2 - nums[i] === es1 + es2) ans++;\n        else if (i % 2 === 0 && os1 + os2 === es1 + es2 - nums[i]) ans++;\n    }\n\n    return ans;\n};\n")),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(35918).Z,width:"1424",height:"394"})))}u.isMDXComponent=!0},35918:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1674886078-NHyZJG-image-19c69d93a1ed87d0024b99bc1dd35e9f.png"}}]);