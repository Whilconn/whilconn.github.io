"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[5731],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),c=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(u.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(n),m=r,d=s["".concat(u,".").concat(m)]||s[m]||k[m]||a;return n?l.createElement(d,o(o({ref:e},p),{},{components:n})):l.createElement(d,o({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42656:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const a={authors:["Whilconn"],tags:["\u6808","\u6570\u7ec4","\u6a21\u62df"],date:new Date("2021-12-18T00:00:00.000Z")},o=void 0,i={permalink:"/algorithm/2021/12/18/\u5251\u6307 Offer II 037.\u5c0f\u884c\u661f\u78b0\u649e",source:"@site/algorithm/2021/12/18/\u5251\u6307 Offer II 037.\u5c0f\u884c\u661f\u78b0\u649e.md",title:"\u5251\u6307 Offer II 037.\u5c0f\u884c\u661f\u78b0\u649e",description:"1\u3001\u9898\u5e72",date:"2021-12-18T00:00:00.000Z",formattedDate:"2021\u5e7412\u670818\u65e5",tags:[{label:"\u6808",permalink:"/algorithm/tags/\u6808"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6a21\u62df",permalink:"/algorithm/tags/\u6a21\u62df"}],readingTime:3.44,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6808","\u6570\u7ec4","\u6a21\u62df"],date:"2021-12-18T00:00:00.000Z"},prevItem:{title:"\u5251\u6307 Offer II 036.\u540e\u7f00\u8868\u8fbe\u5f0f",permalink:"/algorithm/2021/12/18/\u5251\u6307 Offer II 036.\u540e\u7f00\u8868\u8fbe\u5f0f"},nextItem:{title:"539.\u6700\u5c0f\u65f6\u95f4\u5dee",permalink:"/algorithm/2021/12/17/539.\u6700\u5c0f\u65f6\u95f4\u5dee"}},u={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],p={toc:c};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ",(0,r.kt)("code",null,"asteroids"),"\uff0c\u8868\u793a\u5728\u540c\u4e00\u884c\u7684\u5c0f\u884c\u661f\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\uff0c\u5176\u7edd\u5bf9\u503c\u8868\u793a\u5c0f\u884c\u661f\u7684\u5927\u5c0f\uff0c\u6b63\u8d1f\u8868\u793a\u5c0f\u884c\u661f\u7684\u79fb\u52a8\u65b9\u5411\uff08\u6b63\u8868\u793a\u5411\u53f3\u79fb\u52a8\uff0c\u8d1f\u8868\u793a\u5411\u5de6\u79fb\u52a8\uff09\u3002\u6bcf\u4e00\u9897\u5c0f\u884c\u661f\u4ee5\u76f8\u540c\u7684\u901f\u5ea6\u79fb\u52a8\u3002"),(0,r.kt)("p",null,"\u627e\u51fa\u78b0\u649e\u540e\u5269\u4e0b\u7684\u6240\u6709\u5c0f\u884c\u661f\u3002\u78b0\u649e\u89c4\u5219\uff1a\u4e24\u4e2a\u884c\u661f\u76f8\u4e92\u78b0\u649e\uff0c\u8f83\u5c0f\u7684\u884c\u661f\u4f1a\u7206\u70b8\u3002\u5982\u679c\u4e24\u9897\u884c\u661f\u5927\u5c0f\u76f8\u540c\uff0c\u5219\u4e24\u9897\u884c\u661f\u90fd\u4f1a\u7206\u70b8\u3002\u4e24\u9897\u79fb\u52a8\u65b9\u5411\u76f8\u540c\u7684\u884c\u661f\uff0c\u6c38\u8fdc\u4e0d\u4f1a\u53d1\u751f\u78b0\u649e\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"asteroids = [5,10,-5]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[5,10]",(0,r.kt)("br",null),(0,r.kt)("b",null,"\u89e3\u91ca\uff1a"),"10 \u548c -5 \u78b0\u649e\u540e\u53ea\u5269\u4e0b 10 \u3002 5 \u548c 10 \u6c38\u8fdc\u4e0d\u4f1a\u53d1\u751f\u78b0\u649e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"asteroids = [8,-8]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[]",(0,r.kt)("br",null),(0,r.kt)("b",null,"\u89e3\u91ca\uff1a"),"8 \u548c -8 \u78b0\u649e\u540e\uff0c\u4e24\u8005\u90fd\u53d1\u751f\u7206\u70b8\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"asteroids = [10,2,-5]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[10]",(0,r.kt)("br",null),(0,r.kt)("b",null,"\u89e3\u91ca\uff1a"),"2 \u548c -5 \u53d1\u751f\u78b0\u649e\u540e\u5269\u4e0b -5 \u300210 \u548c -5 \u53d1\u751f\u78b0\u649e\u540e\u5269\u4e0b 10 \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 4\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"asteroids = [-2,-1,1,2]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[-2,-1,1,2]",(0,r.kt)("br",null),(0,r.kt)("b",null,"\u89e3\u91ca"),(0,r.kt)("strong",null,"\uff1a"),"-2 \u548c -1 \u5411\u5de6\u79fb\u52a8\uff0c\u800c 1 \u548c 2 \u5411\u53f3\u79fb\u52a8\u3002 \u7531\u4e8e\u79fb\u52a8\u65b9\u5411\u76f8\u540c\u7684\u884c\u661f\u4e0d\u4f1a\u53d1\u751f\u78b0\u649e\uff0c\u6240\u4ee5\u6700\u7ec8\u6ca1\u6709\u884c\u661f\u53d1\u751f\u78b0\u649e\u3002 "),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"2 <= asteroids.length\xa0<= 10",(0,r.kt)("sup",null,"4"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"-1000 <= asteroids[i] <= 1000")),(0,r.kt)("li",null,(0,r.kt)("code",null,"asteroids[i] != 0"))),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("meta",{charset:"UTF-8"}),"\u6ce8\u610f\uff1a\u672c\u9898\u4e0e\u4e3b\u7ad9 735\xa0\u9898\u76f8\u540c\uff1a\xa0",(0,r.kt)("a",{href:"https://leetcode-cn.com/problems/asteroid-collision/"},"https://leetcode-cn.com/problems/asteroid-collision/")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u603b\u4f53\u601d\u8def")," \uff1a\u904d\u5386",(0,r.kt)("inlineCode",{parentName:"p"},"asteroids"),"\u4e2d\u7684\u6240\u6709\u884c\u661f\uff0c\u5224\u65ad\u6808\u9876\u884c\u661f\u4e0e\u5f53\u524d\u904d\u5386\u5230\u7684\u884c\u661f\u662f\u5426\u53ef\u4ee5\u78b0\u649e\uff0c\u5e76\u6309\u78b0\u649e\u89c4\u5219\u52a0\u4ee5\u5904\u7406\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5927\u4f53\u6b65\u9aa4")," \uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6808\u7528\u4e8e\u5b58\u50a8\u884c\u661f"),(0,r.kt)("li",{parentName:"ul"},"\u904d\u5386",(0,r.kt)("inlineCode",{parentName:"li"},"asteroids"),"\u4e2d\u7684\u6240\u6709\u884c\u661f\uff0c\u68c0\u6d4b\u6808\u9876\u884c\u661f\u4e0e\u5f53\u524d\u884c\u661f",(0,r.kt)("inlineCode",{parentName:"li"},"asteroids[i]"),"\u662f\u5426\u53ef\u4ee5\u78b0\u649e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6808\u4e3a\u7a7a\u6216\u8005\u6808\u9876\u884c\u661f\u4e0e\u5f53\u524d\u884c\u661f\u65e0\u6cd5\u78b0\u649e\uff0c\u5f53\u524d\u884c\u661f\u5165\u6808"),(0,r.kt)("li",{parentName:"ul"},"\u6808\u4e0d\u4e3a\u7a7a\uff0c\u6808\u9876\u884c\u661f\u4e0e\u5f53\u524d\u884c\u661f\u53ef\u4ee5\u78b0\u649e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6808\u9876\u884c\u661f\u6bd4\u5f53\u524d\u884c\u661f\u66f4\u5c0f\u5219\u5faa\u73af\u51fa\u6808\uff0c\u76f4\u5230\u6808\u9876\u884c\u661f\u4e0d\u5c0f\u4e8e\u5f53\u524d\u884c\u661f"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6808\u4e3a\u7a7a\u6216\u8005\u6808\u9876\u884c\u661f\u4e0e\u5f53\u524d\u884c\u661f\u65e0\u6cd5\u78b0\u649e\uff0c\u5f53\u524d\u884c\u661f\u5165\u6808"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6808\u9876\u884c\u661f\u4e0e\u5f53\u524d\u884c\u661f\u5927\u5c0f\u76f8\u540c\uff0c\u6808\u9876\u884c\u661f\u51fa\u6808"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u60c5\u51b5\u4e0d\u505a\u5904\u7406\uff0c\u8fdb\u5165\u4e0b\u4e00\u8f6e\u904d\u5386"))))),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u6808\u5185\u6240\u6709\u884c\u661f")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u9898\u7684\u89e3\u9898\u601d\u8def\u4e0d\u96be\uff0c\u96be\u7684\u662f\u8fb9\u754c\u60c5\u51b5\u7684\u5904\u7406")),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var asteroidCollision = function (asteroids) {\n    return asteroids.reduce((acc, cur) => {\n        if (!(acc[acc.length - 1] > 0 && cur < 0)) return acc.push(cur), acc;\n        while (0 < acc[acc.length - 1] && acc[acc.length - 1] < -cur) acc.pop();\n        if (!acc.length || acc[acc.length - 1] < 0) acc.push(cur);\n        else if (acc[acc.length - 1] === -cur) acc.pop();\n        return acc;\n    }, []);\n};\n")),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.png",src:n(36203).Z,width:"1356",height:"484"})))}s.isMDXComponent=!0},36203:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/0aa576c55f4d23f7f2049906446e203a-09425577e04b07a0527adf80bfc56d83.png"}}]);