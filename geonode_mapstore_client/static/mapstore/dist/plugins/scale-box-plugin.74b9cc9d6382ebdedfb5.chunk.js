(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4593],{98939:(e,t,n)=>{"use strict";n.d(t,{d2:()=>o,yX:()=>r,Uo:()=>i,n2:()=>c,SA:()=>u});var o="CHANGE_HELP_STATE",r="CHANGE_HELP_TEXT",i="CHANGE_HELPWIN_VIZ";function c(e){return{type:r,helpText:e}}function u(e){return{type:i,helpwinViz:e}}},1550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>r,TR:()=>i,N7:()=>c,mq:()=>u,uv:()=>p,Qy:()=>l,IL:()=>a,Li:()=>s,OW:()=>f,ZO:()=>y,Um:()=>b,TF:()=>m,Ls:()=>h,Ec:()=>d,Eu:()=>v,JJ:()=>g,nZ:()=>O,YD:()=>E,GI:()=>x,Jb:()=>_,Uh:()=>T,LP:()=>w,xy:()=>S,o6:()=>P,FP:()=>R,Mo:()=>j,sO:()=>C,Px:()=>N,hd:()=>A,BV:()=>I,SO:()=>Z,H0:()=>H,$X:()=>L,ou:()=>M,NE:()=>k});var o=n(97395),r="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",c="CHANGE_MOUSE_POINTER",u="CHANGE_ZOOM_LVL",p="PAN_TO",l="ZOOM_TO_EXTENT",a="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",y="CHANGE_MAP_STYLE",b="CHANGE_ROTATION",m="CREATION_ERROR_LAYER",h="UPDATE_VERSION",d="INIT_MAP",v="RESIZE_MAP",g="CHANGE_MAP_LIMITS",O="SET_MAP_RESOLUTIONS",E="REGISTER_EVENT_LISTENER",x="UNREGISTER_EVENT_LISTENER",_="MOUSE_MOVE",T="MOUSE_OUT";function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,o.vU)({title:"warning",message:"map.errorLoadingFont",values:e,position:"tc",autoDismiss:10})}function S(e,t,n){return{type:a,pos:e,zoom:t,crs:n}}function P(e,t,n,o,i,c,u,p){return{type:r,center:e,zoom:t,bbox:n,size:o,mapStateSource:i,projection:c,viewerOptions:u,resolution:p}}function R(e,t){return{type:i,point:e,layer:t}}function j(e){return{type:c,pointer:e}}function C(e,t){return{type:u,zoom:e,mapStateSource:t}}function N(e,t,n){return{type:l,extent:e,crs:t,maxZoom:n}}function A(e,t){return{type:y,style:e,mapStateSource:t}}function I(e){var t=e.restrictedExtent,n=e.crs,o=e.minZoom;return{type:g,restrictedExtent:t,crs:n,minZoom:o}}function Z(e){return{type:O,resolutions:e}}var H=function(e,t){return{type:E,eventName:e,toolName:t}},L=function(e,t){return{type:x,eventName:e,toolName:t}},M=function(e){return{type:_,position:e}},k=function(){return{type:T}}},83606:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var o=n(47037),r=n.n(o),i=n(45697),c=n.n(i),u=n(24852),p=n.n(u),l=n(30294),a=n(86638);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(i){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function u(){var e;f(this,u);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return v(h(e=c.call.apply(c,[this].concat(n))),"onMouseOver",(function(){var t=r()(e.props.helpText)?e.props.helpText:(0,a.S$)(e.context.messages,e.props.helpText.props.msgId);e.props.changeHelpText(t),e.props.changeHelpwinVisibility(!0)})),e}return t=u,(n=[{key:"render",value:function(){return p().createElement(l.Badge,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}])&&y(t.prototype,n),u}(p().Component);v(g,"propTypes",{id:c().string,helpText:c().oneOfType([c().string,c().element]),isVisible:c().bool,changeHelpText:c().func,changeHelpwinVisibility:c().func,className:c().string}),v(g,"contextTypes",{messages:c().object}),v(g,"defaultProps",{helpText:"",isVisible:!1});const O=g},75964:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var o=n(18446),r=n.n(o),i=n(45697),c=n.n(i),u=n(24852),p=n.n(u),l=n(30294),a=n(52259);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(i){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function u(){var e;f(this,u);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return v(h(e=c.call.apply(c,[this].concat(n))),"onComboChange",(function(t){var n=parseInt(t.nativeEvent.target.value,10);e.props.onChange(n,e.props.scales[n])})),v(h(e),"getOptions",(function(){return e.props.scales.map((function(t,n){return p().createElement("option",{value:n,key:n},e.props.template(t,n))})).filter((function(t,n){return n>=e.props.minZoom}))})),e}return t=u,(n=[{key:"shouldComponentUpdate",value:function(e){return!r()(e,this.props)}},{key:"render",value:function(){var e;return e=this.props.readOnly?p().createElement("label",null,this.props.template(this.props.scales[this.props.currentZoomLvl],this.props.currentZoomLvl)):this.props.useRawInput?p().createElement("select",{label:this.props.label,onChange:this.onComboChange,bsSize:"small",value:this.props.currentZoomLvl||""},this.getOptions()):p().createElement(l.Form,{inline:!0},p().createElement(l.FormGroup,{bsSize:"small"},p().createElement(l.ControlLabel,null,this.props.label),p().createElement(l.FormControl,{componentClass:"select",onChange:this.onComboChange,value:this.props.currentZoomLvl||""},this.getOptions()))),p().createElement("div",{id:this.props.id,style:this.props.style},e)}}])&&y(t.prototype,n),u}(p().Component);v(g,"propTypes",{id:c().string,style:c().object,scales:c().array,currentZoomLvl:c().number,minZoom:c().number,onChange:c().func,readOnly:c().bool,label:c().oneOfType([c().func,c().string,c().object]),template:c().func,useRawInput:c().bool}),v(g,"defaultProps",{id:"mapstore-scalebox",scales:(0,a.getGoogleMercatorScales)(0,28),currentZoomLvl:0,minZoom:0,onChange:function(){},readOnly:!1,template:function(e){return e<1?Math.round(1/e)+" : 1":"1 : "+Math.round(e)},useRawInput:!1});const O=g},58888:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var o=n(24852),r=n.n(o),i=n(22843),c=n(22222),u=n(827),p=n(1550),l=n(71703),a=n(98939),s=n(45697),f=n.n(s),y=n(83606);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function v(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}n(41165);var O,E,x,_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(i){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(){return m(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){return r().createElement("div",{id:this.props.id},r().createElement(y.Z,{id:"helpbadge-"+(this.props.children.key||this.props.id),isVisible:this.props.helpEnabled,helpText:this.props.helpText,changeHelpText:this.props.changeHelpText,changeHelpwinVisibility:this.props.changeHelpwinVisibility}),this.props.children)}}])&&h(t.prototype,n),u}(r().Component);O=_,E="propTypes",x={id:f().string,helpText:f().oneOfType([f().string,f().element]),helpEnabled:f().bool,changeHelpText:f().func,changeHelpwinVisibility:f().func},E in O?Object.defineProperty(O,E,{value:x,enumerable:!0,configurable:!0,writable:!0}):O[E]=x;const T=_,w=(0,l.connect)((function(e){return{helpEnabled:e.controls&&e.controls.help&&e.controls.help.enabled}}),{changeHelpText:a.n2,changeHelpwinVisibility:a.SA})(T);var S=n(81756),P=n(75964),R=n(52259),j=n(27418),C=n.n(j);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},A.apply(this,arguments)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function L(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}n(87231);var k=(0,c.P1)([u.Od,u._e],(function(e,t){return{minZoom:t,currentZoomLvl:e&&e.zoom,scales:(0,R.getScales)(e&&e.projection||"EPSG:3857",e&&e.mapOptions&&e.mapOptions.view&&e.mapOptions.view.DPI||null)}})),V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(u,e);var t,n,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(o);if(i){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(){return I(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){return r().createElement(w,{id:"mapstore-scalebox-container",key:"scalebox-help",helpText:r().createElement(S.Z,{msgId:"helptexts.scaleBox"})},r().createElement(P.Z,A({key:"scaleBox",label:r().createElement(S.Z,{msgId:"mapScale"})},this.props)))}}])&&Z(t.prototype,n),u}(r().Component),G=(0,i.$j)(k,{onChange:p.sO})(V);const z={ScaleBoxPlugin:C()(G,{disablePluginIf:"{state('mapType') === 'cesium'}"},{MapFooter:{name:"scale",position:2,tool:!0,priority:1}}),reducers:{}}},81756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(71703),r=n(5346);const i=(0,o.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(r.Z)},8439:(e,t,n)=>{(e.exports=n(9252)()).push([e.id,".msgapi .mapToolbar .mapstore-tb-helpbadge {\n    display: block;\n    background-color: #777;\n    position: absolute;\n    z-index: 1000;\n    top : -10px;\n    left: -10px;\n}\n\n\n.msgapi #helpbadge-zoomToMaxExtent {\n    display: inline;\n    position: absolute;\n    left: 34px;\n    top: 72px;\n    z-index: 100000\n}\n\n.msgapi #helpbadge-scaleBox {\n    display: inline;\n    position: absolute;\n    left: 116px;\n    bottom: 48px;\n    z-index: 100000\n}\n\n.msgapi #helpbadge-seachBar {\n    display: inline;\n    position: absolute;\n    left: 46px;\n    top: 10px;\n    z-index: 100000\n}\n\n\n.msgapi .btn .badge {\n    position: absolute;\n    top: -10px;\n    left: -10px;\n}\n\n.msgapi .themed .btn .badge {\n    top: -35px;\n    left: -50px;\n}\n\n.msgapi .badge {\n    cursor: pointer;\n}\n\n.msgapi #helpbadge-scaleBox {\n    left: 0 !important;\n}\n\n.msgapi #mapstore-navbar #helpbadge-search-help {\n    position: absolute;\n    left: -10px;\n    bottom: -8px;\n    z-index: 1;\n}\n",""])},85488:(e,t,n)=>{(e.exports=n(9252)()).push([e.id,".msgapi #mapstore-scalebox {\n    /*z-index: 10;\n    bottom: 6px;\n    left: -2px;\n    position: absolute;\n    margin: 8px;\n    width: 148px;*/\n}\n\n.msgapi #mapstore-scalebox-container {\n    /*z-index: 10;\n    bottom: -16px;\n    right: 55px;\n    left: auto;\n    position: absolute;\n    margin: 8px;\n    width: 148px;*/\n}\n",""])},56029:(e,t,n)=>{var o=n(33448);e.exports=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var c=e[r],u=t(c);if(null!=u&&(void 0===p?u==u&&!o(u):n(u,p)))var p=u,l=c}return l}},53407:e=>{e.exports=function(e,t){return e<t}},95395:(e,t,n)=>{var o=n(89465),r=n(47816),i=n(67206);e.exports=function(e,t){var n={};return t=i(t,3),r(e,(function(e,r,i){o(n,t(e,r,i),e)})),n}},22762:(e,t,n)=>{var o=n(56029),r=n(67206),i=n(53407);e.exports=function(e,t){return e&&e.length?o(e,r(t,2),i):void 0}},87185:(e,t,n)=>{var o=n(45652);e.exports=function(e,t){return t="function"==typeof t?t:void 0,e&&e.length?o(e,void 0,t):[]}},41165:(e,t,n)=>{var o=n(8439);"string"==typeof o&&(o=[[e.id,o,""]]),n(14246)(o,{}),o.locals&&(e.exports=o.locals)},87231:(e,t,n)=>{var o=n(85488);"string"==typeof o&&(o=[[e.id,o,""]]),n(14246)(o,{}),o.locals&&(e.exports=o.locals)}}]);