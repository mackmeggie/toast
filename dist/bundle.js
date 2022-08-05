(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),l=new URL(t(147),t.b),u=i()(a()),d=s()(l);u.push([n.id,"header {\n    color: plum;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 48px;\n    margin-left: 30px;\n    \n    \n\n}\n\nnav {\n    display: grid;\n    grid-template-areas: \n    'home menu contact';\n    column-gap: 5vw;\n    \n}\n\n#tab1 {\n    grid-area: home;\n}\n\n#tab2 {\n    grid-area: menu;\n}\n\n#tab3 {\n    grid-area: contact;\n}\n\nh1 {\n    display: flex;\n    justify-content: center;\n    font-size: 54px;\n}\n\n#contentContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    background-image: url("+d+");\n\n    width: 62vw;\n    height: 100vh;\n    \n}\n\np {\n    color: black;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 28px;\n    grid-area: blurb;\n    text-align: center;\n    margin-left: 15vw;\n    margin-right: 15vw;\n    margin-top: 5vw;\n    \n}\n\n#content {\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n   \n}\n\nul {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n}\n",""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),l=0;l<o.length;l++){var u=t(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},147:(n,e,t)=>{n.exports=t.p+"d5691e39678412a6d001.png"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),l=t(216),u=t.n(l),d=t(589),p=t.n(d),f=t(426),m={};function v(n){document.querySelectorAll(".button-nav").forEach((n=>{n!==this&&n.classList.remove("active")})),n.classList.add("active")}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,function n(){const e=document.querySelector("div#content"),t=document.createElement("nav");e.appendChild(t);const r=document.createElement("button");r.classList.add("button-nav"),r.id="tab1",r.textContent="Home",r.addEventListener("click",(n=>{n.target.classList.contains("active")||(v(r),homeLoad())})),t.appendChild(r);const a=document.createElement("button");a.classList.add("button-nav"),a.id="tab2",a.textContent="Menu",a.addEventListener("click",(n=>{n.target.classList.contains("active")||(v(a),menuLoad())})),t.appendChild(a);const o=document.createElement("button");return o.classList.add("button-nav"),o.id="tab3",o.textContent="Contact",t.appendChild(o),n}(),function(){const n=document.querySelector("div#content"),e=document.createElement("div");e.id="contentContainer",n.appendChild(e)}()})()})();