<template>
  <b-link class="btn btn-success btn-lg" :to="to">
    <slot>Next</slot>
  </b-link>
</template>

<script type="ts">
export default {
  props: {
    to: String,
  }
}
</script>
