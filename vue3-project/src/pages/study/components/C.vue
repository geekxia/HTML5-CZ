<template>
  价格：<input type="text" v-model.number='price' /><br>
  数量：<input type="text" v-model.number='num' /><br>
  总价：<h2 v-text='total'></h2>
  <button @click='stopWatch'>停止监听</button>
</template>

<script setup>
  import { ref, computed, watch } from 'vue'
  const price = ref(0)
  const num = ref(0)

  const total = computed(()=>{
    // 复杂的运算逻辑
    return price.value * num.value + '元'
  })

  // 当total变化时触发回调
  // const stop = watch(total, (newTotal, oldTotal) => {
  //   console.log('newTotal', newTotal)
  //   console.log('oldTotal', oldTotal)
  // })

  // 同时监听多个响应式变量的变化
  const stop2 = watch([price, num], ([newP,newN], [oldP,oldN]) => {
    console.log('new', newP, newN)
    console.log('old', oldP, oldN)
  })

  const stopWatch = () => {
    // stop()  // 停止监听
    stop2()  // 停止监听
    console.log('--stopped')
  }
</script>
