"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[53088],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>N});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),c=o(t),u=r,N=c["".concat(p,".").concat(u)]||c[u]||k[u]||l;return t?n.createElement(N,s(s({ref:a},i),{},{components:t})):n.createElement(N,s({ref:a},i))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m[c]="string"==typeof e?e:r,s[1]=m;for(var o=2;o<l;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33697:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const l={authors:["Whilconn"],tags:["\u8bbe\u8ba1","\u7ebf\u6bb5\u6811","\u4e8c\u5206\u67e5\u627e","\u6709\u5e8f\u96c6\u5408"],date:"2022/1/13"},s=void 0,m={permalink:"/algorithm/2022/01/13/\u5251\u6307 Offer II 058.\u65e5\u7a0b\u8868",source:"@site/algorithm/2022/01/13/\u5251\u6307 Offer II 058.\u65e5\u7a0b\u8868.md",title:"\u5251\u6307 Offer II 058.\u65e5\u7a0b\u8868",description:"1\u3001\u9898\u5e72",date:"2022-01-13T00:00:00.000Z",formattedDate:"2022\u5e741\u670813\u65e5",tags:[{label:"\u8bbe\u8ba1",permalink:"/algorithm/tags/\u8bbe\u8ba1"},{label:"\u7ebf\u6bb5\u6811",permalink:"/algorithm/tags/\u7ebf\u6bb5\u6811"},{label:"\u4e8c\u5206\u67e5\u627e",permalink:"/algorithm/tags/\u4e8c\u5206\u67e5\u627e"},{label:"\u6709\u5e8f\u96c6\u5408",permalink:"/algorithm/tags/\u6709\u5e8f\u96c6\u5408"}],readingTime:2.665,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8bbe\u8ba1","\u7ebf\u6bb5\u6811","\u4e8c\u5206\u67e5\u627e","\u6709\u5e8f\u96c6\u5408"],date:"2022/1/13"},prevItem:{title:"\u5251\u6307 Offer II 057.\u503c\u548c\u4e0b\u6807\u4e4b\u5dee\u90fd\u5728\u7ed9\u5b9a\u7684\u8303\u56f4\u5185",permalink:"/algorithm/2022/01/13/\u5251\u6307 Offer II 057.\u503c\u548c\u4e0b\u6807\u4e4b\u5dee\u90fd\u5728\u7ed9\u5b9a\u7684\u8303\u56f4\u5185"},nextItem:{title:"\u5251\u6307 Offer II 059.\u6570\u636e\u6d41\u7684\u7b2c K \u5927\u6570\u503c",permalink:"/algorithm/2022/01/13/\u5251\u6307 Offer II 059.\u6570\u636e\u6d41\u7684\u7b2c K \u5927\u6570\u503c"}},p={authorsImageUrls:[void 0]},o=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u590d\u6742\u5ea6",id:"3\u590d\u6742\u5ea6",level:2},{value:"4\u3001\u4ee3\u7801",id:"4\u4ee3\u7801",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],i={toc:o};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u8bf7\u5b9e\u73b0\u4e00\u4e2a ",(0,r.kt)("code",null,"MyCalendar")," \u7c7b\u6765\u5b58\u653e\u4f60\u7684\u65e5\u7a0b\u5b89\u6392\u3002\u5982\u679c\u8981\u6dfb\u52a0\u7684\u65f6\u95f4\u5185\u6ca1\u6709\u5176\u4ed6\u5b89\u6392\uff0c\u5219\u53ef\u4ee5\u5b58\u50a8\u8fd9\u4e2a\u65b0\u7684\u65e5\u7a0b\u5b89\u6392\u3002"),(0,r.kt)("p",null,(0,r.kt)("code",null,"MyCalendar")," \u6709\u4e00\u4e2a ",(0,r.kt)("code",null,"book(int start, int end)"),"\u65b9\u6cd5\u3002\u5b83\u610f\u5473\u7740\u5728 start \u5230 end \u65f6\u95f4\u5185\u589e\u52a0\u4e00\u4e2a\u65e5\u7a0b\u5b89\u6392\uff0c\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u65f6\u95f4\u662f\u534a\u5f00\u533a\u95f4\uff0c\u5373 ",(0,r.kt)("code",null,"[start, end)"),", \u5b9e\u6570\xa0",(0,r.kt)("code",null,"x")," \u7684\u8303\u56f4\u4e3a\uff0c \xa0",(0,r.kt)("code",null,"start <= x < end"),"\u3002"),(0,r.kt)("p",null,"\u5f53\u4e24\u4e2a\u65e5\u7a0b\u5b89\u6392\u6709\u4e00\u4e9b\u65f6\u95f4\u4e0a\u7684\u4ea4\u53c9\u65f6\uff08\u4f8b\u5982\u4e24\u4e2a\u65e5\u7a0b\u5b89\u6392\u90fd\u5728\u540c\u4e00\u65f6\u95f4\u5185\uff09\uff0c\u5c31\u4f1a\u4ea7\u751f\u91cd\u590d\u9884\u8ba2\u3002"),(0,r.kt)("p",null,"\u6bcf\u6b21\u8c03\u7528 ",(0,r.kt)("code",null,"MyCalendar.book"),"\u65b9\u6cd5\u65f6\uff0c\u5982\u679c\u53ef\u4ee5\u5c06\u65e5\u7a0b\u5b89\u6392\u6210\u529f\u6dfb\u52a0\u5230\u65e5\u5386\u4e2d\u800c\u4e0d\u4f1a\u5bfc\u81f4\u91cd\u590d\u9884\u8ba2\uff0c\u8fd4\u56de ",(0,r.kt)("code",null,"true"),"\u3002\u5426\u5219\uff0c\u8fd4\u56de ",(0,r.kt)("code",null,"false"),"\xa0\u5e76\u4e14\u4e0d\u8981\u5c06\u8be5\u65e5\u7a0b\u5b89\u6392\u6dfb\u52a0\u5230\u65e5\u5386\u4e2d\u3002"),(0,r.kt)("p",null,"\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8c03\u7528 ",(0,r.kt)("code",null,"MyCalendar")," \u7c7b: ",(0,r.kt)("code",null,"MyCalendar cal = new MyCalendar();")," ",(0,r.kt)("code",null,"MyCalendar.book(start, end)")),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:",(0,r.kt)("br",null)),'["MyCalendar","book","book","book"]',(0,r.kt)("br",null),"[[],[10,20],[15,25],[20,30]]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa:")," [null,true,false,true]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca:")," ",(0,r.kt)("br",null),"MyCalendar myCalendar = new MyCalendar();",(0,r.kt)("br",null),"MyCalendar.book(10, 20); // returns true ",(0,r.kt)("br",null),"MyCalendar.book(15, 25); // returns false \uff0c\u7b2c\u4e8c\u4e2a\u65e5\u7a0b\u5b89\u6392\u4e0d\u80fd\u6dfb\u52a0\u5230\u65e5\u5386\u4e2d\uff0c\u56e0\u4e3a\u65f6\u95f4 15 \u5df2\u7ecf\u88ab\u7b2c\u4e00\u4e2a\u65e5\u7a0b\u5b89\u6392\u9884\u5b9a\u4e86",(0,r.kt)("br",null),"MyCalendar.book(20, 30); // returns true \uff0c\u7b2c\u4e09\u4e2a\u65e5\u7a0b\u5b89\u6392\u53ef\u4ee5\u6dfb\u52a0\u5230\u65e5\u5386\u4e2d\uff0c\u56e0\u4e3a\u7b2c\u4e00\u4e2a\u65e5\u7a0b\u5b89\u6392\u5e76\u4e0d\u5305\u542b\u65f6\u95f4 20 ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u6bcf\u4e2a\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8c03\u7528\xa0",(0,r.kt)("code",null,"MyCalendar.book"),"\xa0\u51fd\u6570\u6700\u591a\u4e0d\u8d85\u8fc7\xa0",(0,r.kt)("code",null,"1000"),"\u6b21\u3002"),(0,r.kt)("li",null,(0,r.kt)("code",null,"0 <= start < end <= 10",(0,r.kt)("sup",null,"9")))),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 729\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,r.kt)("a",{href:"https://leetcode-cn.com/problems/my-calendar-i/"},"https://leetcode-cn.com/problems/my-calendar-i/")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u7406\u60f3\u89e3\u6cd5\u662f\u4f7f\u7528\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u56e0\u4e3a\u5176\u67e5\u627e\u548c\u5199\u5165\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662f ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logn)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u4f46\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"JS")," \u6ca1\u6709\u81ea\u5e26\u8fd9\u6837\u7684\u6570\u636e\u7ed3\u6784\uff0c\u624b\u5199\u96be\u5ea6\u8f83\u5927\uff0c\u56e0\u6b64\u91c7\u7528\u66b4\u529b\u89e3\u6cd5\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"3\u590d\u6742\u5ea6"},"3\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("h2",{id:"4\u4ee3\u7801"},"4\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},"var MyCalendar = function () {\n    this.matrix = [];\n};\n\nMyCalendar.prototype.book = function (start, end) {\n    for (let [s, e] of this.matrix) {\n        if (!(start > e || end - 1 < s)) return false;\n    }\n    return this.matrix.push([start, end - 1]), true;\n};\n")),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6: 212 ms    \u5185\u5b58\u6d88\u8017: 47.3 MB")))}c.isMDXComponent=!0}}]);