"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[53008],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>N});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var p=n.createContext({}),o=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},i=function(a){var e=o(a.components);return n.createElement(p.Provider,{value:e},a.children)},c="mdxType",k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,p=a.parentName,i=l(a,["components","mdxType","originalType","parentName"]),c=o(t),u=m,N=c["".concat(p,".").concat(u)]||c[u]||k[u]||r;return t?n.createElement(N,s(s({ref:e},i),{},{components:t})):n.createElement(N,s({ref:e},i))}));function N(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,s=new Array(r);s[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=a,l[c]="string"==typeof a?a:m,s[1]=l;for(var o=2;o<r;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},59785:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=t(87462),m=(t(67294),t(3905));const r={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u8ba1\u6570","\u6570\u8bba"],date:"2023/1/14"},s=void 0,l={permalink:"/algorithm/2023/01/14/1819.\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee",source:"@site/algorithm/2023/01/14/1819.\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee.md",title:"1819.\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee",description:"1\u3001\u9898\u5e72",date:"2023-01-14T00:00:00.000Z",formattedDate:"2023\u5e741\u670814\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u8ba1\u6570",permalink:"/algorithm/tags/\u8ba1\u6570"},{label:"\u6570\u8bba",permalink:"/algorithm/tags/\u6570\u8bba"}],readingTime:2.48,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u8ba1\u6570","\u6570\u8bba"],date:"2023/1/14"},prevItem:{title:"2293.\u6781\u5927\u6781\u5c0f\u6e38\u620f",permalink:"/algorithm/2023/01/14/2293.\u6781\u5927\u6781\u5c0f\u6e38\u620f"},nextItem:{title:"2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",permalink:"/algorithm/2023/01/13/2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function c(a){let{components:e,...r}=a;return(0,m.kt)("wrapper",(0,n.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,m.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u7531\u6b63\u6574\u6570\u7ec4\u6210\u7684\u6570\u7ec4 ",(0,m.kt)("code",null,"nums")," \u3002"),(0,m.kt)("p",null,"\u6570\u5b57\u5e8f\u5217\u7684 ",(0,m.kt)("strong",null,"\u6700\u5927\u516c\u7ea6\u6570")," \u5b9a\u4e49\u4e3a\u5e8f\u5217\u4e2d\u6240\u6709\u6574\u6570\u7684\u5171\u6709\u7ea6\u6570\u4e2d\u7684\u6700\u5927\u6574\u6570\u3002"),(0,m.kt)("ul",null,(0,m.kt)("li",null,"\u4f8b\u5982\uff0c\u5e8f\u5217 ",(0,m.kt)("code",null,"[4,6,16]")," \u7684\u6700\u5927\u516c\u7ea6\u6570\u662f ",(0,m.kt)("code",null,"2")," \u3002")),(0,m.kt)("p",null,"\u6570\u7ec4\u7684\u4e00\u4e2a ",(0,m.kt)("strong",null,"\u5b50\u5e8f\u5217")," \u672c\u8d28\u662f\u4e00\u4e2a\u5e8f\u5217\uff0c\u53ef\u4ee5\u901a\u8fc7\u5220\u9664\u6570\u7ec4\u4e2d\u7684\u67d0\u4e9b\u5143\u7d20\uff08\u6216\u8005\u4e0d\u5220\u9664\uff09\u5f97\u5230\u3002"),(0,m.kt)("ul",null,(0,m.kt)("li",null,"\u4f8b\u5982\uff0c",(0,m.kt)("code",null,"[2,5,10]")," \u662f ",(0,m.kt)("code",null,"[1,2,1,",(0,m.kt)("strong",null,"2"),",4,1,",(0,m.kt)("strong",null,"5"),",",(0,m.kt)("strong",null,"10"),"]")," \u7684\u4e00\u4e2a\u5b50\u5e8f\u5217\u3002")),(0,m.kt)("p",null,"\u8ba1\u7b97\u5e76\u8fd4\u56de ",(0,m.kt)("code",null,"nums")," \u7684\u6240\u6709 ",(0,m.kt)("strong",null,"\u975e\u7a7a")," \u5b50\u5e8f\u5217\u4e2d ",(0,m.kt)("strong",null,"\u4e0d\u540c")," \u6700\u5927\u516c\u7ea6\u6570\u7684 ",(0,m.kt)("strong",null,"\u6570\u76ee")," \u3002"),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,m.kt)("img",{alt:"",src:"../../../img/image-1.png"}),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [6,10,3]",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),"5",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u4e0a\u56fe\u663e\u793a\u4e86\u6240\u6709\u7684\u975e\u7a7a\u5b50\u5e8f\u5217\u4e0e\u5404\u81ea\u7684\u6700\u5927\u516c\u7ea6\u6570\u3002",(0,m.kt)("br",null),"\u4e0d\u540c\u7684\u6700\u5927\u516c\u7ea6\u6570\u4e3a 6 \u300110 \u30013 \u30012 \u548c 1 \u3002",(0,m.kt)("br",null)),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,m.kt)("pre",null,(0,m.kt)("strong",null,"\u8f93\u5165\uff1a"),"nums = [5,15,40,5,6]",(0,m.kt)("br",null),(0,m.kt)("strong",null,"\u8f93\u51fa\uff1a"),"7",(0,m.kt)("br",null)),(0,m.kt)("p",null,"\xa0"),(0,m.kt)("p",null,(0,m.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,m.kt)("ul",null,(0,m.kt)("li",null,(0,m.kt)("code",null,"1 <= nums.length <= 10",(0,m.kt)("sup",null,"5"))),(0,m.kt)("li",null,(0,m.kt)("code",null,"1 <= nums[i] <= 2 * 10",(0,m.kt)("sup",null,"5")))),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u9898\u76ee\u592a\u96be\uff0c\u770b\u4e86\u9898\u89e3\u624d\u5199\u51fa\u6765\u3002")),(0,m.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,m.kt)("p",null,"\u6240\u6709\u6700\u5927\u516c\u7ea6\u6570\u90fd\u5904\u4e8e ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1,max(nums)]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")]")))))," \u8303\u56f4\u5185\uff0c\u56e0\u6b64\u53ef\u4ee5\u679a\u4e3e\u8be5\u8303\u56f4\u5185\u7684\u6240\u6709\u6570\u5b57 ",(0,m.kt)("inlineCode",{parentName:"p"},"i"),"\uff0c\u5224\u65ad\u8be5\u6570\u5b57\u662f\u5426\u5c5e\u4e8e ",(0,m.kt)("inlineCode",{parentName:"p"},"nums")," \u5b50\u5e8f\u5217\u7684\u6700\u5927\u516c\u7ea6\u6570\u3002"),(0,m.kt)("p",null,"\u5177\u4f53\u5224\u65ad\u65f6\u5bf9 ",(0,m.kt)("inlineCode",{parentName:"p"},"i")," \u500d\u4e58\uff0c\u82e5\u500d\u4e58\u7684\u6570\u540c\u65f6\u5c5e\u4e8e ",(0,m.kt)("inlineCode",{parentName:"p"},"nums")," \u5219\u6c42\u5176\u6700\u5927\u516c\u7ea6\u6570 ",(0,m.kt)("inlineCode",{parentName:"p"},"g"),"\uff0c",(0,m.kt)("inlineCode",{parentName:"p"},"g === i")," \u5219\u7ed3\u679c\u7d2f\u52a01\u3002"),(0,m.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function countDifferentSubsequenceGCDs(nums: number[]): number {\n    let max = 0;\n    for (const n of nums) max = n > max ? n : max;\n\n    const set = new Array(max + 1);\n    for (const n of nums) set[n] = 1;\n\n    const gcd = (x: number, y: number) => y ? gcd(y, x % y) : x;\n\n    let ans = 0;\n    for (let i = 1; i <= max; i++) {\n        if (set[i]) {\n            ans++;\n            continue;\n        }\n\n        let g = 0;\n        for (let j = 2 * i; j <= max && g !== i; j += i) {\n            if (set[j]) g = gcd(j, g);\n        }\n\n        if (g === i) ans++;\n    }\n\n    return ans;\n};\n")),(0,m.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n*logn)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,m.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"image.png",src:t(90223).Z,width:"1440",height:"402"})))}c.isMDXComponent=!0},90223:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/1673704480-FDjGhP-image-f45d0c79276294977867f1fd020b82f8.png"}}]);