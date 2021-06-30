export default {
  data: () => ({ focused: false }),
  methods: {
    onFocus() {},
    onBlur() {},
    toggleFocus(e) {
      if (e.__dropdown_touched !== this) {
        e.__dropdown_touched = e.__dropdown_touched || this
        if (this.focused) {
          // TODO esc key should cancel focus
          document.removeEventListener('click', this.toggleFocus)
          this.onFocus()
        } else if (!e.shiftKey && !e.ctrlKey) {
          // ctrl+shift+click locks dropdown open (for debugging)
          document.addEventListener('click', this.toggleFocus)
          this.onBlur()
        }
        this.focused = !this.focused
      }
    },
  },
}
