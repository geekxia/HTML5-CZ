const state = {
  msg: 'Hello Vuex'
}

const mutations = {
  changeMsg (state, payload) {
    state.msg = payload
  }
}

const actions = {
  getList (store, payload) {
    console.log('调接口')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
