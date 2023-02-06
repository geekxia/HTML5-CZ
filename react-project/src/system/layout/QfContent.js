import { useMemo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import routes from '@/views'
// 权限：在这里我省略了store.userinfo.roles 和 routes 动态渲染路由规则。

function renderRoutes () {
  let result = []
  const recursion = arr => {
    if (arr) {
      arr.map(ele=>{
        result.push(
          <Route key={ele.id} path={ele.path} component={ele.component} />
        )
        if (ele.children) recursion(ele.children)
      })
    }
  }
  routes.map(ele=>{
    if (ele.children) recursion(ele.children)
  })
  return result
}

export default () => {

  const { userinfo } = useSelector(state=>state.user)

  // 算法：根据后端返回的roles生成当前用户可访问的路由规则
  const curRoutes = useMemo(()=>{
    if (userinfo.roles) {
      console.log('---生成动态[路由]')

    }
  }, [userinfo])

  return (
    <div className='content'>
      <Switch>
        { renderRoutes() }
        <Redirect from='*' to='/good/list' />
      </Switch>
    </div>
  )
}
