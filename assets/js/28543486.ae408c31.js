"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[18233],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=i(t),N=r,h=k["".concat(l,".").concat(N)]||k[N]||c[N]||m;return t?n.createElement(h,s(s({ref:a},o),{},{components:t})):n.createElement(h,s({ref:a},o))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[k]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<m;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},76589:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>k,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var n=t(87462),r=(t(67294),t(3905));const m={authors:["Whilconn"],tags:["\u6570\u7ec4","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/2/11"},s=void 0,p={permalink:"/algorithm/821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb",source:"@site/algorithm/821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb.md",title:"821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb",description:"1\u3001\u9898\u5e72",date:"2022-02-11T00:00:00.000Z",formattedDate:"2022\u5e742\u670811\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:2.765,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/2/11"},prevItem:{title:"\u5251\u6307 Offer II 092.\u7ffb\u8f6c\u5b57\u7b26",permalink:"/algorithm/\u5251\u6307 Offer II 092.\u7ffb\u8f6c\u5b57\u7b26"},nextItem:{title:"1447.\u6700\u7b80\u5206\u6570",permalink:"/algorithm/1447.\u6700\u7b80\u5206\u6570"}},l={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],o={toc:i};function k(e){let{components:a,...m}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,m,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," \u548c\u4e00\u4e2a\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," \uff0c\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," \u4e2d\u51fa\u73b0\u8fc7\u7684\u5b57\u7b26\u3002"),(0,r.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"answer")," \uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"answer.length == s.length")," \u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"answer[i]")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," \u4e2d\u4ece\u4e0b\u6807 ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u5230\u79bb\u5b83 ",(0,r.kt)("strong",{parentName:"p"},"\u6700\u8fd1")," \u7684\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," \u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u8ddd\u79bb")," \u3002"),(0,r.kt)("p",null,"\u4e24\u4e2a\u4e0b\u6807\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"j")," \u4e4b\u95f4\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u8ddd\u79bb")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"abs(i - j)")," \uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"abs")," \u662f\u7edd\u5bf9\u503c\u51fd\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "loveleetcode", c = "e"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","3,2,1,0,1,0,0,1,2,2,1,0","]",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u5b57\u7b26 'e' \u51fa\u73b0\u5728\u4e0b\u6807 3\u30015\u30016 \u548c 11 \u5904\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u8ba1\u6570\uff09\u3002",(0,r.kt)("br",null),"\n\u8ddd\u4e0b\u6807 0 \u6700\u8fd1\u7684 'e' \u51fa\u73b0\u5728\u4e0b\u6807 3 \uff0c\u6240\u4ee5\u8ddd\u79bb\u4e3a abs(0 - 3) = 3 \u3002",(0,r.kt)("br",null),"\n\u8ddd\u4e0b\u6807 1 \u6700\u8fd1\u7684 'e' \u51fa\u73b0\u5728\u4e0b\u6807 3 \uff0c\u6240\u4ee5\u8ddd\u79bb\u4e3a abs(1 - 3) = 2 \u3002",(0,r.kt)("br",null),"\n\u5bf9\u4e8e\u4e0b\u6807 4 \uff0c\u51fa\u73b0\u5728\u4e0b\u6807 3 \u548c\u4e0b\u6807 5 \u5904\u7684 'e' \u90fd\u79bb\u5b83\u6700\u8fd1\uff0c\u4f46\u8ddd\u79bb\u662f\u4e00\u6837\u7684 abs(4 - 3) == abs(4 - 5) = 1 \u3002",(0,r.kt)("br",null),"\n\u8ddd\u4e0b\u6807 8 \u6700\u8fd1\u7684 'e' \u51fa\u73b0\u5728\u4e0b\u6807 6 \uff0c\u6240\u4ee5\u8ddd\u79bb\u4e3a abs(8 - 6) = 2 \u3002",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' s = "aaab", c = "b"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","3,2,1,0","]",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s[i]")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"c")," \u5747\u4e3a\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd"),(0,r.kt)("li",{parentName:"ul"},"\u9898\u76ee\u6570\u636e\u4fdd\u8bc1 ",(0,r.kt)("inlineCode",{parentName:"li"},"c")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u81f3\u5c11\u51fa\u73b0\u4e00\u6b21")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9898\u76ee\u7b80\u5355\uff0c\u4f46\u662f\u5904\u7406\u5404\u79cd\u8fb9\u754c\u60c5\u51b5\u8fd8\u662f\u6709\u70b9\u7e41\u7410\uff0c\u4ee3\u7801\u91cf\u5f88\u96be\u538b\u7f29\uff0c")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"71d74efddaafe529dc032181988da153.gif",src:t(33433).Z,width:"440",height:"440"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"l")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," \u5206\u522b\u8868\u793a\u5de6\u8fb9\u548c\u53f3\u8fb9\u6700\u8fd1\u51fa\u73b0\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," \u7684\u4e0b\u6807\uff0c\u904d\u5386\u533a\u95f4\u8303\u56f4 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[l,r)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u5185\u7684\u5b57\u7b26\uff0c\u8bb0\u5f55\u5b57\u7b26\u79bb\u8fb9\u754c\u6700\u8fd1\u7684\u8ddd\u79bb\u5373\u53ef"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5904\u7406\u597d\u8fb9\u754c\u60c5\u51b5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5de6\u8fb9\u6ca1\u6709\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"c")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"l")," \u53d6\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"-Infinity")),(0,r.kt)("li",{parentName:"ul"},"\u53f3\u8fb9\u6ca1\u6709\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"c")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"r")," \u53d6\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Infinity")),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5c42\u5faa\u73af\u8981\u63a7\u5236\u597d ",(0,r.kt)("inlineCode",{parentName:"li"},"i")," \u7684\u8303\u56f4\uff0c\u4e0d\u80fd\u8d8a\u51fa ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[0,s.length)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u8fd9\u4e2a\u8303\u56f4")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var shortestToChar = function (s, c) {\n    const res = [];\n    for (let l = -Infinity, r = s.indexOf(c); l < s.length;) {\n        for (let i = Math.max(0, l); i < Math.min(s.length, r); i++) {\n            res.push(Math.min(r - i, i - l));\n        }\n        l = r, r = s.indexOf(c, r + 1), r = r < 0 ? Infinity : r;\n    }\n    return res;\n};\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:t(74721).Z,width:"1324",height:"488"})))}k.isMDXComponent=!0},74721:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1644571998-TDyHSL-image-6dd93fd28d7dbfabbeb15450afd73251.png"},33433:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1644573211-rbyvqE-71d74efddaafe529dc032181988da153-070fbee53c7b1ee6d40f2634b90dd733.gif"}}]);