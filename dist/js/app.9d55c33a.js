(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"839fb6d4"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1355:function(t,e,a){},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("Home")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-app",{attrs:{id:"inspire"}},[a("v-card",{attrs:{color:"light-blue",dark:""}},[a("v-img",{attrs:{height:"200",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}}),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[a("v-text-field",{attrs:{label:"Amount",prefix:"$",filled:"",color:"blue-grey lighten-2",rules:t.amountRules},model:{value:t.newAmount,callback:function(e){t.newAmount=e},expression:"newAmount"}})],1),a("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[a("v-combobox",{attrs:{items:t.events,"item-text":"event",label:"Event",filled:"",color:"blue-grey lighten-2",rules:t.eventRules,required:""},model:{value:t.newEvent,callback:function(e){t.newEvent=e},expression:"newEvent"}})],1),a("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[a("v-combobox",{attrs:{items:t.quadrants,"item-text":"quadrant",label:"Importance",filled:"",color:"blue-grey lighten-2",rules:t.colorRules,required:""},model:{value:t.newColor,callback:function(e){t.newColor=e},expression:"newColor"}})],1),a("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px",filled:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Picker without buttons","prepend-icon":"event",readonly:"",rules:t.dateRules,required:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[a("v-date-picker",{on:{input:function(e){t.menu2=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-textarea",{staticClass:"mx-2",attrs:{label:"Note",rows:"1","prepend-icon":"comment"},model:{value:t.newDetail,callback:function(e){t.newDetail=e},expression:"newDetail"}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-col",{attrs:{cols:"12",sm:"2"}},[a("Chart")],1),a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-btn",{attrs:{color:"yellow darken-4"},on:{click:t.submitCard}},[a("v-icon",{attrs:{left:""}},[t._v("add")]),t._v(" submit ")],1)],1),a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" Reset Form ")])],1)],1)],1),a("HelloWorld")],1)],1)},i=[],c=a("5530"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h2",{staticClass:"ma-12"},[t._v("Total spent by now: $ "+t._s(t.countCards))]),a("v-divider",{staticClass:"mx-4",attrs:{inset:t.inset}}),t._l(t.lists,(function(e,n){return a("div",{key:e.id,staticClass:"ma-12"},[a("v-card",{staticClass:"mx-auto",attrs:{color:e.color,dark:"","max-width":"800"}},[a("v-card-title",{},[a("span",{staticClass:"title font-weight-light mr-12"},[t._v(t._s(e.date))]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function(n){var s=n.on;return[a("span",t._g({staticClass:"justify-end"},s),[a("v-icon",{attrs:{large:"",left:""}},[t._v(t._s(e.icon))])],1)]}}],null,!0)},[a("span",[t._v(t._s(e.event))])])],1),a("v-row",[a("v-col",{staticClass:"justify-center",attrs:{cols:"12",sm:"12"}},[a("v-card-text",{staticClass:"headline font-weight-bold text-center"},[t._v(' " '+t._s(e.details)+' " ')]),a("v-card-text",{staticClass:"headline text-center"},[t._v(" And it cost me : "),a("v-icon",[t._v(" attach_money ")]),a("span",{staticClass:"title font-weight-light mr-12"},[t._v(t._s(e.amount))])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{dark:""}}),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{staticClass:"ma-2",attrs:{small:"",depressed:"",color:"cyan"},on:{click:function(e){return t.removeCard(n)}}},[t._v("REMOVE")])],1)],1)],1)}))],2)},u=[],d=a("2f62"),f={data:function(){return{}},computed:Object(c["a"])(Object(c["a"])({},Object(d["d"])(["lists"])),Object(d["b"])(["countCards"])),methods:Object(c["a"])(Object(c["a"])({},Object(d["c"])(["REMOVE_CARD"])),{},{removeCard:function(t){this.REMOVE_CARD(t)}})},m=f,v=(a("7d5b"),a("2877")),b=a("6544"),p=a.n(b),j=a("8336"),h=a("b0af"),g=a("99d9"),w=a("62ad"),y=a("a523"),k=a("ce7e"),C=a("132d"),x=a("0fd9"),_=a("2fa4"),D=a("3a2f"),V=Object(v["a"])(m,l,u,!1,null,null,null),O=V.exports;p()(V,{VBtn:j["a"],VCard:h["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:w["a"],VContainer:y["a"],VDivider:k["a"],VIcon:C["a"],VRow:x["a"],VSpacer:_["a"],VTooltip:D["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{color:"light-green",dark:""}},n),[t._v("financial analysis")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v("Chart Report")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.reDraw()}}},[t._v("Reload")])],1)],1),a("v-divider"),a("v-container",{attrs:{"max-width":"500","md-4":""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("imporPie",{attrs:{"chart-data":t.imporPieData}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("eventPie",{attrs:{"chart-data":t.eventPieData}})],1)],1)],1)],1)],1)],1)],1)},A=[],z=a("1fca"),q=z["b"].reactiveProp,P={name:"imporPie",extends:z["a"],mixins:[q],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},R=z["b"].reactiveProp,F={name:"eventPie",extends:z["a"],mixins:[R],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},S=a("5f99"),T=a("ce10"),I=[];for(var M in T.lists)I.push(T.lists[M].quadrant);var $=[];for(var N in S.lists)$.push(S.lists[N].event);var B={data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1,imporPieData:{},eventPieData:{}}},computed:Object(c["a"])({},Object(d["b"])(["chartEventData","chartQuadrantData"])),mounted:function(){this.reDraw()},methods:{reDraw:function(){this.eventPieData={labels:I,datasets:[{label:"",backgroundColor:["#F44336","#FF9800","#2196F3","#4CAF50"],data:this.chartQuadrantData}],options:{}},this.imporPieData={labels:$,datasets:[{label:"",backgroundColor:["#FFC107","#FFEB3B","#E91E63","#CDDC39","#009688","#00BCD4","#03A9F4","#3F51B5"],data:this.chartEventData}],options:{}}}},components:{imporPie:P,eventPie:F}},L=B,W=a("169a"),H=a("71d9"),J=a("2a7f"),Q=Object(v["a"])(L,E,A,!1,null,null,null),U=Q.exports;p()(Q,{VBtn:j["a"],VCard:h["a"],VCol:w["a"],VContainer:y["a"],VDialog:W["a"],VDivider:k["a"],VIcon:C["a"],VRow:x["a"],VSpacer:_["a"],VToolbar:H["a"],VToolbarItems:J["a"],VToolbarTitle:J["b"]});var G={name:"home",components:{HelloWorld:O,Chart:U},data:function(){return{valid:!0,newAmount:"",amountRules:[function(t){return!!t||"Amount is required"},function(t){return/^[0-9]/.test(t)||"Amount must be a number"}],newEvent:"",eventRules:[function(t){return!!t||"Event is required"}],newColor:"",colorRules:[function(t){return!!t||"Importance is required"}],date:(new Date).toISOString().substr(0,10),dateRules:[function(t){return!!t||"Date is required"}],events:S.lists,quadrants:T.lists,newDetail:"",menu2:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(d["d"])(["lists"])),{},{amount:function(){return parseInt(this.newAmount)}}),methods:Object(c["a"])(Object(c["a"])({},Object(d["c"])(["ADD_CARD"])),{},{reset:function(){this.$refs.form.reset()},submitCard:function(){var t=parseInt(this.newAmount);if(this.$refs.form.validate()&&(this.snackbar=!0),""==this.newEvent||""==this.newColor||1==isNaN(t));else{var e=[t,this.newDetail,this.newColor.color,this.newEvent.icon,this.date,this.newEvent.event];this.ADD_CARD(e)}}})},K=G,X=a("7496"),Y=a("2b5d"),Z=a("2e4b"),tt=a("4bd4"),et=a("adda"),at=a("e449"),nt=a("8654"),st=a("a844"),rt=Object(v["a"])(K,o,i,!1,null,null,null),ot=rt.exports;p()(rt,{VApp:X["a"],VBtn:j["a"],VCard:h["a"],VCardActions:g["a"],VCol:w["a"],VCombobox:Y["a"],VContainer:y["a"],VDatePicker:Z["a"],VDivider:k["a"],VForm:tt["a"],VIcon:C["a"],VImg:et["a"],VMenu:at["a"],VRow:x["a"],VSpacer:_["a"],VTextField:nt["a"],VTextarea:st["a"]});var it={name:"App",components:{Home:ot},data:function(){return{}},metaInfo:{title:"便利貼",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2,user-scalable=yes"},{property:"og:title",content:"便利貼"},{property:"og:description",content:"包含記事、類別、chart統計的便利貼系統"},{property:"og:site_name",content:"便利貼"},{property:"og:image:url",content:"favicon.ico"},{property:"og:locale",content:"zh_TW"},{property:"og:url",content:"http://www.accountingapp.com/"}]}},ct=it,lt=a("a75b"),ut=Object(v["a"])(ct,s,r,!1,null,null,null),dt=ut.exports;p()(ut,{VApp:X["a"],VContent:lt["a"]});a("d3b7"),a("3ca3"),a("ddb0");var ft=a("8c4f");n["a"].use(ft["a"]);var mt=[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],vt=new ft["a"]({routes:mt}),bt=vt;a("a434");n["a"].use(d["a"]);var pt=new d["a"].Store({state:{lists:[{amount:1e3,event:"Lover&Friends",icon:"favorite",quadrant:"quadrant1",color:"red",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.",date:"2019-8-13"},{amount:2500,event:"Work",icon:"work",quadrant:"quadrant2",color:"orange",details:"second charge",date:"2019-6-3"}]},getters:{countCards:function(t){var e=0;for(var a in t.lists)e+=t.lists[a].amount;return e},chartEventData:function(t){var e=[],a=0,n=0,s=0,r=0,o=0,i=0,c=0,l=0;for(var u in t.lists)"Education"==t.lists[u].event?a+=t.lists[u].amount:"Work"==t.lists[u].event?n+=t.lists[u].amount:"Lover&Friends"==t.lists[u].event?s+=t.lists[u].amount:"Daily"==t.lists[u].event?r+=t.lists[u].amount:"Entertainment"==t.lists[u].event?o+=t.lists[u].amount:"Interest"==t.lists[u].event?i+=t.lists[u].amount:"Exercises"==t.lists[u].event?c+=t.lists[u].amount:l+=t.lists[u].amount;return e.push(a,n,s,r,o,i,c,l),e},chartQuadrantData:function(t){var e=[],a=0,n=0,s=0,r=0;for(var o in t.lists)"red"==t.lists[o].color?a+=t.lists[o].amount:"orange"==t.lists[o].color?n+=t.lists[o].amount:"blue"==t.lists[o].color?s+=t.lists[o].amount:r+=t.lists[o].amount;return e.push(a,n,s,r),e}},mutations:{ADD_CARD:function(t,e){t.lists.push({amount:e[0],icon:e[3],color:e[2],details:e[1],date:e[4],event:e[5]})},REMOVE_CARD:function(t,e){t.lists.splice(e,1)}},actions:{},modules:{}}),jt=a("f309");n["a"].use(jt["a"]);var ht=new jt["a"]({icons:{iconfont:"mdiSvg"}}),gt=a("58ca");a("d1e78");n["a"].config.productionTip=!1,n["a"].use(gt["a"]),new n["a"]({router:bt,store:pt,vuetify:ht,Meta:gt["a"],render:function(t){return t(dt)}}).$mount("#app")},"5f99":function(t){t.exports=JSON.parse('{"lists":[{"event":"Education","icon":"school"},{"event":"Work","icon":"work"},{"event":"Lover&Friends","icon":"favorite"},{"event":"Daily","icon":"calender_tody"},{"event":"Entertainment","icon":"videogame_asset"},{"event":"Interest","icon":"sentiment_very_satisfied"},{"event":"Exercises","icon":"watch"},{"event":"Others","icon":"edit"}]}')},"7d5b":function(t,e,a){"use strict";a("1355")},ce10:function(t){t.exports=JSON.parse('{"lists":[{"quadrant":"Critical and Immediate","color":"red"},{"quadrant":"Critical but not Immediate","color":"orange"},{"quadrant":"Not Critical but Immediate","color":"blue"},{"quadrant":"Uncategorized","color":"green"}]}')}});
//# sourceMappingURL=app.9d55c33a.js.map