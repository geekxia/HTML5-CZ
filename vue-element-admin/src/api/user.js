import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/element/login',
    method: 'post',
    data
  })
}

// 用token换取用户信息（roles）
// mockjs使用get查询参数传递token
// nodejs使用headers.Authorization传递token
export function getInfo(token) {
  return request({
    url: '/element/userinfo',
    method: 'get',
    headers: {
      Authorization: token
    },
    params: {}
  })
}

// 退出接口
export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
