"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[96968],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=c(n),m=l,f=s["".concat(i,".").concat(m)]||s[m]||k[m]||a;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[s]="string"==typeof t?t:l,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74577:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u52a8\u6001\u89c4\u5212"],date:new Date("2021-11-05T00:00:00.000Z")},o=void 0,u={permalink:"/algorithm/2021/11/05/1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",source:"@site/algorithm/2021/11/05/1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217.md",title:"1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",description:"1\u3001\u9898\u5e72",date:"2021-11-05T00:00:00.000Z",formattedDate:"2021\u5e7411\u67085\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:1.42,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868","\u52a8\u6001\u89c4\u5212"],date:"2021-11-05T00:00:00.000Z"},prevItem:{title:"347.\u524d K \u4e2a\u9ad8\u9891\u5143\u7d20",permalink:"/algorithm/2021/11/06/347.\u524d K \u4e2a\u9ad8\u9891\u5143\u7d20"},nextItem:{title:"378.\u6709\u5e8f\u77e9\u9635\u4e2d\u7b2c K \u5c0f\u7684\u5143\u7d20",permalink:"/algorithm/2021/11/04/378.\u6709\u5e8f\u77e9\u9635\u4e2d\u7b2c K \u5c0f\u7684\u5143\u7d20"}},i={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],p={toc:c};function s(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\xa0",(0,l.kt)("code",null,"arr"),"\xa0\u548c\u4e00\u4e2a\u6574\u6570\xa0",(0,l.kt)("code",null,"difference"),"\uff0c\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de ",(0,l.kt)("code",null,"arr"),"\xa0\u4e2d\u6700\u957f\u7b49\u5dee\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\uff0c\u8be5\u5b50\u5e8f\u5217\u4e2d\u76f8\u90bb\u5143\u7d20\u4e4b\u95f4\u7684\u5dee\u7b49\u4e8e ",(0,l.kt)("code",null,"difference")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u5b50\u5e8f\u5217")," \u662f\u6307\u5728\u4e0d\u6539\u53d8\u5176\u4f59\u5143\u7d20\u987a\u5e8f\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u5220\u9664\u4e00\u4e9b\u5143\u7d20\u6216\u4e0d\u5220\u9664\u4efb\u4f55\u5143\u7d20\u800c\u4ece ",(0,l.kt)("code",null,"arr")," \u6d3e\u751f\u51fa\u6765\u7684\u5e8f\u5217\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"arr = [1,2,3,4], difference = 1",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"4",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6700\u957f\u7684\u7b49\u5dee\u5b50\u5e8f\u5217\u662f [1,2,3,4]\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b\xa02\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"arr = [1,3,5,7], difference = 1",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"1",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6700\u957f\u7684\u7b49\u5dee\u5b50\u5e8f\u5217\u662f\u4efb\u610f\u5355\u4e2a\u5143\u7d20\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"arr = [1,5,7,8,5,3,4,2,1], difference = -2",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"4",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6700\u957f\u7684\u7b49\u5dee\u5b50\u5e8f\u5217\u662f [7,5,3,1]\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= arr.length <= 10",(0,l.kt)("sup",null,"5"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"-10",(0,l.kt)("sup",null,"4")," <= arr[i], difference <= 10",(0,l.kt)("sup",null,"4")))),(0,l.kt)("p",null,"\u5934\u56de\u89c1\u5230\u7528\u54c8\u5e0c\u8868\u505adp table\uff0c\u8bb0\u5f55\u4e0b\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} arr\n * @param {number} d\n * @return {number}\n */\nvar longestSubsequence = function (arr, d) {\n    let max = 1;\n    const dp = {};\n    for (let n of arr) {\n        dp[n] = (dp[n - d] || 0) + 1;\n        max = Math.max(max,dp[n]);\n    }\n\n    return max;\n};\n")))}s.isMDXComponent=!0}}]);