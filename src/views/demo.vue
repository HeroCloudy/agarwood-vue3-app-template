<!--
 @name: demo.vue
 @description: Demo测试页面
 @author: 程序员优雅哥 youyacoder
 @time: 2026/2/11 13:59
-->
<template>
  <div class="demo">
    <h2>Pinia 测试</h2>
    <h3>计数器: {{ counter }}</h3>
    <button @click="demoStore.increment()">点击+1</button>

    <div>
      <div class="demo-text">Hello world</div>
      <div class="text-xs text-primary">测试文字</div>
      <div class="text-sm text-success">测试文字</div>
      <div class="text-md text-info">测试文字</div>
      <div class="text-base text-warning">测试文字</div>
      <div class="text-lg text-danger">测试文字</div>
      <div class="text-xl text-text-primary">测试文字</div>
      <div class="text-2xl text-text-regular">测试文字</div>
      <div class="text-3xl text-text-secondary">测试文字</div>

      <button class="mt-xl px-md py-sm border rounded-base" @click="toggleTheme">
        切换深色/浅色模式
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDemoStore } from '@/stores/modules/demo'
import { storeToRefs } from 'pinia'

// 初始化 Store 实例
const demoStore = useDemoStore()

// 使用 storeToRefs 解构状态，保持响应性
const { counter } = storeToRefs(demoStore)

const toggleTheme = () => {
  const html = document.documentElement
  const currentTheme = html.getAttribute('data-theme')
  html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark')
}
</script>
<style scoped lang="scss">
.demo-text {
  @apply text-xl text-primary bg-success-light-7;
}
</style>
