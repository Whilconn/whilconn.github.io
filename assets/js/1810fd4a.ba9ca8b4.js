"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[37724],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=u(n),c=a,d=k["".concat(p,".").concat(c)]||k[c]||s[c]||l;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(15882),a=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6a21\u62df","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2023/1/2"},i=void 0,o={permalink:"/algorithm/1801.\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570",source:"@site/algorithm/1801.\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570.md",title:"1801.\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570",description:"1\u3001\u9898\u5e72",date:"2023-01-02T00:00:00.000Z",formattedDate:"2023\u5e741\u67082\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6a21\u62df",permalink:"/algorithm/tags/\u6a21\u62df"},{label:"\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",permalink:"/algorithm/tags/\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"}],readingTime:6.52,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6a21\u62df","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2023/1/2"},prevItem:{title:"2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e",permalink:"/algorithm/2042.\u68c0\u67e5\u53e5\u5b50\u4e2d\u7684\u6570\u5b57\u662f\u5426\u9012\u589e"},nextItem:{title:"2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd",permalink:"/algorithm/2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],m={toc:u};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"orders")," \uff0c\u5176\u4e2d\u6bcf\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"orders[i] = [pricei, amounti, orderTypei]")," \u8868\u793a\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"amounti")," \u7b14\u7c7b\u578b\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"orderTypei")," \u3001\u4ef7\u683c\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"pricei")," \u7684\u8ba2\u5355\u3002"),(0,a.kt)("p",null,"\u8ba2\u5355\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"orderTypei")," \u53ef\u4ee5\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u8868\u793a\u8fd9\u662f\u4e00\u6279\u91c7\u8d2d\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"buy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u8868\u793a\u8fd9\u662f\u4e00\u6279\u9500\u552e\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"sell"))),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"orders[i]")," \u8868\u793a\u4e00\u6279\u5171\u8ba1 ",(0,a.kt)("inlineCode",{parentName:"p"},"amounti")," \u7b14\u7684\u72ec\u7acb\u8ba2\u5355\uff0c\u8fd9\u4e9b\u8ba2\u5355\u7684\u4ef7\u683c\u548c\u7c7b\u578b\u76f8\u540c\u3002\u5bf9\u4e8e\u6240\u6709\u6709\u6548\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \uff0c\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"orders[i]")," \u8868\u793a\u7684\u6240\u6709\u8ba2\u5355\u63d0\u4ea4\u65f6\u95f4\u5747\u65e9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"orders[i+1]")," \u8868\u793a\u7684\u6240\u6709\u8ba2\u5355\u3002"),(0,a.kt)("p",null,"\u5b58\u5728\u7531\u672a\u6267\u884c\u8ba2\u5355\u7ec4\u6210\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u79ef\u538b\u8ba2\u5355")," \u3002\u79ef\u538b\u8ba2\u5355\u6700\u521d\u662f\u7a7a\u7684\u3002\u63d0\u4ea4\u8ba2\u5355\u65f6\uff0c\u4f1a\u53d1\u751f\u4ee5\u4e0b\u60c5\u51b5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8be5\u8ba2\u5355\u662f\u4e00\u7b14\u91c7\u8d2d\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"buy")," \uff0c\u5219\u53ef\u4ee5\u67e5\u770b\u79ef\u538b\u8ba2\u5355\u4e2d\u4ef7\u683c ",(0,a.kt)("strong",{parentName:"li"},"\u6700\u4f4e")," \u7684\u9500\u552e\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"sell")," \u3002\u5982\u679c\u8be5\u9500\u552e\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"sell")," \u7684\u4ef7\u683c ",(0,a.kt)("strong",{parentName:"li"},"\u4f4e\u4e8e\u6216\u7b49\u4e8e")," \u5f53\u524d\u91c7\u8d2d\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"buy")," \u7684\u4ef7\u683c\uff0c\u5219\u5339\u914d\u5e76\u6267\u884c\u8fd9\u4e24\u7b14\u8ba2\u5355\uff0c\u5e76\u5c06\u9500\u552e\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"sell")," \u4ece\u79ef\u538b\u8ba2\u5355\u4e2d\u5220\u9664\u3002\u5426\u5219\uff0c\u91c7\u8d2d\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"buy")," \u5c06\u4f1a\u6dfb\u52a0\u5230\u79ef\u538b\u8ba2\u5355\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53cd\u4e4b\u4ea6\u7136\uff0c\u5982\u679c\u8be5\u8ba2\u5355\u662f\u4e00\u7b14\u9500\u552e\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"sell")," \uff0c\u5219\u53ef\u4ee5\u67e5\u770b\u79ef\u538b\u8ba2\u5355\u4e2d\u4ef7\u683c ",(0,a.kt)("strong",{parentName:"li"},"\u6700\u9ad8")," \u7684\u91c7\u8d2d\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"buy")," \u3002\u5982\u679c\u8be5\u91c7\u8d2d\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"buy")," \u7684\u4ef7\u683c ",(0,a.kt)("strong",{parentName:"li"},"\u9ad8\u4e8e\u6216\u7b49\u4e8e")," \u5f53\u524d\u9500\u552e\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"sell")," \u7684\u4ef7\u683c\uff0c\u5219\u5339\u914d\u5e76\u6267\u884c\u8fd9\u4e24\u7b14\u8ba2\u5355\uff0c\u5e76\u5c06\u91c7\u8d2d\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"buy")," \u4ece\u79ef\u538b\u8ba2\u5355\u4e2d\u5220\u9664\u3002\u5426\u5219\uff0c\u9500\u552e\u8ba2\u5355 ",(0,a.kt)("inlineCode",{parentName:"li"},"sell")," \u5c06\u4f1a\u6dfb\u52a0\u5230\u79ef\u538b\u8ba2\u5355\u4e2d\u3002")),(0,a.kt)("p",null,"\u8f93\u5165\u6240\u6709\u8ba2\u5355\u540e\uff0c\u8fd4\u56de\u79ef\u538b\u8ba2\u5355\u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u8ba2\u5355\u603b\u6570")," \u3002\u7531\u4e8e\u6570\u5b57\u53ef\u80fd\u5f88\u5927\uff0c\u6240\u4ee5\u9700\u8981\u8fd4\u56de\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"10^9 + 7")," \u53d6\u4f59\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{src:n(77416).Z,width:"610",height:"649"}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," orders = ","[","[","10,5,0","]",",","[","15,2,1","]",",","[","25,1,1","]",",","[","30,4,0","]","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 6",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u8f93\u5165\u8ba2\u5355\u540e\u4f1a\u53d1\u751f\u4e0b\u8ff0\u60c5\u51b5\uff1a",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 5 \u7b14\u91c7\u8d2d\u8ba2\u5355\uff0c\u4ef7\u683c\u4e3a 10 \u3002\u6ca1\u6709\u9500\u552e\u8ba2\u5355\uff0c\u6240\u4ee5\u8fd9 5 \u7b14\u8ba2\u5355\u6dfb\u52a0\u5230\u79ef\u538b\u8ba2\u5355\u4e2d\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 2 \u7b14\u9500\u552e\u8ba2\u5355\uff0c\u4ef7\u683c\u4e3a 15 \u3002\u6ca1\u6709\u91c7\u8d2d\u8ba2\u5355\u7684\u4ef7\u683c\u5927\u4e8e\u6216\u7b49\u4e8e 15 \uff0c\u6240\u4ee5\u8fd9 2 \u7b14\u8ba2\u5355\u6dfb\u52a0\u5230\u79ef\u538b\u8ba2\u5355\u4e2d\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 1 \u7b14\u9500\u552e\u8ba2\u5355\uff0c\u4ef7\u683c\u4e3a 25 \u3002\u6ca1\u6709\u91c7\u8d2d\u8ba2\u5355\u7684\u4ef7\u683c\u5927\u4e8e\u6216\u7b49\u4e8e 25 \uff0c\u6240\u4ee5\u8fd9 1 \u7b14\u8ba2\u5355\u6dfb\u52a0\u5230\u79ef\u538b\u8ba2\u5355\u4e2d\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 4 \u7b14\u91c7\u8d2d\u8ba2\u5355\uff0c\u4ef7\u683c\u4e3a 30 \u3002\u524d 2 \u7b14\u91c7\u8d2d\u8ba2\u5355\u4e0e\u4ef7\u683c\u6700\u4f4e\uff08\u4ef7\u683c\u4e3a 15\uff09\u7684 2 \u7b14\u9500\u552e\u8ba2\u5355\u5339\u914d\uff0c\u4ece\u79ef\u538b\u8ba2\u5355\u4e2d\u5220\u9664\u8fd9 2 \u7b14\u9500\u552e\u8ba2\u5355\u3002\u7b2c 3 \u7b14\u91c7\u8d2d\u8ba2\u5355\u4e0e\u4ef7\u683c\u6700\u4f4e\u7684 1 \u7b14\u9500\u552e\u8ba2\u5355\u5339\u914d\uff0c\u9500\u552e\u8ba2\u5355\u4ef7\u683c\u4e3a 25 \uff0c\u4ece\u79ef\u538b\u8ba2\u5355\u4e2d\u5220\u9664\u8fd9 1 \u7b14\u9500\u552e\u8ba2\u5355\u3002\u79ef\u538b\u8ba2\u5355\u4e2d\u4e0d\u5b58\u5728\u66f4\u591a\u9500\u552e\u8ba2\u5355\uff0c\u6240\u4ee5\u7b2c 4 \u7b14\u91c7\u8d2d\u8ba2\u5355\u9700\u8981\u6dfb\u52a0\u5230\u79ef\u538b\u8ba2\u5355\u4e2d\u3002",(0,a.kt)("br",null),"\n\u6700\u7ec8\uff0c\u79ef\u538b\u8ba2\u5355\u4e2d\u6709 5 \u7b14\u4ef7\u683c\u4e3a 10 \u7684\u91c7\u8d2d\u8ba2\u5355\uff0c\u548c 1 \u7b14\u4ef7\u683c\u4e3a 30 \u7684\u91c7\u8d2d\u8ba2\u5355\u3002\u6240\u4ee5\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570\u4e3a 6 \u3002",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{src:n(89604).Z,width:"640",height:"831"}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," orders = ","[","[","7,1000000000,1","]",",","[","15,3,0","]",",","[","5,999999995,0","]",",","[","5,1,1","]","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 999999984",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u8f93\u5165\u8ba2\u5355\u540e\u4f1a\u53d1\u751f\u4e0b\u8ff0\u60c5\u51b5\uff1a",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 10^9 \u7b14\u9500\u552e\u8ba2\u5355\uff0c\u4ef7\u683c\u4e3a 7 \u3002\u6ca1\u6709\u91c7\u8d2d\u8ba2\u5355\uff0c\u6240\u4ee5\u8fd9 10^9 \u7b14\u8ba2\u5355\u6dfb\u52a0\u5230\u79ef\u538b\u8ba2\u5355\u4e2d\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 3 \u7b14\u91c7\u8d2d\u8ba2\u5355\uff0c\u4ef7\u683c\u4e3a 15 \u3002\u8fd9\u4e9b\u91c7\u8d2d\u8ba2\u5355\u4e0e\u4ef7\u683c\u6700\u4f4e\uff08\u4ef7\u683c\u4e3a 7 \uff09\u7684 3 \u7b14\u9500\u552e\u8ba2\u5355\u5339\u914d\uff0c\u4ece\u79ef\u538b\u8ba2\u5355\u4e2d\u5220\u9664\u8fd9 3 \u7b14\u9500\u552e\u8ba2\u5355\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 999999995 \u7b14\u91c7\u8d2d\u8ba2\u5355\uff0c\u4ef7\u683c\u4e3a 5 \u3002\u9500\u552e\u8ba2\u5355\u7684\u6700\u4f4e\u4ef7\u4e3a 7 \uff0c\u6240\u4ee5\u8fd9 999999995 \u7b14\u8ba2\u5355\u6dfb\u52a0\u5230\u79ef\u538b\u8ba2\u5355\u4e2d\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 1 \u7b14\u9500\u552e\u8ba2\u5355\uff0c\u4ef7\u683c\u4e3a 5 \u3002\u8fd9\u7b14\u9500\u552e\u8ba2\u5355\u4e0e\u4ef7\u683c\u6700\u9ad8\uff08\u4ef7\u683c\u4e3a 5 \uff09\u7684 1 \u7b14\u91c7\u8d2d\u8ba2\u5355\u5339\u914d\uff0c\u4ece\u79ef\u538b\u8ba2\u5355\u4e2d\u5220\u9664\u8fd9 1 \u7b14\u91c7\u8d2d\u8ba2\u5355\u3002",(0,a.kt)("br",null),"\n\u6700\u7ec8\uff0c\u79ef\u538b\u8ba2\u5355\u4e2d\u6709 (1000000000-3) \u7b14\u4ef7\u683c\u4e3a 7 \u7684\u9500\u552e\u8ba2\u5355\uff0c\u548c (999999995-1) \u7b14\u4ef7\u683c\u4e3a 5 \u7684\u91c7\u8d2d\u8ba2\u5355\u3002\u6240\u4ee5\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570\u4e3a 1999999991 \uff0c\u7b49\u4e8e 999999984 % (10^9 + 7) \u3002",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= orders.length <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"orders[i].length == 3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= pricei, amounti <= 10^9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"orderTypei")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"1"))),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("p",null,"\u6839\u636e\u9898\u610f\u6a21\u62df\uff0c\u4f7f\u7528\u4f18\u5148\u961f\u5217\u5b58\u50a8\u9500\u552e\u8ba2\u5355\u548c\u91c7\u8d2d\u8ba2\u5355"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function getNumberOfBacklogOrders(orders: number[][]): number {\n    const bpq = new PriorityQueue({ compare: (a, b) => b.price - a.price });\n    const spq = new PriorityQueue({ compare: (a, b) => a.price - b.price });\n\n    for (let [price, amount, type] of orders) {\n        if (type === 0) {\n            while (spq.size() && amount > 0) {\n                const o = spq.front();\n                if (o.price > price) break;\n                amount -= o.amount;\n                if (amount >= 0) spq.dequeue();\n                else o.amount = -amount;\n            }\n\n            if (amount > 0) bpq.enqueue({ price, amount });\n        } else {\n            while (bpq.size() && amount > 0) {\n                const o = bpq.front();\n                if (o.price < price) break;\n                amount -= o.amount;\n                if (amount >= 0) bpq.dequeue();\n                else o.amount = -amount;\n            }\n\n            if (amount > 0) spq.enqueue({ price, amount });\n        }\n    }\n\n    let ans = 0, M = 1e9 + 7;\n    while (bpq.size()) {\n        const o = bpq.dequeue();\n        ans = (ans + o.amount) % M;\n    }\n\n    while (spq.size()) {\n        const o = spq.dequeue();\n        ans = (ans + o.amount) % M;\n    }\n\n    return ans;\n};\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$o(n*logn)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$o(n)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(65749).Z,width:"1450",height:"390"})))}k.isMDXComponent=!0},65749:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1672644673-PShmXF-image-77e8db1140d543eb687ffcb1b47411c5.png"},77416:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ex1-360a9decd5954437ab32cec887a705d0.png"},89604:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ex2-bc73b6d67ac985a006b387a590921cad.png"}}]);