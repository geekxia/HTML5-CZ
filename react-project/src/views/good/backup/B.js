
import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  console.log('---Test state', state)
  return {
    count: state.study.count
  }
}

function mapDispatchToProps (dispatch) {
  console.log('---Test dispatch', dispatch)
  return {
    addCount () {
      const action = { type: 'study/add', payload: 100 }
      dispatch(action)  // 发邮件（标题、内容）---store
    },
    subCount () {
      const action = { type: 'study/sub', payload: 50 }
      dispatch(action)
    }
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Test)
