<template>
  <!-- 穿梭框 -->
  <teleport to='head'>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.css"
    />
  </teleport>

  <transition
    enter-active-class='animate__animated animate__zoomIn'
    leave-active-class='animate__animated animate__zoomOutUp'
    mode='out-in'
  >
    <h1 v-if='bol'>不负当下</h1>
    <h1 v-else>不畏未来</h1>
  </transition>

  <button @click='bol=!bol'>动画</button>

</template>

<script setup>

  import { ref } from 'vue'
  const bol = ref(true)

</script>
