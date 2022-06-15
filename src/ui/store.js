import { reactive, markRaw } from 'vue'

const TOAST_DELAY = 1e4 // 10s
const LEVELS = ['success', 'error', 'info', 'warn', 'todo']
let TOAST_ID = 0

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
const addToast = (toast) => {
  if (['string', 'function'].includes(typeof toast)) {
    toast = { value: toast, level: 'info' }
  }
  if (typeof toast.value === 'function') {
    toast.tagName = toast.value
    delete toast.value
  }

  toast.tagName = toast.tagName || 'div'
  const { delay = TOAST_DELAY } = toast
  toast.id = TOAST_ID++

  state.toasts.push(toast)
  delay && setTimeout(() => hideToast(toast), delay)
}

const toast = (value) => addToast(value)

toast.add = addToast
toast.hide = hideToast
toast.LEVELS = LEVELS
LEVELS.forEach((level) => (toast[level] = (value) => addToast({ level, value })))

const alert = (message) => (state.alert = prepAlert(message))
const confirm = (confirm) => (state.confirm = confirm)

const prepAlert = (alert) => {
  if (!alert) return undefined
  if (alert.render || typeof alert === 'function') {
    alert = { tagName: markRaw(alert) }
  }
  if (typeof alert === 'string') {
    alert = { text: alert }
  }
  alert.tagName = alert.tagName || 'div'
  return alert
}

export default { toast, alert, confirm, state }
