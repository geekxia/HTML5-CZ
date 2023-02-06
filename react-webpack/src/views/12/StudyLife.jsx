import React, { Component, PureComponent } from 'react'


export default class StudyLife extends PureComponent {

  constructor (props) {
    // 调用父类的构造器函数，必须是constructor的第一行代码
    super(props)
    // 定义声明式变量（先定义再使用）
    // 强调：声明式变量常用的数据类型，基本数据类型、对象、数组
    // 在定义state，必须和props独立开来，不要交叉赋值
    this.state = {
      count: 100,
      num: 200,
      msg: 'Hello Life'
    }
    // 在这里可以编写一些初始化业务逻辑
    // 但不要在这里调接口、不要开定时器等
    // 也不能使用 this.setState()
    console.log('----constructor')
  }

  componentDidMount () {
    // 相当于vue中的mounted，表示初始化视图渲染已完成
    // 在这里，你可编写任何你想要的业务逻辑：调接口、开定时器、DOM操作、ref操作等。
    // 在这里，还可以使用 this.setState()，触发进入更新阶段。
    console.log('----componentDidMount')
  }

  shouldComponentUpdate (props, state) {
    // 这是一个“开关”，只要编写了这个生命周期，它必须得返回一个布尔值
    // 当它返回true时，组件将正常执行更新阶段
    // 当它返回false时，到这儿就结束了，不再执行后续的更新阶段了
    // 这玩意有什么用？这是React最早的时候留给我们一个用于性能优化的方案。
    // 因为这个生命周期比较难用，后来React提供了一个叫 PureComponent 的组件，帮助我们实现了shouldComponentUpdate()相似的功能。所以我们定义类组件时，继承自 PureComponent，就没必要再使用 shouldComponentUpdate了。

    if (this.state.num !== state.num) {
      return false
    } else {
      return true
    }
    console.log('----shouldComponentUpdate')
  }

  componentDidUpdate (props, state) {
    // 相当于vue中的updated，表示视图已更新完成
    // 特别说明：这个生命周期等价于 this.setState({}|fn, callback) 的第二个回调函数
    // 结论：一般很少使用this.setState()的第二个回调函数，建议使用这个生命周期来替代
    // 注意：在这里是可以编写业务逻辑的，比如DOM操作、调接口等。
    // 注意：在这里，还可以使用 this.setState() ，但必须给终止条件。就像给 while循环添加终止条件一样。
    // 在某种程度上，这个功能有点像vue中的watch功能。
    if (state.count < 110) {
      // 一定要有终止条件
      // this.setState(state=>({count: state.count + 1}))
    }
    console.log('----componentDidUpdate')
  }

  componentWillUnmount () {
    // 相当于vue中的beforeDestroy，表示组件即将被销毁
    // 在这里，可以清缓存、清除定时器等。
    // 在这里，不能 this.setState()，也没有必要执行DOM功能。
    console.log('----componentWillUnmount')
  }

  renderName () {
    // do something
    // this.setState(state=>({count: state.count + 1}))
    return <h1>我的名义</h1>
  }

  changeCount () {
    this.setState(state=>{
      return {
        count: state.count + 1
      }
    })
  }

  changeNum () {
    this.setState(state=>({num: state.num + 1}))
  }



  render () {
    // 是所有生命周期函数中唯一的一个必须要有的生命周期
    // 也就是说，一个类组件必须得有 render()，它的返回值是视图结构（JSX、Fiber树）
    // 初始化时render()会执行，当this.setState()时也会执行render()
    // 特别注意：在render()函数的作用域内，不能调用 this.setState()，特别小心。
    // 说明：在render()可以处理数据，但不要执行调接口、定时器、DOM操作。
    const { count } = this.state
    console.log('----render')
    return (
      <div>
        <h1>学习生命周期</h1>
        <h1>{ count }</h1>
        <button onClick={()=>this.changeCount()}>自增</button>
        <button onClick={()=>this.changeNum()}>测试</button>
        { this.renderName() }
      </div>
    )
  }
}
