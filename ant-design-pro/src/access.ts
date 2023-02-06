/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

interface AccessState {
  currentUser?: API.CurrentUser  // 这个类型来自.d.ts或@types/*
}

// @umijs/plugin-access 要求抛出权限函数
// 这个 initialState 入参，来自 @umijs/plugin-initialState插件（src/app.ts）
export default function access(initialState: AccessState | undefined) {

  console.log('---由getInitialState插件给的用户信息', initialState)

  // currentUser就是后端返回的用户信息（这个用户信息的数据结构要满足 API.CurrentUser ）
  const { currentUser } = initialState ?? {};

  // 返回一系列的权限字段
  // - 粗粒度权限：在routes中使用access属性设计菜单级别的权限
  // - 细粒度权限：使用useAccess()设计组件中的元素级别的权限
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    canUser: currentUser && currentUser.access === 'user',
    // canEditor: currentUser && currentUser.roles.includes('editor'),
    // banAn: currentUser && currentUser.role === 'baoan'
  };
}
