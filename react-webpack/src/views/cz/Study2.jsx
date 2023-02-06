import React from 'react'

const Study2 = props => {

  const [count, setCount] = React.useState(16)
  const [name, setName] = React.useState('')
  const add = () => {
    setCount(count + 1)
  }
  console.log('--props', props)

  // 自定义渲染函数，参与视图渲染
  const rowRender = () => {
    const yu = count % 3
    let result = null
    switch (yu) {
      case 0:
        result = <div>100分</div>
        break
      case 1:
        result = <div>60分</div>
        break
      case 2:
        result = <div>0分</div>
        break
      default:
    }
    return result
  }

  const user = {
    name:　'张三',
    age: 100,
    addr: '广东深圳'
  }


  const userRender = () => {
    return Object.keys(user).map(ele=>{
      return (
        <div key={ele}>
          <span>{ele}</span>
          :
          <span>{user[ele]}</span>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>学习【函数式组件】</h1>
      <h1>{ count }</h1>
      <button onClick={add}>自增</button>
      { rowRender() }
      <div style={( {color:'red',fontSize:count+'px'} )}>动态样式</div>
      <hr/>
      {
        [1,2,3].map((ele,idx) => {
          // do something
          if (ele%2) {
            return <div key={ele}>奇数： { ele }</div>
          } else {
            return <div key={ele}>偶数： { ele }</div>
          }
        })
      }
      { userRender() }
      姓名：<input type="text" value={name} onChange={ ev=>setName(ev.target.value) } />
    </div>
  )
}

export default Study1
