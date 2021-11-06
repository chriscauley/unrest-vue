<template>
  <div :class="css" @mousedown.capture="start">
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
  computed: {
    css() {
      return ['unrest-draggable', this.state && '-dragging']
    }
  },
  methods: {
    drag(event) {
      const new_xy = [event.pageX, event.pageY]
      this.state.last_dxy = [new_xy[0] - this.state.xy[0], new_xy[1] - this.state.xy[1]]
      this.state.xy = new_xy
      event._drag = this.state
      this.$emit('drag', event)
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
      event._drag = this.state
      this.$emit('dragstart', event)
      this.drag(event)
    },
    stop(event) {
      window.removeEventListener('mouseup', this.stop)
      window.removeEventListener('mousemove', this.drag)
      event._drag = this.state
      this.$emit('dragend', event)
      this.state = null
      document.body.classList.remove('unrest-dragging')
    },
  },
}
</script>
