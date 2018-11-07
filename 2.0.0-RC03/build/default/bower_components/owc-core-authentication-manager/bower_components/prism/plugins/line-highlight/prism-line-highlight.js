(function(){if("undefined"===typeof self||!self.Prism||!self.document||!document.querySelector){return}function $$(expr,con){return Array.prototype.slice.call((con||document).querySelectorAll(expr))}function hasClass(element,className){className=" "+className+" ";return-1<(" "+element.className+" ").replace(/[\n\t]/g," ").indexOf(className)}var isLineHeightRounded=function(){var res;return function(){if("undefined"===typeof res){var d=document.createElement("div");d.style.fontSize="13px";d.style.lineHeight="1.5";d.style.padding=0;d.style.border=0;d.innerHTML="&nbsp;<br />&nbsp;";document.body.appendChild(d);res=38===d.offsetHeight;document.body.removeChild(d)}return res}}();function highlightLines(pre,lines,classes){lines="string"===typeof lines?lines:pre.getAttribute("data-line");for(var ranges=lines.replace(/\s+/g,"").split(","),offset=+pre.getAttribute("data-line-offset")||0,parseMethod=isLineHeightRounded()?parseInt:parseFloat,lineHeight=parseMethod(getComputedStyle(pre).lineHeight),hasLineNumbers=hasClass(pre,"line-numbers"),i=0,currentRange;currentRange=ranges[i++];){var range=currentRange.split("-"),start=+range[0],end=+range[1]||start,line=pre.querySelector(".line-highlight[data-range=\""+currentRange+"\"]")||document.createElement("div");line.setAttribute("aria-hidden","true");line.setAttribute("data-range",currentRange);line.className=(classes||"")+" line-highlight";if(hasLineNumbers&&Prism.plugins.lineNumbers){var startNode=Prism.plugins.lineNumbers.getLine(pre,start),endNode=Prism.plugins.lineNumbers.getLine(pre,end);if(startNode){line.style.top=startNode.offsetTop+"px"}if(endNode){line.style.height=endNode.offsetTop-startNode.offsetTop+endNode.offsetHeight+"px"}}else{line.setAttribute("data-start",start);if(end>start){line.setAttribute("data-end",end)}line.style.top=(start-offset-1)*lineHeight+"px";line.textContent=Array(end-start+2).join(" \n")}if(hasLineNumbers){pre.appendChild(line)}else{(pre.querySelector("code")||pre).appendChild(line)}}}function applyHash(){var hash=location.hash.slice(1);$$(".temporary.line-highlight").forEach(function(line){line.parentNode.removeChild(line)});var range=(hash.match(/\.([\d,-]+)$/)||[,""])[1];if(!range||document.getElementById(hash)){return}var id=hash.slice(0,hash.lastIndexOf(".")),pre=document.getElementById(id);if(!pre){return}if(!pre.hasAttribute("data-line")){pre.setAttribute("data-line","")}highlightLines(pre,range,"temporary ");document.querySelector(".temporary.line-highlight").scrollIntoView()}var fakeTimer=0;Prism.hooks.add("before-sanity-check",function(env){var pre=env.element.parentNode,lines=pre&&pre.getAttribute("data-line");if(!pre||!lines||!/pre/i.test(pre.nodeName)){return}var num=0;$$(".line-highlight",pre).forEach(function(line){num+=line.textContent.length;line.parentNode.removeChild(line)});if(num&&/^( \n)+$/.test(env.code.slice(-num))){env.code=env.code.slice(0,-num)}});Prism.hooks.add("complete",function completeHook(env){var pre=env.element.parentNode,lines=pre&&pre.getAttribute("data-line");if(!pre||!lines||!/pre/i.test(pre.nodeName)){return}clearTimeout(fakeTimer);var hasLineNumbers=Prism.plugins.lineNumbers,isLineNumbersLoaded=env.plugins&&env.plugins.lineNumbers;if(hasClass(pre,"line-numbers")&&hasLineNumbers&&!isLineNumbersLoaded){Prism.hooks.add("line-numbers",completeHook)}else{highlightLines(pre,lines);fakeTimer=setTimeout(applyHash,1)}});window.addEventListener("hashchange",applyHash);window.addEventListener("resize",function(){var preElements=document.querySelectorAll("pre[data-line]");Array.prototype.forEach.call(preElements,function(pre){highlightLines(pre)})})})();