import React from 'react'

const Foot = props => {
  const { onCancel, onOk, type, size } = props
  const isDefault = (size==='default')
  return (
    <div
      className='foot'
      style={{
        borderTopColor: isDefault ? '#eee' : 'transparent',
        padding: isDefault ? '0 25px' : 0
      }}
    >
      {
        type !== 'default' &&
          <span className={type} onClick={onOk}>
            { type ==='confirm' ? '确定' : '删除' }
          </span>
      }
      <span onClick={onCancel}>取消</span>
    </div>
  )
}

export default Foot
