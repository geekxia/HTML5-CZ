import produce from 'immer'
import { GOOD_ALL_CATE, GOOD_LIST, GOOD_DONE, GOOD_RESET, GOOD_INFO } from '../actions'

const initState = {
  cates: [],
  list: [],
  total: 0,
  done: 0,
  info: {}
}

export default function (state=initState, {type,payload}) {
  return produce(state, state=>{
    switch (type) {
      case GOOD_ALL_CATE:
        state.cates = payload
        break
      case GOOD_LIST:
        state.total = payload.total
        state.list = payload.list
        state.done = 0
        break
      case GOOD_DONE:
        state.done = payload
        break
      case  GOOD_RESET:
        state.done = 0
        state.info = {}
        // do something
        break
      case GOOD_INFO:
        state.info = payload
        break
      default:
    }
  })
}
