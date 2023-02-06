<template>
  <!-- 在Vue3中，同个元素上可以同时使用多个v-model指令 -->
  <!-- <CnCate :tab='tab' @update:tab='tab=$event' /> -->
  <CnCate v-model:tab='tab' />
  <CnList :list='list' />
  <CnPage v-model:page='page' />
</template>

<script setup>
  // 导入组件
  import CnCate from './components/CnCate.vue'
  import CnList from './components/CnList.vue'
  import CnPage from './components/CnPage.vue'
  // 导入Hooks
  import useList from './hooks/useList'
  import useCnode from './hooks/useCnode'

  // 列表功能
  const [tab,page,list] = useList()
</script>
