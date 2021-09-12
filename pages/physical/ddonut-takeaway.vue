<template>
  <div>
    <ToolKit :onNetworkMapper="() => this.scanning = true"/>
    <h1>Explore ddonut-takeaway Network</h1>
    <p>You configure your WiFi with <strong>ddonut-takeaway</strong> and <strong>pink-icing</strong> as the password,
      and connect to the network.</p>
    <p>The Network Mapper will poke around inside the network to see what devices it can find. The
      Device Scanner will help us find any useful holes in any of those.</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Network Mapper in your toolkit: click the green Use button on the right</p>
      </template>
      <template v-slot:after>
        <p>The list of devices shows only your laptop connected. You check your watch: it is during normal work hours,
          so you'd
          expect to see other devices. This must be a guest network like we thought. Guest networks often have device
          isolation switched on, so they give each connected device access to the internet only, and don't let them see
          other devices on the same network. Its a fairly standard feature of event the cheapest home routers
          nowdays.</p>
        <p>
          You could attempt to crack the other networks, or go back and try something else.
        </p>
        <p>
          <NextButton to="/physical/ddonut-factory">Crack ddonut-factory Password</NextButton>
          <NextButton to="/physical/ddonut-dinein">Crack ddonut-dinein Password</NextButton>
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
