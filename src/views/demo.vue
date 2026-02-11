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
  </div>
</template>

<script setup lang="ts">
import { useDemoStore } from '@/stores/modules/demo'
import { storeToRefs } from 'pinia'

// 初始化 Store 实例
const demoStore = useDemoStore()

// 使用 storeToRefs 解构状态，保持响应性
const { counter } = storeToRefs(demoStore)
</script>
