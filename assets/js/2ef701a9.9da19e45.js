"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[59334],{3905:(a,t,e)=>{e.d(t,{Zo:()=>k,kt:()=>u});var n=e(67294);function s(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function m(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function p(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){s(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t){if(null==a)return{};var e,n,s=function(a,t){if(null==a)return{};var e,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)e=m[n],t.indexOf(e)>=0||(s[e]=a[e]);return s}(a,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)e=m[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(s[e]=a[e])}return s}var r=n.createContext({}),i=function(a){var t=n.useContext(r),e=t;return a&&(e="function"==typeof a?a(t):p(p({},t),a)),e},k=function(a){var t=i(a.components);return n.createElement(r.Provider,{value:t},a.children)},N="mdxType",c={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(a,t){var e=a.components,s=a.mdxType,m=a.originalType,r=a.parentName,k=l(a,["components","mdxType","originalType","parentName"]),N=i(e),o=s,u=N["".concat(r,".").concat(o)]||N[o]||c[o]||m;return e?n.createElement(u,p(p({ref:t},k),{},{components:e})):n.createElement(u,p({ref:t},k))}));function u(a,t){var e=arguments,s=t&&t.mdxType;if("string"==typeof a||s){var m=e.length,p=new Array(m);p[0]=o;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=a,l[N]="string"==typeof a?a:s,p[1]=l;for(var i=2;i<m;i++)p[i]=e[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}o.displayName="MDXCreateElement"},58523:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>p,default:()=>N,frontMatter:()=>m,metadata:()=>l,toc:()=>i});var n=e(87462),s=(e(67294),e(3905));const m={authors:["Whilconn"],tags:["\u6811","\u6570\u7ec4","\u5206\u6cbb","\u77e9\u9635"],date:new Date("2022-04-29T00:00:00.000Z")},p=void 0,l={permalink:"/algorithm/2022/04/29/427.\u5efa\u7acb\u56db\u53c9\u6811",source:"@site/algorithm/2022/04/29/427.\u5efa\u7acb\u56db\u53c9\u6811.md",title:"427.\u5efa\u7acb\u56db\u53c9\u6811",description:"1\u3001\u9898\u5e72",date:"2022-04-29T00:00:00.000Z",formattedDate:"2022\u5e744\u670829\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u5206\u6cbb",permalink:"/algorithm/tags/\u5206\u6cbb"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:6.055,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u6570\u7ec4","\u5206\u6cbb","\u77e9\u9635"],date:"2022-04-29T00:00:00.000Z"},prevItem:{title:"\u9762\u8bd5\u9898 01.05.\u4e00\u6b21\u7f16\u8f91",permalink:"/algorithm/2022/05/13/\u9762\u8bd5\u9898 01.05.\u4e00\u6b21\u7f16\u8f91"},nextItem:{title:"\u5251\u6307 Offer 47.\u793c\u7269\u7684\u6700\u5927\u4ef7\u503c",permalink:"/algorithm/2022/04/25/\u5251\u6307 Offer 47.\u793c\u7269\u7684\u6700\u5927\u4ef7\u503c"}},r={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],k={toc:i};function N(a){let{components:t,...m}=a;return(0,s.kt)("wrapper",(0,n.Z)({},k,m,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,s.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a ",(0,s.kt)("code",null,"n * n")," \u77e9\u9635 ",(0,s.kt)("code",null,"grid")," \uff0c\u77e9\u9635\u7531\u82e5\u5e72 ",(0,s.kt)("code",null,"0")," \u548c ",(0,s.kt)("code",null,"1")," \u7ec4\u6210\u3002\u8bf7\u4f60\u7528\u56db\u53c9\u6811\u8868\u793a\u8be5\u77e9\u9635 ",(0,s.kt)("code",null,"grid")," \u3002"),(0,s.kt)("p",null,"\u4f60\u9700\u8981\u8fd4\u56de\u80fd\u8868\u793a\u77e9\u9635\u7684 \u56db\u53c9\u6811 \u7684\u6839\u7ed3\u70b9\u3002"),(0,s.kt)("p",null,"\u6ce8\u610f\uff0c\u5f53 ",(0,s.kt)("code",null,"isLeaf")," \u4e3a ",(0,s.kt)("strong",null,"False "),"\u65f6\uff0c\u4f60\u53ef\u4ee5\u628a ",(0,s.kt)("strong",null,"True")," \u6216\u8005 ",(0,s.kt)("strong",null,"False")," \u8d4b\u503c\u7ed9\u8282\u70b9\uff0c\u4e24\u79cd\u503c\u90fd\u4f1a\u88ab\u5224\u9898\u673a\u5236 ",(0,s.kt)("strong",null,"\u63a5\u53d7")," \u3002"),(0,s.kt)("p",null,"\u56db\u53c9\u6811\u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u6bcf\u4e2a\u5185\u90e8\u8282\u70b9\u53ea\u6709\u56db\u4e2a\u5b50\u8282\u70b9\u3002\u6b64\u5916\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u4e24\u4e2a\u5c5e\u6027\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("code",null,"val"),"\uff1a\u50a8\u5b58\u53f6\u5b50\u7ed3\u70b9\u6240\u4ee3\u8868\u7684\u533a\u57df\u7684\u503c\u30021 \u5bf9\u5e94 ",(0,s.kt)("strong",null,"True"),"\uff0c0 \u5bf9\u5e94 ",(0,s.kt)("strong",null,"False"),"\uff1b"),(0,s.kt)("li",null,(0,s.kt)("code",null,"isLeaf"),": \u5f53\u8fd9\u4e2a\u8282\u70b9\u662f\u4e00\u4e2a\u53f6\u5b50\u7ed3\u70b9\u65f6\u4e3a ",(0,s.kt)("strong",null,"True"),"\uff0c\u5982\u679c\u5b83\u6709 4 \u4e2a\u5b50\u8282\u70b9\u5219\u4e3a ",(0,s.kt)("strong",null,"False")," \u3002")),(0,s.kt)("pre",null,"class Node {",(0,s.kt)("br",null),"    public boolean val;",(0,s.kt)("br",null),"\xa0 \xa0 public boolean isLeaf;",(0,s.kt)("br",null),"\xa0 \xa0 public Node topLeft;",(0,s.kt)("br",null),"\xa0 \xa0 public Node topRight;",(0,s.kt)("br",null),"\xa0 \xa0 public Node bottomLeft;",(0,s.kt)("br",null),"\xa0 \xa0 public Node bottomRight;",(0,s.kt)("br",null),"}"),(0,s.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6309\u4ee5\u4e0b\u6b65\u9aa4\u4e3a\u4e8c\u7ef4\u533a\u57df\u6784\u5efa\u56db\u53c9\u6811\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",null,"\u5982\u679c\u5f53\u524d\u7f51\u683c\u7684\u503c\u76f8\u540c\uff08\u5373\uff0c\u5168\u4e3a ",(0,s.kt)("code",null,"0")," \u6216\u8005\u5168\u4e3a ",(0,s.kt)("code",null,"1"),"\uff09\uff0c\u5c06 ",(0,s.kt)("code",null,"isLeaf")," \u8bbe\u4e3a True \uff0c\u5c06 ",(0,s.kt)("code",null,"val")," \u8bbe\u4e3a\u7f51\u683c\u76f8\u5e94\u7684\u503c\uff0c\u5e76\u5c06\u56db\u4e2a\u5b50\u8282\u70b9\u90fd\u8bbe\u4e3a Null \u7136\u540e\u505c\u6b62\u3002"),(0,s.kt)("li",null,"\u5982\u679c\u5f53\u524d\u7f51\u683c\u7684\u503c\u4e0d\u540c\uff0c\u5c06 ",(0,s.kt)("code",null,"isLeaf")," \u8bbe\u4e3a False\uff0c \u5c06 ",(0,s.kt)("code",null,"val")," \u8bbe\u4e3a\u4efb\u610f\u503c\uff0c\u7136\u540e\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5c06\u5f53\u524d\u7f51\u683c\u5212\u5206\u4e3a\u56db\u4e2a\u5b50\u7f51\u683c\u3002"),(0,s.kt)("li",null,"\u4f7f\u7528\u9002\u5f53\u7684\u5b50\u7f51\u683c\u9012\u5f52\u6bcf\u4e2a\u5b50\u8282\u70b9\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"",src:e(7936).Z})),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u56db\u53c9\u6811\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.kt)("a",{href:"https://en.wikipedia.org/wiki/Quadtree"},"wiki")," \u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u56db\u53c9\u6811\u683c\u5f0f\uff1a")),(0,s.kt)("p",null,"\u8f93\u51fa\u4e3a\u4f7f\u7528\u5c42\u5e8f\u904d\u5386\u540e\u56db\u53c9\u6811\u7684\u5e8f\u5217\u5316\u5f62\u5f0f\uff0c\u5176\u4e2d ",(0,s.kt)("code",null,"null")," \u8868\u793a\u8def\u5f84\u7ec8\u6b62\u7b26\uff0c\u5176\u4e0b\u9762\u4e0d\u5b58\u5728\u8282\u70b9\u3002"),(0,s.kt)("p",null,"\u5b83\u4e0e\u4e8c\u53c9\u6811\u7684\u5e8f\u5217\u5316\u975e\u5e38\u76f8\u4f3c\u3002\u552f\u4e00\u7684\u533a\u522b\u662f\u8282\u70b9\u4ee5\u5217\u8868\u5f62\u5f0f\u8868\u793a ",(0,s.kt)("code",null,"[isLeaf, val]")," \u3002"),(0,s.kt)("p",null,"\u5982\u679c ",(0,s.kt)("code",null,"isLeaf")," \u6216\u8005 ",(0,s.kt)("code",null,"val")," \u7684\u503c\u4e3a True \uff0c\u5219\u8868\u793a\u5b83\u5728\u5217\u8868\xa0",(0,s.kt)("code",null,"[isLeaf, val]")," \u4e2d\u7684\u503c\u4e3a ",(0,s.kt)("strong",null,"1")," \uff1b\u5982\u679c ",(0,s.kt)("code",null,"isLeaf")," \u6216\u8005 ",(0,s.kt)("code",null,"val")," \u7684\u503c\u4e3a False \uff0c\u5219\u8868\u793a\u503c\u4e3a ",(0,s.kt)("strong",null,"0 "),"\u3002"),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2020/02/11/grid1.png"})),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[0,1],[1,0]]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[[0,1],[1,0],[1,1],[1,1],[1,0]]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6b64\u793a\u4f8b\u7684\u89e3\u91ca\u5982\u4e0b\uff1a",(0,s.kt)("br",null),"\u8bf7\u6ce8\u610f\uff0c\u5728\u4e0b\u9762\u56db\u53c9\u6811\u7684\u56fe\u793a\u4e2d\uff0c0 \u8868\u793a false\uff0c1 \u8868\u793a True \u3002",(0,s.kt)("br",null),(0,s.kt)("img",{alt:"",src:e(44951).Z}),(0,s.kt)("br",null)),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"",src:e(5486).Z})),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u7f51\u683c\u4e2d\u7684\u6240\u6709\u503c\u90fd\u4e0d\u76f8\u540c\u3002\u6211\u4eec\u5c06\u7f51\u683c\u5212\u5206\u4e3a\u56db\u4e2a\u5b50\u7f51\u683c\u3002",(0,s.kt)("br",null),"topLeft\uff0cbottomLeft \u548c bottomRight \u5747\u5177\u6709\u76f8\u540c\u7684\u503c\u3002",(0,s.kt)("br",null),"topRight \u5177\u6709\u4e0d\u540c\u7684\u503c\uff0c\u56e0\u6b64\u6211\u4eec\u5c06\u5176\u518d\u5206\u4e3a 4 \u4e2a\u5b50\u7f51\u683c\uff0c\u8fd9\u6837\u6bcf\u4e2a\u5b50\u7f51\u683c\u90fd\u5177\u6709\u76f8\u540c\u7684\u503c\u3002",(0,s.kt)("br",null),"\u89e3\u91ca\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,s.kt)("br",null),(0,s.kt)("img",{alt:"",src:"https://assets.leetcode.com/uploads/2020/02/12/e2tree.png"}),(0,s.kt)("br",null)),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[1,1],[1,1]]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[[1,1]]",(0,s.kt)("br",null)),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 4\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[0]]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[[1,0]]",(0,s.kt)("br",null)),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u793a\u4f8b 5\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("strong",null,"\u8f93\u5165\uff1a"),"grid = [[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]",(0,s.kt)("br",null),(0,s.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[[0,1],[1,1],[1,0],[1,0],[1,1]]",(0,s.kt)("br",null)),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("p",null,(0,s.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,s.kt)("ol",null,(0,s.kt)("li",null,(0,s.kt)("code",null,"n == grid.length == grid[i].length")),(0,s.kt)("li",null,(0,s.kt)("code",null,"n == 2^x")," \u5176\u4e2d ",(0,s.kt)("code",null,"0 <= x <= 6"))),(0,s.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u65e5\u5e38\u5410\u69fd\u7ffb\u8bd1\uff0c\u9898\u76ee\u770b\u4e86\u8001\u534a\u5929")),(0,s.kt)("br",null),(0,s.kt)("p",null,"\u9898\u76ee\u610f\u601d\u662f\u8981\u628a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n * n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u77e9\u9635\u5206\u5272\u6210 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," \u7b49\u4efd\uff08\u5de6\u4e0a\u3001\u53f3\u4e0a\u3001\u5de6\u4e0b\u3001\u53f3\u4e0b\uff09\uff1b\u5206\u5272\u4e4b\u540e\u8fd4\u56de\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"Node"),"\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"Node")," \u521d\u59cb\u5316\u8981\u786e\u5b9a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3")))))," \u4e2a\u503c\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"val"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"isLeaf"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"children"),"\uff08",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," \u4e2a\u5b50\u8282\u70b9\uff09\uff1b\u5982\u679c ",(0,s.kt)("inlineCode",{parentName:"p"},"Node")," \u4e0d\u662f\u53f6\u5b50\u8282\u70b9\u5c31\u63a5\u7740\u9012\u5f52\u5206\u5272\u5b83\u7684 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," \u4e2a\u5b50\u8282\u70b9\u5bf9\u5e94\u7684\u5b50\u77e9\u9635\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"children"),"\uff1a\u53ef\u4ee5\u5148\u9012\u5f52\u6c42\u51fa ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," \u4e2a\u5b50\u8282\u70b9\uff0c\u5f53\u524d\u8282\u70b9\u662f\u5426\u6709\u5b50\u8282\u70b9\u7531 ",(0,s.kt)("inlineCode",{parentName:"li"},"isLeaf")," \u51b3\u5b9a"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"val"),"\uff1a\u6240\u6709\u5b50\u8282\u70b9\u7684 ",(0,s.kt)("inlineCode",{parentName:"li"},"val")," \u4e4b\u548c\u9664\u4ee5 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," \u5e76\u5411\u4e0a\u53d6\u6574\uff08\u4e5f\u53ef\u4ee5\u5411\u4e0b\u53d6\u6574\uff09"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"isLeaf"),"\uff1a\u6240\u6709\u5b50\u8282\u70b9\u7684 ",(0,s.kt)("inlineCode",{parentName:"li"},"val")," \u4e4b\u548c\u662f  ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," \u6216 ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),"\uff0c\u4e14\u6240\u6709\u5b50\u8282\u70b9\u90fd\u662f\u53f6\u5b50\u8282\u70b9")),(0,s.kt)("br",null),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u77e9\u9635\u5927\u5c0f\u662f",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mi",{parentName:"msup"},"x")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"6"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n * n(n = 2 ^ x, 0 <= x <= 6)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8588em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u77e9\u9635\u6700\u5c0f\u662f ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1*1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," \u6700\u5927\u662f ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"64"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mn",{parentName:"mrow"},"64")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"64*64")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"64"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"64"))))),"\uff0c\u56e0\u6b64\u9664\u6700\u5c0f\u77e9\u9635\u5916\u6240\u6709\u77e9\u9635\u90fd\u53ef\u4ee5\u88ab ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))," \u7b49\u5206\uff0c\u6ca1\u6709\u5176\u4ed6\u7279\u6b8a\u60c5\u51b5\u9700\u8981\u5904\u7406")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var construct = function (grid) {\n    const n = grid.length;\n\n    function dfs(i0, i1, j0, j1) {\n        if (i0 === i1 && j0 === j1) return new Node(grid[i0][j0], true);\n\n        // \u9012\u5f52\u6c42\u51fa4\u4e2a\u5b50\u8282\u70b9\n        const mi = Math.floor(i1 / 2 + i0 / 2), mj = Math.floor(j1 / 2 + j0 / 2);\n        const tl = dfs(i0, mi, j0, mj);\n        const tr = dfs(i0, mi, mj + 1, j1);\n        const bl = dfs(mi + 1, i1, j0, mj);\n        const br = dfs(mi + 1, i1, mj + 1, j1);\n\n        const children = [tl, tr, bl, br];\n        // \u6c42\u51fa\u6240\u6709\u5b50\u8282\u70b9\u7684 val \u4e4b\u548c\n        const val = children.reduce((a, c) => a + c.val, 0);\n        // isLeaf\uff1a\u6240\u6709\u5b50\u8282\u70b9\u7684 val \u4e4b\u548c\u662f 4 \u6216 0\uff0c\u4e14\u6240\u6709\u5b50\u8282\u70b9\u90fd\u662f\u53f6\u5b50\u8282\u70b9 \n        const isLeaf = (val % 4 === 0) && children.every((n) => n.isLeaf);\n\n        // node.val\uff1a\u6240\u6709\u5b50\u8282\u70b9\u7684 val \u4e4b\u548c\u9664\u4ee5 4 \u5e76\u5411\u4e0a\u53d6\u6574\n        // node.isLeaf\uff1a\u6240\u6709\u5b50\u8282\u70b9\u7684 val \u4e4b\u548c\u662f 4 \u6216 0\uff0c\u4e14\u6240\u6709\u5b50\u8282\u70b9\u90fd\u662f\u53f6\u5b50\u8282\u70b9\n        // 4\u4e2a\u5b50\u8282\u70b9\uff1a\u5f53\u524d\u8282\u70b9\u662f\u5426\u6709\u5b50\u8282\u70b9\u7531 isLeaf \u51b3\u5b9a\n        return new Node(Math.ceil(val / 4), isLeaf, ...(isLeaf ? [] : children));\n    }\n\n    return dfs(0, n - 1, 0, n - 1);\n};\n")),(0,s.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image.png",src:e(76181).Z,width:"1112",height:"486"})))}N.isMDXComponent=!0},5486:(a,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/8193a0af9f976f1b707348694c504027-9b3d75bb158fe561ea158f12ca1b9064.png"},44951:(a,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/8a04518e8109b30f44050a2cff8fa5b8-b2f2a567dfa639155fbf4c121685cfb4.png"},7936:(a,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/c135b19546ff7b8e933eb2fa8ea68a4b-1007d23e30703ce3e6201da85ee00b6f.png"},76181:(a,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/95857ff07be33d4c82252974346b9c42-1915c218bc0e6c88a5cfdeed48d414d1.png"}}]);