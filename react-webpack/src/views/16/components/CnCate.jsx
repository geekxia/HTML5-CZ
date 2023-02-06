import React from 'react'

export default ({cates, value, onChange}) => {

  return (
    <div className='cates'>
    {
      cates.map(ele=>(
        <span
          className={value===ele.tab?"on":""}
          onClick={()=>onChange(ele.tab)}
          key={ele.id}
        >
        { ele.label }
        </span>
      ))
    }
    </div>
  )
}
