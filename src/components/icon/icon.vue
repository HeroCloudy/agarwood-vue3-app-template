<!--
 @name: icon.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2026/2/11 15:45
-->
<template>
  <div v-if="type === 'uno'" :class="icon" />

  <iconify-icon v-else-if="type === 'iconify'" :icon="icon" class="icon" :aria-hidden="false" />

  <svg v-else-if="type === 'svg'" class="svg">
    <use :href="svgSymbolId" fill="currentColor" />
  </svg>

  <i v-else-if="type === 'iconfont'" :class="iconfontClassName" />

  <span v-else>Unsupported type: {{ type }}</span>
</template>

<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import { Icon as IconifyIcon } from '@iconify/vue'

defineOptions({ name: 'Icon' })

const props = withDefaults(
  defineProps<{
    /**
     * Icon 图标类型：
     * - uno：UnoCSS Icon，对应的 icon 属性：https://icones.js.org/
     * - iconify: Iconify 图标，对应的 icon 属性： https://icon-sets.iconify.design/
     * - svg：本地 SVG 图标
     * - iconfont：IconFont 图标
     */
    type?: 'uno' | 'svg' | 'iconify' | 'iconfont'
    icon: string
    prefix?: string
    fontFamily?: string
    fontUrl?: string
  }>(),
  {
    type: 'iconify',
    prefix: 'icon',
    fontFamily: 'iconfont',
  },
)

onBeforeMount(() => {
  if (props.type === 'iconfont' && props.fontUrl) {
    const existingLink = document.querySelector(`link[href="${props.fontUrl}"]`)
    if (!existingLink) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = props.fontUrl
      document.head.appendChild(link)
    }
  }
})

const svgSymbolId = computed(() => `#${props.prefix}-${props.icon}`)

const iconfontClassName = computed(() => `${props.fontFamily} ${props.prefix}-${props.icon}`)
</script>

<style scoped lang="scss">
.icon {
  @apply inline-block align-mid text-xl;
}
.svg {
  @apply inline-block align-mid;
  width: 1rem;
  height: 1rem;
}
</style>
