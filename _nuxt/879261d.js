(window.webpackJsonp=window.webpackJsonp||[]).push([[17,2,4,6,8,9],{272:function(t,e,n){"use strict";n.r(e);var o=n(53),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{staticClass:"btn btn-secondary",on:{click:function(e){return t.$router.back()}}},[n("font-awesome-icon",{attrs:{icon:"chevron-left"}}),t._v(" "),t._t("default",(function(){return[t._v("Back")]}))],2)])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var o={props:{to:String}},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-link",{staticClass:"btn btn-success btn-lg",attrs:{to:t.to}},[t._t("default",(function(){return[t._v("Next")]}))],2)}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{tools:{PasswordGuesser:{title:"Password Guesser",description:"Attempt to log in by trying lots of different passwords from a database",handler:this.onPasswordGuesser,icon:"unlock"},WebScanner:{title:"Web Scanner",description:"Scan a public web server for vulnerabilities",details:"port scan, unpatched operating system or web server",handler:this.onWebScanner,icon:"globe"},DeviceScanner:{title:"Device Scanner",description:"Scan a server, printer or IoT device for vulnerabilities",details:"port scan, unpatched operating system or firmware, vulnerable apps",handler:this.onDeviceScanner,icon:"laptop-code"},WifiScanner:{title:"WiFi Scanner",description:"Look for visible wifi networks",handler:this.onWifiScanner,icon:"wifi"},NetworkMapper:{title:"Network Mapper",description:"Scan a network to see what devices are on it",handler:this.onNetworkMapper,icon:"network-wired"}}}},props:{onPasswordGuesser:Function,onWebScanner:Function,onDeviceScanner:Function,onWifiScanner:Function,onNetworkMapper:Function}},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-4 col-xl-3 float-md-right pr-0"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("\n      Toolkit "),n("b-link",{staticClass:"float-right",attrs:{to:"/tools"}},[n("font-awesome-icon",{attrs:{icon:"info"}})],1)],1),t._v(" "),n("ul",{staticClass:"list-group list-group-flush"},t._l(t.tools,(function(e,o){return n("li",{key:o,class:"list-group-item "+(e.handler?"":"text-muted bg-light")},[n("b-button",{staticClass:"float-right ml-5",attrs:{id:o,variant:e.handler?"success":"secondary",disabled:!e.handler},on:{click:e.handler}},[t._v("Use\n        ")]),t._v(" "),n("strong",[t._v(t._s(e.title))]),t._v(" "),n("font-awesome-icon",{attrs:{icon:e.icon}}),n("br"),t._v(" "),n("small",[t._v(t._s(e.description))])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);n(213),n(33),n(19);var o={props:{started:{type:Boolean,default:!1},name:{type:String,default:"Scan"},max:{type:Number,default:5}},data:function(){return{progress:0}},computed:{scanning:function(){return this.progress>0&&this.progress<this.max},complete:function(){return this.progress>=this.max}},methods:{onShow:function(){if(!(this.progress>0))var t=this.max+Math.ceil(5*Math.random()),e=setInterval(function(){this.progress++,this.progress>=t&&(clearInterval(e),this.$emit("scan-complete",this.name))}.bind(this),this.$nuxt.context.isDev?100:1e3)}}},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.started?n("div",[n("b-progress",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onShow,expression:"onShow"}],staticClass:"mb-3",attrs:{max:t.max,height:"2rem"}},[n("b-progress-bar",{attrs:{value:t.progress}},[t.scanning?t._t("default",(function(){return[t._v("Scanning...")]})):n("span",[t._v(t._s(t.name)+" Complete")])],2)],1),t._v(" "),t.scanning?t._t("during"):t._e()],2):n("div",[t._t("before",(function(){return[t._v("Scan not started")]}))],2),t._v(" "),t.complete?n("div",[t._t("after",(function(){return[t._v("Scan Complete")]}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);n(19);var o={props:{name:String},methods:{onShow:function(){this.$store.commit("addHole",this.name)}}},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onShow,expression:"onShow"}]},[o("p",[o("img",{attrs:{src:n(214),alt:t.name,title:t.name,height:"40rem"}}),t._v(" "),t._t("default",(function(){return[o("strong",[t._v("Congratulations!")]),t._v(" You found a hole in the "),o("strong",[t._v(t._s(t.name))]),t._v(".")]}))],2)])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{scanning:!1}}},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("ToolKit",{attrs:{onDeviceScanner:function(){return t.scanning=!0}}}),e._v(" "),o("h1",[e._v("Phishing Email Sent")]),e._v(" "),o("p",[e._v("Your email might sit in someone's inbox for a few hours before they open it, so you get up from your desk and\n    find something to much on. All this talk of donuts is making you crave one. No donuts here sadly.")]),e._v(" "),o("p",[e._v("When you get back to your desk, you get a notification: It worked!")]),e._v(" "),o("HoleFound",{attrs:{name:"Phishing Email Opened"}},[o("strong",[e._v("Congratulations!")]),e._v(" You found a hole in their security ("),o("strong",[e._v("Phishing Email Opened")]),e._v(")\n  ")]),e._v(" "),o("p",[e._v("Someone opened your document (fail number 1). Their computer allowed the malware to run (fail number 2). The\n    computer was not fully up to date and not protected from the custom malware you placed in your document (fail\n    number 3).")]),e._v(" "),o("p",[e._v("You now have remote access to their computer")]),e._v(" "),o("RunScan",{attrs:{started:e.scanning,max:"3"},scopedSlots:e._u([{key:"before",fn:function(){return[o("p",{staticClass:"text-muted"},[e._v("Use the Device Scanner to see what options you have")])]},proxy:!0},{key:"after",fn:function(){return[o("HoleFound",{attrs:{name:"Phishing Malware Infection"}},[o("strong",[e._v("Congratulations!")]),e._v(" Your phishing email worked: ("),o("strong",[e._v("Phishing Malware Infection")]),e._v(")\n      ")]),e._v(" "),o("p",[e._v("When the device scanner finishes, you know a lot more than you wanted to know about the person who opened the\n        document. They work in the marketing department, have 3 kids and an ugly dog, and enjoy donut racing (a sport\n        you never new existed until now). You know their car registration, when the kids sports events are, and the\n        names of their neighbours. Too much personal information on a work computer.")]),e._v(" "),o("p",[e._v("You also found some outdated software that gives you access to the rest of the office network. Nice.")]),e._v(" "),o("p",[o("NextButton",{attrs:{to:"/network"}},[e._v("Browse Office Network")])],1)]},proxy:!0}])}),e._v(" "),o("BackButton")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ToolKit:n(274).default,HoleFound:n(276).default,NextButton:n(273).default,RunScan:n(275).default,BackButton:n(272).default})}}]);