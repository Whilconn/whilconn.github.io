"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[33327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,d=m["".concat(i,".").concat(s)]||m[s]||k[s]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u5b66"],date:"2022/1/15"},o=void 0,p={permalink:"/algorithm/1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",source:"@site/algorithm/1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1.md",title:"1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",description:"1\u3001\u9898\u5e72",date:"2022-01-15T00:00:00.000Z",formattedDate:"2022\u5e741\u670815\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"}],readingTime:2.725,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66"],date:"2022/1/15"},prevItem:{title:"382.\u94fe\u8868\u968f\u673a\u8282\u70b9",permalink:"/algorithm/382.\u94fe\u8868\u968f\u673a\u8282\u70b9"},nextItem:{title:"373.\u67e5\u627e\u548c\u6700\u5c0f\u7684 K \u5bf9\u6570\u5b57",permalink:"/algorithm/373.\u67e5\u627e\u548c\u6700\u5c0f\u7684 K \u5bf9\u6570\u5b57"}},i={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],c={toc:u};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"Hercy \u60f3\u8981\u4e3a\u8d2d\u4e70\u7b2c\u4e00\u8f86\u8f66\u5b58\u94b1\u3002\u4ed6 ",(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u5929")," \u90fd\u5f80\u529b\u6263\u94f6\u884c\u91cc\u5b58\u94b1\u3002"),(0,a.kt)("p",null,"\u6700\u5f00\u59cb\uff0c\u4ed6\u5728\u5468\u4e00\u7684\u65f6\u5019\u5b58\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\xa0\u5757\u94b1\u3002\u4ece\u5468\u4e8c\u5230\u5468\u65e5\uff0c\u4ed6\u6bcf\u5929\u90fd\u6bd4\u524d\u4e00\u5929\u591a\u5b58\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\xa0\u5757\u94b1\u3002\u5728\u63a5\u4e0b\u6765\u6bcf\u4e00\u4e2a\u5468\u4e00\uff0c\u4ed6\u90fd\u4f1a\u6bd4 ",(0,a.kt)("strong",{parentName:"p"},"\u524d\u4e00\u4e2a\u5468\u4e00")," \u591a\u5b58\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\xa0\u5757\u94b1\u3002"),(0,a.kt)("p",null,"\u7ed9\u4f60\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\uff0c\u8bf7\u4f60\u8fd4\u56de\u5728\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u5929\u7ed3\u675f\u7684\u65f6\u5019\u4ed6\u5728\u529b\u6263\u94f6\u884c\u603b\u5171\u5b58\u4e86\u591a\u5c11\u5757\u94b1\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 4",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 10",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7b2c 4 \u5929\u540e\uff0c\u603b\u989d\u4e3a 1 + 2 + 3 + 4 = 10 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 10",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 37",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7b2c 10 \u5929\u540e\uff0c\u603b\u989d\u4e3a (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37 \u3002\u6ce8\u610f\u5230\u7b2c\u4e8c\u4e2a\u661f\u671f\u4e00\uff0cHercy \u5b58\u5165 2 \u5757\u94b1\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 20",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 96",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7b2c 20 \u5929\u540e\uff0c\u603b\u989d\u4e3a (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000"))),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5b58\u6b3e\u603b\u989d\u53ef\u4ee5\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u524d\u534a\u90e8\u5206\u6309\u6574\u5468\u8ba1\u7b97\uff0c\u540e\u534a\u90e8\u5206\u4e0d\u8db3\u4e00\u5468\u6309\u5929\u8ba1\u7b97\uff0c\u4e24\u90e8\u5206\u90fd\u662f\u7b49\u5dee\u6570\u5217\uff0c\u5206\u522b\u6c42\u548c\u540e\u518d\u76f8\u52a0\u5373\u53ef"),(0,a.kt)("li",{parentName:"ul"},"\u5148\u8ba1\u7b97\u5468\u6570 $w = n / 7 >> 0$ \u548c\u4e0d\u8db3\u4e00\u5468\u7684\u5929\u6570 $d = n \\% 7$ "),(0,a.kt)("li",{parentName:"ul"},"\u524d\u534a\u90e8\u5206\u6309\u5468\u8ba1\u7b97\uff0c\u5176\u6570\u5217\u4e3a\uff1a$28 + (28 + 7) + ... + (28 + (w-1)",(0,a.kt)("em",{parentName:"li"},"7)$ \uff0c\u5171 $w$ \u9879\uff0c\u548c\u4e3a $28 ")," w + 7 ",(0,a.kt)("em",{parentName:"li"}," w ")," (w - 1) / 2$"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u534a\u90e8\u5206\u6309\u5929\u8ba1\u7b97\uff0c\u5176\u6570\u5217\u4e3a\uff1a$(1 + w) + (2 + w) + ... + (d + w)$ \uff0c\u5171 $d$ \u9879\uff0c\u548c\u4e3a$d ",(0,a.kt)("em",{parentName:"li"}," w + d ")," (d + 1) / 2$")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var totalMoney = function (n) {\n    const w = n / 7 >> 0, d = n % 7;\n    return 28 * w + 7 * w * (w - 1) / 2 + d * w + d * (d + 1) / 2;\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(17691).Z,width:"578",height:"239"})))}m.isMDXComponent=!0},17691:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1642180630-wLONky-image-2ba05ab26645671221a45193ee20fff4.png"}}]);