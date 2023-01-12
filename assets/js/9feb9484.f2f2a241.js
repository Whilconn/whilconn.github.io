"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[66808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=a,d=c["".concat(p,".").concat(s)]||c[s]||k[s]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/2/11"},i=void 0,o={permalink:"/algorithm/821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb",source:"@site/algorithm/821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb.md",title:"821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb",description:"1\u3001\u9898\u5e72",date:"2022-02-11T00:00:00.000Z",formattedDate:"2022\u5e742\u670811\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:2.765,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/2/11"},prevItem:{title:"\u5251\u6307 Offer II 092.\u7ffb\u8f6c\u5b57\u7b26",permalink:"/algorithm/\u5251\u6307 Offer II 092.\u7ffb\u8f6c\u5b57\u7b26"},nextItem:{title:"1447.\u6700\u7b80\u5206\u6570",permalink:"/algorithm/1447.\u6700\u7b80\u5206\u6570"}},p={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u548c\u4e00\u4e2a\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," \uff0c\u4e14 ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u4e2d\u51fa\u73b0\u8fc7\u7684\u5b57\u7b26\u3002"),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"answer")," \uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"answer.length == s.length")," \u4e14 ",(0,a.kt)("inlineCode",{parentName:"p"},"answer[i]")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u4e2d\u4ece\u4e0b\u6807 ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u5230\u79bb\u5b83 ",(0,a.kt)("strong",{parentName:"p"},"\u6700\u8fd1")," \u7684\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u8ddd\u79bb")," \u3002"),(0,a.kt)("p",null,"\u4e24\u4e2a\u4e0b\u6807\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"i")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"j")," \u4e4b\u95f4\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u8ddd\u79bb")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"abs(i - j)")," \uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"abs")," \u662f\u7edd\u5bf9\u503c\u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "loveleetcode", c = "e"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","3,2,1,0,1,0,0,1,2,2,1,0","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u5b57\u7b26 'e' \u51fa\u73b0\u5728\u4e0b\u6807 3\u30015\u30016 \u548c 11 \u5904\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u8ba1\u6570\uff09\u3002",(0,a.kt)("br",null),"\n\u8ddd\u4e0b\u6807 0 \u6700\u8fd1\u7684 'e' \u51fa\u73b0\u5728\u4e0b\u6807 3 \uff0c\u6240\u4ee5\u8ddd\u79bb\u4e3a abs(0 - 3) = 3 \u3002",(0,a.kt)("br",null),"\n\u8ddd\u4e0b\u6807 1 \u6700\u8fd1\u7684 'e' \u51fa\u73b0\u5728\u4e0b\u6807 3 \uff0c\u6240\u4ee5\u8ddd\u79bb\u4e3a abs(1 - 3) = 2 \u3002",(0,a.kt)("br",null),"\n\u5bf9\u4e8e\u4e0b\u6807 4 \uff0c\u51fa\u73b0\u5728\u4e0b\u6807 3 \u548c\u4e0b\u6807 5 \u5904\u7684 'e' \u90fd\u79bb\u5b83\u6700\u8fd1\uff0c\u4f46\u8ddd\u79bb\u662f\u4e00\u6837\u7684 abs(4 - 3) == abs(4 - 5) = 1 \u3002",(0,a.kt)("br",null),"\n\u8ddd\u4e0b\u6807 8 \u6700\u8fd1\u7684 'e' \u51fa\u73b0\u5728\u4e0b\u6807 6 \uff0c\u6240\u4ee5\u8ddd\u79bb\u4e3a abs(8 - 6) = 2 \u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "aaab", c = "b"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","3,2,1,0","]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s[i]")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"c")," \u5747\u4e3a\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd"),(0,a.kt)("li",{parentName:"ul"},"\u9898\u76ee\u6570\u636e\u4fdd\u8bc1 ",(0,a.kt)("inlineCode",{parentName:"li"},"c")," \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u81f3\u5c11\u51fa\u73b0\u4e00\u6b21")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9898\u76ee\u7b80\u5355\uff0c\u4f46\u662f\u5904\u7406\u5404\u79cd\u8fb9\u754c\u60c5\u51b5\u8fd8\u662f\u6709\u70b9\u7e41\u7410\uff0c\u4ee3\u7801\u91cf\u5f88\u96be\u538b\u7f29\uff0c")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1644573211-rbyvqE-71d74efddaafe529dc032181988da153.gif",alt:"71d74efddaafe529dc032181988da153.gif"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"l")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," \u5206\u522b\u8868\u793a\u5de6\u8fb9\u548c\u53f3\u8fb9\u6700\u8fd1\u51fa\u73b0\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," \u7684\u4e0b\u6807\uff0c\u904d\u5386\u533a\u95f4\u8303\u56f4 $[l,r)$ \u5185\u7684\u5b57\u7b26\uff0c\u8bb0\u5f55\u5b57\u7b26\u79bb\u8fb9\u754c\u6700\u8fd1\u7684\u8ddd\u79bb\u5373\u53ef"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5904\u7406\u597d\u8fb9\u754c\u60c5\u51b5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5de6\u8fb9\u6ca1\u6709\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"li"},"c")," \u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"l")," \u53d6\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"-Infinity")),(0,a.kt)("li",{parentName:"ul"},"\u53f3\u8fb9\u6ca1\u6709\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"li"},"c")," \u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"r")," \u53d6\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Infinity")),(0,a.kt)("li",{parentName:"ul"},"\u5185\u5c42\u5faa\u73af\u8981\u63a7\u5236\u597d ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," \u7684\u8303\u56f4\uff0c\u4e0d\u80fd\u8d8a\u51fa $[0,s.length)$ \u8fd9\u4e2a\u8303\u56f4")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var shortestToChar = function (s, c) {\n    const res = [];\n    for (let l = -Infinity, r = s.indexOf(c); l < s.length;) {\n        for (let i = Math.max(0, l); i < Math.min(s.length, r); i++) {\n            res.push(Math.min(r - i, i - l));\n        }\n        l = r, r = s.indexOf(c, r + 1), r = r < 0 ? Infinity : r;\n    }\n    return res;\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1644571998-TDyHSL-image.png",alt:"image.png"})))}c.isMDXComponent=!0}}]);