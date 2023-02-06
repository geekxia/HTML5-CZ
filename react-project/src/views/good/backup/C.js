
import React from 'react'
import { connect } from 'react-redux'

class Test extends React.PureComponent {

  render () {
    console.log('this', this)
    const { count, addCount, subCount } = this.props
    return (
      <div>
        商品列表
        <h1>{ count }</h1>
        <button onClick={()=>subCount()}>自减</button>
        <button onClick={()=>addCount()}>自增</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.study.count
  }),
  dispatch => ({
    addCount: () => dispatch({type:'study/add',payload:100}),
    subCount () { dispatch({type:'study/sub',payload:50})}
  })
)(Test)
