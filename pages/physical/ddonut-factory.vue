<template>
  <div>
    <ToolKit :onPasswordGuesser="() => this.scanning = true"/>
    <h1>Crack ddonut-factory Password</h1>
    <p>You set up the scanner for the ddonut-factory network...</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Password Guesser in your toolkit</p>
      </template>
      <template v-slot:after>
        <p>It runs for a loooong time, and finally gives up. Nothing found. Must be a good password on this one. Perhaps
          the people who configured the factory knew what they were doing.</p>
        <p>You could try crack the other network, or go back and try something else.</p>
        <p>
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
