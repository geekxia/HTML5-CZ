<template>
  <div id="app">
    <!-- 视图容器，url所匹配的组件在这里显示 -->
    <!-- 这是专门留给 Layout、Login 这两个组件来显示 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
