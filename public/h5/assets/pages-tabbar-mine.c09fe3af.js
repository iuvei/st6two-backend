import{a as S,u as D,r as P,Q as A,c as F,d,e as y,f as e,z as N,w as t,F as C,h as O,k as a,j as c,t as l,l as k,A as B,m as T,a5 as U,p as z,a3 as E,D as h,q as V,x as q,v as H,i as M,a6 as Q,a7 as R,$ as G,a8 as J,a9 as K}from"./index-077585d0.js";import{_ as W}from"./layout.86a0f20e.js";import{_ as X}from"./page-meta.bf08dab4.js";import{_ as Y}from"./icon-edit.4b477c18.js";import{_ as Z}from"./icon-invite.9f2e3d27.js";import{_ as ee}from"./_plugin-vue_export-helper.c27b6911.js";const te="./static/images/icon-small-invite.png",se="./static/images/icon-option.png",f="./static/images/icon-right-arrow.png",ae="./static/images/icon-wallet.png",le="./static/images/icon-real.png",ne="./static/images/icon-small-language.png",ie="./static/images/icon-small-password.png",ce="./static/images/icon-market.png",oe="./static/images/icon-service.png",re="./static/images/icon-about.png",pe="./static/images/icon-logout.png",ue="./static/images/icon-popup-language.png";const xe={__name:"mine",setup(fe){const u=S(),{t:o,locale:g}=D(),_=P(!1);function $(x){Q("lang",x),R(x),g.value=x,_.value=!1}async function I(){const x=async n=>{if(n.confirm){const{code:w}=await G.get("/user/logout");w===1?(J(),K({url:"/pages/common/login"})):h({title:o("tabBar.mine.LogOutFailed"),icon:"none"})}};U({title:o("tabBar.mine.LogOut"),content:o("tabBar.mine.ConfigLout"),success:x})}function m(x){z({url:x})}function b(){E({data:u.userInfo.invite_code,success(){h({title:o("tabBar.mine.CopySuccess"),icon:"none"})}})}const v=[{title:"English",value:"en"},{title:"日本語",value:"ja"},{title:"한국어",value:"kr"},{title:"繁体中文",value:"zhHant"},{title:"Deutsch",value:"de"},{title:"Français",value:"fr"},{title:"Русский язык",value:"ru"},{title:"Português",value:"pt"},{title:"italiano",value:"it"}],j=A(()=>v.find(x=>x.value===g.value));return F(async()=>{u.userInfo.id||await u.getUserInfo()}),(x,n)=>{const w=O(V("page-meta"),X),i=q,r=H,s=M,L=W;return d(),y(C,null,[e(w),N("div",{class:"init-top"}),e(L,{"class-name":"IndexRouter"},{default:t(()=>[e(s,{class:"card mx-auto"},{default:t(()=>[e(s,{class:"flex"},{default:t(()=>[e(i,{src:a(u).userInfo.avatar?a(u).getAvatar():"/static/images/avatar.png",class:"w-[132px] h-[132px] rounded-full"},null,8,["src"]),e(s,{class:"flex-1 ml-[19px]"},{default:t(()=>[e(s,{class:"flex items-center justify-between text-white"},{default:t(()=>[e(r,{class:"text-[38px] font-bold"},{default:t(()=>[c(l(a(u).userInfo.nickname),1)]),_:1}),e(i,{class:"w-[54px] h-[54px]",src:Y,onClick:n[0]||(n[0]=p=>m("/pages/mine/userInfo"))})]),_:1}),e(s,{class:"text-[25px] text-white"},{default:t(()=>[e(r,null,{default:t(()=>[c(l(a(o)("tabBar.mine.Credit"))+": "+l(a(u).userInfo.credit),1)]),_:1})]),_:1}),e(s,{class:"text-[25px] text-white mt-[10px]"},{default:t(()=>[e(r,null,{default:t(()=>[c("ID: "+l(a(u).userInfo.id),1)]),_:1})]),_:1}),e(s,{class:"copy-wrap flex items-center text-center h-[40px] mt-[24px] px-[24px] bg-white rounded-[20px]",onClick:b},{default:t(()=>[e(s,{class:"mr-[14px] grid place-items-center"},{default:t(()=>[e(i,{class:"w-[24px] h-[24px]",src:te})]),_:1}),e(r,{class:"text-[24px]"},{default:t(()=>[c(l(a(u).userInfo.invite_code),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"mt-[40px] px-[34px]"},{default:t(()=>[e(r,{class:"text-[45px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.AccountDetails")),1)]),_:1}),e(s,{class:"mt-[20px] p-[30px] bg-[#f5f7f9] rounded-[30px]"},{default:t(()=>[e(s,{class:"flex items-center justify-between",onClick:n[1]||(n[1]=p=>m("/pages/mine/option"))},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:se}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.OptionOrders")),1)]),_:1})]),_:1}),e(i,{class:"h-[18px] w-[18px]",src:f})]),_:1}),e(s,{class:"flex items-center justify-between mt-[35px]",onClick:n[2]||(n[2]=p=>m("/pages/mine/wallet"))},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:ae}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.Purse")),1)]),_:1})]),_:1}),e(i,{class:"h-[18px] w-[18px]",src:f})]),_:1}),e(s,{class:"flex items-center justify-between mt-[35px]",onClick:n[3]||(n[3]=p=>m("/pages/mine/certified"))},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:le}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.Certified")),1)]),_:1})]),_:1}),a(u).getUserInfo().is_certified==1?(d(),k(i,{key:0,class:"h-[18px] w-[18px]",src:f})):(d(),k(s,{key:1,class:"green-text"},{default:t(()=>[c(l(a(o)("tabBar.mine.realName")),1)]),_:1}))]),_:1}),e(s,{class:"flex items-center justify-between mt-[35px]",onClick:n[4]||(n[4]=p=>_.value=!0)},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:ne}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.Language")),1)]),_:1})]),_:1}),e(r,{class:"sub-title"},{default:t(()=>[c(l(a(j).title),1)]),_:1})]),_:1}),e(s,{class:"flex items-center justify-between mt-[35px]",onClick:n[5]||(n[5]=p=>m("/pages/mine/changePassword"))},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:ie}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.ChangePassword")),1)]),_:1})]),_:1}),e(i,{class:"h-[18px] w-[18px]",src:f})]),_:1})]),_:1})]),_:1}),e(s,{class:"mt-[40px] px-[34px]"},{default:t(()=>[e(r,{class:"text-[45px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.HelpAndSupport")),1)]),_:1}),e(s,{class:"mt-[20px] p-[30px] bg-[#f5f7f9] rounded-[30px]"},{default:t(()=>[e(s,{class:"flex items-center justify-between"},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:ce}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.MarketPattern")),1)]),_:1})]),_:1}),e(i,{class:"h-[18px] w-[18px]",src:f})]),_:1}),e(s,{class:"flex items-center justify-between mt-[35px]",onClick:n[6]||(n[6]=p=>m("/pages/mine/service"))},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:oe}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.CustomerService")),1)]),_:1})]),_:1}),e(i,{class:"h-[18px] w-[18px]",src:f})]),_:1}),e(s,{class:"flex items-center justify-between mt-[35px]",onClick:b},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:Z}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.InvitationLink")),1)]),_:1})]),_:1}),e(r,{class:"text-[28px] sub-title"},{default:t(()=>[c(l(a(o)("tabBar.mine.ClickToCopy")),1)]),_:1})]),_:1}),e(s,{class:"flex items-center justify-between mt-[35px]",onClick:n[7]||(n[7]=p=>m("/pages/mine/about"))},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:re}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.AboutUs")),1)]),_:1})]),_:1}),e(i,{class:"h-[18px] w-[18px]",src:f})]),_:1}),e(s,{class:"flex items-center justify-between mt-[35px]",onClick:I},{default:t(()=>[e(s,{class:"flex items-center"},{default:t(()=>[e(i,{class:"w-[40px] h-[40px] mr-[18px]",src:pe}),e(r,{class:"text-[28px]"},{default:t(()=>[c(l(a(o)("tabBar.mine.Logout")),1)]),_:1})]),_:1}),e(i,{class:"h-[18px] w-[18px]",src:f})]),_:1})]),_:1})]),_:1}),e(s,{class:B([a(_)?"":"hidden","transition"])},{default:t(()=>[e(s,{class:"popup-wrap"},{default:t(()=>[e(s,{class:"container"},{default:t(()=>[e(s,{class:"text-center"},{default:t(()=>[e(i,{class:"icon",src:ue})]),_:1}),e(s,{class:"slot-wrap text-center"},{default:t(()=>[e(s,{class:"mt-[120px]"},{default:t(()=>[(d(),y(C,null,T(v,p=>e(s,{key:p.code,class:B([p.value===a(g)?"active":"","p-[15px] text-[26px] sub-title"]),onClick:me=>$(p.value)},{default:t(()=>[e(r,null,{default:t(()=>[c(l(p.title),1)]),_:2},1024)]),_:2},1032,["class","onClick"])),64))]),_:1})]),_:1}),e(s,{class:"btn-wrap flex justify-around items-center font-bold"},{default:t(()=>[e(r,{class:"btn sub-title bg-[#f5f7f9]",onClick:n[8]||(n[8]=p=>_.value=!1)},{default:t(()=>[c(l(a(o)("tabBar.mine.Cancel")),1)]),_:1}),e(r,{class:"btn text-white bg-black",onClick:n[9]||(n[9]=p=>_.value=!1)},{default:t(()=>[c(l(a(o)("tabBar.mine.Confirm")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])]),_:1})],64)}}},ye=ee(xe,[["__scopeId","data-v-39d47bd3"]]);export{ye as default};