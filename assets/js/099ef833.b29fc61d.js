"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[47181],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,d=m["".concat(p,".").concat(s)]||m[s]||k[s]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},29722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(15882),a=(n(59496),n(49613));const l={authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32"],date:"2021/12/21"},o=void 0,i={permalink:"/algorithm/1154.\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929",source:"@site/algorithm/1154.\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929.md",title:"1154.\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929",description:"1\u3001\u9898\u5e72",date:"2021-12-21T00:00:00.000Z",formattedDate:"2021\u5e7412\u670821\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:1.4,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32"],date:"2021/12/21"},prevItem:{title:"686.\u91cd\u590d\u53e0\u52a0\u5b57\u7b26\u4e32\u5339\u914d",permalink:"/algorithm/686.\u91cd\u590d\u53e0\u52a0\u5b57\u7b26\u4e32\u5339\u914d"},nextItem:{title:"\u5251\u6307 Offer II 044.\u4e8c\u53c9\u6811\u6bcf\u5c42\u7684\u6700\u5927\u503c",permalink:"/algorithm/\u5251\u6307 Offer II 044.\u4e8c\u53c9\u6811\u6bcf\u5c42\u7684\u6700\u5927\u503c"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u89e3\u9898\u601d\u8def",id:"\u89e3\u9898\u601d\u8def",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"date")," \uff0c\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," \u683c\u5f0f\u8868\u793a\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/%E5%85%AC%E5%85%83/17855"},"\u73b0\u884c\u516c\u5143\u7eaa\u5e74\u6cd5")," \u65e5\u671f\u3002\u8fd4\u56de\u8be5\u65e5\u671f\u662f\u5f53\u5e74\u7684\u7b2c\u51e0\u5929\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' date = "2019-01-09"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 9",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7ed9\u5b9a\u65e5\u671f\u662f2019\u5e74\u7684\u7b2c\u4e5d\u5929\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' date = "2019-02-10"',(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 41",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date.length == 10")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date[4] == date[7] == '-'"),"\uff0c\u5176\u4ed6\u7684\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"date[i]"),"\xa0\u90fd\u662f\u6570\u5b57"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date")," \u8868\u793a\u7684\u8303\u56f4\u4ece 1900 \u5e74 1 \u6708 1 \u65e5\u81f3 2019 \u5e74 12 \u6708 31 \u65e5")),(0,a.kt)("h3",{id:"\u89e3\u9898\u601d\u8def"},"\u89e3\u9898\u601d\u8def"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5f53\u524d\u65f6\u95f4\u4e0e\u5f00\u5e74\u65f6\u95f4\u7684\u5dee\u503c\uff0c\u5f97\u5230\u6beb\u79d2\u6570\u5dee\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u6beb\u79d2\u6570\u5dee\u503c\u518d\u9664\u4ee51\u5929\u7684\u6beb\u79d2\u603b\u6570\uff0886400000ms\uff09\uff0c\u5f97\u5230\u5929\u6570\u5dee\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5929\u6570\u5dee\u503c\u518d\u52a01\u5373\u53ef")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f8b\uff1a\u8ba1\u7b97",(0,a.kt)("inlineCode",{parentName:"p"},"date=2019-01-09"),"\u662f\u7b2c\u51e0\u5929"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97",(0,a.kt)("inlineCode",{parentName:"li"},"2019-01-09"),"\u8ddf\u5f00\u5e74\u65f6\u95f4",(0,a.kt)("inlineCode",{parentName:"li"},"2019-01-01"),"\u7684\u5929\u6570\u5dee\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5373",(0,a.kt)("inlineCode",{parentName:"li"},"(new Date('2019-01-09') - new Date('2019-01-01')) / 86400000 + 1")),(0,a.kt)("li",{parentName:"ul"},"\u7ed3\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"9")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u89e3\u6cd5\u53ea\u662f\u53d6\u5de7\uff0c\u5b9e\u9645\u4f9d\u8d56\u4e8eDate API\uff0c\u5e95\u5c42\u5b9e\u73b0\u8fd8\u662f\u8981\u8003\u8651\u95f0\u5e74\u7b49\u60c5\u51b5")),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var dayOfYear = function (date) {\n    return (new Date(date) - new Date(date.slice(0, 5) + '01-01')) / 86400000 + 1;\n};\n")))}m.isMDXComponent=!0}}]);