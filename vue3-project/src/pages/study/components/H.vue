<template>
  <div class="number">
    <span
      v-for='i in 5'
      v-text='i'
      :class='{"on": num===i}'
      @click='change(i)'
      :key='i'>
    </span>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  // 接收父组件传递过来的自定义属性（props）
  const props = defineProps({
    num: { type: Number, default: 1 }
  })
  // 接收父组件传递过来的自定义事件（emits）
  const emit = defineEmits(['update:num'])

  const change = i => {
    console.log('你点击了 i', i)
    emit('update:num', i)
  }
</script>

<style scoped lang='scss'>
  .number {
    span {
      display: inline-block;
      box-sizing: border-box;
      width: 20%;
      line-height: .8rem;
      border: 1px solid #ccc;
      text-align: center;
    }
    span.on {
      background-color: red;
      color: white;
    }
  }
</style>
