<template>
  <div>
    <ToolKit :onPasswordGuesser="guessPassword" :onWebScanner="scanWeb" :onDeviceScanner="scanDevice"
             :onWifiScanner="scanWifi" :onNetworkMapper="mapNet"
    />
    <h1>Hacking Tools</h1>
    <p>There are dozens of different tools we can use to find holes in systems. Common types of tools are listed in the
      Toolkit box on the right.</p>
    <p v-if="started()"><strong>Try it now</strong>: click one of the green Use buttons beside a tool to see what it
      does
    </p>
    <div v-if="passwordGuesser">
      <h2 @click="() => this.passwordGuesser = false">Password Guesser</h2>
      <p>Did you know that the <a href="https://en.wikipedia.org/wiki/List_of_the_most_common_passwords">most common
        password</a> on the internet is <em>123456</em>? Another very popular one is <em>password</em>, but it is a
        terrible idea to use it because it is so easy to guess. People are often lazy or busy or do not know
        how to create and store passwords securely. They write them in a
        notebook in a drawer or store them in a document on their computer. This is great for us, it makes our job very
        easy.</p>
      <p>You can download large databases of common passwords from many places on the internet. There are tools that let
        you quickly try these, and common changes that people make to them like swapping a letter for a number (<em>p4ssw0rd</em>
        instead of password), or adding symbols or digits to the end. This is called a
        <strong><a href="https://en.wikipedia.org/wiki/Brute-force_attack">Brute Force Attack</a></strong>. Our Password
        Guesser will help you do that.</p>
      <p>People often use their own name, or their boss, the company name, names of pets or children, birth dates, or
        other stuff that is easy to find out about them if you
        research them on social media. Keep an eye out for lists of names and dates as we gain deeper access to the
        systems at the Department of Donuts. We can add those to our password guesser database. They will come in
        handy.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_YRs28yBYuI"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
      ></iframe>
      <p>PS: don't be an easy target yourself! Make sure everything you log in to has a long strong password that is not
        used anywhere else. Store them safely in a
        <a href="https://www.cnet.com/tech/services-and-software/best-password-manager/">Password Wallet</a></p>
    </div>
    <!--    <div v-else><p class="text-muted">Click the green Use button beside the Password Guesser to learn more about it</p></div>-->
    <div v-if="webScanner">
      <h2 @click="() => this.webScanner = false">Web Scanner</h2>
      <p>Web sites look simple on the outside, but there is often a lot of software needed to make them work. Anywhere
        there is software, there is an opportunity for us to poke at it to see if there are holes. Web sites are on the
        public internet, so they can be accessed from anywhere in the world. Which means that a hole could be used by
        anyone.</p>
      <p>Our Web Scanner will help you find common weaknesses in common web software.</p>
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-3">
          <b-card-header header-tag="header" role="tab" v-b-toggle.accordion-1>Technical Details</b-card-header>
          <b-collapse id="accordion-1" role="tabpanel">
            <b-card-body>
              <b-card-text><p>A web site usually has many parts</p>
                <ul>
                  <li>A <strong>Content Management System</strong>: which helps the web site owner change the txt on the
                    pages, update
                    their product list, manage customer orders and more. It is responsible for formatting each web page
                    so it looks nice and works properly.
                  </li>
                  <li>Programming <strong>Language</strong>: many different programming languages are used to build the
                    web. Popular ones are
                    JavaScript, Python, and PHP
                  </li>
                  <li>A <strong>Database</strong>: to store the pages, products, orders. Popular databases are MySQL,
                    PostgresQL,
                    MongoDB
                  </li>
                  <li><strong>Web Server</strong>: listens to incoming requests for web pages, sends them to the content
                    management
                    software, and returns the rendered page back to your computer
                  </li>
                  <li><strong>Operating System</strong>: your computer may run Windows or MacOS. This provides the basic
                    services that
                    lets your computer find files on the hard drive, connect to the network and more. A web server
                    usually runs Linux...
                  </li>
                  <li>...or it may be &quot;serverless&quot;, where there are lots of tiny tools all
                    working together to build the complete system
                  </li>
                  <li>Many other supporting tools like caches (redis, varnish), search tools (eg Elastic search),
                    proxies, load balancers all have potential holes in the software itself or in the way they are
                    configured or connected together
                  </li>
                </ul>
                <p>This web site is built with <a href="https://nuxtjs.org">nuxtjs</a>, and is hosted as static web
                  pages on <a href="https://github.com/pavarnos/byte-down">github</a>.</p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
    <div v-if="deviceScanner">
      <h2 @click="() => this.deviceScanner = false">Device Scanner</h2>
      <p>Anything connected to the network has software on it that may have holes we can exploit. Computers and laptops
        are easy to see, but there are often many other types of devices you would not normally think of. Printers,
        photocopiers, burglar or fire alarms, POS systems, phone systems, building control systems like air conditioning
        or elevators, even some types of ceiling light have connected remote controls.</p>
      <p>Often devices like this are installed and forgotten. Their software is never updated even after years of use.
        This is good for us, because the internet has search engines to find them, databases of vulnerabilities with
        pre-build toolkits to make use of them. Our Device Scanner make it easy for us for this story. But it
        represents a very large collection of tools that a trained security consultant would research and use
        differently for each job.</p>
    </div>
    <div v-if="wifiScanner">
      <h2 @click="() => this.wifiScanner = false">WiFi Scanner</h2>
      <p>When you click the WiFi icon on your computer, you can see a list of networks nearby. Some of these are more
        secure than others. Any may have out of date software or a weak password that we can use to gain access to the
        network. Once we are in, we can use other tools like the Network Mapper to see what else is connected, then the
        Device Scanner to look for holes in each thing</p>
    </div>
    <div v-if="networkMapper">
      <h2 @click="() => this.networkMapper = false">Network Mapper</h2>
      <p>Once we get access to a network, how do we see what is connected to it? Our Network Mapper will scan the local
        network to see what else it can find. It might report back a list of devices plus the software running on it and
        any version numbers. We can use this detail for our Device Scanner to help it dig in and find interesting
        holes.</p>
    </div>
    <!--    <div v-if="done()">-->
    <!--      <hr>-->
    <!--      <p>Great! Lets go and use these tools to find some holes!</p>-->
    <!--      <b-link to="/digital-physical" class="btn btn-success btn-lg">Continue</b-link>-->
    <!--    </div>-->
    <!--    <div v-else><p class="text-muted">When you have explored all the tools, we can start using them for The Department-->
    <!--      of Donuts</p>-->
    <!--    </div>-->
    <BackButton />
  </div>
</template>

<script type="ts">
export default {
  data: function () {
    return {
      passwordGuesser: false,
      webScanner: false,
      deviceScanner: false,
      scanComplete: false,
      networkMapper: false
    }
  },
  methods: {
    guessPassword () {
      this.passwordGuesser = true
    },
    scanWeb () {
      this.webScanner = true
    },
    scanDevice () {
      this.deviceScanner = true
    },
    scanWifi () {
      this.wifiScanner = true
    },
    mapNet () {
      this.networkMapper = true
    },
    started () {
      return !this.passwordGuesser && !this.webScanner && !this.deviceScanner && !this.scanComplete && !this.networkMapper
    },
    done () {
      return this.passwordGuesser && this.webScanner && this.deviceScanner && this.scanComplete && this.networkMapper
    },
    hide (event) {
      console.log(event)
    }
  }
}
</script>
