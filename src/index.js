import admin from './admin'
import Draggable from './components/Draggable.vue'
import Dropdown from './components/Dropdown.vue'
import Modal from './components/Modal.vue'
import Popper from './components/Popper.vue'
import SchemaForm from './SchemaForm.vue'
import FocusMixin from './FocusMixin'
import Marked from './Marked'
import Store from './Store'
import ui from './ui'
import { timeit } from './utils'
import { applyMeta, loadViews } from './router'

export default {
  admin,
  Popper,
  Draggable,
  Dropdown,
  Modal,
  SchemaForm,
  FocusMixin,
  timeit,
  ui,
  applyMeta,
  loadViews,
  Store,

  plugin: {
    install(app) {
      app.component('UnrestPopper', Popper)
      app.component('UnrestDraggable', Draggable)
      app.component('UnrestDropdown', Dropdown)
      app.component('UnrestModal', Modal)
      app.component('UnrestSchemaForm', SchemaForm)
      app.component('UnrestMarkdown', Marked)
    },
  },
}
