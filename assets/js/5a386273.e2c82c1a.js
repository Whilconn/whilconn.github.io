"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[28127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),A=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=A(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=A(n),m=a,s=c["".concat(p,".").concat(m)]||c[m]||k[m]||i;return n?r.createElement(s,l(l({ref:t},u),{},{components:n})):r.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var A=2;A<i;A++)l[A]=n[A];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>A});var r=n(87462),a=(n(67294),n(3905));const i={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},l=void 0,o={permalink:"/algorithm/\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c",source:"@site/algorithm/\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c.md",title:"\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c",description:"1\u3001\u9898\u5e72",date:"2021-12-21T00:00:00.000Z",formattedDate:"2021\u5e7412\u670821\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:2.815,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/21"},prevItem:{title:"\u5251\u6307 Offer II 047.\u4e8c\u53c9\u6811\u526a\u679d",permalink:"/algorithm/\u5251\u6307 Offer II 047.\u4e8c\u53c9\u6811\u526a\u679d"},nextItem:{title:"419.\u7532\u677f\u4e0a\u7684\u6218\u8230",permalink:"/algorithm/419.\u7532\u677f\u4e0a\u7684\u6218\u8230"}},p={authorsImageUrls:[void 0]},A=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],u={toc:A};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," \uff0c\u6811\u4e2d\u6bcf\u4e2a\u8282\u70b9\u90fd\u5b58\u653e\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"9")," \u4e4b\u95f4\u7684\u6570\u5b57\u3002"),(0,a.kt)("p",null,"\u6bcf\u6761\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u90fd\u4ee3\u8868\u4e00\u4e2a\u6570\u5b57\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"li"},"1 -> 2 -> 3")," \u8868\u793a\u6570\u5b57 ",(0,a.kt)("inlineCode",{parentName:"li"},"123")," \u3002")),(0,a.kt)("p",null,"\u8ba1\u7b97\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u751f\u6210\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6240\u6709\u6570\u5b57\u4e4b\u548c")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53f6\u8282\u70b9")," \u662f\u6307\u6ca1\u6709\u5b50\u8282\u70b9\u7684\u8282\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{src:n(14345).Z,width:"212",height:"182"}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," root = ","[","1,2,3","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 25",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"1->2")," \u4ee3\u8868\u6570\u5b57 ",(0,a.kt)("inlineCode",{parentName:"p"},"12"),(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"1->3")," \u4ee3\u8868\u6570\u5b57 ",(0,a.kt)("inlineCode",{parentName:"p"},"13"),(0,a.kt)("br",null),"\n\u56e0\u6b64\uff0c\u6570\u5b57\u603b\u548c = 12 + 13 = ",(0,a.kt)("inlineCode",{parentName:"p"},"25"),(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg",alt:null}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," root = ","[","4,9,0,5,1","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 1026",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"4->9->5")," \u4ee3\u8868\u6570\u5b57 495",(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"4->9->1")," \u4ee3\u8868\u6570\u5b57 491",(0,a.kt)("br",null),"\n\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"4->0")," \u4ee3\u8868\u6570\u5b57 40",(0,a.kt)("br",null),"\n\u56e0\u6b64\uff0c\u6570\u5b57\u603b\u548c = 495 + 491 + 40 = ",(0,a.kt)("inlineCode",{parentName:"p"},"1026"),(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6811\u4e2d\u8282\u70b9\u7684\u6570\u76ee\u5728\u8303\u56f4 ",(0,a.kt)("inlineCode",{parentName:"li"},"[1, 1000]")," \u5185"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 9")),(0,a.kt)("li",{parentName:"ul"},"\u6811\u7684\u6df1\u5ea6\u4e0d\u8d85\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"10"))),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 129\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/"},"https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/")),(0,a.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1.png",src:n(68133).Z,width:"1360",height:"484"})),(0,a.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u603b\u4f53\u601d\u8def\uff1aDFS\u9012\u5f52\u904d\u5386\u6240\u6709\u8282\u70b9\uff0c\u9012\u5f52\u51fd\u6570\u589e\u52a0\u4e00\u4e2a\u5f62\u53c2",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\uff0c\u7528\u4e8e\u8bb0\u5f55\u6839\u8282\u70b9\u5230\u5f53\u524d\u8282\u70b9\u8fd9\u6761\u8def\u5f84\u4e0a\u6240\u6709\u6570\u5b57\u62fc\u63a5\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u6700\u540e\u628a\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"\u8f6c\u6210\u6570\u5b57\u5e76\u7d2f\u52a0\u5373\u53ef\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/3Etpl5/solution/cong-gen-jie-dian-dao-xie-jie-dian-de-lu-nv9q/"},"\u5b98\u89e3"),"\u76f4\u63a5\u4f7f\u752810\u8fdb\u5236\u8ba1\u7b97\uff0c\u65f6\u957f\u548c\u5185\u5b58\u90fd\u4f1a\u4f4e\u4e00\u4e9b\u3002\u8fd9\u4e2a\u89e3\u6cd5\u601d\u8def\u7b97\u7b80\u5355\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u548c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e5f\u8ddf\u5b98\u89e3\u4e00\u6837\uff0c\u4f46\u6267\u884c\u65f6\u957f\u548c\u5185\u5b58\u6d88\u8017\u7565\u9ad8\uff0c\u95ee\u9898\u4e3b\u8981\u5728\u4ee5\u4e0b\u4e24\u70b9\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u4e3b\u8981\u6d88\u8017\u5728\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"paths.push()"),"\u3001\u5b57\u7b26\u4e32\u7d2f\u52a0\u3001\u6700\u540e\u591a\u4e86\u4e00\u6b65",(0,a.kt)("inlineCode",{parentName:"li"},"paths"),"\u8f6c\u6362\u7d2f\u52a0"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u5b58\u4e3b\u8981\u6d88\u8017\u5728\uff1a\u5b58\u50a8",(0,a.kt)("inlineCode",{parentName:"li"},"paths"),"\u3001\u6bcf\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"dfs"),"\u8c03\u7528\u6808\u7684\u5b57\u7b26\u4e32\u5f62\u53c2",(0,a.kt)("inlineCode",{parentName:"li"},"path"),"\u3001\u672b\u5c3e\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"paths.reduce"),"\u7684\u56de\u8c03\u51fd\u6570\u7684\u8c03\u7528\u6808\u7a7a\u95f4"))),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var sumNumbers = function (root) {\n    const paths = [];\n    function dfs(node, path) {\n        if (!node) return;\n        if (!node.left && !node.right) paths.push(path + node.val);\n        dfs(node.left, path + node.val);\n        dfs(node.right, path + node.val);\n    }\n    dfs(root, '');\n    return paths.reduce((acc, cur) => +cur + acc, 0);\n};\n")))}c.isMDXComponent=!0},68133:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1640078980-vgiVsx-1-e9bf873fe8f8fb40f420d168c216ae91.png"},14345:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/jpeg;base64,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"}}]);