"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[4429],{3905:(n,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>g});var e=l(67294);function r(n,t,l){return t in n?Object.defineProperty(n,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[t]=l,n}function u(n,t){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),l.push.apply(l,e)}return l}function i(n){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?u(Object(l),!0).forEach((function(t){r(n,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(l,t))}))}return n}function o(n,t){if(null==n)return{};var l,e,r=function(n,t){if(null==n)return{};var l,e,r={},u=Object.keys(n);for(e=0;e<u.length;e++)l=u[e],t.indexOf(l)>=0||(r[l]=n[l]);return r}(n,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(e=0;e<u.length;e++)l=u[e],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(n,l)&&(r[l]=n[l])}return r}var a=e.createContext({}),k=function(n){var t=e.useContext(a),l=t;return n&&(l="function"==typeof n?n(t):i(i({},t),n)),l},c=function(n){var t=k(n.components);return e.createElement(a.Provider,{value:t},n.children)},s="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return e.createElement(e.Fragment,{},t)}},m=e.forwardRef((function(n,t){var l=n.components,r=n.mdxType,u=n.originalType,a=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),s=k(l),m=r,g=s["".concat(a,".").concat(m)]||s[m]||p[m]||u;return l?e.createElement(g,i(i({ref:t},c),{},{components:l})):e.createElement(g,i({ref:t},c))}));function g(n,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var u=l.length,i=new Array(u);i[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=n,o[s]="string"==typeof n?n:r,i[1]=o;for(var k=2;k<u;k++)i[k]=l[k];return e.createElement.apply(null,i)}return e.createElement.apply(null,l)}m.displayName="MDXCreateElement"},10593:(n,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>s,frontMatter:()=>u,metadata:()=>o,toc:()=>k});var e=l(87462),r=(l(67294),l(3905));const u={authors:["Whilconn"],tags:["\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u56fe","\u6700\u77ed\u8def"],date:"2022/1/24"},i=void 0,o={permalink:"/algorithm/2022/01/24/2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",source:"@site/algorithm/2022/01/24/2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4.md",title:"2045.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u7b2c\u4e8c\u77ed\u65f6\u95f4",description:"1\u3001\u9898\u5e72",date:"2022-01-24T00:00:00.000Z",formattedDate:"2022\u5e741\u670824\u65e5",tags:[{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u56fe",permalink:"/algorithm/tags/\u56fe"},{label:"\u6700\u77ed\u8def",permalink:"/algorithm/tags/\u6700\u77ed\u8def"}],readingTime:6.32,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u56fe","\u6700\u77ed\u8def"],date:"2022/1/24"},prevItem:{title:"\u5251\u6307 Offer II 099.\u6700\u5c0f\u8def\u5f84\u4e4b\u548c",permalink:"/algorithm/2022/01/25/\u5251\u6307 Offer II 099.\u6700\u5c0f\u8def\u5f84\u4e4b\u548c"},nextItem:{title:"647.\u56de\u6587\u5b50\u4e32",permalink:"/algorithm/2022/01/22/647.\u56de\u6587\u5b50\u4e32"}},a={authorsImageUrls:[void 0]},k=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],c={toc:k};function s(n){let{components:t,...l}=n;return(0,r.kt)("wrapper",(0,e.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u57ce\u5e02\u7528\u4e00\u4e2a ",(0,r.kt)("strong",null,"\u53cc\u5411\u8fde\u901a")," \u56fe\u8868\u793a\uff0c\u56fe\u4e2d\u6709 ",(0,r.kt)("code",null,"n")," \u4e2a\u8282\u70b9\uff0c\u4ece ",(0,r.kt)("code",null,"1")," \u5230 ",(0,r.kt)("code",null,"n")," \u7f16\u53f7\uff08\u5305\u542b ",(0,r.kt)("code",null,"1")," \u548c ",(0,r.kt)("code",null,"n"),"\uff09\u3002\u56fe\u4e2d\u7684\u8fb9\u7528\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 ",(0,r.kt)("code",null,"edges")," \u8868\u793a\uff0c\u5176\u4e2d\u6bcf\u4e2a ",(0,r.kt)("code",null,"edges[i] = [u",(0,r.kt)("sub",null,"i"),", v",(0,r.kt)("sub",null,"i"),"]"),"\xa0\u8868\u793a\u4e00\u6761\u8282\u70b9\xa0",(0,r.kt)("code",null,"u",(0,r.kt)("sub",null,"i"))," \u548c\u8282\u70b9\xa0",(0,r.kt)("code",null,"v",(0,r.kt)("sub",null,"i"))," \u4e4b\u95f4\u7684\u53cc\u5411\u8fde\u901a\u8fb9\u3002\u6bcf\u7ec4\u8282\u70b9\u5bf9\u7531 ",(0,r.kt)("strong",null,"\u6700\u591a\u4e00\u6761")," \u8fb9\u8fde\u901a\uff0c\u9876\u70b9\u4e0d\u5b58\u5728\u8fde\u63a5\u5230\u81ea\u8eab\u7684\u8fb9\u3002\u7a7f\u8fc7\u4efb\u610f\u4e00\u6761\u8fb9\u7684\u65f6\u95f4\u662f ",(0,r.kt)("code",null,"time"),"\xa0\u5206\u949f\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u4e00\u4e2a\u4ea4\u901a\u4fe1\u53f7\u706f\uff0c\u6bcf ",(0,r.kt)("code",null,"change")," \u5206\u949f\u6539\u53d8\u4e00\u6b21\uff0c\u4ece\u7eff\u8272\u53d8\u6210\u7ea2\u8272\uff0c\u518d\u7531\u7ea2\u8272\u53d8\u6210\u7eff\u8272\uff0c\u5faa\u73af\u5f80\u590d\u3002\u6240\u6709\u4fe1\u53f7\u706f\u90fd\xa0",(0,r.kt)("strong",null,"\u540c\u65f6")," \u6539\u53d8\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("strong",null,"\u4efb\u4f55\u65f6\u5019")," \u8fdb\u5165\u67d0\u4e2a\u8282\u70b9\uff0c\u4f46\u662f ",(0,r.kt)("strong",null,"\u53ea\u80fd")," \u5728\u8282\u70b9\xa0",(0,r.kt)("strong",null,"\u4fe1\u53f7\u706f\u662f\u7eff\u8272\u65f6")," \u624d\u80fd\u79bb\u5f00\u3002\u5982\u679c\u4fe1\u53f7\u706f\u662f\xa0 ",(0,r.kt)("strong",null,"\u7eff\u8272")," \uff0c\u4f60 ",(0,r.kt)("strong",null,"\u4e0d\u80fd")," \u5728\u8282\u70b9\u7b49\u5f85\uff0c\u5fc5\u987b\u79bb\u5f00\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u7b2c\u4e8c\u5c0f\u7684\u503c")," \u662f\xa0",(0,r.kt)("strong",null,"\u4e25\u683c\u5927\u4e8e")," \u6700\u5c0f\u503c\u7684\u6240\u6709\u503c\u4e2d\u6700\u5c0f\u7684\u503c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4f8b\u5982\uff0c",(0,r.kt)("code",null,"[2, 3, 4]")," \u4e2d\u7b2c\u4e8c\u5c0f\u7684\u503c\u662f ",(0,r.kt)("code",null,"3")," \uff0c\u800c ",(0,r.kt)("code",null,"[2, 2, 4]")," \u4e2d\u7b2c\u4e8c\u5c0f\u7684\u503c\u662f ",(0,r.kt)("code",null,"4")," \u3002")),(0,r.kt)("p",null,"\u7ed9\u4f60 ",(0,r.kt)("code",null,"n"),"\u3001",(0,r.kt)("code",null,"edges"),"\u3001",(0,r.kt)("code",null,"time")," \u548c ",(0,r.kt)("code",null,"change")," \uff0c\u8fd4\u56de\u4ece\u8282\u70b9 ",(0,r.kt)("code",null,"1")," \u5230\u8282\u70b9 ",(0,r.kt)("code",null,"n")," \u9700\u8981\u7684 ",(0,r.kt)("strong",null,"\u7b2c\u4e8c\u77ed\u65f6\u95f4")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u6ce8\u610f\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4f60\u53ef\u4ee5 ",(0,r.kt)("strong",null,"\u4efb\u610f\u6b21")," \u7a7f\u8fc7\u4efb\u610f\u9876\u70b9\uff0c",(0,r.kt)("strong",null,"\u5305\u62ec")," ",(0,r.kt)("code",null,"1")," \u548c ",(0,r.kt)("code",null,"n")," \u3002"),(0,r.kt)("li",null,"\u4f60\u53ef\u4ee5\u5047\u8bbe\u5728 ",(0,r.kt)("strong",null,"\u542f\u7a0b\u65f6")," \uff0c\u6240\u6709\u4fe1\u53f7\u706f\u521a\u521a\u53d8\u6210 ",(0,r.kt)("strong",null,"\u7eff\u8272")," \u3002")),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"",src:"../../../img/e1.png"})," \u2003 \u2003 \u2003 \u2003",(0,r.kt)("img",{alt:"",src:"../../../img/e2.png"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 5, edges = [[1,2],[1,3],[1,4],[3,4],[4,5]], time = 3, change = 5",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"13",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),(0,r.kt)("br",null),"\u4e0a\u9762\u7684\u5de6\u56fe\u5c55\u73b0\u4e86\u7ed9\u51fa\u7684\u57ce\u5e02\u4ea4\u901a\u56fe\u3002",(0,r.kt)("br",null),"\u53f3\u56fe\u4e2d\u7684\u84dd\u8272\u8def\u5f84\u662f\u6700\u77ed\u65f6\u95f4\u8def\u5f84\u3002",(0,r.kt)("br",null),"\u82b1\u8d39\u7684\u65f6\u95f4\u662f\uff1a",(0,r.kt)("br",null),"- \u4ece\u8282\u70b9 1 \u5f00\u59cb\uff0c\u603b\u82b1\u8d39\u65f6\u95f4=0",(0,r.kt)("br",null),"- 1 -> 4\uff1a3 \u5206\u949f\uff0c\u603b\u82b1\u8d39\u65f6\u95f4=3",(0,r.kt)("br",null),"- 4 -> 5\uff1a3 \u5206\u949f\uff0c\u603b\u82b1\u8d39\u65f6\u95f4=6",(0,r.kt)("br",null),"\u56e0\u6b64\u9700\u8981\u7684\u6700\u5c0f\u65f6\u95f4\u662f 6 \u5206\u949f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u53f3\u56fe\u4e2d\u7684\u7ea2\u8272\u8def\u5f84\u662f\u7b2c\u4e8c\u77ed\u65f6\u95f4\u8def\u5f84\u3002",(0,r.kt)("br",null),"- \u4ece\u8282\u70b9 1 \u5f00\u59cb\uff0c\u603b\u82b1\u8d39\u65f6\u95f4=0",(0,r.kt)("br",null),"- 1 -> 3\uff1a3 \u5206\u949f\uff0c\u603b\u82b1\u8d39\u65f6\u95f4=3",(0,r.kt)("br",null),"- 3 -> 4\uff1a3 \u5206\u949f\uff0c\u603b\u82b1\u8d39\u65f6\u95f4=6",(0,r.kt)("br",null),"- \u5728\u8282\u70b9 4 \u7b49\u5f85 4 \u5206\u949f\uff0c\u603b\u82b1\u8d39\u65f6\u95f4=10",(0,r.kt)("br",null),"- 4 -> 5\uff1a3 \u5206\u949f\uff0c\u603b\u82b1\u8d39\u65f6\u95f4=13",(0,r.kt)("br",null),"\u56e0\u6b64\u7b2c\u4e8c\u77ed\u65f6\u95f4\u662f 13 \u5206\u949f\u3002      ",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"",src:"../../../img/eg2.png"})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 2, edges = [[1,2]], time = 3, change = 2",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"11",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),(0,r.kt)("br",null),"\u6700\u77ed\u65f6\u95f4\u8def\u5f84\u662f 1 -> 2 \uff0c\u603b\u82b1\u8d39\u65f6\u95f4 = 3 \u5206\u949f",(0,r.kt)("br",null),"\u7b2c\u4e8c\u77ed\u65f6\u95f4\u8def\u5f84\u662f 1 -> 2 -> 1 -> 2 \uff0c\u603b\u82b1\u8d39\u65f6\u95f4 = 11 \u5206\u949f"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"2 <= n <= 10",(0,r.kt)("sup",null,"4"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"n - 1 <= edges.length <= min(2 * 10",(0,r.kt)("sup",null,"4"),", n * (n - 1) / 2)")),(0,r.kt)("li",null,(0,r.kt)("code",null,"edges[i].length == 2")),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= u",(0,r.kt)("sub",null,"i"),", v",(0,r.kt)("sub",null,"i")," <= n")),(0,r.kt)("li",null,(0,r.kt)("code",null,"u",(0,r.kt)("sub",null,"i")," != v",(0,r.kt)("sub",null,"i"))),(0,r.kt)("li",null,"\u4e0d\u542b\u91cd\u590d\u8fb9"),(0,r.kt)("li",null,"\u6bcf\u4e2a\u8282\u70b9\u90fd\u53ef\u4ee5\u4ece\u5176\u4ed6\u8282\u70b9\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5230\u8fbe"),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= time, change <= 10",(0,r.kt)("sup",null,"3")))),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u8def\u5f84\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"li"},"edges")," \u8f6c\u4e3a\u90bb\u63a5\u77e9\u9635\u4fbf\u4e8e\u540e\u7eed\u641c\u7d22",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u6ce8\u610f\u672c\u9898\u662f\u53cc\u5411\u8fde\u901a\u56fe\uff0c\u4efb\u610f\u8fb9\u4e0a\u7684\u4e24\u4e2a\u70b9\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u51fa\u53d1\u70b9"))),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528BFS\u6c42\u6700\u77ed\u8def\u5f84\u6b65\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"min1")," \u548c\u6b21\u77ed\u8def\u5f84\u6b65\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"min2"),"\uff0cBFS\u8fc7\u7a0b\u4e2d\u9700\u8981\u6ce8\u610f\u526a\u679d\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u526a\u679d1\uff1a\u82e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"min2")," \u5df2\u7ecf\u627e\u5230\u5219\u9000\u51fa"),(0,r.kt)("li",{parentName:"ul"},"\u526a\u679d2\uff1a\u82e5\u4ece\u5f53\u524d\u8282\u70b9\u5230\u8fbe\u4e0b\u4e00\u8282\u70b9\u7684\u6b65\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"step+1")," \u4e0e\u5230\u8fbe\u4e0b\u4e00\u8282\u70b9\u7684\u6700\u5c0f\u6b65\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"minSteps.get(k)")," \u4e4b\u5dee\u4e0d\u5c0f\u4e8e2 ",(0,r.kt)("inlineCode",{parentName:"li"},"step + 1 - minSteps.get(k) >= 2"),"\uff0c\u5219\u8df3\u8fc7"),(0,r.kt)("li",{parentName:"ul"},"\u526a\u679d3\uff1a\u540c\u4e00\u5c42\u7ea7\u6bcf\u4e2a\u8282\u70b9\u53ea\u51fa\u73b0\u4e00\u6b21"))),(0,r.kt)("li",{parentName:"ul"},"\u6309\u6700\u77ed\u8def\u5f84\u9010\u6b65\u53e0\u52a0\u901a\u8fc7\u65f6\u95f4\u548c\u7b49\u5f85\u7ea2\u706f\u65f6\u95f4")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u526a\u679d\u7684\u4e3b\u8981\u65b9\u5f0f\u8ddf\u5927\u591a\u6570\u9898\u89e3\u4e0d\u592a\u4e00\u6837\uff0c\u5927\u90e8\u5206\u9898\u89e3\u90fd\u662f\u5229\u7528\u8282\u70b9\u4e0d\u53ef\u80fd\u8bbf\u95ee\u8d85\u8fc72\u6b21\u4f5c\u4e3a\u4e3b\u8981\u526a\u679d\u65b9\u5f0f\uff0c\u786e\u5b9e\u6ca1\u6709\u60f3\u5230\u8fd9\u4e2a\u70b9\uff1b\u8fd9\u91cc\u4e3b\u8981\u5229\u7528\u6b21\u77ed\u8def\u5f84\u4e0e\u6700\u77ed\u8def\u5f84\u6b65\u6570\u5dee\u503c\u4e0d\u8d85\u8fc72\u8fdb\u884c\u526a\u679d\uff0c\u539f\u56e0\u662f\u6700\u77ed\u8def\u5f84\u5728\u4efb\u610f\u8282\u70b9\u4e0a\u91cd\u590d\u4e00\u4e2a\u6765\u56de\u53ea\u9700\u89812\u6b65\uff0c\u82e5\u6b21\u77ed\u8def\u5f84\u7684\u6b65\u6570\u6bd4\u6700\u77ed\u8def\u5f84\u591a2\u6b65\u4ee5\u4e0a\u5219\u8bf4\u660e\u5176\u4e0d\u80fd\u6210\u4e3a\u6b21\u77ed\u3002")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var secondMinimum = function (n, edges, time, change) {\n    edges = edges.reduce((a, c) => {\n        // \u53cc\u5411\u8fde\u901a\u56fe\uff0c\u5efa\u8868\u65f6\u4e24\u4e2a\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u51fa\u53d1\u70b9\n        !a[c[0]] ? (a[c[0]] = [c[1]]) : a[c[0]].push(c[1]);\n        !a[c[1]] ? (a[c[1]] = [c[0]]) : a[c[1]].push(c[0]);\n        return a;\n    }, new Array(n + 1));\n\n    let min1 = Infinity, min2 = Infinity, nodes = new Set([1]), step = 1;\n    const minSteps = new Map();\n\n    while (nodes.size && min2 === Infinity) {\n        const nextNodes = new Set();\n        for (const i of nodes) {\n            minSteps.set(i, step);\n            if (i === n) min1 === Infinity || min1 === step ? (min1 = step) : (min2 = step);\n            for (const k of edges[i]) {\n                if (minSteps.has(k) && step + 1 - minSteps.get(k) >= 2) continue;\n                nextNodes.add(k);\n            }\n        }\n\n        step++;\n        nodes = nextNodes;\n    }\n\n    let cost = 0;\n    for (let i = 1; i < Math.min(min1 + 2, min2); i++) {\n        if (((cost / change) >> 0) % 2) cost += change - (cost % change);\n        cost += time;\n    }\n\n    return cost;\n};\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 400 ms"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 66.9 MB")))}s.isMDXComponent=!0}}]);