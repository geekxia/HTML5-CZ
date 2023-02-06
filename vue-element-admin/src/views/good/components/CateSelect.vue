<template>
  <el-select
    placeholder="全部"
    :value='value'
    @change='$emit("input", $event)'
    clearable
  >
    <el-option
      v-for="item in cates"
      :key="item._id"
      :label="item.cate_zh"
      :value="item.cate">
    </el-option>
  </el-select>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    value: { type: String, default: '' }
  },
  computed: {
    ...mapState('good', ['cates'])
  },
  created () {
    this.getCates()  // 派发执行action方法
  },
  methods: {
    ...mapActions('good', ['getCates'])
  }
}
</script>

<style lang="css" scoped>
</style>
