
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default () => {

  const count = useSelector(function(state){return state.study.count})
  const dispatch = useDispatch()

  const changCount = type => {
    dispatch({type:`study/${type}`, payload:type==='add'?2:1})
  }

  return (
    <div>
      商品列表
      <h1>{ count }</h1>
      <button onClick={()=>changCount('sub')}>自减</button>
      <button onClick={()=>changCount('add')}>自增</button>
    </div>
  )
}
