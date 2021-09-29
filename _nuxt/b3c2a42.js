(window.webpackJsonp=window.webpackJsonp||[]).push([[36,2,6,8,9],{1320:function(t,e,n){"use strict";n.r(e);var r=n(53),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{staticClass:"btn btn-secondary",on:{click:function(e){return t.$router.back()}}},[n("font-awesome-icon",{attrs:{icon:"chevron-left"}}),t._v(" "),t._t("default",(function(){return[t._v("Back")]}))],2)])}),[],!1,null,null,null);e.default=component.exports},1321:function(t,e,n){"use strict";n.r(e);var r={props:{to:String}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-link",{staticClass:"btn btn-success btn-lg",attrs:{to:t.to}},[t._t("default",(function(){return[t._v("Next")]}))],2)}),[],!1,null,null,null);e.default=component.exports},1322:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tools:{PasswordGuesser:{title:"Password Guesser",description:"Attempt to log in by trying lots of different passwords from a database",handler:this.onPasswordGuesser,icon:"unlock"},WebScanner:{title:"Web Scanner",description:"Scan a public web server for vulnerabilities",details:"port scan, unpatched operating system or web server",handler:this.onWebScanner,icon:"globe"},DeviceScanner:{title:"Device Scanner",description:"Scan a server, printer or IoT device for vulnerabilities",details:"port scan, unpatched operating system or firmware, vulnerable apps",handler:this.onDeviceScanner,icon:"laptop-code"},WifiScanner:{title:"WiFi Scanner",description:"Look for visible wifi networks",handler:this.onWifiScanner,icon:"wifi"},NetworkMapper:{title:"Network Mapper",description:"Scan a network to see what devices are on it",handler:this.onNetworkMapper,icon:"network-wired"}}}},props:{onPasswordGuesser:Function,onWebScanner:Function,onDeviceScanner:Function,onWifiScanner:Function,onNetworkMapper:Function}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-4 col-xl-3 float-md-right pr-0"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("\n      Toolkit "),n("b-link",{staticClass:"float-right",attrs:{to:"/tools"}},[n("font-awesome-icon",{attrs:{icon:"info"}})],1)],1),t._v(" "),n("ul",{staticClass:"list-group list-group-flush"},t._l(t.tools,(function(e,r){return n("li",{key:r,class:"list-group-item "+(e.handler?"":"text-muted bg-light")},[n("b-button",{staticClass:"float-right ml-5",attrs:{id:r,variant:e.handler?"success":"secondary",disabled:!e.handler},on:{click:e.handler}},[t._v("Use\n        ")]),t._v(" "),n("strong",[t._v(t._s(e.title))]),t._v(" "),n("font-awesome-icon",{attrs:{icon:e.icon}}),n("br"),t._v(" "),n("small",[t._v(t._s(e.description))])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},1323:function(t,e,n){"use strict";n.r(e);n(215),n(33),n(19);var r={props:{started:{type:Boolean,default:!1},name:{type:String,default:"Scan"},max:{type:Number,default:5}},data:function(){return{progress:0}},computed:{scanning:function(){return this.progress>0&&this.progress<this.max},complete:function(){return this.progress>=this.max}},methods:{onShow:function(){if(!(this.progress>0))var t=this.max+Math.ceil(5*Math.random()),e=setInterval(function(){this.progress++,this.progress>=t&&(clearInterval(e),this.$emit("scan-complete",this.name))}.bind(this),this.$nuxt.context.isDev?100:1e3)}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.started?n("div",[n("b-progress",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onShow,expression:"onShow"}],staticClass:"mb-3",attrs:{max:t.max,height:"2rem"}},[n("b-progress-bar",{attrs:{value:t.progress}},[t.scanning?t._t("default",(function(){return[t._v("Scanning...")]})):n("span",[t._v(t._s(t.name)+" Complete")])],2)],1),t._v(" "),t.scanning?t._t("during"):t._e()],2):n("div",[t._t("before",(function(){return[t._v("Scan not started")]}))],2),t._v(" "),t.complete?n("div",[t._t("after",(function(){return[t._v("Scan Complete")]}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},1354:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scanning:!1}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("ToolKit",{attrs:{onWebScanner:function(){return t.scanning=!0}}}),e._v(" "),r("h1",[e._v("Web Server")]),e._v(" "),e._m(0),e._v(" "),r("RunScan",{attrs:{started:e.scanning},scopedSlots:e._u([{key:"before",fn:function(){return[r("p",{staticClass:"text-muted"},[e._v("Use the Web Scanner")])]},proxy:!0},{key:"after",fn:function(){return[r("p",[e._v("The scanner finds ordinary web server software as you'd expect.")]),e._v(" "),r("p",[e._v("Interesting! The scanner also finds that there is database software installed on the web server, and that the\n        database is accessible from the network, perhaps so tools on other computers can generate reports easily.")]),e._v(" "),r("p",[r("NextButton",{attrs:{to:"/network/database"}},[e._v("Examine Database")])],1)]},proxy:!0}])}),e._v(" "),r("BackButton")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("You visit the web server with a web browser. Looks like it needs a username and password to get in the front\n    door, which is good. Looks like an "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Intranet"}},[t._v("intranet")]),t._v(". Not much else to\n    see. It is time to use the Web Scanner to find a back way in.")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ToolKit:n(1322).default,NextButton:n(1321).default,RunScan:n(1323).default,BackButton:n(1320).default})}}]);