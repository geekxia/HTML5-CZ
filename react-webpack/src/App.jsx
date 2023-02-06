import React from 'react'
// 全局样式
import '@/styles/init.scss'

// 路由V6版本
import { HashRouter, Routes, Route } from 'react-router-dom'
import routes from '@/views'
import Layout from '@/layout'

// 把mobx和react连接起来
import { Provider } from 'mobx-react'
import store from '@/store'

// 生成路由匹配规则
const createRoutes = () => {
  let result = []
  routes.forEach(ele=>{
    if (ele.routes) {
      ele.routes.forEach(ele=>{
        result.push(
          <Route key={ele.id} path={ele.path} element={ele.element} />
        )
      })
    }
  })
  return result
}

function App () {

  return (
      <HashRouter>
        <Provider {...store}>
          {/* 相当于<Switch> */}
          <Routes>
            {/* 嵌套路由 */}
            <Route path='/' element={<Layout />}>
              { createRoutes() }
              <Route path='*' element={<div>页面走丢了</div>} />
            </Route>
          </Routes>
        </Provider>
      </HashRouter>
  )
}

export default App
