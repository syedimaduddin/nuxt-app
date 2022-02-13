(window.webpackJsonp=window.webpackJsonp||[]).push([[27,21,22],{447:function(b,n,a){"use strict";a.r(n);var l=function(){var r=this,p=r.$createElement,v=r._self._c||p;return v("v-row",[v("v-container",{staticClass:"text-center"},[v("v-progress-circular",{attrs:{size:r.size*10,width:r.size,color:r.color,indeterminate:""}})],1)],1)},m=[],C={props:{size:{type:Number,default:5},color:{type:String,default:"grey"}}},c=C,w=a(98),x=a(128),_=a.n(x),d=a(441),j=a(203),g=a(428),f=Object(w.a)(c,l,m,!1,null,null,null),O=n.default=f.exports;_()(f,{VContainer:d.a,VProgressCircular:j.a,VRow:g.a})},463:function(b,n,a){"use strict";a.r(n);var l=function(){var o=this,u=o.$createElement,h=o._self._c||u;return h("v-img",{attrs:{src:o.resizedSrc}})},m=[],C=a(12),c=a(13),w=a(408),x=a(222),_=a(23),d=a(60),j=a(49),g={props:{src:{type:String,required:!0},height:{type:Number,default:-1},width:{type:Number,default:-1}},computed:{resizedSrc(){if(this.width>0||this.height>0){var o=new URL(this.src);if(o.hostname==="res.cloudinary.com"){var u="/image/upload/",h=this.src.split(u);if(h.length>1){var y=[];this.height>0&&y.push("h_".concat(this.height)),this.width>0&&y.push("w_".concat(this.width));var V=[h[0],u,y.join(","),"/",...h.slice(1)].join("");return V.replace(/.(jpg|jpeg|png|bmp)$/,".webp")}}}return this.src}}},f=g,O=a(98),r=a(128),p=a.n(r),v=a(126),R=Object(O.a)(f,l,m,!1,null,null,null),P=n.default=R.exports;p()(R,{VImg:v.a})},478:function(b,n){},491:function(b,n,a){"use strict";var l=a(478),m=a.n(l)},509:function(b,n,a){"use strict";a.r(n);var l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-container",[t("v-row",[t("v-col",{attrs:{sm:"12",lg:"8"}},[t("v-card",{staticClass:"mb-3"},[t("v-container",[t("v-row",[t("v-col",{staticClass:"text-sm-center text-center xs",attrs:{sm:"12"}},[t("iframe",{attrs:{width:"90%",height:"350px",allowfullscreen:"",src:"https://www.youtube.com/embed/3TSxPcIJCB0?rel=0&showinfo=0&theme=light",loading:"lazy"}})])],1),e._v(" "),t("v-row",[t("v-col",{staticClass:"text-sm-center",attrs:{sm:"12"}},[t("v-card-title",{staticClass:"card-text",attrs:{"primary-title":""}},[e._v(`
                AMURoboclub is a student\u2019s body which caters to the need of
                electronics enthusiasts and hobbyists in creating an
                environment which is driven by innovation and implementation.
                Run under the able guidance and supervision of faculty
                advisors from various branches of engineering, AMURoboclub
                stands as an epitome of marvel. It not only acts as a platform
                for zealous students to hone their skills in the field of
                Electrical, Electronics, Computers and Mechanical but also
                prepares them for various national competitions by encouraging
                participation.
              `)])],1)],1)],1)],1),e._v(" "),t("v-card",{staticClass:"mb-3"},[t("v-card-title",{staticClass:"card-text"},[e._v(`
          In the last couple of years, students from AMURoboclub have won many
          awards in various competitions which speak of its testimony. Regular
          Classes, Annual Workshop, Guest Lectures, Project Exhibition,
          Student Competitions etc are some of the main functions of the club.
          Robonics, the annual workshop of AMURoboclub has earned a name in
          itself. The highlights of the club which differentiates it from the
          peers are its adherence to the curriculum, its student-student
          interaction and importantly project developments. More than 80 ideas
          have culminated into working models so far and the number is on the
          rise. The strength of the club lies in its Student members, it is
          them who has given a high repute to the club. The members who
          complete at least one project under AMURoboclub are felicitated and
          they earn for themselves a separate webpage in the AMURoboclub
          website which is dedicated for their description and achievements.
          AMURoboclub alumni always attribute a portion of their successes to
          the time and effort they spent at AMURoboclub which helped them
          become what they are today.
        `)])],1),e._v(" "),t("v-card",{attrs:{color:"#00796B"}},[t("v-container",[t("v-card-text",{staticClass:"pt-3"},[t("div",[t("h1",{staticClass:"team-header pb-2"},[e._v("Team Co-ordinators")])])]),e._v(" "),e.coordinators.length?e._e():t("div",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{indeterminate:"",color:"white"}})],1),e._v(" "),t("v-row",e._l(e.coordinators,function(s){return t("v-card",{key:s[".key"],staticClass:"mx-auto",attrs:{width:"200",color:"#458B74"}},[t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t("v-avatar",{attrs:{tile:!1,size:150,color:"grey lighten-4 mt-3"}},[t("resize-img",{attrs:{"aspect-ratio":16/9,src:s.profileImageUrl,alt:s.name,width:250}})],1)],1),e._v(" "),t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t("span",{staticStyle:{color:"white"}},[e._v(e._s(s.name))])])],1)}),1),e._v(" "),t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t("br"),e._v(" "),t("nuxt-link",{staticClass:"iconLink",attrs:{to:"/team"}},[t("v-icon",{attrs:{dark:"","x-large":"",color:"#7FFF00"}},[e._v(`
                mdi-arrow-right-bold-circle
              `)])],1)],1)],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6"}},[t("v-card",{staticClass:"mt-3 mr-3"},[t("v-img",{attrs:{src:"https://res.cloudinary.com/amuroboclub/image/upload/v1492699176/14474306_1412485605448267_5100030826549084160_n_k7hi7c.webp"}}),e._v(" "),t("v-card-title",{attrs:{"primary-title":""}},[t("div",{staticClass:"card-text"},[e._v(`
                The Zakir Husain College of Engineering & Technology with its
                foundation stone being laid on 21st November 1938, stands
                today as an epitome in the field of engineering and
                technology, manifesting quality education to build
                intellectual competitiveness. ZHCET named after a great
                scholar of AMU and the former President of India, Dr. Zakir
                Husain, extends its arms for hundreds of students from across
                the country and abroad.
              `)])]),e._v(" "),t("v-card-actions",[t("a",{attrs:{href:"https://www.amu.ac.in/colleges/zakir-husain-college-of-engineering-and-technology"}},[t("v-btn",{attrs:{text:"",color:"orange"}},[e._v("KNOW MORE")])],1)])],1)],1),e._v(" "),t("v-col",{attrs:{cols:"12",sm:"6"}},[t("v-card",{staticClass:"mt-3"},[t("v-img",{attrs:{src:"https://res.cloudinary.com/amuroboclub/image/upload/v1492699314/amu_ps6arw.webp"}}),e._v(" "),t("v-card-title",{attrs:{"primary-title":""}},[t("div",{staticClass:"card-text"},[e._v(`
                Aligarh Muslim University (AMU) occupies a unique position
                amongst universities and institutions of higher learning in
                the country. It was established in 1920, and evolved out of
                the Mohammedan Anglo-Oriental College (MAO College) which was
                set up in 1877 by the great visionary and social reformer, Sir
                Syed Ahmad Khan. Spread over 467.6 hectares in the city of
                Aligarh, Uttar Pradesh, Aligarh Muslim University offers more
                than 300 courses in the traditional and modern branches of
                education. It ranks 5th among the top universities in India.
              `)])]),e._v(" "),t("v-card-actions",[t("a",{attrs:{href:"http://www.amu.ac.in/"}},[t("v-btn",{attrs:{text:"",color:"orange"}},[e._v("KNOW MORE")])],1)])],1),e._v(" "),t("v-card",{staticClass:"mt-3 mb-4",attrs:{color:"#CDC8B1"}},[t("v-container",[t("v-row",[t("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[t("v-icon",{attrs:{left:"","x-large":"",color:"black"}},[e._v(" mdi-city ")])],1),e._v(" "),t("v-col",{attrs:{cols:"10"}},[e._v(`
                  WS-18, `),t("br"),e._v("Mechanical Workshop Compound, "),t("br"),e._v(`Zakir
                  Husain College of Engg & Tech, `),t("br"),e._v(`Aligarh Muslim
                  University, Aligarh. `),t("br"),e._v(`India.
                `)])],1),e._v(" "),t("v-row",[t("v-col",{staticClass:"text-center mt-1",attrs:{cols:"12"}},[t("a",{staticClass:"iconLink",attrs:{href:"//www.google.co.in/maps/place/AMU+Roboclub/@27.91423,78.07735,15z",target:"_blank",rel:"noopener"}},[t("v-icon",{attrs:{light:"","x-large":""}},[e._v(" mdi-map-legend ")])],1)])],1)],1)],1)],1)],1)],1),e._v(" "),t("v-col",{attrs:{sm:"12",lg:"4"}},[t("PageLoader",{directives:[{name:"show",rawName:"v-show",value:!e.recentNews.length,expression:"!recentNews.length"}]}),e._v(" "),e._l(e.recentNews,function(s){return t("v-card",{key:s[".key"],staticClass:"mb-3",attrs:{color:"#F5F5DC"}},[t("v-container",{staticClass:"text-justify"},[t("v-row",{staticStyle:{"padding-right":"10px"}},[t("v-col",{staticStyle:{"min-width":"40px"},attrs:{cols:"1",lg:"2",xl:"1"}},[t("v-icon",{attrs:{left:"",large:"",color:"black"}},[e._v(" mdi-newspaper ")])],1),e._v(" "),t("v-col",{attrs:{cols:"11",lg:"10",xl:"11"}},[e._v(`
              `+e._s(s.notice)+`
              `),t("br"),e._v(" "),t("br"),e._v(`
              `+e._s(s.date)+`
            `)])],1)],1)],1)}),e._v(" "),e.recentNews.length?t("v-card",{staticClass:"mb-3",attrs:{color:"#CDC8B1"}},[t("v-container",[t("v-row",[t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t("nuxt-link",{staticClass:"iconLink",attrs:{to:"/news"}},[t("v-icon",{attrs:{large:""}},[e._v(" mdi-expand-all ")])],1)],1)],1)],1)],1):e._e()],2)],1)],1)},m=[],C=a(4),c=a(90),w=a(447),x=a(463);function _(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter(function(z){return Object.getOwnPropertyDescriptor(e,z).enumerable})),t.push.apply(t,s)}return t}function d(e){for(var i=1;i<arguments.length;i++){var t=arguments[i]!=null?arguments[i]:{};i%2?_(Object(t),!0).forEach(function(s){Object(C.a)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}var j={components:{PageLoader:w.default,ResizeImg:x.default},head(){return{title:"Home"}},computed:d(d({},Object(c.c)("news",["recentNews"])),Object(c.c)("team",["coordinators"])),created(){this.setRecentNewsRef(),this.setTeamRef()},methods:d(d({},Object(c.b)("news",["setRecentNewsRef"])),Object(c.b)("team",["setTeamRef"]))},g=j,f=a(491),O=a(98),r=a(128),p=a.n(r),v=a(207),R=a(122),P=a(209),o=a(406),u=a(426),h=a(441),y=a(151),V=a(126),M=a(203),I=a(428),A=Object(O.a)(g,l,m,!1,null,"6a792a98",null),E=n.default=A.exports;p()(A,{VAvatar:v.a,VBtn:R.a,VCard:P.a,VCardActions:o.a,VCardText:o.b,VCardTitle:o.c,VCol:u.a,VContainer:h.a,VIcon:y.a,VImg:V.a,VProgressCircular:M.a,VRow:I.a})}}]);
