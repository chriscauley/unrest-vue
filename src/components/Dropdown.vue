<template>
  <div @click="toggleFocus" class="ur-dropdown">
    <slot>
      <div class="ur-dropdown__trigger">{{ title }}</div>
    </slot>
    <ur-popper v-if="focused" class="popdown" :placement="placement" :offset="offset">
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
            <div class="dropdown-item__text">{{ item.text }}</div>
            <div class="dropdown-item__after">{{ item.after }}</div>
          </div>
        </div>
      </slot>
    </ur-popper>
  </div>
</template>

<script>
import FocusMixin from '../FocusMixin'
import UrPopper from './Popper.vue'

const prepItem = (item) => {
  if (typeof item === 'function') {
    item = { tagName: item }
  }

  if (typeof item === 'string') {
    item = { text: item, to: item }
  }
  const attrs = (item.attrs = item.attrs || {})
  attrs.class = attrs.class || []
  if (!Array.isArray(attrs.class)) {
    attrs.class = [attrs.class]
  }
  if (item.class) {
    attrs.class.push(item.class)
  }
  item.tagName = item.tagName || 'div'
  if (item.to) {
    attrs.to = item.to
    item.tagName = 'router-link'
  }
  if (item.href) {
    attrs.href = item.href
    item.tagName = 'a'
  }
  if (item.click) {
    // TODO item.onClick
    attrs.onClick = item.click
    attrs.class.push('cursor-pointer')
  }
  item.key = item.key || item.text || item.icon
  return item
}

export default {
  name: 'UnrestDropdown',
  components: { UrPopper },
  mixins: [FocusMixin],
  props: {
    items: Array,
    placement: String,
    title: String,
    offset: [Array, String],
  },
  computed: {
    preppedItems() {
      return this.items.map(prepItem)
    },
  },
}
</script>
