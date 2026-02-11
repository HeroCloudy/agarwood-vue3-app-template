import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN', // fallback 语言
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
})

export const installI18n = (app: App) => {
  app.use(i18n)
}
