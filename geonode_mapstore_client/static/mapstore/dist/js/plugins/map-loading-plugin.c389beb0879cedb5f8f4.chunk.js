(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[49528],{370646:(n,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>E});var t=e(893379),o=e.n(t),i=e(289010);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var p=e(727418),a=e.n(p),s=e(171703),c=e(22222),l=e(675263),u=e.n(l),f=e(124852),d=e.n(f),b=e(472986),m=e.n(b);function g(n){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(n)}function y(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function h(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function x(n,r){return x=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},x(n,r)}function w(n,r){if(r&&("object"===g(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function v(n){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},v(n)}function O(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}e.e(79509).then(e.bind(e,634903));var P=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&x(n,r)}(p,n);var r,e,t,o,i=(t=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=v(t);if(o){var e=v(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return w(this,n)});function p(){return y(this,p),i.apply(this,arguments)}return r=p,(e=[{key:"render",value:function(){return this.props.loading?d().createElement("div",{className:this.props.className,id:this.props.id},d().createElement(m(),{noFadeIn:!0,overrideSpinnerClassName:"spinner",spinnerName:this.props.spinner})):null}}])&&h(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),p}(d().Component);O(P,"propTypes",{id:u().string,loading:u().bool,className:u().string,spinner:u().string}),O(P,"defaultProps",{id:"mapstore-globalspinner",loading:!1,className:"ms2-loading",spinner:"circle"});const _=P;var j=e(675110),k=(0,c.P1)([j.l2],(function(n){return{loading:n&&n.some((function(n){return n.loading}))}})),S=(0,s.connect)(k)(_);const E={MapLoadingPlugin:a()(S,{Toolbar:{name:"maploading",position:1,tool:!0,priority:1}}),reducers:{}}},289010:(n,r,e)=>{"use strict";e.d(r,{Z:()=>i});var t=e(923645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,".msgapi #mapstore-globalspinner  {\r\n    width: 28px;\r\n    height: 28px;\r\n    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);\r\n    background-color: white;\r\n    background-size: 80px 80px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 4px;\r\n    border: 1px solid #999;\r\n    z-index: 10;\r\n    top: 90px;\r\n    left: 2px;\r\n    position: absolute;\r\n    margin: 8px;\r\n}\r\n\r\n.msgapi #mapstore-globalspinner .circle-wrapper {\r\n    margin-left: 2px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.msgapi #mapstore-toolbar #mapstore-globalspinner {\r\n    position: static;\r\n    width: 42px;\r\n    margin: 0;\r\n    margin-top: 0;\r\n    height: 35px;\r\n    box-shadow: none;\r\n}\r\n\r\n.msgapi .ms2-loading .sk-circle-wrapper {\r\n     width: 30px;\r\n     height: 30px;\r\n     margin-left: 10px !important;\r\n     margin-top: 10px !important;\r\n }\r\n",""]);const i=o}}]);