"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[28284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>b});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=l,b=m["".concat(p,".").concat(c)]||m[c]||s[c]||a;return n?r.createElement(b,i(i({ref:t},k),{},{components:n})):r.createElement(b,i({ref:t},k))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6392\u5e8f"],date:"2022/12/31"},i=void 0,o={permalink:"/algorithm/2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570",source:"@site/algorithm/2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570.md",title:"2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570",description:"1\u3001\u9898\u5e72",date:"2022-12-31T00:00:00.000Z",formattedDate:"2022\u5e7412\u670831\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:3.21,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6392\u5e8f"],date:"2022/12/31"},prevItem:{title:"2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd",permalink:"/algorithm/2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd"},nextItem:{title:"855.\u8003\u573a\u5c31\u5ea7",permalink:"/algorithm/855.\u8003\u573a\u5c31\u5ea7"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2}],k={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u4e00\u4e2a\u623f\u95f4\u91cc\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u4e2a\u5ea7\u4f4d\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u540d\u5b66\u751f\uff0c\u623f\u95f4\u7528\u4e00\u4e2a\u6570\u8f74\u8868\u793a\u3002\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u7684\u6570\u7ec4\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"seats"),"\xa0\uff0c\u5176\u4e2d\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"seats[i]")," \u662f\u7b2c ",(0,l.kt)("inlineCode",{parentName:"p"},"i"),"\xa0\u4e2a\u5ea7\u4f4d\u7684\u4f4d\u7f6e\u3002\u540c\u65f6\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\xa0\u7684\u6570\u7ec4\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"students"),"\xa0\uff0c\u5176\u4e2d\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"students[j]"),"\xa0\u662f\u7b2c ",(0,l.kt)("inlineCode",{parentName:"p"},"j"),"\xa0\u4f4d\u5b66\u751f\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4efb\u610f\u6b21\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u6216\u8005\u51cf\u5c11\u7b2c\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"i"),"\xa0\u4f4d\u5b66\u751f\u7684\u4f4d\u7f6e\uff0c\u6bcf\u6b21\u53d8\u5316\u91cf\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\xa0\uff08\u4e5f\u5c31\u662f\u5c06\u7b2c ",(0,l.kt)("inlineCode",{parentName:"li"},"i"),"\xa0\u4f4d\u5b66\u751f\u4ece\u4f4d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"x"),"\xa0\u79fb\u52a8\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"x + 1"),"\xa0\u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"x - 1"),"\uff09")),(0,l.kt)("p",null,"\u8bf7\u4f60\u8fd4\u56de\u4f7f\u6240\u6709\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u5750\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u6700\u5c11\u79fb\u52a8\u6b21\u6570"),"\xa0\uff0c\u5e76\u786e\u4fdd\u6ca1\u6709\u4e24\u4f4d\u5b66\u751f\u7684\u5ea7\u4f4d\u76f8\u540c\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u521d\u59cb\u65f6\u6709\u53ef\u80fd\u6709\u591a\u4e2a\u5ea7\u4f4d\u6216\u8005\u591a\u4f4d\u5b66\u751f\u5728 ",(0,l.kt)("strong",{parentName:"p"},"\u540c\u4e00"),"\xa0\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," seats = ","[","3,1,5","]",", students = ","[","2,7,4","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 4",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u5b66\u751f\u79fb\u52a8\u65b9\u5f0f\u5982\u4e0b\uff1a",(0,l.kt)("br",null)),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4f4d\u5b66\u751f\u4ece\u4f4d\u7f6e 2 \u79fb\u52a8\u5230\u4f4d\u7f6e 1 \uff0c\u79fb\u52a8 1 \u6b21\u3002",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4f4d\u5b66\u751f\u4ece\u4f4d\u7f6e 7 \u79fb\u52a8\u5230\u4f4d\u7f6e 5 \uff0c\u79fb\u52a8 2 \u6b21\u3002",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u4f4d\u5b66\u751f\u4ece\u4f4d\u7f6e 4 \u79fb\u52a8\u5230\u4f4d\u7f6e 3 \uff0c\u79fb\u52a8 1 \u6b21\u3002",(0,l.kt)("br",null),"\n\u603b\u5171 1 + 2 + 1 = 4 \u6b21\u79fb\u52a8\u3002",(0,l.kt)("br",null)))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," seats = ","[","4,1,5,9","]",", students = ","[","1,3,2,6","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 7",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u5b66\u751f\u79fb\u52a8\u65b9\u5f0f\u5982\u4e0b\uff1a",(0,l.kt)("br",null)),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4f4d\u5b66\u751f\u4e0d\u79fb\u52a8\u3002",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4f4d\u5b66\u751f\u4ece\u4f4d\u7f6e 3 \u79fb\u52a8\u5230\u4f4d\u7f6e 4 \uff0c\u79fb\u52a8 1 \u6b21\u3002",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u4f4d\u5b66\u751f\u4ece\u4f4d\u7f6e 2 \u79fb\u52a8\u5230\u4f4d\u7f6e 5 \uff0c\u79fb\u52a8 3 \u6b21\u3002",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u4f4d\u5b66\u751f\u4ece\u4f4d\u7f6e 6 \u79fb\u52a8\u5230\u4f4d\u7f6e 9 \uff0c\u79fb\u52a8 3 \u6b21\u3002",(0,l.kt)("br",null),"\n\u603b\u5171 0 + 1 + 3 + 3 = 7 \u6b21\u79fb\u52a8\u3002",(0,l.kt)("br",null)))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," seats = ","[","2,2,6,6","]",", students = ","[","1,3,2,6","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 4",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u5b66\u751f\u79fb\u52a8\u65b9\u5f0f\u5982\u4e0b\uff1a",(0,l.kt)("br",null)),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4f4d\u5b66\u751f\u4ece\u4f4d\u7f6e 1 \u79fb\u52a8\u5230\u4f4d\u7f6e 2 \uff0c\u79fb\u52a8 1 \u6b21\u3002",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4f4d\u5b66\u751f\u4ece\u4f4d\u7f6e 3 \u79fb\u52a8\u5230\u4f4d\u7f6e 6 \uff0c\u79fb\u52a8 3 \u6b21\u3002",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u4f4d\u5b66\u751f\u4e0d\u79fb\u52a8\u3002",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u4f4d\u5b66\u751f\u4e0d\u79fb\u52a8\u3002",(0,l.kt)("br",null),"\n\u603b\u5171 1 + 3 + 0 + 0 = 4 \u6b21\u79fb\u52a8\u3002",(0,l.kt)("br",null)))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n == seats.length == students.length")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= n <= 100")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= seats[i], students[j] <= 100"))),(0,l.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,l.kt)("p",null,"\u6392\u5e8f\u540e\u7d2f\u52a0\u5dee\u503c"),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function minMovesToSeat(seats: number[], students: number[]): number {\n    seats.sort((a, b) => a - b);\n    students.sort((a, b) => a - b);\n    return seats.reduce((a, c, i) => a + Math.abs(c - students[i]), 0);\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(nlogn)$"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")))}m.isMDXComponent=!0}}]);