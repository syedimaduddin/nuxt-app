(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{536:function(t,e){},549:function(t,e,r){"use strict";r(536)},564:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(7),r(6),r(12),r(9),r(13);var o=r(3),n=(r(29),r(123));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={computed:l(l({},Object(n.e)(["user"])),{},{profileCardMargin:function(){var t=this.$vuetify.breakpoint.name;return"sm"===t||"xs"===t?"my-2":"mx-2"}}),methods:l(l({},Object(n.b)(["logout"])),{},{logoutAndRedirect:function(){this.logout(),this.$router.push("/")}})},m=(r(549),r(132)),d=r(175),f=r.n(d),_=r(266),O=r(488),j=r(503),y=r(268),h=r(208),w=r(261),V=r(169),P=r(262),C=r(263),L=r(94),x=r(490),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"4",xl:"3"}},[t.user?r("v-card",[r("v-list",[r("v-list-item",[r("v-list-item-avatar",[r("img",{attrs:{src:t.user.photoURL,alt:"Profile Picture"}})]),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.user.displayName))])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-email")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.user.email))])],1),t._v(" "),t.user.emailVerified?r("v-list-item-action",[r("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-decagram")])],1):t._e()],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",{attrs:{ripple:""},on:{click:t.logoutAndRedirect}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-logout")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1):t._e()],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"8",xl:"9"}},[r("v-card",{class:["profile-card",t.profileCardMargin]},[r("h2",{staticClass:"grey--text"},[t._v("\n          Coming Soon\n        ")])])],1)],1)],1)}),[],!1,null,"21d0eed6",null);e.default=component.exports;f()(component,{VCard:_.a,VCol:O.a,VContainer:j.a,VDivider:y.a,VIcon:h.a,VList:w.a,VListItem:V.a,VListItemAction:P.a,VListItemAvatar:C.a,VListItemContent:L.a,VListItemTitle:L.b,VRow:x.a})}}]);