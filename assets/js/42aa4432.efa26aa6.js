"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[56553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,d=s["".concat(i,".").concat(k)]||s[k]||c[k]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[s]="string"==typeof e?e:r,o[1]=m;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},72021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u52a8\u6001\u89c4\u5212","\u4e8c\u53c9\u6811"],date:"2021/12/30"},o=void 0,m={permalink:"/algorithm/\u5251\u6307 Offer II 051.\u8282\u70b9\u4e4b\u548c\u6700\u5927\u7684\u8def\u5f84",source:"@site/algorithm/\u5251\u6307 Offer II 051.\u8282\u70b9\u4e4b\u548c\u6700\u5927\u7684\u8def\u5f84.md",title:"\u5251\u6307 Offer II 051.\u8282\u70b9\u4e4b\u548c\u6700\u5927\u7684\u8def\u5f84",description:"1\u3001\u9898\u5e72",date:"2021-12-30T00:00:00.000Z",formattedDate:"2021\u5e7412\u670830\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:3.24,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u52a8\u6001\u89c4\u5212","\u4e8c\u53c9\u6811"],date:"2021/12/30"},prevItem:{title:"846.\u4e00\u624b\u987a\u5b50",permalink:"/algorithm/846.\u4e00\u624b\u987a\u5b50"},nextItem:{title:"1995.\u7edf\u8ba1\u7279\u6b8a\u56db\u5143\u7ec4",permalink:"/algorithm/1995.\u7edf\u8ba1\u7279\u6b8a\u56db\u5143\u7ec4"}},i={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],u={toc:p};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8def\u5f84")," \u88ab\u5b9a\u4e49\u4e3a\u4e00\u6761\u4ece\u6811\u4e2d\u4efb\u610f\u8282\u70b9\u51fa\u53d1\uff0c\u6cbf\u7236\u8282\u70b9-\u5b50\u8282\u70b9\u8fde\u63a5\uff0c\u8fbe\u5230\u4efb\u610f\u8282\u70b9\u7684\u5e8f\u5217\u3002\u540c\u4e00\u4e2a\u8282\u70b9\u5728\u4e00\u6761\u8def\u5f84\u5e8f\u5217\u4e2d ",(0,r.kt)("strong",{parentName:"p"},"\u81f3\u591a\u51fa\u73b0\u4e00\u6b21")," \u3002\u8be5\u8def\u5f84 ",(0,r.kt)("strong",{parentName:"p"},"\u81f3\u5c11\u5305\u542b\u4e00\u4e2a")," \u8282\u70b9\uff0c\u4e14\u4e0d\u4e00\u5b9a\u7ecf\u8fc7\u6839\u8282\u70b9\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8def\u5f84\u548c")," \u662f\u8def\u5f84\u4e2d\u5404\u8282\u70b9\u503c\u7684\u603b\u548c\u3002"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," \uff0c\u8fd4\u56de\u5176 ",(0,r.kt)("strong",{parentName:"p"},"\u6700\u5927\u8def\u5f84\u548c"),"\uff0c\u5373\u6240\u6709\u8def\u5f84\u4e0a\u8282\u70b9\u503c\u4e4b\u548c\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg",alt:null}),(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," root = ","[","1,2,3","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 6",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6700\u4f18\u8def\u5f84\u662f 2 -> 1 -> 3 \uff0c\u8def\u5f84\u548c\u4e3a 2 + 1 + 3 = 6",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg",alt:null}),(0,r.kt)("br",null))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," root = ","[","-10,9,20,null,null,15,7","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 42",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6700\u4f18\u8def\u5f84\u662f 15 -> 20 -> 7 \uff0c\u8def\u5f84\u548c\u4e3a 15 + 20 + 7 = 42",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6811\u4e2d\u8282\u70b9\u6570\u76ee\u8303\u56f4\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 3 * 10^4]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-1000 <= Node.val <= 1000"))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 124\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/"},"https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u6df1\u5ea6\u904d\u5386\u6811\u4e0a\u6240\u6709\u8282\u70b9\uff0c\u5bf9\u6bcf\u4e2a\u8282\u70b9\u6c42\u6700\u5927\u8def\u5f84\u548c\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var maxPathSum = function (root) {\n    let res = root.val;\n    function dfs(node) {\n        if (!node) return -Infinity;\n        const maxSum1 = dfs(node.left), maxSum2 = dfs(node.right);\n        const maxSum = Math.max(node.val, maxSum1 + node.val, maxSum2 + node.val);\n        res = Math.max(res, maxSum, maxSum1, maxSum2, maxSum1 + maxSum2 + node.val);\n        return maxSum;\n    }\n    return dfs(root), res;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5173\u952e\u4ee3\u7801\u8bf4\u660e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6c42\u6bcf\u4e2a\u8282\u70b9\u7684\u6700\u5927\u8def\u5f84\u548c\uff0c\u4e14\u8def\u5f84\u4e0d\u91cd\u590d\u7684\u5173\u952e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"const maxSum = Math.max(node.val, maxSum1 + node.val, maxSum2 + node.val);")),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u884c\u4ee3\u7801\u7528\u4e8e\u6c42\u5f53\u524d\u8282\u70b9\u4e0b\u7684\u6700\u5927\u8def\u5f84\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"maxSum"),"\uff0c\u5e76\u5c06\u5176\u8fd4\u56de\u7ed9\u7236\u8282\u70b9\u7528\u4e8e\u8ba1\u7b97\u7236\u8282\u70b9\u4e0b\u7684\u6700\u5927\u8def\u5f84\u548c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.max"),"\u53d6\u6700\u5927\u503c\u65f6\u5305\u542b\u5f53\u524d\u8282\u70b9\u7684\u503c\u3001\u5f53\u524d\u8282\u70b9\u503c+\u5de6\u5b50\u8282\u70b9\u6700\u5927\u8def\u5f84\u548c\u3001\u5f53\u524d\u8282\u70b9\u503c+\u53f3\u5b50\u8282\u70b9\u6700\u5927\u8def\u5f84\u548c"),(0,r.kt)("li",{parentName:"ul"},"\u5373\u6700\u5927\u8def\u5f84\u548c\u4e00\u5b9a\u8981\u5305\u542b\u5f53\u524d\u8282\u70b9\u7684\u503c\uff0c\u8fd8\u53ef\u80fd\u53e0\u52a0\u67d0\u4e2a\u5b50\u8282\u70b9\u6700\u5927\u8def\u5f84\u548c\uff0c\u4e5f\u53ef\u80fd\u4e0d\u53e0\u52a0\u5b50\u8282\u70b9\u6700\u5927\u8def\u5f84\u548c"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64",(0,r.kt)("inlineCode",{parentName:"li"},"dfs"),"\u51fd\u6570\u9010\u7ea7\u8fd4\u56de\u65f6\uff0c\u7531\u4e0b\u81f3\u4e0a\u5f62\u6210\u4e86\u4e00\u6761\u4e0d\u5206\u53c9\u7684\u8def\u5f84\uff0c\u5e76\u80fd\u9010\u7ea7\u5411\u4e0a\u8fd4\u56de\u5b50\u8282\u70b9\u7684\u6700\u5927\u8def\u5f84\u548c"))),(0,r.kt)("li",{parentName:"ul"},"\u6c42\u6574\u68f5\u6811\u6700\u5927\u8def\u5f84\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"res"),"\u7684\u5173\u952e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"res = Math.max(res, maxSum, maxSum1, maxSum2, maxSum1 + maxSum2 + node.val);")),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6bcf\u4e2a\u8282\u70b9\u6c42\u6700\u5927\u8def\u5f84\u548c\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"res"),"\u53d6\u5176\u81ea\u8eab\u4ee5\u53ca",(0,r.kt)("inlineCode",{parentName:"li"},"maxSum1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"maxSum2"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"node.val"),"\u4e09\u8005\u4efb\u610f\u7ec4\u5408\u7684\u8def\u5f84\u548c\u4e2d\u7684\u6700\u5927\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxSum1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"maxSum2"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"node.val"),"\u4e09\u8005\u4efb\u610f\u7ec4\u5408\u6c42\u548c\u65f6\uff0c\u81f3\u5c11\u53d61\u4e2a\uff0c\u4e14\u53d62\u4e2a\u65f6\u4e0d\u80fd\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"maxSum1 + maxSum2"),"\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u7ec4\u5408\u4e0d\u6784\u6210\u8def\u5f84")))),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.png",src:n(39969).Z,width:"1360",height:"490"})))}s.isMDXComponent=!0},39969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1640852266-BGesed-1-9cedbbf9bbfed37bd042a092b1b4ea65.png"}}]);