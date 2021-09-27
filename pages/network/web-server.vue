<template>
  <div>
    <ToolKit :onWebScanner="() => this.scanning = true"/>
    <h1>Web Server</h1>
    <p>You visit the web server with a web browser. Looks like it needs a username and password to get in the front
      door, which is good. Looks like an <a href="https://en.wikipedia.org/wiki/Intranet">intranet</a>. Not much else to
      see. It is time to use the Web Scanner to find a back way in.</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Web Scanner</p>
      </template>
      <template v-slot:after>
        <p>The scanner finds ordinary web server software as you'd expect.</p>
        <p>Interesting! The scanner also finds that there is database software installed on the web server, and that the
          database is accessible from the network, perhaps so tools on other computers can generate reports easily.</p>
        <p>
          <NextButton to="/network/database">Examine Database</NextButton>
        </p>
      </template>
    </RunScan>
    <BackButton/>
  </div>
</template>

<script type="ts">
export default {
  data: () => ({ scanning: false })
}
</script>
