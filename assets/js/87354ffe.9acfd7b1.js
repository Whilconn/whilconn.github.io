"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[3151],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),i=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=i(t.components);return l.createElement(c.Provider,{value:e},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},g=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=i(n),g=r,m=p["".concat(c,".").concat(g)]||p[g]||k[g]||o;return n?l.createElement(m,a(a({ref:e},s),{},{components:n})):l.createElement(m,a({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=g;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u[p]="string"==typeof t?t:r,a[1]=u;for(var i=2;i<o;i++)a[i]=n[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},132:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var l=n(87462),r=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32"],date:new Date("2022-12-26T00:00:00.000Z")},a=void 0,u={permalink:"/algorithm/2022/12/26/1759.\u7edf\u8ba1\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee",source:"@site/algorithm/2022/12/26/1759.\u7edf\u8ba1\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee.md",title:"1759.\u7edf\u8ba1\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee",description:"1\u3001\u9898\u5e72",date:"2022-12-26T00:00:00.000Z",formattedDate:"2022\u5e7412\u670826\u65e5",tags:[{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:1.64,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u5b66","\u5b57\u7b26\u4e32"],date:"2022-12-26T00:00:00.000Z"},prevItem:{title:"1750.\u5220\u9664\u5b57\u7b26\u4e32\u4e24\u7aef\u76f8\u540c\u5b57\u7b26\u540e\u7684\u6700\u77ed\u957f\u5ea6",permalink:"/algorithm/2022/12/28/1750.\u5220\u9664\u5b57\u7b26\u4e32\u4e24\u7aef\u76f8\u540c\u5b57\u7b26\u540e\u7684\u6700\u77ed\u957f\u5ea6"},nextItem:{title:"1759.\u7edf\u8ba1\u540c\u8d28\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/algorithm/2022/12/26/1759.\u7edf\u8ba1\u540c\u8d28\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee"}},c={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],s={toc:i};function p(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,l.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,r.kt)("code",null,"s")," \uff0c\u8fd4\u56de",(0,r.kt)("em",null," "),(0,r.kt)("code",null,"s"),(0,r.kt)("em",null," "),"\u4e2d ",(0,r.kt)("strong",null,"\u540c\u6784\u5b50\u5b57\u7b26\u4e32")," \u7684\u6570\u76ee\u3002\u7531\u4e8e\u7b54\u6848\u53ef\u80fd\u5f88\u5927\uff0c\u53ea\u9700\u8fd4\u56de\u5bf9 ",(0,r.kt)("code",null,"10",(0,r.kt)("sup",null,"9")," + 7")," ",(0,r.kt)("strong",null,"\u53d6\u4f59 "),"\u540e\u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u540c\u6784\u5b57\u7b26\u4e32")," \u7684\u5b9a\u4e49\u4e3a\uff1a\u5982\u679c\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u90fd\u76f8\u540c\uff0c\u90a3\u4e48\u8be5\u5b57\u7b26\u4e32\u5c31\u662f\u540c\u6784\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u5b50\u5b57\u7b26\u4e32")," \u662f\u5b57\u7b26\u4e32\u4e2d\u7684\u4e00\u4e2a\u8fde\u7eed\u5b57\u7b26\u5e8f\u5217\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "abbcccaa"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"13",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u5982\u4e0b\u6240\u5217\uff1a",(0,r.kt)("br",null),'"a"   \u51fa\u73b0 3 \u6b21\u3002',(0,r.kt)("br",null),'"aa"  \u51fa\u73b0 1 \u6b21\u3002',(0,r.kt)("br",null),'"b"   \u51fa\u73b0 2 \u6b21\u3002',(0,r.kt)("br",null),'"bb"  \u51fa\u73b0 1 \u6b21\u3002',(0,r.kt)("br",null),'"c"   \u51fa\u73b0 3 \u6b21\u3002',(0,r.kt)("br",null),'"cc"  \u51fa\u73b0 2 \u6b21\u3002',(0,r.kt)("br",null),'"ccc" \u51fa\u73b0 1 \u6b21\u3002',(0,r.kt)("br",null),"3 + 1 + 2 + 1 + 3 + 2 + 1 = 13"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "xy"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"2",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),'\u540c\u6784\u5b50\u5b57\u7b26\u4e32\u662f "x" \u548c "y" \u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "zzzzz"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"15",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= s.length <= 10",(0,r.kt)("sup",null,"5"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"s")," \u7531\u5c0f\u5199\u5b57\u7b26\u4e32\u7ec4\u6210")),(0,r.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,r.kt)("p",null,"\u5148\u63d0\u53d6\u8fde\u7eed\u4e14\u91cd\u590d\u7684\u5b57\u6bcd\u7ec4\u6210\u7684\u5355\u8bcd\uff0c\u518d\u7d2f\u8ba1\u6bcf\u4e2a\u5355\u8bcd\u957f\u5ea6\u7684\u7b49\u5dee\u6570\u5217\u548c"),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-TypeScript"},"function countHomogenous(s: string): number {\n    return s.match(/([a-z])\\1*/g).reduce((a, c) => (a + c.length * (c.length + 1) / 2) % (1e9 + 7), 0);\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(38077).Z,width:"1510",height:"406"})))}p.isMDXComponent=!0},38077:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/3202cece88c7b0394aace01c7f8dd51c-c89af1bcf09635f81a939c53ed9c0b47.png"}}]);