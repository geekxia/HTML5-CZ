import React, { PureComponent } from 'react'

const Celsius = props => {

  return (
    <div>
      <span>摄氏温度：</span>
      {/* 这个input，完全是由父组件来受控的  */}
      <input type="text" {...props} />
    </div>
  )
}

const Fahrenheit = ({value}) => {
  return (
    <div>
      <span>华氏温度：</span>
      <span>{ (value * 9 / 5) + 32 }</span>
    </div>
  )
}

export default class extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      temper: 0
    }
  }

  render () {
    const { temper } = this.state
    return (
      <div>
        <h1>学习状态提升</h1>
        <hr/>
        <Celsius
          value={temper}
          onChange={ev=>this.setState({temper:Number(ev.target.value)})}
        />
        <hr/>
        <Fahrenheit value={temper} />
      </div>
    )
  }
}
