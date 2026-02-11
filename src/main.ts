import { createApp } from 'vue'

import App from './App.vue'
import { installRouter } from './router'
import { installStore } from '@/stores'
import { installAssets } from '@/plugins/assets'
import { Env } from '@/utils/env.ts'

const app = createApp(App)

installRouter(app)
installStore(app)
installAssets()

// 获取当前模式
const currentMode = import.meta.env.MODE
console.log('当前模式:', currentMode) // 输出: development, uat 或 production
console.log('VITE_APP_NAME: ', Env.get('VITE_APP_NAME'))
console.log('VITE_NUMBER_DEMO: ', Env.getNumber('VITE_NUMBER_DEMO'))
console.log('VITE_BOOLEAN_DEMO: ', Env.getBoolean('VITE_BOOLEAN_DEMO'))
console.log('isDev', Env.isDev)
console.log('isUat', Env.isUat)
console.log('isProd', Env.isProd)

app.mount('#app')
