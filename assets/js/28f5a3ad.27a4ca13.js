"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[28947],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var i=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=i.createContext({}),m=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=m(n.components);return i.createElement(s.Provider,{value:e},n.children)},u="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=m(t),h=a,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return t?i.createElement(d,o(o({ref:e},p),{},{components:t})):i.createElement(d,o({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[u]="string"==typeof n?n:a,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},74424:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=t(87462),a=(t(67294),t(3905));const r={authors:["Whilconn"],tags:["\u8bbe\u8ba1","\u6709\u5e8f\u96c6\u5408","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/12/30"},o=void 0,l={permalink:"/algorithm/855.\u8003\u573a\u5c31\u5ea7",source:"@site/algorithm/855.\u8003\u573a\u5c31\u5ea7.md",title:"855.\u8003\u573a\u5c31\u5ea7",description:"1\u3001\u9898\u5e72",date:"2022-12-30T00:00:00.000Z",formattedDate:"2022\u5e7412\u670830\u65e5",tags:[{label:"\u8bbe\u8ba1",permalink:"/algorithm/tags/\u8bbe\u8ba1"},{label:"\u6709\u5e8f\u96c6\u5408",permalink:"/algorithm/tags/\u6709\u5e8f\u96c6\u5408"},{label:"\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",permalink:"/algorithm/tags/\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"}],readingTime:3.08,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8bbe\u8ba1","\u6709\u5e8f\u96c6\u5408","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2022/12/30"},prevItem:{title:"2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570",permalink:"/algorithm/2037.\u4f7f\u6bcf\u4f4d\u5b66\u751f\u90fd\u6709\u5ea7\u4f4d\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570"},nextItem:{title:"2032.\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c",permalink:"/algorithm/2032.\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c"}},s={authorsImageUrls:[void 0]},m=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u4ee3\u7801",id:"2\u4ee3\u7801",level:2},{value:"3\u3001\u6267\u884c\u7ed3\u679c",id:"3\u6267\u884c\u7ed3\u679c",level:2}],p={toc:m};function u(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u5728\u8003\u573a\u91cc\uff0c\u4e00\u6392\u6709\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"N"),"\xa0\u4e2a\u5ea7\u4f4d\uff0c\u5206\u522b\u7f16\u53f7\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"0, 1, 2, ..., N-1"),"\xa0\u3002"),(0,a.kt)("p",null,"\u5f53\u5b66\u751f\u8fdb\u5165\u8003\u573a\u540e\uff0c\u4ed6\u5fc5\u987b\u5750\u5728\u80fd\u591f\u4f7f\u4ed6\u4e0e\u79bb\u4ed6\u6700\u8fd1\u7684\u4eba\u4e4b\u95f4\u7684\u8ddd\u79bb\u8fbe\u5230\u6700\u5927\u5316\u7684\u5ea7\u4f4d\u4e0a\u3002\u5982\u679c\u6709\u591a\u4e2a\u8fd9\u6837\u7684\u5ea7\u4f4d\uff0c\u4ed6\u4f1a\u5750\u5728\u7f16\u53f7\u6700\u5c0f\u7684\u5ea7\u4f4d\u4e0a\u3002(\u53e6\u5916\uff0c\u5982\u679c\u8003\u573a\u91cc\u6ca1\u6709\u4eba\uff0c\u90a3\u4e48\u5b66\u751f\u5c31\u5750\u5728 0 \u53f7\u5ea7\u4f4d\u4e0a\u3002)"),(0,a.kt)("p",null,"\u8fd4\u56de\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ExamRoom(int N)"),"\xa0\u7c7b\uff0c\u5b83\u6709\u4e24\u4e2a\u516c\u5f00\u7684\u51fd\u6570\uff1a\u5176\u4e2d\uff0c\u51fd\u6570\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ExamRoom.seat()"),"\xa0\u4f1a\u8fd4\u56de\u4e00\u4e2a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"int"),"\xa0\uff08\u6574\u578b\u6570\u636e\uff09\uff0c\u4ee3\u8868\u5b66\u751f\u5750\u7684\u4f4d\u7f6e\uff1b\u51fd\u6570\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ExamRoom.leave(int p)"),"\xa0\u4ee3\u8868\u5750\u5728\u5ea7\u4f4d ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," \u4e0a\u7684\u5b66\u751f\u73b0\u5728\u79bb\u5f00\u4e86\u8003\u573a\u3002\u6bcf\u6b21\u8c03\u7528\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ExamRoom.leave(p)"),"\xa0\u65f6\u90fd\u4fdd\u8bc1\u6709\u5b66\u751f\u5750\u5728\u5ea7\u4f4d\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"p"),"\xa0\u4e0a\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a"),"[",'"ExamRoom","seat","seat","seat","seat","leave","seat"',"]",", ","[","[","10","]",",","[","]",",","[","]",",","[","]",",","[","]",",","[","4","]",",","[","]","]","\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a"),"[","null,0,9,4,2,null,5","]","\n",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u91ca\uff1a"),"\nExamRoom(10) -> null\nseat() -> 0\uff0c\u6ca1\u6709\u4eba\u5728\u8003\u573a\u91cc\uff0c\u90a3\u4e48\u5b66\u751f\u5750\u5728 0 \u53f7\u5ea7\u4f4d\u4e0a\u3002\nseat() -> 9\uff0c\u5b66\u751f\u6700\u540e\u5750\u5728 9 \u53f7\u5ea7\u4f4d\u4e0a\u3002\nseat() -> 4\uff0c\u5b66\u751f\u6700\u540e\u5750\u5728 4 \u53f7\u5ea7\u4f4d\u4e0a\u3002\nseat() -> 2\uff0c\u5b66\u751f\u6700\u540e\u5750\u5728 2 \u53f7\u5ea7\u4f4d\u4e0a\u3002\nleave(4) -> null\nseat() -> 5\uff0c\u5b66\u751f\u6700\u540e\u5750\u5728 5 \u53f7\u5ea7\u4f4d\u4e0a\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= N <= 10^9")),(0,a.kt)("li",{parentName:"ol"},"\u5728\u6240\u6709\u7684\u6d4b\u8bd5\u6837\u4f8b\u4e2d\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"ExamRoom.seat()"),"\xa0\u548c\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"ExamRoom.leave()"),"\xa0\u6700\u591a\u88ab\u8c03\u7528\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"10^4"),"\xa0\u6b21\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1\u5728\u8c03\u7528\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"ExamRoom.leave(p)"),"\xa0\u65f6\u6709\u5b66\u751f\u6b63\u5750\u5728\u5ea7\u4f4d ",(0,a.kt)("inlineCode",{parentName:"li"},"p")," \u4e0a\u3002")),(0,a.kt)("h2",{id:"2\u4ee3\u7801"},"2\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript",metastring:"[]","[]":!0},"class ExamRoom {\n    n = -1;\n    min = Infinity;\n    max = -Infinity;\n    set = new Set<number>();\n    pq = new PriorityQueue({\n        compare: (a: [number, number], b: [number, number]): number => {\n            const da = (a[1] - a[0]) / 2 >> 0, db = (b[1] - b[0]) / 2 >> 0;\n            return da !== db ? db - da : a[0] - b[0];\n        }\n    });\n\n    constructor(n: number) {\n        this.n = n;\n    }\n\n    seat(): number {\n        let i = 0;\n        if (this.set.size) {\n            let found = false;\n            while (!found && this.pq.size()) {\n                const [n1, n2] = this.pq.dequeue();\n                if (n2 - n1 < 1 || !this.set.has(n1) || !this.set.has(n2)) continue;\n\n                const [m1, m2] = this.pq.front() || [];\n                if (n1 === m1 && n2 === m2) continue;\n\n                i = (n1 + n2) / 2 >> 0;\n                if (this.set.has(i) && this.set.has(i + 1)) continue;\n\n                if ((n2 - n1) / 2 >> 0 <= this.min || (n2 - n1) / 2 >> 0 < this.n - 1 - this.max) {\n                    this.pq.enqueue([n1, n2]);\n                    break;\n                }\n\n                found = true;\n                if (this.set.has(i)) i = i + 1;\n\n                this.pq.enqueue([n1, i]);\n                this.pq.enqueue([i, n2]);\n            }\n\n            if (!found) {\n                if (this.n - 1 - this.max > this.min) {\n                    i = this.n - 1;\n                    this.pq.enqueue([this.max, i]);\n                } else {\n                    i = 0;\n                    this.pq.enqueue([i, this.min]);\n                }\n            }\n        }\n\n        this.set.add(i);\n        if (i < this.min) this.min = i;\n        if (i > this.max) this.max = i;\n        return i;\n    }\n\n    leave(p: number): void {\n        this.set.delete(p);\n        const nums = [...this.set].sort((a, b) => a - b);\n\n        this.min = !nums.length ? Infinity : nums[0];\n        this.max = !nums.length ? -Infinity : nums[nums.length - 1];\n\n        const i = nums.findIndex(n => n > p);\n        if (i > 0) this.pq.enqueue([nums[i - 1], nums[i]]);\n    }\n}\n")),(0,a.kt)("h2",{id:"3\u6267\u884c\u7ed3\u679c"},"3\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1672415896-YkoEXX-image.png",alt:"image.png"})))}u.isMDXComponent=!0}}]);