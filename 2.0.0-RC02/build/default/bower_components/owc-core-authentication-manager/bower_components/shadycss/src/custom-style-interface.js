'use strict';import documentWait from'./document-wait.js';export let CustomStyleProvider;const SEEN_MARKER='__seenByShadyCSS',CACHED_STYLE='__shadyCSSCachedStyle';let transformFn=null,validateFn=null;export default class CustomStyleInterface{constructor(){this.customStyles=[],this.enqueued=!1}enqueueDocumentValidation(){this.enqueued||!validateFn||(this.enqueued=!0,documentWait(validateFn))}addCustomStyle(a){a[SEEN_MARKER]||(a[SEEN_MARKER]=!0,this.customStyles.push(a),this.enqueueDocumentValidation())}getStyleForCustomStyle(a){if(a[CACHED_STYLE])return a[CACHED_STYLE];let b;return b=a.getStyle?a.getStyle():a,b}processStyles(){const a=this.customStyles;for(let b=0;b<a.length;b++){const c=a[b];if(!c[CACHED_STYLE]){const d=this.getStyleForCustomStyle(c);if(d){const e=d.__appliedElement||d;transformFn&&transformFn(e),c[CACHED_STYLE]=e}}}return a}}CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle,CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle,CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles,Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{get(){return transformFn},set(a){transformFn=a}},validateCallback:{get(){return validateFn},set(a){let b=!1;validateFn||(b=!0),validateFn=a,b&&this.enqueueDocumentValidation()}}});export let CustomStyleInterfaceInterface;