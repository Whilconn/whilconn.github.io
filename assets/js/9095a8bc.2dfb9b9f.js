"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[53652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),i=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=i(n),k=a,g=p["".concat(m,".").concat(k)]||p[k]||c[k]||l;return n?r.createElement(g,u(u({ref:t},s),{},{components:n})):r.createElement(g,u({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:"2022/12/29"},u=void 0,o={permalink:"/algorithm/2032.\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c",source:"@site/algorithm/2032.\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c.md",title:"2032.\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c",description:"1\u3001\u9898\u5e72",date:"2022-12-29T00:00:00.000Z",formattedDate:"2022\u5e7412\u670829\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"}],readingTime:2.615,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:"2022/12/29"},prevItem:{title:"855.\u8003\u573a\u5c31\u5ea7",permalink:"/algorithm/855.\u8003\u573a\u5c31\u5ea7"},nextItem:{title:"1750.\u5220\u9664\u5b57\u7b26\u4e32\u4e24\u7aef\u76f8\u540c\u5b57\u7b26\u540e\u7684\u6700\u77ed\u957f\u5ea6",permalink:"/algorithm/1750.\u5220\u9664\u5b57\u7b26\u4e32\u4e24\u7aef\u76f8\u540c\u5b57\u7b26\u540e\u7684\u6700\u77ed\u957f\u5ea6"}},m={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001\u4ee3\u7801",id:"7\u4ee3\u7801",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],s={toc:i};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e09\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"nums1"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"nums2")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"nums3")," \uff0c\u8bf7\u4f60\u6784\u9020\u5e76\u8fd4\u56de\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"\u5143\u7d20\u5404\u4e0d\u76f8\u540c\u7684")," \u6570\u7ec4\uff0c\u4e14\u7531 ",(0,a.kt)("strong",{parentName:"p"},"\u81f3\u5c11")," \u5728 ",(0,a.kt)("strong",{parentName:"p"},"\u4e24\u4e2a")," \u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u6240\u6709\u503c\u7ec4\u6210",(0,a.kt)("em",{parentName:"p"},"\u3002"),"\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u53ef\u4ee5\u6309 ",(0,a.kt)("strong",{parentName:"p"},"\u4efb\u610f")," \u987a\u5e8f\u6392\u5217\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums1 = ","[","1,1,3,2","]",", nums2 = ","[","2,3","]",", nums3 = ","[","3","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","3,2","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u6240\u6709\u503c\u4e3a\uff1a",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"3 \uff0c\u5728\u5168\u90e8\u4e09\u4e2a\u6570\u7ec4\u4e2d\u90fd\u51fa\u73b0\u8fc7\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"2 \uff0c\u5728\u6570\u7ec4 nums1 \u548c nums2 \u4e2d\u51fa\u73b0\u8fc7\u3002",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums1 = ","[","3,1","]",", nums2 = ","[","2,3","]",", nums3 = ","[","1,2","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","2,3,1","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u6240\u6709\u503c\u4e3a\uff1a",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"2 \uff0c\u5728\u6570\u7ec4 nums2 \u548c nums3 \u4e2d\u51fa\u73b0\u8fc7\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"3 \uff0c\u5728\u6570\u7ec4 nums1 \u548c nums2 \u4e2d\u51fa\u73b0\u8fc7\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"1 \uff0c\u5728\u6570\u7ec4 nums1 \u548c nums3 \u4e2d\u51fa\u73b0\u8fc7\u3002",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums1 = ","[","1,2,2","]",", nums2 = ","[","4,3,3","]",", nums3 = ","[","5","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4e0d\u5b58\u5728\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums1.length, nums2.length, nums3.length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums1[i], nums2[j], nums3[k] <= 100"))),(0,a.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,a.kt)("p",null,"\u501f\u52a9\u4f4d\u8fd0\u7b97\u3001\u4e8c\u8fdb\u5236\uff0c\u8ba1\u7b97\u548c\u5b58\u50a8\u6570\u5b57\u51fa\u73b0\u6b21\u6570\uff0c\u4ee5\u6d88\u9664\u91cd\u590d\u6570\u5b57\u4ea7\u751f\u7684\u5f71\u54cd"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {\n    const bucket = new Array(101).fill(0);\n    const matrix = [nums1, nums2, nums3];\n\n    for (let i = 0; i < matrix.length; i++) {\n        for (const n of matrix[i]) bucket[n] = bucket[n] | (1 << i);\n    }\n\n    return bucket.map((c, n) => (c > 2 && c !== 4) ? n : 0).filter(Boolean);\n};\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(7213).Z,width:"1524",height:"398"})),(0,a.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,a.kt)("p",null,"\u54c8\u5e0c\u96c6\u5408\u8fc7\u6ee4\u6570\u7ec4\u4e2d\u91cd\u590d\u51fa\u73b0\u7684\u6570\u5b57"),(0,a.kt)("h2",{id:"7\u4ee3\u7801"},"7\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {\n    const s1 = new Set(nums1);\n    const s2 = new Set(nums2);\n    const s3 = new Set(nums3);\n    const s4 = new Set([...nums1, ...nums2, ...nums3]);\n\n    const ans = [];\n    for (const n of s4) {\n        const c = +s1.has(n) + +s2.has(n) + +s3.has(n);\n        if (c > 1) ans.push(n);\n    }\n\n    return ans;\n};\n")),(0,a.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,a.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(56252).Z,width:"1524",height:"398"})))}p.isMDXComponent=!0},7213:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1672279642-QWloEA-image-414c6100c7c0de63b2888e7a3a681856.png"},56252:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1672279731-LmThFy-image-e84063fa1e250879abfaa88f1843d747.png"}}]);