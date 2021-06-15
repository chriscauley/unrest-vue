import UrPopper from "./components/Popper";
import UrDropdown from "./components/Dropdown";
import UrModal from "./components/Modal";
import FocusMixin from "./FocusMixin";
import ui from "./ui";
import { applyMeta, loadViews } from "./router";

export { UrPopper, UrDropdown, FocusMixin, ui, applyMeta, loadViews };

export default {
  install(app) {
    app.component("UrPopper", UrPopper);
    app.component("UrDropdown", UrDropdown);
    app.component("UrModal", UrModal);
  },
};
