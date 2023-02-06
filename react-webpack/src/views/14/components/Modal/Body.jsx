import React from 'react'
import Foot from './Foot'

const Body = props => {
  const { children, size } = props
  const isDefault = (size==='default')
  return (
    <div className='body' style={{padding:isDefault?'25px':'15px'}}>
      { children }
      { !isDefault && <Foot {...props} />}
    </div>
  )
}

export default Body
