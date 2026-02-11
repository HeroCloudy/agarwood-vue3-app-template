import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router'
import type { App } from 'vue'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import i18n, { loadLanguage } from '@/i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes
  routes: setupLayouts(routes as RouteRecordRaw[]),
})

async function loadRouteLocales(to: RouteLocationNormalized) {
  const currentLang = localStorage.getItem('locale') || 'zh-CN'

  // 确保通用语言已加载
  await loadLanguage(currentLang)

  // 加载路由所需的语言模块
  if (to.meta.locales) {
    for (const locale of to.meta.locales as string[]) {
      try {
        await import(`@/i18n/locales/modules/${currentLang}/${locale}.ts`).then((messages) => {
          // 合并到当前语言的消息中
          i18n.global.mergeLocaleMessage(currentLang, {
            [locale]: messages.default,
          })
        })
      } catch (e) {
        console.warn(`Failed to load locale module: ${locale}`, e)
      }
    }
  }
}

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  await loadRouteLocales(to)
  next()
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
