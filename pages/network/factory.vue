<template>
  <div>
    <ToolKit :onNetworkMapper="() => this.scanning = true"/>
    <h1>Factory Network</h1>
    <p>You are inside the factory network. Take a look around and see what you can find.</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Network Mapper</p>
      </template>
      <template v-slot:after>
        <p>The network mapper returns a list of about 30 devices.
        </p>
        <ul>
          <li>Some could be security cameras, which are usually very poorly secured and rarely updated. It is
            fun to hack these, but watching donuts go by on a conveyor belt will just make you drool
          </li>
          <li>Most of the rest just have brief abbreviations and numbers. At a guess they are monitoring or control
            devices attached directly to machines.
          </li>
          <li>One of the device names sounds vaguely familiar: maybe this is the central control system? Worth a look.
          </li>
          <li>A useful target on any network is the router or firewall. The IP address usually ends in .1 (eg
            192.168.1.1). Looking at this might give you access somewhere else interesting.
          </li>
        </ul>
        <p>
          <NextButton to="/network/factory-router">Examine Network Router</NextButton>
          <NextButton to="/network/factory-controller">Examine Factory Controller</NextButton>
          <NextButton to="/network/factory-camera">Hack Camera</NextButton>
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
