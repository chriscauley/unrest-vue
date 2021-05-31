import { createApp } from 'vue'
import App from './App.vue'

import unrest, { ui } from '@unrest/vue'
import '../../src/styles/base.scss'

const app = createApp(App)

app.use(unrest)
app.use(ui)

app.mount('#app')
