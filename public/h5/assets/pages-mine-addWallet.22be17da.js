import{C as A,r as f,u as D,c as T,$ as v,d as y,e as g,f as e,z as V,w as a,j as _,t as p,k as t,A as I,F as w,m as S,E,h as j,q as F,v as N,x as q,i as z,I as L,l as P,D as H}from"./index-f1a5fda7.js";import{_ as K,l as O}from"./layout.9bfaeb2c.js";import{_ as R}from"./page-meta.c41807e0.js";import{_ as U}from"./_plugin-vue_export-helper.c27b6911.js";const G=A({__name:"addWallet",setup(J){const r=f(!1),n=f({currency_id:"",currency_name:"",address:""}),{t:l}=D();function x(s){H({title:s,icon:"none"})}function h(){const s=["currency_id","address"],c=[l("mine.addWallet.PleaseSelectCurrency"),l("mine.addWallet.PleaseEnterAddress")];for(let d=0;d<s.length;d++)if(!n.value[s[d]]){x(c[d]);return}v.post("/user/addWallet",n.value).then(d=>{d.code===1?(x(l("mine.addBank.AddSuccess")),v.back()):x(l("mine.addBank.AddFailed"))})}function k(s){n.value.currency_id=s.id,n.value.currency_name=s.name,r.value=!1}const m=f([]);T(()=>{v.get("/user/getCurrency").then(s=>{m.value=s.data,n.value.currency_name=m.value[0].name,n.value.currency_id=m.value[0].id})});const C=f({showTopBar:!0,topBarBgColor:"white",showTopBarBackBtn:!0,topBarTitle:l("mine.addBank.AddWallet")});return E(O,C),(s,c)=>{const d=j(F("page-meta"),R),u=N,B=q,o=z,b=L,W=K;return y(),g(w,null,[e(d),V("div",{class:"init-top"}),e(W,{"class-name":"IndexRouter"},{default:a(()=>[e(o,{class:"px-[34px]"},{default:a(()=>[e(o,{class:"relative"},{default:a(()=>[e(o,{class:"flex items-center justify-between"},{default:a(()=>[e(u,{class:"text-[35px]"},{default:a(()=>[_(p(t(l)("mine.addWallet.ChoiceOfCurrency")),1)]),_:1}),e(o,{class:"flex items-center justify-between bg-black dropdown",onClick:c[0]||(c[0]=i=>r.value=!t(r))},{default:a(()=>[e(u,{class:"text-[26px] text-white px-[10px]"},{default:a(()=>[_(p(t(n).currency_name),1)]),_:1}),e(B,{src:t(r)?"/static/images/icon-dropup.png":"/static/images/icon-dropdown.png",class:"w-[18px] h-[18px]"},null,8,["src"])]),_:1})]),_:1}),e(o,{class:I([t(r)?"h-auto":"h-0","dropdown-item bg-black text-white"])},{default:a(()=>[(y(!0),g(w,null,S(t(m),(i,$)=>(y(),P(o,{key:$,class:"item",onClick:M=>k(i)},{default:a(()=>[e(u,{class:"text-[26px]"},{default:a(()=>[_(p(i.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1},8,["class"])]),_:1}),e(o,{class:"mt-[40px] p-[30px] bg-[#f5f7f9] rounded-[20px]"},{default:a(()=>[e(u,{class:"text-[30px]"},{default:a(()=>[_(p(t(l)("mine.addWallet.AddAddress")),1)]),_:1}),e(b,{modelValue:t(n).address,"onUpdate:modelValue":c[1]||(c[1]=i=>t(n).address=i),class:"input mt-[29px] text-[14px]",placeholder:t(l)("mine.addWallet.addressHere"),type:"text"},null,8,["modelValue","placeholder"])]),_:1}),e(o,{class:"btn-wrap text-center"},{default:a(()=>[e(o,{class:"bg-black py-[33px] rounded-[20px]",onClick:h},{default:a(()=>[e(u,{class:"text-[32px] font-bold text-white"},{default:a(()=>[_(p(t(l)("mine.addWallet.Save")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});const ee=U(G,[["__scopeId","data-v-9df69250"]]);export{ee as default};