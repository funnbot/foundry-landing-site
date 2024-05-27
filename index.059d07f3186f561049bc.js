/*! For license information please see index.059d07f3186f561049bc.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["status"];function r(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(){a=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),c=new _(n||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",b="completed",g={};function m(){}function w(){}function x(){}var E={};f(E,u,(function(){return this}));var k=Object.getPrototypeOf,O=k&&k(k(A([])));O&&O!==n&&o.call(O,u)&&(E=O);var T=x.prototype=m.prototype=Object.create(E);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(i,a,c,u){var s=p(e[i],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function j(t,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===b){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?b:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=b,n.method="throw",n.arg=s.arg)}}}function I(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function t(){for(;++i<r.length;)if(o.call(r,i))return t.value=r[i],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=x,i(T,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(T),t},r.awrap=function(t){return{__await:t}},L(S.prototype),f(S.prototype,s,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(T),f(T,l,"Generator"),f(T,u,(function(){return this})),f(T,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function c(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}var s="Incorrect Password",l="Wait",f="Starting",h="Stopping",p="Unknown",d="Error Starting",v=p;function y(){var t=document.getElementById("start-btn"),e=document.getElementById("stop-btn");t.setAttribute("disabled","disabled"),e.setAttribute("disabled","disabled")}function b(){var t=document.getElementById("start-btn"),e=document.getElementById("stop-btn");t.removeAttribute("disabled"),e.removeAttribute("disabled")}var g=5e3,m=void 0,w=0;function x(t){var e=Date.now();e-w>=g&&(y(),w=e,t(),void 0===m&&(m=setTimeout((function(){m=void 0,b()}),g)),g+=3e3)}function E(t){return new Promise((function(e){return setTimeout(e,t)}))}function k(t){return v===t}function O(t){v=t}function T(){if(void 0===globalThis.ec2Instance){var t=function(){localStorage.getItem("password");var t=document.getElementById("password").value;try{var e=CryptoJS.AES.decrypt("U2FsdGVkX18AOt+VQEHRyIySO+GDLJKatH/aAHIxmHoxIC1Xepx5vK78Hf3UN8f11snX7TkCdBJEKSWr0bkgaroUFL0sO+x8+YaZIMgcBH8uCWbXuU92l2E3FNpSVV/1hdfacofM/3IOE57HyXfvoQ==",t).toString(CryptoJS.enc.Utf8);return JSON.parse(e)}catch(t){return}}();if(void 0===t)return;globalThis.AWS.config.update({region:"us-west-1"}),globalThis.AWS.config.update({accessKeyId:t.key,secretAccessKey:t.secret}),globalThis.ec2Instance=new globalThis.AWS.EC2}return globalThis.ec2Instance}globalThis.ec2Instance=void 0;var L="i-05799531d26c6725a";function S(){if(!(k(d)||k(f)||k(l))){var t=T();if(void 0!==t){var e={InstanceIds:[L]};O(l),y(),t.startInstances(e,(function(t,e){t?(console.log(t,t.stack),O(d)):O(f),b()})),globalThis.checkFoundryTimeout=5e3}else O(s)}}function j(){if(!(k("Error Stopping")||k(h)||k(l))){var t=T();if(void 0!==t){var e={InstanceIds:[L]};O(l),y(),t.stopInstances(e,(function(t,e){t?(console.log(t,t.stack),O(d)):O(h),b()})),globalThis.checkFoundryTimeout=4e3}else O(s)}}function I(t){return P.apply(this,arguments)}function P(){return P=u(a().mark((function t(e){var r,n,i,c,u,s,l=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(r=l.length>1&&void 0!==l[1]?l[1]:{}).timeout,i=void 0===n?8e3:n,c=new AbortController,u=setTimeout((function(){return c.abort()}),i),t.next=6,fetch(e,o(o({},r),{},{signal:c.signal}));case 6:return s=t.sent,clearTimeout(u),t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function F(){return _.apply(this,arguments)}function _(){return(_=u(a().mark((function t(){var e,r,n,o,i,c,u,s,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new Request("https://foundry.funnbot.click/api/status",{method:"GET",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded","Cache-Control":"no-cache no-store",Expires:"0"})}),n=globalThis.checkFoundryTimeout,globalThis.checkFoundryTimeout=Math.floor(1.5*globalThis.checkFoundryTimeout),o=void 0,t.prev=5,t.next=8,I(r,{timeout:n});case 8:o=t.sent,t.next=23;break;case 11:if(t.prev=11,t.t0=t.catch(5),"cors"!==t.t0.type){t.next=17;break}throw Error("cors");case 17:if("basic"!==t.t0.type){t.next=21;break}return t.abrupt("return",{status:"error"});case 21:throw console.log({e:t.t0}),Error(t.t0);case 23:return i=void 0,t.prev=24,t.next=27,o.json();case 27:i=t.sent,t.next=33;break;case 30:throw t.prev=30,t.t1=t.catch(24),Error("Bad Response: "+o);case 33:if(null===(e=i)||void 0===e||!e.active){t.next=37;break}return t.abrupt("return",{status:"ok",active:!0,world:null!==(c=null===(u=i)||void 0===u?void 0:u.world)&&void 0!==c?c:"none",users:null!==(s=null===(l=i)||void 0===l?void 0:l.users)&&void 0!==s?s:0});case 37:return t.abrupt("return",{status:"ok",active:!1});case 38:case"end":return t.stop()}}),t,null,[[5,11],[24,30]])})))).apply(this,arguments)}globalThis.checkFoundryTimeout=5e3;var A=document.getElementById("foundry-status");function H(){return C.apply(this,arguments)}function C(){return(C=u(a().mark((function t(){var n,o,i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=A.innerHTML,A.innerHTML="<b>Checking Status...</b>",t.next=4,E(200);case 4:return A.innerHTML=n,t.next=7,F();case 7:if(o=t.sent,i=o.status,c=r(o,e),"error"!==i){t.next=16;break}if("cors"!==c.type){t.next=13;break}throw Error(i+": "+c);case 13:A.innerHTML="<b>Status:</b> not running<br>",t.next=21;break;case 16:if("ok"!==i){t.next=20;break}c.active?A.innerHTML='<b>Status:</b> running <a href="https://foundry.funnbot.click">Click To Enter FoundryVTT</a><br><b>World:</b> '.concat(c.world,"<br><b>Users:</b> ").concat(c.users,"<br>"):A.innerHTML="<b>Status:</b> running",t.next=21;break;case 20:throw Error(i+c);case 21:return t.next=23,E(1e3);case 23:H();case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}O(p);var B=document.getElementById("start-btn"),G=document.getElementById("stop-btn");B.addEventListener("click",(function(){x(S)})),G.addEventListener("click",(function(){x(j)})),u(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:H();case 1:case"end":return t.stop()}}),t)})))()})();