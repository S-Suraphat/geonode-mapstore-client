(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5234,7654,4351],{21914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>s,Pn:()=>u,DZ:()=>c,e8:()=>f,E0:()=>l,F9:()=>p,X_:()=>m,pb:()=>d,qb:()=>y,Re:()=>v,ih:()=>E,xy:()=>h,jL:()=>b,oz:()=>O,ph:()=>g,lF:()=>_,gG:()=>N,cb:()=>T,GI:()=>I,B1:()=>q,fv:()=>R,gc:()=>P,zX:()=>w,ZF:()=>F,Zb:()=>A,Fm:()=>C,sV:()=>S,Mn:()=>j,LU:()=>M,XP:()=>G,WU:()=>k,JB:()=>D,g:()=>L,ws:()=>x,HP:()=>U,aN:()=>B,Pg:()=>H,u0:()=>Z,TM:()=>W,PM:()=>z,lK:()=>K,sv:()=>X,MO:()=>V,oO:()=>Q,Mc:()=>J,Zw:()=>$,RA:()=>ee,am:()=>te,ZM:()=>ne,wm:()=>re,Y$:()=>oe});var r=n(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",s="CHANGE_MAPINFO_STATE",u="NEW_MAPINFO_REQUEST",c="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",m="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",y="GET_VECTOR_INFO",v="NO_QUERYABLE_LAYERS",E="CLEAR_WARNING",h="FEATURE_INFO_CLICK",b="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",O="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",g="TOGGLE_MAPINFO_STATE",_="UPDATE_CENTER_TO_MARKER",N="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",I="IDENTIFY:CHANGE_FORMAT",q="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",R="IDENTIFY:EDIT_LAYER_FEATURES",P="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",w="IDENTIFY:SET_MAP_TRIGGER",F="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",A="IDENTIFY:SET_SHOW_IN_MAP_POPUP";function C(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function S(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function j(e,t,n,r){return{type:a,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function M(){return{type:v}}function G(){return{type:E}}function k(e,t){return{type:u,reqId:e,request:t}}function D(e,t,n,r){return{type:y,layer:e,request:t,metadata:n,queryableLayers:r}}function L(){return{type:c}}function x(e){return{type:f,infoFormat:e}}function U(){return{type:l}}function B(){return{type:p}}function Y(e){return{type:m,reverseGeocodeData:e.data}}function H(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(Y(e))})).catch((function(e){t(Y(e))}))}}function Z(){return{type:d}}function W(){return{type:g}}function z(e){return{type:_,status:e}}function K(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:h,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function X(e){return{type:b,point:e}}function V(e){return{type:O,enabled:e}}function Q(e){return{type:N,index:e}}var J=function(){return{type:T}},$=function(e){return{type:I,format:e}},ee=function(e){return{type:q,showCoordinateEditor:e}},te=function(e){return{type:R,layer:e}},ne=function(e){return{type:P,query:e}},re=function(e){return{type:w,trigger:e}},oe=function(e){return{type:A,value:e}}},47310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(75875),o=n.n(r),i=n(72500),a=n.n(i),s=n(27418),u=n.n(s),c={format:"json",bounded:0,polygon_geojson:1,priority:5},f={geocode:function(e,t){var n=u()({q:e},c,t||{}),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=u()({lat:e.lat,lon:e.lng},t||{},c),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}};const l=2497!=n.j?f:null},79870:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(45697),o=n.n(r),i=n(24852),a=n.n(i),s=n(30294),u=n(38560);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(){var e;f(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(d(e=i.call.apply(i,[this].concat(n))),"renderLeftButton",(function(){var t=0===e.props.index;return e.props.useButtons?a().createElement(u.Z,{ref:"left",disabled:t,className:e.props.btnClassName||"square-button-md no-border",onClick:function(){e.props.onPrevious()}},a().createElement(s.Glyphicon,{glyph:"back"})):a().createElement("a",{ref:"left",disabled:t,className:e.props.btnClassName||"square-button-md",onClick:function(){e.props.onPrevious()}},a().createElement(s.Glyphicon,{glyph:"back"}))})),v(d(e),"renderRightButton",(function(){var t=e.props.index===e.props.size-1;return e.props.useButtons?a().createElement(u.Z,{ref:"right",disabled:t,className:e.props.btnClassName||"square-button-md no-border",onClick:function(){e.props.onNext()}},a().createElement(s.Glyphicon,{glyph:"next"})):a().createElement("a",{ref:"right",disabled:t,className:e.props.btnClassName||"square-button-md",onClick:function(){e.props.onNext()}},a().createElement(s.Glyphicon,{glyph:"next"}))})),e}return t=c,(n=[{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return a().createElement("div",{className:"ms-identify-swipe-header"},this.props.size>1&&a().createElement("div",{className:"ms-identify-swipe-header-arrow"},this.renderLeftButton()),a().createElement("div",{className:"ms-identify-swipe-header-title"},this.props.title),this.props.size>1&&a().createElement("div",{className:"ms-identify-swipe-header-arrow"},this.renderRightButton()))}}])&&l(t.prototype,n),c}(a().Component);v(E,"propTypes",{title:o().string,index:o().number,size:o().number,container:o().oneOfType([o().object,o().func]),useButtons:o().bool,onPrevious:o().func,onNext:o().func,btnClassName:o().string}),v(E,"defaultProps",{useButtons:!0});const h=E},8797:(e,t,n)=>{"use strict";n.d(t,{rp:()=>u,Ov:()=>f,wd:()=>l,L0:()=>p}),n(1469);var r=n(91175),o=n.n(r),i=n(7654),a=n.n(i);function s(e){var t=Math.floor(e),n=60*(e-t),r=Math.floor(n),o=60*(n-r);return t+"° "+r+"' "+Math.floor(o)+"'' "}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.measureTrueBearing,r=void 0!==n&&n,o=t.fractionDigits,i=void 0===o?0:o,a="";if(r){var u="";e>=0&&e<10?u="00":e>10&&e<100&&(u="0");var c=i>0?e.toFixed(i):Math.floor(e);a=u+c+"°"}else e>=0&&e<90?a="N "+s(e)+"E":e>90&&e<=180?a="S "+s(180-e)+"E":e>180&&e<270?a="S "+s(e-180)+"W":e>=270&&e<=360&&(a="N "+s(360-e)+"W");return a}var c={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return c[t]&&c[t][n]?e*c[t][n]:e}var l=function(e){return!a()(parseFloat(e[0]))&&!a()(parseFloat(e[1]))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.coordinates,n=e.type,r=t;if("LineString"===n){if((r=t.filter(l)).length<2)return[]}else if("Polygon"===n){if((r=o()(t).filter(l)).length<3)return[[]];r=[r.concat([o()(r)])]}return r}},45992:(e,t,n)=>{"use strict";n.d(t,{h:()=>f,Z:()=>l});var r=n(35937),o=n.n(r),i=n(36882),a=n(63202);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e,t){var n,r,s,c,f=i.Z;if("custom"===e)n=t;else if(s=(c=e.split("."))[0],r=c[1],!(n=f[s]))throw new Error("No such provider ("+s+")");var l={url:n.url,options:n.options||{}};if(r&&"variants"in n){if(!(r in n.variants))throw new Error("No such variant of "+(s||n.url)+" ("+r+")");var p,m=n.variants[r];p="string"==typeof m?{variant:m}:m.options,l={url:m.url||l.url,options:u(u({},l.options||{}),p)}}else"function"==typeof l.url&&(l.url=l.url(c.splice(1,c.length-1).join(".")));var d="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&d&&(l.url="http:"+l.url),l.options.retina&&(t.detectRetina&&a.ZP.getBrowserProperties().retina?t.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function e(t){return-1===t.indexOf("{attribution.")?t:t.replace(/\{attribution.(\w*)\}/,(function(t,n){return e(f[n].options.attribution)}))}(l.options.attribution));var y=u(u({},l.options),o()(t,(function(e){return void 0!==e})));return[l.url,y]};const l={getLayerConfig:f}},33358:(e,t,n)=>{"use strict";n.d(t,{z:()=>o});var r=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],o=function(e){return-1!==r.indexOf(e)}},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},7654:(e,t,n)=>{var r=n(81763);e.exports=function(e){return r(e)&&e!=+e}},93379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],u=t.base?s[0]+t.base:s[0],c=n[u]||0,f="".concat(u," ").concat(c);n[u]=c+1;var l=a(f),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:y(p,t),references:1}),r.push(f)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,f=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function l(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,d=0;function y(e,t){var n,r,o;if(t.singleton){var i=d++;n=m||(m=u(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=s(e,t),c=0;c<n.length;c++){var f=a(n[c]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=u}}}}}]);