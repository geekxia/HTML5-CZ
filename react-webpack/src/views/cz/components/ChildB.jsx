import React from 'react'

export default props => {
  console.log('---ChildB props', props)
  const { value } = props
  return (
    <>
      <h1>你是二儿子</h1>
      华氏温度：<h1>{ value }</h1>
    </>
  )
}
