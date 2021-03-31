import UrPopper from './components/Popper'
import UrDropdown from './components/Dropdown'
import UrModal from './components/Modal'
import FocusMixin from './FocusMixin'
import ui from './ui'

export { UrPopper, UrDropdown, FocusMixin, ui }

export default {
  install(app) {
    app.component('ur-popper', UrPopper)
    app.component('ur-dropdown', UrDropdown)
    app.component('ur-modal', UrModal)
  }
}