import React from 'react'
import { useReducer } from 'react'

const initState = {
  num: 1,
  list: [],
  todo: ''
}
function reducer (state, action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'add':
      newState.num += action.payload
      break
    case 'sub':
      newState.num -= action.payload
      break;
    case 'list':
      newState.list.push(action.payload)
      newState.todo = ''
      break
    case 'todo':
      newState.todo = action.payload
      break;
    default:

  }
  return newState
}

const Test = props => {

  // 模拟Redux数据流
  const [state, dispatch] = useReducer(reducer, initState)

  const confirm = ev => {
    if (ev.keyCode===13) {
      dispatch({type:'list',payload:{id:Date.now(),task:state.todo}})
    }
  }

  return (
    <div>
      <h1>测试高阶组件</h1>
      <h1>{ state.num }</h1>
      <button onClick={()=>dispatch({type:'add',payload:10})}>自增</button>
      <button onClick={()=>dispatch({type:'sub',payload:5})}>自减</button>
      <hr/>
      任务：<input
        type="text"
        value={state.todo}
        onChange={ev=>dispatch({type:'todo',payload:ev.target.value})}
        onKeyUp={confirm}
      /><hr/>
      <div>
      {
        state.list.map(ele=>{
          return (
            <div key={ele.id}>
              <span>{ele.id} - {ele.task}</span>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Test
