"use strict";(self["webpackChunkquasarteste2"]=self["webpackChunkquasarteste2"]||[]).push([[763],{7763:(l,a,e)=>{e.r(a),e.d(a,{default:()=>ll});var o=e(3673),r=e(2323);(0,o.dD)("data-v-7035f082");const t={class:"q-pa-md",style:{"max-width":"400px"}},i=(0,o._)("h5",{class:"q-mt-sm"},"Entrada de veículo",-1),n={class:"row q-col-gutter-xs"},u={class:"col-12"},s={class:"row row q-col-gutter-xs"},c={class:"col-6 col-md-6"},d={class:"col-6 col-md-6"},m={class:"row row q-col-gutter-xs"},p={class:"col-4 col-md-4"},v={class:"col-8 col-md-8"},_={class:"row q-col-gutter-xs"},g={class:"col-4 col-md-4"},b={class:"col-4 col-md-4"},y={class:"col-4 col-md-4"},V={class:"col-6 col-md-6"},f={class:"col-6 col-md-6"},h={class:"col-6"},w={class:"col-6"},D=(0,o._)("div",{class:"text-h6"},"Veículo registrado!",-1),k={class:"dialog_save_ok"},q=(0,o._)("b",null,"Entrada:",-1),C=(0,o._)("br",null,null,-1),R=(0,o._)("br",null,null,-1),W=(0,o._)("b",null,"Placa:",-1),S=(0,o._)("br",null,null,-1),x=(0,o._)("b",null,"Ticket:",-1);function U(l,a,e,U,O,F){const Q=(0,o.up)("q-input"),Z=(0,o.up)("QCurrencyInput"),I=(0,o.up)("q-select"),H=(0,o.up)("q-btn"),B=(0,o.up)("q-form"),G=(0,o.up)("q-card-section"),K=(0,o.up)("q-card-actions"),M=(0,o.up)("q-card"),N=(0,o.up)("q-dialog"),X=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",t,[i,(0,o.Wm)(B,{class:"q-gutter-md",onSubmit:U.insert,onReset:U.onReset},{default:(0,o.w5)((()=>{var l;return[(0,o._)("div",n,[(0,o._)("div",u,[(0,o.Wm)(Q,{class:"font1",modelValue:U.car.in_timestamp,"onUpdate:modelValue":a[0]||(a[0]=l=>U.car.in_timestamp=l),filled:"",label:"Entrada",readonly:""},null,8,["modelValue"])])]),(0,o._)("div",s,[(0,o._)("div",c,[(0,o.Wm)(Q,{mask:"XXXXXXX",class:"font2",modelValue:U.car.placa,"onUpdate:modelValue":a[1]||(a[1]=l=>U.car.placa=l),maxlength:"7",filled:"",label:"Placa",autofocus:"",debounce:"1000",rules:[l=>!!l||"Defina a placa",l=>7==l.length||"7 dígitos"]},null,8,["modelValue","rules"])]),(0,o._)("div",d,[(0,o.Wm)(Q,{class:"font2",modelValue:U.car.modelo,"onUpdate:modelValue":a[2]||(a[2]=l=>U.car.modelo=l),filled:"",label:"Modelo"},null,8,["modelValue"])])]),(0,o._)("div",m,[(0,o._)("div",p,[(0,o.Wm)(Q,{class:"font2",modelValue:U.car.cor,"onUpdate:modelValue":a[3]||(a[3]=l=>U.car.cor=l),filled:"",label:"Cor"},null,8,["modelValue"])]),(0,o._)("div",v,[(0,o.Wm)(Q,{class:"font2",modelValue:U.car.obs,"onUpdate:modelValue":a[4]||(a[4]=l=>U.car.obs=l),filled:"",label:"Obs"},null,8,["modelValue"])])]),(0,o._)("div",_,[(0,o._)("div",g,[(0,o.Wm)(Q,{class:"font2",modelValue:U.car.n_diarias,"onUpdate:modelValue":a[5]||(a[5]=l=>U.car.n_diarias=l),filled:"",label:"Diárias"},null,8,["modelValue"])]),(0,o._)("div",b,[(0,o.Wm)(Z,{modelValue:U.car.valor_diaria,"onUpdate:modelValue":a[6]||(a[6]=l=>U.car.valor_diaria=l),label:"Valor diária",key:U.componentKey_valor_diaria,options:{locale:"pt-BR",currency:"BRL",currencyDisplay:"symbol",valueRange:void 0,precision:void 0,hideCurrencySymbolOnFocus:!1,hideGroupingSeparatorOnFocus:!1,hideNegligibleDecimalDigitsOnFocus:!1,autoDecimalDigits:!0,exportValueAsInteger:!1,autoSign:!0,useGrouping:!0}},null,8,["modelValue"])]),(0,o._)("div",y,[(0,o.Wm)(Z,{key:U.componentKey,modelValue:U.car.valor_total,"onUpdate:modelValue":a[7]||(a[7]=l=>U.car.valor_total=l),label:"Total",readonly:"",options:{locale:"pt-BR",currency:"BRL",currencyDisplay:"symbol",valueRange:void 0,precision:void 0,hideCurrencySymbolOnFocus:!1,hideGroupingSeparatorOnFocus:!1,hideNegligibleDecimalDigitsOnFocus:!1,autoDecimalDigits:!0,exportValueAsInteger:!1,autoSign:!0,useGrouping:!0}},null,8,["modelValue"])]),(0,o._)("div",V,[(0,o.Wm)(I,{modelValue:U.forma_de_pagamento,"onUpdate:modelValue":a[8]||(a[8]=l=>U.forma_de_pagamento=l),options:U.forma_de_pagamento_options,label:"Forma de pagamento"},null,8,["modelValue","options"])]),(0,o._)("div",f,[(0,o.Wm)(Z,{key:U.componentKey_valor_pago,modelValue:U.car.valor_pago,"onUpdate:modelValue":a[9]||(a[9]=l=>U.car.valor_pago=l),label:"Valor pago",options:{locale:"pt-BR",currency:"BRL",currencyDisplay:"symbol",valueRange:void 0,precision:void 0,hideCurrencySymbolOnFocus:!1,hideGroupingSeparatorOnFocus:!1,hideNegligibleDecimalDigitsOnFocus:!1,autoDecimalDigits:!0,exportValueAsInteger:!1,autoSign:!0,useGrouping:!0}},null,8,["modelValue"])]),(0,o._)("div",h,[(0,o.Wm)(Z,{key:U.componentKey,modelValue:U.car.valor_troco,"onUpdate:modelValue":a[10]||(a[10]=l=>U.car.valor_troco=l),label:"Troco",readonly:"",options:{locale:"pt-BR",currency:"BRL",currencyDisplay:"symbol",valueRange:void 0,precision:void 0,hideCurrencySymbolOnFocus:!1,hideGroupingSeparatorOnFocus:!1,hideNegligibleDecimalDigitsOnFocus:!1,autoDecimalDigits:!0,exportValueAsInteger:!1,autoSign:!0,useGrouping:!0}},null,8,["modelValue"])]),(0,o._)("div",w,[(0,o.Wm)(Q,{class:"font2",modelValue:U.car.cliente_email,"onUpdate:modelValue":a[11]||(a[11]=l=>U.car.cliente_email=l),filled:"",label:"Email do comprovante"},null,8,["modelValue"])])]),(0,o._)("div",null,[(null===(l=U.car.placa)||void 0===l?void 0:l.length)>4&&U.car.valor_troco>=0?((0,o.wg)(),(0,o.j4)(H,{key:0,label:"Registrar",type:"submit",color:"primary"})):(0,o.kq)("",!0),(0,o.Wm)(H,{label:"Cancelar",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]})),_:1},8,["onSubmit","onReset"])]),(0,o.Wm)(N,{modelValue:U.dialog_save_ok,"onUpdate:modelValue":a[12]||(a[12]=l=>U.dialog_save_ok=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{style:{width:"300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(G,null,{default:(0,o.w5)((()=>[D])),_:1}),(0,o.Wm)(G,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("span",k,[q,C,(0,o.Uk)((0,r.zw)(U.registrada.timestamp),1),R,W,(0,o.Uk)(" "+(0,r.zw)(U.registrada.placa),1),S,x,(0,o.Uk)(" "+(0,r.zw)(U.registrada.ticket),1)])])),_:1}),(0,o.Wm)(K,{align:"right",class:"bg-white text-teal"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(H,{flat:"",label:"OK"},null,512),[[X]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}(0,o.Cn)();var O=e(8825),F=(e(1082),e(1959)),Q=e(9582),Z=e(2052);e(8064);function I(l,a,e,r,t,i){const n=(0,o.up)("q-input");return(0,o.wg)(),(0,o.j4)(n,{ref:"inputRef",modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),outlined:"",label:e.label,"error-message":r.errorMessage,error:!!r.errorMessage},null,8,["modelValue","label","error-message","error"])}var H=e(7397),B=e(3497);const G={name:"QCurrencyInput",props:{label:String,modelValue:Number,options:Object},setup(l){const{inputRef:a}=(0,H.Er)(l.options),e=l=>!0,{errorMessage:o,value:r}=(0,B.U$)("amount",e);return{inputRef:a,errorMessage:o,value:r}}};var K=e(4842),M=e(7518),N=e.n(M);G.render=I;const X=G;N()(G,"components",{QInput:K.Z});const A={components:{QCurrencyInput:X},setup(){var l=Z.Z.firestore();const a=(0,Q.tv)(),e=(0,F.iH)(40),r=(0,F.iH)(0),t=(0,F.iH)(!1),i=(0,F.iH)({}),n=(0,F.iH)(0),u=(0,F.iH)(0),s=(0,F.iH)(0),c=(0,F.iH)("Dinheiro"),d=["Dinheiro","Cartão de débito","Cartão de crédito","Pix","Outros"],m=(Z.Z.auth().onAuthStateChanged((function(l){l||(alert("you must be logged in to view this. redirecting to the home page"),a.push("/"))})),(0,O.Z)(),{masked:!1,prefix:"",suffix:"",thousands:".",decimal:",",precision:2,disableNegative:!1,disabled:!1,min:null,max:null,allowBlank:!1,minimumNumberOfCharacters:0}),p=(0,F.iH)({in_timestamp:null,placa:null,modelo:null,cor:null,obs:null,n_diarias:1,valor_diaria:30,valor_total:35,valor_pago:0,valor_troco:0,cliente_email:null});const v=()=>{const l=new Date,a=l.getDate()+"-"+(l.getMonth()+1)+"-"+l.getFullYear(),e=l.getHours()+":"+l.getMinutes()+":"+l.getSeconds(),o=e+"  "+a;p.value.in_timestamp=o};(0,o.YP)((()=>p.value.valor_diaria),(l=>{console.log(12,l)})),(0,o.m0)((()=>{n.value+=1,p.value.valor_total=p.value.n_diarias*p.value.valor_diaria,console.log(p.value.n_diarias,p.value.valor_diaria,p.value.valor_total),p.value.valor_troco=p.value.valor_pago-p.value.valor_total}));const _=async()=>{p.value={in_timestamp:null,placa:null,modelo:null,cor:null,obs:null,n_diarias:1,valor_diaria:30,valor_total:0,valor_pago:0,valor_troco:0,out_timestamp:null},await(0,o.Y3)(),p.value.valor_diaria=30,n.value+=1,u.value+=1,s.value+=1},g=async()=>{const a=l.collection("carros"),e=await a.get(),o=e.size;console.log("count:",o),l.collection("carros").add({domain:"teste",in_timestamp:(new Date).getTime(),modelo:p.value.modelo,cor:p.value.cor,placa:p.value.placa,obs:p.value.obs,n_diarias:p.value.n_diarias,valor_diaria:p.value.valor_diaria,valor_total:p.value.valor_total,valor_pago:p.value.valor_pago,valor_troco:p.value.valor_troco,out_timestamp:null,ticket:o}).then((l=>{console.log("Document written with ID: ",l.id)})).catch((l=>{console.error("Error adding document: ",l)})),i.value={timestamp:p.value.in_timestamp,placa:p.value.placa,ticket:o},_(),t.value=!0};return setInterval(v,1e3),{dialog_save_ok:t,registrada:i,ticket:r,componentKey:n,componentKey_valor_pago:u,componentKey_valor_diaria:s,insert:g,car:p,onReset:_,config:m,valor_diaria:e,forma_de_pagamento:c,forma_de_pagamento_options:d}}};var E=e(8689),P=e(7637),T=e(8886),z=e(8240),L=e(6778),Y=e(151),j=e(5589),$=e(9367),J=e(677);A.render=U,A.__scopeId="data-v-7035f082";const ll=A;N()(A,"components",{QForm:E.Z,QInput:K.Z,QSelect:P.Z,QToggle:T.Z,QBtn:z.Z,QDialog:L.Z,QCard:Y.Z,QCardSection:j.Z,QCardActions:$.Z}),N()(A,"directives",{ClosePopup:J.Z})}}]);