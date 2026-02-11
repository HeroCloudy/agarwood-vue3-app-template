import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
/**
 * 获取浏览器的语言
 */
const getBrowserLanguage = () => {
  const browserLang = navigator.language || (navigator as any).userLanguage
  return ['zh-CN', 'en-US'].includes(browserLang) ? browserLang : 'zh-CN'
}

const currentLang = localStorage.getItem('locale') || getBrowserLanguage()

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: currentLang,
  fallbackLocale: 'zh-CN', // fallback 语言
  messages: {},
})

/**
 * 动态加载语言包
 */
export async function loadLanguage(lang: string) {
  return import(`./locales/${lang}.ts`).then((messages) => {
    i18n.global.setLocaleMessage(lang, messages.default)
    localStorage.setItem('locale', lang)
    return lang
  })
}

loadLanguage(currentLang)

export const installI18n = (app: App) => {
  app.use(i18n)
}

export default i18n
