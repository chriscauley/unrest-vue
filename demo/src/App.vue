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
    <div>
      <h2>Dropdown</h2>
      <ur-dropdown>
        <button type="button">Dropdown with content</button>
        <template #content>
          Custom conetnt goes here
        </template>
      </ur-dropdown>
      <ur-dropdown :items="dropdown_items">
        <button type="button">Dropdown with items</button>
      </ur-dropdown>
      <ur-dropdown :items="select_items">
        <button type="button">Selected Color: {{ selected_color }}</button>
      </ur-dropdown>
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

const dropdown_items = [
  'string',
  { text: 'This is text' },
  { text: 'This item has an icon', icon: 'birthday-cake' },
  { text: 'This item has an click', click: () => ui.toast('Clicked dropdown item') }
]

export default {
  name: 'App',
  components: { 'ur-ui': ui.Component },
  data() {
    const select_items = ['red', 'green', 'blue'].map(color => ({
      text: color,
      click: () => this.selected_color = color
    }))

    return { toast_levels: ui.toast.LEVELS, alerts, dropdown_items, select_items, selected_color: select_items[0].text }
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
