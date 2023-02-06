import axios from 'axios'

const baseURL = 'http://localhost:8000'
const version = '/api/v1'

// 创建axios实例
const service = axios.create({
  baseURL: baseURL+version, // url = base url + request url
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(

  response => {
    const res = response.data

    // 过滤cnode服务器
    if (res.success) {
      return res.data
    }

    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
