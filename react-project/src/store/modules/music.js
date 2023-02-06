import produce from 'immer'

// const zzz = produce(xxx, function(yyy){
//   // yyy setter
// })

const initState = {
  list: []  // 音乐列表
}

// action = { type, payload }
function reducer (state=initState, action) {
  // 当action来了的时候，在这里执行修改state
  const newState = JSON.parse(JSON.stringify(state))

  return produce(state, function(newState){
    switch (action.type) {
      case 'cz':
        // console.log('收到了一封邮件', action)
        newState.list = action.payload
        break
      default:
    }
  })
}

export default reducer
