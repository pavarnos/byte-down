<template>
  <div class="col-sm-4 p-0 pl-sm-3 pb-sm-3 float-sm-right">
      <img :src="src" :alt="alt" class="right-image">
  </div>
</template>

<script type="ts">
export default {
  props: {
    src: String,
    alt: {
      type: String,
      default: ''
    }
  },
}
</script>

<style>
.right-image {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  display: block;
}
</style>
