"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[81231],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},o="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,s=t.originalType,p=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),o=m(a),c=l,N=o["".concat(p,".").concat(c)]||o[c]||u[c]||s;return a?n.createElement(N,r(r({ref:e},k),{},{components:a})):n.createElement(N,r({ref:e},k))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var s=a.length,r=new Array(s);r[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[o]="string"==typeof t?t:l,r[1]=i;for(var m=2;m<s;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},98014:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const s={authors:["Whilconn"],tags:["\u6811","\u56fe"],date:"2022/2/16"},r=void 0,i={permalink:"/algorithm/2022/02/16/1719.\u91cd\u6784\u4e00\u68f5\u6811\u7684\u65b9\u6848\u6570",source:"@site/algorithm/2022/02/16/1719.\u91cd\u6784\u4e00\u68f5\u6811\u7684\u65b9\u6848\u6570.md",title:"1719.\u91cd\u6784\u4e00\u68f5\u6811\u7684\u65b9\u6848\u6570",description:"1\u3001\u9898\u5e72",date:"2022-02-16T00:00:00.000Z",formattedDate:"2022\u5e742\u670816\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u56fe",permalink:"/algorithm/tags/\u56fe"}],readingTime:4.375,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u56fe"],date:"2022/2/16"},prevItem:{title:"\u5251\u6307 Offer II 096.\u5b57\u7b26\u4e32\u4ea4\u7ec7",permalink:"/algorithm/2022/02/18/\u5251\u6307 Offer II 096.\u5b57\u7b26\u4e32\u4ea4\u7ec7"},nextItem:{title:"1380.\u77e9\u9635\u4e2d\u7684\u5e78\u8fd0\u6570",permalink:"/algorithm/2022/02/15/1380.\u77e9\u9635\u4e2d\u7684\u5e78\u8fd0\u6570"}},p={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],k={toc:m};function o(t){let{components:e,...s}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4\xa0",(0,l.kt)("code",null,"pairs")," \uff0c\u5176\u4e2d\xa0",(0,l.kt)("code",null,"pairs[i] = [x",(0,l.kt)("sub",null,"i"),", y",(0,l.kt)("sub",null,"i"),"]"),"\xa0\uff0c\u5e76\u4e14\u6ee1\u8db3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"pairs"),"\xa0\u4e2d\u6ca1\u6709\u91cd\u590d\u5143\u7d20"),(0,l.kt)("li",null,(0,l.kt)("code",null,"x",(0,l.kt)("sub",null,"i")," < y",(0,l.kt)("sub",null,"i")))),(0,l.kt)("p",null,"\u4ee4\xa0",(0,l.kt)("code",null,"ways"),"\xa0\u4e3a\u6ee1\u8db3\u4e0b\u9762\u6761\u4ef6\u7684\u6709\u6839\u6811\u7684\u65b9\u6848\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u6811\u6240\u5305\u542b\u7684\u6240\u6709\u8282\u70b9\u503c\u90fd\u5728 ",(0,l.kt)("code",null,"pairs"),"\xa0\u4e2d\u3002"),(0,l.kt)("li",null,"\u4e00\u4e2a\u6570\u5bf9\xa0",(0,l.kt)("code",null,"[x",(0,l.kt)("sub",null,"i"),", y",(0,l.kt)("sub",null,"i"),"]")," \u51fa\u73b0\u5728\xa0",(0,l.kt)("code",null,"pairs"),"\xa0\u4e2d\xa0",(0,l.kt)("strong",null,"\u5f53\u4e14\u4ec5\u5f53"),(0,l.kt)("strong",null,"\xa0"),(0,l.kt)("code",null,"x",(0,l.kt)("sub",null,"i")),"\xa0\u662f\xa0",(0,l.kt)("code",null,"y",(0,l.kt)("sub",null,"i")),"\xa0\u7684\u7956\u5148\u6216\u8005\xa0",(0,l.kt)("code",null,"y",(0,l.kt)("sub",null,"i")),"\xa0\u662f\xa0",(0,l.kt)("code",null,"x",(0,l.kt)("sub",null,"i")),(0,l.kt)("sub",null,"\xa0"),"\u7684\u7956\u5148\u3002"),(0,l.kt)("li",null,(0,l.kt)("strong",null,"\u6ce8\u610f\uff1a"),"\u6784\u9020\u51fa\u6765\u7684\u6811\u4e0d\u4e00\u5b9a\u662f\u4e8c\u53c9\u6811\u3002")),(0,l.kt)("p",null,"\u4e24\u68f5\u6811\u88ab\u89c6\u4e3a\u4e0d\u540c\u7684\u65b9\u6848\u5f53\u5b58\u5728\u81f3\u5c11\u4e00\u4e2a\u8282\u70b9\u5728\u4e24\u68f5\u6811\u4e2d\u6709\u4e0d\u540c\u7684\u7236\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u8bf7\u4f60\u8fd4\u56de\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\u5982\u679c\xa0",(0,l.kt)("code",null,"ways == 0"),"\xa0\uff0c\u8fd4\u56de\xa0",(0,l.kt)("code",null,"0"),"\xa0\u3002"),(0,l.kt)("li",null,"\u5982\u679c\xa0",(0,l.kt)("code",null,"ways == 1"),"\xa0\uff0c\u8fd4\u56de ",(0,l.kt)("code",null,"1"),"\xa0\u3002"),(0,l.kt)("li",null,"\u5982\u679c\xa0",(0,l.kt)("code",null,"ways > 1"),"\xa0\uff0c\u8fd4\u56de\xa0",(0,l.kt)("code",null,"2"),"\xa0\u3002")),(0,l.kt)("p",null,"\u4e00\u68f5 ",(0,l.kt)("strong",null,"\u6709\u6839\u6811"),"\xa0\u6307\u7684\u662f\u53ea\u6709\u4e00\u4e2a\u6839\u8282\u70b9\u7684\u6811\uff0c\u6240\u6709\u8fb9\u90fd\u662f\u4ece\u6839\u5f80\u5916\u7684\u65b9\u5411\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u79f0\u4ece\u6839\u5230\u4e00\u4e2a\u8282\u70b9\u8def\u5f84\u4e0a\u7684\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\uff08\u9664\u53bb\u8282\u70b9\u672c\u8eab\uff09\u90fd\u662f\u8be5\u8282\u70b9\u7684 ",(0,l.kt)("strong",null,"\u7956\u5148"),"\xa0\u3002\u6839\u8282\u70b9\u6ca1\u6709\u7956\u5148\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("img",{src:"../../../img/trees2.png"}),(0,l.kt)("pre",null,(0,l.kt)("b",null,"\u8f93\u5165\uff1a"),"pairs = [[1,2],[2,3]]",(0,l.kt)("br",null),(0,l.kt)("b",null,"\u8f93\u51fa\uff1a"),"1",(0,l.kt)("br",null),(0,l.kt)("b",null,"\u89e3\u91ca\uff1a"),"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u7b26\u5408\u89c4\u5b9a\u7684\u6709\u6839\u6811\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("img",{alt:"",src:"../../../img/tree.png"}),(0,l.kt)("pre",null,(0,l.kt)("b",null,"\u8f93\u5165\uff1a"),"pairs = [[1,2],[2,3],[1,3]]",(0,l.kt)("br",null),(0,l.kt)("b",null,"\u8f93\u51fa\uff1a"),"2",(0,l.kt)("br",null),(0,l.kt)("b",null,"\u89e3\u91ca\uff1a"),"\u6709\u591a\u4e2a\u7b26\u5408\u89c4\u5b9a\u7684\u6709\u6839\u6811\uff0c\u5176\u4e2d\u4e09\u4e2a\u5982\u4e0a\u56fe\u6240\u793a\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("b",null,"\u8f93\u5165\uff1a"),"pairs = [[1,2],[2,3],[2,4],[1,5]]",(0,l.kt)("br",null),(0,l.kt)("b",null,"\u8f93\u51fa\uff1a"),"0",(0,l.kt)("br",null),(0,l.kt)("b",null,"\u89e3\u91ca\uff1a"),"\u6ca1\u6709\u7b26\u5408\u89c4\u5b9a\u7684\u6709\u6839\u6811\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= pairs.length <= 10",(0,l.kt)("sup",null,"5"))),(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= x",(0,l.kt)("sub",null,"i "),"< y",(0,l.kt)("sub",null,"i")," <= 500")),(0,l.kt)("li",null,(0,l.kt)("code",null,"pairs"),"\xa0\u4e2d\u7684\u5143\u7d20\u4e92\u4e0d\u76f8\u540c\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c3d\u529b\u4e86\uff0c\u78e8\u4e86\u5927\u534a\u5929\uff0c\u53ea\u60f3\u51fa\u8fd9\u4e48\u4e2a\u65b9\u6cd5\u3002\u601d\u8def\u8fd8\u7b97\u6e05\u6670\uff0c\u4f46\u65e0\u6cd5\u8bc1\u660e\u89e3\u6cd5\u7684\u6b63\u786e\u6027\uff0c\u80fdAC\u7eaf\u7cb9\u9760\u8fd0\u6c14\u3002\u3002\u3002")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5148\u6392\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"ways = 0")," \u4e0d\u5b58\u5728\u6839\u8282\u70b9\u7684\u60c5\u51b5"),(0,l.kt)("li",{parentName:"ul"},"\u518d\u6392\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"ways = 0")," \u5b58\u5728\u4e92\u4e3a\u7956\u5148\u8282\u70b9\u7684\u60c5\u51b5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4efb\u610f\u4e24\u4e2a\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"b")," \u4e0d\u5b58\u5728\u7956\u5b59\u5173\u7cfb\uff0c\u4f46\u4e8c\u8005\u7956\u5b59\u94fe\u4e0a\u6709\u5171\u540c\u7684\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"c"),"\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"li"},"c")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"b")," \u7684\u5171\u540c\u7956\u5148"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u540e\u7eed\u80fd\u63a8\u51fa ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"b")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"c")," \u7684\u7956\u5148\uff0c\u5219\u8bf4\u660e\u5b58\u5728\u77db\u76fe\u65e0\u6cd5\u6784\u5efa\u6811"))),(0,l.kt)("li",{parentName:"ul"},"\u518d\u6392\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"ways = 2")," \u7684\u60c5\u51b5\uff1a\u8282\u70b9\u5b58\u5728\u7956\u5b59\u5173\u7cfb\uff0c\u4e14\u7956\u5b59\u94fe\u957f\u5ea6\u76f8\u540c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8865\u5145\uff1a\u4efb\u610f\u7236\u8282\u70b9\u53ea\u67091\u4e2a\u5b50\u8282\u70b9\u90fd\u4f1a\u9020\u6210\u8fd9\u79cd\u60c5\u51b5\uff0c\u6b64\u65f6\u7236\u5b50\u8282\u70b9\u53ef\u4ee5\u4e92\u6362\u4f4d\u7f6e\u6784\u6210\u591a\u68f5\u6811"))),(0,l.kt)("li",{parentName:"ul"},"\u5269\u4f59\u60c5\u51b5 ",(0,l.kt)("inlineCode",{parentName:"li"},"ways = 1"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8865\u5145\uff1a\u6240\u6709\u7236\u8282\u70b9\u90fd\u67092\u4e2a\u4ee5\u4e0a\u5b50\u8282\u70b9\u624d\u80fd\u4fdd\u8bc1\u552f\u4e00")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var checkWays = function (pairs) {\n    const linkDict = [];\n    const add = (i, j) => {\n        if (!linkDict[i]) linkDict[i] = new Set();\n        linkDict[i].add(j);\n    };\n    for (const [i, j] of pairs) add(i, j), add(j, i);\n    const keys = linkDict.map((v, i) => i).filter((v) => v > -1);\n    keys.sort((a, b) => linkDict[b].size - linkDict[a].size);\n\n    // \u6392\u9664 ways = 0: \u4e0d\u5b58\u5728\u6839\u8282\u70b9\n    if (linkDict[keys[0]].size !== keys.length - 1) return 0;\n\n    // \u6392\u9664 ways = 0: \u5b58\u5728\u4e92\u4e3a\u7956\u5148\u7684\u8282\u70b9\n    const ancestorDict = keys.reduce((a, c) => (a[c] = new Set(), a), []);\n    for (let i = 1; i < keys.length; i++) {\n        for (let j = i + 1; j < keys.length; j++) {\n            if (linkDict[keys[i]].has(keys[j])) continue;\n            for (const li of linkDict[keys[i]]) {\n                if (li === keys[0] || !linkDict[keys[j]].has(li)) continue;\n                if (ancestorDict[keys[i]].has(li) || ancestorDict[keys[j]].has(li)) return 0;\n                ancestorDict[li].add(keys[i]), ancestorDict[li].add(keys[j]);\n            }\n        }\n    }\n\n    // \u6392\u9664 ways = 2: \u8282\u70b9\u5b58\u5728\u7956\u5b59\u5173\u7cfb\uff0c\u4e14\u7956\u5b59\u94fe\u957f\u5ea6\u76f8\u540c\n    for (const [i, j] of pairs) if (linkDict[i].size === linkDict[j].size) return 2;\n\n    return 1;\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("msup",{parentName:"mrow"},(0,l.kt)("mi",{parentName:"msup"},"n"),(0,l.kt)("mn",{parentName:"msup"},"3")),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^3)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"msupsub"},(0,l.kt)("span",{parentName:"span",className:"vlist-t"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,l.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c\u5176\u4e2d ",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"n")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u4e3a\u8282\u70b9\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("msup",{parentName:"mrow"},(0,l.kt)("mi",{parentName:"msup"},"n"),(0,l.kt)("mn",{parentName:"msup"},"2")),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"msupsub"},(0,l.kt)("span",{parentName:"span",className:"vlist-t"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,l.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:a(23927).Z,width:"1328",height:"488"})))}o.isMDXComponent=!0},23927:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1644996953-nDxqHE-image-f70efa4c3308661876030d08f83c2f1e.png"}}]);