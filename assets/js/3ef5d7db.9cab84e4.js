"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[80675],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),c=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(u.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(n),s=r,g=m["".concat(u,".").concat(s)]||m[s]||k[s]||o;return n?l.createElement(g,a(a({ref:e},p),{},{components:n})):l.createElement(g,a({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[m]="string"==typeof t?t:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9735:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32","\u6a21\u62df"],date:"2022/2/25"},a=void 0,i={permalink:"/algorithm/2022/02/25/537.\u590d\u6570\u4e58\u6cd5",source:"@site/algorithm/2022/02/25/537.\u590d\u6570\u4e58\u6cd5.md",title:"537.\u590d\u6570\u4e58\u6cd5",description:"1\u3001\u9898\u5e72",date:"2022-02-25T00:00:00.000Z",formattedDate:"2022\u5e742\u670825\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u6a21\u62df",permalink:"/algorithm/tags/\u6a21\u62df"}],readingTime:1.525,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32","\u6a21\u62df"],date:"2022/2/25"},prevItem:{title:"\u5251\u6307 Offer II 083.\u6ca1\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217",permalink:"/algorithm/2022/02/26/\u5251\u6307 Offer II 083.\u6ca1\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217"},nextItem:{title:"1706.\u7403\u4f1a\u843d\u4f55\u5904",permalink:"/algorithm/2022/02/24/1706.\u7403\u4f1a\u843d\u4f55\u5904"}},u={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],p={toc:c};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://baike.baidu.com/item/%E5%A4%8D%E6%95%B0/254365?fr=aladdin",target:"_blank"},"\u590d\u6570")," \u53ef\u4ee5\u7528\u5b57\u7b26\u4e32\u8868\u793a\uff0c\u9075\u5faa ",(0,r.kt)("code",null,'"',(0,r.kt)("strong",null,"\u5b9e\u90e8"),"+",(0,r.kt)("strong",null,"\u865a\u90e8"),'i"')," \u7684\u5f62\u5f0f\uff0c\u5e76\u6ee1\u8db3\u4e0b\u8ff0\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"\u5b9e\u90e8")," \u662f\u4e00\u4e2a\u6574\u6570\uff0c\u53d6\u503c\u8303\u56f4\u662f ",(0,r.kt)("code",null,"[-100, 100]")),(0,r.kt)("li",null,(0,r.kt)("code",null,"\u865a\u90e8")," \u4e5f\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u53d6\u503c\u8303\u56f4\u662f ",(0,r.kt)("code",null,"[-100, 100]")),(0,r.kt)("li",null,(0,r.kt)("code",null,"i",(0,r.kt)("sup",null,"2")," == -1"))),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u5b57\u7b26\u4e32\u8868\u793a\u7684\u590d\u6570 ",(0,r.kt)("code",null,"num1")," \u548c ",(0,r.kt)("code",null,"num2")," \uff0c\u8bf7\u4f60\u9075\u5faa\u590d\u6570\u8868\u793a\u5f62\u5f0f\uff0c\u8fd4\u56de\u8868\u793a\u5b83\u4eec\u4e58\u79ef\u7684\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'num1 = "1+1i", num2 = "1+1i"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"0+2i"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i \uff0c\u4f60\u9700\u8981\u5c06\u5b83\u8f6c\u6362\u4e3a 0+2i \u7684\u5f62\u5f0f\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'num1 = "1+-1i", num2 = "1+-1i"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),'"0+-2i"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"(1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i \uff0c\u4f60\u9700\u8981\u5c06\u5b83\u8f6c\u6362\u4e3a 0+-2i \u7684\u5f62\u5f0f\u3002 ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"num1")," \u548c ",(0,r.kt)("code",null,"num2")," \u90fd\u662f\u6709\u6548\u7684\u590d\u6570\u8868\u793a\u3002")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u51fa\u6240\u6709\u6574\u6570\u518d\u8fdb\u884c\u8ba1\u7b97"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var complexNumberMultiply = function (num1, num2) {\n    const [n1, n2, n3, n4] = (num1 + num2).match(/-?\\d+/g).map((n) => +n);\n    return `${n1 * n3 - n2 * n4}+${n1 * n4 + n2 * n3}i`;\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1645752868-ccFOfx-image.png",alt:"image.png"})))}m.isMDXComponent=!0}}]);