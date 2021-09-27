<template>
  <div>
    <ToolKit :onPasswordGuesser="() => this.scanning = true"/>
    <h1>Database Server</h1>
    <p>You use some standard tools to poke at the database. Looks like it needs a password to connect.</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Password Guesser</p>
      </template>
      <template v-slot:after>
        <p>You log in to the database server with the guessed password. (They really should stop using easy passwords
          everywhere).
          There are a number of databases filled with boring admin things. One grabs your attention: you start scrolling
          though a listing, and find a table called person_preferences.</p>
        <h2>You found it!</h2>
        <HoleFound name="Donut Preference Database">
          <strong>Congratulations!</strong> You found the <strong>Donut Preference Database</strong>
        </HoleFound>
        <p>The national donut preference database is right here!</p>
        <p>Well done. Task complete.</p>
        <p>There are many more
          <NuxtLink to="/holes">holes</NuxtLink>
          to discover. You can stop here if you want, or you could see how many more holes you can find (to make your
          report to The Department) even more impressive.
          Click the Re-Start button below to go back to the beginning and try a different way through.
        </p>
        <p>
          <NextButton to="/">Re-Start</NextButton>
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
