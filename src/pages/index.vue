<!--
 @name: index.vue
 @description: 首页
 @author: 程序员优雅哥 youyacoder
 @time: 2026/2/11 15:58
-->
<template>
  <h1 class="index">index page</h1>
  <div>{{ appName }}</div>
  <div>{{ msg }}</div>
  <div>isDark: {{ isDark }}</div>
  <button @click="toggleDark()">Toggle</button>
</template>

<script setup lang="ts">
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
