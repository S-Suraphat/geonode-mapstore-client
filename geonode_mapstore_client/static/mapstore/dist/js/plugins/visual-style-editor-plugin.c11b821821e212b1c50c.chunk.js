(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[59010],{362520:(e,t,n)=>{"use strict";n.d(t,{d:()=>r,F:()=>o});var r="MAP_LAYOUT:UPDATE_MAP_LAYOUT";function o(e){return{type:r,layout:e}}},55105:(e,t,n)=>{"use strict";n.d(t,{Ss:()=>s,Nr:()=>d,ic:()=>y,Jz:()=>v,VM:()=>m,CF:()=>p});var r=n(91175),o=n.n(r),l=n(800827),i=n(552259);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e.maplayout&&e.maplayout.layout||{}},d=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){return u(u({},e),{},c({},t,n[t]))}),{})||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=s(e),r=!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})));return r},v=function(e){return f(e,[{key:"right",value:658}])},m=function(e){return f(e,[{key:"bottom",value:30,type:"not"}])},p=function(e){var t=(0,l.Od)(e),n=d(e);return n&&t&&t.size&&{left:(0,i.parseLayoutValue)(n.left,t.size.width),bottom:(0,i.parseLayoutValue)(n.bottom,t.size.height),right:(0,i.parseLayoutValue)(n.right,t.size.width),top:(0,i.parseLayoutValue)(n.top,t.size.height)}}},632247:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(667294);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const l=function(e,t){var n,l,i=function(){if("undefined"==typeof window)return t;try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.log("Error to get item key “".concat(e,"”:"),n),t}},a=(n=(0,r.useState)(i),l=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(n,l)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(n,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],c=a[1];return(0,r.useEffect)((function(){c(i())}),[]),(0,r.useEffect)((function(){var e=function(){c(i())};return window.addEventListener("localStorage",e),function(){window.removeEventListener("localStorage",e)}}),[]),[u,function(t){try{var n=t instanceof Function?t(u):t;c(n),window.localStorage.setItem(e,JSON.stringify(n)),window.dispatchEvent(new Event("localStorage"))}catch(t){console.log("Error “".concat(e,"”:"),t)}}]}},133096:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>de});var r=n(667294),o=n.n(r),l=n(322843),i=n(533664),a=n(22222),u=n(757588),c=n(192222),s=n(532244),d=n(394943),y=n(989255),f=n(423570),v=n.n(f),m=n(580416),p=n(396909),g=n(782904),b=n(460604),S=n(99009),h=n(409082),O=n(893222),E="GEONODE:REQUEST_DATASET_AVAILABLE_STYLES",w=n(717621),j=n.n(w),P=n(535721),C=n(567587),k=n(362520),A=n(55105),N=n(463202);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){var t=e.type,n=e.title,r=j()("hsl(".concat(Math.floor(270*Math.random()),", 90%, 70%)")).toHexString();switch(t){case"raster":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\traster-channels: auto;\n\traster-opacity: 1;\n}\n";case"point":default:return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tmark: symbol('square');\n\t:mark {\n\t\tfill: "+r+";\n\t\tsize: 4;\n\t}\n}\n";case"linestring":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tstroke: "+r+";\n}\n";case"polygon":return"@mode 'Flat'; @styleTitle '"+n+"'; \n* {\n\tfill: "+r+";\n}\n"}}const D={gnRequestDatasetAvailableStyles:function(e,t){return e.ofType(E).switchMap((function(e){var n,r=t.getState(),o=(null==e||null===(n=e.options)||void 0===n?void 0:n.styleService)||(0,O.Z0)(r);return y.Observable.concat(y.Observable.of((0,g.Xg)("visualStyleEditor","enabled",!0)),y.Observable.defer((function(){return function(e){var t,n,r,o,l,i,a=e.layer,u=e.styleService,c=null==a||null===(t=a.extendedParams)||void 0===t||null===(n=t.mapLayer)||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.subtype,s=(null==a?void 0:a.availableStyles)||[];return 0===s.length?function(e,t){var n,r="visual";return e?(0,C.z)({baseUrl:null==t?void 0:t.baseUrl,styleName:(0,P.UH)(e)}).then((function(e){var t=e||{},n=t.metadata,r=void 0===n?{}:n,o=t.code,l=t.format,i=t.languageVersion;return{msEditorType:null==r?void 0:r.msEditorType,msStyleJSON:null==r?void 0:r.msStyleJSON,code:o,format:l,languageVersion:i}})).catch((function(){return{msEditorType:r,msStyleJSON:null,code:n}})):new Promise((function(e){return e({msStyleJSON:null,msEditorType:r,code:n})}))}(null==a||null===(o=a.extendedParams)||void 0===o||null===(l=o.mapLayer)||void 0===l||null===(i=l.dataset)||void 0===i?void 0:i.default_style,u).then((function(e){var t,n,r,o,l=e||{},i=l.msEditorType,s=l.msStyleJSON,d=l.code,y=l.format,f=l.languageVersion,m=a.name.split(":"),p=1===m.length?m[0]:m[m.length-1],g=(o=p,"geonode:".concat(v()(),"_ms_").concat(o)),b={title:p,description:"",msStyleJSON:s,msEditorType:i,gnDatasetPk:null==a||null===(t=a.extendedParams)||void 0===t||null===(n=t.mapLayer)||void 0===n||null===(r=n.dataset)||void 0===r?void 0:r.pk};return h.ZP.createStyle(L({baseUrl:null==u?void 0:u.baseUrl,code:d||Z({type:c,title:p}),format:d&&y?y:"css",styleName:g,metadata:b,options:{params:{raw:!0}}},d&&y&&{languageVersion:f})).then((function(){return[[{name:g,title:p,metadata:b,format:y}],!0]}))})):new Promise((function(e){return e([s])}))}({layer:e.layer,styleService:o})})).switchMap((function(t){var n,r,l,i,a=(l=t,i=1,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(l,i)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(l,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],u=(null==e||null===(n=e.options)||void 0===n?void 0:n.style)||(null==a||null===(r=a[0])||void 0===r?void 0:r.name);return y.Observable.concat(y.Observable.defer((function(){return h.ZP.getStylesInfo({baseUrl:null==o?void 0:o.baseUrl,styles:a})})).switchMap((function(t){return y.Observable.of((0,m.tV)(e.layer.id,"layer",{availableStyles:t}),(0,m.Xy)({style:u},!0),(0,b.W)(e.layer.id,S.s1,"override",{}),(0,p.Nf)("edit"))})))})))}))},gnUpdateStyleInfoOnSave:function(e,t){return e.ofType(p.ch).switchMap((function(){var e=t.getState(),n=(0,O.Vf)(e);return y.Observable.of((0,m.tV)(n.id,"layers",{style:n.style}))}))},gnUpdateVisualStyleEditorMapLayout:function(e,t){return e.ofType(k.d,g.At).filter((function(){var e,n,r;return null===(e=t.getState())||void 0===e||null===(n=e.controls)||void 0===n||null===(r=n.visualStyleEditor)||void 0===r?void 0:r.enabled})).filter((function(e){return"VisualStyleEditor"!==e.source})).map((function(e){var n=e.layout,r=(0,N.u8)("mapLayout")||{left:{sm:300,md:500,lg:600},right:{md:658},bottom:{sm:30}},o=(0,k.F)(L(L(L({},(0,A.Ss)(t.getState())),n),{},{left:r.left.md,boundingMapRect:L(L({},(null==n?void 0:n.boundingMapRect)||{}),{},{left:r.left.md})}));return L(L({},o),{},{source:"VisualStyleEditor"})}))}};var M=n(805346),V=n(693473),x=n(399534),z=n(694745),_=n(903828),F=n(815135),R=n(675110),J=n(632247),B=n(283958),G=n(290702),X=n(166287),Y=n(586300);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=(0,F.Z)(V.Z);function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ie=(0,F.Z)(V.Z),ae=(0,i.connect)((0,a.P1)([O.QW,O.gB,O.aN,O.p,R.l2],(function(e,t,n,r,o){var l;return{isStyleChanged:void 0!==e&&void 0!==t&&e!==t,loading:n,error:!(null==r||null===(l=r.edit)||void 0===l||!l.status),layerLoading:o&&o.some((function(e){return e.loading}))}})),{onClick:p.Lc})((function(e){var t=e.variant,n=e.onClick,r=e.size,l=e.isStyleChanged,i=e.error,a=e.loading,u=e.layerLoading,c=e.msgId,s=void 0===c?"gnviewer.applyStyle":c,d=!!(a||u||i);return l?o().createElement(ie,{variant:t||"primary",className:l?"gn-pending-changes-icon":"",size:r,disabled:d,onClick:d?function(){}:function(){return n()}},o().createElement(M.Z,{msgId:s})):null})),ue=(0,i.connect)((0,a.P1)([O.Vf,O.lC,O.Ed,O.gB,O.i7,function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.visualStyleEditor)||void 0===n?void 0:n.tmpCode}],(function(e,t,n,r,o,l){var i;return{geometryType:t,format:n,selectedStyle:null==e||null===(i=e.availableStyles)||void 0===i?void 0:i.find((function(e){return e.name===o})),code:r,tmpCode:l}})),{onSelect:p.p2,onUpdateMetadata:p.bB,onStoreTmpCode:g.Xg.bind(null,"visualStyleEditor","tmpCode")})((function(e){var t=e.code,n=e.format,l=e.geometryType,i=e.onSelect,a=e.selectedStyle,u=e.onUpdateMetadata,c=e.tmpCode,s=e.onStoreTmpCode,d=(0,r.useRef)(),y=H((0,r.useState)([]),2),f=y[0],v=y[1],m=H((0,r.useState)(),2),p=m[0],g=m[1],b=H((0,r.useState)(!1),2),S=b[0],h=b[1];(0,r.useEffect)((function(){return d.current=!0,(0,Y.YD)().then((function(e){d.current&&v(e)})),function(){d.current=!1}}),[]);var O=(0,r.useRef)();O.current=function(e){e?s(t):(g(void 0),c&&i(c))},(0,r.useEffect)((function(){return function(){s("")}}),[]);var E=f.filter((function(e){return e.types.includes(l)}));return(null==E?void 0:E.length)>0?o().createElement(G.Z,{key:S,placement:"right",open:S,onOpen:function(e){h(e),O.current(e)},content:o().createElement("div",{className:"gn-visual-style-editor-templates"},o().createElement("ul",null,E.map((function(e,t){var r;return o().createElement("li",{key:t,className:"gn-visual-style-editor-template".concat(p===t?" selected":""),onClick:function(){return function(e,t){var r,o=e.code;g(t);var l=(null==a||null===(r=a.metadata)||void 0===r?void 0:r.title)||(null==a?void 0:a.label)||(null==a?void 0:a.title)||(null==a?void 0:a.name)||"";(0,X.getStyleParser)(n).then((function(e){e.writeStyle(q(q({},o),{},{name:l})).then((function(e){d.current&&i(e)}))}))}(e,t)}},o().createElement("div",{className:"gn-visual-style-editor-template-preview"},null!=e&&null!==(r=e.preview)&&void 0!==r&&r.config?o().createElement(B.Z,e.preview.config):null==e?void 0:e.preview),o().createElement("div",{className:"gn-visual-style-editor-template-title"},e.title))}))),o().createElement("div",{className:"gn-visual-style-editor-templates-footer"},o().createElement(K,{size:"xs",disabled:void 0===p,variant:"primary",onClick:function(){s(t),u({styleJSON:null,editorType:"visual"}),h(!1)}},o().createElement(M.Z,{msgId:"gnviewer.copy"}))))},o().createElement(K,{size:"xs"},o().createElement(M.Z,{msgId:"gnviewer.copyFrom"}))):null})),ce=(0,i.connect)((0,a.P1)([O.Vf,O.gc,O.Z0,O.QW,function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.visualStyleEditor)||void 0===n?void 0:n.enabled},function(e){return(0,A.ic)(e,{height:!0})},R.Iz,O.gB],(function(e,t,n,r,o,l,i,a){return{layer:e,temporaryStyleId:t,styleService:n,initialCode:r,enabled:o,style:l,originalStyle:null==i?void 0:i.style,isStyleChanged:void 0!==r&&void 0!==a&&r!==a}})),{onUpdateStatus:p.Nf,onUpdateParams:m.Xy,onInit:p.E0,onReset:p.Wv.bind(null,void 0,!1),onSave:p.Lc,onClose:g.Xg.bind(null,"visualStyleEditor","enabled",!1),onUpdateNode:m.tV},(function(e,t,n){var r,o,l,i=(null===(r=n.styleService)||void 0===r?void 0:r.baseUrl)===(null===(o=e.styleService)||void 0===o?void 0:o.baseUrl)&&(null===(l=e.styleService)||void 0===l?void 0:l.isStatic),a=n.styleService&&!i?ne(ne({},n.styleService),{},{isStatic:!0}):ne({},e.styleService);return ne(ne(ne(ne({},n),e),t),{},{styleService:a})}))((function(e){var t=e.layer,n=e.editorConfig,l=e.styleService,i=e.onInit,a=e.onReset,s=e.temporaryStyleId,d=e.showLayerProperties,y=e.initialCode,f=e.enabled,v=e.onClose,m=e.style,p=e.isStyleChanged,g=oe((0,r.useState)(!1),2),b=g[0],S=g[1],O=oe((0,J.Z)("style-notifcation",!1),2),E=O[0],w=O[1],j=oe((0,r.useState)(!1),2),P=j[0],C=j[1],k=(0,r.useRef)();function A(e){e?(a(),v()):S(!0)}return k.current=function(){s&&h.ZP.deleteStyle({baseUrl:l.baseUrl,styleName:s})},(0,r.useEffect)((function(){function e(){k.current()}return i(l),window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e),a()}}),[]),f&&t.id?o().createElement("div",{className:"gn-visual-style-editor",style:m},d&&o().createElement("div",{className:"gn-visual-style-editor-layer-info"},o().createElement("div",{className:"gn-visual-style-editor-layer-title"},t.title),o().createElement(ie,{onClick:A.bind(null,!p),className:"square-button"},o().createElement(u.Glyphicon,{glyph:"1-close"}))),!P&&!E&&o().createElement("div",{className:"gn-visual-style-editor-alert alert-info"},o().createElement("div",{className:"gn-visual-style-editor-alert-message"},o().createElement(M.Z,{msgId:"gnviewer.stylesFirstClone"}),o().createElement(ie,{size:"xs",variant:"transparent",onClick:function(){w(!0)}},o().createElement("p",null,o().createElement(M.Z,{msgId:"gnviewer.dismissMessage"})))),o().createElement(ie,{size:"xs",variant:"transparent",onClick:function(){C(!0)}},o().createElement(u.Glyphicon,{glyph:"remove"}))),o().createElement("div",{className:"gn-visual-style-editor-body"},o().createElement("div",null,o().createElement(c.m2,{key:y,config:n,header:o().createElement(o().Fragment,null,o().createElement(ue,null),o().createElement(ae,{variant:"primary",size:"xs"}))}))),o().createElement(x.Z,null,o().createElement(z.Z,{title:o().createElement(M.Z,{msgId:"gnviewer.styleEditorCloseTitle"}),fitContent:!0,clickOutEnabled:!1,show:b,onClose:function(){S(!1)},buttons:[{text:o().createElement(M.Z,{msgId:"gnviewer.styleEditorCloseCancel"}),onClick:function(){S(!1)}},{text:o().createElement(M.Z,{msgId:"gnviewer.styleEditorCloseConfirm"}),bsStyle:"primary",onClick:function(){S(!1),A(!0)}}]},o().createElement("div",{style:{padding:"1rem"}},o().createElement(M.Z,{msgId:"gnviewer.styleEditorCloseMessage"}))))):null})),se=(0,i.connect)((0,a.P1)([O.Vf,_.HG,_.V$],(function(e,t,n){return{layer:e,enabled:!(null==t||!t.includes("change_resourcebase")),isNew:n}})),{onClick:function(e,t){return{type:E,layer:e,options:t}}})((function(e){var t,n=e.layer,r=e.status,l=e.onClick,i=void 0===l?function(){}:l,a=e.enabled,c=e.isNew,s=e.btnProps,d=void 0===s?{}:s,y=e.hide,f=e.selectedStyle;return y||"LAYER"!==r||null==n||null===(t=n.extendedParams)||void 0===t||!t.mapLayer||!a&&!c?null:o().createElement(ie,ee({variant:"primary",className:"square-button-md"},d,{onClick:function(e){e.stopPropagation(),e.preventDefault(),i(n,{style:f})},onMouseDown:function(e){e.stopPropagation(),e.preventDefault()}}),o().createElement(u.Glyphicon,{glyph:"dropper"}))}));const de=(0,l.rx)("VisualStyleEditor",{component:ce,containers:{TOC:{target:"toolbar",Component:se},LayerSettings:{target:"style-button",Component:se}},reducers:{styleeditor:s.Z},epics:ne(ne({},d.ZP),D)})}}]);