"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[61098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6c34\u5858\u62bd\u6837","\u94fe\u8868","\u6570\u5b66","\u968f\u673a\u5316"],date:"2022/1/16"},o=void 0,i={permalink:"/algorithm/382.\u94fe\u8868\u968f\u673a\u8282\u70b9",source:"@site/algorithm/382.\u94fe\u8868\u968f\u673a\u8282\u70b9.md",title:"382.\u94fe\u8868\u968f\u673a\u8282\u70b9",description:"1\u3001\u9898\u5e72",date:"2022-01-16T00:00:00.000Z",formattedDate:"2022\u5e741\u670816\u65e5",tags:[{label:"\u6c34\u5858\u62bd\u6837",permalink:"/algorithm/tags/\u6c34\u5858\u62bd\u6837"},{label:"\u94fe\u8868",permalink:"/algorithm/tags/\u94fe\u8868"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u968f\u673a\u5316",permalink:"/algorithm/tags/\u968f\u673a\u5316"}],readingTime:1.76,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6c34\u5858\u62bd\u6837","\u94fe\u8868","\u6570\u5b66","\u968f\u673a\u5316"],date:"2022/1/16"},prevItem:{title:"1220.\u7edf\u8ba1\u5143\u97f3\u5b57\u6bcd\u5e8f\u5217\u7684\u6570\u76ee",permalink:"/algorithm/1220.\u7edf\u8ba1\u5143\u97f3\u5b57\u6bcd\u5e8f\u5217\u7684\u6570\u76ee"},nextItem:{title:"1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",permalink:"/algorithm/1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5355\u94fe\u8868\uff0c\u968f\u673a\u9009\u62e9\u94fe\u8868\u7684\u4e00\u4e2a\u8282\u70b9\uff0c\u5e76\u8fd4\u56de\u76f8\u5e94\u7684\u8282\u70b9\u503c\u3002\u6bcf\u4e2a\u8282\u70b9 ",(0,r.kt)("strong",{parentName:"p"},"\u88ab\u9009\u4e2d\u7684\u6982\u7387\u4e00\u6837")," \u3002"),(0,r.kt)("p",null,"\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Solution")," \u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Solution(ListNode head)")," \u4f7f\u7528\u6574\u6570\u6570\u7ec4\u521d\u59cb\u5316\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int getRandom()")," \u4ece\u94fe\u8868\u4e2d\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u8282\u70b9\u5e76\u8fd4\u56de\u8be5\u8282\u70b9\u7684\u503c\u3002\u94fe\u8868\u4e2d\u6240\u6709\u8282\u70b9\u88ab\u9009\u4e2d\u7684\u6982\u7387\u76f8\u7b49\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/03/16/getrand-linked-list.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165"),"\n","[",'"Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"',"]","\n","[","[","[","1, 2, 3","]","]",", ","[","]",", ","[","]",", ","[","]",", ","[","]",", ","[","]","]","\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa"),"\n","[","null, 1, 3, 2, 2, 3","]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca"),"\nSolution solution = new Solution(","[","1, 2, 3","]",");\nsolution.getRandom(); // \u8fd4\u56de 1\nsolution.getRandom(); // \u8fd4\u56de 3\nsolution.getRandom(); // \u8fd4\u56de 2\nsolution.getRandom(); // \u8fd4\u56de 2\nsolution.getRandom(); // \u8fd4\u56de 3\n// getRandom() \u65b9\u6cd5\u5e94\u968f\u673a\u8fd4\u56de 1\u30012\u30013\u4e2d\u7684\u4e00\u4e2a\uff0c\u6bcf\u4e2a\u5143\u7d20\u88ab\u8fd4\u56de\u7684\u6982\u7387\u76f8\u7b49\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u94fe\u8868\u4e2d\u7684\u8282\u70b9\u6570\u5728\u8303\u56f4 ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 10^4]")," \u5185"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^4 <= Node.val <= 10^4")),(0,r.kt)("li",{parentName:"ul"},"\u81f3\u591a\u8c03\u7528\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"getRandom")," \u65b9\u6cd5 ",(0,r.kt)("inlineCode",{parentName:"li"},"10^4")," \u6b21")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u94fe\u8868\u975e\u5e38\u5927\u4e14\u957f\u5ea6\u672a\u77e5\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u4f60\u80fd\u5426\u5728\u4e0d\u4f7f\u7528\u989d\u5916\u7a7a\u95f4\u7684\u60c5\u51b5\u4e0b\u89e3\u51b3\u6b64\u95ee\u9898\uff1f")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u6570\u7ec4\u5b58\u50a8\u6240\u6709\u8282\u70b9\u503c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"getRandom")," \u65f6\u4f7f\u7528\u968f\u673a\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u751f\u6210\u968f\u673a\u5e8f\u53f7\u5e76\u8fd4\u56de\u6570\u7ec4\u5185\u76f8\u5e94\u7684\u503c\u3002"),(0,r.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$"),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,r.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var Solution = function (head) {\n    this.list = [];\n    while (head) {\n        this.list.push(head.val);\n        head = head.next;\n    }\n};\n\nSolution.prototype.getRandom = function () {\n    return this.list[Math.floor(Math.random() * this.list.length)];\n};\n")),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1642267602-kDEyLg-image.png",alt:"image.png"})))}c.isMDXComponent=!0}}]);