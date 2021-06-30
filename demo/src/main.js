import { createApp } from 'vue'
import App from './App.vue'

import unrest from '@unrest/vue'
import '../../src/styles/base.scss'
import './styles.scss'

const app = createApp(App)

app.use(unrest.plugin)
app.use(unrest.ui)

app.mount('#app')
