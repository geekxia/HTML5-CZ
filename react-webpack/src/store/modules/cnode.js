import { makeAutoObservable } from 'mobx'

import { fetchTopics } from '@/utils/api'

export default  class CnodeStore {
  constructor() {
    makeAutoObservable(this)
  }
  list = []
  getList (params) {
    fetchTopics(params).then(list=>{
      // console.log('列表', list)
      this.list = list
      // console.log('list', this.list)
    })
  }
}
