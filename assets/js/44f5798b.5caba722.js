"use strict";(self.webpackChunkwhilconn_github_io=self.webpackChunkwhilconn_github_io||[]).push([[2900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={authors:["Whilconn"],tags:["\u8bbe\u8ba1","\u961f\u5217","\u6570\u636e\u6d41","\u6709\u5e8f\u96c6\u5408","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2023/1/18"},l=void 0,i={permalink:"/algorithm/2023/01/18/1825.\u6c42\u51fa MK \u5e73\u5747\u503c",source:"@site/algorithm/2023/01/18/1825.\u6c42\u51fa MK \u5e73\u5747\u503c.md",title:"1825.\u6c42\u51fa MK \u5e73\u5747\u503c",description:"1\u3001\u9898\u5e72",date:"2023-01-18T00:00:00.000Z",formattedDate:"2023\u5e741\u670818\u65e5",tags:[{label:"\u8bbe\u8ba1",permalink:"/algorithm/tags/\u8bbe\u8ba1"},{label:"\u961f\u5217",permalink:"/algorithm/tags/\u961f\u5217"},{label:"\u6570\u636e\u6d41",permalink:"/algorithm/tags/\u6570\u636e\u6d41"},{label:"\u6709\u5e8f\u96c6\u5408",permalink:"/algorithm/tags/\u6709\u5e8f\u96c6\u5408"},{label:"\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",permalink:"/algorithm/tags/\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"}],readingTime:5.395,hasTruncateMarker:!1,authors:[{name:"Whilconn",url:"https://github.com/Whilconn",key:"Whilconn"}],frontMatter:{authors:["Whilconn"],tags:["\u8bbe\u8ba1","\u961f\u5217","\u6570\u636e\u6d41","\u6709\u5e8f\u96c6\u5408","\u5806\uff08\u4f18\u5148\u961f\u5217\uff09"],date:"2023/1/18"},prevItem:{title:"2299.\u5f3a\u5bc6\u7801\u68c0\u9a8c\u5668 II",permalink:"/algorithm/2023/01/19/2299.\u5f3a\u5bc6\u7801\u68c0\u9a8c\u5668 II"},nextItem:{title:"1814.\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee",permalink:"/algorithm/2023/01/17/1814.\u7edf\u8ba1\u4e00\u4e2a\u6570\u7ec4\u4e2d\u597d\u5bf9\u5b50\u7684\u6570\u76ee"}},s={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u9898\u5e72",id:"1\u9898\u5e72",level:2},{value:"2\u3001\u601d\u8def",id:"2\u601d\u8def",level:2},{value:"3\u3001\u4ee3\u7801",id:"3\u4ee3\u7801",level:2},{value:"4\u3001\u590d\u6742\u5ea6",id:"4\u590d\u6742\u5ea6",level:2},{value:"5\u3001\u6267\u884c\u7ed3\u679c",id:"5\u6267\u884c\u7ed3\u679c",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u9898\u5e72"},"1\u3001\u9898\u5e72"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570\xa0",(0,a.kt)("code",null,"m"),"\xa0\u548c\xa0",(0,a.kt)("code",null,"k"),"\xa0\uff0c\u4ee5\u53ca\u6570\u636e\u6d41\u5f62\u5f0f\u7684\u82e5\u5e72\u6574\u6570\u3002\u4f60\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u8ba1\u7b97\u8fd9\u4e2a\u6570\u636e\u6d41\u7684 ",(0,a.kt)("b",null,"MK \u5e73\u5747\u503c"),"\xa0\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"MK \u5e73\u5747\u503c"),"\xa0\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u8ba1\u7b97\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",null,"\u5982\u679c\u6570\u636e\u6d41\u4e2d\u7684\u6574\u6570\u5c11\u4e8e ",(0,a.kt)("code",null,"m"),"\xa0\u4e2a\uff0c",(0,a.kt)("strong",null,"MK \u5e73\u5747\u503c"),"\xa0\u4e3a ",(0,a.kt)("code",null,"-1"),"\xa0\uff0c\u5426\u5219\u5c06\u6570\u636e\u6d41\u4e2d\u6700\u540e ",(0,a.kt)("code",null,"m"),"\xa0\u4e2a\u5143\u7d20\u62f7\u8d1d\u5230\u4e00\u4e2a\u72ec\u7acb\u7684\u5bb9\u5668\u4e2d\u3002"),(0,a.kt)("li",null,"\u4ece\u8fd9\u4e2a\u5bb9\u5668\u4e2d\u5220\u9664\u6700\u5c0f\u7684 ",(0,a.kt)("code",null,"k"),"\xa0\u4e2a\u6570\u548c\u6700\u5927\u7684 ",(0,a.kt)("code",null,"k"),"\xa0\u4e2a\u6570\u3002"),(0,a.kt)("li",null,"\u8ba1\u7b97\u5269\u4f59\u5143\u7d20\u7684\u5e73\u5747\u503c\uff0c\u5e76 ",(0,a.kt)("strong",null,"\u5411\u4e0b\u53d6\u6574\u5230\u6700\u8fd1\u7684\u6574\u6570"),"\xa0\u3002")),(0,a.kt)("p",null,"\u8bf7\u4f60\u5b9e\u73b0\xa0",(0,a.kt)("code",null,"MKAverage"),"\xa0\u7c7b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"MKAverage(int m, int k)"),"\xa0\u7528\u4e00\u4e2a\u7a7a\u7684\u6570\u636e\u6d41\u548c\u4e24\u4e2a\u6574\u6570 ",(0,a.kt)("code",null,"m"),"\xa0\u548c ",(0,a.kt)("code",null,"k"),"\xa0\u521d\u59cb\u5316\xa0",(0,a.kt)("strong",null,"MKAverage"),"\xa0\u5bf9\u8c61\u3002"),(0,a.kt)("li",null,(0,a.kt)("code",null,"void addElement(int num)"),"\xa0\u5f80\u6570\u636e\u6d41\u4e2d\u63d2\u5165\u4e00\u4e2a\u65b0\u7684\u5143\u7d20\xa0",(0,a.kt)("code",null,"num"),"\xa0\u3002"),(0,a.kt)("li",null,(0,a.kt)("code",null,"int calculateMKAverage()"),"\xa0\u5bf9\u5f53\u524d\u7684\u6570\u636e\u6d41\u8ba1\u7b97\u5e76\u8fd4\u56de ",(0,a.kt)("strong",null,"MK \u5e73\u5747\u6570"),"\xa0\uff0c\u7ed3\u679c\u9700 ",(0,a.kt)("strong",null,"\u5411\u4e0b\u53d6\u6574\u5230\u6700\u8fd1\u7684\u6574\u6570")," \u3002")),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("strong",null,"\u8f93\u5165\uff1a"),(0,a.kt)("br",null),'["MKAverage", "addElement", "addElement", "calculateMKAverage", "addElement", "calculateMKAverage", "addElement", "addElement", "addElement", "calculateMKAverage"]',(0,a.kt)("br",null),"[[3, 1], [3], [1], [], [10], [], [5], [5], [5], []]",(0,a.kt)("br",null),(0,a.kt)("strong",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("br",null),"[null, null, null, -1, null, 3, null, null, null, 5]",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"\u89e3\u91ca\uff1a"),(0,a.kt)("br",null),"MKAverage obj = new MKAverage(3, 1); ",(0,a.kt)("br",null),"obj.addElement(3);        // \u5f53\u524d\u5143\u7d20\u4e3a [3]",(0,a.kt)("br",null),"obj.addElement(1);        // \u5f53\u524d\u5143\u7d20\u4e3a [3,1]",(0,a.kt)("br",null),"obj.calculateMKAverage(); // \u8fd4\u56de -1 \uff0c\u56e0\u4e3a m = 3 \uff0c\u4f46\u6570\u636e\u6d41\u4e2d\u53ea\u6709 2 \u4e2a\u5143\u7d20",(0,a.kt)("br",null),"obj.addElement(10);       // \u5f53\u524d\u5143\u7d20\u4e3a [3,1,10]",(0,a.kt)("br",null),"obj.calculateMKAverage(); // \u6700\u540e 3 \u4e2a\u5143\u7d20\u4e3a [3,1,10]",(0,a.kt)("br",null),"                          // \u5220\u9664\u6700\u5c0f\u4ee5\u53ca\u6700\u5927\u7684 1 \u4e2a\u5143\u7d20\u540e\uff0c\u5bb9\u5668\u4e3a [3]",(0,a.kt)("br",null),"                          // [3] \u7684\u5e73\u5747\u503c\u7b49\u4e8e 3/1 = 3 \uff0c\u6545\u8fd4\u56de 3",(0,a.kt)("br",null),"obj.addElement(5);        // \u5f53\u524d\u5143\u7d20\u4e3a [3,1,10,5]",(0,a.kt)("br",null),"obj.addElement(5);        // \u5f53\u524d\u5143\u7d20\u4e3a [3,1,10,5,5]",(0,a.kt)("br",null),"obj.addElement(5);        // \u5f53\u524d\u5143\u7d20\u4e3a [3,1,10,5,5,5]",(0,a.kt)("br",null),"obj.calculateMKAverage(); // \u6700\u540e 3 \u4e2a\u5143\u7d20\u4e3a [5,5,5]",(0,a.kt)("br",null),"                          // \u5220\u9664\u6700\u5c0f\u4ee5\u53ca\u6700\u5927\u7684 1 \u4e2a\u5143\u7d20\u540e\uff0c\u5bb9\u5668\u4e3a [5]",(0,a.kt)("br",null),"                          // [5] \u7684\u5e73\u5747\u503c\u7b49\u4e8e 5/1 = 5 \uff0c\u6545\u8fd4\u56de 5",(0,a.kt)("br",null)),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,(0,a.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"3 <= m <= 10",(0,a.kt)("sup",null,"5"))),(0,a.kt)("li",null,(0,a.kt)("code",null,"1 <= k*2 < m")),(0,a.kt)("li",null,(0,a.kt)("code",null,"1 <= num <= 10",(0,a.kt)("sup",null,"5"))),(0,a.kt)("li",null,(0,a.kt)("code",null,"addElement")," \u4e0e\xa0",(0,a.kt)("code",null,"calculateMKAverage"),"\xa0\u603b\u64cd\u4f5c\u6b21\u6570\u4e0d\u8d85\u8fc7 ",(0,a.kt)("code",null,"10",(0,a.kt)("sup",null,"5"))," \u6b21\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd910\u5206\u771f\u7684\u5341\u5206\u96be\u62ff\uff0c\u4e34\u573a\u80af\u5b9a\u5199\u4e0d\u51fa\u6765\uff0c\u6ca1\u6709\u7b2c\u4e09\u65b9\u5e93\u80af\u5b9a\u4e5f\u5199\u4e0d\u51fa\u6765")),(0,a.kt)("h2",{id:"2\u601d\u8def"},"2\u3001\u601d\u8def"),(0,a.kt)("p",null,"3\u68f5\u4e8c\u53c9\u641c\u7d22\u6811\u4fdd\u5b58\u6700\u8fd1 ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," \u4e2a\u6570\u5b57\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"trees[0]")," \u4fdd\u5b58\u6700\u5c0f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u6570\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"trees[1]")," \u4fdd\u5b58\u4e2d\u95f4\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"m - 2*k")," \u4e2a\u6570\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"trees[2]")," \u4fdd\u5b58\u6700\u5927\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," \u4e2a\u6570\u3002\u4fdd\u5b58\u4e2d\u95f4\u6570\u5b57\u4e4b\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"sum"),"\uff0c\u5e76\u5728\u6dfb\u52a0\u5143\u7d20\u65f6\u66f4\u65b0\uff0c\u4ee5\u4fbf\u5feb\u901f\u8ba1\u7b97\u5e73\u5747\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addElement")," \u65f6\u5148\u8fdb\u884c\u79fb\u9664\u64cd\u4f5c\uff0c\u518d\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u82e5\u5f53\u524d\u5df2\u8d85\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"m")," \u4e2a\u6570\uff0c\u5219\u4ece\u6811\u4e2d\u79fb\u9664\u5012\u6570\u7b2c ",(0,a.kt)("inlineCode",{parentName:"li"},"m+1")," \u4e2a\u6570\uff0c\u7136\u540e\u5c06\u5904\u4e8e\u540e\u65b9\u6811\u4e2d\u6700\u5c0f\u7684\u6570\u5b57\u5f80\u524d\u65b9\u7684\u6811\u586b\u5145"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5f53\u524d\u6570\u5b57\u63d2\u5165\u7b2c\u4e00\u68f5\u6811\uff0c\u7136\u540e\u5c06\u524d\u65b9\u6811\u4e2d\u591a\u4f59\u7684\u6700\u5927\u6570\u5b57\u5f80\u540e\u65b9\u7684\u6811\u586b\u5145")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"calculateMKAverage")," \u76f4\u63a5\u4f7f\u7528\u4e2d\u95f4\u6570\u5b57\u4e4b\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"sum")," \u6c42\u5e73\u5747"),(0,a.kt)("h2",{id:"3\u4ee3\u7801"},"3\u3001\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"[]","[]":!0},"var MKAverage = function (m, k) {\n    this.m = m;\n    this.k = k;\n\n    this.nums = [];\n    this.trees = [new AVLTree(), new AVLTree(), new AVLTree()];\n    this.sum = 0;\n};\n\nMKAverage.prototype.addElement = function (num) {\n    this.nums.push(num);\n    const trees = this.trees;\n\n    // remove\n    if (this.nums.length > this.m) {\n        const n = this.nums[this.nums.length - this.m - 1];\n        let i = trees.findIndex(t => t.contains(n));\n\n        if (i === 1) this.sum -= n;\n        trees[i].remove(n);\n\n        for (; i < trees.length - 1 && trees[i + 1].size > 0; i++) {\n            const tmin = trees[i + 1].min();\n            trees[i + 1].remove(tmin);\n            trees[i].insert(tmin);\n            if (i === 0) this.sum -= tmin;\n            else if (i === 1) this.sum += tmin;\n        }\n    }\n\n    // insert\n    for (let i = 0; i < trees.length; i++) {\n        const c = i !== 1 ? this.k : this.m - 2 * this.k;\n        trees[i].insert(num);\n        if (i === 1) this.sum += num;\n\n        if (trees[i].size <= c) break;\n\n        num = trees[i].max();\n        trees[i].remove(num);\n        if (i === 1) this.sum -= num;\n    }\n};\n\nMKAverage.prototype.calculateMKAverage = function () {\n    return this.nums.length < this.m ? -1 : (this.sum / (this.m - 2 * this.k)) >> 0;\n};\n\n// https://github.com/w8r/avl/\nfunction print(root,printNode){if(printNode===void 0)printNode=function(n){return n.key};var out=[];row(root,'',true,function(v){return out.push(v)},printNode);return out.join('')}function row(root,prefix,isTail,out,printNode){if(root){out((\"\"+prefix+(isTail?'\u2514\u2500\u2500 ':'\u251c\u2500\u2500 ')+(printNode(root))+\"\\n\"));var indent=prefix+(isTail?'    ':'\u2502   ');if(root.left){row(root.left,indent,false,out,printNode)}if(root.right){row(root.right,indent,true,out,printNode)}}}function isBalanced(root){if(root===null){return true}var lh=height(root.left);var rh=height(root.right);if(Math.abs(lh-rh)<=1&&isBalanced(root.left)&&isBalanced(root.right)){return true}return false}function height(node){return node?(1+Math.max(height(node.left),height(node.right))):0}function loadRecursive(parent,keys,values,start,end){var size=end-start;if(size>0){var middle=start+Math.floor(size/2);var key=keys[middle];var data=values[middle];var node={key:key,data:data,parent:parent};node.left=loadRecursive(node,keys,values,start,middle);node.right=loadRecursive(node,keys,values,middle+1,end);return node}return null}function markBalance(node){if(node===null){return 0}var lh=markBalance(node.left);var rh=markBalance(node.right);node.balanceFactor=lh-rh;return Math.max(lh,rh)+1}function sort(keys,values,left,right,compare){if(left>=right){return}var pivot=keys[(left+right)>>1];var i=left-1;var j=right+1;while(true){do{i++}while(compare(keys[i],pivot)<0);do{j--}while(compare(keys[j],pivot)>0);if(i>=j){break}var tmp=keys[i];keys[i]=keys[j];keys[j]=tmp;tmp=values[i];values[i]=values[j];values[j]=tmp}sort(keys,values,left,j,compare);sort(keys,values,j+1,right,compare)}function DEFAULT_COMPARE(a,b){return a>b?1:a<b?-1:0}function rotateLeft(node){var rightNode=node.right;node.right=rightNode.left;if(rightNode.left){rightNode.left.parent=node}rightNode.parent=node.parent;if(rightNode.parent){if(rightNode.parent.left===node){rightNode.parent.left=rightNode}else{rightNode.parent.right=rightNode}}node.parent=rightNode;rightNode.left=node;node.balanceFactor+=1;if(rightNode.balanceFactor<0){node.balanceFactor-=rightNode.balanceFactor}rightNode.balanceFactor+=1;if(node.balanceFactor>0){rightNode.balanceFactor+=node.balanceFactor}return rightNode}function rotateRight(node){var leftNode=node.left;node.left=leftNode.right;if(node.left){node.left.parent=node}leftNode.parent=node.parent;if(leftNode.parent){if(leftNode.parent.left===node){leftNode.parent.left=leftNode}else{leftNode.parent.right=leftNode}}node.parent=leftNode;leftNode.right=node;node.balanceFactor-=1;if(leftNode.balanceFactor>0){node.balanceFactor-=leftNode.balanceFactor}leftNode.balanceFactor-=1;if(node.balanceFactor<0){leftNode.balanceFactor+=node.balanceFactor}return leftNode}var AVLTree=function AVLTree(comparator,noDuplicates){if(noDuplicates===void 0)noDuplicates=false;this._comparator=comparator||DEFAULT_COMPARE;this._root=null;this._size=0;this._noDuplicates=!!noDuplicates};var prototypeAccessors={size:{configurable:true}};AVLTree.prototype.destroy=function destroy(){return this.clear()};AVLTree.prototype.clear=function clear(){this._root=null;this._size=0;return this};prototypeAccessors.size.get=function(){return this._size};AVLTree.prototype.contains=function contains(key){if(this._root){var node=this._root;var comparator=this._comparator;while(node){var cmp=comparator(key,node.key);if(cmp===0){return true}else if(cmp<0){node=node.left}else{node=node.right}}}return false};AVLTree.prototype.next=function next(node){var successor=node;if(successor){if(successor.right){successor=successor.right;while(successor.left){successor=successor.left}}else{successor=node.parent;while(successor&&successor.right===node){node=successor;successor=successor.parent}}}return successor};AVLTree.prototype.prev=function prev(node){var predecessor=node;if(predecessor){if(predecessor.left){predecessor=predecessor.left;while(predecessor.right){predecessor=predecessor.right}}else{predecessor=node.parent;while(predecessor&&predecessor.left===node){node=predecessor;predecessor=predecessor.parent}}}return predecessor};AVLTree.prototype.forEach=function forEach(callback){var current=this._root;var s=[],done=false,i=0;while(!done){if(current){s.push(current);current=current.left}else{if(s.length>0){current=s.pop();callback(current,i++);current=current.right}else{done=true}}}return this};AVLTree.prototype.range=function range(low,high,fn,ctx){var Q=[];var compare=this._comparator;var node=this._root,cmp;while(Q.length!==0||node){if(node){Q.push(node);node=node.left}else{node=Q.pop();cmp=compare(node.key,high);if(cmp>0){break}else if(compare(node.key,low)>=0){if(fn.call(ctx,node)){return this}}node=node.right}}return this};AVLTree.prototype.keys=function keys(){var current=this._root;var s=[],r=[],done=false;while(!done){if(current){s.push(current);current=current.left}else{if(s.length>0){current=s.pop();r.push(current.key);current=current.right}else{done=true}}}return r};AVLTree.prototype.values=function values(){var current=this._root;var s=[],r=[],done=false;while(!done){if(current){s.push(current);current=current.left}else{if(s.length>0){current=s.pop();r.push(current.data);current=current.right}else{done=true}}}return r};AVLTree.prototype.at=function at(index){var current=this._root;var s=[],done=false,i=0;while(!done){if(current){s.push(current);current=current.left}else{if(s.length>0){current=s.pop();if(i===index){return current}i++;current=current.right}else{done=true}}}return null};AVLTree.prototype.minNode=function minNode(){var node=this._root;if(!node){return null}while(node.left){node=node.left}return node};AVLTree.prototype.maxNode=function maxNode(){var node=this._root;if(!node){return null}while(node.right){node=node.right}return node};AVLTree.prototype.min=function min(){var node=this._root;if(!node){return null}while(node.left){node=node.left}return node.key};AVLTree.prototype.max=function max(){var node=this._root;if(!node){return null}while(node.right){node=node.right}return node.key};AVLTree.prototype.isEmpty=function isEmpty(){return!this._root};AVLTree.prototype.pop=function pop(){var node=this._root,returnValue=null;if(node){while(node.left){node=node.left}returnValue={key:node.key,data:node.data};this.remove(node.key)}return returnValue};AVLTree.prototype.popMax=function popMax(){var node=this._root,returnValue=null;if(node){while(node.right){node=node.right}returnValue={key:node.key,data:node.data};this.remove(node.key)}return returnValue};AVLTree.prototype.find=function find(key){var root=this._root;var subtree=root,cmp;var compare=this._comparator;while(subtree){cmp=compare(key,subtree.key);if(cmp===0){return subtree}else if(cmp<0){subtree=subtree.left}else{subtree=subtree.right}}return null};AVLTree.prototype.insert=function insert(key,data){if(!this._root){this._root={parent:null,left:null,right:null,balanceFactor:0,key:key,data:data};this._size++;return this._root}var compare=this._comparator;var node=this._root;var parent=null;var cmp=0;if(this._noDuplicates){while(node){cmp=compare(key,node.key);parent=node;if(cmp===0){return null}else if(cmp<0){node=node.left}else{node=node.right}}}else{while(node){cmp=compare(key,node.key);parent=node;if(cmp<=0){node=node.left}else{node=node.right}}}var newNode={left:null,right:null,balanceFactor:0,parent:parent,key:key,data:data};var newRoot;if(cmp<=0){parent.left=newNode}else{parent.right=newNode}while(parent){cmp=compare(parent.key,key);if(cmp<0){parent.balanceFactor-=1}else{parent.balanceFactor+=1}if(parent.balanceFactor===0){break}else if(parent.balanceFactor<-1){if(parent.right.balanceFactor===1){rotateRight(parent.right)}newRoot=rotateLeft(parent);if(parent===this._root){this._root=newRoot}break}else if(parent.balanceFactor>1){if(parent.left.balanceFactor===-1){rotateLeft(parent.left)}newRoot=rotateRight(parent);if(parent===this._root){this._root=newRoot}break}parent=parent.parent}this._size++;return newNode};AVLTree.prototype.remove=function remove(key){if(!this._root){return null}var node=this._root;var compare=this._comparator;var cmp=0;while(node){cmp=compare(key,node.key);if(cmp===0){break}else if(cmp<0){node=node.left}else{node=node.right}}if(!node){return null}var returnValue=node.key;var max,min;if(node.left){max=node.left;while(max.left||max.right){while(max.right){max=max.right}node.key=max.key;node.data=max.data;if(max.left){node=max;max=max.left}}node.key=max.key;node.data=max.data;node=max}if(node.right){min=node.right;while(min.left||min.right){while(min.left){min=min.left}node.key=min.key;node.data=min.data;if(min.right){node=min;min=min.right}}node.key=min.key;node.data=min.data;node=min}var parent=node.parent;var pp=node;var newRoot;while(parent){if(parent.left===pp){parent.balanceFactor-=1}else{parent.balanceFactor+=1}if(parent.balanceFactor<-1){if(parent.right.balanceFactor===1){rotateRight(parent.right)}newRoot=rotateLeft(parent);if(parent===this._root){this._root=newRoot}parent=newRoot}else if(parent.balanceFactor>1){if(parent.left.balanceFactor===-1){rotateLeft(parent.left)}newRoot=rotateRight(parent);if(parent===this._root){this._root=newRoot}parent=newRoot}if(parent.balanceFactor===-1||parent.balanceFactor===1){break}pp=parent;parent=parent.parent}if(node.parent){if(node.parent.left===node){node.parent.left=null}else{node.parent.right=null}}if(node===this._root){this._root=null}this._size--;return returnValue};AVLTree.prototype.load=function load(keys,values,presort){if(keys===void 0)keys=[];if(values===void 0)values=[];if(this._size!==0){throw new Error('bulk-load: tree is not empty');}var size=keys.length;if(presort){sort(keys,values,0,size-1,this._comparator)}this._root=loadRecursive(null,keys,values,0,size);markBalance(this._root);this._size=size;return this};AVLTree.prototype.isBalanced=function isBalanced$1(){return isBalanced(this._root)};AVLTree.prototype.toString=function toString(printNode){return print(this._root,printNode)};Object.defineProperties(AVLTree.prototype,prototypeAccessors);\n")),(0,a.kt)("h2",{id:"4\u590d\u6742\u5ea6"},"4\u3001\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"addElement"),"\uff1a",(0,a.kt)("span",{parentName:"li",className:"math math-inline"},(0,a.kt)("span",{parentName:"span",className:"katex"},(0,a.kt)("span",{parentName:"span",className:"katex-mathml"},(0,a.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,a.kt)("semantics",{parentName:"math"},(0,a.kt)("mrow",{parentName:"semantics"},(0,a.kt)("mi",{parentName:"mrow"},"O"),(0,a.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,a.kt)("mi",{parentName:"mrow"},"l"),(0,a.kt)("mi",{parentName:"mrow"},"o"),(0,a.kt)("mi",{parentName:"mrow"},"g"),(0,a.kt)("mi",{parentName:"mrow"},"n"),(0,a.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,a.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logn)")))),(0,a.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,a.kt)("span",{parentName:"span",className:"base"},(0,a.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,a.kt)("span",{parentName:"span",className:"mopen"},"("),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,a.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"calculateMKAverage"),"\uff1a",(0,a.kt)("span",{parentName:"li",className:"math math-inline"},(0,a.kt)("span",{parentName:"span",className:"katex"},(0,a.kt)("span",{parentName:"span",className:"katex-mathml"},(0,a.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,a.kt)("semantics",{parentName:"math"},(0,a.kt)("mrow",{parentName:"semantics"},(0,a.kt)("mi",{parentName:"mrow"},"O"),(0,a.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,a.kt)("mn",{parentName:"mrow"},"1"),(0,a.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,a.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,a.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,a.kt)("span",{parentName:"span",className:"base"},(0,a.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,a.kt)("span",{parentName:"span",className:"mopen"},"("),(0,a.kt)("span",{parentName:"span",className:"mord"},"1"),(0,a.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,a.kt)("span",{parentName:"li",className:"math math-inline"},(0,a.kt)("span",{parentName:"span",className:"katex"},(0,a.kt)("span",{parentName:"span",className:"katex-mathml"},(0,a.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,a.kt)("semantics",{parentName:"math"},(0,a.kt)("mrow",{parentName:"semantics"},(0,a.kt)("mi",{parentName:"mrow"},"O"),(0,a.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,a.kt)("mi",{parentName:"mrow"},"n"),(0,a.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,a.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,a.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,a.kt)("span",{parentName:"span",className:"base"},(0,a.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,a.kt)("span",{parentName:"span",className:"mopen"},"("),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,a.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,a.kt)("h2",{id:"5\u6267\u884c\u7ed3\u679c"},"5\u3001\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.leetcode.cn/1674022979-licLMq-image.png",alt:"image.png"})))}m.isMDXComponent=!0}}]);