"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[79563],{49613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>s});var r=t(59496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},g="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(t),m=l,s=g["".concat(p,".").concat(m)]||g[m]||k[m]||a;return t?r.createElement(s,o(o({ref:n},c),{},{components:t})):r.createElement(s,o({ref:n},c))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[g]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(15882),l=(t(59496),t(49613));const a={authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u8ba1\u6570","\u6570\u8bba"],date:"2023/1/14"},o=void 0,i={permalink:"/algorithm/1819.\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee",source:"@site/algorithm/1819.\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee.md",title:"1819.\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee",description:"1\u3001\u9898\u5e72",date:"2023-01-14T00:00:00.000Z",formattedDate:"2023\u5e741\u670814\u65e5",tags:[{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u6570\u5b66",permalink:"/algorithm/tags/\u6570\u5b66"},{label:"\u8ba1\u6570",permalink:"/algorithm/tags/\u8ba1\u6570"},{label:"\u6570\u8bba",permalink:"/algorithm/tags/\u6570\u8bba"}],readingTime:2.37,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6570\u7ec4","\u6570\u5b66","\u8ba1\u6570","\u6570\u8bba"],date:"2023/1/14"},prevItem:{title:"2293.\u6781\u5927\u6781\u5c0f\u6e38\u620f",permalink:"/algorithm/2293.\u6781\u5927\u6781\u5c0f\u6e38\u620f"},nextItem:{title:"2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",permalink:"/algorithm/2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],c={toc:u};function g(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u7531\u6b63\u6574\u6570\u7ec4\u6210\u7684\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"nums")," \u3002"),(0,l.kt)("p",null,"\u6570\u5b57\u5e8f\u5217\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u6700\u5927\u516c\u7ea6\u6570")," \u5b9a\u4e49\u4e3a\u5e8f\u5217\u4e2d\u6240\u6709\u6574\u6570\u7684\u5171\u6709\u7ea6\u6570\u4e2d\u7684\u6700\u5927\u6574\u6570\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u5e8f\u5217 ",(0,l.kt)("inlineCode",{parentName:"li"},"[4,6,16]")," \u7684\u6700\u5927\u516c\u7ea6\u6570\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"2")," \u3002")),(0,l.kt)("p",null,"\u6570\u7ec4\u7684\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u5b50\u5e8f\u5217")," \u672c\u8d28\u662f\u4e00\u4e2a\u5e8f\u5217\uff0c\u53ef\u4ee5\u901a\u8fc7\u5220\u9664\u6570\u7ec4\u4e2d\u7684\u67d0\u4e9b\u5143\u7d20\uff08\u6216\u8005\u4e0d\u5220\u9664\uff09\u5f97\u5230\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"[2,5,10]")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"[1,2,1,**2**,4,1,**5**,**10**]")," \u7684\u4e00\u4e2a\u5b50\u5e8f\u5217\u3002")),(0,l.kt)("p",null,"\u8ba1\u7b97\u5e76\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"nums")," \u7684\u6240\u6709 ",(0,l.kt)("strong",{parentName:"p"},"\u975e\u7a7a")," \u5b50\u5e8f\u5217\u4e2d ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u540c")," \u6700\u5927\u516c\u7ea6\u6570\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u6570\u76ee")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{src:t(98761).Z,width:"149",height:"309"}),(0,l.kt)("br",null))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","6,10,3","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 5",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a")," \u4e0a\u56fe\u663e\u793a\u4e86\u6240\u6709\u7684\u975e\u7a7a\u5b50\u5e8f\u5217\u4e0e\u5404\u81ea\u7684\u6700\u5927\u516c\u7ea6\u6570\u3002",(0,l.kt)("br",null),"\n\u4e0d\u540c\u7684\u6700\u5927\u516c\u7ea6\u6570\u4e3a 6 \u300110 \u30013 \u30012 \u548c 1 \u3002",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," nums = ","[","5,15,40,5,6","]",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 7",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 2 * 10^5"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9898\u76ee\u592a\u96be\uff0c\u770b\u4e86\u9898\u89e3\u624d\u5199\u51fa\u6765\u3002")),(0,l.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,l.kt)("p",null,"\u6240\u6709\u6700\u5927\u516c\u7ea6\u6570\u90fd\u5904\u4e8e $","[1,max(nums)]","$ \u8303\u56f4\u5185\uff0c\u56e0\u6b64\u53ef\u4ee5\u679a\u4e3e\u8be5\u8303\u56f4\u5185\u7684\u6240\u6709\u6570\u5b57 ",(0,l.kt)("inlineCode",{parentName:"p"},"i"),"\uff0c\u5224\u65ad\u8be5\u6570\u5b57\u662f\u5426\u5c5e\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"nums")," \u5b50\u5e8f\u5217\u7684\u6700\u5927\u516c\u7ea6\u6570\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u5224\u65ad\u65f6\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \u500d\u4e58\uff0c\u82e5\u500d\u4e58\u7684\u6570\u540c\u65f6\u5c5e\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"nums")," \u5219\u6c42\u5176\u6700\u5927\u516c\u7ea6\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"g"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"g === i")," \u5219\u7ed3\u679c\u7d2f\u52a01\u3002"),(0,l.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"function countDifferentSubsequenceGCDs(nums: number[]): number {\n    let max = 0;\n    for (const n of nums) max = n > max ? n : max;\n\n    const set = new Array(max + 1);\n    for (const n of nums) set[n] = 1;\n\n    const gcd = (x: number, y: number) => y ? gcd(y, x % y) : x;\n\n    let ans = 0;\n    for (let i = 1; i <= max; i++) {\n        if (set[i]) {\n            ans++;\n            continue;\n        }\n\n        let g = 0;\n        for (let j = 2 * i; j <= max && g !== i; j += i) {\n            if (set[j]) g = gcd(j, g);\n        }\n\n        if (g === i) ans++;\n    }\n\n    return ans;\n};\n")),(0,l.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a$O(n*logn)$"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a$O(n)$")),(0,l.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:t(498).Z,width:"1440",height:"402"})))}g.isMDXComponent=!0},498:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1673704480-FDjGhP-image-f45d0c79276294977867f1fd020b82f8.png"},98761:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAE1CAYAAADuyaIVAAAVdklEQVR4Ae2dz6slxRXH56/JH5BVds5aN4M/do7gDO4UBt3IIGYTgsSFoEhWkRiEh0FxwiwkSFZuVIYhMYyJcTITEoiKMC+68JFsOnwv73s5c151d53bdcu6Xd+GO/3r1KlT3/PpU3173ut3btAiBQorcK6wP7mTAoOgEgTFFZiF6ty5c4M+0gAM5C6zlhFnuZ3KblyBVvWOxCWoxvP7g5yJJK9mgJG4BFXNzGT0FUlehrtiJpG4BFUx2cs4iiSvTI95XiJxCao8TatZRZJXLahh2HxZy+1PUOUqVclOUFUSuqduBFVP2a40VkFVSeieuhFUPWW70lgFVSWhe+pGUPWU7UpjFVTDMLz86uvDj378k+3n4xs3s+S/fefucP6hC5v2WQ06MZqD6p1r17daU3ev+fcnJ8NzV1+8zw554pLyAV/eD+2xnovrPlu7k9qecsbgEAwHAlAAzNwiqNIKjek9pi9zgDWWe8fHw2NPXN5AhTZYqDVAwzG2sRDxGP1sGpp/xuIyJtvNRQ8/QX8uRNseTzc4UHsFeZse98eSx6RbEFL6QE9ABbjGlpQvQjvWdiyuVB+LoULZTIHlrxgfNKH66c9/sS3V1g/Ps8TzKsMg6IvnLJjsF+cg0C9/9evNNIBk8Bx90Y8VEnb0m4pnLF7ExWSxvQUAMfI4+08mJPFzS6k4U239+FI2Nk4bH4/bMdv21aCaSrwfoBeGbZlQa3/v+D8b0Cg+E42kjfnBOSxIHoWhTyQTPrhPv96X7Ye+GJ+Pl/sEmkAxUTYOu80Y2M4mDtup5LEN4/ZtuO9j4nG/9rHy/NhxnE/FxXZ+vahSwRkHzKuQSeBxCuETmBKA4t/6y1+T1Qv9+Xb0i37+/dVXZ+4nrFBzMbF/9IGFkGHt+7W+eBFw7JvGp/9YO8SKBf2kbHEulbyUD8ZG3TF+6IYLagzY05C2FZUXwNzxsbjYzq8XQ0WHFB2DRCK9EEw+xaS9FcAC4EVjtWE7isk1/N7806dnRLU+52JCLPRn1/DBfhmv9ZWCmbrQzvrDNqsp7bhOQeW1oy3W9D92UVlbbltNeAxrHI/EZdva7WJQwSlBQHB2sBDFC+OThPZIWGpQTPYYOByQ7xPHrYD+vI9prH/48fFaX9FKxXhT6xRUsKO2vrrYODAejIEXbso/jllNaOO14HGux+LiebveGSoOxg7ABuuDZFJoz31CRH+pK46+cM4nkH4gJhYLBn2iMiAZ9ONj4D4Th3F4X74f+kZM8GvHjrbY59hSMbHdpiPzz1jyGDt9ogmPYXz05+OCHWOnjY8VNn7sJqTN5lhc3g77O0OFxhyALe32SmKgOM9vTUygHSiOwYbnUr7tOSumFRTt7Dm0sd/+cH4qJn8evjkexkt4OXYmCm2ZLLSzbXEO7XjcjgXn7DKXPN8HfNoY4MtqwD4ZN86nfPh4bUzYnovL2i+CyjpqdZsCEo5W42RckeSxTY11JC5BVSMjgT4iyQu4XWwaiUtQLZa7rINI8sr2PO0tEtfqoZqWqr2zkeTVjD4Sl6CqmZmMviLJy3BXzCQSl6AqJnsZR5Hklekxz0skLkGVp2k1q0jyqgWlRwo1pS7fl6Aqr2n3HgVV9wiUF0BQlde0e4+CqnsEygsgqMpr2r1HQdU9AuUF6AYqDFQfaZB7CenhZ65Sley6qVSV9FQ3wSfXNQWLwK5KVTMzGX1FkpfhrphJJC5BVUz2Mo4iySvTY56XSFyCKk/TalaR5FULKjgtC6qamcnoS1BliCSTmAKCKqaXrDMUEFQZIskkpoCgiukl6wwFBFWGSDKJKSCoYnrJOkMBQZUh0r5N+I4Cvk/Av0cAv/aOxdvtO65d/ZeAakyDXWNCu0hcB/+cCrAQHAwe+wSML9HgexSw5rklAu+zbSR5Y3FMaTDWZu54JK5VQQWInnrm2c2rc1Ii9QDVnAYpXXKOdQsVoJl6TU8PUM1pkANQyqZrqDC9vXn09vZdUHZq7AWqKQ1SwOQc6xoqvLyLIPFFZYAJSy9QTWmQA1DKpmuo/PSHm1Z8eoJqSoMUMDnHuoUKlQk36rhZ5QKgWLl6qFRzGlCX6LpbqPh8hhBB4EcvXtp+G+wBqjkNojDRvluoIABF5QtUeT+Fcz1ANacBIYmuu4ZqSqxeoJrSYNdzgmpEOUE1IkzG4e6gwlQ3998vuGHPscvQd68mkeTtNRDnPBLXwf83jRv7we9GkldzsJG4BFXNzGT0FUlehrtiJpG4BFUx2cs4iiSvTI95XiJxCao8TatZRZJXLajefp6qprA1+hJUNVTurA9B1VnCawxXUNVQubM+BFVnCa8xXEFVQ+XO+hBUnSW8xnC7gQoD1Uca5F5UWQ8/T/77v0GfOhrg4m1R60gFFVSNXTCCqrGEtHiFR2MSVIKq+FQlqASVoErcveueqrELQ5WqsYRE719atBdUgkrTn6a/Os+allRAVSpVKlUqVSpVql2rKCpo7jJr2Wo53lWc1tu1qveqobr1+RfDAw9e2Pxi6IcffXLf9PPSK68NR+++d98x7PO9Cjw35eOHhm4pVLkaRMe5eqguP31l+PLrb+6DB2ICHoID0QDPw48/uVnbbZw7/va74crzLwwezKjYpe2XQBXVIBJ7V1ABrkcuXhoAGj4WKmwDHAAEAe1VvCaodtVAUJ1+00TFsZUKgn72t9vbymOhAkT4UDy7vzaodtGAuuSsu6pUFISQeKjsPrYJGe3XNP1xTHbMGK/dtxpQu5y1oDqtalOCMgGCKu8xi6AyULEy4WrENvd7gopj9hrkVCjaCKpTqHyph7icCnqBakoDApOzFlTmpr6nRwq8UHjhABb7KMVu54BkbQTVKVQQBQL7h584zgSs/Z5qSgMLzdx2l1DNieLPrxEqP8aS+4LKVKoxYQVV3rc+6rd6qMb+748CzK1xb7HUx1wfu55H8nZtu892q4Zqn8K14FtQZUwzLSTqkGIQVIKq+FQlqASVoEr8OKh+8rOxC0OVqrGEHNK901isgkpQafrT9Bd74DdWTfZ5XJVKlUqVSpVKlWrXKosKmrvMWrZajncVp/V2repdHCo41EcaFK1Uuc5kt1yBSEVY3lu+h0hcWdNffteyXKpAJHlL+4q0j8QlqCLKVrCNJK9CONsuInEJqq1sbWxEklcz4khcgqpmZjL6iiQvw10xk0hcgqqY7GUcRZJXpsc8L5G4BFWeptWsIsmrFpT+hnJNqcv3JajKa9q9R0HVPQLlBRBU5TXt3qOg6h6B8gIIqvKahj2+/Orrm3clPHf1xeH7k5Ph4xs3t+9OOP/QheH2nbsbn94u3FGlBiWgGtNgyRAicR38IwXA8s616xu9ANCjFy9tQcLxx564PNw7Pt6ch9iEb4nA+2wbSV4qjjkNUm1yjkXiWhVUXhwvcA9QzWngz+fuC6pTpVCpbGXqESqvQS5E3q57qFChcD+F91IBJC49QTWmAbWIrruHioJRWILVE1RjGvB4dC2ojGK4kccHS49QYdxWAyNNaFNQncqFRwy4p+K3wx6h8hqESDLG3UKV+rZnn1X1ANWcBoaT0Ga3UEElgMMXx/Z6oz6lQYgkY9w1VEaHM5s9VKozgy50QFCNCCmoRoTJONwdVJjm7EPOlEb4BpRjl2pb81gkea3GdfD/TVNT2Bp9CaoaKnfWh6DqLOE1hiuoaqjcWR+CqrOE1xiuoKqhcmd9CKrOEl5juIKqhsqd9SGoOkt4jeEKqhoqd9aHoOos4TWG2w1UGKg+0iD3osr6v7/WXxO9pvhw8bY4nkgFFVSN/dUKQdVYQlq8wqMxCSpBVXyqElSCSlAl7t51T9XYhaFK1VhCovcvLdoLKkGl6U/Tn/7e367VGRU0d5m1bLUc7ypO6+1a1VtQHfC0LKgOOHmtVixBtWeoPvzok80vgD7w4IXh1udfbG6Kj959b/uuhCvPvzAcf/vd5M0yfHg7+IJP/HIpz8EPtnHspVdem/S5TyBLQGU1wnigwdKYVzP9eSCwbwFD8qcAgL0FB8ISHghvtyk6jk/5pN2+1kuhwpgfuXhp+PLrbzYgec12jXu1UCHZSHqOMLAFgC/87KVtNUI7VKmHH39yW/kgOqsVzh86VF4bwAXIME5/LrK/Sqii4lBEQGKhwXF/Jdt9QZV+7LJaqC4/fWX43fu/P3M/NHXFpaCykKFywS+ni7VBhfHYi2ZKq6lzq4UK4hAI3g/N3f/0DBWqsm7U3bdJiEKIUtOfn8pSV1oKKnvleh9rqVQlgYKuq6xUrEwQi/Bgm9DxmF97qPx0532sASqMyX5L9prssr9KqCCEBYSQ4diUSLYN7Gw7u00fhw4Vn8HZi49jW7JeLVQQBUnHfQI+9n5qDAYPFXxQeP8Mi/6t3yWJ2KUtkrdLO7ax+lAnrHGcNrusVw3VmCC453rjraNFwsH3GJxj/ZY+vhSq0vHQX5dQodyXKPmCqoPnVCjdpW86efXZNe+v0N8hT392TCW3V1OpSopyKL40/bnnSoeSuJbjFFSCavEXAw+4oBJUgirxg+v6GfXGLgxVqsYS4qeSQ9wXVIJK05+mv/SDvZYqmiqVKpUqlSqVKtWuVRkVNHeZtWy1HO8qTuvtWtW7OFRwqI80KFqpcp3JbrkCkYqwvLd8D5G4sqa//K5luVSBSPKW9hVpH4lLUEWUrWAbSV6FcLZdROISVFvZ2tiIJK9mxJG4BFXNzGT0FUlehrtiJpG4BFUx2cs4iiSvTI95XiJxCao8TatZRZJXLahhKP/LpDWD770vQdU7AXsYv6Dag6i9uxRUvROwh/ELqj2I2rtLQVWRgO9PTobnrr64eYfCy6++vun53vHx8NgTl7fvVvj4xs1kRN7unWvXN3awxy+Pnn/ownD7zt1k29oHS0DFcZUcWySug3mkQKgIDvcJGKB49OKlM3DQjiDBDhDRD4B76plnz7SrDRP7iySPbeza64Bx48LDOJcskbgOFiqIBxiiYnnI1gaVB8dD5s/n7ncBFa5ATIeAJLJ4kdcO1a46eU27gQpTHz64d8CHU5oXBPusULDjlInja4UKFw+m+TldUlqljnUDlRUMQOXccBMugrVWqAgG4Zq64Gg7te4GKjv9ERbekE8JBIF587p2qKADK/qUJnPnuoAKYKSgyrki7X3G2qGKXGxTYHUBFWBAtSFEtvpYcbyobMeKtjao/BcR6JJzW2A1S213ARUGTkBwb2WF86BYux5u1AESxskPL7wULLnHuoFqSpD3P/hD1gNND+CUzxrnIsmrEQ/7iMR1sA8/OdjUGlPem0dvZz3DElQpBc8eWzVUfvo6O/z8I5wm7NSZ33o/lpHk7SeCtNdIXAdTqdJDXd/RSPJqjj4Sl6CqmZmMviLJy3BXzCQSl6AqJnsZR5Hklekxz0skLkGVp2k1q0jyqgWl36apKXX5vgRVeU279yioukegvACCqrym3XsUVN0jUF4AQVVe0+49CqruESgvQDdQYaD6SIPcSyjr4Wfrr4leU3y4eFscT6SCCqrG/mqFoGosIS1e4dGYBJWgKj5VCSpBJagSd++6p2rswlClaiwh0fuXFu0FlaDS9KfpT3/vb9fqjAqau8xatlqOdxWn9Xat6i2oDnhaFlQHnLxWK5ag2jNUH370yeZ9AA88eGG49fkX25vi42+/G648/8KA8xaOl155bfv+AH/O2h29+97W7pGLl4Yvv/5moE/8sir8WPua2yWhgmaXn76yGd/SMaxm+gMYgAcJpyg2+RYcbBMQu812XPtzAMj2AeDWABWAwsVITTj+XderhYpCAQKIZaECCISB4NnzY2J6yNYAFSsx9BBUbjpFwm0VufPPfw34YLqyUBEiiAl4/P4YUDhuYcT+GqC68cdPNxr4C2ZKh7lzq61UHPgYVLYyARZCxnZ2DVvcP/n7tTVAxXEKKlelIAxEsZWKYpWAir7QhwVLUKUfEHdbqViZItOftxVUgmr7rdBOdwQFVYgVaWztq56gElRbaOz9g932MPlzgMh+QxJUgmoLFeBBteLLU22V8qBgn3b2fgo+vK2Hct/7uHcp1Ye/gJb4Xf09VVQcTHFvvHWUlaw1QRXVacpeULlvkrhibeWaEk9QdTD9pZ4lTUGx6zne3KM/TKO7+lnaruT0tzQW2341lcoOqpdtQeWmmV4Sv89xCipBVXyaFFSCSlAlfnBdP6Pe2IWhStVYQvZ5r1PLt6ASVJr+NP2lH+zVqkI5/ahSqVKpUqlSqVLlVMuUDSpo7jJr2Wo5Tg18Dcda1bs4VHCojzQoWqlyncluuQKRirC8t3wPkbiypr/8rmW5VIFI8pb2FWkfiUtQRZStYBtJXoVwtl1E4hJUW9na2Igkr2bEkbgEVc3MZPQVSV6Gu2ImkbgEVTHZyziKJK9Mj3leInEJqjxNq1lFklctKP0N5ZpSl+9LUJXXtHuPgqp7BMoLIKjKa9q9R0HVPQLlBRBUBTV9+dXXN+83eO7qi8P3JyebD7b5zoN3rl2f7Q0+vB32c3x8fOPm1u78QxeG23fubvrzcc0GsdCgJFQYw1PPPDvcOz5eGNWw+YGCXCfNPFLwQGCfgEGUx564PCDxYwuTb6GCqI9evLQBxG57H/4cfKA/JgP9MhbftvR+KagwJlwcdhxLYo3E1SRUSCauMAgztxA42ONjocK2hcGDO+bbQ3ZoUGHcqM4Yr6A6neKQxFwxANXf7/5jO11aqCAqPlz8Po/7tYfx0KD6863PNnpEdPQa+P2Dr1RM4ptHb2/vcywsfsDYx30YqpK1A0R2H9sWMu+HUwaucsTAhfGgj30vkeTNxSKoDAAQA4klEEy2TbQXtARU9On7E1QruFFPXWFzU9cYVLYyzfkgVFhbW0G1AqhQKfxXYSSZlcsmn9spqPx0N+djzJegWgFUHhBAxkcDTLxf+zY4b9vZbd/WnwNE9lmVoFoBVEg6IeGDSyTWHuc+AaG9r2bYpw97zoOCfdphbf17W/a5j7Vu1Auqmjs1oUsk2SZ9lzAAIb5dYj23HCpUc+OKnI/A3uTDz7nB/ubot9un3XO2Y+cx5b3/wR/GTt93XFAd8PSHacc+Ab8vsz/QDipozbgiFaGmJJG4mqlUNQVqua9I8mqOIxKXoKqZmYy+IsnLcFfMJBKXoComexlHkeSV6THPSyQuQZWnaTWrSPKqBaXfpqkpdfm+BFV5Tbv3KKi6R6C8AIKqvKbdexRU3SNQXgBBVV7T7j0Kqu4RKC9AN1BhoPpIg9xLaPbhZ64j2UkBKiCoqITWxRQQVMWklCMqIKiohNbFFBBUxaSUIyogqKiE1sUUEFTFpJQjKiCoqITWxRQQVMWklCMq8H+cjiMDawtQjgAAAABJRU5ErkJggg=="}}]);