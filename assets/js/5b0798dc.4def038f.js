"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[83053],{3905:(t,n,e)=>{e.d(n,{Zo:()=>k,kt:()=>g});var l=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,l,r=function(t,n){if(null==t)return{};var e,l,r={},u=Object.keys(t);for(l=0;l<u.length;l++)e=u[l],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(l=0;l<u.length;l++)e=u[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=l.createContext({}),i=function(t){var n=l.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},k=function(t){var n=i(t.components);return l.createElement(s.Provider,{value:n},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},f=l.forwardRef((function(t,n){var e=t.components,r=t.mdxType,u=t.originalType,s=t.parentName,k=a(t,["components","mdxType","originalType","parentName"]),c=i(e),f=r,g=c["".concat(s,".").concat(f)]||c[f]||p[f]||u;return e?l.createElement(g,o(o({ref:n},k),{},{components:e})):l.createElement(g,o({ref:n},k))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var u=e.length,o=new Array(u);o[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=t,a[c]="string"==typeof t?t:r,o[1]=a;for(var i=2;i<u;i++)o[i]=e[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,e)}f.displayName="MDXCreateElement"},15561:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>a,toc:()=>i});var l=e(87462),r=(e(67294),e(3905));const u={authors:["Whilconn"],tags:["\u6811","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/25"},o=void 0,a={permalink:"/algorithm/2021/12/25/1609.\u5947\u5076\u6811",source:"@site/algorithm/2021/12/25/1609.\u5947\u5076\u6811.md",title:"1609.\u5947\u5076\u6811",description:"1\u3001\u9898\u5e72",date:"2021-12-25T00:00:00.000Z",formattedDate:"2021\u5e7412\u670825\u65e5",tags:[{label:"\u6811",permalink:"/algorithm/tags/\u6811"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/algorithm/tags/\u4e8c\u53c9\u6811"}],readingTime:4.235,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6811","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],date:"2021/12/25"},prevItem:{title:"1078.Bigram \u5206\u8bcd",permalink:"/algorithm/2021/12/25/1078.Bigram \u5206\u8bcd"},nextItem:{title:"1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee",permalink:"/algorithm/2021/12/24/1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee"}},s={authorsImageUrls:[void 0]},i=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u89e3\u9898\u601d\u8def",id:"2\u89e3\u9898\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u78011-DFS\u9012\u5f52\u5b9e\u73b0",id:"3\u4ee3\u78011-dfs\u9012\u5f52\u5b9e\u73b0",level:2},{value:"4\u3001\u4ee3\u78012-BFS\u9012\u5f52\u5b9e\u73b0",id:"4\u4ee3\u78012-bfs\u9012\u5f52\u5b9e\u73b0",level:2},{value:"5\u3001\u4ee3\u78013-BFS\u975e\u9012\u5f52\u5b9e\u73b0",id:"5\u4ee3\u78013-bfs\u975e\u9012\u5f52\u5b9e\u73b0",level:2},{value:"6\u3001\u6267\u884c\u7ed3\u679c",id:"6\u6267\u884c\u7ed3\u679c",level:2}],k={toc:i};function c(t){let{components:n,...u}=t;return(0,r.kt)("wrapper",(0,l.Z)({},k,u,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u68f5\u4e8c\u53c9\u6811\u6ee1\u8db3\u4e0b\u8ff0\u51e0\u4e2a\u6761\u4ef6\uff0c\u5219\u53ef\u4ee5\u79f0\u4e3a ",(0,r.kt)("strong",null,"\u5947\u5076\u6811")," \uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4e8c\u53c9\u6811\u6839\u8282\u70b9\u6240\u5728\u5c42\u4e0b\u6807\u4e3a ",(0,r.kt)("code",null,"0")," \uff0c\u6839\u7684\u5b50\u8282\u70b9\u6240\u5728\u5c42\u4e0b\u6807\u4e3a ",(0,r.kt)("code",null,"1")," \uff0c\u6839\u7684\u5b59\u8282\u70b9\u6240\u5728\u5c42\u4e0b\u6807\u4e3a ",(0,r.kt)("code",null,"2")," \uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002"),(0,r.kt)("li",null,(0,r.kt)("strong",null,"\u5076\u6570\u4e0b\u6807")," \u5c42\u4e0a\u7684\u6240\u6709\u8282\u70b9\u7684\u503c\u90fd\u662f ",(0,r.kt)("strong",null,"\u5947")," \u6574\u6570\uff0c\u4ece\u5de6\u5230\u53f3\u6309\u987a\u5e8f ",(0,r.kt)("strong",null,"\u4e25\u683c\u9012\u589e")),(0,r.kt)("li",null,(0,r.kt)("strong",null,"\u5947\u6570\u4e0b\u6807")," \u5c42\u4e0a\u7684\u6240\u6709\u8282\u70b9\u7684\u503c\u90fd\u662f ",(0,r.kt)("strong",null,"\u5076")," \u6574\u6570\uff0c\u4ece\u5de6\u5230\u53f3\u6309\u987a\u5e8f ",(0,r.kt)("strong",null,"\u4e25\u683c\u9012\u51cf"))),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9\uff0c\u5982\u679c\u4e8c\u53c9\u6811\u4e3a ",(0,r.kt)("strong",null,"\u5947\u5076\u6811 "),"\uff0c\u5219\u8fd4\u56de ",(0,r.kt)("code",null,"true")," \uff0c\u5426\u5219\u8fd4\u56de ",(0,r.kt)("code",null,"false")," \u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("p",null,(0,r.kt)("strong",null,(0,r.kt)("img",{alt:"",src:e(97708).Z}))),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [1,10,4,3,null,7,9,12,8,6,null,null,2]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6bcf\u4e00\u5c42\u7684\u8282\u70b9\u503c\u5206\u522b\u662f\uff1a",(0,r.kt)("br",null),"0 \u5c42\uff1a[1]",(0,r.kt)("br",null),"1 \u5c42\uff1a[10,4]",(0,r.kt)("br",null),"2 \u5c42\uff1a[3,7,9]",(0,r.kt)("br",null),"3 \u5c42\uff1a[12,8,6,2]",(0,r.kt)("br",null),"\u7531\u4e8e 0 \u5c42\u548c 2 \u5c42\u4e0a\u7684\u8282\u70b9\u503c\u90fd\u662f\u5947\u6570\u4e14\u4e25\u683c\u9012\u589e\uff0c\u800c 1 \u5c42\u548c 3 \u5c42\u4e0a\u7684\u8282\u70b9\u503c\u90fd\u662f\u5076\u6570\u4e14\u4e25\u683c\u9012\u51cf\uff0c\u56e0\u6b64\u8fd9\u662f\u4e00\u68f5\u5947\u5076\u6811\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("p",null,(0,r.kt)("strong",null,(0,r.kt)("img",{alt:"",src:e(61703).Z}))),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [5,4,2,3,3,7]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"\u6bcf\u4e00\u5c42\u7684\u8282\u70b9\u503c\u5206\u522b\u662f\uff1a",(0,r.kt)("br",null),"0 \u5c42\uff1a[5]",(0,r.kt)("br",null),"1 \u5c42\uff1a[4,2]",(0,r.kt)("br",null),"2 \u5c42\uff1a[3,3,7]",(0,r.kt)("br",null),"2 \u5c42\u4e0a\u7684\u8282\u70b9\u503c\u4e0d\u6ee1\u8db3\u4e25\u683c\u9012\u589e\u7684\u6761\u4ef6\uff0c\u6240\u4ee5\u8fd9\u4e0d\u662f\u4e00\u68f5\u5947\u5076\u6811\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"",src:e(58174).Z})),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [5,9,1,3,5,7]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"false",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),"1 \u5c42\u4e0a\u7684\u8282\u70b9\u503c\u5e94\u4e3a\u5076\u6570\u3002",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 4\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [1]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),"root = [11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17]",(0,r.kt)("br",null),(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"true",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u6811\u4e2d\u8282\u70b9\u6570\u5728\u8303\u56f4 ",(0,r.kt)("code",null,"[1, 10",(0,r.kt)("sup",null,"5"),"]")," \u5185"),(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= Node.val <= 10",(0,r.kt)("sup",null,"6")))),(0,r.kt)("h2",{id:"2\u89e3\u9898\u601d\u8def"},"2\u3001\u89e3\u9898\u601d\u8def"),(0,r.kt)("p",null,"\u4f7f\u7528\u5e7f\u5ea6\u4f18\u5148\u904d\u5386(BFS)\u6216\u6df1\u5ea6\u4f18\u5148\u904d\u5386(DFS)\uff0c\u904d\u5386\u6811\u4e0a\u6240\u6709\u8282\u70b9\u5e76\u5224\u65ad\u5176\u662f\u5426\u7b26\u5408\u5947\u5076\u6811\u7684\u7279\u6027\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e7f\u5ea6\u4f18\u5148\u904d\u5386(BFS)\u65f6\uff0c\u6bd4\u8f83\u65b9\u4fbf\u505a\u5230\u6309\u5c42\u904d\u5386\u3001\u83b7\u53d6\u5c42\u7ea7\u548c\u5144\u5f1f\u8282\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6df1\u5ea6\u4f18\u5148\u904d\u5386(DFS)\u65f6\uff0c\u9700\u8981\u53e6\u5916\u4f7f\u7528\u4e00\u4e2a\u6570\u7ec4\u5b58\u50a8\u6bcf\u5c42\u4e0a\u4e00\u6b21\u904d\u5386\u5230\u7684\u8282\u70b9\uff0c\u7528\u4e8e\u5224\u65ad\u5144\u5f1f\u8282\u70b9\u7684\u5355\u8c03\u6027")),(0,r.kt)("h2",{id:"3\u4ee3\u78011-dfs\u9012\u5f52\u5b9e\u73b0"},"3\u3001\u4ee3\u78011-DFS\u9012\u5f52\u5b9e\u73b0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a212 ms\t\u5185\u5b58\u6d88\u8017\uff1a82.4 MB")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var isEvenOddTree = function (root) {\n  const nums = [];\n  function dfs(node, i) {\n    if (!node) return true;\n    if (i % 2 && (node.val % 2 || node.val >= nums[i])) return false;\n    if (!(i % 2) && (!(node.val % 2) || node.val <= nums[i])) return false;\n    nums[i] = node.val;\n    return dfs(node.left, i + 1) && dfs(node.right, i + 1);\n  }\n  return dfs(root, 0);\n};\n")),(0,r.kt)("h2",{id:"4\u4ee3\u78012-bfs\u9012\u5f52\u5b9e\u73b0"},"4\u3001\u4ee3\u78012-BFS\u9012\u5f52\u5b9e\u73b0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a308 ms\t\u5185\u5b58\u6d88\u8017\uff1a98 MB")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var isEvenOddTree = function (root) {\n  function bfs(nodes, i) {\n    const nextArr = [];\n    for (let j = 0; j < nodes.length; j++) {\n      if (nodes[j].left) nextArr.push(nodes[j].left);\n      if (nodes[j].right) nextArr.push(nodes[j].right);\n\n      const m1 = i % 2, m2 = nodes[j].val % 2;\n      if (m1 && (m2 || (j && nodes[j].val >= nodes[j - 1].val))) return false;\n      if (!m1 && (!m2 || (j && nodes[j].val <= nodes[j - 1].val))) return false;\n    }\n    return !nextArr.length ? true : bfs(nextArr, i + 1);\n  }\n  return bfs([root], 0);\n};\n")),(0,r.kt)("h2",{id:"5\u4ee3\u78013-bfs\u975e\u9012\u5f52\u5b9e\u73b0"},"5\u3001\u4ee3\u78013-BFS\u975e\u9012\u5f52\u5b9e\u73b0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u7528\u65f6\uff1a276 ms\t\u5185\u5b58\u6d88\u8017\uff1a91.5 MB")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var isEvenOddTree = function (root) {\n  const queue = [[root]];\n  for (let i = 0; i < queue.length; i++) {\n    const nextArr = [];\n\n    for (let j = 0; j < queue[i].length; j++) {\n      if (queue[i][j].left) nextArr.push(queue[i][j].left);\n      if (queue[i][j].right) nextArr.push(queue[i][j].right);\n\n      const m1 = i % 2, m2 = queue[i][j].val % 2;\n      if (m1 && (m2 || (j && queue[i][j].val >= queue[i][j - 1].val))) return false;\n      if (!m1 && (!m2 || (j && queue[i][j].val <= queue[i][j - 1].val))) return false;\n    }\n\n    if (nextArr.length) queue.push(nextArr);\n  }\n\n  return true;\n};\n")),(0,r.kt)("h2",{id:"6\u6267\u884c\u7ed3\u679c"},"6\u3001\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1.png",src:e(91161).Z,width:"1348",height:"494"})))}c.isMDXComponent=!0},97708:(t,n,e)=>{e.d(n,{Z:()=>l});const l=e.p+"assets/images/sample_1_1966-e89dac3bb67255ffce28cd3aea61ccd4.png"},58174:(t,n,e)=>{e.d(n,{Z:()=>l});const l=e.p+"assets/images/sample_1_333_1966-60ac425f908114c8c79ec1b3b1369595.png"},61703:(t,n,e)=>{e.d(n,{Z:()=>l});const l=e.p+"assets/images/sample_2_1966-d1b47d1de208f8a7ef03811989af45ef.png"},91161:(t,n,e)=>{e.d(n,{Z:()=>l});const l=e.p+"assets/images/1640419023-nNywjL-1-4208681aa07202db61462198ec6022ac.png"}}]);