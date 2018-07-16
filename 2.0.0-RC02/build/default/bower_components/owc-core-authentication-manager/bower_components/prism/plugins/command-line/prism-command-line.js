(function(){if('undefined'!==typeof self&&self.Prism&&self.document){var a=/\s*\bcommand-line\b\s*/;Prism.hooks.add('before-highlight',function(b){if(b.vars=b.vars||{},b.vars['command-line']=b.vars['command-line']||{},b.vars['command-line'].complete||!b.code)return void(b.vars['command-line'].complete=!0);var c=b.element.parentNode;if(!c||!/pre/i.test(c.nodeName)||!a.test(c.className)&&!a.test(b.element.className))return void(b.vars['command-line'].complete=!0);if(b.element.querySelector('.command-line-prompt'))return void(b.vars['command-line'].complete=!0);var d=b.code.split('\n');b.vars['command-line'].numberOfLines=d.length,b.vars['command-line'].outputLines=[];var e=c.getAttribute('data-output'),f=c.getAttribute('data-filter-output');if(e||''===e){e=e.split(',');for(var g=0;g<e.length;g++){var h=e[g].split('-'),k=parseInt(h[0],10),l=2===h.length?parseInt(h[1],10):k;if(!isNaN(k)&&!isNaN(l)){1>k&&(k=1),l>d.length&&(l=d.length),k--,l--;for(var m=k;m<=l;m++)b.vars['command-line'].outputLines[m]=d[m],d[m]=''}}}else if(f)for(var g=0;g<d.length;g++)0===d[g].indexOf(f)&&(b.vars['command-line'].outputLines[g]=d[g].slice(f.length),d[g]='');b.code=d.join('\n')}),Prism.hooks.add('before-insert',function(b){if(b.vars=b.vars||{},b.vars['command-line']=b.vars['command-line']||{},!b.vars['command-line'].complete){for(var c=b.highlightedCode.split('\n'),d=0;d<b.vars['command-line'].outputLines.length;d++)b.vars['command-line'].outputLines.hasOwnProperty(d)&&(c[d]=b.vars['command-line'].outputLines[d]);b.highlightedCode=c.join('\n')}}),Prism.hooks.add('complete',function(b){if(b.vars=b.vars||{},b.vars['command-line']=b.vars['command-line']||{},!b.vars['command-line'].complete){var c=b.element.parentNode;a.test(b.element.className)&&(b.element.className=b.element.className.replace(a,' ')),a.test(c.className)||(c.className+=' command-line');var d=function(n,o){return(c.getAttribute(n)||o).replace(/"/g,'&quot')},e=Array(b.vars['command-line'].numberOfLines+1),f=d('data-prompt','');if(''!==f)e=e.join('<span data-prompt="'+f+'"></span>');else{var g=d('data-user','user'),h=d('data-host','localhost');e=e.join('<span data-user="'+g+'" data-host="'+h+'"></span>')}var k=document.createElement('span');k.className='command-line-prompt',k.innerHTML=e;for(var l=0;l<b.vars['command-line'].outputLines.length;l++)if(b.vars['command-line'].outputLines.hasOwnProperty(l)){var m=k.children[l];m.removeAttribute('data-user'),m.removeAttribute('data-host'),m.removeAttribute('data-prompt')}b.element.insertBefore(k,b.element.firstChild),b.vars['command-line'].complete=!0}})}})();