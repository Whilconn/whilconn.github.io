"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[43742],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),k=a,d=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},38315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const l={authors:["Whilconn"],tags:["\u5b57\u5178\u6811","\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6392\u5e8f"],date:"2022/11/17"},i=void 0,o={permalink:"/algorithm/792.\u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570",source:"@site/algorithm/792.\u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570.md",title:"792.\u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570",description:"1\u3001\u9898\u5e72",date:"2022-11-17T00:00:00.000Z",formattedDate:"2022\u5e7411\u670817\u65e5",tags:[{label:"\u5b57\u5178\u6811",permalink:"/algorithm/tags/\u5b57\u5178\u6811"},{label:"\u54c8\u5e0c\u8868",permalink:"/algorithm/tags/\u54c8\u5e0c\u8868"},{label:"\u5b57\u7b26\u4e32",permalink:"/algorithm/tags/\u5b57\u7b26\u4e32"},{label:"\u6392\u5e8f",permalink:"/algorithm/tags/\u6392\u5e8f"}],readingTime:2.365,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u5b57\u5178\u6811","\u54c8\u5e0c\u8868","\u5b57\u7b26\u4e32","\u6392\u5e8f"],date:"2022/11/17"},prevItem:{title:"891.\u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c",permalink:"/algorithm/891.\u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c"},nextItem:{title:"775.\u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e",permalink:"/algorithm/775.\u5168\u5c40\u5012\u7f6e\u4e0e\u5c40\u90e8\u5012\u7f6e"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001Code",id:"3code",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],m={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\xa0\u548c\u5b57\u7b26\u4e32\u6570\u7ec4\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"words"),", \u8fd4\u56de\xa0\xa0",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"words[i]"),"\xa0\u4e2d\u662f",(0,a.kt)("inlineCode",{parentName:"em"},"s"),"\u7684\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u4e2a\u6570"),"\xa0\u3002"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u5b50\u5e8f\u5217")," \u662f\u4ece\u539f\u59cb\u5b57\u7b26\u4e32\u4e2d\u751f\u6210\u7684\u65b0\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u4ece\u4e2d\u5220\u53bb\u4e00\u4e9b\u5b57\u7b26(\u53ef\u4ee5\u662fnone)\uff0c\u800c\u4e0d\u6539\u53d8\u5176\u4f59\u5b57\u7b26\u7684\u76f8\u5bf9\u987a\u5e8f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"\u201cace\u201d")," \u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"\u201cabcde\u201d")," \u7684\u5b50\u5e8f\u5217\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),'  s = "abcde", words = ',"[",'"a","bb","acd","ace"',"]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  3",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca:"),'  \u6709\u4e09\u4e2a\u662f\xa0s \u7684\u5b50\u5e8f\u5217\u7684\u5355\u8bcd: "a", "acd", "ace"\u3002',(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Example 2:")," ",(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165:"),'  s = "dsahjpjauf", words = ',"[",'"ahjpjau","ja","ahbwzgqnuk","tnmlanowax"',"]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa:"),"  2",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 5000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length <= 50")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"words[i]"),"\u548c s\xa0\u90fd\u53ea\u7531\u5c0f\u5199\u5b57\u6bcd\u7ec4\u6210\u3002")),(0,a.kt)("p",null,"\u200b\u200b\u200b\u200b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Problem: ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/number-of-matching-subsequences/description/"},"792. \u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570"))),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("p",null,"\u4e8c\u5206\u67e5\u627e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6309\u5b57\u6bcd\u8868\u987a\u5e8f\u628a\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u6240\u6709\u5b57\u7b26\u7684\u4e0b\u6807\u5347\u5e8f\u5b58\u5165\u4e8c\u7ef4\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"li"},"idxMatrix")),(0,a.kt)("li",{parentName:"ul"},"\u5224\u65ad\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"li"},"words")," \u4e2d\u4efb\u610f\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"li"},"w")," \u662f\u5426 ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u7684\u5b50\u5e8f\u5217\uff0c\u53ea\u9700\u8981\u5224\u65ad ",(0,a.kt)("inlineCode",{parentName:"li"},"w")," \u4e2d\u4efb\u610f\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"li"},"c")," \u6bd4\u524d\u4e00\u4e2a\u5b57\u7b26 \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u7684\u4e0b\u6807\u66f4\u5927\u3002\u5176\u4e2d\u67e5\u627e ",(0,a.kt)("inlineCode",{parentName:"li"},"c")," \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4e2d\u7684\u4e0b\u6807\u65f6\uff0c\u4f7f\u7528\u4e8c\u5206\u67e5\u627e\u7b97\u6cd5")),(0,a.kt)("h2",{id:"3code"},"3\u3001Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function numMatchingSubseq(s: string, words: string[]): number {\n    const CA = 'a'.charCodeAt(0), idxMatrix = new Array(26).fill(0).map(() => []);\n\n    for (let i = 0; i < s.length; i++) {\n        const ci = s[i].charCodeAt(0) - CA;\n        idxMatrix[ci].push(i);\n    }\n\n    function find(nums: number[] = [], k: number) {\n        let l = 0, r = nums.length - 1;\n\n        while (l <= r) {\n            const m = ((l + r) / 2) >> 0;\n            if (nums[m] > k) {\n                if (nums[m - 1] > k) r = m - 1;\n                else return nums[m];\n            } else {\n                l = m + 1;\n            }\n        }\n\n        return -1;\n    }\n\n    let res = 0;\n    loop: for (const w of words) {\n        let preIdx = -1;\n        for (const c of w) {\n            const ci = c.charCodeAt(0) - CA;\n            const ni = find(idxMatrix[ci], preIdx);\n            if (ni < 0) continue loop;\n            preIdx = ni;\n        }\n        res++;\n    }\n\n    return res;\n};\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n*logn)$"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1668654713-oGYEIy-image.png",alt:"image.png"})))}c.isMDXComponent=!0}}]);