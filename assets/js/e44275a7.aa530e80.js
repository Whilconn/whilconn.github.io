"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[71246],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,p=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),c=o(a),u=l,N=c["".concat(p,".").concat(u)]||c[u]||k[u]||s;return a?n.createElement(N,r(r({ref:t},i),{},{components:a})):n.createElement(N,r({ref:t},i))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[c]="string"==typeof e?e:l,r[1]=m;for(var o=2;o<s;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const s={authors:["Whilconn"],tags:["\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:new Date("2022-12-02T00:00:00.000Z")},r=void 0,m={permalink:"/algorithm/2022/12/02/1769.\u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570",source:"@site/algorithm/2022/12/02/1769.\u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570.md",title:"1769.\u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570",description:"1\u3001\u9898\u5e72",date:"2022-12-02T00:00:00.000Z",formattedDate:"2022\u5e7412\u67082\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.33,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u5b57\u7b26\u4e32"],date:"2022-12-02T00:00:00.000Z"},prevItem:{title:"1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c",permalink:"/algorithm/2022/12/04/1774.\u6700\u63a5\u8fd1\u76ee\u6807\u4ef7\u683c\u7684\u751c\u70b9\u6210\u672c"},nextItem:{title:"809.\u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57",permalink:"/algorithm/2022/11/25/809.\u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def1",id:"2\u601d\u8def1",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2},{value:"6\u3001\u601d\u8def2",id:"6\u601d\u8def2",level:2},{value:"7\u3001Code",id:"7code",level:2},{value:"8\u3001\u590d\u6742\u5ea6",id:"8\u590d\u6742\u5ea6",level:2},{value:"9\u3001\u6267\u884c\u7ed3\u679c",id:"9\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function c(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u6709 ",(0,l.kt)("code",null,"n")," \u4e2a\u76d2\u5b50\u3002\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,l.kt)("code",null,"n")," \u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32 ",(0,l.kt)("code",null,"boxes")," \uff0c\u5176\u4e2d ",(0,l.kt)("code",null,"boxes[i]")," \u7684\u503c\u4e3a ",(0,l.kt)("code",null,"'0'")," \u8868\u793a\u7b2c ",(0,l.kt)("code",null,"i")," \u4e2a\u76d2\u5b50\u662f ",(0,l.kt)("strong",null,"\u7a7a")," \u7684\uff0c\u800c ",(0,l.kt)("code",null,"boxes[i]")," \u7684\u503c\u4e3a ",(0,l.kt)("code",null,"'1'")," \u8868\u793a\u76d2\u5b50\u91cc\u6709 ",(0,l.kt)("strong",null,"\u4e00\u4e2a")," \u5c0f\u7403\u3002"),(0,l.kt)("p",null,"\u5728\u4e00\u6b65\u64cd\u4f5c\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,l.kt)("strong",null,"\u4e00\u4e2a")," \u5c0f\u7403\u4ece\u67d0\u4e2a\u76d2\u5b50\u79fb\u52a8\u5230\u4e00\u4e2a\u4e0e\u4e4b\u76f8\u90bb\u7684\u76d2\u5b50\u4e2d\u3002\u7b2c ",(0,l.kt)("code",null,"i")," \u4e2a\u76d2\u5b50\u548c\u7b2c ",(0,l.kt)("code",null,"j")," \u4e2a\u76d2\u5b50\u76f8\u90bb\u9700\u6ee1\u8db3 ",(0,l.kt)("code",null,"abs(i - j) == 1")," \u3002\u6ce8\u610f\uff0c\u64cd\u4f5c\u6267\u884c\u540e\uff0c\u67d0\u4e9b\u76d2\u5b50\u4e2d\u53ef\u80fd\u4f1a\u5b58\u5728\u4e0d\u6b62\u4e00\u4e2a\u5c0f\u7403\u3002"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,l.kt)("code",null,"n")," \u7684\u6570\u7ec4 ",(0,l.kt)("code",null,"answer")," \uff0c\u5176\u4e2d ",(0,l.kt)("code",null,"answer[i]")," \u662f\u5c06\u6240\u6709\u5c0f\u7403\u79fb\u52a8\u5230\u7b2c ",(0,l.kt)("code",null,"i")," \u4e2a\u76d2\u5b50\u6240\u9700\u7684 ",(0,l.kt)("strong",null,"\u6700\u5c0f")," \u64cd\u4f5c\u6570\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a ",(0,l.kt)("code",null,"answer[i]")," \u90fd\u9700\u8981\u6839\u636e\u76d2\u5b50\u7684 ",(0,l.kt)("strong",null,"\u521d\u59cb\u72b6\u6001")," \u8fdb\u884c\u8ba1\u7b97\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'boxes = "110"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[1,1,3]",(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6bcf\u4e2a\u76d2\u5b50\u5bf9\u5e94\u7684\u6700\u5c0f\u64cd\u4f5c\u6570\u5982\u4e0b\uff1a",(0,l.kt)("br",null),"1) \u7b2c 1 \u4e2a\u76d2\u5b50\uff1a\u5c06\u4e00\u4e2a\u5c0f\u7403\u4ece\u7b2c 2 \u4e2a\u76d2\u5b50\u79fb\u52a8\u5230\u7b2c 1 \u4e2a\u76d2\u5b50\uff0c\u9700\u8981 1 \u6b65\u64cd\u4f5c\u3002",(0,l.kt)("br",null),"2) \u7b2c 2 \u4e2a\u76d2\u5b50\uff1a\u5c06\u4e00\u4e2a\u5c0f\u7403\u4ece\u7b2c 1 \u4e2a\u76d2\u5b50\u79fb\u52a8\u5230\u7b2c 2 \u4e2a\u76d2\u5b50\uff0c\u9700\u8981 1 \u6b65\u64cd\u4f5c\u3002",(0,l.kt)("br",null),"3) \u7b2c 3 \u4e2a\u76d2\u5b50\uff1a\u5c06\u4e00\u4e2a\u5c0f\u7403\u4ece\u7b2c 1 \u4e2a\u76d2\u5b50\u79fb\u52a8\u5230\u7b2c 3 \u4e2a\u76d2\u5b50\uff0c\u9700\u8981 2 \u6b65\u64cd\u4f5c\u3002\u5c06\u4e00\u4e2a\u5c0f\u7403\u4ece\u7b2c 2 \u4e2a\u76d2\u5b50\u79fb\u52a8\u5230\u7b2c 3 \u4e2a\u76d2\u5b50\uff0c\u9700\u8981 1 \u6b65\u64cd\u4f5c\u3002\u5171\u8ba1 3 \u6b65\u64cd\u4f5c\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'boxes = "001011"',(0,l.kt)("br",null),(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[11,8,5,4,3,4]"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"n == boxes.length")),(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= n <= 2000")),(0,l.kt)("li",null,(0,l.kt)("code",null,"boxes[i]")," \u4e3a ",(0,l.kt)("code",null,"'0'")," \u6216 ",(0,l.kt)("code",null,"'1'"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Problem: ",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/"},"1769. \u79fb\u52a8\u6240\u6709\u7403\u5230\u6bcf\u4e2a\u76d2\u5b50\u6240\u9700\u7684\u6700\u5c0f\u64cd\u4f5c\u6570"))),(0,l.kt)("h2",{id:"2\u601d\u8def1"},"2\u3001\u601d\u8def1"),(0,l.kt)("p",null,"\u53cc\u5c42\u5faa\u73af\u66b4\u529b\u679a\u4e3e"),(0,l.kt)("h2",{id:"3code"},"3\u3001Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function minOperations(boxes: string): number[] {\n    const ans = new Array(boxes.length).fill(0);\n    for (let i = 0; i < ans.length; i++) {\n        for (let j = 0; j < boxes.length; j++) {\n            if (boxes[j] === '1') ans[i] += Math.abs(i - j);\n        }\n    }\n    return ans;\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("msup",{parentName:"mrow"},(0,l.kt)("mi",{parentName:"msup"},"n"),(0,l.kt)("mn",{parentName:"msup"},"2")),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"msupsub"},(0,l.kt)("span",{parentName:"span",className:"vlist-t"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,l.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mn",{parentName:"mrow"},"1"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},"1"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(3358).Z,width:"1554",height:"394"})),(0,l.kt)("h2",{id:"6\u601d\u8def2"},"6\u3001\u601d\u8def2"),(0,l.kt)("p",null,"\u5355\u5c42\u5faa\u73af\u7d2f\u52a0\u5de6\u53f3\u6b65\u6570"),(0,l.kt)("p",null,"\u5173\u952e\u70b9\uff1a\u5de6\u534a\u8fb9\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"lc")," \u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u65f6\uff0c\u6bcf\u79fb\u52a8\u4e00\u6b21\u5de6\u534a\u8fb9\u6b65\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"ls")," \u9700\u7d2f\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"lc"),"\uff0c\u540c\u7406\u53f3\u534a\u8fb9\u6b65\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"rs")," \u9700\u51cf\u53bb ",(0,l.kt)("inlineCode",{parentName:"p"},"rc")),(0,l.kt)("h2",{id:"7code"},"7\u3001Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function minOperations(boxes: string): number[] {\n    let rc = 0, rs = 0, lc = 0, ls = 0;\n    const ans = new Array(boxes.length).fill(0);\n\n    for (let i = 0; i < boxes.length; i++) {\n        if (boxes[i] === '1') rc += 1, rs += i;\n    }\n\n    for (let i = 0; i < ans.length; i++) {\n        ans[i] = ls + rs;\n        if (boxes[i] === '1') rc--, lc++;\n        rs -= rc, ls += lc;\n    }\n    \n    return ans;\n};\n")),(0,l.kt)("h2",{id:"8\u590d\u6742\u5ea6"},"8\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mn",{parentName:"mrow"},"1"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},"1"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("h2",{id:"9\u6267\u884c\u7ed3\u679c"},"9\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(23555).Z,width:"1544",height:"404"})))}c.isMDXComponent=!0},3358:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9f16c329e894b456262d3bdf7b819c3b-2a305ff0631a7857feaa93b152c41ce7.png"},23555:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/e419edeb7c6fc1810c1933ca42980512-cb5a76aca5e9eb6ee86e95ff481637a3.png"}}]);