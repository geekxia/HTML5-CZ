<template>
  <h2 v-text='num'></h2>
  <h2 v-text='name'></h2>
  <h2 v-show='bol'>显示与隐藏</h2>
  <button @click='change'>修改</button>
</template>

<script setup>
  import { ref, isRef } from 'vue'
  // ref 用于定义声明式变量，一般用于定义基本数据类型。
  // 在指令中，直接使用；在setup中，用 .value
  const num = ref(100)
  const name = ref('Hello World')
  const bol = ref(true)
  console.log('num', isRef(num))
  const a = 20
  console.log('a', isRef(a))
  const change = () => {
    // 修改声明式变量，视图自动更新
    num.value++
    name.value = 'Hello 2117'
    bol.value = false
  }
</script>
