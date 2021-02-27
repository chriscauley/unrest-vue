<template>
  <div>
    <div class="main-nav">
    </div>
    <div>
      <button v-for="level in toast_levels" @click="doToast(level)" :key="level">
        Toast {{ level }}
      </button>
    </div>
    <ur-ui />
  </div>
</template>

<script>
import { ui } from '@unrest/vue'

export default {
  name: 'App',
  components: { 'ur-ui': ui.Component },
  data() {
    return { toast_levels: ui.toast.LEVELS }
  },
  methods: {
    doToast(level) {
      ui.toast[level](`This is a ${level} toast.`)
    }
  }
}
</script>
