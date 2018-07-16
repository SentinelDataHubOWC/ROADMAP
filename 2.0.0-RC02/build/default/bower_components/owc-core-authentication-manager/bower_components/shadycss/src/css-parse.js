'use strict';class StyleNode{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText='',this.cssText='',this.atRule=!1,this.type=0,this.keyframesName='',this.selector='',this.parsedSelector=''}}export{StyleNode};export function parse(a){return a=clean(a),parseCss(lex(a),a)}function clean(a){return a.replace(RX.comments,'').replace(RX.port,'')}function lex(a){let b=new StyleNode;b.start=0,b.end=a.length;let c=b;for(let d=0,e=a.length;d<e;d++)if(a[d]===OPEN_BRACE){c.rules||(c.rules=[]);let f=c,g=f.rules[f.rules.length-1]||null;c=new StyleNode,c.start=d+1,c.parent=f,c.previous=g,f.rules.push(c)}else a[d]===CLOSE_BRACE&&(c.end=d+1,c=c.parent||b);return b}function parseCss(a,b){let c=b.substring(a.start,a.end-1);if(a.parsedCssText=a.cssText=c.trim(),a.parent){let e=a.previous?a.previous.end:a.parent.start;c=b.substring(e,a.start-1),c=_expandUnicodeEscapes(c),c=c.replace(RX.multipleSpaces,' '),c=c.substring(c.lastIndexOf(';')+1);let f=a.parsedSelector=a.selector=c.trim();a.atRule=0===f.indexOf(AT_START),a.atRule?0===f.indexOf(MEDIA_START)?a.type=types.MEDIA_RULE:f.match(RX.keyframesRule)&&(a.type=types.KEYFRAMES_RULE,a.keyframesName=a.selector.split(RX.multipleSpaces).pop()):0===f.indexOf(VAR_START)?a.type=types.MIXIN_RULE:a.type=types.STYLE_RULE}let d=a.rules;if(d)for(let g,e=0,f=d.length;e<f&&(g=d[e]);e++)parseCss(g,b);return a}function _expandUnicodeEscapes(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let b=arguments[1],c=6-b.length;for(;c--;)b='0'+b;return'\\'+b})}export function stringify(a,b,c=''){let d='';if(a.cssText||a.rules){let e=a.rules;if(e&&!_hasMixinRules(e))for(let h,f=0,g=e.length;f<g&&(h=e[f]);f++)d=stringify(h,b,d);else d=b?a.cssText:removeCustomProps(a.cssText),d=d.trim(),d&&(d='  '+d+'\n')}return d&&(a.selector&&(c+=a.selector+' '+OPEN_BRACE+'\n'),c+=d,a.selector&&(c+=CLOSE_BRACE+'\n\n')),c}function _hasMixinRules(a){let b=a[0];return!!b&&!!b.selector&&0===b.selector.indexOf(VAR_START)}function removeCustomProps(a){return a=removeCustomPropAssignment(a),removeCustomPropApply(a)}export function removeCustomPropAssignment(a){return a.replace(RX.customProp,'').replace(RX.mixinProp,'')}function removeCustomPropApply(a){return a.replace(RX.mixinApply,'').replace(RX.varApply,'')}export const types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};const OPEN_BRACE='{',CLOSE_BRACE='}',RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START='--',MEDIA_START='@media',AT_START='@';