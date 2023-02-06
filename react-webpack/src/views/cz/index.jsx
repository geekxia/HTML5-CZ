import React from 'react'
import { inject, observer } from 'mobx-react'

const Test = props => {

  console.log('--props', props)
  const { study } = props

  return (
    <div>
      <h1>学习mobx</h1>
      <h1>{ study.count }</h1>
      <button onClick={()=>study.add(5)}>加</button>
      <button onClick={()=>study.sub(1)}>减</button>
    </div>
  )
}

export default inject('study')(observer(Test))
