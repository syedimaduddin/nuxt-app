(window.webpackJsonp=window.webpackJsonp||[]).push([[38,19],{557:function(e,t,r){"use strict";r.r(t);r(10),r(8),r(7),r(6),r(12),r(9),r(13);var o=r(32),n=r(3),l=(r(101),r(31),r(77),r(29),r(44),r(123)),c=r(19);r(471);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{project:{name:"",team:"",description:"",youtube:"",id:"",ongoing:!1,docs:[],images:[]},dialog:!1,valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=100||"Name must be less than 100 characters"}],imageUrl:"",image:null,descriptionRules:[function(e){return!!e||"Description is required"}],loading:!1,addDocs:!1,project_report:"",presentation:"",poster:"",uploadRemaining:!1,galleryImages:[]}},methods:v(v({},Object(l.c)("projects",["projectIsUnique"])),{},{validate:function(){return this.$refs.form.validate()?(this.valid=!0,!0):(this.valid=!1,!1)},reset:function(){this.$refs.form.reset(),this.imageUrl="",this.image=null,this.project_report="",this.presentation="",this.poster="",this.uploadRemaining=!1,this.galleryImages=[],this.project.ongoing=!1,this.loading=!1,this.addDocs=!1,this.valid=!0},getID:function(title){var e=title.replace(/[^a-z\d\s]+/gi,"");return e=e.replace(/\s+/g,"-").toLowerCase(),this.projectIsUnique()(e)?e:e+"-"+Math.floor(Math.random()*Math.floor(1e4))},setDocs:function(){!1===this.addDocs?delete this.project.docs:(this.project_report.length>0&&this.project.docs.push({name:"Project Report",url:this.project_report}),this.poster.length>0&&this.project.docs.push({name:"Poster",url:this.poster}),this.presentation.length>0&&this.project.docs.push({name:"Presentation",url:this.presentation}),0===this.project.docs.length&&delete this.project.docs)},onPickFile:function(){this.$refs.fileInput.click()},onMultiFilePick:function(){this.$refs.multiFileInput.click()},onFilePicked:function(e){var t=this,r=e.target.files;if(r[0].name.lastIndexOf(".")<=0)return alert("Please upload a valid file.");var o=new FileReader;o.addEventListener("load",(function(){t.imageUrl=o.result})),o.readAsDataURL(r[0]),this.image=r[0]},onMultiFilePicked:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,i,l,d,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,""!==t.project.name){r.next=7;break}t.galleryImages=[],t.project.images=[],alert("Please enter the name of the project first!"),r.next=26;break;case 7:t.uploadRemaining=!0,o=t.getID(t.project.name),n=e.target.files,i=0;case 11:if(!(i<n.length)){r.next=26;break}return l=n[i].name,r.next=15,c.a.storage().ref("projects/"+o+"/"+l).put(n[i]);case 15:return d=r.sent,r.next=18,d.ref.getDownloadURL();case 18:if(v=r.sent,t.galleryImages.push(v),t.uploadRemaining=!(n.length===t.galleryImages.length),!1!==t.uploadRemaining){r.next=23;break}return r.abrupt("break",26);case 23:i++,r.next=11;break;case 26:r.next=31;break;case 28:r.prev=28,r.t0=r.catch(0),console.log(r.t0);case 31:case"end":return r.stop()}}),r,null,[[0,28]])})))()},saveProject:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,l,d,v,m,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.validate(),o=e.project,t.prev=2,!r){t.next=35;break}return e.loading=!0,(null==e.project.youtube||e.project.youtube.length<=0)&&delete e.project.youtube,(null==e.project.team||e.project.team.length<=0)&&delete e.project.team,n="https://res.cloudinary.com/amuroboclub/image/upload/old/robo.jpg",e.setDocs(),e.project.id=e.getID(e.project.name),e.galleryImages&&e.galleryImages.length>0?e.project.images=e.galleryImages:delete e.project.images,t.next=13,e.$firebase.database().ref("projects").push(e.project);case 13:if(l=t.sent,d=l.key,!(e.imageUrl&&e.imageUrl.length>0)){t.next=28;break}return v=e.image.name,m=v.slice(v.lastIndexOf(".")),t.next=20,c.a.storage().ref("projects/"+e.project.id+"/"+d+m).put(e.image);case 20:return f=t.sent,t.next=23,f.ref.getDownloadURL();case 23:return h=t.sent,t.next=26,e.$firebase.database().ref("projects").child(d).update({image:h});case 26:t.next=30;break;case 28:return t.next=30,e.$firebase.database().ref("projects").child(d).update({image:n});case 30:e.loading=!1,e.dialog=!1,console.log("new project succesfully saved"),e.reset(),e.project=o;case 35:t.next=42;break;case 37:t.prev=37,t.t0=t.catch(2),console.error(t.t0),e.reset(),e.project=o;case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))()}})},f=r(132),h=r(175),j=r.n(h),x=r(168),k=r(266),_=r(468),y=r(487),w=r(488),P=r(503),I=r(489),O=r(491),C=r(208),D=r(173),R=r(260),F=r(490),V=r(486),U=r(89),$=r(499),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-btn",e._g({staticClass:"cyan",attrs:{dark:"",fab:""}},o),[r("v-icon",{attrs:{dark:""}},[e._v(" mdi-plus ")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("Add New Project")]),e._v(" "),r("v-container",{staticClass:"text-center"},[r("v-col",{staticClass:"xs-12"},[e.loading?r("v-progress-circular",{attrs:{size:70,width:7,color:"purple",indeterminate:""}}):e._e()],1)],1)],1),e._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{counter:100,rules:e.nameRules,label:"Name*",required:""},model:{value:e.project.name,callback:function(t){e.$set(e.project,"name",t)},expression:"project.name"}}),e._v(" "),r("v-text-field",{attrs:{label:"Team",placeholder:"For example: Areeb Jamal, Haider Ali",required:""},model:{value:e.project.team,callback:function(t){e.$set(e.project,"team",t)},expression:"project.team"}}),e._v(" "),r("span",{staticClass:"text"},[e._v("The single dedicated image:")]),e._v(" "),r("v-btn",{staticClass:"cyan",attrs:{raised:""},on:{click:e.onPickFile}},[e._v("Upload Featured Image")]),e._v(" "),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFilePicked}}),e._v(" "),r("br"),e._v(" "),r("img",{attrs:{src:e.imageUrl,height:"150"}}),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("span",{staticClass:"text"},[e._v("Can be more than one:")]),e._v(" "),r("v-btn",{staticClass:"cyan",attrs:{raised:""},on:{click:e.onMultiFilePick}},[e._v("Upload Gallery Images")]),e._v(" "),e.uploadRemaining?r("v-progress-circular",{attrs:{indeterminate:""}}):e._e(),e._v(" "),r("input",{ref:"multiFileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*",multiple:""},on:{change:e.onMultiFilePicked}}),e._v(" "),e.galleryImages.length>0?r("v-col",{staticClass:"mt-2 mb-2",attrs:{lg:"12"}},[r("v-card",[r("v-container",{attrs:{fluid:""}},[r("v-row",e._l(e.galleryImages,(function(img){return r("v-col",{key:img,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[r("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[r("v-img",{staticClass:"grey lighten-2",attrs:{src:img,"lazy-src":img,"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),1)],1)],1)],1):e._e(),e._v(" "),r("v-textarea",{attrs:{rules:e.descriptionRules,label:"Description*",placeholder:"Enter description so that others can know about this project.",required:""},model:{value:e.project.description,callback:function(t){e.$set(e.project,"description",t)},expression:"project.description"}}),e._v(" "),r("v-checkbox",{attrs:{label:"Ongoing",color:"secondary"},model:{value:e.project.ongoing,callback:function(t){e.$set(e.project,"ongoing",t)},expression:"project.ongoing"}}),e._v(" "),r("v-text-field",{attrs:{counter:11,label:"YouTube video ID",placeholder:"For example: RWldvqO4AIY"},model:{value:e.project.youtube,callback:function(t){e.$set(e.project,"youtube",t)},expression:"project.youtube"}}),e._v(" "),r("v-checkbox",{attrs:{label:"Add Documents",color:"secondary"},model:{value:e.addDocs,callback:function(t){e.addDocs=t},expression:"addDocs"}}),e._v(" "),e.addDocs?r("v-form",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Project Report Link",required:""},model:{value:e.project_report,callback:function(t){e.project_report=t},expression:"project_report"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Poster Link",required:""},model:{value:e.poster,callback:function(t){e.poster=t},expression:"poster"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Presentation Link",required:""},model:{value:e.presentation,callback:function(t){e.presentation=t},expression:"presentation"}})],1)],1)],1)],1):e._e(),e._v(" "),r("v-btn",{attrs:{color:"orange"},on:{click:e.reset}},[e._v(" Reset Form ")])],1)],1),e._v(" "),r("small",[e._v("*indicates required field")])],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(t){e.dialog=!1+e.reset()}}},[e._v("Close")]),e._v(" "),r("v-btn",{attrs:{disabled:e.uploadRemaining||!e.valid,color:"blue darken-1",flat:""},on:{click:e.saveProject}},[e._v("Save")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;j()(component,{VBtn:x.a,VCard:k.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCheckbox:y.a,VCol:w.a,VContainer:P.a,VDialog:I.a,VForm:O.a,VIcon:C.a,VImg:D.a,VProgressCircular:R.a,VRow:F.a,VSpacer:V.a,VTextField:U.a,VTextarea:$.a})}}]);