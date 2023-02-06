import produce from 'immer'
import { USER_LOGIN, USER_INFO, USER_LOGOUT, USER_LANG } from '../actions'

const lang = localStorage.getItem('lang') || navigator.language.split('-')[0]

const initState = {
  token: localStorage.getItem('token'),
  userinfo: {}, // 用户信息
  lang,
}

export default function (state=initState, {type,payload}) {
  return produce(state, state=>{
    switch (type) {
      case USER_LOGIN:
        state.token = payload
        break
      case USER_INFO:
        state.userinfo = payload
        break
      case USER_LOGOUT:
        localStorage.removeItem('token')
        state.token = ''
        state.userinfo = {}
        break
      case USER_LANG:
        state.lang = payload
        localStorage.setItem('lang', payload)
        break
      default:
    }
  })
}
