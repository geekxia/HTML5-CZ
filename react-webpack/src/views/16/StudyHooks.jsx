import React, { useState, useEffect, useLayoutEffect, useCallback, useMemo, useRef, useDeferredValue, useTransition } from 'react'
import { useTitle, useTheme, useInterval, useCount } from '@/hooks'
import { useFullscreen, useToggle } from 'react-use'


export default props => {

  console.log('---start')

  // 使用state
  const [num, setNum] = useState(1)
  const [count, setCount] = useState(100)
  const [text, setText] = useState('')
  const [searchText] = useDeferredValue(text)
  // 使用上下文
  const theme = useTheme()
  const [cc, dispatch] = useCount()

  const [isPending, startTransition] = useTransition()
  // 使用自定义Hooks
  useTitle('你好')

  const page = useRef(null)
  const [bol, setBol] = useState(false)
  useFullscreen(page, bol, {onClose: () => setBol(false)})



  // 使用ref访问DOM对象
  const box = useRef(null)
  const changeColor = () => {
    box.current.style.color = 'blue'
  }

  // 缓存一个函数声明
  const add = useCallback(()=>{
    // console.log('1---num', num)
    // 把这个更新标记成"可中断的"，在更新视图时，如果浏览器有其它紧急任务，你可以中断我
    startTransition(()=>{
      setNum(num+2)
    })
    // console.log('2---num', num)
  }, [num])

  // 缓存一个复杂的计算
  const expensiveValue = useMemo(()=>{
    // do something
    return num + 1 + 1 + 1
  }, [num])

  useInterval(()=>{
    setCount(count+2)
  }, [count])

  useEffect(()=>{
    // do something
    // 相当于componentDidMount()
    console.log('---1')
    document.getElementById('num').style.color = 'red'
    return ()=>{
      // do something
      // 相当于componentWillUnmount()
      console.log('---2')
    }
  }, []) // 相当于componentDidUpdate

  useEffect(()=>{
    console.log('---3')
    return ()=>{
      console.log('---4')
    }
  }, [num])

  useEffect(()=>{
    console.log('调接口', searchText)
  }, [text])

  console.log('----end')

  return (
    <div style={ theme } ref={page}>

      <h1>{ isPending ? 'num更新中断' : 'num正在更新'}</h1>

      <h1 id='num'>{ num }</h1>
      <button onClick={add}>自增</button>
      <h2>计算属性：{ expensiveValue }</h2>
      <hr/>

      <h1>定时器自增：{ count }</h1>
      <hr/>

      {/* 模拟Redux数据流 */}
      <h1>{ cc }</h1>
      <button onClick={()=>dispatch({type:'sub',payload:5})}>自减</button>
      <button onClick={()=>dispatch({type:'add',payload:10})}>自增</button>
      <hr/>

      <div ref={box}>一行文字</div>
      <button onClick={changeColor}>改变</button>
      <hr/>

      名称搜索：<input type="text" value={text} onChange={ev=>setText(ev.target.value)} />
      <hr/>
      <button onClick={()=>setBol(true)}>全屏</button>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
