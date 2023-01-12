"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[97707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),c=a,d=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:"2022/1/9"},i=void 0,p={permalink:"/algorithm/1629.\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e",source:"@site/algorithm/1629.\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e.md",title:"1629.\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e",description:"1\u3001\u9898\u5e72",date:"2022-01-09T00:00:00.000Z",formattedDate:"2022\u5e741\u67089\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.99,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:"2022/1/9"},prevItem:{title:"306.\u7d2f\u52a0\u6570",permalink:"/algorithm/306.\u7d2f\u52a0\u6570"},nextItem:{title:"89.\u683c\u96f7\u7f16\u7801",permalink:"/algorithm/89.\u683c\u96f7\u7f16\u7801"}},o={authorsImageUrls:[void 0]},s=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],m={toc:s};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"LeetCode \u8bbe\u8ba1\u4e86\u4e00\u6b3e\u65b0\u5f0f\u952e\u76d8\uff0c\u6b63\u5728\u6d4b\u8bd5\u5176\u53ef\u7528\u6027\u3002\u6d4b\u8bd5\u4eba\u5458\u5c06\u4f1a\u70b9\u51fb\u4e00\u7cfb\u5217\u952e\uff08\u603b\u8ba1 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a\uff09\uff0c\u6bcf\u6b21\u4e00\u4e2a\u3002"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u7684\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"keysPressed")," \uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"keysPressed[i]")," \u8868\u793a\u6d4b\u8bd5\u5e8f\u5217\u4e2d\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u4e2a\u88ab\u6309\u4e0b\u7684\u952e\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"releaseTimes")," \u662f\u4e00\u4e2a\u5347\u5e8f\u6392\u5217\u7684\u5217\u8868\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"releaseTimes[i]")," \u8868\u793a\u677e\u5f00\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u4e2a\u952e\u7684\u65f6\u95f4\u3002\u5b57\u7b26\u4e32\u548c\u6570\u7ec4\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u6807\u90fd\u4ece 0 \u5f00\u59cb")," \u3002\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u4e2a\u952e\u5728\u65f6\u95f4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u65f6\u88ab\u6309\u4e0b\uff0c\u63a5\u4e0b\u6765\u6bcf\u4e2a\u952e\u90fd ",(0,a.kt)("strong",{parentName:"p"},"\u6070\u597d")," \u5728\u524d\u4e00\u4e2a\u952e\u677e\u5f00\u65f6\u88ab\u6309\u4e0b\u3002"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u4eba\u5458\u60f3\u8981\u627e\u51fa\u6309\u952e ",(0,a.kt)("strong",{parentName:"p"},"\u6301\u7eed\u65f6\u95f4\u6700\u957f")," \u7684\u952e\u3002\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u6b21\u6309\u952e\u7684\u6301\u7eed\u65f6\u95f4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"releaseTimes[i] - releaseTimes[i - 1]")," \uff0c\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u6b21\u6309\u952e\u7684\u6301\u7eed\u65f6\u95f4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"releaseTimes[0]")," \u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u6d4b\u8bd5\u671f\u95f4\uff0c\u540c\u4e00\u4e2a\u952e\u53ef\u4ee5\u5728\u4e0d\u540c\u65f6\u523b\u88ab\u591a\u6b21\u6309\u4e0b\uff0c\u800c\u6bcf\u6b21\u7684\u6301\u7eed\u65f6\u95f4\u90fd\u53ef\u80fd\u4e0d\u540c\u3002"),(0,a.kt)("p",null,"\u8bf7\u8fd4\u56de\u5355\u6b21\u6309\u952e ",(0,a.kt)("strong",{parentName:"p"},"\u6301\u7eed\u65f6\u95f4\u6700\u957f")," \u7684\u952e\uff0c\u5982\u679c\u6709\u591a\u4e2a\u8fd9\u6837\u7684\u952e\uff0c\u5219\u8fd4\u56de ",(0,a.kt)("strong",{parentName:"p"},"\u6309\u5b57\u6bcd\u987a\u5e8f\u6392\u5217\u6700\u5927")," \u7684\u90a3\u4e2a\u952e\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," releaseTimes = ","[","9,29,49,50","]",', keysPressed = "cbcd"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "c"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6309\u952e\u987a\u5e8f\u548c\u6301\u7eed\u65f6\u95f4\u5982\u4e0b\uff1a",(0,a.kt)("br",null),"\n\u6309\u4e0b 'c' \uff0c\u6301\u7eed\u65f6\u95f4 9\uff08\u65f6\u95f4 0 \u6309\u4e0b\uff0c\u65f6\u95f4 9 \u677e\u5f00\uff09",(0,a.kt)("br",null),"\n\u6309\u4e0b 'b' \uff0c\u6301\u7eed\u65f6\u95f4 29 - 9 = 20\uff08\u677e\u5f00\u4e0a\u4e00\u4e2a\u952e\u7684\u65f6\u95f4 9 \u6309\u4e0b\uff0c\u65f6\u95f4 29 \u677e\u5f00\uff09",(0,a.kt)("br",null),"\n\u6309\u4e0b 'c' \uff0c\u6301\u7eed\u65f6\u95f4 49 - 29 = 20\uff08\u677e\u5f00\u4e0a\u4e00\u4e2a\u952e\u7684\u65f6\u95f4 29 \u6309\u4e0b\uff0c\u65f6\u95f4 49 \u677e\u5f00\uff09",(0,a.kt)("br",null),"\n\u6309\u4e0b 'd' \uff0c\u6301\u7eed\u65f6\u95f4 50 - 49 = 1\uff08\u677e\u5f00\u4e0a\u4e00\u4e2a\u952e\u7684\u65f6\u95f4 49 \u6309\u4e0b\uff0c\u65f6\u95f4 50 \u677e\u5f00\uff09",(0,a.kt)("br",null),"\n\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e\u662f 'b' \u548c 'c'\uff08\u7b2c\u4e8c\u6b21\u6309\u4e0b\u65f6\uff09\uff0c\u6301\u7eed\u65f6\u95f4\u90fd\u662f 20",(0,a.kt)("br",null),"\n'c' \u6309\u5b57\u6bcd\u987a\u5e8f\u6392\u5217\u6bd4 'b' \u5927\uff0c\u6240\u4ee5\u7b54\u6848\u662f 'c'",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," releaseTimes = ","[","12,23,36,46,62","]",', keysPressed = "spuda"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "a"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6309\u952e\u987a\u5e8f\u548c\u6301\u7eed\u65f6\u95f4\u5982\u4e0b\uff1a",(0,a.kt)("br",null),"\n\u6309\u4e0b 's' \uff0c\u6301\u7eed\u65f6\u95f4 12",(0,a.kt)("br",null),"\n\u6309\u4e0b 'p' \uff0c\u6301\u7eed\u65f6\u95f4 23 - 12 = 11",(0,a.kt)("br",null),"\n\u6309\u4e0b 'u' \uff0c\u6301\u7eed\u65f6\u95f4 36 - 23 = 13",(0,a.kt)("br",null),"\n\u6309\u4e0b 'd' \uff0c\u6301\u7eed\u65f6\u95f4 46 - 36 = 10",(0,a.kt)("br",null),"\n\u6309\u4e0b 'a' \uff0c\u6301\u7eed\u65f6\u95f4 62 - 46 = 16",(0,a.kt)("br",null),"\n\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e\u662f 'a' \uff0c\u6301\u7eed\u65f6\u95f4 16",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"releaseTimes.length == n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keysPressed.length == n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2 <= n <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= releaseTimes[i] <= 10^9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"releaseTimes[i] < releaseTimes[i+1]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keysPressed")," \u4ec5\u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u6839\u636e\u9898\u610f\u904d\u5386\u6240\u6709\u6309\u952e",(0,a.kt)("inlineCode",{parentName:"p"},"keysPressed"),"\uff0c\u82e5\u6309\u952e\u65f6\u957f",(0,a.kt)("inlineCode",{parentName:"p"},"releaseTimes[i] - (releaseTimes[i - 1] || 0)"),"\u8d85\u8fc7\u4ee5\u5f80\u6700\u5927\u65f6\u957f",(0,a.kt)("inlineCode",{parentName:"p"},"maxTime"),"\u6216\u7b49\u4e8e\u4ee5\u5f80\u6700\u5927\u65f6\u957f\u4e14\u8be5\u6309\u952e\u5b57\u5178\u5e8f\u66f4\u5927\uff0c\u5219\u5c06\u8be5\u65f6\u957f\u8bb0\u4e3a\u6700\u5927\u65f6\u957f",(0,a.kt)("inlineCode",{parentName:"p"},"maxTime"),"\uff0c\u8be5\u6309\u952e\u8bb0\u4e3a\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u6700\u7ec8\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var slowestKey = function (releaseTimes, keysPressed) {\n    let maxTime = 0, key = keysPressed[0];\n    for (let i = 0; i < keysPressed.length; i++) {\n        const time = releaseTimes[i] - (releaseTimes[i - 1] || 0);\n        if (time > maxTime || (time === maxTime && keysPressed[i] > key)) maxTime = time, key = keysPressed[i];\n    }\n    return key;\n};\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1641711901-vgCJNO-image.png",alt:"image.png"})))}k.isMDXComponent=!0}}]);