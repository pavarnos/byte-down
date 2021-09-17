<template>
  <div>
    <b-navbar toggleable="lg" variant="light" class="border-bottom mb-3">
      <b-navbar-brand to="/"><img src="~static/ByteDownIcon.png" alt="ByteDown Icon" height="40rem" /> ByteDown</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Re-Start</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="holes.length > 0 || notes.length > 0">
          <b-nav-item to="/holes">
            <template v-for="hole in holes">
              <img src="~static/DeptIcon.png" :alt="hole" :title="hole" height="40rem">
            </template>
            <template v-if="holes.length > 0">
              {{ holes.length }} Hole{{ holes.length === 1 ? '' : 's'}} Found
            </template>
            <template v-if="notes.length > 0">
              {{ notes.length }} Note{{ notes.length === 1 ? '' : 's'}}
            </template>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <Nuxt />
    </div>
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
