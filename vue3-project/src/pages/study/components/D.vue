<template>
  <h2>测试副作用</h2>
  <h2 v-text='num'></h2>
  <button @click='num++'>自增</button>
</template>
<script setup>
  import { watchEffect, watchPostEffect, watchSyncEffect, ref } from 'vue'

  const num = ref(0)
  const name = ref('')

  // 后置（稍后再执行）
  const stop2 = watchPostEffect(()=>{
    console.log('--- 2', num.value)
  })

  // 同步（立马就执行）
  const stop3 = watchSyncEffect(()=>{
    console.log('--- 3', num.value)
  })

  // 前置
  const stop1 = watchEffect(()=>{
    console.log('--- 1', name.value)
  })

</script>
