import{T as l}from"./TokenDetails.d1b18e54.js";import{d as c,u as m,c as r,o as t,a as o,g as i,f as u,m as _,e as d,F as p}from"./main.a1083da3.js";const g={class:"container"},k={key:0,class:"details"},h=c({__name:"TokenPage",props:{slug:{}},setup(s){const a=s;console.log("helllo=");const n=m(),e=r(()=>n.getItemByKey(a.slug));return console.log("item="+e.value),(v,f)=>(t(),o(p,null,[i(" normal call "),u("div",g,[e.value?(t(),o("main",k,[_(l,{item:e.value,active:"",class:"item"},null,8,["item"])])):d("",!0)])],64))}});export{h as default};
