
// 这是user子store

const num: string = 1000

export default {
  // 可共享的数据
  state: {
    token: ''
  },
  // 相当vuex中的mutations
  reducers: {
    setToken: (state, {type,payload}) => {
      // 如果已经开启过immer
      state.token = payload
    }
  },
  // 相当于vuex中的actions（这里的方法都要使用generator）
  // call专门用于触发调接口的
  // put触发调用reducer方法
  effects: {
    // *login (action, { call, put}) {
    //   const { token } = yield call('调接口方法', {调接口的参数})
    //   yield put('setToken', token)
    // }
  }
}
