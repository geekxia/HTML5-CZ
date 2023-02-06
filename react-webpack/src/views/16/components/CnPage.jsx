import React, { useMemo } from 'react'

export default ({value, onChange}) => {

  const pages = useMemo(()=>{
    // 1  1 2 3 4 5 ...
      // 2  1 2 3 4 5 ...
      // 3  1 2 3 4 5 ...
      // 4  ... 2 3 4 5 6 ...
      // n  ... n-2 n-1 n n+1 n+2 ...
      const v = value
      return v<=3 ? [1,2,3,4,5] : [v-2,v-1,v,v+1,v+2]
  }, [value])

  const prev = () => {
    if (value===1) alert('已经是第一页了')
    else onChange(value-1)
  }

  return (
    <div className='pages'>
    <span onClick={prev}>{'<<'}</span>
    { value>3 && <span>...</span> }

    {
      pages.map(ele=>(
        <span
          key={ele}
          className={ele===value?"on":""}
          onClick={()=>onChange(ele)}
        >
        { ele }
        </span>
      ))
    }
    <span>...</span>
    <span onClick={()=>onChange(value+1)}>{'>>'}</span>
  </div>
  )
}
