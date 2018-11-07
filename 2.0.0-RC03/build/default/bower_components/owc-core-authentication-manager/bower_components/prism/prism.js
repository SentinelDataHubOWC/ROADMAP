var _self="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var lang=/\blang(?:uage)?-([\w-]+)\b/i,uniqueId=0,_=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(tokens){if(tokens instanceof Token){return new Token(tokens.type,_.util.encode(tokens.content),tokens.alias)}else if("Array"===_.util.type(tokens)){return tokens.map(_.util.encode)}else{return tokens.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")}},type:function(o){return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1]},objId:function(obj){if(!obj.__id){Object.defineProperty(obj,"__id",{value:++uniqueId})}return obj.__id},clone:function(o,visited){var type=_.util.type(o);visited=visited||{};switch(type){case"Object":if(visited[_.util.objId(o)]){return visited[_.util.objId(o)]}var clone={};visited[_.util.objId(o)]=clone;for(var key in o){if(o.hasOwnProperty(key)){clone[key]=_.util.clone(o[key],visited)}}return clone;case"Array":if(visited[_.util.objId(o)]){return visited[_.util.objId(o)]}var clone=[];visited[_.util.objId(o)]=clone;o.forEach(function(v,i){clone[i]=_.util.clone(v,visited)});return clone;}return o}},languages:{extend:function(id,redef){var lang=_.util.clone(_.languages[id]);for(var key in redef){lang[key]=redef[key]}return lang},insertBefore:function(inside,before,insert,root){root=root||_.languages;var grammar=root[inside];if(2==arguments.length){insert=arguments[1];for(var newToken in insert){if(insert.hasOwnProperty(newToken)){grammar[newToken]=insert[newToken]}}return grammar}var ret={};for(var token in grammar){if(grammar.hasOwnProperty(token)){if(token==before){for(var newToken in insert){if(insert.hasOwnProperty(newToken)){ret[newToken]=insert[newToken]}}}ret[token]=grammar[token]}}_.languages.DFS(_.languages,function(key,value){if(value===root[inside]&&key!=inside){this[key]=ret}});return root[inside]=ret},DFS:function(o,callback,type,visited){visited=visited||{};for(var i in o){if(o.hasOwnProperty(i)){callback.call(o,i,o[i],type||i);if("Object"===_.util.type(o[i])&&!visited[_.util.objId(o[i])]){visited[_.util.objId(o[i])]=!0;_.languages.DFS(o[i],callback,null,visited)}else if("Array"===_.util.type(o[i])&&!visited[_.util.objId(o[i])]){visited[_.util.objId(o[i])]=!0;_.languages.DFS(o[i],callback,i,visited)}}}}},plugins:{},highlightAll:function(async,callback){_.highlightAllUnder(document,async,callback)},highlightAllUnder:function(container,async,callback){var env={callback:callback,selector:"code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"};_.hooks.run("before-highlightall",env);for(var elements=env.elements||container.querySelectorAll(env.selector),i=0,element;element=elements[i++];){_.highlightElement(element,!0===async,env.callback)}},highlightElement:function(element,async,callback){var language,grammar,parent=element;while(parent&&!lang.test(parent.className)){parent=parent.parentNode}if(parent){language=(parent.className.match(lang)||[,""])[1].toLowerCase();grammar=_.languages[language]}element.className=element.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language;if(element.parentNode){parent=element.parentNode;if(/pre/i.test(parent.nodeName)){parent.className=parent.className.replace(lang,"").replace(/\s+/g," ")+" language-"+language}}var code=element.textContent,env={element:element,language:language,grammar:grammar,code:code};_.hooks.run("before-sanity-check",env);if(!env.code||!env.grammar){if(env.code){_.hooks.run("before-highlight",env);env.element.textContent=env.code;_.hooks.run("after-highlight",env)}_.hooks.run("complete",env);return}_.hooks.run("before-highlight",env);if(async&&_self.Worker){var worker=new Worker(_.filename);worker.onmessage=function(evt){env.highlightedCode=evt.data;_.hooks.run("before-insert",env);env.element.innerHTML=env.highlightedCode;callback&&callback.call(env.element);_.hooks.run("after-highlight",env);_.hooks.run("complete",env)};worker.postMessage(JSON.stringify({language:env.language,code:env.code,immediateClose:!0}))}else{env.highlightedCode=_.highlight(env.code,env.grammar,env.language);_.hooks.run("before-insert",env);env.element.innerHTML=env.highlightedCode;callback&&callback.call(element);_.hooks.run("after-highlight",env);_.hooks.run("complete",env)}},highlight:function(text,grammar,language){var env={code:text,grammar:grammar,language:language};_.hooks.run("before-tokenize",env);env.tokens=_.tokenize(env.code,env.grammar);_.hooks.run("after-tokenize",env);return Token.stringify(_.util.encode(env.tokens),env.language)},matchGrammar:function(text,strarr,grammar,index,startPos,oneshot,target){var Token=_.Token;for(var token in grammar){if(!grammar.hasOwnProperty(token)||!grammar[token]){continue}if(token==target){return}var patterns=grammar[token];patterns="Array"===_.util.type(patterns)?patterns:[patterns];for(var j=0;j<patterns.length;++j){var pattern=patterns[j],inside=pattern.inside,lookbehind=!!pattern.lookbehind,greedy=!!pattern.greedy,lookbehindLength=0,alias=pattern.alias;if(greedy&&!pattern.pattern.global){var flags=pattern.pattern.toString().match(/[imuy]*$/)[0];pattern.pattern=RegExp(pattern.pattern.source,flags+"g")}pattern=pattern.pattern||pattern;for(var i=index,pos=startPos,str;i<strarr.length;pos+=strarr[i].length,++i){str=strarr[i];if(strarr.length>text.length){return}if(str instanceof Token){continue}if(greedy&&i!=strarr.length-1){pattern.lastIndex=pos;var match=pattern.exec(text);if(!match){break}for(var from=match.index+(lookbehind?match[1].length:0),to=match.index+match[0].length,k=i,p=pos,len=strarr.length;k<len&&(p<to||!strarr[k].type&&!strarr[k-1].greedy);++k){p+=strarr[k].length;if(from>=p){++i;pos=p}}if(strarr[i]instanceof Token){continue}delNum=k-i;str=text.slice(pos,p);match.index-=pos}else{pattern.lastIndex=0;var match=pattern.exec(str),delNum=1}if(!match){if(oneshot){break}continue}if(lookbehind){lookbehindLength=match[1]?match[1].length:0}var from=match.index+lookbehindLength,match=match[0].slice(lookbehindLength),to=from+match.length,before=str.slice(0,from),after=str.slice(to),args=[i,delNum];if(before){++i;pos+=before.length;args.push(before)}var wrapped=new Token(token,inside?_.tokenize(match,inside):match,alias,match,greedy);args.push(wrapped);if(after){args.push(after)}Array.prototype.splice.apply(strarr,args);if(1!=delNum)_.matchGrammar(text,strarr,grammar,i,pos,!0,token);if(oneshot)break}}}},tokenize:function(text,grammar){var strarr=[text],rest=grammar.rest;if(rest){for(var token in rest){grammar[token]=rest[token]}delete grammar.rest}_.matchGrammar(text,strarr,grammar,0,0,!1);return strarr},hooks:{all:{},add:function(name,callback){var hooks=_.hooks.all;hooks[name]=hooks[name]||[];hooks[name].push(callback)},run:function(name,env){var callbacks=_.hooks.all[name];if(!callbacks||!callbacks.length){return}for(var i=0,callback;callback=callbacks[i++];){callback(env)}}}},Token=_.Token=function(type,content,alias,matchedStr,greedy){this.type=type;this.content=content;this.alias=alias;this.length=0|(matchedStr||"").length;this.greedy=!!greedy};Token.stringify=function(o,language,parent){if("string"==typeof o){return o}if("Array"===_.util.type(o)){return o.map(function(element){return Token.stringify(element,language,o)}).join("")}var env={type:o.type,content:Token.stringify(o.content,language,parent),tag:"span",classes:["token",o.type],attributes:{},language:language,parent:parent};if(o.alias){var aliases="Array"===_.util.type(o.alias)?o.alias:[o.alias];Array.prototype.push.apply(env.classes,aliases)}_.hooks.run("wrap",env);var attributes=Object.keys(env.attributes).map(function(name){return name+"=\""+(env.attributes[name]||"").replace(/"/g,"&quot;")+"\""}).join(" ");return"<"+env.tag+" class=\""+env.classes.join(" ")+"\""+(attributes?" "+attributes:"")+">"+env.content+"</"+env.tag+">"};if(!_self.document){if(!_self.addEventListener){return _self.Prism}if(!_.disableWorkerMessageHandler){_self.addEventListener("message",function(evt){var message=JSON.parse(evt.data),lang=message.language,code=message.code,immediateClose=message.immediateClose;_self.postMessage(_.highlight(code,_.languages[lang],lang));if(immediateClose){_self.close()}},!1)}return _self.Prism}var script=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();if(script){_.filename=script.src;if(!_.manual&&!script.hasAttribute("data-manual")){if("loading"!==document.readyState){if(window.requestAnimationFrame){window.requestAnimationFrame(_.highlightAll)}else{window.setTimeout(_.highlightAll,16)}}else{document.addEventListener("DOMContentLoaded",_.highlightAll)}}}return _self.Prism}();if("undefined"!==typeof module&&module.exports){module.exports=Prism}if("undefined"!==typeof global){global.Prism=Prism}Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.hooks.add("wrap",function(env){if("entity"===env.type){env.attributes.title=env.content.replace(/&amp;/,"&")}});Prism.languages.xml=Prism.languages.markup;Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/};Prism.languages.css.atrule.inside.rest=Prism.languages.css;if(Prism.languages.markup){Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css",greedy:!0}});Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)}Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/});Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}});if(Prism.languages.markup){Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript",greedy:!0}})}Prism.languages.js=Prism.languages.javascript;(function(){if("undefined"===typeof self||!self.Prism||!self.document||!document.querySelector){return}self.Prism.fileHighlight=function(){var Extensions={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(pre){var src=pre.getAttribute("data-src"),language,parent=pre,lang=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;while(parent&&!lang.test(parent.className)){parent=parent.parentNode}if(parent){language=(pre.className.match(lang)||[,""])[1]}if(!language){var extension=(src.match(/\.(\w+)$/)||[,""])[1];language=Extensions[extension]||extension}var code=document.createElement("code");code.className="language-"+language;pre.textContent="";code.textContent="Loading\u2026";pre.appendChild(code);var xhr=new XMLHttpRequest;xhr.open("GET",src,!0);xhr.onreadystatechange=function(){if(4==xhr.readyState){if(400>xhr.status&&xhr.responseText){code.textContent=xhr.responseText;Prism.highlightElement(code)}else if(400<=xhr.status){code.textContent="\u2716 Error "+xhr.status+" while fetching file: "+xhr.statusText}else{code.textContent="\u2716 Error: File does not exist or is empty"}}};if(pre.hasAttribute("data-download-link")&&Prism.plugins.toolbar){Prism.plugins.toolbar.registerButton("download-file",function(){var a=document.createElement("a");a.textContent=pre.getAttribute("data-download-link-label")||"Download";a.setAttribute("download","");a.href=src;return a})}xhr.send(null)})};document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight)})();