(function(){var _MathPI=Math.PI;if("undefined"!==typeof self&&!self.Prism||!self.document||!Function.prototype.bind){return}var previewers={gradient:{create:function(){var cache={},convertToW3CLinearGradient=function(prefix,func,values){var angle="180deg";if(/^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(values[0])){angle=values.shift();if(0>angle.indexOf("to ")){if(0<=angle.indexOf("top")){if(0<=angle.indexOf("left")){angle="to bottom right"}else if(0<=angle.indexOf("right")){angle="to bottom left"}else{angle="to bottom"}}else if(0<=angle.indexOf("bottom")){if(0<=angle.indexOf("left")){angle="to top right"}else if(0<=angle.indexOf("right")){angle="to top left"}else{angle="to top"}}else if(0<=angle.indexOf("left")){angle="to right"}else if(0<=angle.indexOf("right")){angle="to left"}else if(prefix){if(0<=angle.indexOf("deg")){angle=90-parseFloat(angle)+"deg"}else if(0<=angle.indexOf("rad")){angle=_MathPI/2-parseFloat(angle)+"rad"}}}}return func+"("+angle+","+values.join(",")+")"},convertToW3CRadialGradient=function(prefix,func,values){if(0>values[0].indexOf("at")){var position="center",shape="ellipse",size="farthest-corner";if(/\bcenter|top|right|bottom|left\b|^\d+/.test(values[0])){position=values.shift().replace(/\s*-?\d+(?:rad|deg)\s*/,"")}if(/\bcircle|ellipse|closest|farthest|contain|cover\b/.test(values[0])){var shapeSizeParts=values.shift().split(/\s+/);if(shapeSizeParts[0]&&("circle"===shapeSizeParts[0]||"ellipse"===shapeSizeParts[0])){shape=shapeSizeParts.shift()}if(shapeSizeParts[0]){size=shapeSizeParts.shift()}if("cover"===size){size="farthest-corner"}else if("contain"===size){size="clothest-side"}}return func+"("+shape+" "+size+" at "+position+","+values.join(",")+")"}return func+"("+values.join(",")+")"},convertToW3CGradient=function(gradient){if(cache[gradient]){return cache[gradient]}var parts=gradient.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),prefix=parts&&parts[1],func=parts&&parts[2],values=gradient.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g,"").split(/\s*,\s*/);if(0<=func.indexOf("linear")){return cache[gradient]=convertToW3CLinearGradient(prefix,func,values)}else if(0<=func.indexOf("radial")){return cache[gradient]=convertToW3CRadialGradient(prefix,func,values)}return cache[gradient]=func+"("+values.join(",")+")"};return function(){new Prism.plugins.Previewer("gradient",function(value){this.firstChild.style.backgroundImage="";this.firstChild.style.backgroundImage=convertToW3CGradient(value);return!!this.firstChild.style.backgroundImage},"*",function(){this._elt.innerHTML="<div></div>"})}}(),tokens:{gradient:{pattern:/(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},languages:{css:!0,less:!0,sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},angle:{create:function(){new Prism.plugins.Previewer("angle",function(value){var num=parseFloat(value),unit=value.match(/[a-z]+$/i),max,percentage;if(!num||!unit){return!1}unit=unit[0];switch(unit){case"deg":max=360;break;case"grad":max=400;break;case"rad":max=2*_MathPI;break;case"turn":max=1;}percentage=100*num/max;percentage%=100;this[(0>num?"set":"remove")+"Attribute"]("data-negative","");this.querySelector("circle").style.strokeDasharray=Math.abs(percentage)+",500";return!0},"*",function(){this._elt.innerHTML="<svg viewBox=\"0 0 64 64\">"+"<circle r=\"16\" cy=\"32\" cx=\"32\"></circle>"+"</svg>"})},tokens:{angle:/(?:\b|\B-|(?=\B\.))\d*\.?\d+(?:deg|g?rad|turn)\b/i},languages:{css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},color:{create:function(){new Prism.plugins.Previewer("color",function(value){this.style.backgroundColor="";this.style.backgroundColor=value;return!!this.style.backgroundColor})},tokens:{color:{pattern:/\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},languages:{css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},easing:{create:function(){new Prism.plugins.Previewer("easing",function(value){value={linear:"0,0,1,1",ease:".25,.1,.25,1","ease-in":".42,0,1,1","ease-out":"0,0,.58,1","ease-in-out":".42,0,.58,1"}[value]||value;var p=value.match(/-?\d*\.?\d+/g);if(4===p.length){p=p.map(function(p,i){return 100*(i%2?1-p:p)});this.querySelector("path").setAttribute("d","M0,100 C"+p[0]+","+p[1]+", "+p[2]+","+p[3]+", 100,0");var lines=this.querySelectorAll("line");lines[0].setAttribute("x2",p[0]);lines[0].setAttribute("y2",p[1]);lines[1].setAttribute("x2",p[2]);lines[1].setAttribute("y2",p[3]);return!0}return!1},"*",function(){this._elt.innerHTML="<svg viewBox=\"-20 -20 140 140\" width=\"100\" height=\"100\">"+"<defs>"+"<marker id=\"prism-previewer-easing-marker\" viewBox=\"0 0 4 4\" refX=\"2\" refY=\"2\" markerUnits=\"strokeWidth\">"+"<circle cx=\"2\" cy=\"2\" r=\"1.5\" />"+"</marker>"+"</defs>"+"<path d=\"M0,100 C20,50, 40,30, 100,0\" />"+"<line x1=\"0\" y1=\"100\" x2=\"20\" y2=\"50\" marker-start=\"url("+location.href+"#prism-previewer-easing-marker)\" marker-end=\"url("+location.href+"#prism-previewer-easing-marker)\" />"+"<line x1=\"100\" y1=\"0\" x2=\"40\" y2=\"30\" marker-start=\"url("+location.href+"#prism-previewer-easing-marker)\" marker-end=\"url("+location.href+"#prism-previewer-easing-marker)\" />"+"</svg>"})},tokens:{easing:{pattern:/\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},languages:{css:!0,less:!0,sass:[{lang:"sass",inside:"inside",before:"punctuation",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},time:{create:function(){new Prism.plugins.Previewer("time",function(value){var num=parseFloat(value),unit=value.match(/[a-z]+$/i);if(!num||!unit){return!1}unit=unit[0];this.querySelector("circle").style.animationDuration=2*num+unit;return!0},"*",function(){this._elt.innerHTML="<svg viewBox=\"0 0 64 64\">"+"<circle r=\"16\" cy=\"32\" cx=\"32\"></circle>"+"</svg>"})},tokens:{time:/(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i},languages:{css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}}},getOffset=function(element){var left=0,top=0,el=element;if(el.parentNode){do{left+=el.offsetLeft;top+=el.offsetTop}while((el=el.offsetParent)&&9>el.nodeType);el=element;do{left-=el.scrollLeft;top-=el.scrollTop}while((el=el.parentNode)&&!/body/i.test(el.nodeName))}return{top:top,right:innerWidth-left-element.offsetWidth,bottom:innerHeight-top-element.offsetHeight,left:left}},tokenRegexp=/(?:^|\s)token(?=$|\s)/,activeRegexp=/(?:^|\s)active(?=$|\s)/g,flippedRegexp=/(?:^|\s)flipped(?=$|\s)/g,Previewer=function(type,updater,supportedLanguages,initializer){this._elt=null;this._type=type;this._clsRegexp=RegExp("(?:^|\\s)"+type+"(?=$|\\s)");this._token=null;this.updater=updater;this._mouseout=this.mouseout.bind(this);this.initializer=initializer;var self=this;if(!supportedLanguages){supportedLanguages=["*"]}if("Array"!==Prism.util.type(supportedLanguages)){supportedLanguages=[supportedLanguages]}supportedLanguages.forEach(function(lang){if("string"!==typeof lang){lang=lang.lang}if(!Previewer.byLanguages[lang]){Previewer.byLanguages[lang]=[]}if(0>Previewer.byLanguages[lang].indexOf(self)){Previewer.byLanguages[lang].push(self)}});Previewer.byType[type]=this};Previewer.prototype.init=function(){if(this._elt){return}this._elt=document.createElement("div");this._elt.className="prism-previewer prism-previewer-"+this._type;document.body.appendChild(this._elt);if(this.initializer){this.initializer()}};Previewer.prototype.isDisabled=function(token){do{if(token.hasAttribute&&token.hasAttribute("data-previewers")){var previewers=token.getAttribute("data-previewers");return-1===(previewers||"").split(/\s+/).indexOf(this._type)}}while(token=token.parentNode);return!1};Previewer.prototype.check=function(token){if(tokenRegexp.test(token.className)&&this.isDisabled(token)){return}do{if(tokenRegexp.test(token.className)&&this._clsRegexp.test(token.className)){break}}while(token=token.parentNode);if(token&&token!==this._token){this._token=token;this.show()}};Previewer.prototype.mouseout=function(){this._token.removeEventListener("mouseout",this._mouseout,!1);this._token=null;this.hide()};Previewer.prototype.show=function(){if(!this._elt){this.init()}if(!this._token){return}if(this.updater.call(this._elt,this._token.textContent)){this._token.addEventListener("mouseout",this._mouseout,!1);var offset=getOffset(this._token);this._elt.className+=" active";if(0<offset.top-this._elt.offsetHeight){this._elt.className=this._elt.className.replace(flippedRegexp,"");this._elt.style.top=offset.top+"px";this._elt.style.bottom=""}else{this._elt.className+=" flipped";this._elt.style.bottom=offset.bottom+"px";this._elt.style.top=""}this._elt.style.left=offset.left+Math.min(200,this._token.offsetWidth/2)+"px"}else{this.hide()}};Previewer.prototype.hide=function(){this._elt.className=this._elt.className.replace(activeRegexp,"")};Previewer.byLanguages={};Previewer.byType={};Previewer.initEvents=function(elt,lang){var previewers=[];if(Previewer.byLanguages[lang]){previewers=previewers.concat(Previewer.byLanguages[lang])}if(Previewer.byLanguages["*"]){previewers=previewers.concat(Previewer.byLanguages["*"])}elt.addEventListener("mouseover",function(e){var target=e.target;previewers.forEach(function(previewer){previewer.check(target)})},!1)};Prism.plugins.Previewer=Previewer;Prism.hooks.add("before-highlight",function(env){for(var previewer in previewers){var languages=previewers[previewer].languages;if(env.language&&languages[env.language]&&!languages[env.language].initialized){var lang=languages[env.language];if("Array"!==Prism.util.type(lang)){lang=[lang]}lang.forEach(function(lang){var before,inside,root,skip;if(!0===lang){before="important";inside=env.language;lang=env.language}else{before=lang.before||"important";inside=lang.inside||lang.lang;root=lang.root||Prism.languages;skip=lang.skip;lang=env.language}if(!skip&&Prism.languages[lang]){Prism.languages.insertBefore(inside,before,previewers[previewer].tokens,root);env.grammar=Prism.languages[lang];languages[env.language]={initialized:!0}}})}}});Prism.hooks.add("after-highlight",function(env){if(Previewer.byLanguages["*"]||Previewer.byLanguages[env.language]){Previewer.initEvents(env.element,env.language)}});for(var previewer in previewers){previewers[previewer].create()}})();