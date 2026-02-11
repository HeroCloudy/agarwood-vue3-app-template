import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由配置
  routes: [
    {
      path: '/',
      redirect: '/demo', // 根路径重定向到 demo 页面
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/demo.vue'), // 懒加载 demo 组件
    },
  ],
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
