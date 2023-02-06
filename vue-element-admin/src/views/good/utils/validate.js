const checkPrice = (rule, value, callback) => {
  // check something
  if (Number(value) <= 0) {
    return callback(new Error('商品价格不能等于零'))
  }
}

// 用于校验Form中表单的值
// 左边的key名，是要验证的表单字段
// 右边是数组，是一条一条的验证规则

export default {
  name: [
    { required: true, message: '商品名称是必填字段', trigger: 'blur' },
    // { min: 2, max: 6, message: '商品名称须在2~6字之间', trigger: 'change' },
    { pattern: /^[\u4E00-\u9FFF]{2,6}$/, message:'商品名称必须是2~6个字的中文', trigger: 'change' }
  ],
  desc: [
    { required: true, message: '商品描述是必填字段', trigger: 'blur' },
    { min: 15, max: 30, message: '商品名称须在15~30字之间', trigger: 'blur' }
  ],
  cate: [
    { required: true, message: '商品品类是必填字段', trigger: 'change' }
  ],
  price: [
    { required: true, message: '商品价格是必填字段', trigger: 'blur' },
    // 自定义校验规则
    { validator: checkPrice, trigger:'blur' }
  ],
  img: [
    { required: true, message: '商品图片是必填字段', trigger: 'blur' }
  ]
}
