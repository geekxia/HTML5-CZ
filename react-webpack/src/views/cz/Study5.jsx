import React from 'react'
import { useDeferredValue, useTransition, useId } from 'react'

const Test = props => {

  const [num, setNum] = React.useState(1)
  const [name, setName] = React.useState('')

  const deferredName = useDeferredValue(name)
  const [isPending, startTransition] = useTransition()

  React.useEffect(()=>{
    console.log('----根据name调接口')
  }, [deferredName])


  const xx = useId()
  console.log('--xx', xx)

  const handler = () => {
    // 把setNum操作标记成“可中断的”
    startTransition(()=>{
      setNum(num+1)
    })
  }

  return (
    <div>
      <h1>学习v18中的Hooks</h1>
      <h1>{ num }</h1>
      <h1>{ isPending ? '是' : '否' }</h1>
      <button onClick={handler}>自增</button>
      <hr/>

      <input type="text" value={name} onChange={ev=>setName(ev.target.value)} />
    </div>
  )
}

export default Test
