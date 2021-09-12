<template>
  <div>
    <ToolKit :onPasswordGuesser="() => this.scanning = true"/>
    <h1>Crack ddonut-dinein Password</h1>
    <p>You set up the Password Guesser for the ddonut-dinein network...</p>
    <RunScan :started="scanning" max="15">
      <template v-slot:before>
        <p class="text-muted">Use the Password Guesser in your toolkit</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Office WiFi"/>
        <p>The password took a little longer to find because it was more complex (it had a mix of letters and numbers
          and special characters), but we are in! Configure your laptop to connect to the network and lets see what
          devices are connected...</p>
        <p>
          <NextButton to="/network">Scan the ddonut-dinein Network</NextButton>
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
