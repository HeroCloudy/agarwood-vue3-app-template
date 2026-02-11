import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * 测试用的 Pinia Store
 * 使用组合式 API 风格编写，与 Vue3 的组合式 API 保持一致
 */
export const useDemoStore = defineStore(
  'demoStore', // Store 唯一标识
  () => {
    // 状态定义（类似 Vue 的 ref）
    const counter = ref<number>(0)

    // Action 定义（修改状态的方法）
    const increment = () => {
      counter.value++
    }

    // 返回需要暴露的状态和方法
    return {
      counter,
      increment,
    }
  },
  {
    persist: true, // 开启状态持久化
  },
)
