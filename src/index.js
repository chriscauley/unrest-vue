import Dropdown from './components/Dropdown.vue'
import Modal from './components/Modal.vue'
import Popper from './components/Popper.vue'
import SchemaForm from './SchemaForm.vue'
import FocusMixin from './FocusMixin'
import Marked from './Marked'
import ui from './ui'
import { applyMeta, loadViews } from './router'

export default {
  Popper,
  Dropdown,
  Modal,
  SchemaForm,
  FocusMixin,
  ui,
  applyMeta,
  loadViews,

  plugin: {
    install(app) {
      app.component('UnrestPopper', Popper)
      app.component('UnrestDropdown', Dropdown)
      app.component('UnrestModal', Modal)
      app.component('UnrestSchemaForm', SchemaForm)
      app.component('UnrestMarkdown', Marked)
    },
  },
}
