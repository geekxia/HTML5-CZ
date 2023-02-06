<template>
  <!-- 路由的视图容器 -->
  <!-- <suspense>
    <router-view />
    <template #fallback>
      <h1>加载中。。。</h1>
    </template>
  </suspense> -->

  <div id='xxx'></div>

  <router-view />

</template>

<script setup>
  import { provide, defineProps } from 'vue'
  // 向后代组件提供一个msg数据（没有响应式）
  provide('msg', 2023)
  provide('info', {a:100,b:200})
  provide('list', [4,5,6])

  // 接收父组件传递过来的props自定义属性
  const props = defineProps({
    version: { type: String, default: '' }
  })
  console.log('app props', props)
</script>

<style lang='scss'>
</style>
