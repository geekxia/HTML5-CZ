import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  // 为什么要把token放在本地存储或cookie中？
  // 每次刷新让token有初始值，否则每次刷新都得重新登录
  // token有什么用？它记录了用户信息，用token可以向后端换取用户信息
  token: getToken(),
  // 后端返回的用户信息，用户信息（尤其roles）不能本地存储
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      // 调登录接口
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token) // 把token放在cookie中
        resolve() // .then()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // 使用token调接口，获取对应的用户信息
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        // 从后端数据中取出用户信息
        const { roles, name, avatar, introduction } = data

        // 判断后端的roles是否存在，并且判断数组是否为空
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        // 把用户信息更新到state上
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data) // .then(data=>{}) 给导航守卫使用的
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 退出登录（不用调接口）
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })
        resolve()
      }, 200)
      // logout(state.token).then(() => {
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // 重置
  resetToken({ commit }) {
    return new Promise(resolve => {
      // 把state上的用户信息重置
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      // 把cookie中的token删除
      removeToken()
      resolve() // .then()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
