import { useReducer } from 'react'

const initState = {
  count: 1
}

const reducer = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'add':
      newState.count+=action.payload
      break;
    case 'sub':
      newState.count-=action.payload
      break;
    default:
  }
  return newState
}

const useCount = () => {
  // 模拟redux数据流
  const [state, dispatch] = useReducer(reducer, initState)
  return [state.count, dispatch]
}

export default useCount
