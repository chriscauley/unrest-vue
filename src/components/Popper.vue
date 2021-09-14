<template>
  <div class="ur-popper">
    <slot />
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'

export default {
  props: {
    target: [Object, String], // DOM element
    placement: String,
    offset: [Array, String], // [ skid, distance ]
    watchme: [String, Number],
  },
  data() {
    return { popper: null }
  },
  watch: {
    target: 'reset',
    watchme() {
      this.popper.forceUpdate()
    },
  },
  mounted() {
    this.reset()
  },
  unmount() {
    this.popper.destroy()
  },
  methods: {
    reset() {
      this.popper?.destroy()
      const modifiers = []
      const offset =
        typeof this.offset === 'string' ? this.offset.split(',').map(Number) : this.offset
      if (offset) {
        modifiers.push({
          name: 'offset',
          options: { offset },
        })
      }
      const { placement = 'bottom-start', target = this.$el.parentElement } = this
      this.popper = createPopper(target, this.$el, { placement, modifiers })
    },
  },
}
</script>
