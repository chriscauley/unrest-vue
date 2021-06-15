import UrPopper from "./components/Popper.vue";
import UrDropdown from "./components/Dropdown.vue";
import UrModal from "./components/Modal.vue";
import FocusMixin from "./FocusMixin";
import ui from './ui';
import { applyMeta, loadViews } from './router';
import UrSchemaForm from './SchemaForm.vue';

export default {
  UrPopper,
  UrDropdown,
  UrModal,
  UrSchemaForm,
  FocusMixin,
  ui,
  applyMeta,
  loadViews,

  plugin: {
    install(app) {
      app.component("UrPopper", UrPopper);
      app.component("UrDropdown", UrDropdown);
      app.component("UrModal", UrModal);
      app.component("UrSchemaForm", UrSchemaForm);
    },
  }
};
