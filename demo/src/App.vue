<template>
  <div>
    <div class="main-nav">
    </div>
    <div>
      <button @click="doToast">toast!</button>
    </div>
    <ur-ui />
  </div>
</template>

<script>
import { ui } from '../../src/index'

export default {
  name: 'App',
  components: { 'ur-ui': ui.Component },
  methods: {
    doToast() {
      ui.toast('bees!')
    }
  }
}
</script>
