"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[63501],{3905:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>g});var l=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,l,r=function(t,n){if(null==t)return{};var e,l,r={},u=Object.keys(t);for(l=0;l<u.length;l++)e=u[l],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(l=0;l<u.length;l++)e=u[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=l.createContext({}),c=function(t){var n=l.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},s=function(t){var n=c(t.components);return l.createElement(i.Provider,{value:n},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(t,n){var e=t.components,r=t.mdxType,u=t.originalType,i=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),p=c(e),m=r,g=p["".concat(i,".").concat(m)]||p[m]||k[m]||u;return e?l.createElement(g,o(o({ref:n},s),{},{components:e})):l.createElement(g,o({ref:n},s))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var u=e.length,o=new Array(u);o[0]=m;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=t,a[p]="string"==typeof t?t:r,o[1]=a;for(var c=2;c<u;c++)o[c]=e[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,e)}m.displayName="MDXCreateElement"},81300:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>a,toc:()=>c});var l=e(87462),r=(e(67294),e(3905));const u={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u52a8\u6001\u89c4\u5212"],date:new Date("2022-02-26T00:00:00.000Z")},o=void 0,a={permalink:"/algorithm/2022/02/26/553.\u6700\u4f18\u9664\u6cd5",source:"@site/algorithm/2022/02/26/553.\u6700\u4f18\u9664\u6cd5.md",title:"553.\u6700\u4f18\u9664\u6cd5",description:"1\u3001\u9898\u5e72",date:"2022-02-26T00:00:00.000Z",formattedDate:"2022\u5e742\u670826\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:1.85,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u52a8\u6001\u89c4\u5212"],date:"2022-02-26T00:00:00.000Z"},prevItem:{title:"1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",permalink:"/algorithm/2022/02/28/1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee"},nextItem:{title:"LCR 083.\u5168\u6392\u5217",permalink:"/algorithm/2022/02/26/LCR 083.\u5168\u6392\u5217"}},i={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],s={toc:c};function p(t){let{components:n,...u}=t;return(0,r.kt)("wrapper",(0,l.Z)({},s,u,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u7ed9\u5b9a\u4e00\u6b63\u6574\u6570\u6570\u7ec4",(0,r.kt)("strong",null," "),(0,r.kt)("code",null,"nums"),(0,r.kt)("strong",null,"\uff0c"),(0,r.kt)("code",null,"nums")," \u4e2d\u7684\u76f8\u90bb\u6574\u6570\u5c06\u8fdb\u884c\u6d6e\u70b9\u9664\u6cd5\u3002\u4f8b\u5982\uff0c\xa0[2,3,4] -> 2 / 3 / 4 \u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4f8b\u5982\uff0c",(0,r.kt)("code",null,"nums = [2,3,4]"),"\uff0c\u6211\u4eec\u5c06\u6c42\u8868\u8fbe\u5f0f\u7684\u503c\xa0",(0,r.kt)("code",null,'"2/3/4"'),"\u3002")),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u610f\u4f4d\u7f6e\u6dfb\u52a0\u4efb\u610f\u6570\u76ee\u7684\u62ec\u53f7\uff0c\u6765\u6539\u53d8\u7b97\u6570\u7684\u4f18\u5148\u7ea7\u3002\u4f60\u9700\u8981\u627e\u51fa\u600e\u4e48\u6dfb\u52a0\u62ec\u53f7\uff0c\u4ee5\u4fbf\u8ba1\u7b97\u540e\u7684\u8868\u8fbe\u5f0f\u7684\u503c\u4e3a\u6700\u5927\u503c\u3002"),(0,r.kt)("p",null,"\u4ee5\u5b57\u7b26\u4e32\u683c\u5f0f\u8fd4\u56de\u5177\u6709\u6700\u5927\u503c\u7684\u5bf9\u5e94\u8868\u8fbe\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u6ce8\u610f\uff1a"),"\u4f60\u7684\u8868\u8fbe\u5f0f\u4e0d\u5e94\u8be5\u5305\u542b\u591a\u4f59\u7684\u62ec\u53f7\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:")," [1000,100,10,2]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa:"),' "1000/(100/10/2)"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca: "),"1000/(100/10/2) = 1000/((100/10)/2) = 200",(0,r.kt)("br",null),'\u4f46\u662f\uff0c\u4ee5\u4e0b\u52a0\u7c97\u7684\u62ec\u53f7 "1000/(',(0,r.kt)("strong",null,"("),"100/10",(0,r.kt)("strong",null,")"),'/2)" \u662f\u5197\u4f59\u7684\uff0c',(0,r.kt)("br",null),'\u56e0\u4e3a\u4ed6\u4eec\u5e76\u4e0d\u5f71\u54cd\u64cd\u4f5c\u7684\u4f18\u5148\u7ea7\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u8fd4\u56de "1000/(100/10/2)"\u3002',(0,r.kt)("br",null),(0,r.kt)("br",null),"\u5176\u4ed6\u7528\u4f8b:",(0,r.kt)("br",null),"1000/(100/10)/2 = 50",(0,r.kt)("br",null),"1000/(100/(10/2)) = 50",(0,r.kt)("br",null),"1000/100/10/2 = 0.5",(0,r.kt)("br",null),"1000/100/(10/2) = 2",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2:")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165:")," nums = [2,3,4]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa:"),' "2/(3/4)"',(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca:")," (2/(3/4)) = 8/3 = 2.667",(0,r.kt)("br",null),"\u53ef\u4ee5\u770b\u51fa\uff0c\u5728\u5c1d\u8bd5\u4e86\u6240\u6709\u7684\u53ef\u80fd\u6027\u4e4b\u540e\uff0c\u6211\u4eec\u65e0\u6cd5\u5f97\u5230\u4e00\u4e2a\u7ed3\u679c\u5927\u4e8e 2.667 \u7684\u8868\u8fbe\u5f0f\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u8bf4\u660e:")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= nums.length <= 10")),(0,r.kt)("li",null,(0,r.kt)("code",null,"2 <= nums[i] <= 1000")),(0,r.kt)("li",null,"\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u8f93\u5165\u53ea\u6709\u4e00\u79cd\u6700\u4f18\u9664\u6cd5\u3002")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u8d2a\u5fc3\uff0c\u52a0\u62ec\u53f7\u4f7f\u5f97\u88ab\u9664\u6570\u6700\u5927\u3001\u9664\u6570\u6700\u5c0f\u5373\u53ef"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var optimalDivision = function (nums) {\n    return nums.length < 3 ? nums.join('/') : `${nums.shift()}/(${nums.join('/')})`;\n};\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:e(56482).Z,width:"532",height:"245"})))}p.isMDXComponent=!0},56482:(t,n,e)=>{e.d(n,{Z:()=>l});const l=e.p+"assets/images/abdfabd740b620a78dabf54254ea7ca1-cb27f32f496ae52d8481042a6256b096.png"}}]);