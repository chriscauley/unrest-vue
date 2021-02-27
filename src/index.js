import UrPopper from './components/Popper'
import UrDropdown from './components/Dropdown'
import FocusMixin from './FocusMixin'
import ui from './ui'

export { UrPopper, UrDropdown, FocusMixin, ui }

export default {
  install(app) {
    app.component('ur-popper', UrPopper)
    app.component('ur-dropdown', UrDropdown)
  }
}