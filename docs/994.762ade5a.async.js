(self.webpackChunk=self.webpackChunk||[]).push([[994],{8416:function(C,T,f){"use strict";f.d(T,{Z:function(){return O}});var u=f(34792),t=f(48086),y=f(58024),b=f(91894),n=f(57663),m=f(71577),c=f(17462),F=f(76772),i=f(3182),w=f(57337),W=f(94043),l=f.n(W),v=f(67294),M=f(34097),Z=f(5966),k=f(52470),R=f(95129),E=JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"eF":"0x60806040523480156200001157600080fd5b50604051620018c3380380620018c3833981810160405281019062000037919062000336565b818181600390805190602001906200005192919062000214565b5080600490805190602001906200006a92919062000214565b505050620000893369d3c21bcecceda10000006200009160201b60201c565b505062000660565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000104576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000fb90620003e1565b60405180910390fd5b62000118600083836200020a60201b60201c565b80600260008282546200012c919062000490565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000183919062000490565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001ea919062000403565b60405180910390a362000206600083836200020f60201b60201c565b5050565b505050565b505050565b82805462000222906200052d565b90600052602060002090601f01602090048101928262000246576000855562000292565b82601f106200026157805160ff191683800117855562000292565b8280016001018555821562000292579182015b828111156200029157825182559160200191906001019062000274565b5b509050620002a19190620002a5565b5090565b5b80821115620002c0576000816000905550600101620002a6565b5090565b6000620002db620002d58462000449565b62000420565b905082815260208101848484011115620002f457600080fd5b62000301848285620004f7565b509392505050565b600082601f8301126200031b57600080fd5b81516200032d848260208601620002c4565b91505092915050565b600080604083850312156200034a57600080fd5b600083015167ffffffffffffffff8111156200036557600080fd5b620003738582860162000309565b925050602083015167ffffffffffffffff8111156200039157600080fd5b6200039f8582860162000309565b9150509250929050565b6000620003b8601f836200047f565b9150620003c58262000637565b602082019050919050565b620003db81620004ed565b82525050565b60006020820190508181036000830152620003fc81620003a9565b9050919050565b60006020820190506200041a6000830184620003d0565b92915050565b60006200042c6200043f565b90506200043a828262000563565b919050565b6000604051905090565b600067ffffffffffffffff821115620004675762000466620005f7565b5b620004728262000626565b9050602081019050919050565b600082825260208201905092915050565b60006200049d82620004ed565b9150620004aa83620004ed565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004e257620004e162000599565b5b828201905092915050565b6000819050919050565b60005b8381101562000517578082015181840152602081019050620004fa565b8381111562000527576000848401525b50505050565b600060028204905060018216806200054657607f821691505b602082108114156200055d576200055c620005c8565b5b50919050565b6200056e8262000626565b810181811067ffffffffffffffff8211171562000590576200058f620005f7565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61125380620006706000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610d19565b60405180910390f35b6100e660048036038101906100e19190610b67565b610308565b6040516100f39190610cfe565b60405180910390f35b61010461032b565b6040516101119190610e1b565b60405180910390f35b610134600480360381019061012f9190610b18565b610335565b6040516101419190610cfe565b60405180910390f35b610152610364565b60405161015f9190610e36565b60405180910390f35b610182600480360381019061017d9190610b67565b61036d565b60405161018f9190610cfe565b60405180910390f35b6101b260048036038101906101ad9190610ab3565b6103a4565b6040516101bf9190610e1b565b60405180910390f35b6101d06103ec565b6040516101dd9190610d19565b60405180910390f35b61020060048036038101906101fb9190610b67565b61047e565b60405161020d9190610cfe565b60405180910390f35b610230600480360381019061022b9190610b67565b6104f5565b60405161023d9190610cfe565b60405180910390f35b610260600480360381019061025b9190610adc565b610518565b60405161026d9190610e1b565b60405180910390f35b60606003805461028590610f4b565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610f4b565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610772565b6103588585856107fe565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610e6d565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610f4b565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610f4b565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610dfb565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fe565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e90610ddb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610687576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067e90610d5b565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107659190610e1b565b60405180910390a3505050565b600061077e8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f857818110156107ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e190610d7b565b60405180910390fd5b6107f784848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086590610dbb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d590610d3b565b60405180910390fd5b6108e9838383610a7f565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096690610d9b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a029190610e6d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a669190610e1b565b60405180910390a3610a79848484610a84565b50505050565b505050565b505050565b600081359050610a98816111ef565b92915050565b600081359050610aad81611206565b92915050565b600060208284031215610ac557600080fd5b6000610ad384828501610a89565b91505092915050565b60008060408385031215610aef57600080fd5b6000610afd85828601610a89565b9250506020610b0e85828601610a89565b9150509250929050565b600080600060608486031215610b2d57600080fd5b6000610b3b86828701610a89565b9350506020610b4c86828701610a89565b9250506040610b5d86828701610a9e565b9150509250925092565b60008060408385031215610b7a57600080fd5b6000610b8885828601610a89565b9250506020610b9985828601610a9e565b9150509250929050565b610bac81610ed5565b82525050565b6000610bbd82610e51565b610bc78185610e5c565b9350610bd7818560208601610f18565b610be081610fdb565b840191505092915050565b6000610bf8602383610e5c565b9150610c0382610fec565b604082019050919050565b6000610c1b602283610e5c565b9150610c268261103b565b604082019050919050565b6000610c3e601d83610e5c565b9150610c498261108a565b602082019050919050565b6000610c61602683610e5c565b9150610c6c826110b3565b604082019050919050565b6000610c84602583610e5c565b9150610c8f82611102565b604082019050919050565b6000610ca7602483610e5c565b9150610cb282611151565b604082019050919050565b6000610cca602583610e5c565b9150610cd5826111a0565b604082019050919050565b610ce981610f01565b82525050565b610cf881610f0b565b82525050565b6000602082019050610d136000830184610ba3565b92915050565b60006020820190508181036000830152610d338184610bb2565b905092915050565b60006020820190508181036000830152610d5481610beb565b9050919050565b60006020820190508181036000830152610d7481610c0e565b9050919050565b60006020820190508181036000830152610d9481610c31565b9050919050565b60006020820190508181036000830152610db481610c54565b9050919050565b60006020820190508181036000830152610dd481610c77565b9050919050565b60006020820190508181036000830152610df481610c9a565b9050919050565b60006020820190508181036000830152610e1481610cbd565b9050919050565b6000602082019050610e306000830184610ce0565b92915050565b6000602082019050610e4b6000830184610cef565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610e7882610f01565b9150610e8383610f01565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610eb857610eb7610f7d565b5b828201905092915050565b6000610ece82610ee1565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610f36578082015181840152602081019050610f1b565b83811115610f45576000848401525b50505050565b60006002820490506001821680610f6357607f821691505b60208210811415610f7757610f76610fac565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6111f881610ec3565b811461120357600080fd5b50565b61120f81610f01565b811461121a57600080fd5b5056fea26469706673582212207d520048c1726988b9a315ba8d8dc1211c91f61c902337a3266aafb4b874ab6a64736f6c63430008040033"}');function o(z,d){return h.apply(this,arguments)}function h(){return h=(0,i.Z)(l().mark(function z(d,s){var g,r,x;return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("deplyo",{name:d,signer:s}),g=new R.lV(E.Mt,E.eF,s),console.log("factory",g),a.next=5,g.deploy(d,d);case 5:return r=a.sent,console.log("contract: ",r),a.next=9,r.deployTransaction.wait();case 9:return x=a.sent,console.log("receipt: ",x),a.abrupt("return",r.address);case 12:case"end":return a.stop()}},z)})),h.apply(this,arguments)}var D=f(27811),e=f(85893);function O(){var z=(0,v.useState)(""),d=(0,w.Z)(z,2),s=d[0],g=d[1],r=(0,D.Z)(),x=r.provider,B=r.addTokenToWallet,a=(0,v.useRef)();function N(p){return I.apply(this,arguments)}function I(){return I=(0,i.Z)(l().mark(function p(j){var V;return l().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return console.log(j),V=j.name,A.abrupt("return",o(V,x.getSigner()).then(S=>{t.default.success("\u90E8\u7F72\u6210\u529F"),g(S)}).catch(S=>{t.default.error("\u90E8\u7F72\u5931\u8D25"),console.error(S)}));case 3:case"end":return A.stop()}},p)})),I.apply(this,arguments)}function P(){var p,j=(p=a.current)===null||p===void 0?void 0:p.getFieldValue("name");console.log({contractAddress:s,name:j}),(!s||!j)&&alert("\u8BF7\u5148\u90E8\u7F72\u4EE3\u5E01"),B({address:s,symbol:j,decimals:18})}return(0,e.jsxs)(b.Z,{title:"\u90E8\u7F72\u4E00\u4E2AERC20\u4EE3\u5E01",children:[(0,e.jsx)(F.Z,{message:"\u90E8\u7F72\u6210\u529F\u540E\u4F1A\u8D26\u6237\u4F1A\u6709 1000000 \u4E2A\u4EE3\u5E01"}),(0,e.jsx)(M.ZP,{onFinish:N,formRef:a,children:(0,e.jsx)(Z.Z,{label:"\u4EE3\u5E01\u540D\u79F0",name:"name"})}),(0,e.jsx)(k.vY,{title:"\u90E8\u7F72\u7ED3\u679C",children:(0,e.jsx)(k.vY.Item,{label:"\u90E8\u7F72\u540E\u7684\u5408\u7EA6\u5730\u5740\uFF1A",copyable:!0,children:s})}),s&&(0,e.jsxs)(v.Fragment,{children:[(0,e.jsx)(m.Z,{onClick:P,type:"primary",children:" \u6DFB\u52A0\u4EE3\u5E01\u5230\u94B1\u5305"},"1"),(0,e.jsx)(m.Z,{type:"link",href:"https://testnet.cubescan.network/en-us/token/".concat(s),target:"_blank",children:"\u70B9\u51FB\u8DF3\u8F6C\u5230\u533A\u5757\u6D4F\u89C8\u5668"},"2")]})]})}},27811:function(C,T,f){"use strict";f.d(T,{Z:function(){return F}});var u=f(57337),t=f(56151),y=f(38590),b=(0,t.initializeConnector)(i=>new y.MetaMask(i)),n=(0,u.Z)(b,2),m=n[0],c=n[1];function F(){var i=c.useChainId,w=c.useAccount,W=c.useAccounts,l=c.useIsActive,v=c.useProvider,M=i(),Z=w(),k=l(),R=v(),E=o=>{var h=o.address,D=o.symbol,e=o.decimals,O=o.image;window.ethereum&&window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:h,symbol:D,decimals:e,image:O}}})};return{chainId:M,account:Z||"",isActive:k,provider:R,connect:()=>m.activate(),disconnect:()=>m.deactivate(),addTokenToWallet:E}}},46700:function(C,T,f){var u={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":37930,"./se.js":37930,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":95606,"./ss.js":95606,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function t(b){var n=y(b);return f(n)}function y(b){if(!f.o(u,b)){var n=new Error("Cannot find module '"+b+"'");throw n.code="MODULE_NOT_FOUND",n}return u[b]}t.keys=function(){return Object.keys(u)},t.resolve=y,C.exports=t,t.id=46700},46601:function(){}}]);