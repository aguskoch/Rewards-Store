(this["webpackJsonprewards-store-koch"]=this["webpackJsonprewards-store-koch"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(0),n=(c(10),c(1)),r=c.n(n),a=c(7),i=c.n(a),o=c(2),l=c.p+"static/media/coin.b8bc711d.svg",u=c(3),d=c.n(u),j=c(4),b={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I"},h=1e3,m=5e3,p=7500,x="https://coding-challenge-api.aerolab.co/products",O="https://coding-challenge-api.aerolab.co/user/me",f="https://coding-challenge-api.aerolab.co/user/points",v="https://coding-challenge-api.aerolab.co/redeem";function g(){return(g=Object(j.a)(d.a.mark((function e(t){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(f,{method:"POST",headers:b,body:JSON.stringify({amount:t})});case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var N=function(e){return g.apply(this,arguments)};function y(){return(y=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O,{method:"GET",headers:b});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var w=function(){return y.apply(this,arguments)},C=r.a.createContext(),k=function(e){var t=r.a.useState({}),c=Object(o.a)(t,2),n=c[0],a=c[1],i=r.a.useState(0),l=Object(o.a)(i,2),u=l[0],d=l[1],j=r.a.useState(!1),b=Object(o.a)(j,2),h=b[0],m=b[1],p=r.a.useState([]),x=Object(o.a)(p,2),O=x[0],f=x[1];return r.a.useEffect((function(){w().then((function(e){a(e),d(e.points),f(e.redeemHistory)}))}),[]),Object(s.jsx)(C.Provider,{value:{users:n,setUsers:a,points:u,setPoints:d,history:h,setHistory:m,record:O},children:e.children})};var P=function(e){var t=r.a.useState(!1),c=Object(o.a)(t,2),n=c[0],a=c[1],i=r.a.useContext(C),u=i.points,d=i.setPoints;r.a.useEffect((function(){n&&setTimeout((function(){a(!1)}),2e3)}),[n]);var j=function(e){N(e).then((function(t){d(u+e),a(!0)}))};return Object(s.jsxs)("div",{className:"modal-screen",children:[Object(s.jsx)("div",{className:"successAddPointsDiv",children:n&&Object(s.jsx)("div",{className:"successEnabled successAddPoints",children:Object(s.jsx)("h6",{className:"success-p",children:" Points added successfully "})})}),Object(s.jsxs)("section",{className:"addCoins",children:[Object(s.jsx)("h4",{className:"title-addCoins",children:" Add more coins "}),Object(s.jsxs)("button",{className:"button-addCoins one",onClick:function(){return j(h)},children:[Object(s.jsx)("img",{src:l,alt:h}),h]}),Object(s.jsxs)("button",{className:"button-addCoins two",onClick:function(){return j(m)},children:[Object(s.jsx)("img",{src:l,alt:m}),m]}),Object(s.jsxs)("button",{className:"button-addCoins three",onClick:function(){return j(p)},children:[Object(s.jsx)("img",{src:l,alt:p}),p]}),Object(s.jsx)("button",{className:"close",onClick:function(){return e.setModal(!1)},children:" X "})]})]})},S=c.p+"static/media/arrow-counterclockwise.9d1a02af.svg",I=c.p+"static/media/house-door.10e5c7bc.svg";var M=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],a=r.a.useContext(C),i=a.users,u=a.points,d=a.history,j=a.setHistory;return Object(s.jsxs)("section",{className:"header",children:[Object(s.jsxs)("div",{className:"userNameInfo",children:[Object(s.jsxs)("h6",{className:"userName",children:[" ",i.name," "]}),Object(s.jsxs)("button",{className:"button-headerCoins",onClick:function(){return n(!0)},children:[u,Object(s.jsx)("img",{src:l,alt:"coin"})]}),Object(s.jsx)("button",{className:"switch-btn",onClick:function(){return j(!0)},style:{display:d?"none":"block"},children:Object(s.jsx)("img",{src:S,alt:"history"})}),Object(s.jsx)("button",{className:"switch-btn",onClick:function(){return j(!1)},style:{display:d?"block":"none"},children:Object(s.jsx)("img",{src:I,alt:"mainScreen"})})]}),c?Object(s.jsx)(P,{setModal:n}):null,Object(s.jsxs)("div",{className:"container-header",children:[Object(s.jsx)("h6",{className:"title-header",style:{display:d?"none":"block"},children:" Electronics "}),Object(s.jsx)("h6",{className:"title-header",style:{display:d?"block":"none"},children:" History "})]})]})},E=(c(15),c(5)),T=c.p+"static/media/buy-blue.c5c4f01c.svg";function F(){return(F=Object(j.a)(d.a.mark((function e(t){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(v,{method:"POST",headers:b,body:JSON.stringify({productId:t})});case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var A=function(e){return F.apply(this,arguments)},J=c.p+"static/media/emoji-smile.c20c3e2f.svg",D=c.p+"static/media/emoji-frown.ed5aceda.svg";var H=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],i=c[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),j=d[0],b=d[1],h=r.a.useContext(C),m=h.points,p=h.setPoints;return Object(s.jsxs)("div",{className:"card",style:{width:"18rem"},onMouseOver:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(s.jsx)("img",{src:e.img.url,className:a?"img-hovered card-img-top":"card-img-top",alt:e.name}),Object(s.jsx)("button",{type:"button",className:"btn btn-dark",disabled:e.cost>m,onClick:function(){return t=e._id,c=e.cost,A(t).then((function(e){b(e.message),p(m<=0?0:m-c)})),void console.log(j);var t,c},children:"Redeem now"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.category}),Object(s.jsx)("h6",{className:"card-title",children:e.name})]}),a?Object(s.jsx)("div",{className:"card-hovered",children:Object(s.jsxs)("div",{className:"buttons-card-hovered",children:[Object(s.jsx)("img",{className:"buy",src:T,alt:"buy"}),Object(s.jsxs)("h5",{className:"card-cost",children:[" ",e.cost<=m?e.cost:"Missing "+(e.cost-m)," "]}),Object(s.jsx)("img",{className:"coin",src:l,alt:"coin"})]})}):null,"You've redeem the product successfully"===j?Object(s.jsxs)("div",{className:"product-modal",children:[Object(s.jsx)("button",{className:"close",id:"closeSuccessRedeeem",onClick:function(){return b("")},children:" X "}),Object(s.jsxs)("div",{className:"product-modal-div",children:[Object(s.jsx)("img",{className:"emojis-modal",src:J,alt:"success"}),Object(s.jsxs)("h4",{className:"successRedeem",children:[" ",j," "]})]})]}):"undefined"===typeof j?Object(s.jsxs)("div",{className:"product-modal-failed",id:"modal-failed",children:[Object(s.jsx)("button",{className:"close",id:"closeSuccessRedeeem",onClick:function(){return b("")},children:" X "}),Object(s.jsxs)("div",{className:"product-modal-div",children:[Object(s.jsx)("img",{className:"emojis-modal",src:D,alt:"error"}),Object(s.jsx)("h4",{className:"successRedeem",children:" The transaction failed. Please try again later! "})]})]}):null]})};function R(){return(R=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(x,{method:"GET",headers:b});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var L=function(){return R.apply(this,arguments)};var Q=function(e,t){var c=Object(n.useState)(1),s=Object(o.a)(c,2),r=s[0],a=s[1],i=Math.ceil(e.length/t),l=e.slice((r-1)*t,r*t);return{next:function(){a(r+1)},prev:function(){a(r-1)},jump:function(e){a(e)},currentData:function(){var c=(r-1)*t,s=c+t;return e.slice(c,s)},currentPage:r,maxPage:i,currentArray:l}},U=c.p+"static/media/arrow-left.a3f9f033.svg",X=c.p+"static/media/arrow-right.7daa5f0d.svg",Y=function(){var e=r.a.useContext(C),t=e.history,c=e.record,n=Q(c,16),a=n.currentArray,i=n.next,o=n.prev,l=n.maxPage,u=n.currentPage;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"product-history-container",style:{display:t?"flex":"none"},children:a.map((function(e,t){return Object(s.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(s.jsx)("img",{src:e.img.url,alt:e.name}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.category}),Object(s.jsx)("h6",{className:"card-title",children:e.name})]})]},t)}))}),Object(s.jsxs)("section",{className:"arrows",style:{display:t?"flex":"none"},children:[Object(s.jsxs)("h8",{className:"btn-p",children:[" Page ",u," / ",l," "]}),Object(s.jsx)("button",{className:"arrow-btn",onClick:function(){return o()},disabled:u<=1,children:Object(s.jsx)("img",{src:U,alt:"prev"})}),Object(s.jsx)("button",{className:"arrow-btn",onClick:function(){return i()},disabled:u>=l,children:Object(s.jsx)("img",{src:X,alt:"next"})})]})]})},z=function(){var e=r.a.useState([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=r.a.useState("recent"),i=Object(o.a)(a,2),l=i[0],u=i[1],d=r.a.useState(""),j=Object(o.a)(d,2),b=j[0],h=j[1],m=r.a.useContext(C).history;r.a.useEffect((function(){L().then((function(e){return n(e)}))}),[]);var p=Q(function(){switch(l){case"lowPrice":return c.sort((function(e,t){return parseFloat(e.cost)-parseFloat(t.cost)})).map((function(e,t){return Object(s.jsx)(H,Object(E.a)({},e),t)}));case"highPrice":return c.sort((function(e,t){return parseFloat(t.cost)-parseFloat(e.cost)})).map((function(e,t){return Object(s.jsx)(H,Object(E.a)({},e),t)}));default:return c.sort((function(e,t){return e._id<t._id?-1:1})).map((function(e,t){return Object(s.jsx)(H,Object(E.a)({},e),t)}))}}(),16),x=p.currentArray,O=p.next,f=p.prev,v=p.currentPage,g=p.maxPage;return Object(s.jsxs)("div",{style:{display:m?"none":"block"},className:"container",children:[Object(s.jsxs)("div",{className:"sort-options",children:[Object(s.jsx)("h5",{children:" Sort by: "}),Object(s.jsx)("button",{className:"recent"===b?"sort-option-btn active":"sort-option-btn",onClick:function(){u("recent"),h("recent")},children:" Most Recent "}),Object(s.jsx)("button",{className:"low"===b?"sort-option-btn active":"sort-option-btn",onClick:function(){u("lowPrice"),h("low")},children:" Price: Low to High "}),Object(s.jsx)("button",{className:"high"===b?"sort-option-btn active":"sort-option-btn",onClick:function(){u("highPrice"),h("high")},children:" Price: High to Low "})]}),Object(s.jsx)("div",{className:"container-cards",children:x}),Object(s.jsx)("div",{style:{display:m?"block":"none"},children:Object(s.jsx)(Y,{})}),Object(s.jsxs)("div",{className:"arrows",children:[Object(s.jsxs)("h8",{className:"btn-p",children:[" Page ",v," / ",g," "]}),Object(s.jsx)("button",{className:"arrow-btn",disabled:v<=1,onClick:function(){return f()},children:Object(s.jsx)("img",{src:U,alt:"prev"})}),Object(s.jsx)("button",{className:"arrow-btn",disabled:v>=g,onClick:function(){return O()},children:Object(s.jsx)("img",{src:X,alt:"next"})})]})]})};var V=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(k,{children:[Object(s.jsx)(M,{}),Object(s.jsx)(z,{}),Object(s.jsx)(Y,{})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(V,{})}),document.getElementById("root")),B()}},[[16,1,2]]]);
//# sourceMappingURL=main.8baf1dd8.chunk.js.map