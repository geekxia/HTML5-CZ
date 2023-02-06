import axios from 'axios'

// 本地开发
const baseURL = 'http://localhost:9000'
const version = '/api/v1'

// 创建axios实例，并为它添加拦截器
const instance = axios.create({
  baseURL: baseURL + version,
  timeout: 5000,  // 设置超时（单位是毫秒）
  headers: {}     // 添加公共的 Headers
})

// 添加请求拦截器（AJAX出门时遇到的门卫）
instance.interceptors.request.use( config => {
  // 添加token，把token传递后后端
  // 每个公司要求传递token的方式是不一样的
  // config.headers['Authorization'] = localStorage.getItem('token')
  // 当后端收到token，反解析，就知道你是谁！
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// 添加响应拦截器（AJAX携带数据回来时遇到的门卫）
instance.interceptors.response.use(response => {
  // 当HTTP状态是2XX时，这里的代码将执行
  // 对后端返回的数据，进行若干的处理
  // console.log('response', response)

  // 第一层，对HTTP状态码成功与否的判断
  if (response.status===200 && response.data) {
    // 第二层，对业务状态进行成功与否的判断
    if (response.data.success) {
      // 数据过滤：把页面想要的数据简单过滤一下
      return response.data.data
    }
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default instance
