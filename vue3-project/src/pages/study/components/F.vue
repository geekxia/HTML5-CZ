<template>

  <h2 ref='box'>这是一行文字</h2>

  <div v-for='i in 5' :ref='collect' v-text='i' :key='i'></div>

</template>

<script setup>
  import { ref, onMounted } from 'vue'
  // 单一节点的ref对象
  const box = ref()

  // 收集v-for的ref对象
  let arr = []
  const collect = dom => {
    arr.push(dom)
  }

  onMounted(()=>{
    // ref操作
    box.value.style.color = 'red'
    arr.forEach(dom=>{
      dom.style.color = 'blue'
    })
  })

</script>
