import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 函数式组件（无状态组件）

function A (props) {
  // do something
  console.log('A props', props)
  const { name, children } = props
  return (
    <>
      <div>函数式组件：{ name }</div>
      { children }
    </>
  )
}
// 使用prop-types对属性进行类型验证、必填与非必填的验证
A.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  info: PropTypes.node,   // node = element | string | number | array | fragment
}
// 给非必填属性添加默认值
A.defaultProps = {
  name: '未知姓名',
  checked: false,
  info: null
}


const B = props => {
  // do something
  console.log('B props', props)
  const { children, list } = props
  let result = []
  if (typeof children === 'function') {
    list.forEach(num=>{
      result.push(children(num))
    })
  }
  return (
    <>
      <div>函数式组件</div>
      <ul>{ result }</ul>
    </>
  )
}
B.propTypes = {
  addr: PropTypes.node,
  info: PropTypes.object,
  list: PropTypes.array.isRequired
}
B.defaultProps = {
  addr: null,
  info: {}
}

const C = props => {
  console.log('C props', props)
  const { onRun, footer, render } = props
  return (
    <>
      <div>
        函数式组件：<button onClick={ onRun }>点击</button>
      </div>
      { footer }
      { render(1000) }
    </>
  )
}
C.propTypes = {
  footer: PropTypes.element.isRequired,
  onRun: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary','danger','info','warning']),
  message: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  render: PropTypes.func.isRequired
}
C.defaultProps = {
  type: 'primary',
  message: 'Hello'
}

// 类组件（有state）

class D extends Component {
  render () {
    // do something
    console.log('D props', this.props)
    return (
      <>
        <div>类组件</div>
        <hr/>
        <A name='张三' checked={false} age={20} info={null}>
          <div>A1</div>
          <div>A2</div>
          <div>
            <span>A3</span>
          </div>
        </A>
        <hr/>
        <B addr={null} list={[1,2,3]} info={ {a:1,b:2} }>
          { arg => <li key={arg}>{ arg }</li> }
        </B>
        <hr/>
        <C
          onRun={ ()=>console.log('run') }
          footer={<div>底部</div>}
          type='danger'
          message={1000}
          render={(arg)=>{
            // do something
            return <div>Render View {arg}</div>
          }}
        />
        <hr/>
      </>
    )
  }
}

export default D
