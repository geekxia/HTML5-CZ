import axios from 'axios'
import { message } from 'antd'

// 本地开发
const baseURL = 'http://localhost:9090'
// const version = '/api/v1'

// 创建axios实例，并为它添加拦截器
const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,  // 设置超时（单位是毫秒）
  headers: {}     // 添加公共的 Headers
})

// 添加请求拦截器（AJAX出门时遇到的门卫）
instance.interceptors.request.use( config => {
  // 添加token，把token传递后后端
  // 每个公司要求传递token的方式是不一样的
  config.headers['Authorization'] = localStorage.getItem('token')
  // 当后端收到token，反解析，就知道你是谁！
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {

  // 挂载QQ音乐
  if (response.data && response.data.code === 0) {
    return response.data.data
  }
  // 拦截node服务
  if (response.data) {
    const err = response.data.err
    if (err === 0) {
      return response.data.data
    } else if (err === -1) {
      console.log('--- -1')
      window.location.href ='#/login'

    } else {
      // 业务逻辑不对
      message.error(response.data.msg)
    }
  }
  return response
}, error => {
  // 当状态码不等于200
  message.error('网络异常，稍后再试')
  return Promise.reject(error)
})

export default instance
