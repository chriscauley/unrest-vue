<template>
  <div>
    <div class="main-nav"></div>
    <div>
      <h2>Toasts</h2>
      <button v-for="level in toast_levels" @click="doToast(level)" :key="level">
        $ui.toast.{{ level }}(text)
      </button>
    </div>
    <div>
      <h2>Alert</h2>
      <button v-for="(value, key) in alerts" :key="key" @click="doAlert(key)">
        {{ getAlertText(key) }}
      </button>
    </div>
    <div>
      <h2>Dropdown</h2>
      <unrest-dropdown>
        <button type="button">Dropdown with content</button>
        <template #content>
          Custom conetnt goes here
        </template>
      </unrest-dropdown>
      <unrest-dropdown :items="dropdown_items">
        <button type="button">Dropdown with items</button>
      </unrest-dropdown>
      <unrest-dropdown :items="select_items">
        <button type="button">Selected Color: {{ selected_color }}</button>
      </unrest-dropdown>
    </div>
    <div>
      <h2>Modal</h2>
      <button @click="modal = true">Show Modal</button>
      <unrest-modal v-if="modal" :close="() => (modal = false)" title="This is a modal"
        >Woo</unrest-modal
      >
    </div>
    <div>
      <h2>Markdown</h2>
      <unrest-markdown
        :source="
          `
                 Markdown

                 Markdown support via [Marked](marked.js.org).
                 `
        "
      />
      <p>Markdown can be <unrest-markdown :inline="true" source="**inline**" /></p>
      <unrest-markdown
        :dedent="false"
        source="        unrest-markdown tags default to dedent. It can be disabled."
      />
    </div>
    <unrest-ui />
  </div>
</template>

<script>
import { markRaw } from 'vue'
import UnrestVue from '@unrest/vue'

import FunctionalComponent from './components/FunctionalComponent'
import SingleFileComponent from './components/SingleFileComponent'

const { ui } = UnrestVue

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
  },
  text_class: {
    text: 'The class option will alter the class of the modal-content element',
    class: 'modal-error',
  },
  FunctionalComponent: markRaw(FunctionalComponent),
  SingleFileComponent: markRaw(SingleFileComponent),
}

const dropdown_items = [
  'string',
  { text: 'This is text' },
  { text: 'This item has an icon', icon: 'birthday-cake' },
  { text: 'This item has an click', click: () => ui.alert('You clicked the dropdown!') },
]

export default {
  data() {
    const select_items = ['red', 'green', 'blue'].map((color) => ({
      text: color,
      click: () => (this.selected_color = color),
    }))

    return {
      toast_levels: this.$ui.toast.LEVELS,
      alerts,
      dropdown_items,
      select_items,
      selected_color: select_items[0].text,
      modal: false,
    }
  },
  methods: {
    getAlertText(key) {
      if (key.toLowerCase() !== key) {
        return `$ui.alert(${key})`
      }
      if (typeof alerts[key] === 'string') {
        return `$ui.alert("${alerts[key]}")`
      }
      return `$ui.alert({ ${key.replace(/_/g, ', ')} })`
    },
    doToast(level) {
      this.$ui.toast[level](`This is a ${level} toast.`)
    },
    doAlert(key) {
      this.$ui.alert(alerts[key])
    },
  },
}
</script>
