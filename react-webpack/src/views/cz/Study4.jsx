import React from 'react'
import { useCallback, useMemo, useState, useRef } from 'react'

const Test = props => {
  const [num, setNum] = useState(0)
  const [price, setPrice] = useState(0)

  const [count, setCount] = useState(0)

  const box = useRef(null)

  const total = useMemo(()=>{
    console.log('---重新计算了')
    return Number(price) * Number(num)
  }, [price,num])


  // const handler = useCallback(() => {
  //   setCount(count+1)
  // }, [count])
  const handler = useMemo(()=>{
    return ()=>setCount(count+1)
  }, [count])

  const changeBox = () => {
    box.current.style.color = 'red'
  }


  return (
    <div>
      <button onClick={handler}>{ count }</button>
      <h1>测试高阶组件</h1>
      价格：<input type="text" value={price} onChange={ev=>setPrice(ev.target.value)}/>
      <br/>
      数量：<input type="text" value={num} onChange={ev=>setNum(ev.target.value)}/>
      <br/>
      <h1>总价：{ total }</h1>
      <hr/>
      <h1 ref={box}>我是一行文字</h1>
      <button onClick={changeBox}>操作</button>
    </div>
  )
}

export default Test
