<template>
  <unrest-form
    v-if="schema && !confirming_delete"
    :schema="schema"
    v-bind="$attrs"
    :onSubmit="submit"
    :errors="errors"
  >
    <template #actions>
      <button type="submit" class="btn -primary">Submit</button>
      <div v-if="onDelete" class="btn -danger" @click="confirming_delete = true">Delete</div>
    </template>
  </unrest-form>
  <div v-else-if="confirming_delete">
    <h3>Delete "{{ name }}"</h3>
    <p>Are you sure you want to delete this? This cannot be undone</p>
    <div class="ur-form__actions">
      <button class="btn -primary" @click="doDelete">Yes, Delete It</button>
      <button class="btn -secondary" @click="confirming_delete = false">No</button>
    </div>
  </div>
  <div v-else class="ur-placeholder" />
</template>

<script>
import { ReactiveRestApi } from '@unrest/vue-reactive-storage'

const api = ReactiveRestApi()

// https://stackoverflow.com/a/40722084/266564
const cloneDeep = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    if(typeof(obj[key]) === 'object' && Object.keys(obj[key]).length){
      newObj[key] = cloneDeep(obj[key]);
    } else{
      newObj[key] = obj[key];
    }
  })
  return Object.assign({}, newObj);
}

const getSchema = form_name => api.get(`${form_name}/?schema=1`)?.schema

export const prepSchema = schema => {
  schema = cloneDeep(schema)
  if (schema.properties.avatar_url) {
    schema.properties.avatar_url.type = 'image'
    schema.properties.avatar_url.title = 'Avatar'
  }
  if (schema.properties.photo_url) {
    schema.properties.photo_url.type = 'image'
    schema.properties.photo_url.title = 'Photo'
  }
  Object.values(schema.properties).forEach(property => {
    if (property.__widget === 'HiddenInput') {
      property.ui = { tagName: 'ur-hidden' }
    }
  })
  return schema
}

export default {
  props: {
    form_name: String, // eslint-disable-line
    success: Function,
    onDelete: Function,
  },
  data() {
    return { errors: null, loading: false, confirming_delete: false }
  },
  computed: {
    name() {
      return this.schema?.properties.name.default
    },
    schema() {
      const schema = getSchema(this.form_name)
      return schema && prepSchema(schema)
    },
  },
  methods: {
    submit(state) {
      if (this.loading) {
        return
      }
      this.errors = null
      this.loading = true
      return api
        .post(`${this.form_name}/`, state)
        .catch(e => {
          this.loading = false
          throw e
        })
        .then(result => {
          this.loading = false
          api.markStale()
          this.success?.(result)
        })
    },
    doDelete() {
      api.delete(`${this.form_name}/`).then(() => {
        this.onDelete(this.name)
      })
    },
  },
}
</script>