<template>
  <div>
    <ToolKit :onDeviceScanner="() => this.scanning = true"/>
    <h1>Office Network Router</h1>
    <p>A router connects one network to another. It can be a firewall and prevent bad things from going from one side to
      the other. Or it can be a gaping wound in your security if it has out of date software, default passwords or other
      sadness.</p>
    <p>You poke at it for a while trying some obvious tricks, but nothing seems to work. It is time to try the Device
      Scanner, which you can improve by installing some extra tools freely available on the web that know how to hack
      this type of router.</p>
    <RunScan :started="scanning" max="13">
      <template v-slot:before>
        <p class="text-muted">Use the Device Scanner</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Router"></HoleFound>
        <p>The scan takes a little while longer than normal. Someone has obviously spent some time hardening it. But
          they forgot to apply the most recent firmware update which fixed a security flaw.</p>
        <p>Now you are inside the router, you can change some of the rules that isolate the factory from the office
          network. You could do a lot of different evil things while you are here, like install software that monitors
          for internet banking access so you can steal passwords and gain access to bank accounts, or copy all email to
          your own server. But today is not an evil day. You promised to do no permanent damage.</p>
        <p>You make a very small change that gives you access to the factory network...</p>
        <p>
          <NextButton to="/network/factory">Explore Factory Network</NextButton>
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
