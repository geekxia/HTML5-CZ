import React, { PureComponent } from 'react'

import Modal from './components/Modal'

export default class extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }

  confirm () {
    console.log('调接口，确定，或，删除')
    this.setState({show: false})
  }

  render () {
    const { show } = this.state
    return (
      <div>
        <button onClick={()=>this.setState({show:true})}>编辑用户</button>

        <Modal
          title='警告'
          visible={show}
          onCancel={()=>this.setState({show:false})}
          onOk={()=>this.confirm()}
          closable
          type='confirm'
        >
          <p>用户自定义的弹框内容</p>
        </Modal>
      </div>
    )
  }
}
