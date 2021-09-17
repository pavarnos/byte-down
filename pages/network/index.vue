<template>
  <div>
    <ToolKit :onNetworkMapper="() => this.scanning = true"/>
    <h1>Office Network</h1>
    <p>You are in the office network and getting closer to your goal of finding the Donut Preference Database.</p>
    <BackButton/>
  </div>
</template>

<script type="ts">
export default {
  data: () => ({ scanning: false })
}
</script>
