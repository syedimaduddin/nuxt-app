(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{119:function(e,t,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(373),n(132)),c=n(175),m=n.n(c),d=n(481),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[404===e.error.statusCode?n("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):n("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),n("NuxtLink",{attrs:{to:"/"}},[e._v(" Home page ")])],1)}),[],!1,null,"8223adbe",null);t.a=component.exports;m()(component,{VApp:d.a})},316:function(e,t){},318:function(e,t){},341:function(e,t,n){"use strict";n(10),n(8),n(12),n(9),n(13);var r=n(3),o=(n(7),n(6),n(123));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m={data:function(){return{sideNav:!1,menuItems:[{icon:"mdi-account-multiple",title:"Team",link:"/team"},{icon:"mdi-wrench",title:"Projects",link:"/projects"},{icon:"mdi-bell",title:"News",link:"/news"},{icon:"mdi-account",title:"Profile",link:"/profile",auth:!0},{icon:"mdi-lock-open",title:"Sign In",link:"/signin",auth:!1},{icon:"mdi-account-group",title:"Members",link:"/apply",auth:!0}],moreItems:[{icon:"mdi-android",title:"Robocon",link:"/robocon"},{icon:"mdi-robot",title:"RoboVoyage",link:"/robovoyage"},{icon:"mdi-cloud-download",title:"Downloads",link:"/downloads"},{icon:"mdi-store",title:"Inventory",link:"/inventory"},{icon:"mdi-coin",title:"Contributions",link:"/contributions"}],icons:[{name:"mdi-instagram",link:"https://www.instagram.com/amuroboclub/"},{name:"mdi-facebook",link:"https://www.facebook.com/groups/amuroboculb/"},{name:"mdi-youtube",link:"https://www.youtube.com/channel/UCKTQZXhxAWfhz1Mb8c2UKTg"},{name:"mdi-github",link:"https://github.com/open-roboclub/roboclub-vue/graphs/contributors"}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({getDate:function(){return(new Date).getFullYear()+"-"+((new Date).getFullYear()+1)%100},displayedItems:function(){return this.menuItems.filter(this.isAuth)}},Object(o.e)(["user"])),methods:{isAuth:function(e){return void 0===e.auth||(!e.auth&&!this.user||e.auth&&this.user)}}},d=m,l=(n(376),n(132)),f=n(175),v=n.n(f),y=n(481),h=n(502),w=n(482),k=n(168),j=n(483),O=n(208),_=n(261),R=n(169),T=n(262),N=n(94),A=n(484),C=n(272),B=n(485),E=n(486),I=n(265),x=n(212),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{light:""}},[n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:e.sideNav,callback:function(t){e.sideNav=t},expression:"sideNav"}},[n("v-list",[e._l(e.displayedItems,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.link}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-item-content",[e._v(e._s(t.title))])],1)})),e._v(" "),n("v-subheader",{attrs:{inset:""}},[e._v(" More ")]),e._v(" "),e._l(e.moreItems,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.link}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-item-content",[e._v(e._s(t.title))])],1)}))],2)],1),e._v(" "),n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up",on:{click:function(t){t.stopPropagation(),e.sideNav=!e.sideNav}}}),e._v(" "),n("v-toolbar-title",[n("nuxt-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[n("div",{staticClass:"logo"},[n("span",{staticClass:"amu"},[e._v("amu")]),n("span",{staticClass:"roboclub"},[e._v("roboclub")])])])],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",{staticClass:"hidden-xs-only"},e._l(e.displayedItems,(function(t){return n("v-btn",{key:t.title,attrs:{to:t.link,text:""}},[n("v-icon",{staticClass:"mr-3"},[e._v("\n          "+e._s(t.icon)+"\n        ")]),e._v("\n        "+e._s(t.title)+"\n      ")],1)})),1),e._v(" "),n("v-menu",{staticClass:"hidden-xs-only",attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{icon:""}},r),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),n("v-list",e._l(e.moreItems,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.link}},[n("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1)],1),e._v(" "),n("v-main",[n("main",[n("nuxt")],1),e._v(" "),n("div",{staticClass:"space"}),e._v(" "),n("v-footer",{staticClass:"footer pa-0 grey lighten-1",attrs:{dark:"",height:"auto"}},[n("div",{staticClass:"px-2 py-2"},[n("v-btn",{attrs:{text:"",light:"",href:"https://github.com/open-roboclub/roboclub-vue/graphs/contributors",target:"_blank",rel:"noopener"}},[n("v-icon",[e._v("mdi-worker")]),e._v("\n          Developers\n        ")],1)],1),e._v(" "),n("v-spacer"),e._v(" "),n("div",{},e._l(e.icons,(function(t){return n("v-btn",{key:t.name,staticClass:"mx-2",staticStyle:{"text-decoration":"none",color:"black"},attrs:{light:"",icon:"",href:t.link,target:"_blank",rel:"noopener"}},[n("v-icon",{attrs:{size:"28px"}},[e._v(e._s(t.name))])],1)})),1),e._v(" "),n("div",{staticClass:"pa-1 text-center grey darken-2 copyright"},[e._v("\n        ©"+e._s(e.getDate)+" — "),n("strong",[e._v("AMURoboclub")])])],1)],1)],1)}),[],!1,null,"4d4fdd4a",null);t.a=component.exports;v()(component,{VApp:y.a,VAppBar:h.a,VAppBarNavIcon:w.a,VBtn:k.a,VFooter:j.a,VIcon:O.a,VList:_.a,VListItem:R.a,VListItemAction:T.a,VListItemContent:N.a,VListItemTitle:N.b,VMain:A.a,VMenu:C.a,VNavigationDrawer:B.a,VSpacer:E.a,VSubheader:I.a,VToolbarItems:x.a,VToolbarTitle:x.b})},347:function(e,t,n){n(348),e.exports=n(349)},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return d}));var r=n(32),o=(n(101),n(16)),c={apiKey:"AIzaSyB375ZkbrouviVJ1YG7_3n8K3jAhIXlsOU",authDomain:"amu-roboclub.firebaseapp.com",databaseURL:"https://amu-roboclub.firebaseio.com",projectId:"amu-roboclub",storageBucket:"amu-roboclub.appspot.com",messagingSenderId:"911524271284"};n(244),n(328),n(465),n(332);if(!c)throw new Error("missing firebase.json config.");o.a.apps.length||o.a.initializeApp(c);var m=o.a.database(),d=o.a.firestore();t.c=function(e,t){var n=e.store;return t("firebase",o.a),o.a.auth().onAuthStateChanged(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.commit("setUser",t),n.dispatch("isAdmin"),!t){e.next=11;break}return r=o.a.functions(),c=r.httpsCallable("setClaims"),e.next=7,c();case 7:if(!e.sent.data.success){e.next=11;break}return e.next=11,t.getIdToken(!0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},373:function(e,t,n){"use strict";n(316)},376:function(e,t,n){"use strict";n(318)},411:function(e,t,n){"use strict";n.r(t),n.d(t,"strict",(function(){return f})),n.d(t,"state",(function(){return v})),n.d(t,"mutations",(function(){return y})),n.d(t,"actions",(function(){return h}));n(10),n(8),n(7),n(6),n(12),n(9),n(13);var r=n(32),o=n(3),c=(n(101),n(16)),m=(n(328),n(244),n(332),n(38));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=!1,v=function(){return{user:null,isAdmin:!1}},y=l(l({setUser:function(e,t){e.user=t},setAdmin:function(e,t){e.isAdmin=t}},m.firebaseMutations),m.d),h={isAdmin:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state,r=e.commit,n.user){t.next=4;break}return r("setAdmin",!1),t.abrupt("return");case 4:return o=n.user,m=o?o.uid:"",t.prev=6,t.next=9,c.a.firestore().collection("users").doc(m).get();case 9:d=t.sent,r("setAdmin",d.data().isAdmin),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),r("setAdmin",!1);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})))()},logout:function(){return c.a.auth().signOut()}}},415:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return k})),n.d(t,"mutations",(function(){return j})),n.d(t,"actions",(function(){return O})),n.d(t,"getters",(function(){return _}));var r,o,c,m,d=n(32),l=(n(101),n(29),n(6),n(74),n(7),n(140),n(33),n(57),n(38)),f=n(35),v=f.a.collection("members"),y=f.a.collection("facultyNumbers"),h=function(e){return e||(e={}),e.name="",e.email="",e.mobile="",e.course="",e.facultyNumber="",e.enrollmentNumber="",e.timestamp=-Date.now(),e.paymentStatus=!1,e.registrationNumber="",e},w=function(e,t){var n,r=new Date,o=r.getUTCMonth()+1,c=r.getUTCFullYear(),m=parseInt("20"+e[0]+e[1]);switch(t){case"btech":n="T";break;case"be":n="E";break;case"diploma":n="D";break;case"mtech":n="M";break;case"na":n="N"}var d=c-m;return o>8&&(d+=1),"R"+n+(c%100).toString()+d.toString()+e[5]+e[6]+e[7]},k=function(){return{members:{},memberToBeAdded:h(),memberToBeEdited:h()}},j={resetMember:function(e){return h(e.memberToBeAdded)},resetMemberEdit:function(e){return h(e.memberToBeEdited)},setMemberToEdit:function(e,t){e.memberToBeEdited=t}},O={setMembersRef:Object(l.c)((function(e){return(0,e.bindFirestoreRef)("members",v)})),checkDuplicates:(m=Object(d.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state,e.next=3,y.doc(n).get();case 3:if(r=e.sent,e.prev=4,!0!==r.data().value){e.next=7;break}return e.abrupt("return","This faculty number is used by another person");case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(4),e.abrupt("return","");case 12:case"end":return e.stop()}}),e,null,[[4,9]])}))),function(e,t){return m.apply(this,arguments)}),setMemberToEdit:function(e,t){var n=e.commit,r={};r.name=t.name,r.email=t.email,r.mobile=t.mobile,r.course=t.course,r.facultyNumber=t.facultyNumber,r.enrollmentNumber=t.enrollmentNumber,r.paymentStatus=t.paymentStatus,r.registrationNumber=t.registrationNumber,n("setMemberToEdit",r)},addMember:(c=Object(d.a)(regeneratorRuntime.mark((function e(t,n){var r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,t.commit,o=new Date,c=f.a.batch(),r.memberToBeAdded.timestamp=- -o,r.memberToBeAdded.paymentStatus=n,r.memberToBeAdded.facultyNumber=r.memberToBeAdded.facultyNumber.toUpperCase(),r.memberToBeAdded.enrollmentNumber=r.memberToBeAdded.enrollmentNumber.toUpperCase(),r.memberToBeAdded.registrationNumber=w(r.memberToBeAdded.facultyNumber,r.memberToBeAdded.course),c.set(y.doc(r.memberToBeAdded.facultyNumber),{value:!0}),c.set(v.doc(),r.memberToBeAdded),e.next=12,c.commit();case 12:case"end":return e.stop()}}),e)}))),function(e,t){return c.apply(this,arguments)}),deleteMember:(o=Object(d.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=f.a.batch()).delete(y.doc(n[1])),r.delete(v.doc(n[0])),e.next=5,r.commit();case 5:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),editMember:(r=Object(d.a)(regeneratorRuntime.mark((function e(t,n){var r,o,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,o=t.commit,c=new Date,m=f.a.batch(),r.memberToBeEdited.timestamp=- -c,r.memberToBeEdited.registrationNumber=w(r.memberToBeEdited.facultyNumber,r.memberToBeEdited.course),n[1]!==r.memberToBeEdited.facultyNumber&&m.delete(y.doc(n[1])),m.set(y.doc(r.memberToBeEdited.facultyNumber),{value:!0}),m.set(v.doc(n[0]),r.memberToBeEdited),e.next=10,m.commit();case 10:o("resetMemberEdit");case 11:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},_={members:function(e,t){return function(t){return Object.values(e.members).filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())||e.facultyNumber.toUpperCase().includes(t.toUpperCase())}))}},member:function(e){return e.memberToBeAdded},memberEdit:function(e){return e.memberToBeEdited}}},416:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return d})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return f})),n.d(t,"getters",(function(){return v}));n(29),n(8),n(69),n(44);var r=n(38),o=n(35).a.collection("contributors"),c=null;function m(e){return e||(e={}),e.name="",e.amount="",e.description="",e.remark="",e}var d=function(){return{contribution:m(),contributions:[]}},l={resetContribution:function(e){m(e.contribution)},setContribution:function(e,t){e.contribution=Object.assign({},t),c=t.id}},f={setContributionsRef:Object(r.c)((function(e){return(0,e.bindFirestoreRef)("contributions",o)})),deleteContribution:function(e,t){o.doc(t).delete()},addContribution:function(e){var t=e.state,n=e.commit;o.add(t.contribution),n("resetContribution")},saveContribution:function(e){var t=e.state,n=e.commit;o.doc(c).update(function(source,e){for(var t in source)Object.prototype.hasOwnProperty.call(e,t)&&(e[t]=source[t]);return e}(t.contribution,m())),n("resetContribution")}},v={contributions:function(e){return e.contributions.slice().reverse()}}},417:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c})),n.d(t,"actions",(function(){return m})),n.d(t,"getters",(function(){return d}));n(43),n(29);var r=n(38),o=n(35).a.collection("downloads"),c=function(){return{downloads:[]}},m={setDownloadsRef:Object(r.c)((function(e){return(0,e.bindFirestoreRef)("downloads",o)}))},d={downloadTypes:function(e){return e.downloads.map((function(e){return e.name}))}}},418:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return f})),n.d(t,"mutations",(function(){return v})),n.d(t,"actions",(function(){return y})),n.d(t,"getters",(function(){return h}));n(29),n(6),n(9),n(43);var r=n(38),o=n(35),c=o.b.ref("inventory/inventoryItems"),m=o.b.ref("inventory/requests");function d(e){return e||(e={}),e.name="",e.allotted=0,e.total=0,e.working=0,e}function l(e,t){var n;return c.child(e).child("items").orderByChild("name").equalTo(t).on("value",(function(e){e.forEach((function(e){n=e.key}))})),n}var f=function(){return{inventory:[],entrySelect:d(),entryAdd:d(),requests:[]}},v={resetEntry:function(e){d(e.entryAdd),d(e.entrySelect)},setEntry:function(e,t){e.entrySelect=t}},y={setInventoryRef:Object(r.a)((function(e){return(0,e.bindFirebaseRef)("inventory",c)})),setRequestsRef:Object(r.a)((function(e){return(0,e.bindFirebaseRef)("requests",m)})),deleteEntry:function(e,t){var n=l(t[1],t[0].name);c.child(t[1]).child("items").orderByChild("name").equalTo(t[0].name).ref.child(n).remove()},saveEntry:function(e,t){var source,n,r=e.state,o=l(t[1],t[0].name),m=[];source=r.entrySelect,(n=m).name=source.name,n.allotted=source.allotted,n.working=source.working,n.total=source.total,m=n,c.child(t[1]).child("items").orderByChild("name").equalTo(t[0].name).ref.child(o).set(m)},addEntry:function(e,t){var n,r,o=e.state,m=e.commit,d=(n=t,c.orderByChild("name").equalTo(n).on("value",(function(e){e.forEach((function(e){r=e.key}))})),r);c.child(d).child("items").push(o.entryAdd),m("resetEntry")},sendRequest:function(e,t){var n={itemName:t[0],name:t[2],quantity:t[1],type:t[3],email:t[4]};m.push(n)},setEntryValue:function(e,t){(0,e.commit)("setEntry",t)},seenRequest:function(e,t){m.child(t).remove()}},h={inventory:function(e){return e.inventory},entrySelect:function(e){return e.entrySelect},entryAdd:function(e){return e.entryAdd},requests:function(e){return e.requests},inventoryTypes:function(e){return e.inventory.map((function(e){return e.name}))}}},419:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return l})),n.d(t,"mutations",(function(){return f})),n.d(t,"actions",(function(){return v})),n.d(t,"getters",(function(){return y}));n(325),n(44);var r=n(38),o=n(35),c=o.a.collection("news"),m=c.orderBy("timestamp").limit(4);function d(e){return e||(e={}),e.title="",e.notice="",e.link="",e.timestamp=-Date.now(),e.date="XX/YY/ZZ",e.notification="no",e}var l=function(){return{newsItem:d(),news:[]}},f={resetNews:function(e){d(e.newsItem)}},v={setNewsRef:Object(r.c)((function(e){return(0,e.bindFirestoreRef)("news",c.orderBy("timestamp"))})),setRecentNewsRef:Object(r.c)((function(e){var t=e.state,n=e.bindFirestoreRef;if(!t.news.length)return n("news",m)})),deleteNews:function(e,t){c.doc(t).delete()},addNews:function(e){var t=e.state,n=e.commit;""===t.newsItem.link&&delete t.newsItem.link;var r=new Date,o=r.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});t.newsItem.timestamp=-r,t.newsItem.date=o,c.doc(t.newsItem.id).set(t.newsItem),n("resetNews")},saveNews:function(e,t){var n=function(source,e){for(var t in source)Object.prototype.hasOwnProperty.call(e,t)&&(e[t]=source[t]);return e}(t,d());n.notification="no",""===n.link&&delete n.link,c.doc(t.id).update(n)}},y={news:function(e){return e.news},recentNews:function(e){return e.news.slice(0,4)}}},420:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c})),n.d(t,"actions",(function(){return m})),n.d(t,"getters",(function(){return d}));n(7),n(6),n(82);var r=n(38),o=n(35).a.collection("projects"),c=function(){return{projects:[],project:[]}},m={setProjectsRef:Object(r.c)((function(e){return(0,e.bindFirestoreRef)("projects",o)})),setProjectRef:Object(r.c)((function(e,t){var n,r=e.bindFirestoreRef;if(!e.getters.getProjectById(t))return r("project",(n=t,o.doc(n)))}))},d={completedProjects:function(e){return e.projects.reverse().filter((function(e){return!e.ongoing}))},getProjectById:function(e){return function(t){return e.projects.find((function(e){return e.id===t}))}},projectIsUnique:function(e){return function(t){for(var i=0;i<e.projects.length;i++)if(e.projects[i].id===t)return!1;return!0}}}},421:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c})),n.d(t,"actions",(function(){return m}));var r=n(38),o=n(35).a.collection("robocon").doc("current"),c=function(){return{robocon:{}}},m={setRoboconRef:Object(r.c)((function(e){return(0,e.bindFirestoreRef)("robocon",o)}))}},422:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c})),n.d(t,"actions",(function(){return m}));var r=n(38),o=n(35).a.collection("robovoyage").doc("EWJQ4H3MZyt1Vkd6Xd0A"),c=function(){return{robovoyage:{}}},m={setRobovoyageRef:Object(r.c)((function(e){return(0,e.bindFirestoreRef)("robovoyage",o)}))}},423:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return l})),n.d(t,"actions",(function(){return f})),n.d(t,"getters",(function(){return v}));var r=n(26),o=(n(30),n(202),n(140),n(7),n(6),n(38)),c=n(35),m=c.a.collection("teams").doc("team_2021-22"),d=c.a.collection("teams").doc("oBN3RWaWFRu9JCMe5TDO"),l=function(){return{team:{},faculty:{}}},f={setTeamRef:Object(o.c)((function(e){return(0,e.bindFirestoreRef)("team",m)})),setFacultyRef:Object(o.c)((function(e){return(0,e.bindFirestoreRef)("faculty",d)}))},v={members:function(e){return e.team&&e.faculty&&e.team.members&&e.faculty.members?[].concat(Object(r.a)(Object.values(e.faculty.members).sort((function(e,t){return console.log("I am a member of faculty"),e.rank-t.rank}))),Object(r.a)(Object.values(e.team.members).sort((function(e,t){return console.log("I am a member of team"),e.rank-t.rank})))):[]},coordinators:function(e){return e.team&&e.team.members?Object.values(e.team.members).filter((function(e){return 0===parseInt(e.rank)})):[]}}}},[[347,39,0]]]);