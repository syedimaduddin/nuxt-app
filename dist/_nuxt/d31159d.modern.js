(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{506:function(x,n,a){"use strict";a.r(n);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.user?s("v-row",[s("v-col",{attrs:{cols:"12",sm:"8",lg:"6",xl:"4","offset-sm":"2","offset-lg":"3","offset-xl":"4"}},[s("v-card",[s("div",{staticClass:"display-1 text-center pt-3"},[t._v(`
          You are already logged in!
        `)]),t._v(" "),s("v-row",{staticClass:"mt-2 pb-2"},[s("v-col",{staticClass:"text-center text-sm-right",attrs:{cols:"12",sm:"6"}},[s("v-btn",{staticClass:"purple",attrs:{info:"",large:"",to:"/profile"}},[t._v(" Profile ")])],1),t._v(" "),s("v-col",{staticClass:"text-center text-sm-left",attrs:{cols:"12",sm:"6"}},[s("v-btn",{attrs:{error:"",large:""},on:{click:t.logout}},[t._v(" Logout ")])],1)],1)],1)],1)],1):t._e(),t._v(" "),s("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.user,expression:"!user"}]},[s("v-col",{attrs:{cols:"12",sm:"8",lg:"6",xl:"4","offset-sm":"2","offset-lg":"3","offset-xl":"4"}},[s("v-card",[s("div",{staticClass:"display-1 text-center pt-3"},[t._v("Sign In or Register")]),t._v(" "),s("div",{staticClass:"pt-3 pb-3",attrs:{id:"firebaseui-auth-container"}})])],1)],1)],1)},i=[],v=a(90),u={head(){return{title:"Sign In"}},computed:Object(v.e)(["user"]),mounted(){var t=a(410),e=this.$firebase,s={signInSuccessUrl:"/",signInOptions:[e.auth.EmailAuthProvider.PROVIDER_ID,e.auth.GoogleAuthProvider.PROVIDER_ID,e.auth.FacebookAuthProvider.PROVIDER_ID,e.auth.GithubAuthProvider.PROVIDER_ID]},o=t.auth.AuthUI.getInstance(),V=o!==null?o:new t.auth.AuthUI(e.auth());V.start("#firebaseui-auth-container",s)},methods:{logout(){this.$store.dispatch("logout")}}},c=u,R=a(411),d=a(98),f=a(128),g=a.n(f),h=a(122),m=a(209),p=a(426),I=a(441),C=a(428),r=Object(d.a)(c,l,i,!1,null,null,null),P=n.default=r.exports;g()(r,{VBtn:h.a,VCard:m.a,VCol:p.a,VContainer:I.a,VRow:C.a})}}]);