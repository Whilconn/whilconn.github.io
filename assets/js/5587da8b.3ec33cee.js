"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[33016],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),k=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=k(n),s=r,d=u["".concat(o,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(87462),r=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32"],date:"2022/1/27"},i=void 0,p={permalink:"/algorithm/2047.\u53e5\u5b50\u4e2d\u7684\u6709\u6548\u5355\u8bcd\u6570",source:"@site/algorithm/2047.\u53e5\u5b50\u4e2d\u7684\u6709\u6548\u5355\u8bcd\u6570.md",title:"2047.\u53e5\u5b50\u4e2d\u7684\u6709\u6548\u5355\u8bcd\u6570",description:"1\u3001\u9898\u5e72",date:"2022-01-27T00:00:00.000Z",formattedDate:"2022\u5e741\u670827\u65e5",tags:[{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"}],readingTime:3.255,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u7b26\u4e32"],date:"2022/1/27"},prevItem:{title:"\u5251\u6307 Offer II 064.\u795e\u5947\u7684\u5b57\u5178",permalink:"/algorithm/\u5251\u6307 Offer II 064.\u795e\u5947\u7684\u5b57\u5178"},nextItem:{title:"\u5251\u6307 Offer II 118.\u591a\u4f59\u7684\u8fb9",permalink:"/algorithm/\u5251\u6307 Offer II 118.\u591a\u4f59\u7684\u8fb9"}},o={authorsImageUrls:[void 0]},k=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u6267\u884c\u7ed3\u679c",id:"4\u6267\u884c\u7ed3\u679c",level:2}],m={toc:k};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u53e5\u5b50\u4ec5\u7531\u5c0f\u5199\u5b57\u6bcd\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"'a'")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"'z'"),"\uff09\u3001\u6570\u5b57\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"'0'")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"'9'"),"\uff09\u3001\u8fde\u5b57\u7b26\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"'-'"),"\uff09\u3001\u6807\u70b9\u7b26\u53f7\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"'!'"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"'.'")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"','"),"\uff09\u4ee5\u53ca\u7a7a\u683c\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"' '"),"\uff09\u7ec4\u6210\u3002\u6bcf\u4e2a\u53e5\u5b50\u53ef\u4ee5\u6839\u636e\u7a7a\u683c\u5206\u89e3\u6210 ",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u6216\u8005\u591a\u4e2a token")," \uff0c\u8fd9\u4e9b token \u4e4b\u95f4\u7531\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7a7a\u683c ",(0,r.kt)("inlineCode",{parentName:"p"},"' '")," \u5206\u9694\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u4e2a token \u540c\u65f6\u6ee1\u8db3\u4e0b\u8ff0\u6761\u4ef6\uff0c\u5219\u8ba4\u4e3a\u8fd9\u4e2a token \u662f\u4e00\u4e2a\u6709\u6548\u5355\u8bcd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ec5\u7531\u5c0f\u5199\u5b57\u6bcd\u3001\u8fde\u5b57\u7b26\u548c/\u6216\u6807\u70b9\uff08\u4e0d\u542b\u6570\u5b57\uff09\b\u7ec4\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u81f3\u591a\u4e00\u4e2a")," \u8fde\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"'-'")," \u3002\u5982\u679c\u5b58\u5728\uff0c\u8fde\u5b57\u7b26\u4e24\u4fa7\u5e94\u5f53\u90fd\u5b58\u5728\u5c0f\u5199\u5b57\u6bcd\uff08",(0,r.kt)("inlineCode",{parentName:"li"},'"a-b"')," \u662f\u4e00\u4e2a\u6709\u6548\u5355\u8bcd\uff0c\u4f46 ",(0,r.kt)("inlineCode",{parentName:"li"},'"-ab"')," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},'"ab-"')," \u4e0d\u662f\u6709\u6548\u5355\u8bcd\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u81f3\u591a\u4e00\u4e2a")," \u6807\u70b9\u7b26\u53f7\u3002\u5982\u679c\u5b58\u5728\uff0c\u6807\u70b9\u7b26\u53f7\u5e94\u5f53\u4f4d\u4e8e token \u7684 ",(0,r.kt)("strong",{parentName:"li"},"\u672b\u5c3e")," \u3002")),(0,r.kt)("p",null,"\u8fd9\u91cc\u7ed9\u51fa\u51e0\u4e2a\u6709\u6548\u5355\u8bcd\u7684\u4f8b\u5b50\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'"a-b."'),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},'"afad"'),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},'"ba-c"'),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},'"a!"')," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},'"!"')," \u3002"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"sentence")," \uff0c\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"sentence")," \u4e2d ",(0,r.kt)("strong",{parentName:"p"},"\u6709\u6548\u5355\u8bcd\u7684\u6570\u76ee")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' sentence = "',(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"cat"))," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"and")),"  ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"dog")),'"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 3",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' \u53e5\u5b50\u4e2d\u7684\u6709\u6548\u5355\u8bcd\u662f "cat"\u3001"and" \u548c "dog"',(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' sentence = "!this  1-s b8d!"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 0",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u53e5\u5b50\u4e2d\u6ca1\u6709\u6709\u6548\u5355\u8bcd",(0,r.kt)("br",null),'\n"!this" \u4e0d\u662f\u6709\u6548\u5355\u8bcd\uff0c\u56e0\u4e3a\u5b83\u4ee5\u4e00\u4e2a\u6807\u70b9\u5f00\u5934',(0,r.kt)("br",null),'\n"1-s" \u548c "b8d" \u4e5f\u4e0d\u662f\u6709\u6548\u5355\u8bcd\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u5305\u542b\u6570\u5b57',(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),' sentence = "',(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"alice"))," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"and")),"  ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"bob"))," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"are"))," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"playing")),' stone-game10"',(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 5",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),' \u53e5\u5b50\u4e2d\u7684\u6709\u6548\u5355\u8bcd\u662f "alice"\u3001"and"\u3001"bob"\u3001"are" \u548c "playing"',(0,r.kt)("br",null),'\n"stone-game10" \u4e0d\u662f\u6709\u6548\u5355\u8bcd\uff0c\u56e0\u4e3a\u5b83\u542b\u6709\u6570\u5b57',(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= sentence.length <= 1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sentence")," \u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u3001\u6570\u5b57\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"0-9"),"\uff09\u3001\u4ee5\u53ca\u5b57\u7b26\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"' '"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"'-'"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"'!'"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"'.'")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"','"),"\uff09\u7ec4\u6210"),(0,r.kt)("li",{parentName:"ul"},"\u53e5\u5b50\u4e2d\u81f3\u5c11\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," \u4e2a token")),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u7ec8\u4e8e\u8f6e\u5230\u6b63\u5219\u9009\u624b\u51fa\u573a"),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1643247302-STbzct-c2b8f8d11010c98b21d6b1f9906e8dcb.gif",alt:"c2b8f8d11010c98b21d6b1f9906e8dcb.gif"})),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u770b\u4e0b\u9762\u5185\u5bb9\u4e4b\u524d\u9700\u8981\u4e00\u4e9b",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions"},"\u6b63\u5219\u57fa\u7840"))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b63\u5219\u8bf4\u660e")," \uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"/^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/")),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4e2d\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"|")," \u628a\u6b63\u5219\u4e2d\u95f4\u90e8\u5206\u5206\u6210\u4e24\u79cd\u60c5\u51b5\uff0c\u5b9e\u9645\u53ef\u4ee5\u5f53\u6210\u4e24\u4e2a\u6b63\u5219\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"/^[,.!]$/")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"/^[a-z]+(-[a-z]+)?[,.!]?$/")),(0,r.kt)("li",{parentName:"ul"},"\u8981\u5339\u914d\u5b8c\u6574\u7684token\uff1a\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"^")," \u8868\u793a\u5339\u914d\u5230\u5b57\u7b26\u4e32\u8d77\u59cb\u4f4d\u7f6e\uff0c\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"$")," \u8868\u793a\u5339\u914d\u5230\u5b57\u7b26\u4e32\u672b\u5c3e"),(0,r.kt)("li",{parentName:"ul"},"token\u53ea\u67091\u4e2a\u6807\u70b9\u7b26\u53f7\uff0c\u5373\u7b2c\u4e00\u79cd\u60c5\u51b5 ",(0,r.kt)("inlineCode",{parentName:"li"},"/^[,.!]$/"),"\uff0c\u8868\u793a\u6574\u4e2a\u5b57\u7b26\u4e32\u662f3\u4e2a\u6807\u70b9\u4e2d\u4efb\u610f1\u4e2a"),(0,r.kt)("li",{parentName:"ul"},"token\u6709\u5b57\u6bcd\u7684\u60c5\u51b5\u4e0b\uff0c\u5373\u7b2c\u4e8c\u79cd\u60c5\u51b5 ",(0,r.kt)("inlineCode",{parentName:"li"},"/^[a-z]+(-[a-z]+)?[,.!]?$/"),"\uff0c\u4e00\u5b9a\u662f1\u4e2a\u6216\u591a\u4e2a\u5b57\u6bcd\u5f00\u5934\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"^[a-z]+"),"\uff0c\u540e\u9762\u53ef\u80fd\u6709\u8fde\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," \u548c\u5b57\u6bcd\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"(-[a-z]+)?"),"\uff0c\u672b\u5c3e\u53ef\u80fd\u6709\u6807\u70b9\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"[,.!]?$"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},"var countValidWords = function (sentence) {\n    return sentence.split(' ').filter(w => /^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/.test(w)).length;\n};\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"4\u6267\u884c\u7ed3\u679c"},"4\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u7528\u65f6: 76 ms"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6d88\u8017: 39.4 MB")))}u.isMDXComponent=!0}}]);