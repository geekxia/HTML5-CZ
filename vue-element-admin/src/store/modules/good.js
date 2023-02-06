import { fetchAllCates } from '@/api/good'

const state = {
  cates: []
}

const mutations = {
  SET_CATES: (state, list) => {
    state.cates = list
  }
}

const actions = {
  getCates ({commit}) {
    fetchAllCates().then(res=>{
      // console.log('品类', res)
      if (res.data) {
        commit('SET_CATES', res.data.list)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
