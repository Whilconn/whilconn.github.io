"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[28127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,d=c["".concat(i,".").concat(s)]||c[s]||k[s]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},o=void 0,p={permalink:"/algorithm/\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c",source:"@site/algorithm/\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c.md",title:"\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c",description:"1\u3001\u9898\u5e72",date:"2021-12-21T00:00:00.000Z",formattedDate:"2021\u5e7412\u670821\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:2.815,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},prevItem:{title:"\u5251\u6307 Offer II 047.\u4e8c\u53c9\u6811\u526a\u679d",permalink:"/algorithm/\u5251\u6307 Offer II 047.\u4e8c\u53c9\u6811\u526a\u679d"},nextItem:{title:"419.\u7532\u677f\u4e0a\u7684\u6218\u8230",permalink:"/algorithm/419.\u7532\u677f\u4e0a\u7684\u6218\u8230"}},i={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," \uff0c\u6811\u4e2d\u6bcf\u4e2a\u8282\u70b9\u90fd\u5b58\u653e\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"9")," \u4e4b\u95f4\u7684\u6570\u5b57\u3002"),(0,a.kt)("p",null,"\u6bcf\u6761\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u90fd\u4ee3\u8868\u4e00\u4e2a\u6570\u5b57\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"li"},"1 -> 2 -> 3")," \u8868\u793a\u6570\u5b57 ",(0,a.kt)("inlineCode",{parentName:"li"},"123")," \u3002")),(0,a.kt)("p",null,"\u8ba1\u7b97\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u751f\u6210\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6240\u6709\u6570\u5b57\u4e4b\u548c")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53f6\u8282\u70b9")," \u662f\u6307\u6ca1\u6709\u5b50\u8282\u70b9\u7684\u8282\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg",alt:null}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," root = ","[","1,2,3","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 25",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"1->2")," \u4ee3\u8868\u6570\u5b57 ",(0,a.kt)("inlineCode",{parentName:"p"},"12"),(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"1->3")," \u4ee3\u8868\u6570\u5b57 ",(0,a.kt)("inlineCode",{parentName:"p"},"13"),(0,a.kt)("br",null),"\n\u56e0\u6b64\uff0c\u6570\u5b57\u603b\u548c = 12 + 13 = ",(0,a.kt)("inlineCode",{parentName:"p"},"25"),(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg",alt:null}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," root = ","[","4,9,0,5,1","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1026",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"4->9->5")," \u4ee3\u8868\u6570\u5b57 495",(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"4->9->1")," \u4ee3\u8868\u6570\u5b57 491",(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"4->0")," \u4ee3\u8868\u6570\u5b57 40",(0,a.kt)("br",null),"\n\u56e0\u6b64\uff0c\u6570\u5b57\u603b\u548c = 495 + 491 + 40 = ",(0,a.kt)("inlineCode",{parentName:"p"},"1026"),(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6811\u4e2d\u8282\u70b9\u7684\u6570\u76ee\u5728\u8303\u56f4 ",(0,a.kt)("inlineCode",{parentName:"li"},"[1, 1000]")," \u5185"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 9")),(0,a.kt)("li",{parentName:"ul"},"\u6811\u7684\u6df1\u5ea6\u4e0d\u8d85\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"10"))),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 129\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/"},"https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/")),(0,a.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1640078980-vgiVsx-1.png?1",alt:"1.png"})),(0,a.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u603b\u4f53\u601d\u8def\uff1aDFS\u9012\u5f52\u904d\u5386\u6240\u6709\u8282\u70b9\uff0c\u9012\u5f52\u51fd\u6570\u589e\u52a0\u4e00\u4e2a\u5f62\u53c2",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\uff0c\u7528\u4e8e\u8bb0\u5f55\u6839\u8282\u70b9\u5230\u5f53\u524d\u8282\u70b9\u8fd9\u6761\u8def\u5f84\u4e0a\u6240\u6709\u6570\u5b57\u62fc\u63a5\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u6700\u540e\u628a\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\u8f6c\u6210\u6570\u5b57\u5e76\u7d2f\u52a0\u5373\u53ef\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/3Etpl5/solution/cong-gen-jie-dian-dao-xie-jie-dian-de-lu-nv9q/"},"\u5b98\u89e3"),"\u76f4\u63a5\u4f7f\u752810\u8fdb\u5236\u8ba1\u7b97\uff0c\u65f6\u957f\u548c\u5185\u5b58\u90fd\u4f1a\u4f4e\u4e00\u4e9b\u3002\u8fd9\u4e2a\u89e3\u6cd5\u601d\u8def\u7b97\u7b80\u5355\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u548c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e5f\u8ddf\u5b98\u89e3\u4e00\u6837\uff0c\u4f46\u6267\u884c\u65f6\u957f\u548c\u5185\u5b58\u6d88\u8017\u7565\u9ad8\uff0c\u95ee\u9898\u4e3b\u8981\u5728\u4ee5\u4e0b\u4e24\u70b9\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u4e3b\u8981\u6d88\u8017\u5728\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"paths.push()"),"\u3001\u5b57\u7b26\u4e32\u7d2f\u52a0\u3001\u6700\u540e\u591a\u4e86\u4e00\u6b65",(0,a.kt)("inlineCode",{parentName:"li"},"paths"),"\u8f6c\u6362\u7d2f\u52a0"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u5b58\u4e3b\u8981\u6d88\u8017\u5728\uff1a\u5b58\u50a8",(0,a.kt)("inlineCode",{parentName:"li"},"paths"),"\u3001\u6bcf\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"dfs"),"\u8c03\u7528\u6808\u7684\u5b57\u7b26\u4e32\u5f62\u53c2",(0,a.kt)("inlineCode",{parentName:"li"},"path"),"\u3001\u672b\u5c3e\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"paths.reduce"),"\u7684\u56de\u8c03\u51fd\u6570\u7684\u8c03\u7528\u6808\u7a7a\u95f4"))),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var sumNumbers = function (root) {\n    const paths = [];\n    function dfs(node, path) {\n        if (!node) return;\n        if (!node.left && !node.right) paths.push(path + node.val);\n        dfs(node.left, path + node.val);\n        dfs(node.right, path + node.val);\n    }\n    dfs(root, '');\n    return paths.reduce((acc, cur) => +cur + acc, 0);\n};\n")))}c.isMDXComponent=!0}}]);