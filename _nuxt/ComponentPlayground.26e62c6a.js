import{u as m}from"./asyncData.5677b93c.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.9e9fbc93.js";import f from"./Ellipsis.4fedf6a8.js";import _ from"./ComponentPlaygroundData.b1cb1423.js";import"./TabsHeader.a66c0ffe.js";import"./ComponentPlaygroundProps.1d485b69.js";import"./ProseH4.c024a7b8.js";import"./ProseCodeInline.c15e75ad.js";import"./Badge.2f53b27a.js";import"./MDCSlot.5867e2c5.js";import"./slot.ed9f3475.js";import"./ProseP.e81d388c.js";import"./index.62df342c.js";import"./ComponentPlaygroundSlots.vue.6fc50dde.js";import"./ComponentPlaygroundTokens.vue.1fe2dfef.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-aee2774e"]]);export{V as default};
