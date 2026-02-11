import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/**
 * 安装路由
 * @param app Vue 应用实例
 * 采用模块化方法注册路由，提高代码可维护性
 */
export const installRouter = (app: App) => {
  app.use(router)
}

export default router
