(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8,9],{516:function(e,t){},517:function(e,t){},519:function(e,t,n){"use strict";n.r(t),t.default=[{text:"File",value:"file"},{text:"Name",value:"name"},{text:"File Size",value:"size",class:"downloads-tab--size"},{text:"URL",value:"url"}]},529:function(e,t,n){"use strict";n(516)},530:function(e,t,n){"use strict";n(517)},532:function(e,t,n){"use strict";n.r(t);n(342);var o=n(519),r={props:{download:{type:Object,required:!0}},data:function(){return{headers:o.default}},methods:{fileSizeSI:function(a,b,e,t,n){return a=parseInt(a),+(b=Math,e=b.log,1e3,n=e(a)/e(1e3)|0,a/b.pow(1e3,n)).toFixed(2)+" "+(n?"kMGTPEZY"[--n]+"B":"B")}}},l=(n(529),n(530),n(132)),c=n(175),d=n.n(c),f=n(168),w=n(270),v=n(500),m=n(208),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-data-table",{staticClass:"downloads-table elevation-1",attrs:{headers:e.headers,items:e.download.items,"item-key":"name"},scopedSlots:e._u([{key:"item.size",fn:function(t){var o=t.item;return[o.size?n("v-chip",{attrs:{color:"success caption"}},[e._v("\n      "+e._s(e.fileSizeSI(o.size))+"\n    ")]):e._e()]}},{key:"item.url",fn:function(t){var o=t.item;return[o.url?n("a",{staticClass:"download-link",attrs:{href:o.url,target:"_blank",rel:"noopener"}},[n("v-btn",{attrs:{color:"pink",dark:"",small:"",fab:""}},[n("v-icon",{attrs:{size:"18"}},[e._v("mdi-cloud-download")])],1)],1):e._e()]}}],null,!0)})}),[],!1,null,"04f1a1be",null);t.default=component.exports;d()(component,{VBtn:f.a,VChip:w.a,VDataTable:v.a,VIcon:m.a})},560:function(e,t,n){"use strict";n.r(t);n(10),n(8),n(7),n(6),n(12),n(9),n(13);var o=n(3),r=n(123);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{DownloadTab:n(532).default},data:function(){return{active:null}},head:function(){return{title:"Downloads"}},computed:c(c({},Object(r.c)("downloads",["downloadTypes"])),Object(r.e)("downloads",["downloads"])),created:function(){this.setDownloadsRef()},methods:Object(r.b)("downloads",["setDownloadsRef"])},f=n(132),w=n(175),v=n.n(w),m=n(266),h=n(468),y=n(488),O=n(503),j=n(267),_=n(490),k=n(493),x=n(494),V=n(501),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"10",lg:"8",xl:"6"}},[n("v-card",{attrs:{color:"cyan"}},[n("v-card-title",{staticClass:"text-center headline white--text"},[e._v("\n          Downloads\n        ")]),e._v(" "),n("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:!e.downloads.length,expression:"!downloads.length"}],attrs:{indeterminate:"",color:"cyan","background-color":"cyan lighten-3"}}),e._v(" "),n("v-tabs",{attrs:{"background-color":"cyan",dark:"","slider-color":"yellow","show-arrows":""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e._l(e.downloadTypes,(function(t){return n("v-tab",{key:t,staticClass:"white--text",attrs:{href:"#"+t,ripple:""}},[e._v("\n            "+e._s(t)+"\n          ")])})),e._v(" "),e._l(e.downloads,(function(e){return n("v-tab-item",{key:e.name,attrs:{value:e.name}},[n("DownloadTab",{attrs:{download:e}})],1)}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{DownloadTab:n(532).default}),v()(component,{VCard:m.a,VCardTitle:h.c,VCol:y.a,VContainer:O.a,VProgressLinear:j.a,VRow:_.a,VTab:k.a,VTabItem:x.a,VTabs:V.a})}}]);