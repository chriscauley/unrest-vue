<template>
  <div class="toast-list">
    <div v-for="toast in toasts" :key="toast.id" :class="`toast -${toast.level}`">
      <div class="text">
        {{ toast.text }}
      </div>
      <i class="fa fa-close" @click="hideToast(toast)" />
    </div>
  </div>
  <div v-if="alert" class="modal">
    <div class="modal-mask" @click="closeAlert" />
    <div class="modal-content" style="min-width: 400px">
      <h2 v-if="alert.heading">
        <i :class="`fa fa-${alert.icon}`" v-if="alert.icon" />
        {{ alert.heading }}
      </h2>
      {{ alert.text }}
      <div class="modal-footer">
        <button class="btn btn-primary" @click="closeAlert">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'

const prepAlert = (alert) => {
  if (!alert) return
  if (typeof alert === 'string') {
    alert = { text: alert }
  }
  return alert
}

const prepConfirm = (confirm) => {
  if (!confirm) return
}

const noop = () => {}

export default {
  computed: {
    toasts: () => store.state.toasts.filter((t) => !t.hidden),
    alert: () => prepAlert(store.state.alert),
    confirm: () => prepConfirm(store.state.confirm),
  },
  methods: {
    closeAlert(success) {
      const { confirm = noop, abort = noop } = this.alert
      ;(success ? confirm : abort)()
      store.state.alert = null
    },
    hideToast: store.toast.hide,
  },
}
</script>
