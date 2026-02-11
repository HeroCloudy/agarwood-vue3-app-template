import { createApp } from 'vue'

import App from './App.vue'
import { installRouter } from './router'

const app = createApp(App)

installRouter(app)

app.mount('#app')
