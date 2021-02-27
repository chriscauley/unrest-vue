<template>
  <div @click="toggleFocus" class="ur-dropdown">
    <slot />
    <ur-popper v-if="focused" class="popdown">
      <slot name="content">
        <div class="dropdown-items" v-if="items?.length">
          <div
            class="dropdown-item"
            v-for="item in preppedItems"
            v-bind="item.attrs"
            v-is="item.tagName"
            :key="item.key"
            >
            <i v-if="item.icon" :class="`fa fa-${item.icon}`" />
            {{ item.text }}
          </div>
        </div>
      </slot>
    </ur-popper>
  </div>
</template>

<script>
import FocusMixin from '../FocusMixin'
import UrPopper from './Popper'

const prepItem = (item) => {
  if (typeof item === 'string') {
    item = { text: item, to: item }
  }
  item.attrs = item.attrs || {}
  item.tagName = item.tagName || 'div'
  if (item.to) {
    item.attrs.to = item.to
    item.tagName = 'router-link'
  }
  if (item.href) {
    item.attrs.href = item.href
    item.tagName = 'a'
  }
  if (item.click) {
    item.attrs.onclick = item.click
    item.attrs.class = 'cursor-pointer'
  }
  item.key = item.key || item.text || item.icon
  return item
}

export default {
  mixins: [FocusMixin],
  props: {
    items: Array,
  },
  components: { UrPopper },
  computed: {
    preppedItems() {
      return this.items.map(prepItem)
    },
  },
}
</script>
