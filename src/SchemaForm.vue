<template>
  <unrest-form
    v-if="schema && !confirming_delete"
    :schema="preppedSchema"
    v-bind="$attrs"
    :onSubmit="submit"
    :errors="errors"
    @error="onError"
  >
    <template #actions>
      <button type="submit" class="btn -primary">Submit</button>
      <div v-if="onDelete" class="btn -danger" @click="confirming_delete = true">Delete</div>
      <slot name="extra_actions" />
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
import { ReactiveRestApi } from '@unrest/vue-storage'
import cloneDeep from 'lodash.clonedeep'

const api = ReactiveRestApi({})

let warned = false

export const prepSchema = (schema) => {
  schema = cloneDeep(schema)
  if (schema.properties.avatar_url) {
    schema.properties.avatar_url.type = 'image'
    schema.properties.avatar_url.title = 'Avatar'
  }
  if (schema.properties.photo_url) {
    schema.properties.photo_url.type = 'image'
    schema.properties.photo_url.title = 'Photo'
  }
  return schema
}

export default {
  props: {
    form_name: String, // eslint-disable-line
    success: Function, // TODO remove this in next major version
    onSuccess: Function,
    onDelete: Function,
    onError: Function,
    prepSchema: Function,
  },
  emits: ['success'],
  data() {
    return { errors: null, loading: false, confirming_delete: false, schema: null }
  },
  computed: {
    name() {
      return this.schema?.properties.name.default
    },
    preppedSchema() {
      let { schema } = this
      if (!schema) {
        return null
      }
      schema = prepSchema(schema)
      if (this.prepSchema) {
        schema = this.prepSchema(schema) || schema
      }
      return schema
    },
  },
  mounted() {
    if (!warned && this.success) {
      console.warn('UnrestForm.success is deprecated in favor of @success')
      warned = true
    }
    api.fetch(`${this.form_name}/?schema=1`).then(({ schema }) => {
      this.schema = schema
    })
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
        .catch((e) => {
          this.loading = false
          throw e
        })
        .then((result) => {
          this.loading = false
          if (this.success) {
            this.success?.(result)
          } else {
            this.$emit('success', result)
          }
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
