// 根store

import StudyStore from './modules/study'
import CnodeStore from './modules/cnode'

class Store {
  constructor () {
    // 合并子store
    this.study = new StudyStore()
    this.cnode = new CnodeStore()
  }
}

const store = new Store()
console.log('store', store)
export default store
