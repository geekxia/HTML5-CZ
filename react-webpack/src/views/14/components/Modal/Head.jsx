import React from 'react'

const Head = props => {
  const { title, onCancel, closable } = props
  return (
    <div className='head'>
      <div className='tip'>
        { title }
      </div>
      {
        closable &&
          <div className='close' onClick={onCancel}>X</div>
      }
    </div>
  )
}

export default Head
