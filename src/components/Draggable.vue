<template>
  <div :class="state ? 'ur-dragging' : ''" @mousedown.capture="start">
    <slot />
  </div>
</template>

<script>
export default {
  emits: ['dragstart', 'drag', 'dragend'],
  data() {
    return {
      state: null,
    }
  },
  methods: {
    drag(event) {
      const new_xy = [event.pageX, event.pageY]
      this.state.last_dxy = [new_xy[0] - this.state.xy[0], new_xy[1] - this.state.xy[1]]
      this.state.xy = new_xy
      this.$emit('drag', this.state, event)
    },
    start(event) {
      event.preventDefault()
      window.addEventListener('mouseup', this.stop)
      window.addEventListener('mousemove', this.drag)
      document.body.classList.add('unrest-dragging')
      this.state = {
        xy_start: [event.pageX, event.pageY],
        xy: [event.pageX, event.pageY],
      }
      this.$emit('dragstart', this.state, event)
      this.drag(event)
    },
    stop(event) {
      window.removeEventListener('mouseup', this.stop)
      window.removeEventListener('mousemove', this.drag)
      this.$emit('dragend', this.state, event)
      this.state = null
      document.body.classList.remove('unrest-dragging')
    },
  },
}
</script>
