(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2V_Lf",avatar:"Profile_avatar__2dEDa",name:"Profile_name__3iymC",tag:"Profile_tag__caHEW",location:"Profile_location__2xdXq",stats:"Profile_stats__1CqFq",stats_item:"Profile_stats_item__gSVfH"}},function(e,a,t){e.exports={friend_list:"FriendList_friend_list__3DS2U",item:"FriendList_item__2GWHf",name:"FriendList_name__1XMir",avatar:"FriendList_avatar__eIrDF",online:"FriendList_online__yuvgg",offline:"FriendList_offline__TJdaH"}},function(e,a,t){e.exports={transactionhistory:"TransactionHistory_transactionhistory__2oBjU",title:"TransactionHistory_title__1dPLX",titleType:"TransactionHistory_titleType__3M15e",titleAmount:"TransactionHistory_titleAmount__1JTR9",titleCurrency:"TransactionHistory_titleCurrency__oXLmv",tableBody:"TransactionHistory_tableBody__3wdjf",row:"TransactionHistory_row__37ZAj"}},function(e,a,t){e.exports={statistics:"statics_statistics__UVqu_",title:"statics_title__18PE-",stat_list:"statics_stat_list__17YPo",item:"statics_item__OuZYe",label:"statics_label__3KFkF",percantage:"statics_percantage__6QaSq"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(7),s=t.n(i),r=t(5),l=t(8),o=t(9),m=t(10),d=t(1),u=t.n(d),p=function(e){var a=e.name,t=e.tag,n=e.location,i=e.avatar,s=e.stats;return c.a.createElement("div",{className:u.a.profile},c.a.createElement("div",{className:"description"},c.a.createElement("img",{src:i,alt:a,className:u.a.avatar}),c.a.createElement("p",{className:u.a.name},a),c.a.createElement("p",{className:u.a.tag},t),c.a.createElement("p",{className:u.a.location},n)),c.a.createElement("ul",{className:u.a.stats},c.a.createElement("li",{className:u.a.stats_item},c.a.createElement("span",{className:"label"},"Followers"),c.a.createElement("span",{className:"quantity"},s.followers)),c.a.createElement("li",{className:u.a.stats_item},c.a.createElement("span",{className:"label"},"Views"),c.a.createElement("span",{className:"quantity"},s.views)),c.a.createElement("li",{className:u.a.stats_item},c.a.createElement("span",{className:"label"},"Likes"),c.a.createElement("span",{className:"quantity"},s.likes))))},f=t(4),_=t.n(f),y=function(e){var a=e.title,t=void 0===a?"":a,n=e.stats,i=void 0===n?[]:n;return c.a.createElement("section",{className:_.a.statistics},t&&c.a.createElement("h2",{className:_.a.title},t),c.a.createElement("ul",{className:_.a.stat_list},i.map((function(e){return c.a.createElement("li",{key:e.id,className:_.a.item},c.a.createElement("span",{className:_.a.label},e.label),c.a.createElement("span",{className:_.a.percentage},e.percentage))}))))},b=t(2),E=t.n(b),w=function(e){var a=e.avatar,t=e.name,i=e.isOnline,s=void 0!==i&&i;return c.a.createElement(n.Fragment,null,c.a.createElement("span",{className:s?E.a.online:E.a.offline}),c.a.createElement("img",{className:E.a.avatar,src:a,alt:t,width:"48"}),c.a.createElement("p",{className:E.a.name},t))},v=function(e){var a=e.friends;return c.a.createElement("ul",{className:E.a.friend_list},a.map((function(e){return c.a.createElement("li",{className:E.a.item,key:e.id},c.a.createElement(w,e))})))},N=t(3),g=t.n(N),h=function(e){var a=e.items;return c.a.createElement("table",{className:g.a.transactionhistory},c.a.createElement("thead",{className:g.a.title},c.a.createElement("tr",null,c.a.createElement("th",{className:g.a.titleType},"Type"),c.a.createElement("th",{className:g.a.titleAmount},"Amount"),c.a.createElement("th",{className:g.a.titleCurrency},"Currency"))),c.a.createElement("tbody",{className:g.a.tableBody},a.map((function(e){var a=e.id,t=e.type,n=e.amount,i=e.currency;return c.a.createElement("tr",{key:a,className:g.a.row},c.a.createElement("td",null,t),c.a.createElement("td",null,n),c.a.createElement("td",null,i))}))))},T=function(){return c.a.createElement("div",null,c.a.createElement(p,{name:r.name,tag:r.tag,location:r.location,avatar:r.avatar,stats:r.stats}),c.a.createElement(y,{title:"Upload stats",stats:l}),c.a.createElement(v,{friends:o}),c.a.createElement(h,{items:m}))};s.a.render(c.a.createElement(T,null),document.querySelector("#root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.a14cb801.chunk.js.map