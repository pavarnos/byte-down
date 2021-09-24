<template>
  <div>
    <ToolKit :onWebScanner="() => this.scanningWeb = true" :onDeviceScanner="() => this.scanningServer = true"/>
    <h1>Web Site</h1>
    <p>You visit <em>donuts.govt.nz</em> on your web browser. Looks pretty boring: annual report blah blah governance
      structures blah strategic initiative blah blah blah board members yawn... Oh wait. There are some pictures of
      donuts! They do look good!</p>
    <p>Seems like there is not much of interest on the publicly visible part of the web site itself. Time go get out
      some tools and dig around inside.</p>
    <p>A web site is usually made of three parts:</p>
    <ul>
      <li>The <strong>content</strong>: the text and pictures you can see as you browse</li>
      <li>The <strong>software</strong>: a tool that knows how to get the correct text and pictures for each page from a
        database and show it to you when you ask
      </li>
      <li>The <strong>server</strong>: a computer somewhere in the internet that runs the software and stores the
        content until it is needed
      </li>
    </ul>
    <RunScan :started="scanningWeb">
      <template v-slot:before>
        <p class="text-muted">Try the Web Scanner to poke at the software</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Web Site"></HoleFound>
        <p>Wordpress is a very popular tool for building web sites, with many useful plugins. This makes it a big target
          too: either wordpress itself or any plugins the web site has installed.</p>
        <p>The scanner found a hole in one of the plugins that displays a calendar of events. The site administrator
          should have kept the plugins up to date and installed a security plugin which can block these kinds of
          attacks.
          The hole gives us access to the user account that wordpress is installed in. You can change any file you like,
          or upload new files: you totally own the web site.
        </p>
        <p>
          <NextButton to="/digital/web-server">Explore User Account</NextButton>
        </p>
      </template>
    </RunScan>
    <RunScan :started="scanningServer">
      <template v-slot:before>
        <p class="text-muted">Try the Device Scanner to poke at the web server</p>
      </template>
      <template v-slot:after>
        <p>The Device Scanner tries a number of different ways to get into the server. No luck this time.</p>
        <p>Some companies use their own servers to host their public web sites. Risky. These can be much easier to get
          in to because it takes a lot of time keep up with the maintenance, so it doesn't always get done. The company
          does not have rooms full of smart people available 24/7 to fix new hacks whenever they come out.</p>
        <p>Looks like this server is run by a separate professional company who do this as their main business. They
          have invested deeply in security. No holes here that we can use.</p>
      </template>
    </RunScan>
    <BackButton/>
  </div>
</template>

<script type="ts">
export default {
  data: () => ({
    scanningWeb: false,
    scanningServer: false
  })
}
</script>
