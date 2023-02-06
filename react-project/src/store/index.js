// 一个流程
// 三个API：createStore、applyMiddleware、combineReducers
// 三个核心概念：store(状态容器)、action(信号type,payload)、reducer(专门用于修改state的纯函数)
// 三个特点：store单一数据源、store数据是只读的、store数据只能使用reducer纯函数来修改

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import study from './modules/study'
import user from './modules/user'
import good from './modules/good'
import music from './modules/music'

const store = createStore(
  combineReducers({
    study, user, good, music
  }),
  // 中间件是有顺序的
  compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
  )
)

console.log('store state', store.getState())

export default store
