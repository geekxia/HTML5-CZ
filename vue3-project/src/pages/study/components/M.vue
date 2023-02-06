<template>
  <h2>测试props自定义属性</h2>
  <h2 v-text='info.a + info.b'></h2>
  <span v-for='i in list' v-text='i' :key='i'></span>
</template>

<script setup>
  import { defineProps, inject, toRefs } from 'vue'
  const props = defineProps({
    info: {
      type: Object,
      default () {
        // return inject('info', {a:1,b:2})
        return {a:1,b:2}
      }
    },
    list: {
      type: Array,
      default () {
        return inject('list', [1,2,3])
      }
    }
  })

  // 如果遇到父组件传递的响应式变量不更新，要用toRefs()转化一下
  const { info, list } = toRefs(props)
</script>
