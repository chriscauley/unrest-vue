<template>
  <div class="">
    {{ $store.world.getAll()[2] }}
    <unrest-form v-if="schema" :schema="schema" :state="state" @submit="submit" />
  </div>
</template>

<script>
import store from './store'

export default {
  __route: {
    path: '/admin/:app_label/:model_name/:object_id/',
  },
  data() {
    const { object_id } = this.$route.params
    const model = store.getModel(this.$route.params)
    const state = object_id === 'new' ? {} : { ...model.getOne(object_id) }
    return { model, state }
  },
  computed: {
    schema() {
      return this.model.admin_options.getSchema()
    },
  },
  methods: {
    submit(state) {
      this.model.save(state).then(() => this.$ui.toast(`${this.model.verbose} saved.`))
    },
  },
}
</script>
