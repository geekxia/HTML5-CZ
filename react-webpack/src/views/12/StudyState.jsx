import React, { Component } from 'react'

// 类组件（有state）
export default class StudyState extends Component {

  constructor (props) {
    super(props)
    // 定义state声明式变量
    this.state = {
      msg: 'Hello',
      count: 100
    }
  }

  // 成员方法（事件处理函数）
  changeMsg () {
    // setTimeout(()=>{}, 0)

    console.log('---start', this.state.msg)

    this.setState({
      msg: 'Hello World'
    }, ()=>console.log('---callback', this.state.msg))

    this.setState({
      msg: 'Hello 2117'
    })

    this.setState({
      msg: 'Hello QF',
      count: 200
    })

    console.log('---end', this.state.msg)

    // React在背后，自动合并当前函数域中的所有的this.setState()
    // this.setState({
    //   msg: 'Hello QF',
    //   count: 200
    // }, ()=>console.log('---callback', this.state.msg))

  }

  changeCount () {
    console.log('---clicked', this)
    // this.setState(state=>{
    //   // do something
    //   return {
    //     count: state.count + 1
    //   }
    // })
    this.setState(state => ({count: state.count+1}))
  }


  render () {
    console.log('-----rendered')
    const { msg, count } = this.state

    return (
      <div>
        <h1>学习State（学习事件绑定）</h1>
        <h1>{ msg }</h1>
        <button onClick={ this.changeMsg.bind(this) }>修改问候</button>
        <hr/>
        <h1>{ count }</h1>
        <button onClick={ ()=>this.changeCount() }>自增</button>
      </div>
    )
  }
}
