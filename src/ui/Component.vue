<template>
  <div class="toast-list">
    <div v-for="toast in toasts" :key="toast.id" :class="`toast -${toast.level}`">
      <div class="text">
        {{ toast.text }}
      </div>
      <i class="fa fa-close" @click="hideToast(toast)" />
    </div>
  </div>
  <div v-if="alert" class="modal" @close="closeAlert">
    <div class="modal-mask" @click="closeAlert" />
    <div :class="modal_class" v-is="alert.tagName" @close="closeAlert" :style="modal_style">
      <h2 v-if="alert.title" class="modal-title">
        <i :class="`fa fa-${alert.icon}`" v-if="alert.icon" />
        {{ alert.title }}
      </h2>
      <div class="modal-body max-w-md w-11/12">
        <i :class="`fa fa-${alert.icon}`" v-if="alert.icon && !alert.title" />
        {{ alert.text }}
      </div>
      <div class="modal-footer" v-if="actions.length">
        <button v-for="(action, i) in actions" :key="i" :class="action.class" @click="action.click">
          {{ action.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'

const prepConfirm = (confirm) => {
  if (!confirm) return
}

const noop = () => {}

export default {
  computed: {
    toasts: () => store.state.toasts.filter((t) => !t.hidden),
    alert: () => store.state.alert,
    confirm: () => prepConfirm(store.state.confirm),
    actions() {
      const actions = this.alert.actions || [
        {
          click: this.closeAlert,
          text: 'Ok',
        },
      ]
      actions.forEach((action) => (action.class = action.class || 'btn btn-primary'))
      return actions
    },
    modal_style() {
      return this.alert.width ? `width: ${this.alert.width}px` : ''
    },
    modal_class() {
      return `modal-content ${this.alert.class || ''}`
    },
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
