// 在Redux数据流程中，一个action(type,payload)就代表着一个具体的业务功能。
// 这是Redux架构的优化（不是流程方面的封装）

import {
  fetchQQList,
  fetchLogin,
  fetchUserInfo,
  fetchCates,
  fetchGoodList,
  fetchGoodForm,
  fetchGoodInfo,
  fetchGoodDel
} from '@/api'

export const STUDY_COUNT_ADD = 'STUDY_COUNT_ADD'
export const STUDY_COUNT_SUB = 'STUDY_COUNT_SUB'

export const GET_QQ_LIST = 'GET_QQ_LIST'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LANG = 'USER_LANG'

export const USER_INFO = 'USER_INFO'
export const GOOD_ALL_CATE = 'GOOD_ALL_CATE'
export const GOOD_LIST = 'GOOD_LIST'
export const GOOD_DONE = 'GOOD_DONE'
export const GOOD_RESET = 'GOOD_RESET'
export const GOOD_INFO = 'GOOD_INFO'

// action生成器
export function addCount(payload=2) {
  return { type: STUDY_COUNT_ADD, payload }
}

export function subCount(payload=1) {
  return { type: STUDY_COUNT_SUB, payload }
}

// 获取音乐列表
export function getQQList (params) {
  // redux-thunk要一个可以调用的fn
  return function (dispatch) {
    fetchQQList(params).then(res=>{
      // 在这里拿到了异步数据
      console.log('---list', res)
      dispatch({type:GET_QQ_LIST, payload: res.hotkey})
    })
  }
}

export function login(data) {
  return function (dispatch) {
    fetchLogin(data).then(({token})=>{
      if (token) {
        // 登录成功
        // 1、把token存储到本地
        localStorage.setItem('token', token)
        // 2、把token放在store中
        dispatch({type: USER_LOGIN, payload: token })
        // 3、用token换取用户信息（暂时先不做）
        // 4、直接跳转到系统内部
      }
    })
  }
}

// 在登录流程中用到
// 在刷新流程中用到
export function getInfo() {
  return dispatch => {
    fetchUserInfo().then(res=>{
      console.log('用户信息', res)
      if (res.roles) {
        // 把用户保存到store中
        dispatch({type:USER_INFO, payload:res})
      }
    })
  }
}

export function getCates () {
  return dispatch => {
    fetchCates().then(res=>{
      if (res.list) {
        dispatch({type:GOOD_ALL_CATE,payload:res.list})
      }
      console.log('---cates', res)
    })
  }
}

export function getGoodList (params) {
  return dispatch => {
    fetchGoodList(params).then(res=>{
      if (res.list) {
        dispatch({type:GOOD_LIST, payload:res})
      }
    })
  }
}

export function submitGood (data) {
  return dispatch => {
    fetchGoodForm(data).then(res=>{
      console.log('---成功', res)
      if (res.info) {
        dispatch({type:GOOD_DONE,payload:1})
      }
    })
  }
}

export function resetGood() {
  return {type: GOOD_RESET, payload:0}
}

export function getGoodInfo (id) {
  return dispatch => {
    fetchGoodInfo(id).then(res=>{
      console.log('---详情', res)
      if (res.info) {
        dispatch({type:GOOD_INFO, payload:res.info})
      }
    })
  }
}

export function delGood (ids) {
  return dispatch => {
    fetchGoodDel(ids).then(res=>{
      console.log('---删除成功', res)
      dispatch({type:GOOD_DONE, payload:1})
    })
  }
}

export function logout () {
  return { type:USER_LOGOUT,payload:null }
}

export function toggleLang(payload) {
  return { type:USER_LANG,payload}
}
