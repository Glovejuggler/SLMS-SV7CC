"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[966],{9018:(e,t,o)=>{o.d(t,{Z:()=>a});var l=o(821),r=["type"];const a={__name:"Button",props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,o){return(0,l.openBlock)(),(0,l.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-theme-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-theme-700 active:bg-theme-900 focus:outline-none focus:border-theme-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,l.renderSlot)(t.$slots,"default")],8,r)}}}},7887:(e,t,o)=>{o.d(t,{Z:()=>a});var l=o(821),r=["value"];const a={__name:"Input",props:["modelValue"],emits:["update:modelValue"],setup:function(e){var t=(0,l.ref)(null);return(0,l.onMounted)((function(){t.value.hasAttribute("autofocus")&&t.value.focus()})),function(o,a){return(0,l.openBlock)(),(0,l.createElementBlock)("input",{class:"dark:bg-zinc-900 dark:text-white/90 border-gray-300 dark:border-white/30 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:a[0]||(a[0]=function(e){return o.$emit("update:modelValue",e.target.value)}),ref_key:"input",ref:t},null,40,r)}}}},1329:(e,t,o)=>{o.d(t,{Z:()=>c});var l=o(821),r={class:"block font-medium text-sm text-gray-700 dark:text-white/70"},a={key:0},n={key:1};const c={__name:"Label",props:["value"],setup:function(e){return function(t,o){return(0,l.openBlock)(),(0,l.createElementBlock)("label",r,[e.value?((0,l.openBlock)(),(0,l.createElementBlock)("span",a,(0,l.toDisplayString)(e.value),1)):((0,l.openBlock)(),(0,l.createElementBlock)("span",n,[(0,l.renderSlot)(t.$slots,"default")]))])}}}},5037:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Q});var l=o(821),r=(0,l.createElementVNode)("div",{class:"bg-white dark:bg-zinc-900 shadow"},[(0,l.createElementVNode)("div",{class:"max-w-screen-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[(0,l.createElementVNode)("h2",{class:"font-semibold text-xl text-theme-800 dark:text-white/90 my-auto"}," Edit ")])],-1),a={class:"py-12"},n={class:"max-w-screen-2xl mx-auto sm:px-6 lg:px-8"},c={class:"bg-white dark:bg-zinc-900 overflow-hidden shadow-sm sm:rounded-lg"},d={class:"p-6 bg-white dark:bg-zinc-900"},s=(0,l.createElementVNode)("span",{class:"font-bold"},"Personal Information",-1),m={key:0,class:"text-red-600"},i={class:"mt-5"},u={key:0,class:"text-red-600"},p={class:"mt-5"},f={key:0,class:"text-red-600"},V={class:"lg:flex"},b={class:"mt-5 lg:w-1/4"},k={key:0,class:"text-red-600"},v={class:"mt-5 lg:ml-1 lg:w-1/4"},N={key:0,class:"text-red-600"},y={class:"mt-8"},g=(0,l.createElementVNode)("span",{class:"font-bold"},"Contact information",-1),x={class:""},E={key:0,class:"text-red-600"},B={class:"mt-5"},w={key:0,class:"text-red-600"},h={class:"mt-5"},C={key:0,class:"text-red-600"},S={class:"mt-8"},_=(0,l.createElementVNode)("span",{class:"font-bold"},"Others",-1),D={class:""},U={key:0,class:"text-red-600"},z={class:"mt-5"},I={key:0,class:"text-red-600"},Z={class:"mt-5"},A={key:0,class:"text-red-600"},F={class:"mt-5"},L={key:0,class:"text-red-600"},M={class:"mt-5"},O={key:0,class:"text-red-600"},P={class:"mt-5"},$={key:0,class:"text-red-600"},j={class:"mt-5"},H={key:0,class:"text-red-600"},T=(0,l.createTextVNode)("Update");var R=o(9018),q=o(1329),G=o(7887),J=o(9038);const K={components:{Head:J.Fb,BreezeButton:R.Z,BreezeLabel:q.Z,BreezeInput:G.Z},setup:function(e){return{form:(0,J.cI)({name:e.member.name,address:e.member.address,prov_address:e.member.prov_address,contact_number:e.member.contact_number,email:e.member.email,facebook:e.member.facebook,birthdate:e.member.birthdate,birthplace:e.member.birthplace,religion:e.member.religion,sss:e.member.sss,tin:e.member.tin,education:e.member.education,skills:e.member.skills,employment:e.member.employment,income:e.member.income})}},props:{member:Object,errors:Object}};const Q=(0,o(3744).Z)(K,[["render",function(e,t,o,R,q,G){var J=(0,l.resolveComponent)("Head"),K=(0,l.resolveComponent)("BreezeLabel"),Q=(0,l.resolveComponent)("BreezeInput"),W=(0,l.resolveComponent)("BreezeButton");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(J,null,{default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("title",null,"\r\n            "+(0,l.toDisplayString)(o.member.name)+"\r\n        ",1)]})),_:1}),r,(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("div",n,[(0,l.createElementVNode)("div",c,[(0,l.createElementVNode)("div",d,[(0,l.createElementVNode)("form",{onSubmit:t[15]||(t[15]=(0,l.withModifiers)((function(t){return R.form.put(e.route("members.update",o.member.id))}),["prevent"]))},[(0,l.createElementVNode)("div",null,[s,(0,l.createElementVNode)("div",null,[(0,l.createVNode)(K,{for:"name",value:"Name"}),(0,l.createVNode)(Q,{id:"name",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return R.form.name=e})},null,8,["modelValue"]),o.errors.name?((0,l.openBlock)(),(0,l.createElementBlock)("div",m,(0,l.toDisplayString)(o.errors.name),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",i,[(0,l.createVNode)(K,{for:"address",value:"Address"}),(0,l.createVNode)(Q,{id:"address",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.address,"onUpdate:modelValue":t[1]||(t[1]=function(e){return R.form.address=e})},null,8,["modelValue"]),o.errors.address?((0,l.openBlock)(),(0,l.createElementBlock)("div",u,(0,l.toDisplayString)(o.errors.address),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",p,[(0,l.createVNode)(K,{for:"prov_address",value:"Provincial Address"}),(0,l.createVNode)(Q,{id:"prov_address",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.prov_address,"onUpdate:modelValue":t[2]||(t[2]=function(e){return R.form.prov_address=e})},null,8,["modelValue"]),o.errors.prov_address?((0,l.openBlock)(),(0,l.createElementBlock)("div",f,(0,l.toDisplayString)(o.errors.prov_address),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",V,[(0,l.createElementVNode)("div",b,[(0,l.createVNode)(K,{for:"birthdate",value:"Birthdate"}),(0,l.createVNode)(Q,{id:"birthdate",type:"date",class:"mt-1 block w-full",modelValue:R.form.birthdate,"onUpdate:modelValue":t[3]||(t[3]=function(e){return R.form.birthdate=e})},null,8,["modelValue"]),o.errors.birthdate?((0,l.openBlock)(),(0,l.createElementBlock)("div",k,(0,l.toDisplayString)(o.errors.birthdate),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",v,[(0,l.createVNode)(K,{for:"birthplace",value:"Birthplace"}),(0,l.createVNode)(Q,{id:"birthplace",type:"text",class:"mt-1 block w-full",modelValue:R.form.birthplace,"onUpdate:modelValue":t[4]||(t[4]=function(e){return R.form.birthplace=e})},null,8,["modelValue"]),o.errors.birthplace?((0,l.openBlock)(),(0,l.createElementBlock)("div",N,(0,l.toDisplayString)(o.errors.birthplace),1)):(0,l.createCommentVNode)("",!0)])])]),(0,l.createElementVNode)("div",y,[g,(0,l.createElementVNode)("div",x,[(0,l.createVNode)(K,{for:"contact_number",value:"Contact Number"}),(0,l.createVNode)(Q,{id:"contact_number",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.contact_number,"onUpdate:modelValue":t[5]||(t[5]=function(e){return R.form.contact_number=e})},null,8,["modelValue"]),o.errors.contact_number?((0,l.openBlock)(),(0,l.createElementBlock)("div",E,(0,l.toDisplayString)(o.errors.contact_number),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",B,[(0,l.createVNode)(K,{for:"email",value:"Email address"}),(0,l.createVNode)(Q,{id:"email",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.email,"onUpdate:modelValue":t[6]||(t[6]=function(e){return R.form.email=e})},null,8,["modelValue"]),o.errors.email?((0,l.openBlock)(),(0,l.createElementBlock)("div",w,(0,l.toDisplayString)(o.errors.email),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",h,[(0,l.createVNode)(K,{for:"facebook",value:"Facebook Name"}),(0,l.createVNode)(Q,{id:"facebook",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.facebook,"onUpdate:modelValue":t[7]||(t[7]=function(e){return R.form.facebook=e})},null,8,["modelValue"]),o.errors.facebook?((0,l.openBlock)(),(0,l.createElementBlock)("div",C,(0,l.toDisplayString)(o.errors.facebook),1)):(0,l.createCommentVNode)("",!0)])]),(0,l.createElementVNode)("div",S,[_,(0,l.createElementVNode)("div",D,[(0,l.createVNode)(K,{for:"religion",value:"Religion"}),(0,l.createVNode)(Q,{id:"religion",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.religion,"onUpdate:modelValue":t[8]||(t[8]=function(e){return R.form.religion=e})},null,8,["modelValue"]),o.errors.religion?((0,l.openBlock)(),(0,l.createElementBlock)("div",U,(0,l.toDisplayString)(o.errors.religion),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",z,[(0,l.createVNode)(K,{for:"sss",value:"SSS"}),(0,l.createVNode)(Q,{id:"sss",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.sss,"onUpdate:modelValue":t[9]||(t[9]=function(e){return R.form.sss=e})},null,8,["modelValue"]),o.errors.sss?((0,l.openBlock)(),(0,l.createElementBlock)("div",I,(0,l.toDisplayString)(o.errors.sss),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",Z,[(0,l.createVNode)(K,{for:"tin",value:"TIN"}),(0,l.createVNode)(Q,{id:"tin",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.tin,"onUpdate:modelValue":t[10]||(t[10]=function(e){return R.form.tin=e})},null,8,["modelValue"]),o.errors.tin?((0,l.openBlock)(),(0,l.createElementBlock)("div",A,(0,l.toDisplayString)(o.errors.tin),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",F,[(0,l.createVNode)(K,{for:"education",value:"Educational attainment/course"}),(0,l.createVNode)(Q,{id:"education",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.education,"onUpdate:modelValue":t[11]||(t[11]=function(e){return R.form.education=e})},null,8,["modelValue"]),o.errors.education?((0,l.openBlock)(),(0,l.createElementBlock)("div",L,(0,l.toDisplayString)(o.errors.education),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",M,[(0,l.createVNode)(K,{for:"skills",value:"Skills"}),(0,l.createVNode)(Q,{id:"skills",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.skills,"onUpdate:modelValue":t[12]||(t[12]=function(e){return R.form.skills=e})},null,8,["modelValue"]),o.errors.skills?((0,l.openBlock)(),(0,l.createElementBlock)("div",O,(0,l.toDisplayString)(o.errors.skills),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",P,[(0,l.createVNode)(K,{for:"employment",value:"Present employment or business activities"}),(0,l.createVNode)(Q,{id:"employment",type:"text",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.employment,"onUpdate:modelValue":t[13]||(t[13]=function(e){return R.form.employment=e})},null,8,["modelValue"]),o.errors.employment?((0,l.openBlock)(),(0,l.createElementBlock)("div",$,(0,l.toDisplayString)(o.errors.employment),1)):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("div",j,[(0,l.createVNode)(K,{for:"income",value:"Monthly income"}),(0,l.createVNode)(Q,{id:"income",type:"number",class:"mt-1 block w-full lg:w-1/2",modelValue:R.form.income,"onUpdate:modelValue":t[14]||(t[14]=function(e){return R.form.income=e})},null,8,["modelValue"]),o.errors.income?((0,l.openBlock)(),(0,l.createElementBlock)("div",H,(0,l.toDisplayString)(o.errors.income),1)):(0,l.createCommentVNode)("",!0)])]),(0,l.createElementVNode)("div",null,[(0,l.createVNode)(W,{class:(0,l.normalizeClass)(["mt-4",{"opacity-25":R.form.processing}]),disabled:R.form.processing},{default:(0,l.withCtx)((function(){return[T]})),_:1},8,["class","disabled"])])],32)])])])])],64)}]])}}]);