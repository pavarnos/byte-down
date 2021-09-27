<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-3">
      <b-card-header header-tag="header" role="tab" v-b-toggle="'accordion-' + id" title="Click to show more">
        <span class="when-open"><font-awesome-icon icon="angle-down"/></span>
        <span class="when-closed"><font-awesome-icon icon="angle-right"/></span>
        {{ title }}
      </b-card-header>
      <b-collapse :id="accordionId" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <slot></slot>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script type="ts">
// if you have several of these on one page, you need to have a different id for each so the accordion will pop open correctly
export default {
  props: {
    title: {
      type: String,
      default: 'Technical Details'
    },
    id: {
      type: String,
      default: '1'
    }
  },
  computed: {
    accordionId: function () {
      return 'accordion-' + this.id
    }
  }
}
</script>

<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>
