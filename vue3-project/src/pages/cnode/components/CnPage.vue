<template>
  <div class='page'>
    <span v-text='`<<`'></span>
    <span v-if='page>3'>...</span>
    <span
      v-for='item in arr'
      :key='item'
      :class='{on:page===item}'
      @click='emit("update:page", item)'
      v-text='item'>
    </span>
    <span>...</span>
    <span v-text='`>>`'></span>
  </div>
</template>

<script setup>
  import { defineProps, computed, defineEmits, toRefs } from 'vue'

  const props = defineProps({
    page: { type: Number, default: 1 }
  })
  // 解决props在计算属性中无法响应的问题
  const { page } = toRefs(props)

  const emit = defineEmits(['update:page'])
  const arr = computed(()=>{
    // console.log('---', page.value)
    const val = page.value
    if (val<=3) return [1,2,3,4,5]
    else return [val-2,val-1,val,val+1,val+2]
  })

</script>

<style lang="scss" scoped>
.page {
  text-align: center;
  span {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  span.on {
    color: red;
  }
}
</style>
