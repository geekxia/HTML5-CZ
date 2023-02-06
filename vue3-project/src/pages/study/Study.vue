<template>
  <h1>学习组合API</h1><hr>
  <!-- <A /><hr>
  <B /><hr>
  <C /><hr> -->
  <!-- <D /><hr> -->
  <!-- <E /><hr> -->
  <!-- <F /><hr> -->
  <!-- <G a='1' :b='true' class='box' style='color:red;' /><hr> -->

  <!-- <H :value='num' @input='changeNum' /> -->
  <!-- :num + @update:num -->
  <!-- <H v-model:num.number='num' :list='[1,2,3]' /> -->

  <!-- <I /><hr> -->

  <!-- <suspense>
    <AJ />
    <template #fallback>
      <div>Loding...</div>
    </template>
  </suspense> -->

  <!-- <K /> -->
  <!-- <M :info='info' :list='[7,8,9]' />
  <button @click='changeInfo'>修改INFO</button> -->

  <!-- v-model = :modelValue + @update:modelValue -->
  <!-- v-model:size = :size + @update:size -->
  <!-- v-model:toggle = :toggle + @update:toggle -->
  <N v-model:toggle='toggle' v-model:size.upper='size' />

  <div v-memo='[]'>
    <!-- 使用 v-memo 可以方便控制一段视图结构是否参与更新阶段 -->
    <div v-text='num'></div>
    <!-- <div v-text='age'></div> -->
  </div>

</template>

<script setup>
  import { ref, reactive, defineAsyncComponent } from 'vue'
  import { A, B, C, D, E, F, G, H, I, K, M, N } from './components'
  const num = ref(1)

  // 定义异步组件
  const AJ = defineAsyncComponent({
    loader: () => import('./components/J.vue'),
    delay: 200,
    timeout: 3000
  })

  const info = reactive({a:10,b:20})
  const changeInfo = () => {
    info.a = 30
  }

  const toggle = ref(true)
  const size = ref('S')

</script>
