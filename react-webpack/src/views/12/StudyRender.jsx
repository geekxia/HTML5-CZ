import React, { PureComponent } from 'react'

class StudyRender extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      bool: true,
      row: 0,
      cc: 0,
      list: [
        { id: 1, name: '张三', age: 10 },
        { id: 2, name: '李四', age: 20 },
        { id: 3, name: '王五', age: 30 },
        { id: 4, name: '赵六', age: 40 }
      ]
    }
  }

  // 自定义渲染函数（返回值是ReactNode）
  renderRow () {
    const { row } = this.state
    let result = null
    switch (row) {
      case 0:
        result = <h1>第一行文字</h1>
        break
      case 1:
        result = <h1>第二行文字</h1>
        break
      case 2:
        result = <h1>第三行文字</h1>
        break
      case 3:
        result = <h1>第四行文字</h1>
        break;
      default:
    }
    return result
  }

  renderList1 () {
    const { list } = this.state
    return list.map((ele,idx)=>(
      <div key={ele.id}>
        {idx} - {ele.id} - {ele.name} - {ele.age}
      </div>
    ))
  }

  renderList2 () {
    const { list } = this.state
    return list.map((ele,idx)=>{
      // do something
      return (
        <div key={ele.id}>
          {idx} - {ele.id} - {ele.name} - {ele.age}
        </div>
      )
    })
  }

  renderList3 () {
    const { list } = this.state
    let result = []
    list.forEach((ele,idx)=>{
      // do something
      result.push(
        <div key={ele.id}>
          {idx} - {ele.id} - {ele.name} - {ele.age}
        </div>
      )
    })
    return result
  }

  rowSkip (ele, ev) {
    console.log('---clicked', ele)
    console.log('---clicked', ev)
  }

  listSkip (ev) {
    // currentTarget 事件所绑定的DOM节点
    // target 所点击的那个DOM节点
    console.log('---clicked', ev.target.dataset.id)
  }

  render () {

    const { bool, cc, list } = this.state

    return (
      <div>
        <h1>学习条件渲染、列表渲染、动态样式</h1>
        <hr/>

        {/* bool && <h1>我是一个可有可无的人</h1> */}
        <h1 style={ {display: (bool?'block':'none')} }>我是一个可有可无的人</h1>
        <button onClick={()=>this.setState(_=>({bool: !_.bool}))}>显示与隐藏</button>
        <hr/>

        { this.renderRow() }
        <button onClick={()=>this.setState(_=>({row: (_.row+1)%4}))}>切换行显示</button>
        <hr/>

        <h1 className={`c${cc} long`}>变色龙</h1>
        <button onClick={()=>this.setState({cc: Math.floor(Math.random()*4)})}>开始表演</button>
        <hr/>

        {
          list.map((ele,idx)=>(
            <div key={ele.id}>
              <span>{idx} - {ele.id} - {ele.name} - {ele.age}</span>
              {/* <button onClick={this.rowSkip.bind(this, ele)}>详情</button> */}
              <button onClick={ev=>this.rowSkip(ele, ev)}>详情</button>
            </div>
          ))
        }
        <hr/>

        {/* 事件委托：背后的原理是事件冒泡机制 */}
        <div onClick={ev=>this.listSkip(ev)}>
          {
            list.map((ele,idx)=>(
              <div key={ele.id}>
                <span>{idx} - {ele.id} - {ele.name} - {ele.age}</span>
                {/* dataset 自定义属性 */}
                <button data-id={ele.id}>详情</button>
              </div>
            ))
          }
        </div>
        <hr/>

        { this.renderList1() }
        <hr/>
        { this.renderList2() }
        <hr/>
        { this.renderList3() }
      </div>
    )
  }
}

export default StudyRender
