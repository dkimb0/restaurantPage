(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),c=n(645),a=n.n(c)()(o());a.push([e.id,"#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.button {\n    padding: 40px;\n}\n\n.selected {\n\n    background-color: white;\n    border-bottom: none;\n}",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],l=c[s]||0,u="".concat(s," ").concat(l);c[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var d=r(e,o),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"e5ee6d608beafd5943b4.jpg";function t(){let t=document.createElement("div");t.setAttribute("id","divHome"),document.getElementById("content").appendChild(t);let n=document.createElement("img");n.src=e,n.style.height="400px",document.getElementById("divHome").appendChild(n);let r=document.createElement("h1");r.textContent="McDonaal",document.getElementById("divHome").appendChild(r);let o=document.createElement("p");o.textContent="Resturant is wundeful  please come",document.getElementById("divHome").appendChild(o)}const r=n.p+"60df3c8dff7ec252e878.png";var o=n(379),c=n.n(o),a=n(795),i=n.n(a),d=n(569),s=n.n(d),l=n(565),u=n.n(l),p=n(216),m=n.n(p),f=n(589),v=n.n(f),h=n(426),g={};g.styleTagTransform=v(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),c()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;let y=document.createElement("div");y.setAttribute("id","header");let b=document.createElement("button");b.textContent="Home",b.classList.add("button"),b.addEventListener("click",(()=>{x(),t(),I(b)}));let E=document.createElement("button");E.textContent="Menu",E.classList.add("button"),E.addEventListener("click",(()=>{x(),function(){let e=document.createElement("div");e.setAttribute("id","divMenu"),document.getElementById("content").appendChild(e);let t=document.createElement("img");t.src=r,t.style.height="400px",document.getElementById("divMenu").appendChild(t)}(),I(E)}));let C=document.createElement("button");function x(){let e=document.getElementById("content");for(;e.hasChildNodes();)e.removeChild(e.firstChild);w()}function I(e){C.classList.remove("selected"),b.classList.remove("selected"),E.classList.remove("selected"),e.classList.add("selected")}function w(){document.getElementById("content").appendChild(y),document.getElementById("header").appendChild(b),document.getElementById("header").appendChild(E),document.getElementById("header").appendChild(C)}C.textContent="Contact",C.classList.add("button"),C.addEventListener("click",(()=>{x(),function(){let e=document.createElement("div");e.setAttribute("id","divContact"),document.getElementById("content").appendChild(e);let t=document.createElement("p");t.textContent="+5 (555) 555-5555",document.getElementById("divContact").appendChild(t)}(),I(C)})),w(),t(),I(b)})()})();