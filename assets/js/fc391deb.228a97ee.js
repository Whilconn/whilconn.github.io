"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[49031],{49613:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=s(n),c=a,g=k["".concat(i,".").concat(c)]||k[c]||m[c]||l;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[k]="string"==typeof t?t:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71730:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(15882),a=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u56de\u6eaf"],date:"2022/12/4"},o=void 0,p={permalink:"/algorithm/1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c",source:"@site/algorithm/1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c.md",title:"1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c",description:"1\u3001\u9898\u5e72",date:"2022-12-04T00:00:00.000Z",formattedDate:"2022\u5e7412\u67084\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"}],readingTime:3.775,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u52a8\u6001\u89c4\u5212","\u56de\u6eaf"],date:"2022/12/4"},prevItem:{title:"1775.\u901a\u8fc7\u6700\u5c11\u64cd\u4f5c\u6b21\u6570\u4f7f\u6570\u7ec4\u7684\u548c\u76f8\u7b49",permalink:"/algorithm/1775.\u901a\u8fc7\u6700\u5c11\u64cd\u4f5c\u6b21\u6570\u4f7f\u6570\u7ec4\u7684\u548c\u76f8\u7b49"},nextItem:{title:"1769.\u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570",permalink:"/algorithm/1769.\u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570"}},i={authorsImageUrls:[void 0]},s=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],u={toc:s};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u4f60\u6253\u7b97\u505a\u751c\u70b9\uff0c\u73b0\u5728\u9700\u8981\u8d2d\u4e70\u914d\u6599\u3002\u76ee\u524d\u5171\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u79cd\u51b0\u6fc0\u51cc\u57fa\u6599\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," \u79cd\u914d\u6599\u53ef\u4f9b\u9009\u8d2d\u3002\u800c\u5236\u4f5c\u751c\u70b9\u9700\u8981\u9075\u5faa\u4ee5\u4e0b\u51e0\u6761\u89c4\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"\u4e00\u79cd")," \u51b0\u6fc0\u51cc\u57fa\u6599\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6dfb\u52a0 ",(0,a.kt)("strong",{parentName:"li"},"\u4e00\u79cd\u6216\u591a\u79cd")," \u914d\u6599\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u6dfb\u52a0\u4efb\u4f55\u914d\u6599\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u79cd\u7c7b\u578b\u7684\u914d\u6599 ",(0,a.kt)("strong",{parentName:"li"},"\u6700\u591a\u4e24\u4efd")," \u3002")),(0,a.kt)("p",null,"\u7ed9\u4f60\u4ee5\u4e0b\u4e09\u4e2a\u8f93\u5165\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"baseCosts")," \uff0c\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," \u7684\u6574\u6570\u6570\u7ec4\uff0c\u5176\u4e2d\u6bcf\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"baseCosts[i]")," \u8868\u793a\u7b2c ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," \u79cd\u51b0\u6fc0\u51cc\u57fa\u6599\u7684\u4ef7\u683c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toppingCosts"),"\uff0c\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"m")," \u7684\u6574\u6570\u6570\u7ec4\uff0c\u5176\u4e2d\u6bcf\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"toppingCosts[i]")," \u8868\u793a ",(0,a.kt)("strong",{parentName:"li"},"\u4e00\u4efd")," \u7b2c ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," \u79cd\u51b0\u6fc0\u51cc\u914d\u6599\u7684\u4ef7\u683c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target")," \uff0c\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u4f60\u5236\u4f5c\u751c\u70b9\u7684\u76ee\u6807\u4ef7\u683c\u3002")),(0,a.kt)("p",null,"\u4f60\u5e0c\u671b\u81ea\u5df1\u505a\u7684\u751c\u70b9\u603b\u6210\u672c\u5c3d\u53ef\u80fd\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u3002"),(0,a.kt)("p",null,"\u8fd4\u56de\u6700\u63a5\u8fd1 ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u7684\u751c\u70b9\u6210\u672c\u3002\u5982\u679c\u6709\u591a\u79cd\u65b9\u6848\uff0c\u8fd4\u56de\xa0",(0,a.kt)("strong",{parentName:"p"},"\u6210\u672c\u76f8\u5bf9\u8f83\u4f4e")," \u7684\u4e00\u79cd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," baseCosts = ","[","1,7","]",", toppingCosts = ","[","3,4","]",", target = 10",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 10",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u8003\u8651\u4e0b\u9762\u7684\u65b9\u6848\u7ec4\u5408\uff08\u6240\u6709\u4e0b\u6807\u5747\u4ece 0 \u5f00\u59cb\uff09\uff1a",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 1 \u53f7\u57fa\u6599\uff1a\u6210\u672c 7",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 1 \u4efd 0 \u53f7\u914d\u6599\uff1a\u6210\u672c 1 x 3 = 3",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 0 \u4efd 1 \u53f7\u914d\u6599\uff1a\u6210\u672c 0 x 4 = 0",(0,a.kt)("br",null),"\n\u603b\u6210\u672c\uff1a7 + 3 + 0 = 10 \u3002",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," baseCosts = ","[","2,3","]",", toppingCosts = ","[","4,5,100","]",", target = 18",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 17",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u8003\u8651\u4e0b\u9762\u7684\u65b9\u6848\u7ec4\u5408\uff08\u6240\u6709\u4e0b\u6807\u5747\u4ece 0 \u5f00\u59cb\uff09\uff1a",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 1 \u53f7\u57fa\u6599\uff1a\u6210\u672c 3",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 1 \u4efd 0 \u53f7\u914d\u6599\uff1a\u6210\u672c 1 x 4 = 4",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 2 \u4efd 1 \u53f7\u914d\u6599\uff1a\u6210\u672c 2 x 5 = 10",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 0 \u4efd 2 \u53f7\u914d\u6599\uff1a\u6210\u672c 0 x 100 = 0",(0,a.kt)("br",null),"\n\u603b\u6210\u672c\uff1a3 + 4 + 10 + 0 = 17 \u3002\u4e0d\u5b58\u5728\u603b\u6210\u672c\u4e3a 18 \u7684\u751c\u70b9\u5236\u4f5c\u65b9\u6848\u3002",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," baseCosts = ","[","3,10","]",", toppingCosts = ","[","2,5","]",", target = 9",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 8",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u53ef\u4ee5\u5236\u4f5c\u603b\u6210\u672c\u4e3a 8 \u548c 10 \u7684\u751c\u70b9\u3002\u8fd4\u56de 8 \uff0c\u56e0\u4e3a\u8fd9\u662f\u6210\u672c\u66f4\u4f4e\u7684\u65b9\u6848\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 4\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," baseCosts = ","[","10","]",", toppingCosts = ","[","1","]",", target = 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 10",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6ce8\u610f\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4e0d\u6dfb\u52a0\u4efb\u4f55\u914d\u6599\uff0c\u4f46\u4f60\u5fc5\u987b\u9009\u62e9\u4e00\u79cd\u57fa\u6599\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == baseCosts.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m == toppingCosts.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n, m <= 10")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= baseCosts[i], toppingCosts[i] <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= target <= 10^4"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Problem: ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/closest-dessert-cost/description/"},"1774. \u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c"))),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("p",null,"\u66b4\u529b\u641c\u7d22\uff0c\u786e\u5b9a\u57fa\u6599\uff0c\u679a\u4e3e\u914d\u6599"),(0,a.kt)("h2",{id:"3code"},"3\u3001Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function closestCost(baseCosts: number[], toppingCosts: number[], target: number): number {\n    let ans = baseCosts[0];\n\n    function dfs(c: number, ti: number) {\n        if (c === target) return ans = target;\n        else {\n            const d1 = Math.abs(c - target), d2 = Math.abs(ans - target);\n            if (d1 < d2 || (d1 === d2 && c < ans)) ans = c;\n        }\n\n        for (let i = ti; i < toppingCosts.length && c <= target; i++) {\n            for (let k = 0; k < 3; k++) dfs(c + k * toppingCosts[i], i + 1);\n        }\n    }\n\n    for (const b of baseCosts) dfs(b, 0);\n\n    return ans;\n};\n")),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1670132640-tlPgXU-image.png",alt:"image.png"})))}k.isMDXComponent=!0}}]);