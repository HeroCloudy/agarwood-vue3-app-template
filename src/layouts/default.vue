<!--
 @name: default.vue.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2026/2/11 16:04
-->
<template>
  <div>
    <header>
      <router-link to="/" class="item">home</router-link>
      <router-link to="/demo" class="item">demo</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.item {
  @apply line-height-loose mr-3 text-gray-400 mb-5;
}
</style>
