<template>
  <h2>测试自定义属性</h2>
</template>

<script setup>
  import { useAttrs } from 'vue'
  const attrs = useAttrs()
  console.log('attrs', attrs)
</script>
