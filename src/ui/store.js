import { reactive } from 'vue'

const TOAST_DELAY = 1e4 // 10s
const LEVELS = ['success', 'error', 'info', 'warn', 'todo']

const state = reactive({
  toasts: [],
  alert: null,
  confirm: null,
})

const hideToast = ({ id }) => {
  if (state.toasts[id]) {
    state.toasts[id].hidden = true
  }
}
const addToast = ({ text, level, delay = TOAST_DELAY }) => {
  const id = state.toasts.length
  state.toasts.push({ id, text, level })
  delay && setTimeout(() => hideToast({ id }), delay)
}

const toast = (text) => addToast({ text, level: 'info' })

toast.add = addToast
toast.hide = hideToast
LEVELS.forEach((level) => (toast[level] = (text) => addToast({ level, text })))

const alert = (message) => (state.alert = message)
const confirm = (confirm) => (state.confirm = confirm)

export default { toast, alert, confirm, state }
