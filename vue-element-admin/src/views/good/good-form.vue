<template>
  <div class='good-form'>
    <el-form
      :model="good"
      :rules="rules"
      ref="good"
      label-width="100px"
      class="demo-good"
    >

      <el-form-item label="商品名称" prop="name">
        <el-input v-model="good.name" />
      </el-form-item>

      <el-form-item label="商品描述" prop="desc">
        <el-input type="textarea" v-model="good.desc" />
      </el-form-item>

      <el-form-item label="商品品类" prop="cate">
        <cate-select v-model='good.cate' />
      </el-form-item>

      <el-form-item label="商品价格" prop="price">
        <el-input-number
          v-model.number="good.price"
          controls-position="right"
          :min='0'
        />
      </el-form-item>

      <el-form-item label="是否热销" prop="hot">
        <el-switch v-model="good.hot"></el-switch>
      </el-form-item>

      <el-form-item label="商品图片" prop="img">
        <!-- :value='good.img' + @input='good.img=$event' -->
        <img-upload v-model='good.img' />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">
          {{ id ? "修改" : "添加" }}
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import CateSelect from './components/CateSelect.vue'
import ImgUpload from './components/ImgUpload.vue'
import validate from './utils/validate'
import { fetchGoodSubmit, fetchGoodInfo } from '@/api/good'
export default {
  props: {
    id: { type: String, default: '' }
  },
  components: {
    CateSelect,
    ImgUpload
  },
  data () {
    return {
      // 用于收集Form中多个表单的值
      good: {
        name: '',
        desc: '',
        price: 0,
        hot: false,
        cate: '',
        img: ''
      },
      rules: validate
    }
  },
  created () {
    // const id = this.$route.params.id
    // console.log('id', id)
    if (this.id) {
      fetchGoodInfo(this.id).then(res=>{
        // console.log('商品详情', res)
        this.good = res.data.info
      })
    }
  },
  methods: {
    submit () {
      let data = { ...this.good }
      // 有id是编辑，没有id是新增
      if (this.id) data['id'] = this.id
      fetchGoodSubmit(data).then(res=>{
        // 上传成功时，弹框提示用户成功
        this.$message({
          message: `${this.id?"修改":"添加"}成功`,
          type: 'success',
          duration: 1000,
          onClose: () => {
            // console.log('this', this)
            // 注意this指向问题
            this.$router.back()
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .good-form {
    box-sizing: border-box;
    padding: 25px;
    max-width: 600px;
  }
</style>

<style lang='scss'>
  .good-form {
    .el-input-number .el-input__inner {
      text-align: left;
    }
  }
</style>
