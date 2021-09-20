<template>
  <div>
    /
    <template v-for="link in links" :key="link.to">
      <router-link :to="link.to" class="link">{{ link.text }}</router-link>
      /
    </template>
  </div>
</template>

<script>
import startCase from 'lodash.startcase'

export default {
  props: {
    names: [String, Array],
  },
  computed: {
    links() {
      const parts = this.$route.path.split('/').filter(Boolean)
      let { names = parts.map(startCase) } = this
      names = names === 'string' ? names.split('|') : names
      const _to = i => `/${parts.slice(0, i + 1).join('/')}/`
      return names.map((text, i) => ({ text, to: _to(i) }))
    },
  },
}
</script>
