<template>
  <div>
    <div v-if="holes.length > 0">
      <h1>{{ holes.length }} Hole{{ holes.length === 1 ? '' : 's' }} Found</h1>
      <p>Congratulations! You found:</p>
      <ul class="list-unstyled">
        <li v-for="hole in holes">
          <img src="~static/DeptIcon.png" :alt="hole" :title="hole" height="30rem"> <strong>{{ hole }}</strong>
        </li>
      </ul>
      <p>PS: the Department of Donuts is full of holes. Keep looking, there may be more!</p>
    </div>
    <div v-else>
      <h1>No Holes Found (yet)</h1>
      <p>There are plenty of security holes in the Department of Donuts. Some are easier to find, some are a bit harder.
        Keep looking! Or you can <b-link to="/">Re-Start</b-link> from the beginning if you are lost...</p>
    </div>
    <div v-if="notes.length > 0">
      <h2>Notes</h2>
      <p>A list of the things that the Department are doing well:</p>
      <ul>
        <li v-for="note in notes">{{ note }}</li>
      </ul>
    </div>
    <BackButton/>
  </div>
</template>

<script type="ts">
export default {
  computed: {
    holes () {
      return this.$store.state.holes
    },
    notes () {
      return this.$store.state.notes
    }
  }
}
</script>
