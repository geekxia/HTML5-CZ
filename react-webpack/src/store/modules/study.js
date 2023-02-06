// 子store

import { makeAutoObservable } from 'mobx'

export default class StudyStore {
  constructor () {
    makeAutoObservable(this)
  }

  msg = 'hello mobx'

  changeMsg (payload) {
    this.msg = payload
  }

  count = 1 // observalbe变量
  // 在mobx这个函数，叫做action
  add (payload) {
    console.log('---mobx add', payload)
    this.count += payload
  }
  sub (payload) {
    console.log('---mobx sub', payload)
    this.count -= payload
  }
}
