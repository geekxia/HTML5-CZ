import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import cnode from './modules/cnode'

export default new Vuex.Store({
  modules: {
    cnode
  }
})
