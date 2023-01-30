"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[6673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,d=c["".concat(i,".").concat(s)]||c[s]||k[s]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},53725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],date:"2022/2/15"},o=void 0,p={permalink:"/algorithm/926.\u5c06\u5b57\u7b26\u4e32\u7ffb\u8f6c\u5230\u5355\u8c03\u9012\u589e",source:"@site/algorithm/926.\u5c06\u5b57\u7b26\u4e32\u7ffb\u8f6c\u5230\u5355\u8c03\u9012\u589e.md",title:"926.\u5c06\u5b57\u7b26\u4e32\u7ffb\u8f6c\u5230\u5355\u8c03\u9012\u589e",description:"1\u3001\u9898\u5e72",date:"2022-02-15T00:00:00.000Z",formattedDate:"2022\u5e742\u670815\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:1.735,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],date:"2022/2/15"},prevItem:{title:"1380.\u77e9\u9635\u4e2d\u7684\u5e78\u8fd0\u6570",permalink:"/algorithm/1380.\u77e9\u9635\u4e2d\u7684\u5e78\u8fd0\u6570"},nextItem:{title:"\u5251\u6307 Offer II 092.\u7ffb\u8f6c\u5b57\u7b26",permalink:"/algorithm/\u5251\u6307 Offer II 092.\u7ffb\u8f6c\u5b57\u7b26"}},i={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],m={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\uff0c\u662f\u4ee5\u4e00\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff08\u53ef\u80fd\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff09\u540e\u9762\u8ddf\u7740\u4e00\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\uff08\u4e5f\u53ef\u80fd\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\uff09\u7684\u5f62\u5f0f\u7ec4\u6210\u7684\uff0c\u90a3\u4e48\u8be5\u5b57\u7b26\u4e32\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u5355\u8c03\u9012\u589e")," \u7684\u3002"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\uff0c\u4f60\u53ef\u4ee5\u5c06\u4efb\u4f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u7ffb\u8f6c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u6216\u8005\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u7ffb\u8f6c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u3002"),(0,a.kt)("p",null,"\u8fd4\u56de\u4f7f ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u5355\u8c03\u9012\u589e\u7684\u6700\u5c0f\u7ffb\u8f6c\u6b21\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "00110"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7ffb\u8f6c\u6700\u540e\u4e00\u4f4d\u5f97\u5230 00111.",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "010110"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7ffb\u8f6c\u5f97\u5230 011111\uff0c\u6216\u8005\u662f 000111\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "00011000"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7ffb\u8f6c\u5f97\u5230 00000000\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s[i]")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"'0'")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'1'"))),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," \u6253\u4e71\u4e86\u9012\u589e\u987a\u5e8f\uff0c\u8981\u4fdd\u8bc1\u9012\u589e\u6027\u53ea\u9700\u8981\u5c06\u5176\u66ff\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"00"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"01"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"11")," \u4e2d\u4efb\u610f\u4e00\u79cd\uff0c\u81f3\u4e8e\u66ff\u6362\u6210\u54ea\u4e00\u79cd\u4e0d\u91cd\u8981\uff0c\u56e0\u4e3a\u603b\u6709\u4e00\u4e2a\u5408\u9002\u7684\uff0c\u91cd\u8981\u7684\u662f\u6bcf\u51fa\u73b01\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," \u7ffb\u8f6c\u6b21\u6570\u9700\u8981\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56e0\u6b64\u8981\u6c42\u6700\u5c0f\u7ffb\u8f6c\u6b21\u6570\uff0c\u53ea\u9700\u8981\u5faa\u73af\u5730\u628a\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"strong"},"10")," \u5168\u90e8\u5254\u9664\uff0c\u5e76\u7d2f\u52a0\u7ffb\u8f6c\u6b21\u6570\u5373\u53ef")," "),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var minFlipsMonoIncr = function (s) {\n    let c = 0;\n    while (s.indexOf('10') > -1) s = s.replace(/10/g, () => (c++, ''));\n    return c;\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(34054).Z,width:"1322",height:"478"})))}c.isMDXComponent=!0},34054:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1644906510-oyDGWT-image-a0b22508236656f6f04db8fb49b4fa94.png"}}]);