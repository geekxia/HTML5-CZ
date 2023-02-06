// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    task: '',
    list: []
  },

  getTask (ev) {
    console.log('--ev', ev)
    this.setData({
      task: ev.detail.value
    })
  },

  addTask () {
    this.setData({
      list: [...this.data.list, {id:Date.now(), task: this.data.task}],
      task: ''
    })
  } 

})
