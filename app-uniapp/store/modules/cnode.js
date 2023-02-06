export default {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    setCount (state, payload) {
      state.count += payload
    }
  }
}
