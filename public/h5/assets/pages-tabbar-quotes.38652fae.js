import{d as i,e as q,J as N,f as e,w as t,l as m,O as B,A as D,j as _,t as f,N as ne,F as E,x as Q,v as G,i as K,r as w,u as re,Q as ce,aa as ie,o as ue,c as de,z as pe,g as J,h as R,k as s,V as _e,m as A,n as fe,$ as U,ab as L,q as P,I as me,p as ge,a6 as $}from"./index-fcbdad1f.js";import{_ as ye}from"./layout.daec25cc.js";import{_ as ke}from"./page-meta.8634b088.js";import{c as xe,_ as he}from"./device.d443bdbe.js";import{d as ve}from"./dayjs.min.9de92248.js";import{_ as W}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.187a63f9.js";const we="./static/images/icon-search.png";const be={name:"fui-empty",props:{src:{type:String,default:""},width:{type:[Number,String],default:576},height:{type:[Number,String],default:318},title:{type:String,default:""},color:{type:String,default:""},size:{type:[Number,String],default:32},descr:{type:String,default:""},descrColor:{type:String,default:""},descrSize:{type:[Number,String],default:24},isFixed:{type:Boolean,default:!1},marginTop:{type:[Number,String],default:0}}};function Se(F,V,o,k,r,x){const h=Q,p=G,g=K;return i(),q(E,null,[N("本文件由FirstUI授权予南宁风吹雨网络科技有限公司（会员ID：  15 41，营业执照号：9    1   4   5 0100  M  A  BNH7309B）专用，请尊重知识产权，勿私下传播，违者追究法律责任。"),e(g,{class:D(["fui-empty__wrap",{"fui-empty__fixed":o.isFixed}]),style:B({marginTop:o.marginTop+"rpx"})},{default:t(()=>[o.src?(i(),m(h,{key:0,src:o.src,style:B({width:o.width+"rpx",height:o.height+"rpx"}),mode:"widthFix"},null,8,["src","style"])):N("v-if",!0),o.title?(i(),m(p,{key:1,class:D(["fui-empty__title",{"fui-empty__title-color":!o.color}]),style:B({color:o.color,fontSize:o.size+"rpx"})},{default:t(()=>[_(f(o.title),1)]),_:1},8,["class","style"])):N("v-if",!0),o.descr?(i(),m(p,{key:2,class:D(["fui-empty__desc",{"fui-empty__descr-color":!o.descrColor}]),style:B({color:o.descrColor,fontSize:o.descrSize+"rpx"})},{default:t(()=>[_(f(o.descr),1)]),_:1},8,["class","style"])):N("v-if",!0),ne(F.$slots,"default",{},void 0,!0)]),_:3},8,["class","style"])],2112)}const De=W(be,[["render",Se],["__scopeId","data-v-96ce24e3"]]),d={market:xe([{left:10,top:15,bottom:220,width:45,height:45,type:"round"},{left:60,right:365,top:12,bottom:220,width:90,height:19,type:"rect"},{left:60,right:365,top:40,bottom:220,width:55,height:19,type:"rect"},{left:200,right:365,top:25,bottom:220,width:90,height:19,type:"rect"},{left:300,right:365,top:15,bottom:220,width:80,height:40,type:"rect"}])};const Ce={__name:"quotes",setup(F){var M;function V(a){ge({url:a})}const o=(M=fe())==null?void 0:M.appContext.config.globalProperties.$wsUrl,k=w("");let r=null;const x=w(!1),{t:h}=re(),p=w({category_id:1,category:h("tabBar.quotes.foreignExchange")}),g=w([]),b=w(!1),S=w([]),H=ce(()=>{if(k.value){const a=new RegExp(k.value,"i");return S.value.filter(n=>n.full_name.match(a))}else return S.value});async function O(){x.value=!0;const a=await U.get(`/market/list?category_id=${p.value.category_id}`);S.value=a.data.map(n=>(n.logo=U.staticUrl(n.logo),n.nowData={close:1,high:1,low:11,open:11,symbol:"USD/AUD",timestamp:1704270547e3,volume:4},n))}async function X(a){r.close(),p.value.category_id=a.id,p.value.category=a.name,$("category_id",a.id),$("category",a.name),b.value=!1,await O(),r=J({url:o,success:()=>{console.log("连接成功")}}),r.onOpen(()=>{z(),I()}),r.onMessage(n=>{x.value=!1,j(n.data)}),await z()}async function Y(){if(g.value.length>0)return;const a=await U.get("/market/category");g.value=a.data,p.value.category_id=L("category_id")||g.value[0].id,p.value.category=L("category")||g.value[0].name,await O()}function j(a){const n=JSON.parse(a);n.ping?r.send({data:JSON.stringify({pong:n.ping})}):S.value.forEach(C=>{n.forEach(v=>{v.symbol===C.symbol&&(C.nowData=v)})})}function Z(a){return{symbol:a,type:"price",language:"en_US"}}function ee(a){r.send({data:JSON.stringify(Z(a))})}ie(()=>{r.close()});async function z(){let a="";S.value.forEach(n=>{a+=`${n.symbol}.`}),a=a.substring(0,a.length-1),ee(a)}function te(){r.send({data:JSON.stringify({type:"heartbeat",msg:"ping"})})}function I(){r!=null&&(te(),setTimeout(()=>{I()},3e3))}async function ae(){x.value=!0,await Y(),r===null&&(r=J({url:o,success:()=>{console.log("连接成功")}}),r.onOpen(()=>{z(),I()}),r.onMessage(a=>{x.value=!1,j(a.data)}))}return ue(()=>{r.close(),r=null}),de(async()=>{await ae()}),(a,n)=>{const C=R(P("page-meta"),ke),v=Q,le=me,l=K,y=G,u=R(P("fui-skeleton"),he),se=ye;return i(),q(E,null,[e(C),pe("div",{class:"init-top"}),e(se,{"class-name":"IndexRouter"},{default:t(()=>[e(l,{class:"px-[34px]"},{default:t(()=>[e(l,{class:"flex items-center bg-[#f5f7f9] py-[31px] px-[30px] rounded-[50px]"},{default:t(()=>[e(v,{class:"w-[35px] h-[38px] mr-[21px]",src:we}),e(le,{modelValue:s(k),"onUpdate:modelValue":n[0]||(n[0]=c=>_e(k)?k.value=c:null),placeholder:s(h)("tabBar.quotes.EnterTheContentHere"),class:"text-[#525252] text-[28px]",type:"text"},null,8,["modelValue","placeholder"])]),_:1}),e(l,{class:"mt-[59px] relative"},{default:t(()=>[e(l,{class:"flex items-center justify-between"},{default:t(()=>[e(y,{class:"text-[45px]"},{default:t(()=>[_(f(s(h)("tabBar.quotes.Market")),1)]),_:1}),e(l,{class:"flex items-center justify-between bg-black dropdown",onClick:n[1]||(n[1]=c=>b.value=!s(b))},{default:t(()=>[e(y,{class:"text-[26px] text-white px-[10px]"},{default:t(()=>[_(f(s(p).category),1)]),_:1}),e(v,{src:s(b)?"/static/images/icon-dropup.png":"/static/images/icon-dropdown.png",class:"w-[18px] h-[18px]"},null,8,["src"])]),_:1})]),_:1}),e(l,{class:D([s(b)?"h-auto":"h-0","dropdown-item bg-black text-white"])},{default:t(()=>[(i(!0),q(E,null,A(s(g),(c,T)=>(i(),m(l,{key:T,class:"item",onClick:oe=>X(c)},{default:t(()=>[e(y,{class:"text-[26px]"},{default:t(()=>[_(f(c.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1},8,["class"]),e(l,{class:"mt-[20px]"},{default:t(()=>[s(x)?(i(),m(l,{key:1},{default:t(()=>[e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),e(l,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(u,{"preload-list":s(d).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1})]),_:1})):(i(),m(l,{key:0},{default:t(()=>[s(H).length>0?(i(),m(l,{key:0},{default:t(()=>[(i(!0),q(E,null,A(s(H),(c,T)=>(i(),m(l,{key:T,class:"stock-row items-center",onClick:oe=>V(`/pages/position/chart?pair=${c.symbol}`)},{default:t(()=>[e(l,{class:"flex"},{default:t(()=>[e(v,{src:c.logo,class:"rounded-full w-[72px] h-[72px]"},null,8,["src"]),e(l,{class:"flex flex-col justify-between ml-[20px]"},{default:t(()=>[e(y,{class:"text-[30px]"},{default:t(()=>[_(f(c.name),1)]),_:2},1024),e(y,{class:"sub-title text-[22px]"},{default:t(()=>[_(f(s(ve)(c.nowData.timestamp).format("HH:mm:ss")),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(y,{class:"text-[28px] text-right"},{default:t(()=>[_(f(c.nowData.close.toFixed(4)),1)]),_:2},1024),e(l,{class:D([c.nowData.increase>0?"green-block":"red-block","h-[68px] ml-[20px] rounded-[10px] grid place-items-center green-block"])},{default:t(()=>[e(y,{class:"text-[22px] text-white"},{default:t(()=>[_(f(c.nowData.increase),1)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1032,["onClick"]))),128))]),_:1})):(i(),m(l,{key:1,class:"nodata"},{default:t(()=>[e(De,{title:s(h)("tabBar.quotes.NoDataAvailable"),src:"/static/images/option.png"},null,8,["title"])]),_:1}))]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})],64)}}},Ue=W(Ce,[["__scopeId","data-v-8c1dab7e"]]);export{Ue as default};