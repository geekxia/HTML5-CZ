import { useMemo } from 'react'  // computed
import { useLocation } from 'react-router-dom'  // $route

import routes from '@/views'  // 自定义的路由数组

// 自定义封装Hooks
function useMenu() {

  const { pathname } = useLocation()
  console.log('---当前url=', pathname)

  // 计算属性
  const result = useMemo(()=>{
    let result = []
    // 从登录进来时，要求首页大屏高亮
    // 当用户刷新首页大屏时，也要求首页大屏高亮
    // if (pathname==='/login' || pathname==='/dashboard') {
    //   return ['1','1']
    // }

    routes.forEach(ele1=>{
      if(ele1.children) {
        ele1.children.forEach(ele2=>{
          if (pathname === ele2.path) {
            result = [ele1.id+'', ele2.id+'']
          }
        })
      }
    })
    return result
  }, [pathname])

  return result
}

export default useMenu
