(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,4,6,8,9],{1320:function(e,t,n){"use strict";n.r(t);var r=n(53),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{staticClass:"btn btn-secondary",on:{click:function(t){return e.$router.back()}}},[n("font-awesome-icon",{attrs:{icon:"chevron-left"}}),e._v(" "),e._t("default",(function(){return[e._v("Back")]}))],2)])}),[],!1,null,null,null);t.default=component.exports},1321:function(e,t,n){"use strict";n.r(t);var r={props:{to:String}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("b-link",{staticClass:"btn btn-success btn-lg",attrs:{to:e.to}},[e._t("default",(function(){return[e._v("Next")]}))],2)}),[],!1,null,null,null);t.default=component.exports},1322:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{tools:{PasswordGuesser:{title:"Password Guesser",description:"Attempt to log in by trying lots of different passwords from a database",handler:this.onPasswordGuesser,icon:"unlock"},WebScanner:{title:"Web Scanner",description:"Scan a public web server for vulnerabilities",details:"port scan, unpatched operating system or web server",handler:this.onWebScanner,icon:"globe"},DeviceScanner:{title:"Device Scanner",description:"Scan a server, printer or IoT device for vulnerabilities",details:"port scan, unpatched operating system or firmware, vulnerable apps",handler:this.onDeviceScanner,icon:"laptop-code"},WifiScanner:{title:"WiFi Scanner",description:"Look for visible wifi networks",handler:this.onWifiScanner,icon:"wifi"},NetworkMapper:{title:"Network Mapper",description:"Scan a network to see what devices are on it",handler:this.onNetworkMapper,icon:"network-wired"}}}},props:{onPasswordGuesser:Function,onWebScanner:Function,onDeviceScanner:Function,onWifiScanner:Function,onNetworkMapper:Function}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-4 col-xl-3 float-md-right pr-0"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[e._v("\n      Toolkit "),n("b-link",{staticClass:"float-right",attrs:{to:"/tools"}},[n("font-awesome-icon",{attrs:{icon:"info"}})],1)],1),e._v(" "),n("ul",{staticClass:"list-group list-group-flush"},e._l(e.tools,(function(t,r){return n("li",{key:r,class:"list-group-item "+(t.handler?"":"text-muted bg-light")},[n("b-button",{staticClass:"float-right ml-5",attrs:{id:r,variant:t.handler?"success":"secondary",disabled:!t.handler},on:{click:t.handler}},[e._v("Use\n        ")]),e._v(" "),n("strong",[e._v(e._s(t.title))]),e._v(" "),n("font-awesome-icon",{attrs:{icon:t.icon}}),n("br"),e._v(" "),n("small",[e._v(e._s(t.description))])],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports},1323:function(e,t,n){"use strict";n.r(t);n(215),n(33),n(19);var r={props:{started:{type:Boolean,default:!1},name:{type:String,default:"Scan"},max:{type:Number,default:5}},data:function(){return{progress:0}},computed:{scanning:function(){return this.progress>0&&this.progress<this.max},complete:function(){return this.progress>=this.max}},methods:{onShow:function(){if(!(this.progress>0))var e=this.max+Math.ceil(5*Math.random()),t=setInterval(function(){this.progress++,this.progress>=e&&(clearInterval(t),this.$emit("scan-complete",this.name))}.bind(this),this.$nuxt.context.isDev?100:1e3)}}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.started?n("div",[n("b-progress",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.onShow,expression:"onShow"}],staticClass:"mb-3",attrs:{max:e.max,height:"2rem"}},[n("b-progress-bar",{attrs:{value:e.progress}},[e.scanning?e._t("default",(function(){return[e._v("Scanning...")]})):n("span",[e._v(e._s(e.name)+" Complete")])],2)],1),e._v(" "),e.scanning?e._t("during"):e._e()],2):n("div",[e._t("before",(function(){return[e._v("Scan not started")]}))],2),e._v(" "),e.complete?n("div",[e._t("after",(function(){return[e._v("Scan Complete")]}))],2):e._e()])}),[],!1,null,null,null);t.default=component.exports},1324:function(e,t,n){"use strict";n.r(t);n(19);var r={props:{name:String},methods:{onShow:function(){this.$store.commit("addHole",this.name)}}},o=n(53),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.onShow,expression:"onShow"}]},[r("p",[r("img",{attrs:{src:n(216),alt:e.name,title:e.name,height:"40rem"}}),e._v(" "),e._t("default",(function(){return[r("strong",[e._v("Congratulations!")]),e._v(" You found a hole in the "),r("strong",[e._v(e._s(e.name))]),e._v(".")]}))],2)])}),[],!1,null,null,null);t.default=component.exports},1346:function(e,t,n){"use strict";n.r(t);n(16),n(19),n(9),n(17);function r(data){var e=[];this.next=function(){return e.length<=0&&(e=function(e){for(var t=0,n=null,r=e.slice(0),i=r.length-1;i>0;i-=1)t=Math.floor(Math.random()*(i+1)),n=r[i],r[i]=r[t],r[t]=n;return r}(data)),e.shift()}}var o={methods:{randomItem:function(e){return e[Math.floor(Math.random()*e.length)]}},data:function(){for(var e=[],t=new r(["Boss","Glazed","Minty","Mega","Flabby","Toothsome","Lemon","Raspberry","Serious","Chocolate","Caramel","Junior","Bacon","Spicy","Cheesy","Ginger","Jelly","Marmite","Blueberry","Teensy","Nutty"]),n=new r(["Joe","Hog","Honker","Jamboree","Giant","Sprinkle","Custard","Genie","Twister","Bomb","Lifesaver","Bathtub","Cricket","Buffalo","Dream","Splash","Wedgie","Coconut","Maple","Toe-kick","Jaw Cracker","Power Drill"]),o=0;o<60;o++)e.push({first_name:this.$faker.name.firstName(),last_name:this.$faker.name.lastName(),phone:this.$faker.phone.phoneNumber().replace(/x.*/,""),email:this.$faker.internet.email(),birth_date:this.$faker.date.between("1960-01-01","2011-01-01").toLocaleDateString({year:"numeric",month:"long",day:"numeric"}),dream_donut_flavour:t.next()+" "+n.next()});return{scanning:!1,database:e}}},l=n(53),component=Object(l.a)(o,(function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("ToolKit",{attrs:{onPasswordGuesser:function(){return e.scanning=!0}}}),t._v(" "),r("h1",[t._v("Database Server")]),t._v(" "),r("p",[t._v("You use some standard tools to poke at the database. Looks like it needs a password to connect.")]),t._v(" "),r("RunScan",{attrs:{started:t.scanning},scopedSlots:t._u([{key:"before",fn:function(){return[r("p",{staticClass:"text-muted"},[t._v("Use the Password Guesser")])]},proxy:!0},{key:"after",fn:function(){return[r("p",[t._v("You log in to the database server with the guessed password. (They really should stop using easy passwords\n        everywhere).\n        There are a number of databases filled with boring admin things. One grabs your attention: you start scrolling\n        though a listing, and find a table called person_preferences.")]),t._v(" "),r("h2",[t._v("You found it!")]),t._v(" "),r("HoleFound",{attrs:{name:"Donut Preference Database"}},[r("strong",[t._v("Congratulations!")]),t._v(" You found the "),r("strong",[t._v("Donut Preference Database")])]),t._v(" "),r("p",[t._v("This is just the first page. You wonder if it has anyone you know...")]),t._v(" "),r("b-table",{staticClass:"border border-dark",staticStyle:{width:"auto"},attrs:{striped:"",hover:"",responsive:"",small:"","sticky-header":"",items:t.database}}),t._v(" "),r("p",[t._v("Well done. Task complete.")]),t._v(" "),r("p",[t._v("There are many more\n        "),r("NuxtLink",{attrs:{to:"/holes"}},[t._v("holes")]),t._v("\n        to discover. You can stop here if you want, or you could see how many more holes you can find to make your\n        report to The Department even more impressive.\n      ")],1),t._v(" "),r("p",[r("NextButton",{attrs:{to:"/"}},[t._v("Re-Start")]),t._v("\n        to go back to the beginning and try a different way through. The holes you already found will still stick\n        around. Can you find them all?\n      ")],1),t._v(" "),r("p",[r("NextButton",{attrs:{to:"/next-steps"}},[t._v("Next Steps")]),t._v("\n        for ways to learn more about ethical hacking.\n      ")],1)]},proxy:!0}])}),t._v(" "),r("BackButton")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ToolKit:n(1322).default,HoleFound:n(1324).default,NextButton:n(1321).default,RunScan:n(1323).default,BackButton:n(1320).default})}}]);