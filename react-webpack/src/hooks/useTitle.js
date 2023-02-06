import { useEffect } from 'react'

// 作用：用于改变当前页面在浏览器上的Title
const useTitle = title => {
  useEffect(()=>{
    document.title = title || '千锋'
  }, [])
}

export default useTitle
