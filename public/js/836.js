"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[836],{9018:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(821),o=["type"];const i={__name:"Button",props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-theme-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-theme-700 active:bg-theme-900 focus:outline-none focus:border-theme-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,r.renderSlot)(t.$slots,"default")],8,o)}}}},6085:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821);n(9038);var o={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},i={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};const s={__name:"Guest",setup:function(e){return function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",i,[(0,r.renderSlot)(e.$slots,"default")])])}}}},7836:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(821),o=n(9018),i=n(6085),s=n(9038),a=(0,r.createElementVNode)("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),u={key:0,class:"mb-4 font-medium text-sm text-green-600"},l=["onSubmit"],c={class:"mt-4 flex items-center justify-between"},d=(0,r.createTextVNode)(" Resend Verification Email "),f=(0,r.createTextVNode)("Log Out");const m={__name:"VerifyEmail",props:{status:String},setup:function(e){var t=e,n=(0,s.cI)(),m=function(){n.post(route("verification.send"))},p=(0,r.computed)((function(){return"verification-link-sent"===t.status}));return function(e,t){return(0,r.openBlock)(),(0,r.createBlock)(i.Z,null,{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(s.Fb),{title:"Email Verification"}),a,(0,r.unref)(p)?((0,r.openBlock)(),(0,r.createElementBlock)("div",u," A new verification link has been sent to the email address you provided during registration. ")):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("form",{onSubmit:(0,r.withModifiers)(m,["prevent"])},[(0,r.createElementVNode)("div",c,[(0,r.createVNode)(o.Z,{class:(0,r.normalizeClass)({"opacity-25":(0,r.unref)(n).processing}),disabled:(0,r.unref)(n).processing},{default:(0,r.withCtx)((function(){return[d]})),_:1},8,["class","disabled"]),(0,r.createVNode)((0,r.unref)(s.rU),{href:e.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:(0,r.withCtx)((function(){return[f]})),_:1},8,["href"])])],40,l)]})),_:1})}}}}}]);