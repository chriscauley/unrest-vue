<template>
  <span v-is="inline ? 'div' : 'span'" :innerHTML="innerHTML" class="unrest-markdown" />
</template>

<script>
import dedent from 'dedent'
import { marked } from 'marked'

export default {
  name: 'UnrestMarkdown',
  props: {
    options: Object,
    dedent: {
      type: Boolean,
      default: () => true,
    },
    inline: Boolean,
    source: String,
  },
  computed: {
    innerHTML() {
      const { options, inline, source } = this
      const text = this.dedent ? dedent(source) : source
      return (inline ? marked.parseInline : marked)(text, options)
    },
  },
}
</script>
