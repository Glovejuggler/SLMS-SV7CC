"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[189],{189:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(821),r=a(9038),s=(0,n.createElementVNode)("title",null,"\r\n            Dashboard\r\n        ",-1),d=(0,n.createElementVNode)("div",{class:"bg-white dark:bg-zinc-900 shadow"},[(0,n.createElementVNode)("div",{class:"max-w-screen-2xl mx-auto py-6 px-6 lg:px-8"},[(0,n.createElementVNode)("h2",{class:"font-semibold text-xl text-theme-800 dark:text-white/90"}," Dashboard ")])],-1),l={class:"lg:flex mt-12 max-w-screen-2xl mx-auto sm:px-6 lg:px-8"},o={class:"max-w-7xl mx-auto p-3 lg:p-4"},c={class:"bg-white overflow-hidden shadow-sm rounded-lg"},i={class:"px-6 pt-6 dark:bg-zinc-900 hover:bg-neutral-200 transition ease-in-out duration-300"},m=(0,n.createElementVNode)("div",{class:"text-theme-900 font-bold"}," Members ",-1),u={class:"grid place-items-end"},x={class:"text-[64px] text-theme-900 font-extrabold"},p={class:"max-w-7xl mx-auto p-3 lg:p-4"},h={class:"bg-white overflow-hidden shadow-sm rounded-lg"},b={class:"px-6 pt-6 dark:bg-zinc-900 hover:bg-neutral-200 transition ease-in-out duration-300"},v=(0,n.createElementVNode)("div",{class:"text-theme-900 font-bold"}," Active loans ",-1),f={class:"grid place-items-end"},N={class:"text-[64px] text-theme-900 font-extrabold"},g={class:"max-w-7xl mx-auto p-3 lg:p-4"},V={class:"bg-white overflow-hidden shadow-sm rounded-lg"},w={class:"px-6 pt-6 dark:bg-zinc-900 hover:bg-neutral-200 transition ease-in-out duration-300"},E=(0,n.createElementVNode)("div",{class:"text-theme-900 font-bold"}," Overdue payments ",-1),y={class:"grid place-items-end"},_={class:"text-[64px] text-theme-900 font-extrabold"},k={class:"max-w-7xl mx-auto p-3 lg:p-4"},C={class:"bg-white overflow-hidden shadow-sm rounded-lg"},D={class:"px-6 pt-6 dark:bg-zinc-900 hover:bg-neutral-200 transition ease-in-out duration-300"},z=(0,n.createElementVNode)("div",{class:"text-theme-900 font-bold"}," Payments due today ",-1),S={class:"grid place-items-end"},U={class:"text-[64px] text-theme-900 font-extrabold"},O={props:{auth:Object,members:Number,active_loans:Number,overdue_payments:Number,due_payments:Number}};const j=Object.assign(O,{__name:"Dashboard",setup:function(e){return function(t,a){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(r.Fb),null,{default:(0,n.withCtx)((function(){return[s]})),_:1}),d,(0,n.createElementVNode)("div",l,[(0,n.createVNode)((0,n.unref)(r.rU),{class:"w-1/4",href:t.route("members.index")},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("div",i,[m,(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("span",x,(0,n.toDisplayString)(e.members),1)])])])])]})),_:1},8,["href"]),(0,n.createVNode)((0,n.unref)(r.rU),{class:"w-1/4",href:"/members?status=active"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("div",b,[v,(0,n.createElementVNode)("div",f,[(0,n.createElementVNode)("span",N,(0,n.toDisplayString)(e.active_loans),1)])])])])]})),_:1}),(0,n.createVNode)((0,n.unref)(r.rU),{class:"w-1/4",href:"/members?status=overdue"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",g,[(0,n.createElementVNode)("div",V,[(0,n.createElementVNode)("div",w,[E,(0,n.createElementVNode)("div",y,[(0,n.createElementVNode)("span",_,(0,n.toDisplayString)(e.overdue_payments),1)])])])])]})),_:1}),(0,n.createVNode)((0,n.unref)(r.rU),{class:"w-1/4",href:"/members?status=dueToday"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",k,[(0,n.createElementVNode)("div",C,[(0,n.createElementVNode)("div",D,[z,(0,n.createElementVNode)("div",S,[(0,n.createElementVNode)("span",U,(0,n.toDisplayString)(e.due_payments),1)])])])])]})),_:1})])],64)}}})}}]);