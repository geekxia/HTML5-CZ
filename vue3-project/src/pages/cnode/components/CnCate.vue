<template>
  <div class='cates'>
    <span
      v-for='item in cates'
      :class='{on: tab===item.tab}'
      :key='item.id'
      @click='change(item.tab)'
      v-text='item.label'>
    </span>
  </div>

</template>

<script setup>
  import { reactive, defineProps, defineEmits } from 'vue'

  // 接收自定义属性
  const props = defineProps({
    tab: { type: String, default: '' }
  })
  // 接收自定义事件（这个emit相当于V2中的$emit）
  const emit = defineEmits(['update:tab'])

  console.log('cate props', props)
  const cates = reactive([
    { id: 1, tab: '', label: '全部' },
    { id: 2, tab: 'share', label: '分享' },
    { id: 3, tab: 'ask', label: '问答' },
    { id: 4, tab: 'good', label: '精华' },
    { id: 5, tab: 'job', label: '招聘' }
  ])

  const change = tab => {
    emit('update:tab', tab)
  }
</script>

<style lang="scss" scoped>
.cates {
  text-align: center;
  span {
    display: inline-block;
    padding: 0 20px;
    cursor: pointer;
  }
  span.on {
    color: red;
  }
}
</style>
