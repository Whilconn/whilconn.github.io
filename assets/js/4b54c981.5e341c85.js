"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[57539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,g=c["".concat(i,".").concat(k)]||c[k]||s[k]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},63363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6392\u5e8f"],date:"2022/1/13"},o=void 0,p={permalink:"/algorithm/747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570",source:"@site/algorithm/747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570.md",title:"747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570",description:"1\u3001\u9898\u5e72",date:"2022-01-13T00:00:00.000Z",formattedDate:"2022\u5e741\u670813\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:1.785,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6392\u5e8f"],date:"2022/1/13"},prevItem:{title:"373.\u67e5\u627e\u548c\u6700\u5c0f\u7684 K \u5bf9\u6570\u5b57",permalink:"/algorithm/373.\u67e5\u627e\u548c\u6700\u5c0f\u7684 K \u5bf9\u6570\u5b57"},nextItem:{title:"\u5251\u6307 Offer II 057.\u503c\u548c\u4e0b\u6807\u4e4b\u5dee\u90fd\u5728\u7ed9\u5b9a\u7684\u8303\u56f4\u5185",permalink:"/algorithm/\u5251\u6307 Offer II 057.\u503c\u548c\u4e0b\u6807\u4e4b\u5dee\u90fd\u5728\u7ed9\u5b9a\u7684\u8303\u56f4\u5185"}},i={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," \uff0c\u5176\u4e2d\u603b\u662f\u5b58\u5728 ",(0,a.kt)("strong",{parentName:"p"},"\u552f\u4e00\u7684")," \u4e00\u4e2a\u6700\u5927\u6574\u6570 \u3002"),(0,a.kt)("p",null,"\u8bf7\u4f60\u627e\u51fa\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u5143\u7d20\u5e76\u68c0\u67e5\u5b83\u662f\u5426 ",(0,a.kt)("strong",{parentName:"p"},"\u81f3\u5c11\u662f\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5176\u4ed6\u6570\u5b57\u7684\u4e24\u500d")," \u3002\u5982\u679c\u662f\uff0c\u5219\u8fd4\u56de ",(0,a.kt)("strong",{parentName:"p"},"\u6700\u5927\u5143\u7d20\u7684\u4e0b\u6807")," \uff0c\u5426\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","3,6,1,0","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," 6 \u662f\u6700\u5927\u7684\u6574\u6570\uff0c\u5bf9\u4e8e\u6570\u7ec4\u4e2d\u7684\u5176\u4ed6\u6574\u6570\uff0c6 \u81f3\u5c11\u662f\u6570\u7ec4\u4e2d\u5176\u4ed6\u5143\u7d20\u7684\u4e24\u500d\u30026 \u7684\u4e0b\u6807\u662f 1 \uff0c\u6240\u4ee5\u8fd4\u56de 1 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1,2,3,4","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","-","1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," 4 \u6ca1\u6709\u8d85\u8fc7 3 \u7684\u4e24\u500d\u5927\uff0c\u6240\u4ee5\u8fd4\u56de -1 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","1","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 0",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u56e0\u4e3a\u4e0d\u5b58\u5728\u5176\u4ed6\u6570\u5b57\uff0c\u6240\u4ee5\u8ba4\u4e3a\u73b0\u6709\u6570\u5b57 1 \u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u7684\u4e24\u500d\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 50")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nums")," \u4e2d\u7684\u6700\u5927\u5143\u7d20\u662f\u552f\u4e00\u7684")),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u904d\u5386\u4e24\u6b21\uff0c\u5148\u627e\u5230\u6700\u5927\u6570\u7684\u5e8f\u53f7",(0,a.kt)("inlineCode",{parentName:"p"},"idx"),"\uff0c\u518d\u67e5\u627e\u662f\u5426\u5b58\u5728\u4e582\u4e4b\u540e\u5927\u4e8e\u6700\u5927\u6570\u7684\u6574\u6570\uff0c\u82e5\u6709\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"\u53cd\u4e4b\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"idx"),"\u3002"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var dominantIndex = function (nums) {\n    const idx = nums.reduce((a, c, i) => c > nums[a] ? i : a, 0);\n    return nums.some((v, i) => i !== idx && 2 * v > nums[idx]) ? -1 : idx;\n};\n")),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1642007634-Yldvro-image.png",alt:"image.png"})))}c.isMDXComponent=!0}}]);