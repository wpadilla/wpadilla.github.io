(this["webpackJsonpaudsongs-calculator"]=this["webpackJsonpaudsongs-calculator"]||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/logo.7d433192.png"},33:function(e,a,t){e.exports=t(58)},38:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),s=t.n(c),i=(t(38),t(39),t(16)),o=t(13),l=t(14),m=t(9),u=t.n(m),p=t(11),d=t(7),f=t(64),g=t(72),b=t(66),E=t(67),h=t(68),v=t(62),y=t(69),N=t(70),j=t(63),O=t(73),S=t(61),w=t(71),k=(t(41),function(e){var a=e.label,t=e.amount,n=e.className;return r.a.createElement("div",{className:n},r.a.createElement(S.a,{sm:12,className:"d-flex justify-content-center"},r.a.createElement("h4",{className:"amount"},"RD$ ",t?t.toLocaleString("en-US"):0)),r.a.createElement(S.a,{sm:12,className:"d-flex justify-content-center"},r.a.createElement("p",null,a)))}),C=t(32),x=(t(44),function(e){var a=e.addSale,t=e.salesQuantity,n=e.moneyGenerated,c=e.onSelect,s=Object(C.a)(e,["addSale","salesQuantity","moneyGenerated","onSelect"]),i=s.image,m={enableShipping:!1,commission:!1,inputShipping:!1},g=r.a.useState(m),b=Object(d.a)(g,2),E=b[0],h=b[1],y=r.a.useState(!1),N=Object(d.a)(y,2),S=N[0],w=N[1],k=r.a.useState(!1),x=Object(d.a)(k,2),I=x[0],T=x[1],A=r.a.useState(),D=Object(d.a)(A,2),P=D[0],F=D[1],G=r.a.useState(!1),M=Object(d.a)(G,2),V=M[0],z=M[1],B=function(e){var a=e.target.id;h(Object(l.a)({},m,Object(o.a)({},a,!0)))},J=function(){T(!1),w(!1),h(m)},L=function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.price-s.cost,n={id:(new Date).getTime(),productId:s.id,price:s.price,cost:s.cost,profit:t,productName:s.name},S&&(n.shipping=P),I&&(n.commission=s.commission),J(),z(!0),e.next=8,a(n);case 8:z(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"card",onClick:function(){c(s)}},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-image-container overflow-hidden"},r.a.createElement("div",{className:"card-image",style:{backgroundImage:"url('".concat(i,"')")}}),r.a.createElement("div",{className:"add-sale-container"},r.a.createElement("b",{className:"reset-sale",onClick:J},"X"),E.commission||E.enableShipping||E.inputShipping?null:r.a.createElement(v.a,{type:"button",id:"enableShipping",onClick:B},"A\xf1adir Venta"),E.enableShipping?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{type:"switch",label:"\xbfIncluye envio?",className:"customized-switch",onChange:function(e){var a=e.target.checked;w(a)}}),r.a.createElement(v.a,{className:"mt-3",id:S?"inputShipping":"commission",onClick:B},"Continuar")):null,E.inputShipping?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{placeholder:"Precio de Envio",name:"shipping",type:"number",className:"shipping-input",value:P,onChange:function(e){var a=e.target.value;F(a?Number(a):a)}}),r.a.createElement(v.a,{className:"mt-3",id:"commission",onClick:B},"Continuar")):null,E.commission?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{type:"switch",label:"\xbfIncluye comisi\xf3n?",className:"customized-switch",onChange:function(e){var a=e.target.checked;T(a)}}),r.a.createElement(v.a,{className:"mt-3",onClick:L},"Fin")):null,V?r.a.createElement(f.a,{animation:"grow",variant:"secondary"}):null)),r.a.createElement("div",{className:"card-title"},r.a.createElement("div",{className:"title"},r.a.createElement("h4",null,"Ventas: ",t),r.a.createElement("h4",null,"Ingresos: RD$ ",n&&n.toLocaleString("en-US"))))))}),I=t(29),T=t.n(I),A=(t(45),[{id:1,name:"Airpods Serie 2",price:2500,cost:950,image:"/assets/images/products/airpods serie 2.png",commission:100},{id:2,name:"Airpods Pro",price:3e3,cost:1500,image:"".concat("","assets/images/products/airpodsPro.png"),commission:200},{id:3,name:"AppleWatch Serie 6",price:3400,cost:1680,image:"/assets/images/products/W26.png",commission:200},{id:4,name:"AKG",price:150,cost:40,image:"/assets/images/products/AKG.png",commission:100},{id:5,name:"LY002",price:600,cost:290,image:"/assets/images/products/LY002.png",commission:100},{id:6,name:"BX340BT",price:750,cost:470,image:"/assets/images/products/BX340BT.png",commission:100},{id:7,name:"K856",price:1150,cost:650,image:"/assets/images/products/K856.png",commission:100},{id:8,name:"QD21",price:600,cost:290,image:"/assets/images/products/QD21.png",commission:100},{id:9,name:"TG113",price:500,cost:260,image:"/assets/images/products/TG113.png",commission:100},{id:10,name:"TG117",price:750,cost:470,image:"/assets/images/products/TG117.png",commission:100},{id:11,name:"TG149",price:750,cost:470,image:"/assets/images/products/TG149.png",commission:100},{id:12,name:"AppleWatch Serie 5",price:3400,cost:1100,image:"/assets/images/products/T500.png",commission:200},{id:13,name:"T5 Plus",price:3400,cost:1380,image:"/assets/images/products/T500.png",commission:200}]),D=t(12),P=t(65),F=function(e){var a=e.headers,t=e.data,n=e.actions,c=void 0===n?[]:n;return r.a.createElement("div",null,r.a.createElement(P.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),a.map((function(e,a){return r.a.createElement("th",{key:a},e.label)})))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null,t+1),a.map((function(a,t){return r.a.createElement("td",{key:t},e[a.property])})),c.map((function(a,t){return r.a.createElement("td",{key:t},r.a.createElement(v.a,{type:"button",onClick:a.method(e)},a.label))}))))})))))},G=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],M=function(){var e=r.a.useState(!1),a=Object(d.a)(e,2),t=a[0],n=a[1],c=r.a.useState(!1),s=Object(d.a)(c,2),m=s[0],C=s[1],I=r.a.useState(!1),P=Object(d.a)(I,2),M=P[0],V=P[1],z=r.a.useState(),B=Object(d.a)(z,2),J=B[0],L=B[1],Q=r.a.useState(!1),W=Object(d.a)(Q,2),K=W[0],Y=W[1],R=r.a.useState(!1),X=Object(d.a)(R,2),$=X[0],U=X[1],q=r.a.useState(!1),H=Object(d.a)(q,2),Z=H[0],_=H[1],ee=r.a.useState([]),ae=Object(d.a)(ee,2),te=ae[0],ne=ae[1],re=r.a.useState({}),ce=Object(d.a)(re,2),se=ce[0],ie=ce[1],oe=r.a.useState({}),le=Object(d.a)(oe,2),me=le[0],ue=le[1],pe=r.a.useState({}),de=Object(d.a)(pe,2),fe=de[0],ge=de[1],be=r.a.useState(0),Ee=Object(d.a)(be,2),he=Ee[0],ve=Ee[1],ye=r.a.useState(0),Ne=Object(d.a)(ye,2),je=Ne[0],Oe=Ne[1],Se=r.a.useState([]),we=Object(d.a)(Se,2),ke=we[0],Ce=we[1],xe=r.a.useState("MostProfit"),Ie=Object(d.a)(xe,2),Te=Ie[0],Ae=Ie[1],De=r.a.useState("".concat(G[(new Date).getMonth()],"-").concat((new Date).getFullYear())),Pe=Object(d.a)(De,2),Fe=Pe[0],Ge=Pe[1],Me=function(e){ie(e),n(!0)},Ve=function(){var e=Object(p.a)(u.a.mark((function e(a){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,fetch("".concat("https://audsongs-calculator-api.wpadilla.vercel.app/api/","get-sales-data?date=").concat(a||Fe));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,ue(n),V(!1);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();r.a.useEffect((function(){Ve(),Le()}),[]);var ze=function(){var e=Object(p.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=se.price-se.cost,t={id:(new Date).getTime(),productId:se.id,price:se.price,profit:a,cost:se.cost,productName:se.name,shipping:se.shipping||0,commission:K?se.commission:0},e.next=4,Je(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(e){var a=e.target,t=a.name,n=a.value,r=Number(n),c=Object(l.a)({},se,Object(o.a)({},t,r));ie(c)},Je=function(){var e=Object(p.a)(u.a.mark((function e(a){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),t=me.sales||[],n=JSON.stringify({salesData:Object(l.a)({},me,{sales:[].concat(Object(i.a)(t),[a])}),date:Fe}),e.next=5,fetch("".concat("https://audsongs-calculator-api.wpadilla.vercel.app/api/","save-sales-data"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:n});case 5:if(200!==e.sent.status){e.next=12;break}return e.next=9,Ve();case 9:Object(D.b)("\xa1Venta Exitosa!",{type:"default"}),e.next=13;break;case 12:Object(D.b)("\xa1Error en la Venta!",{type:"error"});case 13:U(!1);case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Le=function(){var e=Object(p.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://audsongs-calculator-api.wpadilla.vercel.app/api/","dates-registered"));case 2:return a=e.sent,e.next=5,a.json();case 5:if(e.t0=e.sent,e.t0){e.next=8;break}e.t0=[];case 8:t=e.t0,t.find((function(e){return e===Fe}))||t.push(Fe),Ce(t);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(p.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),t=JSON.stringify({salesData:Object(l.a)({},me,{sales:Object(i.a)(a)}),date:Fe}),e.next=4,fetch("".concat("https://audsongs-calculator-api.wpadilla.vercel.app/api/","save-sales-data"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:t});case 4:if(200!==e.sent.status){e.next=11;break}return e.next=8,Ve();case 8:Object(D.b)("\xa1Registro actualizado Exitosamente!",{type:"default"}),e.next=12;break;case 11:Object(D.b)("\xa1Error en la Actualizacion!",{type:"error"});case 12:U(!1);case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();r.a.useEffect((function(){me.sales&&function(){var e={};Object.keys({shipping:0,commission:0,price:0,profit:0}).forEach((function(a){var t=Ke(a);e[a]=t})),ge(e);var a=.1*e.profit;ve(a);var t=.3*e.profit;Oe(t)}()}),[me]);var We,Ke=function(e){return me.sales.map((function(a){return a[e]?a[e]:null})).filter((function(e){return!!e})).reduce((function(e,a){return e+a}),0)},Ye=function(e){return me.sales?me.sales.filter((function(a){return a.productName===e})).map((function(e){return e.profit})).reduce((function(e,a){return e+a}),0):0},Re=function(){n(!t),_(!1)},Xe=[{label:"Eliminar",method:function(e){return function(){Ue(),L((function(){return $e(e.id)}))}}},{label:"Editar",method:function(){return function(){return console.log("editando....")}}}],$e=function(e){return Object(p.a)(u.a.mark((function a(){var t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=me.sales.filter((function(a,t){return a.id!==e})),C(!1),a.next=4,Qe(t);case 4:n=t.filter((function(e){return e.productId===se.id})),ne(Object(i.a)(n));case 6:case"end":return a.stop()}}),a)})))},Ue=function(){return C(!m)};switch(Te){case"MostProfit":We=me.sales||[],A.sort((function(e,a){var t=We.map((function(a){return a.productId===e.id?a.profit:void 0})).filter((function(e){return!!e})).reduce((function(e,a){return Number(e)+Number(a)}),0),n=We.map((function(e){return e.productId===a.id?e.profit:void 0})).filter((function(e){return!!e})).reduce((function(e,a){return Number(e)+Number(a)}),0);return Number(n)-Number(t)}));break;case"MostSales":!function(e){A.sort((function(a,t){var n=e.filter((function(e){return e.productId===a.id})).length,r=e.filter((function(e){return e.productId===t.id})).length;return Number(r)-Number(n)}))}(me.sales||[])}var qe=function(){var e=Object(p.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.target.value,Ge(t),Ve(t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,M?r.a.createElement("div",{className:"loading-sale-container"},r.a.createElement(f.a,{animation:"grow",variant:"secondary"})):null,r.a.createElement(g.a,{isOpen:m,toggle:Ue},r.a.createElement(b.a,{toggle:Ue},"Confirmaci\xf3n"),r.a.createElement(E.a,null,"\xbfEstas Seguro que deseas realizar esta acci\xf3n?"),r.a.createElement(h.a,null,r.a.createElement(v.a,{color:"primary",onClick:J},"Confirmar")," ",r.a.createElement(v.a,{color:"secondary",onClick:Ue},"Cancel"))),r.a.createElement(g.a,{isOpen:t,toggle:Re},r.a.createElement(b.a,{toggle:Re},se.name," | Nueva Venta"),r.a.createElement(E.a,null,$?r.a.createElement("div",{className:"loading-sale-container"},r.a.createElement(f.a,{animation:"grow",variant:"secondary"})):null,Z?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{color:"primary",className:"mb-3",type:"button",onClick:function(e){return _(!Z)}},"Crear Venta"),r.a.createElement(F,{data:te,headers:[{label:"Precio",property:"price"},{label:"Costo",property:"cost"},{label:"Ganancia",property:"profit"},{label:"Costo de Envio",property:"shipping"},{label:"Comisi\xf3n",property:"commission"}],actions:Xe})):r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(N.a,{for:"priceId"},"Precio:"),r.a.createElement(j.a,{onChange:Be,type:"number",name:"price",id:"priceId",placeholder:"Precio:",value:se.price})),r.a.createElement(y.a,null,r.a.createElement(N.a,{for:"shippingId"},"Envio:"),r.a.createElement(j.a,{onChange:Be,type:"number",name:"shipping",id:"shippingId",placeholder:"Envio:",value:se.shipping})),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{type:"switch",label:"\xbfIncluye Comisi\xf3n?",checked:K,className:"customized-switch",onChange:function(e){var a=e.target.checked;Y(a)}})),K?r.a.createElement(y.a,null,r.a.createElement(N.a,{for:"commissionId"},"Comisi\xf3n:"),r.a.createElement(j.a,{onChange:Be,type:"number",name:"commission",id:"commissionId",placeholder:"Comisi\xf3n:",value:se.commission})):null,r.a.createElement(v.a,{color:"primary",className:"mt-3",onClick:function(){if(me.sales){var e=me.sales.filter((function(e,a){return e.productId===se.id}));ne(Object(i.a)(e)),_(!0)}}},"Todas las Ventas")," ")),r.a.createElement(h.a,null,r.a.createElement(v.a,{color:Z?"dark":"primary",onClick:ze,disabled:Z},"A\xf1adir")," ",r.a.createElement(v.a,{color:"secondary",onClick:Re},"Cancel"))),r.a.createElement("div",{className:"d-flex align-items-center flex-column"},r.a.createElement(S.a,{lg:2,md:4,sm:4,className:"p-4"},r.a.createElement("img",{src:T.a,alt:"Logo AudSongs",className:"w-100"})),r.a.createElement(S.a,{sm:12,className:"d-flex justify-content-center mb-2"},r.a.createElement(y.a,null,r.a.createElement(j.a,{type:"select",name:"select",className:"select-date",defaultValue:Fe,onChange:qe},ke?ke.map((function(e,a){var t=e.split("-"),n=e===Fe;return r.a.createElement("option",{selected:n,key:a,value:e},t[0],"  ",t[1])})):r.a.createElement("option",null," ",G[(new Date).getMonth()]," ",(new Date).getFullYear())))),r.a.createElement(S.a,{sm:12,className:"d-flex justify-content-center mb-4 align-items-center"},r.a.createElement("label",{className:"mr-2 mb-0"},"M\xe1s Ingresos"),r.a.createElement(O.a,{type:"switch",label:"M\xe1s Vendidos",className:"customize-switch",onChange:function(e){var a=e.target.checked;Ae(a?"MostSales":"MostProfit")}})),r.a.createElement(S.a,{lg:10,md:10,sm:12,className:"d-flex justify-content-center"},r.a.createElement(w.a,{className:"justify-content-center label-grid col-lg-10"},r.a.createElement(k,{label:"Vendido",amount:fe.price,className:"total-label"}),r.a.createElement(k,{label:"Beneficio",amount:fe.profit,className:"total-label"}),r.a.createElement(k,{label:"Comisiones",amount:fe.commission,className:"total-label"}),r.a.createElement(k,{label:"Envios",amount:fe.shipping,className:"total-label"}),r.a.createElement(k,{label:"Promoci\xf3n",amount:je,className:"total-label"}),r.a.createElement(k,{label:"Diezmo",amount:he,className:"total-label"}))),r.a.createElement(S.a,{lg:8,md:10,sm:12,className:"cards mt-3"},A.map((function(e,a){return r.a.createElement(x,Object.assign({},e,{onSelect:Me,salesQuantity:(t=e.name,me.sales?me.sales.filter((function(e){return e.productName===t})).length:0),moneyGenerated:Ye(e.name),addSale:Je,key:a}));var t})))))};var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null),r.a.createElement(D.a,{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,pauseOnHover:!0}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=t(31);t(53),t(54);s.a.render(r.a.createElement(z.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.fcf0e97a.chunk.js.map