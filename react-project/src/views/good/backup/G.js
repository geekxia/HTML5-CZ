import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addCount, subCount } from '@/store/actions'

export default () => {

  const [num, setNum] = useState(0)

  // const count = useSelector(function(state){return state.study.count})
  // const count = useSelector(state=>state.study.count)
  const { count } = useSelector(state=>state.study)
  const dispatch = useDispatch()

  return (
    <div>
      商品列表
      <h1>{ count }</h1>
      <input type="text" value={num} onChange={ev=>setNum(Number(ev.target.value))}/>
      <button onClick={()=>dispatch(subCount(num))}>自减</button>
      <button onClick={()=>dispatch(addCount(num))}>自增</button>
    </div>
  )
}
