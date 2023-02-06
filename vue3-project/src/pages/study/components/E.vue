<template>
  <h2 id='hehe'>演示生命周期</h2>
  <h2 v-text='num'></h2>
  <button @click='num++'>自增</button>
  <h2 v-text='msg'></h2>
</template>
<script setup>
  import { onMounted, onUpdated, ref, onBeforeUnmount, inject, getCurrentInstance } from 'vue'
  const num = ref(0)
  onMounted(()=>{
    document.getElementById('hehe').style.color = 'red'
    console.log('----mounted')
  })
  onUpdated(()=>{console.log('----updated')})
  onBeforeUnmount(()=>{console.log('---死了')})

  const msg = inject('msg', 'hello world')

  const app = getCurrentInstance()
  console.log('app全局数据', app.appContext.config.globalProperties)
</script>
