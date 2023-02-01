"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[61567],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,N=c["".concat(i,".").concat(u)]||c[u]||k[u]||m;return a?n.createElement(N,l(l({ref:t},o),{},{components:a})):n.createElement(N,l({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,l=new Array(m);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<m;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const m={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4"],date:"2022/12/16"},l=void 0,p={permalink:"/algorithm/1785.\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20",source:"@site/algorithm/1785.\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20.md",title:"1785.\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20",description:"1\u3001\u9898\u5e72",date:"2022-12-16T00:00:00.000Z",formattedDate:"2022\u5e7412\u670816\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"}],readingTime:1.565,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4"],date:"2022/12/16"},prevItem:{title:"1759.\u7edf\u8ba1\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/algorithm/1759.\u7edf\u8ba1\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee"},nextItem:{title:"\u9762\u8bd5\u9898 17.09.\u7b2c k \u4e2a\u6570",permalink:"/algorithm/\u9762\u8bd5\u9898 17.09.\u7b2c k \u4e2a\u6570"}},i={authorsImageUrls:[void 0]},s=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],o={toc:s};function c(e){let{components:t,...m}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," \uff0c\u548c\u4e24\u4e2a\u6574\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"goal")," \u3002\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," \u6709\u4e00\u6761\u91cd\u8981\u5c5e\u6027\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"abs(nums[i]) <= limit")," \u3002"),(0,r.kt)("p",null,"\u8fd4\u56de\u4f7f\u6570\u7ec4\u5143\u7d20\u603b\u548c\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"goal")," \u6240\u9700\u8981\u5411\u6570\u7ec4\u4e2d\u6dfb\u52a0\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u6700\u5c11\u5143\u7d20\u6570\u91cf")," \uff0c\u6dfb\u52a0\u5143\u7d20 ",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u5e94\u6539\u53d8")," \u6570\u7ec4\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"abs(nums[i]) <= limit")," \u8fd9\u4e00\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"x >= 0")," \uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"abs(x)")," \u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," \uff1b\u5426\u5219\uff0c\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"-x")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,-1,1","]",", limit = 3, goal = -4",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u53ef\u4ee5\u5c06 -2 \u548c -3 \u6dfb\u52a0\u5230\u6570\u7ec4\u4e2d\uff0c\u6570\u7ec4\u7684\u5143\u7d20\u603b\u548c\u53d8\u4e3a 1 - 1 + 1 - 2 - 3 = -4 \u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,-10,9,1","]",", limit = 100, goal = 0",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= limit <= 10^6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-limit <= nums[i] <= limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^9 <= goal <= 10^9"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Problem: ",(0,r.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/minimum-elements-to-add-to-form-a-given-sum/description/"},"1785. \u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20"))),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u8d2a\u5fc3\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," \u603b\u548c\u5927\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"goal")," \u65f6\u90fd\u8f6c\u6210\u76f8\u53cd\u6570"),(0,r.kt)("h1",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function minElements(nums: number[], limit: number, goal: number): number {\n    const d = goal - nums.reduce((a, c) => a + c, 0);\n    return d < 0 ? minElements(nums.map(n => -n), limit, -goal) : Math.ceil(d / limit);\n};\n")),(0,r.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(3853).Z,width:"1474",height:"396"})))}c.isMDXComponent=!0},3853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1671155100-gEjrlu-image-38e136ba9723333357bb3ce027e56473.png"}}]);