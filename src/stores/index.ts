import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

// 创建 Pinia 实例
const pinia = createPinia()

// 添加持久化插件
// 该插件会自动将状态保存到 localStorage，默认 key 为 store 名称
pinia.use(piniaPluginPersistedstate)

/**
 * 安装 Pinia
 * @param app Vue 应用实例
 * 采用模块化方法注册 Pinia，与路由注册保持一致的风格
 */
export const installStore = (app: App) => {
  app.use(pinia)
}

export default pinia
