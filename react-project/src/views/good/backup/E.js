
import React from 'react'
import { connect } from 'react-redux'

export default connect(
  state => ({
    count: state.study.count
  }),
  dispatch => ({
    addCount: payload => dispatch({type:'study/add', payload}),
    subCount (payload) { dispatch({type:'study/sub', payload})}
  })
)(
  props => {
    const { count, addCount, subCount } = props
    return (
      <div>
        商品列表
        <h1>{ count }</h1>
        <button onClick={()=>subCount(1)}>自减</button>
        <button onClick={()=>addCount(2)}>自增</button>
      </div>
    )
  }
)
