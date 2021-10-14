/*! For license information please see fullscreen-plugin.74b9cc9d6382ebdedfb5.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1718],{75140:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(24852),o=n.n(r),l=n(45697),i=n.n(l),c=n(30294),u=n(50966),s=n(38560),a=n(27418),f=n.n(a);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,r,l,i=(r=c,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(l){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(){var e;y(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(h(e=i.call.apply(i,[this].concat(n))),"getStyle",(function(){var t={cursor:e.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return e.props.image?f()(t,{overflow:"hidden"}):f()(t,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),f()(t,e.props.style),t})),e}return t=c,(n=[{key:"render",value:function(){return o().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}])&&b(t.prototype,n),c}(o().Component);v(w,"propTypes",{id:i().string,image:i().string,onClick:i().func,style:i().object,disabled:i().bool,tooltip:i().string,className:i().string}),v(w,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const O=w;function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function C(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,l,i=(r=a,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(l){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(){var e;P(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _(T(e=i.call.apply(i,[this].concat(n))),"onClick",(function(){e.props.onClick(!e.props.pressed,e.props.options)})),_(T(e),"renderNormalButton",(function(){return o().createElement(s.Z,E({id:e.props.id},e.props.btnConfig,{onClick:e.onClick,bsStyle:e.props.pressed?e.props.pressedStyle:e.props.defaultStyle,style:e.props.style}),e.props.glyphicon?o().createElement(c.Glyphicon,{glyph:e.props.glyphicon}):null,e.props.glyphicon&&e.props.text&&!o().isValidElement(e.props.text)?" ":null,e.props.text,e.props.help)})),_(T(e),"renderImageButton",(function(){return o().createElement(O,{id:e.props.id,image:e.props.image,onClick:e.onClick,style:e.props.style})})),_(T(e),"addTooltip",(function(t){return o().createElement(u.Z,{placement:e.props.tooltipPlace,key:"overlay-trigger."+e.props.id,overlay:e.props.tooltip},t)})),e}return t=a,(n=[{key:"render",value:function(){var e="normal"===this.props.btnType?this.renderNormalButton():this.renderImageButton();return this.props.tooltip?this.addTooltip(e):e}}])&&k(t.prototype,n),a}(o().Component);_(x,"propTypes",{id:i().string,btnConfig:i().object,options:i().object,text:i().oneOfType([i().string,i().element]),help:i().oneOfType([i().string,i().element]),glyphicon:i().string,pressed:i().bool,onClick:i().func,tooltip:i().element,tooltipPlace:i().string,style:i().object,btnType:i().oneOf(["normal","image"]),image:i().string,pressedStyle:i().string,defaultStyle:i().string}),_(x,"defaultProps",{onClick:function(){},options:{},pressed:!1,tooltipPlace:"top",style:{},btnType:"normal",pressedStyle:"primary",defaultStyle:"default"});const R=x},50966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(61365),o=n(30294);const l=(0,r.Z)(o.OverlayTrigger)},61365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(24852),o=n.n(r),l=n(37275);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const c=function(e){return function(t){return o().createElement(e,i({},t,{container:document.querySelector("."+(l.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},9842:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(71703),o="TOGGLE_FULLSCREEN",l=n(10577),i=n.n(l),c=n(91175),u=n.n(c),s=n(10928),a=n.n(s),f=n(82904),p=n(37275),y=n(49977),b=n.n(y),d=n(27418),m=n.n(d),h=n(45697),g=n.n(h),v=n(24852),w=n.n(v),O=n(75140),S=n(30294),E=n(5346);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function F(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(i,e);var t,n,r,o,l=(r=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function i(){var e;j(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return R(_(e=l.call.apply(l,[this].concat(n))),"getButtonProperties",(function(){return["id","btnConfig","options","text","glyphicon","onClick","tooltipPlace","style","btnType","image","pressedStyle","defaultStyle"].reduce((function(t,n){return t[n]=e.props[n],t}),{})})),e}return t=i,(n=[{key:"render",value:function(){return w().createElement(O.Z,k({},this.getButtonProperties(),{pressed:this.props.active,tooltip:w().createElement(S.Tooltip,{id:"full-screen-button-tip"},w().createElement(E.Z,{msgId:this.props.active?this.props.activeTooltip:this.props.notActiveTooltip}))}))}}])&&C(t.prototype,n),i}(w().Component);R(B,"propTypes",{id:g().string,btnConfig:g().object,options:g().object,text:g().oneOfType([g().string,g().element]),help:g().oneOfType([g().string,g().element]),glyphicon:g().string,active:g().bool,onClick:g().func,activeTooltip:g().string,notActiveTooltip:g().string,tooltipPlace:g().string,style:g().object,btnType:g().oneOf(["normal","image"]),image:g().string,pressedStyle:g().string,defaultStyle:g().string}),R(B,"defaultProps",{id:"fullscreen-btn",activeTooltip:"fullscreen.tooltipDeactivate",notActiveTooltip:"fullscreen.tooltipActivate",tooltipPlace:"left",defaultStyle:"primary",pressedStyle:"success active",glyphicon:"1-full-screen",btnConfig:{className:"square-button"}});const q=B;var A=(0,r.connect)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.controls,n=void 0===t?{}:t;return{active:n.fullscreen&&n.fullscreen.enabled}}),{onClick:function(e,t){return n=e,r=t.querySelector,{type:o,enable:n,elementSelector:r};var n,r}})(q);const N={FullScreenPlugin:m()(A,{disablePluginIf:"{state('browser') && state('browser').safari}",Toolbar:{name:"fullscreen",position:5,alwaysVisible:!0,tool:!0,priority:1}}),reducers:{},epics:{toggleFullscreenEpic:function(e){return e.ofType(o).switchMap((function(e){var t=document.querySelector(e&&e.querySelector||"."+(p.ZP.getConfigProp("themePrefix")||"ms2")+" > div");return t&&e.enable&&i().enabled?i().request(t):t&&!e.enable&&i().exit(),b().Observable.merge(b().Observable.fromEvent(document,a()(u()([["exitFullscreen","fullscreenchange"],["webkitExitFullscreen","webkitfullscreenchange"],["webkitCancelFullScreen","webkitfullscreenchange"],["mozCancelFullScreen","mozfullscreenchange"],["msExitFullscreen","MSFullscreenChange"]].filter((function(e){return document[e[0]]}))))).filter((function(){return i().element!==t})).map((function(){return(0,f.Xg)("fullscreen","enabled",!1)})),b().Observable.of((0,f.Xg)("fullscreen","enabled",e.enable)),b().Observable.fromEvent(window,"hashchange").do((function(){return i().exit()})).map((function(){return(0,f.Xg)("fullscreen","enabled",!1)})))}))}}}},10577:e=>{!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=e.exports,r="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,o=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,o=n.length,l={};r<o;r++)if((e=n[r])&&e[1]in t){for(r=0;r<e.length;r++)l[n[0][r]]=e[r];return l}return!1}(),l={change:o.fullscreenchange,error:o.fullscreenerror},i={request:function(e){return new Promise(function(n){var l=o.requestFullscreen,i=function(){this.off("change",i),n()}.bind(this);e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[l]():e[l](r?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",i)}.bind(this))},exit:function(){return new Promise(function(e){var n=function(){this.off("change",n),e()}.bind(this);t[o.exitFullscreen](),this.on("change",n)}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=l[e];r&&t.addEventListener(r,n,!1)},off:function(e,n){var r=l[e];r&&t.removeEventListener(r,n,!1)},raw:o};o?(Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(t[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[o.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[o.fullscreenEnabled])}}}),n?e.exports=i:window.screenfull=i):n?e.exports=!1:window.screenfull=!1}()}}]);