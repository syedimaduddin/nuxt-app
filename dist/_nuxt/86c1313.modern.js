(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8,9],{454:function(u,n){},455:function(u,n){},457:function(u,n,e){"use strict";e.r(n),n.default=[{text:"File",value:"file"},{text:"Name",value:"name"},{text:"File Size",value:"size",class:"downloads-tab--size"},{text:"URL",value:"url"}]},467:function(u,n,e){"use strict";var i=e(454),v=e.n(i)},468:function(u,n,e){"use strict";var i=e(455),v=e.n(i)},470:function(u,n,e){"use strict";e.r(n);var i=function(){var t=this,c=t.$createElement,a=t._self._c||c;return a("v-data-table",{staticClass:"downloads-table elevation-1",attrs:{headers:t.headers,items:t.download.items,"item-key":"name"},scopedSlots:t._u([{key:"item.size",fn:function(l){var d=l.item;return[d.size?a("v-chip",{attrs:{color:"success caption"}},[t._v(`
      `+t._s(t.fileSizeSI(d.size))+`
    `)]):t._e()]}},{key:"item.url",fn:function(l){var d=l.item;return[d.url?a("a",{staticClass:"download-link",attrs:{href:d.url,target:"_blank",rel:"noopener"}},[a("v-btn",{attrs:{color:"pink",dark:"",small:"",fab:""}},[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-cloud-download")])],1)],1):t._e()]}}],null,!0)})},v=[],P=e(38),f=e(277),y=e(457),m={props:{download:{type:Object,required:!0}},data(){return{headers:y.default}},methods:{fileSizeSI(t,c,a,l,d){return t=parseInt(t),+(c=Math,a=c.log,l=1e3,d=a(t)/a(l)|0,t/c.pow(l,d)).toFixed(2)+" "+(d?"kMGTPEZY"[--d]+"B":"B")}}},p=m,w=e(467),C=e(468),h=e(98),x=e(128),j=e.n(x),b=e(122),g=e(213),T=e(438),V=e(151),O=Object(h.a)(p,i,v,!1,null,"04f1a1be",null),D=n.default=O.exports;j()(O,{VBtn:b.a,VChip:g.a,VDataTable:T.a,VIcon:V.a})},498:function(u,n,e){"use strict";e.r(n);var i=function(){var _=this,r=_.$createElement,o=_._self._c||r;return o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",md:"10",lg:"8",xl:"6"}},[o("v-card",{attrs:{color:"cyan"}},[o("v-card-title",{staticClass:"text-center headline white--text"},[_._v(`
          Downloads
        `)]),_._v(" "),o("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:!_.downloads.length,expression:"!downloads.length"}],attrs:{indeterminate:"",color:"cyan","background-color":"cyan lighten-3"}}),_._v(" "),o("v-tabs",{attrs:{"background-color":"cyan",dark:"","slider-color":"yellow","show-arrows":""},model:{value:_.active,callback:function(s){_.active=s},expression:"active"}},[_._l(_.downloadTypes,function(s){return o("v-tab",{key:s,staticClass:"white--text",attrs:{href:"#"+s,ripple:""}},[_._v(`
            `+_._s(s)+`
          `)])}),_._v(" "),_._l(_.downloads,function(s){return o("v-tab-item",{key:s.name,attrs:{value:s.name}},[o("DownloadTab",{attrs:{download:s}})],1)})],2)],1)],1)],1)],1)},v=[],P=e(4),f=e(90),y=e(470);function m(_,r){var o=Object.keys(_);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(_);r&&(s=s.filter(function(E){return Object.getOwnPropertyDescriptor(_,E).enumerable})),o.push.apply(o,s)}return o}function p(_){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?m(Object(o),!0).forEach(function(s){Object(P.a)(_,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach(function(s){Object.defineProperty(_,s,Object.getOwnPropertyDescriptor(o,s))})}return _}var w={components:{DownloadTab:y.default},data(){return{active:null}},head(){return{title:"Downloads"}},computed:p(p({},Object(f.c)("downloads",["downloadTypes"])),Object(f.e)("downloads",["downloads"])),created(){this.setDownloadsRef()},methods:Object(f.b)("downloads",["setDownloadsRef"])},C=w,h=e(98),x=e(128),j=e.n(x),b=e(209),g=e(406),T=e(426),V=e(441),O=e(210),D=e(428),t=e(431),c=e(432),a=e(439),l=Object(h.a)(C,i,v,!1,null,null,null),d=n.default=l.exports;j()(l,{DownloadTab:e(470).default}),j()(l,{VCard:b.a,VCardTitle:g.c,VCol:T.a,VContainer:V.a,VProgressLinear:O.a,VRow:D.a,VTab:t.a,VTabItem:c.a,VTabs:a.a})}}]);