<template>
  <div class="modal">
    <div class="modal-mask" @click="$emit('close')" />
    <div class="modal-content">
      <div class="modal-header" v-if="title">
        <div class="modal-title" v-if="title">
          {{ title }}
        </div>
      </div>
      <div class="modal-body">
        <slot />
      </div>
      <div class="modal-footer" v-if="!hide_actions">
        <slot name="actions">
          <button class="btn -secondary" @click="$emit('close')">Close</button>
          <slot name="extra_actions" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onClose: Function,
    title: String,
    hide_actions: Boolean,
  },
  emits: ['close'],
  mounted() {
    if (this.$attrs.close) {
      console.error('DEPRECATION ERROR: Use @close in modal instead of :close')
    }
  },
}
</script>
