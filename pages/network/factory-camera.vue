<template>
  <div>
    <ToolKit :onDeviceScanner="() => this.scanning = true"/>
    <h1>Factory Camera</h1>
    <p>Pick a camera at random from the list: they all look like they are from the same manufacturer</p>
    <RunScan :started="scanning" max="3">
      <template v-slot:before>
        <p class="text-muted">Use the Device Scanner</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Factory Security Cameras"></HoleFound>
        <p>That was easy. This camera manufacturer is famous for using admin and admin as the username and password. A
          trivial hack. Now you can watch donuts being made all day long.</p>
        <p><img src="~static/donut_factory_line.jpg" alt="Donuts in progress" width="50%"></p>
        <p>It is mesmerising. You need to snap out of it and get back to work...</p>
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
