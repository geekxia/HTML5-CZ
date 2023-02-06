import React, { useState } from 'react'

export default props => {

  const [task, setTask] = useState('')
  const [list, setList] = useState([])

  const confirm = (ev) => {
    if (ev.keyCode===13) {
      setList([...list, {id:Date.now(),task}])
      setTask('')
    }
  }

  const rowDel = id => {
    setList(list.filter(ele=>ele.id!==id))
  }

  return (
    <div>
      <h1>学习Hooks编程</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={ev=>setTask(ev.target.value)}
          onKeyUp={confirm}
        />
      </div>
      <div>
      {
        list.map(ele=>(
          <div key={ele.id}>
            <span>{ele.task}</span>
            --
            <span onClick={()=>rowDel(ele.id)}>X</span>
          </div>
        ))
      }
      </div>
    </div>
  )
}
