!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleVideo=e():t.SimpleVideo=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n(1).toString();var r=function(){function t(e){var n=e.data,o=(e.config,e.api);!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=o,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"cdx-simple-video",videoHolder:"cdx-simple-video__picture",caption:"cdx-simple-video__caption"},this.nodes={wrapper:null,videoHolder:null,video:null,caption:null},this.data={url:n.url||"",caption:n.caption||"",autoplay:void 0!==n.autoplay&&n.autoplay,controls:void 0!==n.controls&&n.controls,muted:void 0!==n.muted&&n.muted,stretched:void 0!==n.stretched&&n.stretched,width:void 0!==n.width?n.width:0,height:void 0!==n.height?n.height:0},this.settings=[{name:"stretched",icon:'<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>'},{name:"autoplay",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'},{name:"muted",icon:'\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 9v6h4l5 5V4l-5 5H7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'},{name:"controls",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.54 5.54L13.77 7.3 12 5.54 10.23 7.3 8.46 5.54 12 2zm2.92 10l-1.76-1.77L18.46 12l-1.76-1.77 1.76-1.77L22 12zm-10 2.92l1.77-1.76L12 18.46l1.77-1.76 1.77 1.76L12 22zm-2.92-10l1.76 1.77L5.54 12l1.76 1.77-1.76 1.77L2 12z"/><circle cx="12" cy="12" r="3"/><path fill="none" d="M0 0h24v24H0z"/></svg>'}]}var e,n,r;return e=t,r=[{key:"sanitize",get:function(){return{url:{},stretched:{},controls:{},autoplay:{},muted:{},caption:{br:!0},height:{},width:{}}}},{key:"pasteConfig",get:function(){return{patterns:{video:/https?:\/\/\S+\.(mp4|webm)$/i},tags:["video"],files:{mimeTypes:["video/*"]}}}}],(n=[{key:"render",value:function(){var t=this,e=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),n=this._make("div",this.CSS.loading),o=this._make("div",[this.CSS.videoHolder]),i=this._make("video"),r=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:"true",innerHTML:this.data.caption||""});e.appendChild(n);var a=this.data;return a.width&&a.height||i.addEventListener("loadedmetadata",(function(){a.height=this.videoHeight,a.width=this.videoWidth})),this.data.url&&(i.src=this.data.url,i.controls=this.data.controls,i.autoplay=this.data.autoplay,i.muted=this.data.muted),i.onloadstart=function(){e.classList.remove(t.CSS.loading),o.appendChild(i),e.appendChild(o),e.appendChild(r),n.remove(),t._acceptTuneView()},i.onerror=function(t){console.log("Failed to load the video",t)},this.nodes.videoHolder=o,this.nodes.wrapper=e,this.nodes.video=i,this.nodes.caption=r,e}},{key:"save",value:function(t){var e=t.querySelector("video"),n=t.querySelector("."+this.CSS.input);return e?Object.assign(this.data,{url:e.src,caption:n.innerHTML,controls:e.controls,autoplay:e.autoplay,muted:e.muted}):this.data}},{key:"onDropHandler",value:function(t){return new Promise((function(e,n){e({url:URL.createObjectURL(t),caption:t.name})}))}},{key:"onPaste",value:function(t){var e=this;switch(t.type){case"tag":var n=t.detail.data;this.data={url:n.src};break;case"pattern":var o=t.detail.data;this.data={url:o};break;case"file":var i=t.detail.file;this.onDropHandler(i).then((function(t){e.data=t}))}}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("div");return this.settings.forEach((function(n){var o=document.createElement("div");o.classList.add(t.CSS.settingsButton),o.innerHTML=n.icon,o.addEventListener("click",(function(){t._toggleTune(n.name),o.classList.toggle(t.CSS.settingsButtonActive)})),o.classList.toggle(t.CSS.settingsButtonActive,t.data[n.name]),e.appendChild(o)})),e}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.createElement(t);for(var a in Array.isArray(n)?(e=r.classList).add.apply(e,o(n)):n&&r.classList.add(n),i)r[a]=i[a];return r}},{key:"_toggleTune",value:function(t){this.data[t]=!this.data[t],this._acceptTuneView()}},{key:"_acceptTuneView",value:function(){var t=this;this.settings.forEach((function(e){t.nodes.videoHolder.classList.toggle(t.CSS.videoHolder+"--"+e.name.replace(/([A-Z])/g,(function(t){return"-".concat(t[0].toLowerCase())})),!!t.data[e.name]),"stretched"===e.name&&t.api.blocks.stretchBlock(t.blockIndex,!!t.data.stretched),"controls"===e.name&&(t.nodes.video.controls=t.data.controls),"autoplay"===e.name&&(t.nodes.video.autoplay=t.data.autoplay),"muted"===e.name&&(t.nodes.video.muted=t.data.muted)}))}},{key:"data",get:function(){return this._data},set:function(t){this._data=Object.assign({},this.data,t),this.nodes.video&&(this.nodes.video.autoplay=this.data.autoplay,this.nodes.video.controls=this.data.controls,this.nodes.video.muted=this.data.muted,this.nodes.video.src=this.data.url,this.nodes.video.dataset.height=this.data.height,this.nodes.video.dataset.width=this.data.width),this.nodes.caption&&(this.nodes.caption.innerHTML=this.data.caption)}}])&&i(e.prototype,n),r&&i(e,r),t}();t.exports=r},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-simple-video {}\n\n.cdx-simple-video .cdx-loader {\n  min-height: 200px;\n}\n\n.cdx-simple-video .cdx-input {\n  margin-top: 10px;\n}\n\n.cdx-simple-video video {\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.cdx-simple-video__caption[contentEditable=true][data-placeholder]:empty::before {\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n }\n\n.cdx-simple-video__caption[contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-simple-video__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.cdx-simple-video__picture--stretched video {\n  max-width: none;\n  width: 100%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(r).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(t){return document.querySelector(t)},d=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,u=[],p=n(5);function h(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function v(t,e){var n=d(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=d(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),v(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var a=l++;n=c||(c=g(e)),o=S.bind(null,n,a,!1),i=S.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),v(t,e),e}(e),o=C.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),o=L.bind(null,n),i=function(){m(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return h(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}t&&h(f(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete r[s.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function L(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function C(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=p(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}}])}));