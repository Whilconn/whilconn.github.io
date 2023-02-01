"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[25752],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>d});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function p(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},p=Object.keys(a);for(n=0;n<p.length;n++)t=p[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(n=0;n<p.length;n++)t=p[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},k="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,p=a.originalType,l=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),k=i(t),c=s,d=k["".concat(l,".").concat(c)]||k[c]||N[c]||p;return t?n.createElement(d,m(m({ref:e},o),{},{components:t})):n.createElement(d,m({ref:e},o))}));function d(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var p=t.length,m=new Array(p);m[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[k]="string"==typeof a?a:s,m[1]=r;for(var i=2;i<p;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},21526:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const p={authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:"2022/2/8"},m=void 0,r={permalink:"/algorithm/1001.\u7f51\u683c\u7167\u660e",source:"@site/algorithm/1001.\u7f51\u683c\u7167\u660e.md",title:"1001.\u7f51\u683c\u7167\u660e",description:"1\u3001\u9898\u5e72",date:"2022-02-08T00:00:00.000Z",formattedDate:"2022\u5e742\u67088\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"}],readingTime:5.85,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868"],date:"2022/2/8"},prevItem:{title:"\u5251\u6307 Offer II 101.\u5206\u5272\u7b49\u548c\u5b50\u96c6",permalink:"/algorithm/\u5251\u6307 Offer II 101.\u5206\u5272\u7b49\u548c\u5b50\u96c6"},nextItem:{title:"1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",permalink:"/algorithm/1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32"}},l={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function k(a){let{components:e,...p}=a;return(0,s.kt)("wrapper",(0,n.Z)({},o,p,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,s.kt)("p",null,"\u5728\u5927\u5c0f\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"n x n")," \u7684\u7f51\u683c ",(0,s.kt)("inlineCode",{parentName:"p"},"grid")," \u4e0a\uff0c\u6bcf\u4e2a\u5355\u5143\u683c\u90fd\u6709\u4e00\u76cf\u706f\uff0c\u6700\u521d\u706f\u90fd\u5904\u4e8e ",(0,s.kt)("strong",{parentName:"p"},"\u5173\u95ed")," \u72b6\u6001\u3002"),(0,s.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u7531\u706f\u7684\u4f4d\u7f6e\u7ec4\u6210\u7684\u4e8c\u7ef4\u6570\u7ec4\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"lamps")," \uff0c\u5176\u4e2d ",(0,s.kt)("inlineCode",{parentName:"p"},"lamps[i] = [rowi, coli]")," \u8868\u793a ",(0,s.kt)("strong",{parentName:"p"},"\u6253\u5f00")," \u4f4d\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"grid[rowi][coli]")," \u7684\u706f\u3002\u5373\u4fbf\u540c\u4e00\u76cf\u706f\u53ef\u80fd\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"lamps")," \u4e2d\u591a\u6b21\u5217\u51fa\uff0c\u4e0d\u4f1a\u5f71\u54cd\u8fd9\u76cf\u706f\u5904\u4e8e ",(0,s.kt)("strong",{parentName:"p"},"\u6253\u5f00")," \u72b6\u6001\u3002"),(0,s.kt)("p",null,"\u5f53\u4e00\u76cf\u706f\u5904\u4e8e\u6253\u5f00\u72b6\u6001\uff0c\u5b83\u5c06\u4f1a\u7167\u4eae ",(0,s.kt)("strong",{parentName:"p"},"\u81ea\u8eab\u6240\u5728\u5355\u5143\u683c")," \u4ee5\u53ca\u540c\u4e00 ",(0,s.kt)("strong",{parentName:"p"},"\u884c")," \u3001\u540c\u4e00 ",(0,s.kt)("strong",{parentName:"p"},"\u5217")," \u548c\u4e24\u6761 ",(0,s.kt)("strong",{parentName:"p"},"\u5bf9\u89d2\u7ebf")," \u4e0a\u7684 ",(0,s.kt)("strong",{parentName:"p"},"\u6240\u6709\u5176\u4ed6\u5355\u5143\u683c")," \u3002"),(0,s.kt)("p",null,"\u53e6\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4 ",(0,s.kt)("inlineCode",{parentName:"p"},"queries")," \uff0c\u5176\u4e2d ",(0,s.kt)("inlineCode",{parentName:"p"},"queries[j] = [rowj, colj]")," \u3002\u5bf9\u4e8e\u7b2c ",(0,s.kt)("inlineCode",{parentName:"p"},"j")," \u4e2a\u67e5\u8be2\uff0c\u5982\u679c\u5355\u5143\u683c ",(0,s.kt)("inlineCode",{parentName:"p"},"[rowj, colj]")," \u662f\u88ab\u7167\u4eae\u7684\uff0c\u5219\u67e5\u8be2\u7ed3\u679c\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," \uff0c\u5426\u5219\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," \u3002\u5728\u7b2c ",(0,s.kt)("inlineCode",{parentName:"p"},"j")," \u6b21\u67e5\u8be2\u4e4b\u540e ","[","\u6309\u7167\u67e5\u8be2\u7684\u987a\u5e8f","]"," \uff0c",(0,s.kt)("strong",{parentName:"p"},"\u5173\u95ed")," \u4f4d\u4e8e\u5355\u5143\u683c ",(0,s.kt)("inlineCode",{parentName:"p"},"grid[rowj][colj]")," \u4e0a\u53ca\u76f8\u90bb 8 \u4e2a\u65b9\u5411\u4e0a\uff08\u4e0e\u5355\u5143\u683c ",(0,s.kt)("inlineCode",{parentName:"p"},"grid[rowi][coli]")," \u5171\u4eab\u89d2\u6216\u8fb9\uff09\u7684\u4efb\u4f55\u706f\u3002"),(0,s.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,s.kt)("inlineCode",{parentName:"p"},"ans")," \u4f5c\u4e3a\u7b54\u6848\uff0c ",(0,s.kt)("inlineCode",{parentName:"p"},"ans[j]")," \u5e94\u7b49\u4e8e\u7b2c ",(0,s.kt)("inlineCode",{parentName:"p"},"j")," \u6b21\u67e5\u8be2\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"queries[j]"),"\xa0\u7684\u7ed3\u679c\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"1")," \u8868\u793a\u7167\u4eae\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"0")," \u8868\u793a\u672a\u7167\u4eae\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("img",{src:t(41012).Z,width:"1442",height:"402"}),(0,s.kt)("br",null))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 5, lamps = ","[","[","0,0","]",",","[","4,4","]","]",", queries = ","[","[","1,1","]",",","[","1,0","]","]",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","1,0","]",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u6700\u521d\u6240\u6709\u706f\u90fd\u662f\u5173\u95ed\u7684\u3002\u5728\u6267\u884c\u67e5\u8be2\u4e4b\u524d\uff0c\u6253\u5f00\u4f4d\u4e8e ","[","0, 0","]"," \u548c ","[","4, 4","]"," \u7684\u706f\u3002\u7b2c 0\xa0\u6b21\u67e5\u8be2\u68c0\u67e5 grid","[","1","]","[","1","]"," \u662f\u5426\u88ab\u7167\u4eae\uff08\u84dd\u8272\u65b9\u6846\uff09\u3002\u8be5\u5355\u5143\u683c\u88ab\u7167\u4eae\uff0c\u6240\u4ee5 ans","[","0","]"," = 1 \u3002\u7136\u540e\uff0c\u5173\u95ed\u7ea2\u8272\u65b9\u6846\u4e2d\u7684\u6240\u6709\u706f\u3002",(0,s.kt)("br",null),"\n",(0,s.kt)("img",{src:t(72218).Z,width:"930",height:"405"}),(0,s.kt)("br",null),"\n\u7b2c 1\xa0\u6b21\u67e5\u8be2\u68c0\u67e5 grid","[","1","]","[","0","]"," \u662f\u5426\u88ab\u7167\u4eae\uff08\u84dd\u8272\u65b9\u6846\uff09\u3002\u8be5\u5355\u5143\u683c\u6ca1\u6709\u88ab\u7167\u4eae\uff0c\u6240\u4ee5 ans","[","1","]"," = 0 \u3002\u7136\u540e\uff0c\u5173\u95ed\u7ea2\u8272\u77e9\u5f62\u4e2d\u7684\u6240\u6709\u706f\u3002",(0,s.kt)("br",null),"\n",(0,s.kt)("img",{src:t(28124).Z,width:"925",height:"405"}),(0,s.kt)("br",null))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 5, lamps = ","[","[","0,0","]",",","[","4,4","]","]",", queries = ","[","[","1,1","]",",","[","1,1","]","]",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","1,1","]",(0,s.kt)("br",null))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," n = 5, lamps = ","[","[","0,0","]",",","[","0,4","]","]",", queries = ","[","[","0,4","]",",","[","0,1","]",",","[","1,4","]","]",(0,s.kt)("br",null),"\n",(0,s.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","1,1,0","]",(0,s.kt)("br",null))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^9")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= lamps.length <= 20000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= queries.length <= 20000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"lamps[i].length == 2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= rowi, coli < n")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"queries[j].length == 2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= rowj, colj < n"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4eca\u5929\u9898\u76ee\u633a\u7b80\u5355\u7684\uff0c\u611f\u89c9\u4f1a\u5199CRUD\u5c31\u80fdAC\uff0c\u53ea\u9700\u8981\u6309\u7167\u9898\u76ee\u610f\u601d\u5b58\u50a8\u3001\u67e5\u8be2\u4ee5\u53ca\u4fee\u6539\u4eae\u706f\u72b6\u6001\u5c31\u884c")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"5b4f2239f899f748dd1fd07a8d78a201.gif",src:t(91297).Z,width:"440",height:"440"})),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u7f51\u683c\u884c\u5217\u7684\u6700\u5927\u503c\u662f ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"9"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^9")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"9")))))))))))),"\uff0c\u8981\u904d\u5386\u7f51\u683c\u8fdb\u884c\u72b6\u6001\u67e5\u6539\u662f\u4e0d\u592a\u53ef\u80fd\u4e86"),(0,s.kt)("li",{parentName:"ul"},"\u672c\u9898\u5173\u952e\u70b9\u662f\u4f7f\u7528\u591a\u4e2a\u54c8\u5e0c\u8868\u5b58\u50a8\u4eae\u706f\u72b6\u6001\uff0c\u53e6\u5916\u8981\u6ce8\u610f\u706f\u7684\u72b6\u6001\u5b9e\u9645\u67093\u79cd\uff1a\u5173\u95ed\u3001\u6253\u5f00\u3001\u88ab\u7167\u4eae",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u54c8\u5e0c\u96c6\u5408\u5b58\u50a8\u6253\u5f00\u7684\u706f\uff0c\u8bb0\u4e3a ",(0,s.kt)("inlineCode",{parentName:"li"},"lightSet"),"\uff0c\u5176\u4e2d\u952e\u4e3a\u884c\u5217\u53f7\u62fc\u63a5\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u5f62\u5982 ",(0,s.kt)("inlineCode",{parentName:"li"},"i-j")),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04\u5b58\u50a8\u88ab\u7167\u4eae\u7684\u884c\u548c\u5217\uff0c\u5206\u522b\u8bb0\u4e3a ",(0,s.kt)("inlineCode",{parentName:"li"},"rowMap")," \u548c ",(0,s.kt)("inlineCode",{parentName:"li"},"colMap"),"\uff0c\u5176\u4e2d\u952e\u4e3a\u884c\u53f7\u6216\u5217\u53f7\uff0c\u503c\u4e3a\u4eae\u706f\u6570\u91cf"),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04\u5b58\u50a8\u88ab\u7167\u4eae\u7684\u4e24\u6761\u5bf9\u89d2\u7ebf ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y-x=d")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," \u548c ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y+x=d")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),"\uff0c\u5206\u522b\u8bb0\u4e3a ",(0,s.kt)("inlineCode",{parentName:"li"},"dglMap1")," \u548c ",(0,s.kt)("inlineCode",{parentName:"li"},"dglMap2"),"\uff0c\u5176\u4e2d\u952e\u4e3a\u884c\u5217\u53f7\u7684\u5dee\u6216\u548c\uff0c\u503c\u4e3a\u4eae\u706f\u6570\u91cf"))),(0,s.kt)("li",{parentName:"ul"},"\u63a5\u7740\u6839\u636e\u9898\u610f\u6a21\u62df\u5373\u53ef",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5c06\u521d\u59cb\u4eae\u706f\u72b6\u6001 ",(0,s.kt)("inlineCode",{parentName:"li"},"lamps")," \u5b58\u5165\u5404\u54c8\u5e0c\u8868\u4e2d "),(0,s.kt)("li",{parentName:"ul"},"\u904d\u5386\u67e5\u8be2\u6570\u7ec4 ",(0,s.kt)("inlineCode",{parentName:"li"},"queries")," \uff0c\u67e5\u8be2\u4eae\u706f\u72b6\u6001\u5e76\u8bb0\u5f55\u5230\u7ed3\u679c\u6570\u7ec4 ",(0,s.kt)("inlineCode",{parentName:"li"},"ans"),"\uff0c\u67e5\u8be2\u65f6\u6ce8\u610f\uff1a\u53ea\u8981\u884c\u5217\u6216\u5bf9\u89d2\u7ebf\u4e0a\u4eae\u706f\u6570\u91cf\u5927\u4e8e0\uff0c\u4eae\u706f\u72b6\u6001\u5c31\u662f ",(0,s.kt)("inlineCode",{parentName:"li"},"1")),(0,s.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u67e5\u8be2\u540e\u5173\u95ed\u4e5d\u5bab\u683c\u5185\u7684\u706f\uff0c\u5173\u706f\u65f6\u6ce8\u610f\uff1a\u6253\u5f00\u7684\u706f\u624d\u9700\u8981\u5173\u95ed\uff0c\u88ab\u7167\u4eae\u7684\u706f\u65e0\u6cd5\u5173\u95ed")))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var gridIllumination = function (n, lamps, queries) {\n    // \u4eae\u706f\u54c8\u5e0c\u96c6\u5408\n    const lightSet = new Set();\n    // \u4eae\u706f\u884c\u3001\u4eae\u706f\u5217\n    const rowMap = new Map(), colMap = new Map();\n    // \u4eae\u706f\u5bf9\u89d2\u7ebf1\uff1ay-x=d\u3001\u4eae\u706f\u5bf9\u89d2\u7ebf2\uff1ay+x=d\n    const dglMap1 = new Map(), dglMap2 = new Map();\n    \n    // \u5c06\u521d\u59cb\u4eae\u706f\u72b6\u6001\u5b58\u5165\u5404\u54c8\u5e0c\u8868\u4e2d\n    for (const [i, j] of lamps) {\n        if (lightSet.has(`${i}-${j}`)) continue;\n        lightSet.add(`${i}-${j}`);\n        rowMap.set(i, (rowMap.get(i) || 0) + 1);\n        colMap.set(j, (colMap.get(j) || 0) + 1);\n        const d1 = j - i, d2 = j + i;\n        dglMap1.set(d1, (dglMap1.get(d1) || 0) + 1);\n        dglMap2.set(d2, (dglMap2.get(d2) || 0) + 1);\n    }\n\n    // \u5173\u706f\u51fd\u6570\uff1a\u5173\u95ed\u4e5d\u5bab\u683c\u5185\u7684\u706f\n    function turnOff(fi, fj) {\n        for (let di = -1; di < 2; di++) {\n            for (let dj = -1; dj < 2; dj++) {\n                const i = fi + di, j = fj + dj;\n                if (!lightSet.has(`${i}-${j}`)) continue;\n                lightSet.delete(`${i}-${j}`);\n                rowMap.set(i, (rowMap.get(i) || 0) - 1);\n                colMap.set(j, (colMap.get(j) || 0) - 1);\n                const d1 = j - i, d2 = j + i;\n                dglMap1.set(d1, (dglMap1.get(d1) || 0) - 1);\n                dglMap2.set(d2, (dglMap2.get(d2) || 0) - 1);\n            }\n        }\n    }\n\n    // \u904d\u5386\u67e5\u8be2\u6570\u7ec4\uff0c\u8ba1\u7b97\u4eae\u706f\u72b6\u6001\u540e\u8fdb\u884c\u5173\u706f\u64cd\u4f5c\n    const ans = queries.map(() => 0);\n    for (let qi = 0; qi < queries.length; qi++) {\n        const [i, j] = queries[qi];\n        const d1 = j - i, d2 = j + i;\n        if (lightSet.has(`${i}-${j}`) || rowMap.get(i) || colMap.get(j) || dglMap1.get(d1) || dglMap2.get(d2)) ans[qi] = 1;\n        turnOff(i, j);\n    }\n\n    return ans;\n};\n")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image.png",src:t(37972).Z,width:"1360",height:"482"})))}k.isMDXComponent=!0},37972:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/1644300881-nPmyJu-image-12ad17ece7d9a6709c1bfbf99fe83881.png"},91297:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/1644303712-pSokFH-5b4f2239f899f748dd1fd07a8d78a201-7fb292bd741bfd22447c5155938031cf.gif"},41012:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/illu_1-d2503516121aecdad1771d9b673779ea.jpg"},72218:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/illu_step1-80213370e9342e19e1e6ce79f14288e5.jpg"},28124:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/illu_step2-adce7a02812fbd391e152df43b2b97c3.jpg"}}]);