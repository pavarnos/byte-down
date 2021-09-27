(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2,4,6,7,8],{270:function(t,e,n){"use strict";n.r(e);var r=n(53),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{staticClass:"btn btn-secondary",on:{click:function(e){return t.$router.back()}}},[n("font-awesome-icon",{attrs:{icon:"chevron-left"}}),t._v(" "),t._t("default",(function(){return[t._v("Back")]}))],2)])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r={props:{to:String}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-link",{staticClass:"btn btn-success btn-lg",attrs:{to:t.to}},[t._t("default",(function(){return[t._v("Next")]}))],2)}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tools:{PasswordGuesser:{title:"Password Guesser",description:"Attempt to log in by trying lots of different passwords from a database",handler:this.onPasswordGuesser},WebScanner:{title:"Web Scanner",description:"Scan a public web server for vulnerabilities",details:"port scan, unpatched operating system or web server",handler:this.onWebScanner},DeviceScanner:{title:"Device Scanner",description:"Scan a server, printer or IoT device for vulnerabilities",details:"port scan, unpatched operating system or firmware, vulnerable apps",handler:this.onDeviceScanner},WifiScanner:{title:"WiFi Scanner",description:"Look for visible wifi networks",handler:this.onWifiScanner},NetworkMapper:{title:"Network Mapper",description:"Scan a network to see what devices are on it",handler:this.onNetworkMapper}}}},props:{onPasswordGuesser:Function,onWebScanner:Function,onDeviceScanner:Function,onWifiScanner:Function,onNetworkMapper:Function}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-3 float-right"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("\n      Toolkit "),n("b-link",{staticClass:"float-right",attrs:{to:"/tools"}},[n("font-awesome-icon",{attrs:{icon:"info"}})],1)],1),t._v(" "),n("ul",{staticClass:"list-group list-group-flush"},t._l(t.tools,(function(e,r){return n("li",{key:r,class:"list-group-item "+(e.handler?"":"text-muted bg-light")},[n("b-button",{staticClass:"float-right ml-5",attrs:{id:r,variant:e.handler?"success":"secondary",disabled:!e.handler},on:{click:e.handler}},[t._v("Use\n        ")]),t._v(" "),n("strong",[t._v(t._s(e.title))]),n("br"),t._v(" "),n("small",[t._v(t._s(e.description))])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);n(211),n(33),n(19);var r={props:{started:{type:Boolean,default:!1},name:{type:String,default:"Scan"},max:{type:Number,default:10}},data:function(){return{progress:0}},computed:{scanning:function(){return this.progress>0&&this.progress<this.max},complete:function(){return this.progress>=this.max}},methods:{onShow:function(){if(!(this.progress>0))var t=setInterval(function(){this.progress++,this.progress>=this.max&&(clearInterval(t),this.$emit("scan-complete",this.name))}.bind(this),this.$nuxt.context.isDev?100:1e3)}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.started?n("div",[n("b-progress",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onShow,expression:"onShow"}],staticClass:"mb-3",attrs:{max:t.max,height:"2rem"}},[n("b-progress-bar",{attrs:{value:t.progress}},[t.scanning?t._t("default",(function(){return[t._v("Scanning...")]})):n("span",[t._v(t._s(t.name)+" Complete")])],2)],1),t._v(" "),t.scanning?t._t("during"):t._e()],2):n("div",[t._t("before",(function(){return[t._v("Scan not started")]}))],2),t._v(" "),t.complete?n("div",[t._t("after",(function(){return[t._v("Scan Complete")]}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);n(19);var r={props:{name:String},methods:{onShow:function(){this.$store.commit("addHole",this.name)}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onShow,expression:"onShow"}]},[r("p",[r("img",{attrs:{src:n(212),alt:t.name,title:t.name,height:"40rem"}}),t._v(" "),t._t("default",(function(){return[r("strong",[t._v("Congratulations!")]),t._v(" You found a hole in the "),r("strong",[t._v(t._s(t.name))]),t._v(".")]}))],2)])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scanning:!1}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("ToolKit",{attrs:{onPasswordGuesser:function(){return t.scanning=!0}}}),e._v(" "),r("h1",[e._v("Database Server")]),e._v(" "),r("p",[e._v("You use some standard tools to poke at the database. Looks like it needs a password to connect.")]),e._v(" "),r("RunScan",{attrs:{started:e.scanning},scopedSlots:e._u([{key:"before",fn:function(){return[r("p",{staticClass:"text-muted"},[e._v("Use the Password Guesser")])]},proxy:!0},{key:"after",fn:function(){return[r("p",[e._v("You log in to the database server with the guessed password. (They really should stop using easy passwords\n        everywhere).\n        There are a number of databases filled with boring admin things. One grabs your attention: you start scrolling\n        though a listing, and find a table called person_preferences.")]),e._v(" "),r("h2",[e._v("You found it!")]),e._v(" "),r("HoleFound",{attrs:{name:"Donut Preference Database"}},[r("strong",[e._v("Congratulations!")]),e._v(" You found the "),r("strong",[e._v("Donut Preference Database")])]),e._v(" "),r("p",[e._v("The national donut preference database is right here!")]),e._v(" "),r("p",[e._v("Well done. Task complete.")]),e._v(" "),r("p",[e._v("There are many more\n        "),r("NuxtLink",{attrs:{to:"/holes"}},[e._v("holes")]),e._v("\n        to discover. You can stop here if you want, or you could see how many more holes you can find (to make your\n        report to The Department) even more impressive.\n        Click the Re-Start button below to go back to the beginning and try a different way through.\n      ")],1),e._v(" "),r("p",[r("NextButton",{attrs:{to:"/"}},[e._v("Re-Start")])],1)]},proxy:!0}])}),e._v(" "),r("BackButton")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ToolKit:n(272).default,HoleFound:n(274).default,NextButton:n(271).default,RunScan:n(273).default,BackButton:n(270).default})}}]);