<template>
  <div>
    <admin-breadcrumbs />
    <app-box v-if="app" :app="app" />
  </div>
</template>

<script>
import store from './store'
import AppBox from './AppBox.vue'
import AdminBreadcrumbs from './Breadcrumbs.vue'

export default {
  components: { AppBox, AdminBreadcrumbs },
  __route: {
    path: '/admin/:app_label/',
    meta: {
      title: (to) => store.getApp(to.params.app_label).verbose,
    },
  },
  computed: {
    app() {
      return store.listApps().find((a) => a.app_label === this.$route.params.app_label)
    },
  },
}
</script>
