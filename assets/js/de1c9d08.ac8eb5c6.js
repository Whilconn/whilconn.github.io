"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[15624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,d=m["".concat(o,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(d,i(i({ref:t},k),{},{components:n})):r.createElement(d,i({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6570\u7ec4","\u679a\u4e3e"],date:"2022/11/2"},i=void 0,p={permalink:"/algorithm/1620.\u7f51\u7edc\u4fe1\u53f7\u6700\u597d\u7684\u5750\u6807",source:"@site/algorithm/1620.\u7f51\u7edc\u4fe1\u53f7\u6700\u597d\u7684\u5750\u6807.md",title:"1620.\u7f51\u7edc\u4fe1\u53f7\u6700\u597d\u7684\u5750\u6807",description:"1\u3001\u9898\u5e72",date:"2022-11-02T00:00:00.000Z",formattedDate:"2022\u5e7411\u67082\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u679a\u4e3e",permalink:"/algorithm/tags/\u679a\u4e3e"}],readingTime:3.975,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u679a\u4e3e"],date:"2022/11/2"},prevItem:{title:"1106.\u89e3\u6790\u5e03\u5c14\u8868\u8fbe\u5f0f",permalink:"/algorithm/1106.\u89e3\u6790\u5e03\u5c14\u8868\u8fbe\u5f0f"},nextItem:{title:"481.\u795e\u5947\u5b57\u7b26\u4e32",permalink:"/algorithm/481.\u795e\u5947\u5b57\u7b26\u4e32"}},o={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],k={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"towers"),"\xa0\u548c\u4e00\u4e2a\u6574\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"radius")," \u3002"),(0,a.kt)("p",null,"\u6570\u7ec4\xa0 ",(0,a.kt)("inlineCode",{parentName:"p"},"towers"),"\xa0 \u4e2d\u5305\u542b\u4e00\u4e9b\u7f51\u7edc\u4fe1\u53f7\u5854\uff0c\u5176\u4e2d\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"towers[i] = [xi, yi, qi]"),"\xa0\u8868\u793a\u7b2c\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"i"),"\xa0\u4e2a\u7f51\u7edc\u4fe1\u53f7\u5854\u7684\u5750\u6807\u662f\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"(xi, yi)"),"\xa0\u4e14\u4fe1\u53f7\u5f3a\u5ea6\u53c2\u6570\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"qi"),"\xa0\u3002\u6240\u6709\u5750\u6807\u90fd\u662f\u5728\xa0 X-Y \u5750\u6807\u7cfb\u5185\u7684\xa0",(0,a.kt)("strong",{parentName:"p"},"\u6574\u6570"),"\xa0\u5750\u6807\u3002\u4e24\u4e2a\u5750\u6807\u4e4b\u95f4\u7684\u8ddd\u79bb\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u6b27\u51e0\u91cc\u5f97\u8ddd\u79bb"),"\xa0\u8ba1\u7b97\u3002"),(0,a.kt)("p",null,"\u6574\u6570\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"radius"),"\xa0\u8868\u793a\u4e00\u4e2a\u5854 ",(0,a.kt)("strong",{parentName:"p"},"\u80fd\u5230\u8fbe"),"\xa0\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6700\u8fdc\u8ddd\u79bb"),"\xa0\u3002\u5982\u679c\u4e00\u4e2a\u5750\u6807\u8ddf\u5854\u7684\u8ddd\u79bb\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"radius"),"\xa0\u4ee5\u5185\uff0c\u90a3\u4e48\u8be5\u5854\u7684\u4fe1\u53f7\u53ef\u4ee5\u5230\u8fbe\u8be5\u5750\u6807\u3002\u5728\u8fd9\u4e2a\u8303\u56f4\u4ee5\u5916\u4fe1\u53f7\u4f1a\u5f88\u5fae\u5f31\uff0c\u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"radius"),"\xa0\u4ee5\u5916\u7684\u8ddd\u79bb\u8be5\u5854\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u80fd\u5230\u8fbe\u7684"),"\xa0\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u7b2c ",(0,a.kt)("inlineCode",{parentName:"p"},"i"),"\xa0\u4e2a\u5854\u80fd\u5230\u8fbe ",(0,a.kt)("inlineCode",{parentName:"p"},"(x, y)"),"\xa0\uff0c\u90a3\u4e48\u8be5\u5854\u5728\u6b64\u5904\u7684\u4fe1\u53f7\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"\u230aqi / (1 + d)\u230b"),"\xa0\uff0c\u5176\u4e2d\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"\xa0\u662f\u5854\u8ddf\u6b64\u5750\u6807\u7684\u8ddd\u79bb\u3002\u4e00\u4e2a\u5750\u6807\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u4fe1\u53f7\u5f3a\u5ea6")," \u662f\u6240\u6709 ",(0,a.kt)("strong",{parentName:"p"},"\u80fd\u5230\u8fbe"),"\xa0\u8be5\u5750\u6807\u7684\u5854\u7684\u4fe1\u53f7\u5f3a\u5ea6\u4e4b\u548c\u3002"),(0,a.kt)("p",null,"\u8bf7\u4f60\u8fd4\u56de\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"[cx, cy]")," \uff0c\u8868\u793a ",(0,a.kt)("strong",{parentName:"p"},"\u4fe1\u53f7\u5f3a\u5ea6")," \u6700\u5927\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6574\u6570")," \u5750\u6807\u70b9\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"(cx, cy)")," \u3002\u5982\u679c\u6709\u591a\u4e2a\u5750\u6807\u7f51\u7edc\u4fe1\u53f7\u4e00\u6837\u5927\uff0c\u8bf7\u4f60\u8fd4\u56de\u5b57\u5178\u5e8f\u6700\u5c0f\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u975e\u8d1f")," \u5750\u6807\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5750\u6807\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"(x1, y1)"),"\xa0\u5b57\u5178\u5e8f\u6bd4\u53e6\u4e00\u4e2a\u5750\u6807\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"(x2, y2)")," \u5c0f\uff0c\u9700\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u4e4b\u4e00\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8981\u4e48\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"x1 < x2"),"\xa0\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u4e48\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"x1 == x2")," \u4e14\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"y1 < y2"),"\xa0\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u230aval\u230b"),"\xa0\u8868\u793a\u5c0f\u4e8e\u7b49\u4e8e\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"val"),"\xa0\u7684\u6700\u5927\u6574\u6570\uff08\u5411\u4e0b\u53d6\u6574\u51fd\u6570\uff09\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/10/17/untitled-diagram.png",alt:null}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," towers = ","[","[","1,2,5","]",",","[","2,1,7","]",",","[","3,1,9","]","]",", radius = 2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","2,1","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," ",(0,a.kt)("br",null),"\n\u5750\u6807 (2, 1) \u4fe1\u53f7\u5f3a\u5ea6\u4e4b\u548c\u4e3a 13",(0,a.kt)("br",null)),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5854 (2, 1) \u5f3a\u5ea6\u53c2\u6570\u4e3a 7 \uff0c\u5728\u8be5\u70b9\u5f3a\u5ea6\u4e3a \u230a7 / (1 + sqrt(0)\u230b = \u230a7\u230b = 7",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u5854 (1, 2) \u5f3a\u5ea6\u53c2\u6570\u4e3a 5 \uff0c\u5728\u8be5\u70b9\u5f3a\u5ea6\u4e3a \u230a5 / (1 + sqrt(2)\u230b = \u230a2.07\u230b = 2",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u5854 (3, 1) \u5f3a\u5ea6\u53c2\u6570\u4e3a 9 \uff0c\u5728\u8be5\u70b9\u5f3a\u5ea6\u4e3a \u230a9 / (1 + sqrt(1)\u230b = \u230a4.5\u230b = 4",(0,a.kt)("br",null),"\n\u6ca1\u6709\u522b\u7684\u5750\u6807\u6709\u66f4\u5927\u7684\u4fe1\u53f7\u5f3a\u5ea6\u3002",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," towers = ","[","[","23,11,21","]","]",", radius = 9",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","23,11","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u7531\u4e8e\u4ec5\u5b58\u5728\u4e00\u5ea7\u4fe1\u53f7\u5854\uff0c\u6240\u4ee5\u5854\u7684\u4f4d\u7f6e\u4fe1\u53f7\u5f3a\u5ea6\u6700\u5927\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," towers = ","[","[","1,2,13","]",",","[","2,1,7","]",",","[","0,1,9","]","]",", radius = 2",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," ","[","1,2","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u5750\u6807 (1, 2) \u7684\u4fe1\u53f7\u5f3a\u5ea6\u6700\u5927\u3002",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= towers.length <= 50")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"towers[i].length == 3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= xi, yi, qi <= 50")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= radius <= 50"))),(0,a.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,a.kt)("p",null,"\u9898\u76ee\u4e0d\u96be\uff0c\u96be\u7684\u662f\u9605\u8bfb\u7406\u89e3\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u9898\u610f\u548c\u6570\u636e\u8303\u56f4\uff0c\u95ee\u9898\u53ef\u4ee5\u7b80\u5316\u4e3a\uff1a\u7ed9\u5b9a\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"p"},"towers"),"\u3001\u6574\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"radius"),"\uff0c\u6c42\u5728\u77e9\u5f62 ",(0,a.kt)("inlineCode",{parentName:"p"},"rect = [[0,0],[0,100],[100,0],[100,100]]")," \u4e2d\u4fe1\u53f7\u6700\u5f3a\u7684\u5750\u6807\u3002\u8fd9\u4e0d\u662f\u6700\u4f18\u89e3\uff0c\u4f46\u662f\u76f8\u5bf9\u5bb9\u6613\u7406\u89e3\u3002"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function bestCoordinate(towers: number[][], radius: number): number[] {\n    let [rx, ry, rq] = [0, 0, 0];\n\n    for (let x = 0; x <= 100; x++) {\n        for (let y = 0; y <= 100; y++) {\n            let q = 0;\n\n            for (const [xt, yt, qt] of towers) {\n                const d = Math.sqrt((x - xt) ** 2 + (y - yt) ** 2);\n                if (d <= radius) q += Math.floor(qt / (1 + d));\n            }\n\n            if (q > rq) [rx, ry, rq] = [x, y, q];\n        }\n    }\n\n    return [rx, ry];\n}\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n^3)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(1)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1667360487-FiZJTY-image.png",alt:"image.png"})))}m.isMDXComponent=!0}}]);