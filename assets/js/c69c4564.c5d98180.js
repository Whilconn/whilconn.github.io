"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[72641],{49613:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>N});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,N=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return n?r.createElement(N,i(i({ref:t},k),{},{components:n})):r.createElement(N,i({ref:t},k))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(15882),a=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u6570\u5b66","\u56de\u6eaf"],date:"2022/1/8"},i=void 0,o={permalink:"/algorithm/89.\u683c\u96f7\u7f16\u7801",source:"@site/algorithm/89.\u683c\u96f7\u7f16\u7801.md",title:"89.\u683c\u96f7\u7f16\u7801",description:"1\u3001\u9898\u5e72",date:"2022-01-08T00:00:00.000Z",formattedDate:"2022\u5e741\u67088\u65e5",tags:[{label:"\u4f4d\u8fd0\u7b97",permalink:"/algorithm/tags/\u4f4d\u8fd0\u7b97"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u56de\u6eaf",permalink:"/algorithm/tags/\u56de\u6eaf"}],readingTime:3.475,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u4f4d\u8fd0\u7b97","\u6570\u5b66","\u56de\u6eaf"],date:"2022/1/8"},prevItem:{title:"1629.\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e",permalink:"/algorithm/1629.\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e"},nextItem:{title:"1614.\u62ec\u53f7\u7684\u6700\u5927\u5d4c\u5957\u6df1\u5ea6",permalink:"/algorithm/1614.\u62ec\u53f7\u7684\u6700\u5927\u5d4c\u5957\u6df1\u5ea6"}},p={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u76f4\u63a5\u8ba1\u7b97",id:"2\u76f4\u63a5\u8ba1\u7b97",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u955c\u50cf\u5bf9\u79f0\u6784\u9020",id:"4\u955c\u50cf\u5bf9\u79f0\u6784\u9020",level:2},{value:"5\u3001\u4ee3\u7801",id:"5\u4ee3\u7801",level:2},{value:"6\u3001\u4ea4\u66ff\u6784\u9020",id:"6\u4ea4\u66ff\u6784\u9020",level:2}],k={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"n \u4f4d\u683c\u96f7\u7801\u5e8f\u5217")," \u662f\u4e00\u4e2a\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"2^n")," \u4e2a\u6574\u6570\u7ec4\u6210\u7684\u5e8f\u5217\uff0c\u5176\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6574\u6570\u90fd\u5728\u8303\u56f4 ",(0,a.kt)("inlineCode",{parentName:"li"},"[0, 2^n - 1]")," \u5185\uff08\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"2^n - 1"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u6574\u6570\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"0")),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6574\u6570\u5728\u5e8f\u5217\u4e2d\u51fa\u73b0 ",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u8d85\u8fc7\u4e00\u6b21")),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u5bf9 ",(0,a.kt)("strong",{parentName:"li"},"\u76f8\u90bb")," \u6574\u6570\u7684\u4e8c\u8fdb\u5236\u8868\u793a ",(0,a.kt)("strong",{parentName:"li"},"\u6070\u597d\u4e00\u4f4d\u4e0d\u540c")," \uff0c\u4e14"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u4e2a")," \u548c ",(0,a.kt)("strong",{parentName:"li"},"\u6700\u540e\u4e00\u4e2a")," \u6574\u6570\u7684\u4e8c\u8fdb\u5236\u8868\u793a ",(0,a.kt)("strong",{parentName:"li"},"\u6070\u597d\u4e00\u4f4d\u4e0d\u540c"))),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \uff0c\u8fd4\u56de\u4efb\u4e00\u6709\u6548\u7684 ",(0,a.kt)("strong",{parentName:"p"},"n \u4f4d\u683c\u96f7\u7801\u5e8f\u5217")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","0,1,3,2","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),"\n","[","0,1,3,2","]"," \u7684\u4e8c\u8fdb\u5236\u8868\u793a\u662f ","[","00,01,11,10","]"," \u3002",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"0",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"0"))," \u548c 0",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"1"))," \u6709\u4e00\u4f4d\u4e0d\u540c",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"0"),"_1 \u548c "),(0,a.kt)("strong",{parentName:"li"},"1"),"_1 \u6709\u4e00\u4f4d\u4e0d\u540c",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"1",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"1"))," \u548c 1",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"0"))," \u6709\u4e00\u4f4d\u4e0d\u540c",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"1"),"_0 \u548c "),(0,a.kt)("strong",{parentName:"li"},"0"),"_0 \u6709\u4e00\u4f4d\u4e0d\u540c",(0,a.kt)("br",null),"[","0,2,3,1","]"," \u4e5f\u662f\u4e00\u4e2a\u6709\u6548\u7684\u683c\u96f7\u7801\u5e8f\u5217\uff0c\u5176\u4e8c\u8fdb\u5236\u8868\u793a\u662f ","[","00,10,11,01","]"," \u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"0"),"_0 \u548c "),(0,a.kt)("strong",{parentName:"li"},"1"),"_0 \u6709\u4e00\u4f4d\u4e0d\u540c",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"1",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"0"))," \u548c 1",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"1"))," \u6709\u4e00\u4f4d\u4e0d\u540c",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"1"),"_1 \u548c "),(0,a.kt)("strong",{parentName:"li"},"0"),"_1 \u6709\u4e00\u4f4d\u4e0d\u540c",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"0",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"1"))," \u548c 0",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"0"))," \u6709\u4e00\u4f4d\u4e0d\u540c",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 1",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","0,1","]",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 16"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u683c\u96f7\u7f16\u7801\u7684\u751f\u6210\u65b9\u5f0f\u67093\u79cd\uff0c\u76f4\u63a5\u8ba1\u7b97\u3001\u955c\u50cf\u5bf9\u79f0\u6784\u9020\u3001\u4ea4\u66ff\u6784\u9020\uff1b\u53ef\u60dc\u6211\u4e00\u4e2a\u90fd\u6ca1\u63a8\u51fa\u6765\uff0c\u8fd9\u91cc\u505a\u4e2a\u7b80\u5355\u8bb0\u5f55\u3002")),(0,a.kt)("h2",{id:"2\u76f4\u63a5\u8ba1\u7b97"},"2\u3001\u76f4\u63a5\u8ba1\u7b97"),(0,a.kt)("p",null,"\u76f4\u63a5\u8ba1\u7b97\u7684\u516c\u5f0f\u662f\uff1a$G(n) = n \\oplus \\dfrac{n}{2}$\u3002\u5176\u4e2d $G(n)$ \u8868\u793a\u7b2c $n$ \u4e2a\u683c\u96f7\u7801\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8be5\u89e3\u6cd5\u5bf9\u5e94\u5b98\u89e32")),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var grayCode = function(n) {\n    const ret = [];\n    for (let i = 0; i < 1 << n; i++) {\n        ret.push((i >> 1) ^ i);\n    }\n    return ret;\n};\n")),(0,a.kt)("h2",{id:"4\u955c\u50cf\u5bf9\u79f0\u6784\u9020"},"4\u3001\u955c\u50cf\u5bf9\u79f0\u6784\u9020"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u524d",(0,a.kt)("inlineCode",{parentName:"li"},"2k"),"\u4e2a\u683c\u96f7\u7801\u53bb\u9664\u9996\u4f4d\u4e8c\u8fdb\u5236\u6570\u5e76\u5206\u6210\u4e24\u534a\u540e\u5177\u6709\u955c\u50cf\u5bf9\u79f0\u6027\u3002\uff08\u5982\u4e0b\u56fe3\u4f4d\u683c\u96f7\u7801\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n"),"\u4f4d\u683c\u96f7\u7801\u662f\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"n-1"),"\u4f4d\u683c\u96f7\u7801\u4f5c\u4e3a\u524d\u534a\u90e8\u5206\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"n-1"),"\u4f4d\u683c\u96f7\u7801\u5012\u5e8f\u904d\u5386\u5e76\u5728\u5176\u4e8c\u8fdb\u5236\u6570\u4e4b\u524d\u6dfb",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\u4f5c\u4e3a\u540e\u534a\u90e8\u5206\u3002\uff08\u5982\u4e0b\u56fe3\u4f4d\u683c\u96f7\u7801\u4e0e2\u4f4d\u683c\u96f7\u7801\u5173\u7cfb\uff09")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1641626729-nYkWXM-image.png",alt:"image.png"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8be5\u89e3\u6cd5\u5bf9\u5e94\u5b98\u89e31")),(0,a.kt)("h2",{id:"5\u4ee3\u7801"},"5\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var grayCode = function (n) {\n    const arr = [0, 1];\n    for (let i = 2; i <= n; i++) {\n        for (let j = arr.length - 1; j > -1; j--) {\n            arr.push(arr[j] | (1 << (i - 1)));\n        }\n    }\n    return arr;\n};\n")),(0,a.kt)("h2",{id:"6\u4ea4\u66ff\u6784\u9020"},"6\u3001\u4ea4\u66ff\u6784\u9020"),(0,a.kt)("p",null,"\u4ee53\u4f4d\u683c\u96f7\u7801\u4e3a\u4f8b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece ",(0,a.kt)("inlineCode",{parentName:"li"},"n = 0")," \u5f00\u59cb\uff0c\u6309\u4ee5\u4e0b2\u6b65\u53cd\u590d\u64cd\u4f5c\uff0c\u5373\u53ef\u5f97\u5230\u6240\u6709\u683c\u96f7\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n")," \u4e3a\u5076\u6570\uff1a\u7ffb\u8f6c\u6700\u4f4e\u4f4d\u5f97\u5230\u4e0b\u4e00\u4e2a\u683c\u96f7\u7801\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"000")," \u53d8\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"001")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n")," \u4e3a\u5947\u6570\uff1a\u628a\u6700\u53f3\u8fb9\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u5de6\u8fb9\u7684\u4f4d\u7ffb\u8f6c\u5f97\u5230\u4e0b\u4e00\u4e2a\u683c\u96f7\u7801\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"001")," \u53d8\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"011"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b9e\u73b0\u7565\u590d\u6742\uff0c\u6682\u65e0\u4ee3\u7801\uff0c\u5efa\u8bae\u4f18\u5148\u4f7f\u7528\u524d2\u79cd\u65b9\u6cd5\u751f\u6210")))}u.isMDXComponent=!0}}]);