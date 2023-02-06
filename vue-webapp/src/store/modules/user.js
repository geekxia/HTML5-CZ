import { fetchLogin, fetchRegist } from '@/utils/api'
import { Toast } from 'vant'
import router from '@/router'

const state = {
  // 当用户刷新页面时，从本地取出token
  token: localStorage.getItem('token'),
  userinfo: {}
}
// 计算属性（关联的state变化，重新计算）
const getters = {
  isLogin (state) {
    // 把用户是否登录了的计算方案封装起来
    console.log('---')
    return Boolean(state.token)
  }
}

// 专门用于直接修改state（页面更新）
const mutations = {
  getToken (state, token) {
    state.token = token
  },
  resetUser (state) {
    localStorage.removeItem('token')
    state.token = ''
    state.userinfo = {}
  }
}

const actions = {
  regist (store, user) {
    // 异步
    fetchRegist(user).then(res=>{
      if (res) {
        Toast({
          type: 'success',
          message: '注册成功',
          onClose: () => router.replace('/login')
        })
      }
    })
  },
  login ({commit}, user) {
    fetchLogin(user).then(res=>{
      // 登录成功
      if (res && res.token) {
        commit('getToken', res.token)
        localStorage.setItem('token', res.token)
        Toast({
          message: '登录成功',
          type: 'success',
          onClose: () => router.back()
        })
      }
    })
  }
}

export default {
  namespaced: true,  // 开启子store的命名空间
  state,
  getters,
  mutations,
  actions
}
