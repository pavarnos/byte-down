(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3,4,5,6],{270:function(t,e,n){"use strict";n.r(e);var r=n(53),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{staticClass:"btn btn-secondary",on:{click:function(e){return t.$router.back()}}},[n("font-awesome-icon",{attrs:{icon:"chevron-left"}}),t._v(" "),t._t("default",(function(){return[t._v("Back")]}))],2)])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r={props:{to:String}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-link",{staticClass:"btn btn-success btn-lg",attrs:{to:t.to}},[t._t("default",(function(){return[t._v("Next")]}))],2)}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tools:{PasswordGuesser:{title:"Password Guesser",description:"Attempt to log in by trying lots of different passwords from a database",handler:this.onPasswordGuesser},WebScanner:{title:"Web Scanner",description:"Scan a public web server for vulnerabilities",details:"port scan, unpatched operating system or web server",handler:this.onWebScanner},DeviceScanner:{title:"Device Scanner",description:"Scan a file server, printer or IoT device for vulnerabilities",details:"port scan, unpatched operating system or firmware, vulnerable apps",handler:this.onDeviceScanner},WifiScanner:{title:"WiFi Scanner",description:"Look for visible wifi networks",handler:this.onWifiScanner},NetworkMapper:{title:"Network Mapper",description:"Scan a network to see what devices are on it",handler:this.onNetworkMapper}}}},props:{onPasswordGuesser:Function,onWebScanner:Function,onDeviceScanner:Function,onWifiScanner:Function,onNetworkMapper:Function}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-3 float-right"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("\n      Toolkit "),n("b-link",{staticClass:"float-right",attrs:{to:"/tools"}},[n("font-awesome-icon",{attrs:{icon:"info"}})],1)],1),t._v(" "),n("ul",{staticClass:"list-group list-group-flush"},t._l(t.tools,(function(e,r){return n("li",{key:r,class:"list-group-item "+(e.handler?"":"text-muted bg-light")},[n("b-button",{staticClass:"float-right ml-5",attrs:{id:r,variant:e.handler?"success":"secondary",disabled:!e.handler},on:{click:e.handler}},[t._v("Use\n        ")]),t._v(" "),n("strong",[t._v(t._s(e.title))]),n("br"),t._v(" "),n("small",[t._v(t._s(e.description))])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);n(19);var r={props:{name:String},methods:{onShow:function(){this.$store.commit("add",this.name)}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onShow,expression:"onShow"}]},[r("p",[r("img",{attrs:{src:n(211),alt:t.name,title:t.name,height:"40rem"}}),t._v(" "),t._t("default",(function(){return[r("strong",[t._v("Congratulations!")]),t._v(" You found a hole in the "),r("strong",[t._v(t._s(t.name))]),t._v(".")]}))],2)])}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);n(212),n(33),n(19);var r={props:{started:{type:Boolean,default:!1},name:{type:String,default:"scan"},max:{type:Number,default:10}},data:function(){return{progress:0}},computed:{scanning:function(){return this.progress>0&&this.progress<this.max},complete:function(){return this.progress>=this.max}},methods:{onShow:function(){if(!(this.progress>0))var t=setInterval(function(){this.progress++,this.progress>=this.max&&(clearInterval(t),this.$emit("scan-complete",this.name))}.bind(this),this.$nuxt.context.isDev?100:1e3)}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.started?n("div",[n("b-progress",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onShow,expression:"onShow"}],staticClass:"mb-3",attrs:{max:t.max,height:"2rem"}},[n("b-progress-bar",{attrs:{value:t.progress}},[t.scanning?t._t("default",(function(){return[t._v("Scanning...")]})):n("span",[t._v("Complete")])],2)],1),t._v(" "),t.scanning?t._t("during"):t._e()],2):n("div",[t._t("before",(function(){return[t._v("Scan not started")]}))],2),t._v(" "),t.complete?n("div",[t._t("after",(function(){return[t._v("Scan Complete")]}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scanning:!1}},methods:{guessPassword:function(){this.scanning=!0}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ToolKit",{attrs:{onPasswordGuesser:t.guessPassword}}),t._v(" "),n("h1",[t._v("Crack Wifi")]),t._v(" "),n("p",[t._v("A few networks look interesting:")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("RunScan",{attrs:{started:t.scanning},scopedSlots:t._u([{key:"before",fn:function(){return[n("p",{staticClass:"text-muted"},[t._v("Use the Password Guesser in your toolkit: click the green Use button on the right")])]},proxy:!0},{key:"during",fn:function(){return[n("p",[t._v("It normally takes a few hours to run the scan because there are so many possibilities...")])]},proxy:!0},{key:"after",fn:function(){return[n("HoleFound",{attrs:{name:"Guest WiFi"}}),t._v(" "),n("p",[t._v('The Dept used a super easy password for one of their networks: "pink-icing". Probably because it is a guest\n        network for visitors to the company. They want a password that is easy to tell people and easy to type. Lets\n        go and see what we can find...')]),t._v(" "),n("p",[t._v("And lets start the password guesser on the "),n("strong",[t._v("ddonut-dinein")]),t._v(" network and leave it running while\n        we explore")]),t._v(" "),n("p",[n("NextButton",{attrs:{to:"/physical/guest-network"}},[t._v("Explore Guest Network")])],1)]},proxy:!0}])}),t._v(" "),n("BackButton")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("strong",[t._v("BRN439EC1")]),t._v(": hmmm... some Brother printers can expose their own wifi networks to supposedly\n      make printing easier. Could be an interesting target if we had more time, but it also could be in any one of the\n      other companies nearby. Maybe later...\n    ")]),t._v(" "),n("li",[n("strong",[t._v("chowdown")]),t._v(": That is the name of the Cafe down the road. Hacking that is not going to help us\n      much at the moment\n    ")]),t._v(" "),n("li",[n("strong",[t._v("top_teeth")]),t._v(": There is a dentist further up the street. Good place for one with all those donuts\n      nearby\n    ")]),t._v(" "),n("li",[n("strong",[t._v("ddonut-takeaway")]),t._v(": this might belong to The Department? Worth investigating...")]),t._v(" "),n("li",[n("strong",[t._v("ddonut-dinein")]),t._v(": this one too")]),t._v(" "),n("li",[n("strong",[t._v("ddonut-factory")]),t._v(": possibly for devices in the factory?")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Lets try "),n("strong",[t._v("ddonut-takeaway")]),t._v(' first. You add some extra words to the password\n    generator: things like "donut", "doughnut", "department", "takeaway", and some other food related terms in case it\n    helps.')])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ToolKit:n(272).default,HoleFound:n(274).default,NextButton:n(271).default,RunScan:n(275).default,BackButton:n(270).default})}}]);