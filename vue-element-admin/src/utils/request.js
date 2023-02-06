import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const baseURL = process.env.VUE_APP_BASE_API
// const version = '/api/v1/element'
const version = '/api/v1'

// 创建axios实例
const service = axios.create({
  baseURL: baseURL+version, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 请求拦截器添加token，传递给后端
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // 过滤cnode服务器
    if (res.success) {
      return res.data
    }

    // 根据你后端的业务状态码判断是否成功
    if (res.err !== 0) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // res.code === 50008 || res.code === 50012 || res.code === 50014
      if (res.err === -1) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          // 当token过期或假token时，走这个流程
          store.dispatch('user/resetToken').then(() => {
            location.reload()  // 强制刷新
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // 代码如果能走到这里，说明http状态码一定是200，并且业务状态码一定是0
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
