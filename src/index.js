import UrPopper from "./components/Popper";
import UrDropdown from "./components/Dropdown";
import UrModal from "./components/Modal";
import FocusMixin from "./FocusMixin";
import ui from "./ui";

export { UrPopper, UrDropdown, FocusMixin, ui };

export default {
  install(app) {
    app.component("UrPopper", UrPopper);
    app.component("UrDropdown", UrDropdown);
    app.component("UrModal", UrModal);
  },
};
