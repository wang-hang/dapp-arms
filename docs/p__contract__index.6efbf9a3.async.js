(self.webpackChunk=self.webpackChunk||[]).push([[635],{3466:function(M,c,e){"use strict";e.d(c,{Z:function(){return le}});var A=e(58024),y=e(91894),m=e(57663),f=e(71577),K=e(13062),d=e(71230),C=e(47673),g=e(4107),w=e(34792),O=e(48086),T=e(57337),p=e(67294),j=e(3182),V=e(94043),x=e.n(V),H=e(27811),Q=e(29553),Y=e(95129);function k(t,n){return t.getSigner(n).connectUnchecked()}function _(t,n){return n?k(t,n):t}function q(t,n,a,s){var u=_(a,s);return new Y.CH(t,n,u)}var ee=e(51893);function N(t,n,a){return q(t,Q,n,a)}function ce(t,n,a){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime.mark(function t(n,a,s){var u;return _regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,s.allowance(n,a);case 2:return u=i.sent,i.abrupt("return",u.gt(0));case 4:case"end":return i.stop()}},t)})),U.apply(this,arguments)}function ye(t,n){return W.apply(this,arguments)}function W(){return W=_asyncToGenerator(_regeneratorRuntime.mark(function t(n,a){var s;return _regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,a.balanceOf(n);case 2:return s=l.sent,l.abrupt("return",toBN(s.toString()));case 4:case"end":return l.stop()}},t)})),W.apply(this,arguments)}function ve(t){var n=useWallet(),a=n.provider,s=n.account;return!a||!t?null:useMemo(()=>N(t,a,s),[a,t])}var te=e(80315),ne=e(44431),ae=e.n(ne),I=e(56371),re=e(88902);function se(){var t=(0,H.Z)(),n=t.account,a=t.provider,s=(0,p.useState)(!1),u=(0,T.Z)(s,2),l=u[0],i=u[1];function Z(S,o){return h.apply(this,arguments)}function h(){return h=(0,j.Z)(x().mark(function S(o,P){var E,D,R,B,b=arguments;return x().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return E=b.length>2&&b[2]!==void 0?b[2]:te.BH,D=N(o,a,n),i(!0),r.prev=3,r.next=6,D.approve(P,E);case 6:return R=r.sent,r.next=9,R.wait();case 9:B=r.sent,console.log("\u6388\u6743\u6210\u529F: ",B),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(3),console.error(r.t0);case 16:return r.prev=16,i(!1),r.finish(16);case 19:case"end":return r.stop()}},S,null,[[3,13,16,19]])})),h.apply(this,arguments)}return{approve:Z,loading:l}}var ue=(t,n)=>{var a=(0,p.useState)(new(ae())(0)),s=(0,T.Z)(a,2),u=s[0],l=s[1],i=(0,H.Z)(),Z=i.provider,h=i.account,S=(0,p.useState)(!1),o=(0,T.Z)(S,2),P=o[0],E=o[1],D=()=>{if(t&&n&&(0,I.isAddress)(n)&&(0,I.isAddress)(t)){E(!0);var B=N(t,Z,h);B.allowance(h,n).then(b=>{l((0,ee.Z)(b))}).catch(b=>{console.log("\u83B7\u53D6\u6388\u6743\u989D\u5EA6\u51FA\u9519",b.message)}).finally(()=>{E(!1)})}};(0,p.useEffect)(()=>{D()},[t,n,Z,h]);var R=(0,p.useMemo)(()=>u.gt(0),[u]);return{loading:P,isApproved:R,allowanceWei:u.toFixed(),allowanceEther:(0,re.o)(u).toFixed(),refresh:D}},v=e(85893);function le(){var t=(0,p.useState)(""),n=(0,T.Z)(t,2),a=n[0],s=n[1],u=(0,p.useState)(""),l=(0,T.Z)(u,2),i=l[0],Z=l[1],h=(0,p.useState)(""),S=(0,T.Z)(h,2),o=S[0],P=S[1],E=ue(a,o),D=E.isApproved,R=E.allowanceEther,B=E.loading,b=(0,p.useState)(!1),F=(0,T.Z)(b,2),r=F[0],X=F[1],ie=(0,p.useState)(!1),G=(0,T.Z)(ie,2),oe=G[0],$=G[1],pe=se(),J=pe.approve;function fe(){!z()||(X(!0),J(a,o).then(()=>{O.default.success("\u6388\u6743\u6210\u529F")}).finally(()=>X(!1)))}function de(){!z()||($(!0),J(a,o,"0").then(()=>{O.default.success("\u53D6\u6D88\u6388\u6743\u6210\u529F")}).finally(()=>$(!1)))}function z(){return a?o?!0:(O.default.error("\u8BF7\u8F93\u5165\u88AB\u53D6\u6D88\u6388\u6743\u7684\u5408\u7EA6\u5730\u5740"),!1):(O.default.error("\u8BF7\u8F93\u5165\u53D6\u6D88\u6388\u6743\u7684\u4EE3\u5E01\u5730\u5740"),!1)}return(0,v.jsxs)(y.Z,{title:"\u5408\u7EA6\u6388\u6743",children:[(0,v.jsxs)(d.Z,{children:[(0,v.jsx)(g.Z,{placeholder:"\u8BF7\u8F93\u5165\u6388\u6743\u989D\u5EA6",value:i,onChange:L=>Z(L.target.value)}),(0,v.jsx)(g.Z,{placeholder:"\u8BF7\u8F93\u5165\u88AB\u6388\u6743\u7684\u5730\u5740",value:o,onChange:L=>P(L.target.value),status:o&&(0,I.isAddress)(o)?void 0:"error"}),(0,v.jsx)(g.Z,{placeholder:"\u8BF7\u8F93\u5165\u6388\u6743\u7684\u4EE3\u5E01\u7684\u5730\u5740",value:a,onChange:L=>s(L.target.value),status:a&&(0,I.isAddress)(a)?void 0:"error"})]}),(0,v.jsx)(d.Z,{children:(0,v.jsx)("p",{children:B?"\u67E5\u8BE2\u4E2D...":"\u6388\u6743\u989D\u5EA6\uFF1A".concat(R," Ether")})}),(0,v.jsxs)(d.Z,{children:[(0,v.jsx)(f.Z,{type:"primary",loading:r,onClick:fe,children:"\u6388\u6743"}),(0,v.jsx)(f.Z,{loading:oe,onClick:de,children:"\u53D6\u6D88\u6388\u6743"})]})]})}},80315:function(M,c,e){"use strict";e.d(c,{BH:function(){return p},r_:function(){return j}});const A="0x0000000000000000000000000000000000000000";var y=e(44431),m=e.n(y),f=()=>{},K=128,d="https://http-mainnet.hecochain.com/",C="https://hecoinfo.com",g=256,w="https://http-testnet.hecochain.com",O="https://testnet.hecoinfo.com/",T=[g],p="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",j=A,V="https://http-mainnet.hecochain.com/",x={128:{chainName:"Heco Mainnet",nativeCurrency:{name:"HT",decimals:18,symbol:"HT"},chainId:128,rpcUrls:[d],blockExplorerUrls:[C]},256:{chainName:"Heco Testnet",nativeCurrency:{name:"HT",decimals:18,symbol:"HT"},chainId:256,rpcUrls:[w],blockExplorerUrls:[O]}},H=new(m())(0)},50574:function(M,c,e){"use strict";e.r(c);var A=e(3466),y=e(8416),m=e(85893);function f(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(A.Z,{}),(0,m.jsx)(y.Z,{})]})}f.title="\u5408\u7EA6",c.default=f},51893:function(M,c,e){"use strict";e.d(c,{Z:function(){return m}});var A=e(44431),y=e.n(A);function m(f){return f?new(y())(f.toString()):new(y())(0)}},88902:function(M,c,e){"use strict";e.d(c,{o:function(){return f}});var A=e(51893),y=e(44431),m=e.n(y);function f(d){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:18,g=(0,A.Z)(d);return g.dividedBy(Math.pow(10,C))}function K(d){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:18,g=d instanceof BigNumber?d.toString():d;return toBN(utils.parseUnits(g,C))}},29553:function(M){"use strict";M.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"symbol_","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint8","name":"decimal","type":"uint8"}],"name":"setDecimals","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')}}]);