import{a0 as i,a7 as u,o as a,c as t,a4 as r,s as p,d,t as m,G as l,a as v}from"./CsHn9UyJ.js";var c={root:function(o){var s=o.instance;return["p-progressbar p-component",{"p-progressbar-determinate":s.determinate,"p-progressbar-indeterminate":s.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},g=i.extend({name:"progressbar",classes:c}),f={name:"BaseProgressBar",extends:u,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:g,provide:function(){return{$parentInstance:this}}},y={name:"ProgressBar",extends:f,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},b=["aria-valuenow"];function h(e,o,s,B,S,n){return a(),t("div",r({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[n.determinate?(a(),t("div",r({key:0,class:e.cx("value"),style:n.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(a(),t("div",r({key:0,class:e.cx("label")},e.ptm("label")),[p(e.$slots,"default",{},function(){return[d(m(e.value+"%"),1)]})],16)):l("",!0)],16)):l("",!0),n.indeterminate?(a(),t("div",r({key:1,class:e.cx("container")},e.ptm("container")),[v("div",r({class:e.cx("value")},e.ptm("value")),null,16)],16)):l("",!0)],16,b)}y.render=h;export{y as default};
