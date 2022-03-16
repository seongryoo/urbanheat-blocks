!function(){"use strict";var e=window.wp.element;const t=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},(0,e.createElement)("g",null,(0,e.createElement)("rect",{fill:"none",height:"24",width:"24"})),(0,e.createElement)("g",null,(0,e.createElement)("path",{d:"M5,20h14v-2H5V20z M5,10h4v6h6v-6h4l-7-7L5,10z"}))),a=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},(0,e.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,e.createElement)("path",{d:"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"})),{__:__}=wp.i18n,{TextareaControl:n,Button:i,Icon:l,TextControl:o,CheckboxControl:r}=wp.components,{MediaUpload:s,MediaUploadCheck:c,RichText:d}=wp.blockEditor,m={edit:m=>{const h=(0,e.createElement)("div",{className:"admin-hero__container__side-content admin-hero__container__side-content--image-side"},(0,e.createElement)(c,null,(0,e.createElement)(s,{onSelect:e=>{m.setAttributes({sideImageId:e.id,sideImageUrl:e.url,sideImageAlt:e.alt})},value:m.attributes.sideImageId,render:a=>{let{open:n}=a;return(0,e.createElement)(i,{onClick:n},(0,e.createElement)(l,{icon:t,className:"admin-button__icon"}),__("Upload image for hero block"))}})),0!=m.sideImageId?(0,e.createElement)("img",{src:m.attributes.sideImageUrl,alt:m.attributes.sideImageAlt}):null),u=(0,e.createElement)("div",{className:"admin-hero__container__side-content admin-hero__container__side-content--text-side"},(0,e.createElement)(n,{label:__("Hero block heading"),placeholder:__("Add heading text to be displayed on one side of the hero block"),value:m.attributes.headingContent,onChange:e=>m.setAttributes({headingContent:e}),className:"admin-hero__input"}),(0,e.createElement)(r,{label:"Display a caption below the heading",checked:m.attributes.isCaption,onChange:e=>m.setAttributes({isCaption:e})}),m.attributes.isCaption?(0,e.createElement)("div",{className:"admin-hero__input"},(0,e.createElement)("label",{htmlFor:"caption-content"},__("Caption content to be displayed below heading")),(0,e.createElement)(d,{value:m.attributes.captionContent,onChange:e=>m.setAttributes({captionContent:e}),id:"caption-content",className:"admin-hero__container__side-content__rich-input admin-hero__input"})):null,(0,e.createElement)(r,{label:"Display a call-to-action button",checked:m.attributes.isCallToAction,onChange:e=>m.setAttributes({isCallToAction:e})}),m.attributes.isCaption?(0,e.createElement)("div",{className:"admin-hero__input"},(0,e.createElement)(o,{value:m.attributes.callToActionText,onChange:e=>m.setAttributes({callToActionText:e}),label:"Text to display on call-to-action button",className:"admin-hero__input"}),(0,e.createElement)(o,{value:m.attributes.callToActionUrl,onChange:e=>m.setAttributes({callToActionUrl:e}),label:"Call-to-action URL",help:"Type something like '/about' or '/data' in order to link to an internal page",type:"url",className:"admin-hero__input"})):null);return(0,e.createElement)("div",{className:"admin-hero"},(0,e.createElement)("div",{className:"admin-hero__container"},m.attributes.isImageLeft?[h,u]:[u,h]),(0,e.createElement)(i,{onClick:()=>m.setAttributes({isImageLeft:!m.attributes.isImageLeft}),className:"admin-button admin-hero__swap-sides"},(0,e.createElement)(l,{icon:a,className:"admin-button__icon"}),__(m.attributes.isImageLeft?"Image on the left. Click to swap sides.":"Image on the right. Click to swap sides.")))},save:e=>null,title:"Hero Block",category:"design",icon:"superhero-alt"},{registerBlockType:h}=wp.blocks;h("urbanheat/hero-block",m)}();