"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[76449],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(15882),a=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/5/13"},o=void 0,i={permalink:"/algorithm/\u9762\u8bd5\u9898 01.05.\u4e00\u6b21\u7f16\u8f91",source:"@site/algorithm/\u9762\u8bd5\u9898 01.05.\u4e00\u6b21\u7f16\u8f91.md",title:"\u9762\u8bd5\u9898 01.05.\u4e00\u6b21\u7f16\u8f91",description:"1\u3001\u9898\u5e72",date:"2022-05-13T00:00:00.000Z",formattedDate:"2022\u5e745\u670813\u65e5",tags:[{label:"\u53cc\u6307\u9488",permalink:"/algorithm/tags/\u53cc\u6307\u9488"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:1.515,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u53cc\u6307\u9488","\u5b57\u7b26\u4e32"],date:"2022/5/13"},prevItem:{title:"907.\u5b50\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u4e4b\u548c",permalink:"/algorithm/907.\u5b50\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u4e4b\u548c"},nextItem:{title:"427.\u5efa\u7acb\u56db\u53c9\u6811",permalink:"/algorithm/427.\u5efa\u7acb\u56db\u53c9\u6811"}},p={authorsImageUrls:[void 0]},s=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u6709\u4e09\u79cd\u7f16\u8f91\u64cd\u4f5c:\u63d2\u5165\u4e00\u4e2a\u82f1\u6587\u5b57\u7b26\u3001\u5220\u9664\u4e00\u4e2a\u82f1\u6587\u5b57\u7b26\u6216\u8005\u66ff\u6362\u4e00\u4e2a\u82f1\u6587\u5b57\u7b26\u3002 \u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u5224\u5b9a\u5b83\u4eec\u662f\u5426\u53ea\u9700\u8981\u4e00\u6b21(\u6216\u8005\u96f6\u6b21)\u7f16\u8f91\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\xa01:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),'\nfirst = "pale"\nsecond = "ple"\n',(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:")," True"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\xa02:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),'\nfirst = "pales"\nsecond = "pal"\n',(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:")," False"),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u987a\u5e8f\u904d\u5386\u7edf\u8ba1\u5de6\u534a\u8fb9\u76f8\u540c\u5b57\u7b26\u603b\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"sl"),"\uff0c\u5012\u5e8f\u904d\u5386\u7edf\u8ba1\u53f3\u534a\u8fb9\u76f8\u540c\u5b57\u7b26\u603b\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"sr"),"\uff0c\u4e24\u5b57\u7b26\u4e32\u6700\u5927\u957f\u5ea6\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"sl + sr")," \u4e4b\u5dee\u4e0d\u5927\u4e8e $1$ \u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e24\u4e2a\u5b57\u7b26\u4e32\u957f\u5ea6\u5dee\u503c\u5927\u4e8e $1$ \u5219\u76f4\u63a5\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u8fd9\u4e00\u524d\u7f6e\u5224\u65ad\u53ef\u6709\u53ef\u65e0")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var oneEditAway = function (first, second) {\n    if (Math.abs(first.length - second.length) > 1) return false;\n\n    let sl = 0, sr = 0, m = first.length, n = second.length;\n    for (let i = 0; i < Math.min(m, n) && first[i] === second[i]; i++) sl++;\n    for (let i = m - 1, j = n - 1; sl - 1 < Math.min(i, j) && first[i] === second[j]; i--, j--) sr++;\n\n    return Math.max(m, n) - sl - sr <= 1;\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 64 ms"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 42.7 MB")))}u.isMDXComponent=!0}}]);