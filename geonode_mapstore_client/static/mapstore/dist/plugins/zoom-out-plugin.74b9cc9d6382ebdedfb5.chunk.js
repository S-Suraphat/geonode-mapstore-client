(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3476],{1550:(t,e,o)=>{"use strict";o.d(e,{pP:()=>n,TR:()=>i,N7:()=>c,mq:()=>s,uv:()=>u,Qy:()=>p,IL:()=>l,Li:()=>a,OW:()=>f,ZO:()=>m,Um:()=>y,TF:()=>b,Ls:()=>O,Ec:()=>h,Eu:()=>E,JJ:()=>d,nZ:()=>g,YD:()=>v,GI:()=>_,Jb:()=>P,Uh:()=>S,LP:()=>T,xy:()=>Z,o6:()=>N,FP:()=>j,Mo:()=>w,sO:()=>A,Px:()=>R,hd:()=>x,BV:()=>I,SO:()=>C,H0:()=>M,$X:()=>z,ou:()=>L,NE:()=>G});var r=o(97395),n="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",c="CHANGE_MOUSE_POINTER",s="CHANGE_ZOOM_LVL",u="PAN_TO",p="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",a="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",m="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",b="CREATION_ERROR_LAYER",O="UPDATE_VERSION",h="INIT_MAP",E="RESIZE_MAP",d="CHANGE_MAP_LIMITS",g="SET_MAP_RESOLUTIONS",v="REGISTER_EVENT_LISTENER",_="UNREGISTER_EVENT_LISTENER",P="MOUSE_MOVE",S="MOUSE_OUT";function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,r.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function Z(t,e,o){return{type:l,pos:t,zoom:e,crs:o}}function N(t,e,o,r,i,c,s,u){return{type:n,center:t,zoom:e,bbox:o,size:r,mapStateSource:i,projection:c,viewerOptions:s,resolution:u}}function j(t,e){return{type:i,point:t,layer:e}}function w(t){return{type:c,pointer:t}}function A(t,e){return{type:s,zoom:t,mapStateSource:e}}function R(t,e,o){return{type:p,extent:t,crs:e,maxZoom:o}}function x(t,e){return{type:m,style:t,mapStateSource:e}}function I(t){var e=t.restrictedExtent,o=t.crs,r=t.minZoom;return{type:d,restrictedExtent:e,crs:o,minZoom:r}}function C(t){return{type:g,resolutions:t}}var M=function(t,e){return{type:v,eventName:t,toolName:e}},z=function(t,e){return{type:_,eventName:t,toolName:e}},L=function(t){return{type:P,position:t}},G=function(){return{type:S}}},9192:(t,e,o)=>{"use strict";o.d(e,{Z:()=>d});var r=o(45697),n=o.n(r),i=o(24852),c=o.n(i),s=o(38560),u=o(30294),p=o(50966);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function y(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function h(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(l,t);var e,o,r,n,i=(r=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(n){var o=O(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return y(this,t)});function l(){var t;a(this,l);for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return h(b(t=i.call.apply(i,[this].concat(o))),"addTooltip",(function(e){if(!t.props.tooltip)return e;var o=c().createElement(u.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return c().createElement(p.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:o},e)})),t}return e=l,(o=[{key:"render",value:function(){var t=this;return this.addTooltip(c().createElement(s.Z,{id:this.props.id,style:this.props.style,onClick:function(){return t.props.onZoom(t.props.currentZoom+t.props.step)},className:this.props.className,disabled:this.props.currentZoom+this.props.step>this.props.maxZoom||this.props.currentZoom+this.props.step<this.props.minZoom,bsStyle:this.props.bsStyle},this.props.glyphicon?c().createElement(u.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&f(e.prototype,o),l}(c().Component);h(E,"propTypes",{id:n().string,style:n().object,glyphicon:n().string,text:n().string,btnSize:n().oneOf(["large","small","xsmall"]),className:n().string,help:n().oneOfType([n().string,n().element]),step:n().number,currentZoom:n().number,minZoom:n().number,maxZoom:n().number,onZoom:n().func,tooltip:n().element,tooltipPlace:n().string,bsStyle:n().string}),h(E,"defaultProps",{id:"mapstore-zoom",className:"square-button",glyphicon:"plus",btnSize:"xsmall",tooltipPlace:"left",step:1,currentZoom:3,minZoom:0,maxZoom:28,onZoom:function(){},bsStyle:"default",style:{}});const d=E},50966:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var r=o(61365),n=o(30294);const i=(0,r.Z)(n.OverlayTrigger)},61365:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var r=o(24852),n=o.n(r),i=o(37275);function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},c.apply(this,arguments)}const s=function(t){return function(e){return n().createElement(t,c({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},13573:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>E}),o(7594);var r=o(27418),n=o.n(r),i=o(24852),c=o.n(i),s=o(71703),u=o(22222),p=o(1550),l=o(9192),a=o(5346),f=o(827);function m(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?m(Object(o),!0).forEach((function(e){b(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function b(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var O=(0,u.P1)([f.Od,f._e],(function(t,e){return{currentZoom:t&&t.zoom,id:"zoomout-btn",step:-1,glyphicon:"minus",minZoom:e}})),h=(0,s.connect)(O,{onZoom:p.sO},(function(t,e,o){return y(y(y({},t),e),o)}))(l.Z);const E={ZoomOutPlugin:n()(h,{disablePluginIf:"{state('mapType') === 'cesium'}",Toolbar:{name:"ZoomOut",position:4,tooltip:"zoombuttons.zoomOutTooltip",help:c().createElement(a.Z,{msgId:"helptexts.zoomOut"}),tool:!0,priority:1}}),reducers:{}}},80374:(t,e,o)=>{(t.exports=o(9252)()).push([t.id,".msgapi #zoomin-btn, .msgapi #zoomout-btn {\n    z-index: 1;\n    position: relative;\n}\n",""])},7594:(t,e,o)=>{var r=o(80374);"string"==typeof r&&(r=[[t.id,r,""]]),o(14246)(r,{}),r.locals&&(t.exports=r.locals)}}]);