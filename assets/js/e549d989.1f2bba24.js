"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[80648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,s=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return n?r.createElement(s,o(o({ref:t},c),{},{components:n})):r.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},95372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={authors:["Whilconn"],tags:["\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u6570\u7ec4","\u77e9\u9635"],date:"2021/12/18"},o=void 0,i={permalink:"/algorithm/419.\u7532\u677f\u4e0a\u7684\u6218\u8230",source:"@site/algorithm/419.\u7532\u677f\u4e0a\u7684\u6218\u8230.md",title:"419.\u7532\u677f\u4e0a\u7684\u6218\u8230",description:"1\u3001\u9898\u5e72",date:"2021-12-18T00:00:00.000Z",formattedDate:"2021\u5e7412\u670818\u65e5",tags:[{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/algorithm/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u6570\u7ec4",permalink:"/algorithm/tags/\u6570\u7ec4"},{label:"\u77e9\u9635",permalink:"/algorithm/tags/\u77e9\u9635"}],readingTime:2.92,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u6570\u7ec4","\u77e9\u9635"],date:"2021/12/18"},prevItem:{title:"\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c",permalink:"/algorithm/\u5251\u6307 Offer II 049.\u4ece\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u7684\u8def\u5f84\u6570\u5b57\u4e4b\u548c"},nextItem:{title:"\u5251\u6307 Offer II 036.\u540e\u7f00\u8868\u8fbe\u5f0f",permalink:"/algorithm/\u5251\u6307 Offer II 036.\u540e\u7f00\u8868\u8fbe\u5f0f"}},p={authorsImageUrls:[void 0]},u=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u89e3\u6cd51-\u5bfb\u627e\u8239\u5934",id:"\u89e3\u6cd51-\u5bfb\u627e\u8239\u5934",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u89e3\u6cd52-DFS",id:"\u89e3\u6cd52-dfs",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-1",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5927\u5c0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"m x n")," \u7684\u77e9\u9635 ",(0,a.kt)("inlineCode",{parentName:"p"},"board")," \u8868\u793a\u7532\u677f\uff0c\u5176\u4e2d\uff0c\u6bcf\u4e2a\u5355\u5143\u683c\u53ef\u4ee5\u662f\u4e00\u8258\u6218\u8230 ",(0,a.kt)("inlineCode",{parentName:"p"},"'X'")," \u6216\u8005\u662f\u4e00\u4e2a\u7a7a\u4f4d ",(0,a.kt)("inlineCode",{parentName:"p"},"'.'")," \uff0c\u8fd4\u56de\u5728\u7532\u677f ",(0,a.kt)("inlineCode",{parentName:"p"},"board")," \u4e0a\u653e\u7f6e\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u6218\u8230")," \u7684\u6570\u91cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6218\u8230")," \u53ea\u80fd\u6c34\u5e73\u6216\u8005\u5782\u76f4\u653e\u7f6e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"board")," \u4e0a\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6218\u8230\u53ea\u80fd\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"1 x k"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u5217\uff09\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"k x 1"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u5217\uff09\u7684\u5f62\u72b6\u5efa\u9020\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u53ef\u4ee5\u662f\u4efb\u610f\u5927\u5c0f\u3002\u4e24\u8258\u6218\u8230\u4e4b\u95f4\u81f3\u5c11\u6709\u4e00\u4e2a\u6c34\u5e73\u6216\u5782\u76f4\u7684\u7a7a\u4f4d\u5206\u9694 \uff08\u5373\u6ca1\u6709\u76f8\u90bb\u7684\u6218\u8230\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/04/10/battelship-grid.jpg",alt:null}),(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," board = ","[","[",'"X",".",".","X"',"]",",","[",'".",".",".","X"',"]",",","[",'".",".",".","X"',"]","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 2",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165\uff1a")," board = ","[","[",'"."',"]","]",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u51fa\uff1a")," 0",(0,a.kt)("br",null))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m == board.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == board[i].length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 200")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"board[i][j]")," \u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"'.'")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"'X'"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fdb\u9636\uff1a"),"\u4f60\u53ef\u4ee5\u5b9e\u73b0\u4e00\u6b21\u626b\u63cf\u7b97\u6cd5\uff0c\u5e76\u53ea\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"O(1)")," \u989d\u5916\u7a7a\u95f4\uff0c\u5e76\u4e14\u4e0d\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"board")," \u7684\u503c\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5417\uff1f"),(0,a.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode-cn.com/1639795740-vkofqu-1.png",alt:"1.png"})),(0,a.kt)("h3",{id:"\u89e3\u6cd51-\u5bfb\u627e\u8239\u5934"},"\u89e3\u6cd51-\u5bfb\u627e\u8239\u5934"),(0,a.kt)("p",null,"\u7531\u4e8e\u6218\u8230\u53ea\u80fd\u6c34\u5e73\u6216\u8005\u5782\u76f4\u653e\u7f6e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"board"),"\u4e0a\uff0c\u90a3\u5c31\u610f\u5473\u7740\u8239\u5934\u4f4d\u7f6e\u7684\u5de6\u8fb9\u548c\u4e0a\u8fb9\u5fc5\u7136\u662f\u7a7a\u4f4d\u3002\u56e0\u6b64\u53ea\u8981\u53cc\u5faa\u73af\u904d\u5386\u6574\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"board"),"\u77e9\u9635\uff0c\u9047\u5230\u8239\u5934\u5219\u6218\u8230\u6570\u91cf\u52a0\u4e00\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u540c\u7406\u53ef\u4ee5\u5bfb\u627e\u8239\u5c3e\uff0c\u8239\u5c3e\u7684\u53f3\u8fb9\u548c\u4e0b\u8fb9\u5fc5\u7136\u662f\u7a7a\u4f4d\u3002")),(0,a.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("p",null,"\u4e00\u884c\u5f3a\u8feb\u75c7\u5199\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var countBattleships = function (board) {\n    return board.reduce((acc, cur, i) => acc + cur.filter((c, j) => c === 'X' && board[i][j - 1] !== 'X' && (!i || board[i - 1][j] !== 'X')).length, 0);\n};\n")),(0,a.kt)("p",null,"\u5e38\u89c4\u5199\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var countBattleships = function (board) {\n    let res = 0;\n\n    for (let i = 0; i < board.length; i++) {\n        for (let j = 0; j < board[0].length; j++) {\n            if (board[i][j] == 'X' && board[i][j - 1] !== 'X' && (!i || board[i - 1][j] !== 'X')) res++;\n        }\n    }\n\n    return res;\n};\n")),(0,a.kt)("h3",{id:"\u89e3\u6cd52-dfs"},"\u89e3\u6cd52-DFS"),(0,a.kt)("p",null,"\u53cc\u5faa\u73af\u904d\u5386\u6574\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"board"),"\u77e9\u9635\uff0c\u9047\u5230\u6218\u8230\u5219\u6218\u8230\u6570\u91cf\u52a0\u4e00\uff0c\u7136\u540e\u6df1\u5ea6\u904d\u5386\u6218\u8230\u6240\u5360\u4f4d\u7f6e\uff0c\u628a\u904d\u5386\u8fc7\u7684\u6218\u8230\u4f4d\u7f6e\u4fee\u6539\u6210\u7a7a\u4f4d\u907f\u514d\u91cd\u590d\u904d\u5386\u3002"),(0,a.kt)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var countBattleships = function (board) {\n    let res = 0;\n    function dfs(i, j) {\n        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== 'X') return;\n\n        board[i][j] = '.';\n        dfs(i + 1, j);\n        dfs(i - 1, j);\n        dfs(i, j + 1);\n        dfs(i, j - 1);\n    }\n\n    for (let i = 0; i < board.length; i++) {\n        for (let j = 0; j < board[0].length; j++) {\n            if (board[i][j] === 'X') dfs(i, j), res++;\n        }\n    }\n\n    return res;\n};\n")))}d.isMDXComponent=!0}}]);