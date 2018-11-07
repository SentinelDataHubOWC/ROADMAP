(function(){if("undefined"===typeof self||!self.Prism||!self.document){return}var callbacks=[],map={},noop=function(){};Prism.plugins.toolbar={};var registerButton=Prism.plugins.toolbar.registerButton=function(key,opts){var callback;if("function"===typeof opts){callback=opts}else{callback=function(env){var element;if("function"===typeof opts.onClick){element=document.createElement("button");element.type="button";element.addEventListener("click",function(){opts.onClick.call(this,env)})}else if("string"===typeof opts.url){element=document.createElement("a");element.href=opts.url}else{element=document.createElement("span")}element.textContent=opts.text;return element}}callbacks.push(map[key]=callback)},hook=Prism.plugins.toolbar.hook=function(env){var pre=env.element.parentNode;if(!pre||!/pre/i.test(pre.nodeName)){return}if(pre.parentNode.classList.contains("code-toolbar")){return}var wrapper=document.createElement("div");wrapper.classList.add("code-toolbar");pre.parentNode.insertBefore(wrapper,pre);wrapper.appendChild(pre);var toolbar=document.createElement("div");toolbar.classList.add("toolbar");if(document.body.hasAttribute("data-toolbar-order")){callbacks=document.body.getAttribute("data-toolbar-order").split(",").map(function(key){return map[key]||noop})}callbacks.forEach(function(callback){var element=callback(env);if(!element){return}var item=document.createElement("div");item.classList.add("toolbar-item");item.appendChild(element);toolbar.appendChild(item)});wrapper.appendChild(toolbar)};registerButton("label",function(env){var pre=env.element.parentNode;if(!pre||!/pre/i.test(pre.nodeName)){return}if(!pre.hasAttribute("data-label")){return}var element,template,text=pre.getAttribute("data-label");try{template=document.querySelector("template#"+text)}catch(e){}if(template){element=template.content}else{if(pre.hasAttribute("data-url")){element=document.createElement("a");element.href=pre.getAttribute("data-url")}else{element=document.createElement("span")}element.textContent=text}return element});Prism.hooks.add("complete",hook)})();