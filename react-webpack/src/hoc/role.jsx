import React from 'react'

// export default C => (props => <C />)

// 粗粒度的权限（页面）
// 细粒度的权限（元素）

export default C => {
  // 访问状态管理 role='admin'
  const role = 'editor'
  return props => {
    return (
      <>
        <C {...props} role={role} />
        { role==='admin' && <button>发布</button> }
      </>
    )
  }
}
