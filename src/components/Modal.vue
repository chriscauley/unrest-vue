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
      <div class="modal-footer">
        <slot name="actions">
          <button class="btn -secondary" @click="$emit('close')">Close</button>
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
  },
  emits: ['close'],
  mounted() {
    if (this.$attrs.close) {
      console.error('DEPRECATION ERROR: Use @close in modal instead of :close')
    }
  },
}
</script>
