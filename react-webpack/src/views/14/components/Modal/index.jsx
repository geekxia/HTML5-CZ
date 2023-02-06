import React, { PureComponent } from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'  // 和V17一样

import Head from './Head'
import Body from './Body'
import Foot from './Foot'

// 弹框组件
class Modal extends PureComponent  {

  constructor (props) {
    super(props)
    // 创建DOM节点
    this.el = document.createElement('div')
  }

  componentDidMount () {
    // 当Modal渲染完成时，把el节点插入到body标签中去
    document.body.appendChild(this.el)
    console.log('---did mount')
  }

  componentWillUnmount () {
    document.body.removeChild(this.el)
    console.log('---will unnount')
  }

  render () {
    console.log('Modal props', this.props)
    const { visible, onCancel, size } = this.props
    const onLayer = ev => {
      if (ev.target.dataset.self) onCancel()
    }
    const isDefault = (size==='default')
    const container = this.el

    return createPortal(
      visible && (
        <div className='layer' data-self='self' onClick={onLayer}>
          <div
            className='modal'
            style={{
              width: isDefault ? '520px' : '410px',
              marginLeft: isDefault ? '-260px' : '-210px'
            }}
          >
            {/* {...props} 属性穿透 */}
            { isDefault && <Head {...this.props} /> }
            <Body {...this.props} />
            { isDefault && <Foot {...this.props} /> }
          </div>
        </div>
      ),
      container  // 相当于Modal的挂载节点
    )
  }
}

// 使用prop-types属性校验
Modal.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,  PropTypes.element
  ]),
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  closable: PropTypes.bool,
  type: PropTypes.oneOf([
    'default', 'confirm', 'danger'
  ]),
  size: PropTypes.oneOf([
    'default', 'small'
  ])
}

// 指定props的默认值
Modal.defaultProps = {
  title: '标题',
  visible: false,
  closable: true,
  type: 'default',
  size: 'default'
}

export default Modal
