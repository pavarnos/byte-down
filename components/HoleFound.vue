<template>
  <div v-observe-visibility="onShow">
    <p>
      <img src="~static/DeptIcon.png" :alt="name" :title="name" height="40rem">
      <slot><strong>Congratulations!</strong> You found a hole in the <strong>{{ name }}</strong>.</slot>
    </p>
  </div>
</template>

<script type="ts">
export default {
  props: {
    name: String
  },
  methods: {
    onShow () {
      this.$store.commit('addHole', this.name);
    },
  },
}
</script>
