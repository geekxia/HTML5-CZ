import { fetchCnode } from '@/utils/api'

const state = {
  list: []
}

const mutations = {
  SET_LIST: (state, list) => {
    state.list = list
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
