(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{456:function(o,s){},469:function(o,s,t){"use strict";var n=t(456),a=t.n(n)},472:function(o,s,t){"use strict";t.r(s);var n=function(){var _=this,j=_.$createElement,e=_._self._c||j;return e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("div",{staticClass:"headline"},[_._v(`
        `+_._s(_.newsUpdate.title?_.newsUpdate.title:"News Update")+`
      `)])])]),_._v(" "),e("div",{staticClass:"pa-4 pt-0"},[e("div",{staticClass:"body-2 grey--text text--darken-3"},[_._v(`
      `+_._s(_.newsUpdate.date)+`
    `)]),_._v(" "),e("br"),_._v(" "),e("xmp",{staticClass:"body-2"},[_._v(_._s(_.newsUpdate.notice))])],1),_._v(" "),e("v-card-actions",[_.newsUpdate.link?e("v-btn",{staticClass:"orange--text",attrs:{href:_.newsUpdate.link,text:"",target:"_blank",rel:"noopener"}},[_._v(`
      Link
    `)]):_._e(),_._v(" "),_.isAdmin?e("v-btn",{staticClass:"blue--text",attrs:{text:""},on:{click:function(d){return d.stopPropagation(),_.$emit("edit")}}},[_._v(`
      Edit
    `)]):_._e(),_._v(" "),_.isAdmin?e("v-btn",{staticClass:"red--text",attrs:{text:""},on:{click:function(d){return d.stopPropagation(),_.$emit("delete")}}},[_._v(`
      Delete
    `)]):_._e()],1)],1)},a=[],i={props:{newsUpdate:{type:Object,required:!0},isAdmin:{type:Boolean,default:!1}}},c=i,x=t(469),v=t(98),u=t(128),p=t.n(u),f=t(122),m=t(209),r=t(406),l=Object(v.a)(c,n,a,!1,null,"dd88f892",null),C=s.default=l.exports;p()(l,{VBtn:f.a,VCard:m.a,VCardActions:r.a,VCardTitle:r.c})}}]);
