<template>
  <div>
    <breadcrumbs />
    <app-box v-for="app in apps" :key="app.app_label" :app="app" />
  </div>
</template>

<script>
import AppBox from './AppBox.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import store from './store'

export default {
  name: 'AdminHome',
  __route: {
    path: '/admin/',
  },
  components: { AppBox, Breadcrumbs },
  computed: {
    apps() {
      return store.listApps()
    },
  },
}
</script>
