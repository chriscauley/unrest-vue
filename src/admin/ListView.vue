<template>
  <div v-if="model">
    <h2>{{ model.verbose }}</h2>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th v-for="column in columns" :key="column.name">
            {{ column.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>
            <router-link :to="`/admin/${model.key}/${item.id}/`" class="link">
              <i class="fa fa-edit" />
              {{ item.id }}
            </router-link>
          </td>
          <td v-for="(column, i) in getColumns(item)" :key="i">
            <div v-bind="column.attrs" v-is="column.tagName">{{ column.text }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link :to="`/admin/${model.key}/new/`" class="btn -primary"
      >+ Add {{ model.verbose }}</router-link
    >
  </div>
</template>

<script>
import store from './store'
const toAttrs = value => {
  if (!value?.attrs && typeof value?.text === undefined) {
    // value is a primative (string, array, or number)
    value = { text: value }
  }
  value.tagName = value.tagName || 'div'
  return value
}

export default {
  __route: {
    path: '/admin/:app_label/:model_name/',
  },
  data() {
    return { store }
  },
  computed: {
    columns() {
      return this.model.admin_options.list_display
    },
    model() {
      return store.getModel(this.$route.params)
    },
    items() {
      return this.model?.getPage()?.items || []
    },
  },
  methods: {
    getColumns(item) {
      return this.columns.map(c => toAttrs(c.get(item)))
    },
  },
}
</script>
