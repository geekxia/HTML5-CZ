import { createStore } from 'vuex'

import good from './modules/good.ts'
import cnode from './modules/cnode'

// 创建store实例
const store = createStore({
  modules: {
    good, cnode
  }
})

export default store
