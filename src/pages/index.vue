<!--
 @name: index.vue
 @description: 首页
 @author: 程序员优雅哥 youyacoder
 @time: 2026/2/11 15:58
-->
<template>
  <div class="flex gap-2">
    <button
      v-for="lang in languages"
      :key="lang.value"
      :class="{ active: currentLocale === lang.value }"
      @click="onChangeLanguage(lang.value)"
    >
      {{ lang.label }}
    </button>
  </div>
  <div>{{ $t('common.welcome', { name: '优雅哥' }) }}</div>
  <div>{{ $t('home.title') }}</div>
  <hr />

  <h1 class="index">index page</h1>
  <div>{{ appName }}</div>
  <div>{{ msg }}</div>
  <div>isDark: {{ isDark }}</div>
  <button @click="toggleDark()">Toggle</button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
console.log(t('common.welcome', { name: '优雅哥' }))
const currentLocale = locale
// 支持的语言
const languages = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
]
const onChangeLanguage = async (lang: string) => {
  locale.value = lang
}

const msg = ref('Hello world')

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
})

const toggleDark = useToggle(isDark)

const appName = import.meta.env?.VITE_APP_NAME ?? ''
</script>
<style scoped lang="scss"></style>
