"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[16621],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),k=l,g=s["".concat(p,".").concat(k)]||s[k]||m[k]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},82892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(15882),l=(n(59496),n(49613));const a={authors:["Whilconn"],tags:["\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/2/23"},o=void 0,i={permalink:"/algorithm/917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",source:"@site/algorithm/917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd.md",title:"917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",description:"1\u3001\u9898\u5e72",date:"2022-02-23T00:00:00.000Z",formattedDate:"2022\u5e742\u670823\u65e5",tags:[{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:1.12,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/2/23"},prevItem:{title:"1706.\u7403\u4f1a\u843d\u4f55\u5904",permalink:"/algorithm/1706.\u7403\u4f1a\u843d\u4f55\u5904"},nextItem:{title:"1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee",permalink:"/algorithm/1994.\u597d\u5b50\u96c6\u7684\u6570\u76ee"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \uff0c\u6839\u636e\u4e0b\u8ff0\u89c4\u5219\u53cd\u8f6c\u5b57\u7b26\u4e32\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u975e\u82f1\u6587\u5b57\u6bcd\u4fdd\u7559\u5728\u539f\u6709\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u82f1\u6587\u5b57\u6bcd\uff08\u5c0f\u5199\u6216\u5927\u5199\uff09\u4f4d\u7f6e\u53cd\u8f6c\u3002")),(0,l.kt)("p",null,"\u8fd4\u56de\u53cd\u8f6c\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," ",(0,l.kt)("em",{parentName:"p"},"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "ab-cd"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "dc-ba"',(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "a-bC-dEf-ghIj"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "j-Ih-gfE-dCba"',(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "Test1ng-Leet=code-Q!"',(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),' "Qedo1ct-eeLg=ntse-T!"',(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 100")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s")," \u4ec5\u7531 ASCII \u503c\u5728\u8303\u56f4 ",(0,l.kt)("inlineCode",{parentName:"li"},"[33, 122]")," \u7684\u5b57\u7b26\u7ec4\u6210"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s")," \u4e0d\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"'\\\"'")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"'\\\\'"))),(0,l.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,l.kt)("p",null,"\u53cc\u6307\u9488\u904d\u5386\u5b57\u7b26\u4e32\uff0c\u5de6\u53f3\u90fd\u662f\u5b57\u6bcd\u65f6\u4ea4\u6362\u4f4d\u7f6e"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reverseOnlyLetters = function (s) {\n    s = [...s];\n    for (let l = 0, r = s.length - 1; l < r; l++, r--) {\n        while (l < r && !(/[a-z]/i.test(s[l]))) l++;\n        while (l < r && !(/[a-z]/i.test(s[r]))) r--;\n        [s[l], s[r]] = [s[r], s[l]];\n    }\n    return s.join('');\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1645547715-IpBayw-image.png",alt:"image.png"})))}s.isMDXComponent=!0}}]);