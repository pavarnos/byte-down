<template>
  <div>
    <div v-if="started">
      <b-progress :max="max" height="2rem" v-observe-visibility="onShow" class="mb-3">
        <b-progress-bar :value="progress">
          <slot v-if="scanning">Scanning...</slot>
          <span v-else>{{ name }} Complete</span>
        </b-progress-bar>
      </b-progress>
      <slot name="during" v-if="scanning"></slot>
    </div>
    <div v-else>
      <slot name="before">Scan not started</slot>
    </div>
    <div v-if="complete">
      <slot name="after">Scan Complete</slot>
    </div>
  </div>
</template>

<script type="ts">
export default {
  props: {
    started: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'Scan'
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data: function () {
    return {
      progress: 0
    }
  },
  computed: {
    scanning: function () {
      return this.progress > 0 && this.progress < this.max
    },
    complete: function () {
      return this.progress >= this.max
    }
  },
  methods: {
    onShow () {
      if (this.progress > 0) {
        // it has already run: do nothing
        return
      }
      const interval = setInterval(function () {
        this.progress++
        if (this.progress >= this.max) {
          clearInterval(interval)
          this.$emit('scan-complete', this.name)
        }
      }.bind(this), this.$nuxt.context.isDev ? 100 : 1000)
    },
  },
}
</script>
