import { fetchCnode } from '@/api/article'

const state = {
  list: []
}

const mutations = {
  SET_LIST: (state, payload) => {
    state.list = payload
  }
}

const actions = {
  getList: ({commit}, params) => {
    fetchCnode(params).then(list=>{
      commit('SET_LIST', list)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
