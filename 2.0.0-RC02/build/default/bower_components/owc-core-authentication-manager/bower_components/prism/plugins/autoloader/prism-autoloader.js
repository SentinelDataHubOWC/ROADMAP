(function(){if("undefined"!==typeof self&&self.Prism&&self.document&&document.createElement){var a={javascript:"clike",actionscript:"javascript",arduino:"cpp",aspnet:"markup",bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup",erb:["ruby","markup-templating"],fsharp:"clike",flow:"javascript",glsl:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",java:"clike",jolie:"clike",kotlin:"clike",less:"css",markdown:"markup","markup-templating":"markup",n4js:"javascript",nginx:"clike",objectivec:"c",opencl:"cpp",parser:"markup",php:["clike","markup-templating"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:"javascript",qore:"clike",jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java",smarty:"markup-templating",soy:"markup-templating",swift:"clike",textile:"markup",twig:"markup",typescript:"javascript",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup"},b={},d=document.getElementsByTagName("script");d=d[d.length-1];var e="components/";if(d.hasAttribute("data-autoloader-path")){var g=d.getAttribute("data-autoloader-path").trim();0<g.length&&!/^[a-z]+:\/\//i.test(d.src)&&(e=g.replace(/\/?$/,"/"))}else /[\w-]+\.js$/.test(d.src)&&(e=d.src.replace(/[\w-]+\.js$/,"components/"));var h=Prism.plugins.autoloader={languages_path:e,use_minified:!0},d=function(q,r,t){var u=document.createElement("script");u.src=q,u.async=!0,u.onload=function(){document.body.removeChild(u),r&&r()},u.onerror=function(){document.body.removeChild(u),t&&t()},document.body.appendChild(u)},j=function(q){return h.languages_path+"prism-"+q+(h.use_minified?".min":"")+".js"},k=function(q,r){var t=b[q];t||(t=b[q]={});var u=r.getAttribute("data-dependencies");!u&&r.parentNode&&"pre"===r.parentNode.tagName.toLowerCase()&&(u=r.parentNode.getAttribute("data-dependencies")),u=u?u.split(/\s*,\s*/g):[],m(u,function(){n(q,function(){Prism.highlightElement(r)})})},m=function(q,r,t){"string"===typeof q&&(q=[q]);var u=0,v=q.length,w=function(){u<v?n(q[u],function(){u++,w()},function(){t&&t(q[u])}):u===v&&r&&r(q)};w()},n=function(q,r,t){var u=function(){var w=!1;0<=q.indexOf("!")&&(w=!0,q=q.replace("!",""));var x=b[q];if(x||(x=b[q]={}),r&&(!x.success_callbacks&&(x.success_callbacks=[]),x.success_callbacks.push(r)),t&&(!x.error_callbacks&&(x.error_callbacks=[]),x.error_callbacks.push(t)),!w&&Prism.languages[q])o(q);else if(!w&&x.error)p(q);else if(w||!x.loading){x.loading=!0;var y=j(q);d(y,function(){x.loading=!1,o(q)},function(){x.loading=!1,x.error=!0,p(q)})}},v=a[q];v&&v.length?m(v,u):u()},o=function(q){b[q]&&b[q].success_callbacks&&b[q].success_callbacks.length&&b[q].success_callbacks.forEach(function(r){r(q)})},p=function(q){b[q]&&b[q].error_callbacks&&b[q].error_callbacks.length&&b[q].error_callbacks.forEach(function(r){r(q)})};Prism.hooks.add("complete",function(q){q.element&&q.language&&!q.grammar&&q.language!=="none"&&k(q.language,q.element)})}})();