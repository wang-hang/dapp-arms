(self.webpackChunk=self.webpackChunk||[]).push([[635],{39125:function(D,g,e){"use strict";e.d(g,{Z:function(){return de}});var S=e(58024),T=e(91894),E=e(57663),p=e(71577),$=e(13062),c=e(71230),B=e(47673),b=e(4107),Te=e(34792),L=e(48086),h=e(57337),f=e(67294),J=e(3182),z=e(94043),U=e.n(z),W=e(27811),Q=e(29553),Y=e(95129);function k(t,n){return t.getSigner(n).connectUnchecked()}function _(t,n){return n?k(t,n):t}function q(t,n,a,s){var u=_(a,s);return new Y.CH(t,n,u)}var ee=e(51893);function j(t,n,a){return q(t,Q,n,a)}function he(t,n,a){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime.mark(function t(n,a,s){var u;return _regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,s.allowance(n,a);case 2:return u=i.sent,i.abrupt("return",u.gt(0));case 4:case"end":return i.stop()}},t)})),x.apply(this,arguments)}function Ee(t,n){return N.apply(this,arguments)}function N(){return N=_asyncToGenerator(_regeneratorRuntime.mark(function t(n,a){var s;return _regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,a.balanceOf(n);case 2:return s=l.sent,l.abrupt("return",toBN(s.toString()));case 4:case"end":return l.stop()}},t)})),N.apply(this,arguments)}function be(t){var n=useWallet(),a=n.provider,s=n.account;return!a||!t?null:useMemo(()=>j(t,a,s),[a,t])}const te="0x0000000000000000000000000000000000000000";var ne=e(44431),w=e.n(ne),Ae=()=>{},Se=128,ae="https://http-mainnet.hecochain.com/",re="https://hecoinfo.com",se=256,ue="https://http-testnet.hecochain.com",le="https://testnet.hecoinfo.com/",Me=[se],ie="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",Ce=te,Oe="https://http-mainnet.hecochain.com/",Ze={128:{chainName:"Heco Mainnet",nativeCurrency:{name:"HT",decimals:18,symbol:"HT"},chainId:128,rpcUrls:[ae],blockExplorerUrls:[re]},256:{chainName:"Heco Testnet",nativeCurrency:{name:"HT",decimals:18,symbol:"HT"},chainId:256,rpcUrls:[ue],blockExplorerUrls:[le]}},De=new(w())(0),I=e(56371),oe=e(88902);function pe(){var t=(0,W.Z)(),n=t.account,a=t.provider,s=(0,f.useState)(!1),u=(0,h.Z)(s,2),l=u[0],i=u[1];function M(A,o){return y.apply(this,arguments)}function y(){return y=(0,J.Z)(U().mark(function A(o,R){var v,C,O,Z,m=arguments;return U().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return v=m.length>2&&m[2]!==void 0?m[2]:ie,C=j(o,a,n),i(!0),r.prev=3,r.next=6,C.approve(R,v);case 6:return O=r.sent,r.next=9,O.wait();case 9:Z=r.sent,console.log("\u6388\u6743\u6210\u529F: ",Z),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(3),console.error(r.t0);case 16:return r.prev=16,i(!1),r.finish(16);case 19:case"end":return r.stop()}},A,null,[[3,13,16,19]])})),y.apply(this,arguments)}return{approve:M,loading:l}}var fe=(t,n)=>{var a=(0,f.useState)(new(w())(0)),s=(0,h.Z)(a,2),u=s[0],l=s[1],i=(0,W.Z)(),M=i.provider,y=i.account,A=(0,f.useState)(!1),o=(0,h.Z)(A,2),R=o[0],v=o[1],C=()=>{if(t&&n&&(0,I.isAddress)(n)&&(0,I.isAddress)(t)){v(!0);var Z=j(t,M,y);Z.allowance(y,n).then(m=>{l((0,ee.Z)(m))}).catch(m=>{console.log("\u83B7\u53D6\u6388\u6743\u989D\u5EA6\u51FA\u9519",m.message)}).finally(()=>{v(!1)})}};(0,f.useEffect)(()=>{C()},[t,n,M,y]);var O=(0,f.useMemo)(()=>u.gt(0),[u]);return{loading:R,isApproved:O,allowanceWei:u.toFixed(),allowanceEther:(0,oe.o)(u).toFixed(),refresh:C}},d=e(85893);function de(){var t=(0,f.useState)(""),n=(0,h.Z)(t,2),a=n[0],s=n[1],u=(0,f.useState)(""),l=(0,h.Z)(u,2),i=l[0],M=l[1],y=(0,f.useState)(""),A=(0,h.Z)(y,2),o=A[0],R=A[1],v=fe(a,o),C=v.isApproved,O=v.allowanceEther,Z=v.loading,m=(0,f.useState)(!1),H=(0,h.Z)(m,2),r=H[0],F=H[1],ce=(0,f.useState)(!1),K=(0,h.Z)(ce,2),ye=K[0],V=K[1],ve=pe(),X=ve.approve;function me(){!G()||(F(!0),X(a,o).then(()=>{L.default.success("\u6388\u6743\u6210\u529F")}).finally(()=>F(!1)))}function ge(){!G()||(V(!0),X(a,o,"0").then(()=>{L.default.success("\u53D6\u6D88\u6388\u6743\u6210\u529F")}).finally(()=>V(!1)))}function G(){return a?o?!0:(L.default.error("\u8BF7\u8F93\u5165\u88AB\u53D6\u6D88\u6388\u6743\u7684\u5408\u7EA6\u5730\u5740"),!1):(L.default.error("\u8BF7\u8F93\u5165\u53D6\u6D88\u6388\u6743\u7684\u4EE3\u5E01\u5730\u5740"),!1)}return(0,d.jsxs)(T.Z,{title:"\u5408\u7EA6\u6388\u6743",children:[(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(b.Z,{placeholder:"\u8BF7\u8F93\u5165\u6388\u6743\u989D\u5EA6",value:i,onChange:P=>M(P.target.value)}),(0,d.jsx)(b.Z,{placeholder:"\u8BF7\u8F93\u5165\u88AB\u6388\u6743\u7684\u5730\u5740",value:o,onChange:P=>R(P.target.value),status:o&&(0,I.isAddress)(o)?void 0:"error"}),(0,d.jsx)(b.Z,{placeholder:"\u8BF7\u8F93\u5165\u6388\u6743\u7684\u4EE3\u5E01\u7684\u5730\u5740",value:a,onChange:P=>s(P.target.value),status:a&&(0,I.isAddress)(a)?void 0:"error"})]}),(0,d.jsx)(c.Z,{children:(0,d.jsx)("p",{children:Z?"\u67E5\u8BE2\u4E2D...":"\u6388\u6743\u989D\u5EA6\uFF1A".concat(O," Ether")})}),(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(p.Z,{type:"primary",loading:r,onClick:me,children:"\u6388\u6743"}),(0,d.jsx)(p.Z,{loading:ye,onClick:ge,children:"\u53D6\u6D88\u6388\u6743"})]})]})}},50574:function(D,g,e){"use strict";e.r(g);var S=e(39125),T=e(8416),E=e(85893);function p(){return(0,E.jsxs)("div",{children:[(0,E.jsx)(S.Z,{}),(0,E.jsx)(T.Z,{})]})}p.title="\u5408\u7EA6",g.default=p},51893:function(D,g,e){"use strict";e.d(g,{Z:function(){return E}});var S=e(44431),T=e.n(S);function E(p){return p?new(T())(p.toString()):new(T())(0)}},88902:function(D,g,e){"use strict";e.d(g,{o:function(){return p}});var S=e(51893),T=e(44431),E=e.n(T);function p(c){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:18,b=(0,S.Z)(c);return b.dividedBy(Math.pow(10,B))}function $(c){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:18,b=c instanceof BigNumber?c.toString():c;return toBN(utils.parseUnits(b,B))}},29553:function(D){"use strict";D.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"symbol_","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint8","name":"decimal","type":"uint8"}],"name":"setDecimals","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')}}]);