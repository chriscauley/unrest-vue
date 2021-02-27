<template>
  <div>
    <div class="main-nav">
    </div>
    <div>
      <h2>Toasts</h2>
      <button v-for="level in toast_levels" @click="doToast(level)" :key="level">
        Toast {{ level }}
      </button>
    </div>
    <div>
      <h2>Alert</h2>
      <button v-for="value, key in alerts" :key="key" @click="doAlert(key)">
        Alert using {{ key.replace(/_/g, ' + ') }}
      </button>
    </div>
    <ur-ui />
  </div>
</template>

<script>
import { ui } from '@unrest/vue'

const alerts = {
  text: 'Text only alert',
  text_icon: {
    icon: 'warning',
    text: 'Alert text goes here',
  },
  icon_title: {
    icon: 'warning',
    title: 'Alert Title',
  },
  text_icon_title: {
    icon: 'warning',
    title: 'Alert Title',
    text: 'Alert text goes here',
  }
}

export default {
  name: 'App',
  components: { 'ur-ui': ui.Component },
  data() {
    return { toast_levels: ui.toast.LEVELS, alerts }
  },
  methods: {
    doToast(level) {
      ui.toast[level](`This is a ${level} toast.`)
    },
    doAlert(key) {
      ui.alert(alerts[key])
    }
  }
}
</script>
