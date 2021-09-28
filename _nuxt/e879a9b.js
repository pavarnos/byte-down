(window.webpackJsonp=window.webpackJsonp||[]).push([[20,2,4,6,7,8],{270:function(e,t,n){"use strict";n.r(t);var r=n(53),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{staticClass:"btn btn-secondary",on:{click:function(t){return e.$router.back()}}},[n("font-awesome-icon",{attrs:{icon:"chevron-left"}}),e._v(" "),e._t("default",(function(){return[e._v("Back")]}))],2)])}),[],!1,null,null,null);t.default=component.exports},271:function(e,t,n){"use strict";n.r(t);var r={props:{to:String}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("b-link",{staticClass:"btn btn-success btn-lg",attrs:{to:e.to}},[e._t("default",(function(){return[e._v("Next")]}))],2)}),[],!1,null,null,null);t.default=component.exports},272:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{tools:{PasswordGuesser:{title:"Password Guesser",description:"Attempt to log in by trying lots of different passwords from a database",handler:this.onPasswordGuesser,icon:"unlock"},WebScanner:{title:"Web Scanner",description:"Scan a public web server for vulnerabilities",details:"port scan, unpatched operating system or web server",handler:this.onWebScanner,icon:"globe"},DeviceScanner:{title:"Device Scanner",description:"Scan a server, printer or IoT device for vulnerabilities",details:"port scan, unpatched operating system or firmware, vulnerable apps",handler:this.onDeviceScanner,icon:"laptop-code"},WifiScanner:{title:"WiFi Scanner",description:"Look for visible wifi networks",handler:this.onWifiScanner,icon:"wifi"},NetworkMapper:{title:"Network Mapper",description:"Scan a network to see what devices are on it",handler:this.onNetworkMapper,icon:"network-wired"}}}},props:{onPasswordGuesser:Function,onWebScanner:Function,onDeviceScanner:Function,onWifiScanner:Function,onNetworkMapper:Function}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-4 col-xl-3 float-md-right"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[e._v("\n      Toolkit "),n("b-link",{staticClass:"float-right",attrs:{to:"/tools"}},[n("font-awesome-icon",{attrs:{icon:"info"}})],1)],1),e._v(" "),n("ul",{staticClass:"list-group list-group-flush"},e._l(e.tools,(function(t,r){return n("li",{key:r,class:"list-group-item "+(t.handler?"":"text-muted bg-light")},[n("b-button",{staticClass:"float-right ml-5",attrs:{id:r,variant:t.handler?"success":"secondary",disabled:!t.handler},on:{click:t.handler}},[e._v("Use\n        ")]),e._v(" "),n("strong",[e._v(e._s(t.title))]),e._v(" "),n("font-awesome-icon",{attrs:{icon:t.icon}}),n("br"),e._v(" "),n("small",[e._v(e._s(t.description))])],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports},273:function(e,t,n){"use strict";n.r(t);n(211),n(33),n(19);var r={props:{started:{type:Boolean,default:!1},name:{type:String,default:"Scan"},max:{type:Number,default:10}},data:function(){return{progress:0}},computed:{scanning:function(){return this.progress>0&&this.progress<this.max},complete:function(){return this.progress>=this.max}},methods:{onShow:function(){if(!(this.progress>0))var e=setInterval(function(){this.progress++,this.progress>=this.max&&(clearInterval(e),this.$emit("scan-complete",this.name))}.bind(this),this.$nuxt.context.isDev?100:1e3)}}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.started?n("div",[n("b-progress",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.onShow,expression:"onShow"}],staticClass:"mb-3",attrs:{max:e.max,height:"2rem"}},[n("b-progress-bar",{attrs:{value:e.progress}},[e.scanning?e._t("default",(function(){return[e._v("Scanning...")]})):n("span",[e._v(e._s(e.name)+" Complete")])],2)],1),e._v(" "),e.scanning?e._t("during"):e._e()],2):n("div",[e._t("before",(function(){return[e._v("Scan not started")]}))],2),e._v(" "),e.complete?n("div",[e._t("after",(function(){return[e._v("Scan Complete")]}))],2):e._e()])}),[],!1,null,null,null);t.default=component.exports},274:function(e,t,n){"use strict";n.r(t);n(19);var r={props:{name:String},methods:{onShow:function(){this.$store.commit("addHole",this.name)}}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.onShow,expression:"onShow"}]},[r("p",[r("img",{attrs:{src:n(212),alt:e.name,title:e.name,height:"40rem"}}),e._v(" "),e._t("default",(function(){return[r("strong",[e._v("Congratulations!")]),e._v(" You found a hole in the "),r("strong",[e._v(e._s(e.name))]),e._v(".")]}))],2)])}),[],!1,null,null,null);t.default=component.exports},293:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{scanningWeb:!1,scanningServer:!1}}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("ToolKit",{attrs:{onWebScanner:function(){return e.scanningWeb=!0},onDeviceScanner:function(){return e.scanningServer=!0}}}),t._v(" "),r("h1",[t._v("Web Site")]),t._v(" "),t._m(0),t._v(" "),r("p",[t._v("Focus! You remind you self to focus on the job...")]),t._v(" "),r("p",[t._v("Seems like there is not much of interest on the publicly visible part of the web site itself. Time go get out\n    some tools and dig around inside.")]),t._v(" "),r("p",[t._v("A web site is usually made of three parts:")]),t._v(" "),t._m(1),t._v(" "),r("RunScan",{attrs:{started:t.scanningWeb},scopedSlots:t._u([{key:"before",fn:function(){return[r("p",{staticClass:"text-muted"},[t._v("Try the Web Scanner to poke at the software")])]},proxy:!0},{key:"after",fn:function(){return[r("HoleFound",{attrs:{name:"Web Site"}}),t._v(" "),r("p",[t._v("Wordpress is a very popular tool for building web sites, with many useful plugins. This makes it a big target\n        too: either wordpress itself or any plugins the web site has installed.")]),t._v(" "),r("p",[t._v("The scanner found a hole in one of the plugins that displays a calendar of events. The site administrator\n        should have kept the plugins up to date and installed a security plugin which can block these kinds of\n        attacks.\n        The hole gives us access to the user account that wordpress is installed in. You can change any file you like,\n        or upload new files: you totally own the web site.\n      ")]),t._v(" "),r("p",[r("NextButton",{attrs:{to:"/digital/web-server"}},[t._v("Explore User Account")])],1)]},proxy:!0}])}),t._v(" "),r("RunScan",{attrs:{started:t.scanningServer},scopedSlots:t._u([{key:"before",fn:function(){return[r("p",{staticClass:"text-muted"},[t._v("Try the Device Scanner to poke at the web server")])]},proxy:!0},{key:"after",fn:function(){return[r("p",[t._v("The Device Scanner tries a number of different ways to get into the server. No luck this time.")]),t._v(" "),r("p",[t._v("Some companies use their own servers to host their public web sites. Risky. These can be much easier to get\n        in to because it takes a lot of time keep up with the maintenance, so it doesn't always get done. A proper web\n        hosting company has rooms full of smart people available 24/7 to fix new hacks whenever they come out.")]),t._v(" "),r("p",[t._v("Looks like this server is well run by a professional company who do this as their main business. They\n        have invested deeply in security. No holes here that we can use.")])]},proxy:!0}])}),t._v(" "),r("BackButton")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You visit "),n("em",[e._v("donuts.govt.nz")]),e._v(" on your web browser. Looks pretty boring: annual report blah blah governance\n    structures blah strategic initiative blah blah blah board members yawn... Oh wait. There are some pictures of\n    donuts. They do look good! Mmmmm!")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("The "),n("strong",[e._v("content")]),e._v(": the text and pictures you can see as you browse")]),e._v(" "),n("li",[e._v("The "),n("strong",[e._v("software")]),e._v(": a tool that knows how to get the correct text and pictures for each page from a\n      database and show it to you when you ask\n    ")]),e._v(" "),n("li",[e._v("The "),n("strong",[e._v("server")]),e._v(": a computer somewhere in the internet that runs the software and stores the\n      content until it is needed\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ToolKit:n(272).default,HoleFound:n(274).default,NextButton:n(271).default,RunScan:n(273).default,BackButton:n(270).default})}}]);