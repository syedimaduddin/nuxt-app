(window.webpackJsonp=window.webpackJsonp||[]).push([[32,21],{447:function(y,l,e){"use strict";e.r(l);var m=function(){var n=this,C=n.$createElement,s=n._self._c||C;return s("v-row",[s("v-container",{staticClass:"text-center"},[s("v-progress-circular",{attrs:{size:n.size*10,width:n.size,color:n.color,indeterminate:""}})],1)],1)},j=[],f={props:{size:{type:Number,default:5},color:{type:String,default:"grey"}}},c=f,u=e(98),v=e(128),d=e.n(v),g=e(441),p=e(203),P=e(428),i=Object(u.a)(c,m,j,!1,null,null,null),V=l.default=i.exports;d()(i,{VContainer:g.a,VProgressCircular:p.a,VRow:P.a})},508:function(y,l,e){"use strict";e.r(l);var m=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-container",[r("v-row",[t.loadedProject?r("v-col",{attrs:{cols:"12",xl:"8","offset-xl":"2"}},[r("v-card",{staticClass:"d-flex flex-column"},[r("v-card-title",[t._v(`
          `+t._s(t.loadedProject.name)+`
        `)]),t._v(" "),r("v-card-text",[t._v(t._s(t.teammember))]),t._v(" "),t.loadedProject.projectImg?t._e():r("v-avatar",{staticClass:"align-self-center",attrs:{tile:!1,size:225,color:"grey lighten-4"}},[r("v-img",{attrs:{"aspect-ratio":16/9,src:t.loadedProject.projectImg[0],alt:"Avatar"}})],1),t._v(" "),t.loadedProject.projectImg?r("v-carousel",t._l(t.loadedProject.projectImg,function(o){return r("v-carousel-item",{key:o,attrs:{src:o}})}),1):t._e(),t._v(" "),r("v-card-text",{staticClass:"body-1 black--text"},[t._v(`
          `+t._s(t.loadedProject.description)+`
        `)])],1)],1):r("PageLoader")],1)],1)},j=[],f=e(4),c=e(90),u=e(447);function v(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter(function(L){return Object.getOwnPropertyDescriptor(t,L).enumerable})),r.push.apply(r,o)}return r}function d(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?v(Object(r),!0).forEach(function(o){Object(f.a)(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}var g={components:{PageLoader:u.default},head(){return{title:"Project"+(this.loadedProject?": "+this.loadedProject.name:"")}},computed:{loadedProject(){return this.getProjectById()(this.$route.params.id)},teammember(){for(var t="",a=0;a<this.loadedProject.teamMembers.length;a++)t+=this.loadedProject.teamMembers[a].member+" , ";return t=t.substring(0,t.length-2),t}},created(){this.setProjectRef(this.$route.params.id)},methods:d(d({},Object(c.b)("projects",["setProjectRef"])),Object(c.c)("projects",["getProjectById"]))},p=g,P=e(98),i=e(128),V=e.n(i),n=e(207),C=e(209),s=e(406),O=e(443),x=e(434),I=e(426),R=e(441),z=e(126),b=e(428),h=Object(P.a)(p,m,j,!1,null,null,null),D=l.default=h.exports;V()(h,{VAvatar:n.a,VCard:C.a,VCardText:s.b,VCardTitle:s.c,VCarousel:O.a,VCarouselItem:x.a,VCol:I.a,VContainer:R.a,VImg:z.a,VRow:b.a})}}]);
