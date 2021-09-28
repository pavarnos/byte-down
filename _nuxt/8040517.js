(window.webpackJsonp=window.webpackJsonp||[]).push([[35,2,4,6,8,9],{272:function(e,t,n){"use strict";n.r(t);var r=n(53),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{staticClass:"btn btn-secondary",on:{click:function(t){return e.$router.back()}}},[n("font-awesome-icon",{attrs:{icon:"chevron-left"}}),e._v(" "),e._t("default",(function(){return[e._v("Back")]}))],2)])}),[],!1,null,null,null);t.default=component.exports},273:function(e,t,n){"use strict";n.r(t);var r={props:{to:String}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("b-link",{staticClass:"btn btn-success btn-lg",attrs:{to:e.to}},[e._t("default",(function(){return[e._v("Next")]}))],2)}),[],!1,null,null,null);t.default=component.exports},274:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{tools:{PasswordGuesser:{title:"Password Guesser",description:"Attempt to log in by trying lots of different passwords from a database",handler:this.onPasswordGuesser,icon:"unlock"},WebScanner:{title:"Web Scanner",description:"Scan a public web server for vulnerabilities",details:"port scan, unpatched operating system or web server",handler:this.onWebScanner,icon:"globe"},DeviceScanner:{title:"Device Scanner",description:"Scan a server, printer or IoT device for vulnerabilities",details:"port scan, unpatched operating system or firmware, vulnerable apps",handler:this.onDeviceScanner,icon:"laptop-code"},WifiScanner:{title:"WiFi Scanner",description:"Look for visible wifi networks",handler:this.onWifiScanner,icon:"wifi"},NetworkMapper:{title:"Network Mapper",description:"Scan a network to see what devices are on it",handler:this.onNetworkMapper,icon:"network-wired"}}}},props:{onPasswordGuesser:Function,onWebScanner:Function,onDeviceScanner:Function,onWifiScanner:Function,onNetworkMapper:Function}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-4 col-xl-3 float-md-right pr-0"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[e._v("\n      Toolkit "),n("b-link",{staticClass:"float-right",attrs:{to:"/tools"}},[n("font-awesome-icon",{attrs:{icon:"info"}})],1)],1),e._v(" "),n("ul",{staticClass:"list-group list-group-flush"},e._l(e.tools,(function(t,r){return n("li",{key:r,class:"list-group-item "+(t.handler?"":"text-muted bg-light")},[n("b-button",{staticClass:"float-right ml-5",attrs:{id:r,variant:t.handler?"success":"secondary",disabled:!t.handler},on:{click:t.handler}},[e._v("Use\n        ")]),e._v(" "),n("strong",[e._v(e._s(t.title))]),e._v(" "),n("font-awesome-icon",{attrs:{icon:t.icon}}),n("br"),e._v(" "),n("small",[e._v(e._s(t.description))])],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports},275:function(e,t,n){"use strict";n.r(t);n(213),n(33),n(19);var r={props:{started:{type:Boolean,default:!1},name:{type:String,default:"Scan"},max:{type:Number,default:5}},data:function(){return{progress:0}},computed:{scanning:function(){return this.progress>0&&this.progress<this.max},complete:function(){return this.progress>=this.max}},methods:{onShow:function(){if(!(this.progress>0))var e=this.max+Math.ceil(5*Math.random()),t=setInterval(function(){this.progress++,this.progress>=e&&(clearInterval(t),this.$emit("scan-complete",this.name))}.bind(this),this.$nuxt.context.isDev?100:1e3)}}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.started?n("div",[n("b-progress",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.onShow,expression:"onShow"}],staticClass:"mb-3",attrs:{max:e.max,height:"2rem"}},[n("b-progress-bar",{attrs:{value:e.progress}},[e.scanning?e._t("default",(function(){return[e._v("Scanning...")]})):n("span",[e._v(e._s(e.name)+" Complete")])],2)],1),e._v(" "),e.scanning?e._t("during"):e._e()],2):n("div",[e._t("before",(function(){return[e._v("Scan not started")]}))],2),e._v(" "),e.complete?n("div",[e._t("after",(function(){return[e._v("Scan Complete")]}))],2):e._e()])}),[],!1,null,null,null);t.default=component.exports},276:function(e,t,n){"use strict";n.r(t);n(19);var r={props:{name:String},methods:{onShow:function(){this.$store.commit("addHole",this.name)}}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.onShow,expression:"onShow"}]},[r("p",[r("img",{attrs:{src:n(214),alt:e.name,title:e.name,height:"40rem"}}),e._v(" "),e._t("default",(function(){return[r("strong",[e._v("Congratulations!")]),e._v(" You found a hole in the "),r("strong",[e._v(e._s(e.name))]),e._v(".")]}))],2)])}),[],!1,null,null,null);t.default=component.exports},305:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{passwordScanning:!1,deviceScanning:!1}}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("ToolKit",{attrs:{onPasswordGuesser:function(){return e.passwordScanning=!0},onDeviceScanner:function(){return e.deviceScanning=!0}}}),t._v(" "),r("h1",[t._v("Virtual Private Network")]),t._v(" "),r("p",[t._v("There are a few things that can go wrong with a VPN. Once you get inside it, you have access to the whole\n    network.")]),t._v(" "),t._m(0),t._v(" "),r("RunScan",{attrs:{started:t.passwordScanning,name:"Password Scan"},scopedSlots:t._u([{key:"before",fn:function(){return[r("p",{staticClass:"text-muted"},[t._v("Use the Password Guesser to try a few VPN usernames and passwords")])]},proxy:!0},{key:"during",fn:function(){return[r("p",[t._v("We don't want to flood the server or it will slow down and someone will notice. Lets just try a few obvious\n        combinations of first name and last name...")])]},proxy:!0},{key:"after",fn:function(){return[r("p",[t._v("No luck. You cautious approach was a good idea for now. You have a lot more information than before, so\n        maybe could try again later if needed.\n      ")])]},proxy:!0}])}),t._v(" "),r("RunScan",{attrs:{started:t.deviceScanning,name:"Device Scan"},scopedSlots:t._u([{key:"before",fn:function(){return[r("p",{staticClass:"text-muted"},[t._v("Use the Device Scanner to probe the VPN server for weaknesses")])]},proxy:!0},{key:"after",fn:function(){return[r("HoleFound",{attrs:{name:"Factory VPN Server"}}),t._v(" "),r("p",[t._v("The VPN software was way out of date. There were a couple of different ways in: a hard coded password\n        from the VPN manufacturer that was published on the web a few months ago;\n        and a flaw in the software that gave us admin access to the server itself.")]),t._v(" "),r("p",[r("NextButton",{attrs:{to:"/network/factory"}},[t._v("Explore Factory Network")])],1)]},proxy:!0}])}),t._v(" "),r("BackButton")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("A VPN user might have a weak username and password. We could establish our own connection to the VPN and try\n      to guess it.\n    ")]),e._v(" "),n("li",[e._v("The VPN server itself may have a weakness: known bugs, weak protocols, or out of date software. The news\n      lately has had many articles about VPN manufacturers with hard coded admin passwords, security flaws in their\n      software, and even deliberate back doors.\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ToolKit:n(274).default,RunScan:n(275).default,HoleFound:n(276).default,NextButton:n(273).default,BackButton:n(272).default})}}]);