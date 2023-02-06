// asyncRoutes 有权限的路由规则
// constantRoutes 所有人可以访问的路由规则
import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    // some(checkFn) // 遍历数组，使用checkFn对每一个元素进行检测，如果有一个检测通过，some()就返回true；反之，如果都检测未通过，就返回false。
    // ['admin','editor'].some(role=> route.meta.roles.includes(role))
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */

export function filterAsyncRoutes(routes, roles) {
  const res = [] // 在这里存储可以访问的权限路由

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      // 递归方法
      if (tmp.children) {
        // [setter] route.children
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  // 用于生成当前用户可以访问的路由规则
  // 这个 roles 是后端返回的角色信息（数组 ['admin',...]）
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes = []
      if (roles.includes('admin')) {
        // 如果当前用户是admin角色，它可以访问所有的“有权限的路由”
        // accessedRoutes = asyncRoutes || []
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      } else {
        // 如果当前用户不是admin角色，使用filterAsyncRoutes动态生成可访问的路由规则
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      // 把当前用户可访问的权限路由，放到state上去
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes) // .then() 给导航守卫使用
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
