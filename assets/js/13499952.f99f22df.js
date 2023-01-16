"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[64852],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),k=a,d=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(15882),a=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4"],date:"2022/12/16"},i=void 0,o={permalink:"/algorithm/1785.\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20",source:"@site/algorithm/1785.\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20.md",title:"1785.\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20",description:"1\u3001\u9898\u5e72",date:"2022-12-16T00:00:00.000Z",formattedDate:"2022\u5e7412\u670816\u65e5",tags:[{label:"\u8d2a\u5fc3",permalink:"/algorithm/tags/\u8d2a\u5fc3"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"}],readingTime:1.565,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8d2a\u5fc3","\u6570\u7ec4"],date:"2022/12/16"},prevItem:{title:"1759.\u7edf\u8ba1\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/algorithm/1759.\u7edf\u8ba1\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee"},nextItem:{title:"\u9762\u8bd5\u9898 17.09.\u7b2c k \u4e2a\u6570",permalink:"/algorithm/\u9762\u8bd5\u9898 17.09.\u7b2c k \u4e2a\u6570"}},p={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],u={toc:m};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," \uff0c\u548c\u4e24\u4e2a\u6574\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"goal")," \u3002\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," \u6709\u4e00\u6761\u91cd\u8981\u5c5e\u6027\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"abs(nums[i]) <= limit")," \u3002"),(0,a.kt)("p",null,"\u8fd4\u56de\u4f7f\u6570\u7ec4\u5143\u7d20\u603b\u548c\u7b49\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"goal")," \u6240\u9700\u8981\u5411\u6570\u7ec4\u4e2d\u6dfb\u52a0\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6700\u5c11\u5143\u7d20\u6570\u91cf")," \uff0c\u6dfb\u52a0\u5143\u7d20 ",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u5e94\u6539\u53d8")," \u6570\u7ec4\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"abs(nums[i]) <= limit")," \u8fd9\u4e00\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"x >= 0")," \uff0c\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"p"},"abs(x)")," \u7b49\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," \uff1b\u5426\u5219\uff0c\u7b49\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"-x")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,-1,1","]",", limit = 3, goal = -4",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u53ef\u4ee5\u5c06 -2 \u548c -3 \u6dfb\u52a0\u5230\u6570\u7ec4\u4e2d\uff0c\u6570\u7ec4\u7684\u5143\u7d20\u603b\u548c\u53d8\u4e3a 1 - 1 + 1 - 2 - 3 = -4 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,-10,9,1","]",", limit = 100, goal = 0",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= limit <= 10^6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-limit <= nums[i] <= limit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10^9 <= goal <= 10^9"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Problem: ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/minimum-elements-to-add-to-form-a-given-sum/description/"},"1785. \u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20"))),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("p",null,"\u8d2a\u5fc3\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," \u603b\u548c\u5927\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"goal")," \u65f6\u90fd\u8f6c\u6210\u76f8\u53cd\u6570"),(0,a.kt)("h1",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function minElements(nums: number[], limit: number, goal: number): number {\n    const d = goal - nums.reduce((a, c) => a + c, 0);\n    return d < 0 ? minElements(nums.map(n => -n), limit, -goal) : Math.ceil(d / limit);\n};\n")),(0,a.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(79651).Z,width:"1474",height:"396"})))}c.isMDXComponent=!0},79651:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1671155100-gEjrlu-image-38e136ba9723333357bb3ce027e56473.png"}}]);