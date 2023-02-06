<template>
  <!-- name，是后端接收图片数据的key名 -->
  <!-- action，是上传图片的API路径 -->
  <!-- headers，用于给图片上传添加额外的请求头 -->
  <!-- el-upload它的背后也是ajax封装的，所以也会遇到CORS问题 -->
  <el-upload
    name='good'
    :action='`${$base}/api/v1/element/upload/img`'
    :headers='{"Authorization": token}'
    drag
    class='upload'
    :multiple='false'
    :limit='1'
    :file-list='list'
    :before-upload='onCheck'
    :on-success='onSuccess'
  >
      <div @mouseenter='hover=true' @mouseleave='hover=false'>
        <div class='layer' v-show='value && hover'></div>
        <span class="delete-btn" v-show='value && hover' @click.stop='onRemove'>
          <i class="el-icon-delete"></i>
        </span>
        <img :src='img' v-if='value'/>
        <div v-else>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </div>
      </div>

  </el-upload>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    value: { type: String, default: '' }
  },
  data () {
    return {
      hover: false,
      list: []   // 把上传成功的图片缓存在这里
    }
  },
  computed: {
    ...mapState('user', ['token']),
    img () {
      return `http://localhost:9999${this.value}`
    }
  },
  methods: {
    // 上传之前的检测
    onCheck (file) {
      console.log('--file', file)
      // 必须是 png/jpg 图片；
      const types = ['image/png','image/jpg']
      if (!types.includes(file.type)) {
        this.$message.error('图片必须是jpg或png格式')
        return false
      }
      // 图片大小不能过1M。
      if (file.size / 1024 / 1024 > 1) {
        this.$message.error('图片大小不能过1M')
        return false
      }
    },
    // 上传成功
    onSuccess (response, file, fileList) {
      // console.log('---上传成功', response)
      if (response.err===0) {
        this.list = fileList
        const img = response.data.img
        // 当图片真正上传成功后，把图片访问地址返回父组件进行双向绑定
        this.$emit('input', img)
      }
    },
    // 手动删除图片
    onRemove () {
      // console.log('--remove')
      this.list = []
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="scss">
  .upload {
    width: 300px;
    height: 160px;
    overflow: hidden;
    position: relative;
    .el-upload {
      width: 100%;
      height: 100%;
      .el-upload-dragger {
        width: 100%;
        height: 100%;
      }
    }
    .delete-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 26px;
      margin-top: -13px;
      margin-left: -13px;
      z-index: 9999;
      color: #aaaaaa;
      cursor: pointer;
    }
    .layer {
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,.4);
    }
  }
</style>
