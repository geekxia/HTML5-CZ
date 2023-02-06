import React, { useContext } from 'react'

import ChildA from './components/ChildA'
import ChildB from './components/ChildB'


class Study1 extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      count: 1,
      temper: 0
    }
  }

  add (ev, step) {
    console.log('--step', step)
    console.log('--ev', ev)
    // this.setState({
    //   count: this.state.count + 1
    // })
    this.setState((state,props)=>{
      return {
        count: state.count + step
      }
    })
  }

  cHandler (ev) {
    console.log('c hander ev', ev)
    this.setState({
      temper: Number(ev.target.value)
    })
  }

  render () {
    const { count, temper } = this.state
    const xx = 11
    console.log('--props', this)

    return (
      <div>
        <h1>学习【类组件】</h1>
        <h1 title={ xx }>{ count } - { xx }</h1>
        // <button onClick={this.add.bind(this, 10)}>自增</button>
        <button onClick={(ev)=>this.add(10, ev)}>自增</button>
        <hr/>

        <ChildA value={ temper } onChange={(ev)=>this.cHandler(ev)}></ChildA>
        <hr/>
        <ChildB value={ temper + 37 }></ChildB>
        <hr/>

      </div>
    )
  }
}
