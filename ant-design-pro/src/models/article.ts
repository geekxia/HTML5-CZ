import { fetchCnode } from '@/services/ant-design-pro/article'

export default {
  namespace: 'article',
  state: {
    list: []
  },
  reducers: {
    changeList (state, action)  {
      state.list = action.payload
    }
  },
  effects: {
    * getList ({payload}, { call, put }) {
      // call(接口方法，接口入参)
      const { data } = yield call(fetchCnode, payload)
      // put 相当于 dispatch({type,payload})
      yield put({type:'changeList',payload:data})
    }
  }
}
