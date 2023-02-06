<template>
  <div class='list'>
    <div
      v-for='row in list'
      :key='row.id'
      v-text='row.title'
    />
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  // 如果接收的自定义属性是引用数据类型，default最好写成一个工厂函数（深复制）
  const props = defineProps({
    list: { type: Array, default: ()=>([]) },
    user: { type: Object, default: ()=>({})}
  })
  console.log('list props', props)
</script>

<style lang="scss" scoped>
.list {
  &>div {
    line-height: 40px;
    text-align: center;
    border: 1px solid #eee;
  }
}
</style>
