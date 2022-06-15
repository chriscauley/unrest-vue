<template>
  <div class="">
    <admin-breadcrumbs />
    <unrest-form v-if="schema" :schema="schema" :state="state" @submit="submit" />
  </div>
</template>

<script>
import AdminBreadcrumbs from './Breadcrumbs.vue'
import store from './store'

export default {
  components: { AdminBreadcrumbs },
  __route: {
    path: '/admin/:app_label/:model_name/:object_id/',
  },
  data() {
    const { object_id } = this.$route.params
    const model = store.getModel(this.$route.params)
    const app = store.getApp(this.$route.params.app_label)
    const state = object_id === 'new' ? {} : { ...model.getOne(object_id) }
    return { model, state, app }
  },
  computed: {
    breadcrumb_names() {
      const name = this.state.id ? this.state.name || `#${this.state.id}` : 'New'
      return ['Admin', this.app.verbose, this.model.verbose, name]
    },
    schema() {
      return this.model.admin_options.getSchema()
    },
  },
  methods: {
    submit(state) {
      this.model.save(state).then((data) => {
        this.$ui.toast(`${this.model.verbose} saved.`)
        if (!state.id) {
          const { app_label, model_name } = this.$route.params
          this.$router.replace(`/admin/${app_label}/${model_name}/${data.id}/`)
        }
      })
    },
  },
}
</script>
