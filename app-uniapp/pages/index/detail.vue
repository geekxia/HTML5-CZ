<template>
  <view>
    <view>这是详情低密度</view>
    <button open-type='share'>拼团</button>
  </view>
</template>

<script>
export default {
  onLoad (opt) {
    console.log('--详情', opt)
    uni.setNavigationBarTitle({title: opt.id})
  }
}
</script>

<style lang="css" scoped>
</style>
