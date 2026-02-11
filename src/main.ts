import { createApp } from 'vue'

import App from './App.vue'
import { installRouter } from './router'
import { installStore } from '@/stores'
import { installAssets } from '@/plugins/assets'

const app = createApp(App)

installRouter(app)
installStore(app)
installAssets()

app.mount('#app')
