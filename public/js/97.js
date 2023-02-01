"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97],{9018:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821),o=["type"];const a={__name:"Button",props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-theme-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-theme-700 active:bg-theme-900 focus:outline-none focus:border-theme-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,n.renderSlot)(t.$slots,"default")],8,o)}}}},7887:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821),o=["value"];const a={__name:"Input",props:["modelValue"],emits:["update:modelValue"],setup:function(e){var t=(0,n.ref)(null);return(0,n.onMounted)((function(){t.value.hasAttribute("autofocus")&&t.value.focus()})),function(r,a){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{class:"dark:bg-zinc-900 dark:text-white/90 border-gray-300 dark:border-white/30 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:a[0]||(a[0]=function(e){return r.$emit("update:modelValue",e.target.value)}),ref_key:"input",ref:t},null,40,o)}}}},1329:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(821),o={class:"block font-medium text-sm text-gray-700 dark:text-white/70"},a={key:0},l={key:1};const u={__name:"Label",props:["value"],setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("label",o,[e.value?((0,n.openBlock)(),(0,n.createElementBlock)("span",a,(0,n.toDisplayString)(e.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",l,[(0,n.renderSlot)(t.$slots,"default")]))])}}}},5414:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),o=r(9038),a={key:0},l=(0,n.createElementVNode)("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),u={class:"mt-3 list-disc list-inside text-sm text-red-600"};const s={__name:"ValidationErrors",setup:function(e){var t=(0,n.computed)((function(){return(0,o.qt)().props.value.errors})),r=(0,n.computed)((function(){return Object.keys(t.value).length>0}));return function(e,o){return(0,n.unref)(r)?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[l,(0,n.createElementVNode)("ul",u,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(t),(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{key:t},(0,n.toDisplayString)(e),1)})),128))])])):(0,n.createCommentVNode)("",!0)}}}},6085:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(821);r(9038);var o={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},a={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};const l={__name:"Guest",setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",a,[(0,n.renderSlot)(e.$slots,"default")])])}}}},97:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(821),o=r(9018),a=r(6085),l=r(7887),u=r(1329),s=r(5414),c=r(9038),d=["onSubmit"],i={class:"mt-4"},m={class:"mt-4"},f={class:"mt-4"},p={class:"flex items-center justify-end mt-4"},w=(0,n.createTextVNode)(" Already registered? "),V=(0,n.createTextVNode)(" Register ");const k={__name:"Register",setup:function(e){var t=(0,c.cI)({name:"",email:"",password:"",password_confirmation:"",terms:!1}),r=function(){t.post(route("register"),{onFinish:function(){return t.reset("password","password_confirmation")}})};return function(e,k){return(0,n.openBlock)(),(0,n.createBlock)(a.Z,null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(c.Fb),{title:"Register"}),(0,n.createVNode)(s.Z,{class:"mb-4"}),(0,n.createElementVNode)("form",{onSubmit:(0,n.withModifiers)(r,["prevent"])},[(0,n.createElementVNode)("div",null,[(0,n.createVNode)(u.Z,{for:"name",value:"Name"}),(0,n.createVNode)(l.Z,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:(0,n.unref)(t).name,"onUpdate:modelValue":k[0]||(k[0]=function(e){return(0,n.unref)(t).name=e}),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),(0,n.createElementVNode)("div",i,[(0,n.createVNode)(u.Z,{for:"email",value:"Email"}),(0,n.createVNode)(l.Z,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:(0,n.unref)(t).email,"onUpdate:modelValue":k[1]||(k[1]=function(e){return(0,n.unref)(t).email=e}),required:"",autocomplete:"username"},null,8,["modelValue"])]),(0,n.createElementVNode)("div",m,[(0,n.createVNode)(u.Z,{for:"password",value:"Password"}),(0,n.createVNode)(l.Z,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:(0,n.unref)(t).password,"onUpdate:modelValue":k[2]||(k[2]=function(e){return(0,n.unref)(t).password=e}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),(0,n.createElementVNode)("div",f,[(0,n.createVNode)(u.Z,{for:"password_confirmation",value:"Confirm Password"}),(0,n.createVNode)(l.Z,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:(0,n.unref)(t).password_confirmation,"onUpdate:modelValue":k[3]||(k[3]=function(e){return(0,n.unref)(t).password_confirmation=e}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),(0,n.createElementVNode)("div",p,[(0,n.createVNode)((0,n.unref)(c.rU),{href:e.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:(0,n.withCtx)((function(){return[w]})),_:1},8,["href"]),(0,n.createVNode)(o.Z,{class:(0,n.normalizeClass)(["ml-4",{"opacity-25":(0,n.unref)(t).processing}]),disabled:(0,n.unref)(t).processing},{default:(0,n.withCtx)((function(){return[V]})),_:1},8,["class","disabled"])])],40,d)]})),_:1})}}}}}]);