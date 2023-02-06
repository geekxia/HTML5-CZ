import React from 'react'

export default roleArr => {
  // 访问状态管理中的 role='admin'
  const role = 'editor'
  const isAuth = roleArr.includes(role)
  // 返回高阶组件
  return Wrapped => {
    // 返回新UI组件
    return props => {
      // 返回视图结构
      return (
        <>
          { isAuth && <Wrapped {...props} /> }
          { !isAuth && <div>404，<button>Back To Home</button></div>}
        </>
      )
    }
  }
}
