"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[97809],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(67294);function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){i(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function A(t,a){if(null==t)return{};var e,n,i=function(t,a){if(null==t)return{};var e,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(i[e]=t[e]);return i}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var l=n.createContext({}),R=function(t){var a=n.useContext(l),e=a;return t&&(e="function"==typeof t?t(a):E(E({},a),t)),e},p=function(t){var a=R(t.components);return n.createElement(l.Provider,{value:a},t.children)},I="mdxType",s={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(t,a){var e=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=A(t,["components","mdxType","originalType","parentName"]),I=R(e),g=i,c=I["".concat(l,".").concat(g)]||I[g]||s[g]||r;return e?n.createElement(c,E(E({ref:a},p),{},{components:e})):n.createElement(c,E({ref:a},p))}));function c(t,a){var e=arguments,i=a&&a.mdxType;if("string"==typeof t||i){var r=e.length,E=new Array(r);E[0]=g;var A={};for(var l in a)hasOwnProperty.call(a,l)&&(A[l]=a[l]);A.originalType=t,A[I]="string"==typeof t?t:i,E[1]=A;for(var R=2;R<r;R++)E[R]=e[R];return n.createElement.apply(null,E)}return n.createElement.apply(null,e)}g.displayName="MDXCreateElement"},51499:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>E,default:()=>I,frontMatter:()=>r,metadata:()=>A,toc:()=>R});var n=e(87462),i=(e(67294),e(3905));const r={authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:new Date("2023-04-18T00:00:00.000Z")},E=void 0,A={permalink:"/algorithm/2023/04/18/1026.\u8282\u70b9\u4e0e\u5176\u7956\u5148\u4e4b\u95f4\u7684\u6700\u5927\u5dee\u503c",source:"@site/algorithm/2023/04/18/1026.\u8282\u70b9\u4e0e\u5176\u7956\u5148\u4e4b\u95f4\u7684\u6700\u5927\u5dee\u503c.md",title:"1026.\u8282\u70b9\u4e0e\u5176\u7956\u5148\u4e4b\u95f4\u7684\u6700\u5927\u5dee\u503c",description:"1\u3001\u9898\u5e72",date:"2023-04-18T00:00:00.000Z",formattedDate:"2023\u5e744\u670818\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:1.795,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2023-04-18T00:00:00.000Z"},prevItem:{title:"1419.\u6570\u9752\u86d9",permalink:"/algorithm/2023/05/08/1419.\u6570\u9752\u86d9"},nextItem:{title:"2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570",permalink:"/algorithm/2023/04/16/2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570"}},l={authorsImageUrls:[void 0]},R=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],p={toc:R};function I(t){let{components:a,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,i.kt)("p",null,"\u7ed9\u5b9a\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9\xa0",(0,i.kt)("code",null,"root"),"\uff0c\u627e\u51fa\u5b58\u5728\u4e8e ",(0,i.kt)("strong",null,"\u4e0d\u540c")," \u8282\u70b9\xa0",(0,i.kt)("code",null,"A")," \u548c\xa0",(0,i.kt)("code",null,"B"),"\xa0\u4e4b\u95f4\u7684\u6700\u5927\u503c ",(0,i.kt)("code",null,"V"),"\uff0c\u5176\u4e2d\xa0",(0,i.kt)("code",null,"V = |A.val - B.val|"),"\uff0c\u4e14\xa0",(0,i.kt)("code",null,"A"),"\xa0\u662f\xa0",(0,i.kt)("code",null,"B"),"\xa0\u7684\u7956\u5148\u3002"),(0,i.kt)("p",null,"\uff08\u5982\u679c A \u7684\u4efb\u4f55\u5b50\u8282\u70b9\u4e4b\u4e00\u4e3a B\uff0c\u6216\u8005 A \u7684\u4efb\u4f55\u5b50\u8282\u70b9\u662f B \u7684\u7956\u5148\uff0c\u90a3\u4e48\u6211\u4eec\u8ba4\u4e3a A \u662f B \u7684\u7956\u5148\uff09"),(0,i.kt)("p",null,"\xa0"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2020/11/09/tmp-tree.jpg"})),(0,i.kt)("pre",null,(0,i.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [8,3,10,1,6,null,14,null,null,4,7,13]",(0,i.kt)("br",null),(0,i.kt)("strong",null,"\u8f93\u51fa\uff1a"),"7",(0,i.kt)("br",null),(0,i.kt)("strong",null,"\u89e3\u91ca\uff1a "),(0,i.kt)("br",null),"\u6211\u4eec\u6709\u5927\u91cf\u7684\u8282\u70b9\u4e0e\u5176\u7956\u5148\u7684\u5dee\u503c\uff0c\u5176\u4e2d\u4e00\u4e9b\u5982\u4e0b\uff1a",(0,i.kt)("br",null),"|8 - 3| = 5",(0,i.kt)("br",null),"|3 - 7| = 4",(0,i.kt)("br",null),"|8 - 1| = 7",(0,i.kt)("br",null),"|10 - 13| = 3",(0,i.kt)("br",null),"\u5728\u6240\u6709\u53ef\u80fd\u7684\u5dee\u503c\u4e2d\uff0c\u6700\u5927\u503c 7 \u7531 |8 - 1| = 7 \u5f97\u51fa\u3002",(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,i.kt)("img",{alt:"",src:e(43165).Z}),(0,i.kt)("pre",null,(0,i.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [1,null,2,null,0,3]",(0,i.kt)("br",null),(0,i.kt)("strong",null,"\u8f93\u51fa\uff1a"),"3",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\xa0"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",null,"\u6811\u4e2d\u7684\u8282\u70b9\u6570\u5728\xa0",(0,i.kt)("code",null,"2"),"\xa0\u5230\xa0",(0,i.kt)("code",null,"5000"),"\xa0\u4e4b\u95f4\u3002"),(0,i.kt)("li",null,(0,i.kt)("code",null,"0 <= Node.val <= 10",(0,i.kt)("sup",null,"5")))),(0,i.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,i.kt)("p",null,"\u9012\u5f52\u6c42\u5b50\u5b59\u8282\u70b9\u7684\u6700\u5c0f\u503c\u4e0e\u6700\u5927\u503c\uff0c\u5206\u522b\u6c42\u6700\u5927\u503c\u6700\u5c0f\u503c\u4e0e\u5f53\u524d\u8282\u70b9\u503c\u7684\u5dee\u7684\u7edd\u5bf9\u503c\uff0c\u6bd4\u8f83\u5f97\u51fa\u6700\u5927\u5dee\u503c\u3002"),(0,i.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"[]","[]":!0},"function maxAncestorDiff(root: TreeNode | null): number {\n    let ans = -Infinity;\n\n    function dfs(node: TreeNode) {\n        if (!node) return [Infinity, -Infinity];\n        if (!node.left && !node.right) return [node.val, node.val];\n\n        const r1 = dfs(node.left);\n        const r2 = dfs(node.right);\n\n        const min = Math.min(r1[0], r2[0]);\n        const max = Math.max(r1[1], r2[1]);\n\n        ans = Math.max(ans, Math.abs(node.val - min), Math.abs(node.val - max));\n\n        return [Math.min(min, node.val), Math.max(max, node.val)];\n    }\n\n    return dfs(root), ans;\n};\n")),(0,i.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,i.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,i.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image.png",src:e(52686).Z,width:"1446",height:"410"})))}I.isMDXComponent=!0},43165:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/jpeg;base64,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+hslltkQhpKGihbFDEwfANHxJ7k+pJJJJPK9wiCNdSdNs12aZrdNw23mw1F404vExrNQtPaMfcfPdrYz0ZI0d5IhwCB8oBiqTTbUnCtXcKteoenl+p7xYrxCJqaphP6OY9p7se08tcxwBaQQRytmUa6k6bZrs0zW6bhtvNhqLxpxeJjWahae0Y+4+e7WxnoyRo7yRDgED5QDEFlItZ021JwrV3CrXqHp5fqe8WK8QiamqYT+jmPae7HtPLXMcAWkEEcrZkBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREEa6k6bZrs0zW6bhtvNhqLxpxeJjWahae0Y+4+e7WxnoyRo7yRDgED5QDFUmm2pOFau4Va9Q9PL9T3ixXiETU1TCf0cx7T3Y9p5a5jgC0ggjlbMo11J02zXZpmt03DbebDUXjTi8TGs1C09ox9x892tjPRkjR3kiHAIHygGILKRazptqThWruFWvUPTy/U94sV4hE1NUwn9HMe092PaeWuY4AtIII5WzICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiII11J02zXZpmt03DbebDUXjTi8TGs1C09ox9x892tjPRkjR3kiHAIHygGKpNNtScK1dwq16h6eX6nvFivEImpqmE/o5j2nux7Ty1zHAFpBBHK2ZRrqTptmuzTNbpuG282GovGnF4mNZqFp7Rj7j57tbGejJGjvJEOAQPlAMQWUi1nTbUnCtXcKteoenl+p7xYrxCJqaphP6OY9p7se08tcxwBaQQRytmQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQRrqTptmuzTNbpuG282GovGnF4mNZqFp7Rj7j57tbGejJGjvJEOAQPlAMVSabak4Vq7hVr1D08v1PeLFeIRNTVMJ/RzHtPdj2nlrmOALSCCOVsyjXUnTbNdmma3TcNt5sNReNOLxMazULT2jH3Hz3a2M9GSNHeSIcAgfKAYgspFrOm2pOFau4Va9Q9PL9T3ixXiETU1TCf0cx7T3Y9p5a5jgC0ggjlbMgIi1m/6nabYpOaXKNQsas87exjuF2p6dw/R7wUGzIvQ47n2C5e4txPNLDenAckW65Q1JA/H924r3yAiIgIiICIi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C80BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFpmr2r2A6F4Bc9StSr5HbLLa2cucfNLPKfsQws9ZJXkcNaPqTwASA/msGsGA6E4BctSdSb2y22e2t+A6pqmY89EELOeZJXkcNaPqSQASJ60b0hz7cTn9u3S7n7K+3QW9xm080/nPVDYYHcFtdWNPaSteA13mHk7dgQ1sf46O6R59uWz+27pNz1jktlttrveNOtPanzRWaE8FlwrWHs+seA1wDh5Ox4BDWsr9AREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERahqxqxgeiWB3TUjUi+xWqx2mPrllf3fK8/YiiZ6vkeezWjuT9OSg8dW9W8C0OwG6ak6k32K12S1R9Uj3d5JpD9iGJnrJI89mtHr9ACRNukOkme7os/tm6Hc7YpbXZLW/3nTnTup7x2uM92XGvYe0lW8BrmtcPJ2PAIaGeOkmk+ebqs9te53czYprVjlqk960507qu7KCM92XK4MPZ9U8cOawjhg4PHYAWKgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICItU1S1SwbRjBbpqPqNfoLRYrRF4s88h5c93o2ONo7vkceGtYO5JAQeOququCaK4JdNSNR79DabHaYvEmmf3dI4/Zijb6vkcezWjuSVMuk+lWd7ss8te5ncrYZrTilpk960608qu7KRh7sudwZ6PqXjhzGEcMHH0XjpVpbnW7rO7XuW3I2Ge0YZaJfe9OtPKvu2Fp+xdLiz0fUPHBYw9mgj4faslAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFy3Xrclpdt1sNPdM8uc81yuT/As9gtkXvN0u05IAipqcHlx5IHUeGgkAkEgHi9JTb99xH+YVV5s23XD6jvBRxUjLxk08XJ4Mzn8Q0xcOns3iRhJBB4QV0ilNvs9cPuw941A3Ca6ZfWv7yS1+ayxxg/kjia0Mb+A5PC/j9gNBYB71pXud1yw6tZ3jDMrdW0ZP/Mp5mkSD6dQQVaikGtzbfBtmBr9R7HbdfsCpRzU3jGqFtuyWjhaD1SyUIPg1AAA8sR6vUucAuv2fdpt+vmjFbr7QajW44fbIeuvqHktnpJeB/s0sB/eNnJIaI+OpxI6e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"},52686:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/20dbe24700180631ebeaae5cc43adc19-963d7bce5bf097f5410d3405fa02245f.png"}}]);