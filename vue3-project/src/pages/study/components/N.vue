<template>
  <h1 class='toggle'>
    <span :class='{"on":toggle}' @click='change(true)'>开</span>
    <span :class='{"on":!toggle}' @click='change(false)'>关</span>
  </h1>
  <h1 class='size'>
    <span :class='{"on":size=="L"}' @click='change2("L")'>大号</span>
    <span :class='{"on":size=="M"}' @click='change2("M")'>中号</span>
    <span :class='{"on":size=="S"}' @click='change2("S")'>小号</span>
  </h1>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  const props = defineProps({
    // modelValue: { type: Boolean, default: true },
    toggle: { type: Boolean, default: true },
    size: { type: String, default: 'L' },
    // 接收size这个v-model的自定义修饰符
    sizeModifiers: { default: () => ({}) }
  })
  const emit = defineEmits(['update:toggle','update:size'])
  const change = ev => { emit('update:toggle', ev)}
  const change2 = ev => {
    // 使用自定义修饰符
    const { upper } = props.sizeModifiers
    const res = upper ? ev.toUpperCase() : ev
    emit('update:size', res)
  }
</script>

<style lang='scss'>
.toggle {
  span { padding: .13rem .27rem; }
  span.on { color: red; }
}
.size {
  span { padding: .13rem .27rem; }
  span.on { color: blue; }
}
</style>
