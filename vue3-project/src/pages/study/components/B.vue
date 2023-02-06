<template>
  <div>
    <span v-for='item in list' v-text='item' :key='item'></span>
  </div>
  <div v-text='user.name'></div>
  <div v-text='user.age'></div>
  <button @click='change'>修改</button>
  <h2 v-text='age'></h2>
</template>

<script setup>
  import { reactive, toRef, toRefs, isRef } from 'vue'
  // reactive 定义声明式变量，一般用于定义引用数据类型
  // reactive变量的访问，在指令中、在setup中，直接访问
  const list = reactive([1,2,3,4])
  const user = reactive({
    name: '张三',
    age: 30,
    addr: '广东深圳'
  })
  const age = toRef(user, 'age')
  const user2 = toRefs(user)
  console.log('age', isRef(age))
  const change = () => {
    list.push(Math.floor(Math.random()*100))
    user.age++
    age.value += 5
  }
</script>
