parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return o(t)||n(t)||r(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function n(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=document.querySelector("body"),i=c.querySelector(".button"),s=c.querySelectorAll(".field-row"),l=c.querySelectorAll(".field-cell"),f=c.querySelector(".game-score"),u=c.querySelectorAll(".message"),d=c.querySelector(".message-win"),v=c.querySelector(".message-lose"),y=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],m=!1,h=4,b=4;function g(){return Math.floor(16*Math.random())}function S(){return Math.random()>=.9?4:2}function A(){var t=g(),e=S(),r=l[t];r.classList.length<2?(y[Math.floor(t/4)][t%4]=e,r.classList.add("field-cell--".concat(e)),r.textContent="".concat(e)):A()}function L(t){return t.filter(function(t){return 0!==t})}function p(t){for(var e=L(t),r=0;r<e.length;r++)e[r]===e[r+1]&&(e[r]*=2,e[r+1]=0,f.textContent=+f.textContent+e[r],r++);for(e=L(e);e.length<b;)e.push(0);return e}function w(t,e){t.className="",t.classList.add("field-cell"),0!==e?(t.textContent="".concat(e),t.classList.add("field-cell--".concat(e))):t.textContent=""}function C(t){for(var e=0;e<b;e++){w(s[t].children[e],y[t][e])}}function q(t){for(var e=0;e<h;e++){w(s[e].children[t],y[e][t])}}function x(){for(var t=0;t<h;t++){var e=p(y[t]);y[t]=e,C(t)}}function k(){for(var t=0;t<h;t++){var e=p(y[t].reverse()).reverse();y[t]=e,C(t)}}function E(){for(var t=0;t<b;t++){var e=[y[0][t],y[1][t],y[2][t],y[3][t]];e=p(e),y[0][t]=e[0],y[1][t]=e[1],y[2][t]=e[2],y[3][t]=e[3],q(t)}}function M(){for(var t=0;t<b;t++){var e=[y[0][t],y[1][t],y[2][t],y[3][t]];e=p(e.reverse()).reverse(),y[0][t]=e[0],y[1][t]=e[1],y[2][t]=e[2],y[3][t]=e[3],q(t)}}function O(){for(var t=0;t<h;t++)for(var e=[y[0][t],y[1][t],y[2][t],y[3][t]],r=0;r<b;r++)if(0===y[t][r]||y[t][r]===y[t][r+1]||e[r]===e[r+1])return!1;return!0}i.addEventListener("click",function(){i.classList.contains("start")&&(i.classList.replace("start","restart"),i.textContent="Restart",document.addEventListener("keydown",function(e){if(!0!==m){var r=JSON.stringify(y);switch(e.key){case"ArrowLeft":x();break;case"ArrowRight":k();break;case"ArrowUp":E();break;case"ArrowDown":M()}O()&&v.classList.remove("hidden"),r!==JSON.stringify(y)&&(t(l).some(function(t){return t.classList.contains("field-cell--2048")})&&(m=!0,d.classList.remove("hidden")),A())}})),l.forEach(function(t){t.className="",t.classList.add("field-cell"),t.textContent=""}),y=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],m=!1,t(u).forEach(function(t){return t.classList.add("hidden")}),f.textContent=0,A(),A()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.467f8381.js.map