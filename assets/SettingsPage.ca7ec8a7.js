import{d as C,c as L,o as c,a as p,s as O,v as k,f as e,t as r,n as E,j as T,k as w,_ as f,F as N,h as R,x as V,i as A,w as b,b as i,e as P,l as D,y as M,z as F,u as U,A as G,m as W,g as v,q as m,B as S,D as x,E as q}from"./main.415cac16.js";const H=t=>(T("data-v-7a008a19"),t=t(),w(),t),Y=["for"],Z=["id","value"],Q={class:"option"},j={class:"name"},z=H(()=>e("span",{class:"material-symbols-rounded off"}," radio_button_unchecked ",-1)),K=H(()=>e("span",{class:"material-symbols-rounded on"}," radio_button_checked ",-1)),X={class:"preview"},J=C({__name:"ThemeOption",props:{name:{},value:{},modelValue:{}},emits:["update:modelValue"],setup(t,{emit:u}){const a=t,l=L({get:()=>a.modelValue,set:o=>u("update:modelValue",o)}),s=L(()=>`${a.value}_mode`),d={dark:{quote:"I think we've been lucky. We've managed to catch the First Born on the hop. Did they seem more organised to you when we went on that last raid?",by:"Balcor, Nerind'ar, age: 60",image:"balcor"},light:{quote:"They did. I kept a couple of the Engrams aside. Daric thought we might be able to use them, what do you think, Balcor?",by:"Cassiopeia Peltier, Human, age: 32",image:"cassie"}},n=L(()=>d[a.value]);return(o,I)=>(c(),p("label",{for:o.name,class:"theme-option"},[O(e("input",{id:o.name,"onUpdate:modelValue":I[0]||(I[0]=_=>l.value=_),value:o.value,name:"theme",type:"radio"},null,8,Z),[[k,l.value]]),e("span",Q,[e("span",j,[z,K,e("span",null,r(o.$t(s.value)),1)]),e("span",X,[e("span",{class:E([n.value.image,"crew"])},null,2),e("strong",null,r(n.value.quote),1),e("small",null,r(n.value.by),1)])])],8,Y))}});const $=f(J,[["__scopeId","data-v-7a008a19"]]),ee={class:"radio-group"},te=["id","name","value"],oe=C({__name:"BaseRadioGroup",props:{name:{},options:{},modelValue:{}},emits:["update:modelValue"],setup(t,{emit:u}){const a=t,l=L({get:()=>a.modelValue,set:s=>u("update:modelValue",s)});return(s,d)=>(c(),p("div",ee,[(c(!0),p(N,null,R(s.options,n=>(c(),p("label",{key:n,class:"radio"},[O(e("input",{id:`${s.name}-${n}`,"onUpdate:modelValue":d[0]||(d[0]=o=>l.value=o),name:s.name,value:n,type:"radio"},null,8,te),[[k,l.value]]),e("span",null,r(s.$t(n)),1)]))),128))]))}});const se=f(oe,[["__scopeId","data-v-a475325b"]]),B=t=>(T("data-v-1549b662"),t=t(),w(),t),ae=B(()=>e("section",{class:"image"},[e("figure"),e("span",{class:"checkbox material-symbols-rounded"},"done")],-1)),ne={class:"product"},le={class:"name"},ie=["href"],de=B(()=>e("span",{class:"material-symbols-rounded"},"shopping_cart",-1)),re=C({__name:"ProductOption",props:{tag:{default:"div"},option:{},selected:{}},emits:["select"],setup(t,{emit:u}){const a=t,l=V(),s=L(()=>{const o={active:a.selected.indexOf(a.option)>=0};return o[a.option]=!0,o}),d=o=>(u("select",a.option),o),n=o=>(o.stopPropagation(),o);return(o,I)=>(c(),A(D(o.tag),{class:E([s.value,"product-option"])},{default:b(()=>[e("div",{class:"container",onClick:d},[ae,e("header",ne,[e("strong",le,r(o.$t(o.option)),1)])]),i(l).getBuyNowLink(o.option)?(c(),p("a",{key:0,href:i(l).getBuyNowLink(o.option),class:"buy-now",target:"_blank",onClick:n},[de,e("span",null,r(o.$t("buy-now")),1)],8,ie)):P("",!0)]),_:1},8,["class"]))}});const ce=f(re,[["__scopeId","data-v-1549b662"]]),ue={class:"products"},pe=C({__name:"ProductSelector",props:{modelValue:{},options:{}},emits:["update:modelValue"],setup(t,{emit:u}){const a=t,l=s=>{const d=[...a.modelValue],n=d.indexOf(s);n>=0?d.splice(n,1):d.push(s),u("update:modelValue",d)};return(s,d)=>(c(),p("ul",ue,[(c(!0),p(N,null,R(s.options,n=>(c(),A(ce,{key:n,option:n,selected:s.modelValue,tag:"li",onSelect:l},null,8,["option","selected"]))),128))]))}});const _e=f(pe,[["__scopeId","data-v-993e9dce"]]),me=t=>(T("data-v-113539db"),t=t(),w(),t),he={class:"progress-bar"},ge={class:"svg",viewBox:"0 0 200 30"},ve=me(()=>e("line",{class:"bg",stroke:"#899390","stroke-linecap":"round","stroke-width":"5",x1:"5",x2:"195",y1:"15",y2:"15"},null,-1)),fe=["x2"],be=C({__name:"ProgressBar",props:{value:{},total:{}},setup(t){const u=t,a=L(()=>u.value/u.total*195);return(l,s)=>(c(),p("div",he,[(c(),p("svg",ge,[ve,a.value?(c(),p("line",{key:0,x2:a.value,class:"bar",stroke:"#ffffff","stroke-linecap":"round","stroke-width":"5",x1:"5",y1:"15",y2:"15"},null,8,fe)):P("",!0)]))]))}});const Le=f(be,[["__scopeId","data-v-113539db"]]),Ce={},ye={height:"20",viewBox:"0 0 28 20",width:"28"},Ie=M('<path d="M4.60796 17.647L4.61083 18.647L4.61112 18.647L4.61225 18.647L4.61676 18.647L4.6346 18.6469L4.70455 18.6467L4.97332 18.6459L5.96055 18.643C6.79349 18.6404 7.94263 18.6367 9.20739 18.6322C11.7363 18.6232 14.7295 18.611 16.581 18.598L16.6642 18.5974L16.7461 18.5831C18.2927 18.3128 19.2252 17.4597 19.7231 16.4523C19.9867 15.9189 20.119 15.3634 20.1819 14.8648C22.1907 14.7609 23.9539 14.0006 25.195 12.7253C26.6497 11.2304 27.3072 9.10657 26.8635 6.76205C26.4098 4.36443 24.9636 2.99609 23.657 2.25093C23.0111 1.88262 22.3969 1.6635 21.9439 1.53574C21.7163 1.47153 21.5261 1.42948 21.3887 1.40293C21.3198 1.38964 21.2639 1.38017 21.2228 1.37373C21.2022 1.37051 21.1854 1.36804 21.1724 1.36622L21.1558 1.36397L21.1498 1.36319L21.1474 1.36288L21.1463 1.36274C21.1458 1.36268 21.1453 1.36262 21.022 2.35498L21.1453 1.36262L21.0839 1.35498H21.022H2.72295C1.86543 1.35498 1.42535 1.96153 1.25278 2.32682C1.16396 2.51481 1.11535 2.69129 1.08849 2.81331C1.07458 2.8765 1.06527 2.93079 1.05914 2.97224C1.05605 2.99309 1.05371 3.01104 1.05197 3.02564L1.04978 3.04509L1.04897 3.05291L1.04864 3.05632L1.04848 3.05791L1.04841 3.05867C1.04838 3.05904 1.04834 3.05941 2.04395 3.15298M4.60796 17.647C4.5061 18.6418 4.50561 18.6417 4.50511 18.6417L4.50407 18.6416L4.50181 18.6413L4.49659 18.6408L4.48342 18.6393C4.47344 18.6381 4.46108 18.6365 4.44649 18.6346C4.41733 18.6306 4.37911 18.6249 4.33306 18.6169C4.2412 18.601 4.1167 18.5758 3.96972 18.5367C3.67892 18.4593 3.28264 18.3228 2.87276 18.0839C2.02367 17.5888 1.13317 16.6526 1.02423 15.0425L1.0224 15.0154L1.02204 14.9883C0.991911 12.7294 0.997465 9.76598 1.01047 7.3718C1.01698 6.17376 1.02536 5.1165 1.03212 4.35872C1.0355 3.97981 1.03847 3.67573 1.0406 3.46631L1.0431 3.22563L1.04378 3.16317L1.04396 3.14723L1.044 3.14318L1.04401 3.14215L1.04401 3.14188L2.04395 3.15298M4.60796 17.647L4.61074 18.647L4.55828 18.6471L4.5061 18.6418L4.60796 17.647ZM2.04395 3.15298L1.04402 3.14179L1.04448 3.10051L1.04834 3.05941L2.04395 3.15298ZM20.31 9.99059V6.28398H20.9074C20.9271 6.29216 20.9491 6.30165 20.973 6.31254C21.1015 6.37113 21.271 6.46389 21.4365 6.59781C21.7502 6.85161 22.051 7.24535 22.051 7.92198C22.051 8.69937 21.8548 9.12987 21.6462 9.38804C21.4439 9.63858 21.154 9.82063 20.7713 9.95603C20.6095 9.97374 20.4542 9.98456 20.31 9.99059ZM20.8012 6.24434C20.7998 6.24391 20.8 6.24396 20.8018 6.24452L20.8012 6.24434Z" fill="white" stroke="black" stroke-width="2"></path><path clip-rule="evenodd" d="M10.808 14.435C10.808 14.435 13.573 11.912 14.819 10.459C15.928 9.159 16 6.968 14.096 6.148C12.193 5.329 10.628 7.111 10.628 7.111C9.26998 5.618 7.21598 5.694 6.26498 6.704C5.31498 7.714 5.64698 9.449 6.35598 10.414C6.85668 11.0944 8.63419 12.7373 9.67392 13.6983C10.0172 14.0156 10.28 14.2585 10.39 14.368C10.39 14.368 10.422 14.401 10.498 14.458C10.687 14.554 10.808 14.435 10.808 14.435Z" fill="url(#paint0_linear_0_1)" fill-rule="evenodd"></path><defs><linearGradient id="paint0_linear_0_1" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="3" y2="16"><stop stop-color="#ED637D"></stop><stop offset="1" stop-color="#ED6962"></stop></linearGradient></defs>',3),Se=[Ie];function Te(t,u){return c(),p("svg",ye,Se)}const we=f(Ce,[["render",Te]]),$e="/core-space/assets/nico.a706e793.png",Oe="1.18.0",ke=F("language",{state:()=>{const t=window.localStorage.getItem("lang");return{lang:t==null?"en":t}},actions:{save(){window.localStorage.setItem("lang",this.lang)},apply(){const t=document.querySelector("html");!t||t.setAttribute("lang",this.lang)}}}),y=t=>(T("data-v-00b3ef59"),t=t(),w(),t),Ee={class:"settings"},Ne=y(()=>e("span",{class:"material-symbols-rounded"},"Settings",-1)),Re=["onSubmit"],Ve={class:"about"},Ae=["innerHTML"],Pe=y(()=>e("a",{href:"https://www.battlesystems.co.uk/",target:"_blank"},"https://www.BattleSystems.co.uk",-1)),He={class:"description"},Be=y(()=>e("dd",null,"David Le Prado",-1)),De=y(()=>e("dd",null,[e("div",null,"Andre Penning"),e("div",null,"David Golda")],-1)),Me=y(()=>e("dd",null,"Nico Van den Winckel",-1)),Fe={class:"about-me"},Ue=["src"],Ge=["innerHTML"],We={class:"buy-me-a-coffee",href:"https://ko-fi.com/Q5Q7FSPQD",target:"_blank"},xe=y(()=>e("div",{class:"license"},[e("p",null,[e("a",{href:"https://github.com/xinix/core-space",target:"_blank"},"Fork Me on Github")]),e("section",null,[v(" MIT License "),e("br"),e("br"),v(" Copyright (c) 2022 "),e("br"),e("br"),v(' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),e("br"),e("br"),v(" The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),e("br"),e("br"),v(' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. ')])],-1)),qe=C({__name:"SettingsPage",setup(t){const u=U(),a=G(),l=V(),s=ke(),d=W(),n=()=>{a.save(),a.apply(),l.save(),u.load(l.active),s.save(),s.apply(),d.locale.value=s.lang},o=["en","nl","fr","de"],I=Oe;return(_,h)=>(c(),p("div",Ee,[e("header",null,[e("h1",null,[Ne,v(" "+r(_.$t("preferences")),1)])]),e("form",{class:"form-dotted",onSubmit:q(n,["prevent"])},[m(S,{label:"theme",name:"theme"},{default:b(()=>[m($,{modelValue:i(a).theme,"onUpdate:modelValue":[h[0]||(h[0]=g=>i(a).theme=g),n],name:"dark-mode",value:"dark"},null,8,["modelValue"]),m($,{modelValue:i(a).theme,"onUpdate:modelValue":[h[1]||(h[1]=g=>i(a).theme=g),n],name:"light-mode",value:"light"},null,8,["modelValue"])]),_:1}),m(S,{label:"lang",name:"lang"},{default:b(()=>[m(se,{modelValue:i(s).lang,"onUpdate:modelValue":[h[2]||(h[2]=g=>i(s).lang=g),n],options:o,name:"lang"},null,8,["modelValue"])]),_:1}),m(S,{label:"owned_products",name:"products"},{label:b(()=>[m(Le,{total:i(l).totalCount,value:i(l).inCollectionCount},null,8,["total","value"])]),default:b(()=>[m(_e,{modelValue:i(l).active,"onUpdate:modelValue":[h[3]||(h[3]=g=>i(l).active=g),n],options:i(l).options},null,8,["modelValue","options"])]),_:1}),m(S,{label:"about",name:"app"},{default:b(()=>[e("div",Ve,[m(x),e("div",null,[e("span",{innerHTML:_.$t("copyright")},null,8,Ae),v("\xA0 "),Pe]),e("div",null,[e("strong",null,"version "+r(i(I)),1),e("p",null,r(_.$t("this-is-free")),1)]),e("div",null,[e("strong",null,r(_.$t("translated-by"))+":",1),e("dl",He,[e("dt",null,r(_.$t("fr")),1),Be,e("dt",null,r(_.$t("de")),1),De,e("dt",null,r(_.$t("nl")),1),Me])]),e("div",Fe,[e("img",{src:i($e),alt:"This is me!",class:"float-pic"},null,8,Ue),e("p",{innerHTML:_.$t("about-me")},null,8,Ge),e("a",We,[m(we,{class:"icon"}),e("span",null,r(_.$t("buy-me-a-coffee")),1)])]),xe])]),_:1})],40,Re)]))}});const Ze=f(qe,[["__scopeId","data-v-00b3ef59"]]);export{Ze as default};
