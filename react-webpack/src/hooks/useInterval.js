import { useEffect } from 'react'

const useInterval = (fn, deps) => {
  // 实现定时器自增
  useEffect(()=>{
    const timer = setTimeout(fn, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, deps)
}

export default useInterval
