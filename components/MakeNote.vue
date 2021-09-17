<template>
  <span v-observe-visibility="onShow">
    <slot></slot>
  </span>
</template>

<script type="ts">
export default {
  props: {
    name: String
  },
  methods: {
    onShow () {
      this.$store.commit('addNote', this.name)
    },
  },
}
</script>
