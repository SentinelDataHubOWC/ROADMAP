"use strict";import{applyStylePlaceHolder}from"./style-util.js";import{nativeShadow}from"./style-settings.js";let placeholderMap={};const ce=window.customElements;if(ce&&!nativeShadow){const origDefine=ce.define;ce.define=(name,clazz,options)=>{placeholderMap[name]=applyStylePlaceHolder(name);origDefine.call(ce,name,clazz,options)}}export default placeholderMap;