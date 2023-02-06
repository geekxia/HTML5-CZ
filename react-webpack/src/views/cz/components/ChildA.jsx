import React from 'react'

export default class extends React.PureComponent {

  render () {
    console.log('---ChildA props', this.props)
    const { value, onChange } = this.props
    return (
      <>
        <h1>你是大儿子</h1>
        摄氏温度：<input type="text" value={value} onChange={onChange} />
      </>
    )
  }
}
