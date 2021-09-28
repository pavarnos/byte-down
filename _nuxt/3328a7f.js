(window.webpackJsonp=window.webpackJsonp||[]).push([[52,2,3,9],{272:function(e,t,n){"use strict";n.r(t);var o=n(53),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{staticClass:"btn btn-secondary",on:{click:function(t){return e.$router.back()}}},[n("font-awesome-icon",{attrs:{icon:"chevron-left"}}),e._v(" "),e._t("default",(function(){return[e._v("Back")]}))],2)])}),[],!1,null,null,null);t.default=component.exports},274:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{tools:{PasswordGuesser:{title:"Password Guesser",description:"Attempt to log in by trying lots of different passwords from a database",handler:this.onPasswordGuesser,icon:"unlock"},WebScanner:{title:"Web Scanner",description:"Scan a public web server for vulnerabilities",details:"port scan, unpatched operating system or web server",handler:this.onWebScanner,icon:"globe"},DeviceScanner:{title:"Device Scanner",description:"Scan a server, printer or IoT device for vulnerabilities",details:"port scan, unpatched operating system or firmware, vulnerable apps",handler:this.onDeviceScanner,icon:"laptop-code"},WifiScanner:{title:"WiFi Scanner",description:"Look for visible wifi networks",handler:this.onWifiScanner,icon:"wifi"},NetworkMapper:{title:"Network Mapper",description:"Scan a network to see what devices are on it",handler:this.onNetworkMapper,icon:"network-wired"}}}},props:{onPasswordGuesser:Function,onWebScanner:Function,onDeviceScanner:Function,onWifiScanner:Function,onNetworkMapper:Function}},r=n(53),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-4 col-xl-3 float-md-right pr-0"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[e._v("\n      Toolkit "),n("b-link",{staticClass:"float-right",attrs:{to:"/tools"}},[n("font-awesome-icon",{attrs:{icon:"info"}})],1)],1),e._v(" "),n("ul",{staticClass:"list-group list-group-flush"},e._l(e.tools,(function(t,o){return n("li",{key:o,class:"list-group-item "+(t.handler?"":"text-muted bg-light")},[n("b-button",{staticClass:"float-right ml-5",attrs:{id:o,variant:t.handler?"success":"secondary",disabled:!t.handler},on:{click:t.handler}},[e._v("Use\n        ")]),e._v(" "),n("strong",[e._v(e._s(t.title))]),e._v(" "),n("font-awesome-icon",{attrs:{icon:t.icon}}),n("br"),e._v(" "),n("small",[e._v(e._s(t.description))])],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports},280:function(e,t,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("604f1f98",content,!0,{sourceMap:!1})},284:function(e,t,n){"use strict";n(280)},285:function(e,t,n){var o=n(72)(!1);o.push([e.i,".collapsed>.when-open,.not-collapsed>.when-closed{display:none}",""]),e.exports=o},286:function(e,t,n){"use strict";n.r(t);var o={props:{title:{type:String,default:"Technical Details"},id:{type:String,default:"1"}},computed:{accordionId:function(){return"accordion-"+this.id}}},r=(n(284),n(53)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accordion",attrs:{role:"tablist"}},[n("b-card",{staticClass:"mb-3",attrs:{"no-body":""}},[n("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+e.id,expression:"'accordion-' + id"}],attrs:{"header-tag":"header",role:"tab",title:"Click to show more"}},[n("span",{staticClass:"when-open"},[n("font-awesome-icon",{attrs:{icon:"angle-down"}})],1),e._v(" "),n("span",{staticClass:"when-closed"},[n("font-awesome-icon",{attrs:{icon:"angle-right"}})],1),e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),n("b-collapse",{attrs:{id:e.accordionId,role:"tabpanel"}},[n("b-card-body",[n("b-card-text",[e._t("default")],2)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},294:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{started:!1,passwordGuesser:!1,webScanner:!1,deviceScanner:!1,wifiScanner:!1,networkMapper:!1}},methods:{guessPassword:function(){this.clear(),this.passwordGuesser=!0},scanWeb:function(){this.clear(),this.webScanner=!0},scanDevice:function(){this.clear(),this.deviceScanner=!0},scanWifi:function(){this.clear(),this.wifiScanner=!0},mapNet:function(){this.clear(),this.networkMapper=!0},clear:function(){this.started=!0,this.passwordGuesser=this.webScanner=this.deviceScanner=this.wifiScanner=this.networkMapper=!1}}},r=n(53),component=Object(r.a)(o,(function(){var e=this,t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("ToolKit",{attrs:{onPasswordGuesser:t.guessPassword,onWebScanner:t.scanWeb,onDeviceScanner:t.scanDevice,onWifiScanner:t.scanWifi,onNetworkMapper:t.mapNet}}),t._v(" "),o("h1",[t._v("Hacking Tools")]),t._v(" "),o("p",[t._v("There are dozens of different tools we can use to find holes in systems. Common types of tools are listed in the\n    Toolkit box on the right.")]),t._v(" "),t.started?t._e():o("p",[o("strong",[t._v("Try it now")]),t._v(": click one of the green Use buttons beside a tool to see what it\n    does\n  ")]),t._v(" "),t.passwordGuesser?o("div",[o("h2",{on:{click:function(){return e.passwordGuesser=!1}}},[t._v("Password Guesser\n      "),o("font-awesome-icon",{attrs:{icon:"unlock"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("p",[t._v("People often use their own name, or their boss, the company name, names of pets or children, birth dates, or\n      other stuff that is easy to find out about them if you\n      research them on social media. Keep an eye out for lists of names and dates as we gain deeper access to the\n      systems at the Department of Donuts. We can add those to our password guesser database. They will come in\n      handy.")]),t._v(" "),o("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/_YRs28yBYuI",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.webScanner?o("div",[o("h2",{on:{click:function(){return e.webScanner=!1}}},[t._v("Web Scanner\n      "),o("font-awesome-icon",{attrs:{icon:"globe"}})],1),t._v(" "),o("p",[t._v("Web sites look simple on the outside, but there is often a lot of software needed to make them work. Anywhere\n      there is software, there is an opportunity for us to poke at it to see if there are holes. Web sites are on the\n      public internet, so they can be accessed from anywhere in the world. Which means that a hole could be used by\n      anyone.")]),t._v(" "),o("p",[t._v("Our Web Scanner will help you find common weaknesses in common web software.")]),t._v(" "),o("ExtraDetail",[o("p",[t._v("A web site usually has many parts")]),t._v(" "),o("ul",[o("li",[t._v("A "),o("strong",[t._v("Content Management System")]),t._v(": which helps the web site owner change the txt on the\n          pages, update\n          their product list, manage customer orders and more. It is responsible for formatting each web page\n          so it looks nice and works properly.\n        ")]),t._v(" "),o("li",[t._v("Programming "),o("strong",[t._v("Language")]),t._v(": many different programming languages are used to build the\n          web. Popular ones are\n          JavaScript, Python, and PHP\n        ")]),t._v(" "),o("li",[t._v("A "),o("strong",[t._v("Database")]),t._v(": to store the pages, products, orders. Popular databases are MySQL,\n          PostgresQL,\n          MongoDB\n        ")]),t._v(" "),o("li",[o("strong",[t._v("Web Server")]),t._v(": listens to incoming requests for web pages, sends them to the content\n          management\n          software, and returns the rendered page back to your computer\n        ")]),t._v(" "),o("li",[o("strong",[t._v("Operating System")]),t._v(": your computer may run Windows or MacOS. This provides the basic\n          services that\n          lets your computer find files on the hard drive, connect to the network and more. A web server\n          usually runs Linux...\n        ")]),t._v(" "),o("li",[t._v('...or it may be "serverless", where there are lots of tiny tools all\n          working together to build the complete system\n        ')]),t._v(" "),o("li",[t._v("Many other supporting tools like caches (redis, varnish), search tools (eg Elastic search),\n          proxies, load balancers all have potential holes in the software itself or in the way they are\n          configured or connected together\n        ")])]),t._v(" "),o("p",[t._v("This web site is built with "),o("a",{attrs:{href:"https://nuxtjs.org"}},[t._v("nuxtjs")]),t._v(", and is hosted as static web\n        pages on "),o("a",{attrs:{href:"https://github.com/pavarnos/byte-down"}},[t._v("github")]),t._v(".")])])],1):t._e(),t._v(" "),t.deviceScanner?o("div",[o("h2",{on:{click:function(){return e.deviceScanner=!1}}},[t._v("Device Scanner\n      "),o("font-awesome-icon",{attrs:{icon:"laptop-code"}})],1),t._v(" "),o("p",[t._v("Anything connected to the network has software on it that may have holes we can exploit. Computers and laptops\n      are easy to see, but there are often many other types of devices you would not normally think of. Printers,\n      photocopiers, burglar or fire alarms, POS systems, phone systems, building control systems like air conditioning\n      or elevators, even some types of ceiling light have connected remote controls.")]),t._v(" "),o("p",[t._v("Often devices like this are installed and forgotten. Their software is never updated even after years of use.\n      This is good for us, because the internet has search engines to find them, databases of vulnerabilities with\n      pre-build toolkits to make use of them. Our Device Scanner makes it easy for us for this story. But it\n      represents a very large collection of tools that a trained security consultant would study and use\n      differently for each job.")])]):t._e(),t._v(" "),t.wifiScanner?o("div",[o("h2",{on:{click:function(){return e.wifiScanner=!1}}},[t._v("WiFi Scanner\n      "),o("font-awesome-icon",{attrs:{icon:"wifi"}})],1),t._v(" "),o("p",[t._v("When you click the WiFi icon on your computer, you can see a list of networks nearby. Some of these are more\n      secure than others. Any may have out of date software or a weak password that we can use to gain access to the\n      network. Once we are in, we can use other tools like the Network Mapper to see what else is connected, then the\n      Device Scanner to look for holes in each thing")])]):t._e(),t._v(" "),t.networkMapper?o("div",[o("h2",{on:{click:function(){return e.networkMapper=!1}}},[t._v("Network Mapper\n      "),o("font-awesome-icon",{attrs:{icon:"network-wired"}})],1),t._v(" "),o("p",[t._v("Once we get access to a network, how do we see what is connected to it? Our Network Mapper will scan the local\n      network to see what else it can find. It might report back a list of devices plus their operating system and\n      any version numbers. We can use this detail for our Device Scanner to help it dig in and find interesting\n      holes.")])]):t._e(),t._v(" "),t.started?o("div",[o("hr"),t._v(" "),o("p",[t._v("Once you have explored all the tools in your tool kit, click the Back button below. Lets go and use these\n      tools to find some holes!")])]):t._e(),t._v(" "),o("BackButton")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Did you know that the "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_the_most_common_passwords"}},[e._v("most common\n      password")]),e._v(" on the internet is "),n("em",[e._v("123456")]),e._v("? Another very popular one is "),n("em",[e._v("password")]),e._v(", but it is a\n      terrible idea to use it because it is so easy to guess. People are often lazy or busy or do not know\n      how to create and store passwords securely. They write them in a\n      notebook in a drawer or store them in a document on their computer. This is great for us, it makes our job very\n      easy.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You can download large databases of common passwords from many places on the internet. There are tools that let\n      you quickly try these, and common changes that people make to them like swapping a letter for a number ("),n("em",[e._v("p4ssw0rd")]),e._v("\n      instead of password), or adding symbols or digits to the end. This is called a\n      "),n("strong",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Brute-force_attack"}},[e._v("Brute Force Attack")])]),e._v(". Our Password\n      Guesser will help you do that.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("PS: don't be an easy target yourself! Make sure everything you log in to has a long strong password that is not\n      used anywhere else. Store them safely in a\n      "),n("a",{attrs:{href:"https://www.cnet.com/tech/services-and-software/best-password-manager/"}},[e._v("Password Wallet")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ToolKit:n(274).default,ExtraDetail:n(286).default,BackButton:n(272).default})}}]);