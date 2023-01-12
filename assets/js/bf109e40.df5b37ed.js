"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[34836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,f=m["".concat(p,".").concat(g)]||m[g]||s[g]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},63801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u52a8\u6001\u89c4\u5212"],date:"2022/2/27"},o=void 0,i={permalink:"/algorithm/553.\u6700\u4f18\u9664\u6cd5",source:"@site/algorithm/553.\u6700\u4f18\u9664\u6cd5.md",title:"553.\u6700\u4f18\u9664\u6cd5",description:"1\u3001\u9898\u5e72",date:"2022-02-27T00:00:00.000Z",formattedDate:"2022\u5e742\u670827\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/algorithm/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:1.44,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u52a8\u6001\u89c4\u5212"],date:"2022/2/27"},prevItem:{title:"1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee",permalink:"/algorithm/1601.\u6700\u591a\u53ef\u8fbe\u6210\u7684\u6362\u697c\u8bf7\u6c42\u6570\u76ee"},nextItem:{title:"\u5251\u6307 Offer II 083.\u6ca1\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217",permalink:"/algorithm/\u5251\u6307 Offer II 083.\u6ca1\u6709\u91cd\u590d\u5143\u7d20\u96c6\u5408\u7684\u5168\u6392\u5217"}},p={authorsImageUrls:[void 0]},c=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u7ec4",(0,a.kt)("strong",{parentName:"p"},"\u6b63\u6574\u6570\uff0c"),"\u76f8\u90bb\u7684\u6574\u6570\u4e4b\u95f4\u5c06\u4f1a\u8fdb\u884c\u6d6e\u70b9\u9664\u6cd5\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c\xa0","[","2,3,4","]"," -> 2 / 3 / 4 \u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u610f\u4f4d\u7f6e\u6dfb\u52a0\u4efb\u610f\u6570\u76ee\u7684\u62ec\u53f7\uff0c\u6765\u6539\u53d8\u7b97\u6570\u7684\u4f18\u5148\u7ea7\u3002\u4f60\u9700\u8981\u627e\u51fa\u600e\u4e48\u6dfb\u52a0\u62ec\u53f7\uff0c\u624d\u80fd\u5f97\u5230",(0,a.kt)("strong",{parentName:"p"},"\u6700\u5927\u7684"),"\u7ed3\u679c\uff0c\u5e76\u4e14\u8fd4\u56de\u76f8\u5e94\u7684\u5b57\u7b26\u4e32\u683c\u5f0f\u7684\u8868\u8fbe\u5f0f\u3002",(0,a.kt)("strong",{parentName:"p"},"\u4f60\u7684\u8868\u8fbe\u5f0f\u4e0d\u5e94\u8be5\u542b\u6709\u5197\u4f59\u7684\u62ec\u53f7\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:")," ","[","1000,100,10,2","]","\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),' "1000/(100/10/2)"\n',(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),'\n1000/(100/10/2) = 1000/((100/10)/2) = 200\n\u4f46\u662f\uff0c\u4ee5\u4e0b\u52a0\u7c97\u7684\u62ec\u53f7 "1000/(',(0,a.kt)("strong",{parentName:"p"},"("),"100/10",(0,a.kt)("strong",{parentName:"p"},")"),'/2)" \u662f\u5197\u4f59\u7684\uff0c\n\u56e0\u4e3a\u4ed6\u4eec\u5e76\u4e0d\u5f71\u54cd\u64cd\u4f5c\u7684\u4f18\u5148\u7ea7\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u8fd4\u56de "1000/(100/10/2)"\u3002'),(0,a.kt)("p",null,"\u5176\u4ed6\u7528\u4f8b:\n1000/(100/10)/2 = 50\n1000/(100/(10/2)) = 50\n1000/100/10/2 = 0.5\n1000/100/(10/2) = 2"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf4\u660e:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6570\u7ec4\u7684\u957f\u5ea6\u5728 ","[","1, 10","]"," \u4e4b\u95f4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684\u5927\u5c0f\u90fd\u5728 ","[","2, 1000","]"," \u4e4b\u95f4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u53ea\u6709\u4e00\u4e2a\u6700\u4f18\u9664\u6cd5\u89e3\u3002")),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u8d2a\u5fc3\uff0c\u52a0\u62ec\u53f7\u4f7f\u5f97\u88ab\u9664\u6570\u6700\u5927\u3001\u9664\u6570\u6700\u5c0f\u5373\u53ef"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var optimalDivision = function (nums) {\n    return nums.length < 3 ? nums.join('/') : `${nums.shift()}/(${nums.join('/')})`;\n};\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1645892139-KKCerU-image.png",alt:"image.png"})))}m.isMDXComponent=!0}}]);