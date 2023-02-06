<template>
  <div v-for='t in list' v-text='t.task'></div>
  <button @click='addTask'>修改任务</button>
</template>

<script setup>
  import { reactive, watch } from 'vue'

  const list = reactive([
    { id:1, task:'读书', value:'book' },
    { id:2, task:'跑步', value:'running'}
  ])

  const addTask = () => {
    list.push({ id:3, task:'学习', value:'study' })
  }
  // 当无法监听一个引用类型的变量时
  // 添加第三个选项参数 { deep:true }
  watch(list, (newList, oldList)=>{
    console.log('list changed', list)
  }, { deep:true })

</script>
