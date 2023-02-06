<template>
  <!-- 这种写法，同时绑定静态和动态属性时，谁在前面谁生效！ -->
  <div id='red' :id='("blue")'>不负当下</div>
  <div :title='("hello")' title='world'>不畏未来</div>
  <hr>
  <!-- 这种写法，同时绑定静态和动态属性时，谁在后面谁生效！ -->
  <div id='red' v-bind='{id:"blue"}'>不负当下</div>
  <div v-bind='{title:"hello"}' title='world'>不畏未来</div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  const user = { a: 1, b: 2}
  console.log('user', user)
  const user2 = reactive(user)
  console.log('user2', user2)

  const user3 = new Proxy(user, {
    get (target, key) {
      console.log('---你访问了', key)
      return target[key]
    },
    set (target, key, val) {
      console.log('0----你修改了', key)
      target[key] = val
    }
  })


  setTimeout(()=>{
    // user3.a = 200
    console.log('user3', user3)
  }, 1000)

</script>
