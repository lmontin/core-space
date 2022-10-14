import{d as k,c as _,o as s,a as y,r as f,u as o,b as x,w as $,e as u,f as L,g as n,t as d,n as b,h as i,_ as p,i as g,F as v,p as I,j as B,k as M,l as q,m as H,q as A,s as S,T as D}from"./main.d4ba5259.js";const N=k({__name:"AttributIcon",props:{attribute:null},setup(e){const t=e,c=_(()=>`${t.attribute.replace("_","-")}-icon`);return(r,l)=>(s(),y(f(o(c))))}}),V=["innerHTML"],F=k({__name:"IconLegend",props:{icon:null,tag:{default:"div"},mustache:{default:null},legend:{default:""}},setup(e){const t=e,{t:c}=x(),r=_(()=>t.mustache!=null&&!Array.isArray(t.mustache)),l=_(()=>{const m={};return m[t.icon]=!0,m}),h=_(()=>{const m=t.legend===""?t.icon:t.legend;return t.mustache!=null?c(m,Array.isArray(t.mustache)?t.mustache:[t.mustache]):c(m)});return(m,a)=>(s(),y(f(e.tag),{class:"icon-description"},{default:$(()=>[u("figure",null,[L(N,{attribute:e.icon},null,8,["attribute"]),o(r)?(s(),n("span",{key:0,class:b([o(l),"number"])},d(e.mustache),3)):i("",!0)]),u("span",{innerHTML:o(h)},null,8,V)]),_:1}))}});const C=p(F,[["__scopeId","data-v-80fd0033"]]),J=k({__name:"JustText",props:{attribute:null,tag:{default:"p"},mustache:{default:null}},setup(e){const t=e,{t:c}=x(),r=_(()=>t.mustache!=null?c(t.attribute,Array.isArray(t.mustache)?t.mustache:[t.mustache]):c(t.attribute));return(l,h)=>(s(),y(f(e.tag),{class:"attribute",innerHTML:o(r)},null,8,["innerHTML"]))}});const W=p(J,[["__scopeId","data-v-6c724132"]]),j=e=>(I("data-v-1c859459"),e=e(),B(),e),z=["innerHTML"],E={class:"crystals"},P=j(()=>u("svg",{fill:"none",height:"16",viewBox:"0 0 19 16",width:"19",xmlns:"http://www.w3.org/2000/svg"},[u("path",{d:"M7.76795 2C8.53775 0.666668 10.4623 0.666667 11.2321 2L16.8612 11.75C17.631 13.0833 16.6688 14.75 15.1292 14.75L3.87084 14.75C2.33124 14.75 1.36898 13.0833 2.13878 11.75L7.76795 2Z",fill:"black",stroke:"black","stroke-linejoin":"round","stroke-width":"2"})],-1)),G=[P],R=k({__name:"BuyWithCrystals",props:{tag:{default:"div"},name:null,buy:{default:0},crystals:null},setup(e){return(t,c)=>(s(),y(f(e.tag),null,{default:$(()=>[u("span",{innerHTML:t.$t("buy-with-crystal",[e.name,e.buy,e.crystals.length])},null,8,z),u("span",E,[(s(!0),n(v,null,g(e.crystals,(r,l)=>(s(),n("span",{key:l,class:b([r,"crystal"])},G,2))),128))])]),_:1}))}});const Z=p(R,[["__scopeId","data-v-1c859459"]]),K={class:"title"},O={key:0,class:"dl"},Q={key:0},U={key:1},X={key:2},Y={key:3},ee={key:4},te={key:5},se={key:0,class:"more"},ne={key:0,class:"list"},ae={key:1,class:"list"},le={key:2,class:"list"},ce=k({__name:"TokenDetails",props:{item:null,active:{type:Boolean}},setup(e){const t=e,c=_(()=>{const l={};return l[t.item.product]=!0,l[t.item.size]=!0,l[t.item.slug]=!0,l}),r=_(()=>[{key:"phase",value:t.item.phase},{key:"close",value:t.item.close},{key:"heavy",value:t.item.heavy},{key:"short",value:t.item.short,icon:"range"},{key:"medium",value:t.item.medium,icon:"range"},{key:"long",value:t.item.long,icon:"range"},{key:"throw",value:t.item.throw},{key:"grenade",value:t.item.grenade},{key:"armour",value:t.item.armour,icon:"physical_armour"},{key:"shield",value:t.item.shield,icon:"shield_armour"},{key:"dyson",value:t.item.dyson},{key:"move",value:t.item.move},{key:"scramble",value:t.item.scramble},{key:"stim-heal",value:t.item.stim_heal}].filter(h=>h.value!=null));return(l,h)=>{const m=M("router-link");return s(),y(m,{class:b([{active:e.active},"token-details"]),to:`/item/${e.item.slug}`,tabindex:"-1"},{default:$(()=>[u("figure",{class:b([o(c),"token"])},null,2),u("header",K,[u("h3",null,d(e.item.name),1),e.active?(s(),n("dl",O,[e.item.buy?(s(),n("dt",Q,d(l.$t("buy"))+":",1)):i("",!0),e.item.buy?(s(),n("dd",U,d(e.item.buy),1)):i("",!0),e.item.sell?(s(),n("dt",X,d(l.$t("sell"))+":",1)):i("",!0),e.item.sell?(s(),n("dd",Y,d(e.item.sell),1)):i("",!0),e.item.range?(s(),n("dt",ee,d(l.$t("range"))+":",1)):i("",!0),e.item.range?(s(),n("dd",te,d(l.$t(e.item.range)),1)):i("",!0)])):i("",!0)]),e.active?(s(),n("section",se,[e.item.description?(s(),n("ul",ne,[(s(!0),n(v,null,g(e.item.description,a=>(s(),y(W,{key:a,attribute:a,tag:"li"},null,8,["attribute"]))),128))])):i("",!0),o(r).length>0||e.item.icons?(s(),n("ul",ae,[(s(!0),n(v,null,g(o(r),a=>{var w;return s(),y(C,{key:a.key,icon:(w=a.icon)!=null?w:a.key,legend:a.key,mustache:a.value,tag:"li"},null,8,["icon","legend","mustache"])}),128)),(s(!0),n(v,null,g(e.item.icons,a=>(s(),y(C,{key:a,icon:a,tag:"li"},null,8,["icon"]))),128))])):i("",!0),e.item.crystals?(s(),n("ul",le,[e.item.crystals?(s(),y(Z,{key:0,buy:e.item.buy,crystals:e.item.crystals,name:e.item.name,tag:"li"},null,8,["buy","crystals","name"])):i("",!0)])):i("",!0)])):i("",!0)]),_:1},8,["class","to"])}}});const ue=p(ce,[["__scopeId","data-v-8c64d78d"]]),ie={class:"container"},oe={key:0,class:"summary with-back"},re=u("span",{class:"material-symbols-rounded icon"},"arrow_back",-1),de={key:1,class:"summary"},me=["innerHTML"],ye={key:2,class:"empty"},he=u("em",null,"\u{1F979}",-1),_e=u("br",null,null,-1),ke=u("br",null,null,-1),ve=k({__name:"TokensPage",props:{slug:{default:""},q:{default:""}},setup(e){const t=e,c=q();H(()=>{c.transfer({q:t.q,slug:t.slug})});const r=_(()=>`Search results for: <strong>${c.q}</strong>`),l=a=>(h.push("/"),a),h=A(),m=a=>(window.history.length>2?h.back():h.push("/"),a);return(a,w)=>(s(),n("section",ie,[e.slug?(s(),n("p",oe,[u("button",{class:"btn",type:"button",onClick:m},[re,u("span",null,d(a.$t("back")),1)])])):o(c).q?(s(),n("p",de,[u("span",{innerHTML:o(r)},null,8,me),u("button",{class:"btn-link",type:"button",onClick:l},d(a.$t("clear_filter")),1)])):i("",!0),o(c).items.length===0?(s(),n("p",ye,[he,_e,ke,S(" "+d(a.$t("no_result")),1)])):i("",!0),L(D,{class:b([{"with-q":o(c).q!==""},"tokens"]),name:"list",tag:"div"},{default:$(()=>[(s(!0),n(v,null,g(o(c).items,T=>(s(),y(ue,{key:T.slug,active:T.slug===e.slug,item:T,class:"item"},null,8,["active","item"]))),128))]),_:1},8,["class"])]))}});export{ve as default};
