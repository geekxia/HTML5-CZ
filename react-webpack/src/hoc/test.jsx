// 高阶组件 = 高阶函数 = 容器组件
// 入参是React组件（UI组件）
// 返回一个新的被修饰过的组件

import React, { PureComponent } from 'react'

function test(WrappedComponent) {
  // do something
  return class extends PureComponent {
    constructor (props) {
      super(props)
      this.state = {
        name: 'hoc'
      }
    }
    handler (id) {
      console.log('悄悄调接口，埋点', id)
    }
    render () {
      const { name } = this.state
      return (
        <div>
          <WrappedComponent {...this.props} name={name} onHandle={(id)=>this.handler(id)} />
          <footer>底部</footer>
        </div>
      )
    }
  }
}

export default test
