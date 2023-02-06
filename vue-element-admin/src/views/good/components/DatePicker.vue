<template>
  <!-- 用 :value + @change 实现不了与父组件之间双向绑定 -->
  <!-- 只能 v-model 的 get/set 写法，实现与父组件之间的双向绑定 -->
  <el-date-picker
    v-model='date'
    value-format='yyyy-MM-dd'
    type="daterange"
    range-separator="至"
    start-placeholder="开始月份"
    end-placeholder="结束月份">
  </el-date-picker>
</template>

<script>
export default {
  props: {
    value: { type: Array, default: [] }
  },
  computed: {
    date: {
      get () {
        return this.value
      },
      set (newVal) {
        // console.log('---', newVal)
        // 当我们清空时，newVal=null
        this.$emit('input', newVal || ['',''])
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
