"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[26491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,d=m["".concat(i,".").concat(s)]||m[s]||k[s]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:"2021/11/1"},o=void 0,p={permalink:"/algorithm/575.\u5206\u7cd6\u679c",source:"@site/algorithm/575.\u5206\u7cd6\u679c.md",title:"575.\u5206\u7cd6\u679c",description:"1\u3001\u9898\u5e72",date:"2021-11-01T00:00:00.000Z",formattedDate:"2021\u5e7411\u67081\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"}],readingTime:1.765,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:"2021/11/1"},prevItem:{title:"378.\u6709\u5e8f\u77e9\u9635\u4e2d\u7b2c K \u5c0f\u7684\u5143\u7d20",permalink:"/algorithm/378.\u6709\u5e8f\u77e9\u9635\u4e2d\u7b2c K \u5c0f\u7684\u5143\u7d20"},nextItem:{title:"\u9762\u8bd5\u9898 17.09.\u7b2c k \u4e2a\u6570",permalink:"/algorithm/\u9762\u8bd5\u9898 17.09.\u7b2c k \u4e2a\u6570"}},i={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"Alice \u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u679a\u7cd6\uff0c\u5176\u4e2d\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u679a\u7cd6\u7684\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"candyType[i]")," \u3002Alice \u6ce8\u610f\u5230\u5979\u7684\u4f53\u91cd\u6b63\u5728\u589e\u957f\uff0c\u6240\u4ee5\u524d\u53bb\u62dc\u8bbf\u4e86\u4e00\u4f4d\u533b\u751f\u3002"),(0,a.kt)("p",null,"\u533b\u751f\u5efa\u8bae Alice \u8981\u5c11\u6444\u5165\u7cd6\u5206\uff0c\u53ea\u5403\u6389\u5979\u6240\u6709\u7cd6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"n / 2")," \u5373\u53ef\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u4e00\u4e2a\u5076\u6570\uff09\u3002Alice \u975e\u5e38\u559c\u6b22\u8fd9\u4e9b\u7cd6\uff0c\u5979\u60f3\u8981\u5728\u9075\u5faa\u533b\u751f\u5efa\u8bae\u7684\u60c5\u51b5\u4e0b\uff0c\u5c3d\u53ef\u80fd\u5403\u5230\u6700\u591a\u4e0d\u540c\u79cd\u7c7b\u7684\u7cd6\u3002"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u7684\u6574\u6570\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"candyType")," \uff0c\u8fd4\u56de\uff1a Alice ",(0,a.kt)("em",{parentName:"p"},"\u5728\u4ec5\u5403\u6389 ",(0,a.kt)("inlineCode",{parentName:"em"},"n / 2")," \u679a\u7cd6\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u5403\u5230\u7cd6\u7684 ",(0,a.kt)("strong",{parentName:"em"},"\u6700\u591a")," \u79cd\u7c7b\u6570"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," candyType = ","[","1,1,2,2,3,3","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 3",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," Alice \u53ea\u80fd\u5403 6 / 2 = 3 \u679a\u7cd6\uff0c\u7531\u4e8e\u53ea\u6709 3 \u79cd\u7cd6\uff0c\u5979\u53ef\u4ee5\u6bcf\u79cd\u5403\u4e00\u679a\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," candyType = ","[","1,1,2,3","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," Alice \u53ea\u80fd\u5403 4 / 2 = 2 \u679a\u7cd6\uff0c\u4e0d\u7ba1\u5979\u9009\u62e9\u5403\u7684\u79cd\u7c7b\u662f ","[","1,2","]","\u3001","[","1,3","]"," \u8fd8\u662f ","[","2,3","]","\uff0c\u5979\u53ea\u80fd\u5403\u5230\u4e24\u79cd\u4e0d\u540c\u7c7b\u7684\u7cd6\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," candyType = ","[","6,6,6,6","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," Alice \u53ea\u80fd\u5403 4 / 2 = 2 \u679a\u7cd6\uff0c\u5c3d\u7ba1\u5979\u80fd\u5403 2 \u679a\uff0c\u4f46\u53ea\u80fd\u5403\u5230 1 \u79cd\u7cd6\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == candyType.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2 <= n <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n")," \u662f\u4e00\u4e2a\u5076\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10^5 <= candyType[i] <= 10^5"))),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} candyType\n * @return {number}\n */\nvar distributeCandies = function (candyType) {\n    return Math.min(new Set(candyType).size, candyType.length / 2);\n};\n")))}m.isMDXComponent=!0}}]);