(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5378],{42872:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(24852),o=n.n(r),s=n(45697),i=n.n(s),a=n(88798),c=n(15402),u=n(5346),p=n(30294);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function v(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,r,s,i=(r=a,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(s){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(){var e;f(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(h(e=i.call.apply(i,[this].concat(n))),"onTouchStart",(function(t){var n=t.touches[0];e.startX=n.pageX,e.startY=n.pageY,e.setState({scrolling:!1})})),m(h(e),"onTouchMove",(function(t){var n=t.touches[0],r=t.currentTarget;if(e.state.scrolling)t.stopPropagation();else if(Math.abs(e.startY-n.pageY)>Math.abs(e.startX-n.pageX))t.stopPropagation();else{var o=e.startX<n.pageX?"left":"right";(r&&"left"===o&&r.clientWidth<r.scrollWidth&&0!==r.scrollLeft||r&&"right"===o&&r.clientWidth+r.scrollLeft!==r.scrollWidth)&&(e.setState({scrolling:!0}),t.stopPropagation())}})),m(h(e),"onTouchEnd",(function(){e.setState({scrolling:!1})})),m(h(e),"renderPage",(function(){var t="function"==typeof e.props.viewers?e.props.viewers:e.props.viewers[e.props.format];return t?o().createElement(t,{response:e.props.response,layer:e.props.layer}):null})),e}return t=a,(n=[{key:"render",value:function(){return o().createElement("div",{style:{width:"100%",height:"100%",overflowX:"auto"},onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd},this.renderPage())}}])&&y(t.prototype,n),a}(o().Component);m(g,"propTypes",{format:i().string,viewers:i().oneOfType([i().func,i().object]),response:i().oneOfType([i().string,i().object,i().node]),layer:i().object});var w=n(41609),O=n.n(w),P=n(31351),j=n.n(P),E=n(2870);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function M(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(l,e);var t,n,r,s,i=(r=l,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(s){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function l(){var e;S(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(I(e=i.call.apply(i,[this].concat(n))),"getResponseProperties",(function(){var t=e.props.validator(e.props.format),n=e.props.responses.map((function(e){return void 0===e?{}:e})),r=t.getValidResponses(n),o=t.getNoValidResponses(e.props.responses),s=e.props.requests.length===o.length;return{validResponses:r,currResponse:e.getCurrentResponse(r[e.props.index]),emptyResponses:s,invalidResponses:o}})),C(I(e),"getCurrentResponse",(function(t){return e.props.validator(e.props.format).getValidResponses([t])})),C(I(e),"renderEmptyLayers",(function(){var t=e.getResponseProperties(),n=t.invalidResponses,r=t.emptyResponses;if(0===e.props.missingResponses&&r)return null;var s=0!==n.length;if(e.props.renderEmpty||(s=s&&0===e.props.missingResponses),s){var i=n.map((function(e){return e.layerMetadata.title}));return e.props.showEmptyMessageGFI?o().createElement(p.Alert,{bsStyle:"info"},o().createElement(u.Z,{msgId:"noInfoForLayers"}),o().createElement("b",null,i.join(", "))):null}return null})),C(I(e),"renderPage",(function(t){var n=e.props.viewers[e.props.format];return n?o().createElement(n,{response:t}):null})),C(I(e),"renderEmptyPages",(function(){var t=e.getResponseProperties().emptyResponses;return 0===e.props.missingResponses&&t?o().createElement(p.Alert,{bsStyle:"danger"},o().createElement("h4",null,o().createElement(c.Z,{msgId:"noFeatureInfo"}))):null})),C(I(e),"renderPages",(function(){var t=e.getResponseProperties().validResponses;return t.map((function(n,r){var s,i,c=n.response,u=n.layerMetadata,l=(0,E.Q)(n,e.props),f=e.props.header;return null!=u&&null!==(s=u.viewer)&&void 0!==s&&s.type&&(i=(0,a.gA)(u.viewer.type)),o().createElement(p.Panel,{eventKey:r,key:r,collapsible:e.props.collapsible,header:f?o().createElement("span",null,o().createElement(f,x({size:t.length},e.props.headerOptions,u,{index:e.props.index,onNext:function(){return e.props.onNext()},onPrevious:function(){return e.props.onPrevious()}}))):null,style:e.props.style},o().createElement(g,{response:c,format:l,viewers:i||e.props.viewers,layer:u}))}))})),C(I(e),"containerStyle",(function(t){return O()(t)&&e.props.isMobile?{height:"100%"}:{display:O()(t)?"none":"block"}})),e}return t=l,(n=[{key:"shouldComponentUpdate",value:function(e){return e.responses!==this.props.responses||e.missingResponses!==this.props.missingResponses||e.index!==this.props.index}},{key:"render",value:function(){var e=this,t=this.props.container,n=this.getResponseProperties(),r=n.currResponse,s=n.emptyResponses,i=[this.renderEmptyLayers(),o().createElement(t,x({},this.props.containerProps,{onChangeIndex:function(t){e.props.setIndex(t)},ref:"container",index:this.props.index||0,key:"swiper",style:this.containerStyle(r),className:"swipeable-view"}),this.renderPages())];return i=this.props.isMobile?i:j()(i),o().createElement("div",{className:"mapstore-identify-viewer"},s?this.renderEmptyPages():i.map((function(e){return e})))}}])&&T(t.prototype,n),l}(o().Component);C(N,"propTypes",{format:i().string,collapsible:i().bool,requests:i().array,responses:i().array,missingResponses:i().number,container:i().oneOfType([i().object,i().func]),header:i().oneOfType([i().object,i().func]),headerOptions:i().object,validator:i().func,viewers:i().object,style:i().object,containerProps:i().object,index:i().number,onNext:i().func,onPrevious:i().func,onUpdateIndex:i().func,setIndex:i().func,showEmptyMessageGFI:i().bool,renderEmpty:i().bool,loaded:i().bool,isMobile:i().bool}),C(N,"defaultProps",{format:(0,a.wR)(),responses:[],requests:[],missingResponses:0,collapsible:!1,headerOptions:{},container:p.Accordion,validator:a.Te,viewers:(0,a.Qm)(),style:{position:"relative",marginBottom:0},containerProps:{},showEmptyMessageGFI:!0,renderEmpty:!1,onNext:function(){},onPrevious:function(){},setIndex:function(){},isMobile:!1});const Z=N},11196:(e,t,n)=>{"use strict";n.d(t,{mI:()=>s,Yy:()=>i});var r=n(67076),o=n(88798),s=(0,r.withHandlers)({onNext:function(e){var t=e.index,n=void 0===t?0:t,r=e.setIndex,o=void 0===r?function(){}:r,s=e.validResponses,i=void 0===s?[]:s;return function(){o(Math.min(i.length-1,n+1))}},onPrevious:function(e){var t=e.index,n=e.setIndex,r=void 0===n?function(){}:n;return function(){r(Math.max(0,t-1))}}}),i=(0,r.defaultProps)({format:(0,o.wR)(),validator:o.Te})},82110:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(24852),o=n.n(r),s=n(96259),i=n(32425);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=function(e){var t=e.width,n=e.height,r=e.className,a=void 0===r?"loader-container":r,u=e.contentStyle,p=void 0===u?{}:u;return o().createElement("div",{className:a},o().createElement(s.Z,null,(function(e){var r=e.width,s=void 0===r?200:r,a=e.height,u=void 0===a?200:a,l=t||(u>0?Math.min(s,u):s),f=n||(u>0?Math.min(s,u):s),y=Math.min(l,f);return o().createElement(i.Z,{size:y,style:c({padding:y/10,margin:"auto",display:"flex"},p)})})))}},73014:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(24852),o=n.n(r),s=n(67076),i=n(82110);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}var c=function(e){var t=e.loading,n=e.isLoading;return t||n&&("function"==typeof n?n():!0===n)};const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.Z;return(0,s.branch)(e,(function(){return function(e){var r=e.loaderProps;return o().createElement(n,a({},t,r))}}))}},2870:(e,t,n)=>{"use strict";n.d(t,{Q:()=>i,j:()=>a});var r=n(27361),o=n.n(r),s=n(53005),i=function(e,t){var n=e.format,r=e.queryParams,o=void 0===r?{}:r;return o.info_format||o.outputFormat||n&&s.O7[n]||t.format},a=function(e){return!!o()(e,"layer.search.url")}}}]);