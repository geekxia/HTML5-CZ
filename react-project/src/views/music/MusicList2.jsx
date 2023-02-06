import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFullscreen } from 'react-use'

import { fetchQQList } from '@/api'

function getMusic (params) {
  return function (dispatch) {
    fetchQQList(params).then(res=>{
      const action = { type:'cz', payload: res.hotkey }
      dispatch(action)
    })
  }
}

export default () => {

  const video = useRef(null)
  const [full, setFull] = useState(false)
  useFullscreen(video, full, {onClose: ()=>setFull(false)})

  const dispatch = useDispatch()
  // 访问状态管理中的state
  const musicList = useSelector(state=>state.music.list)
  console.log('---musicList', musicList)

  useEffect(()=>{
    dispatch( getMusic({}) )
  }, [])

  return (
    <div>
      <div
        ref={video}
        style={{width:'400px',height:'400px',margin:'0 auto',background:'red'}}>
        视频
      </div>
      <button onClick={()=>setFull(true)}>全局</button>
    </div>
  )
}
