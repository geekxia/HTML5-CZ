import produce from 'immer'

// const newNewState = produce(state, (newState)=>{
//   newState.count++
// })

import { STUDY_COUNT_SUB, STUDY_COUNT_ADD, GET_QQ_LIST } from '../actions'

const initState = {
  count: 1,
  list: []
}

function reducer (state=initState, {type,payload}) {

  return produce(state, state => {
    switch (type) {
      case STUDY_COUNT_SUB:
        state.count += payload
        break
      case STUDY_COUNT_ADD:
        state.count -= payload
        break
      case GET_QQ_LIST:
        state.list = payload
        break
      default:
    }
  })
}

export default reducer
