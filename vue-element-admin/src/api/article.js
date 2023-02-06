import request from '@/utils/request'

export function fetchCnode(params) {
  return request({
    url: '/topics',
    method: 'GET',
    params
  })
}

export function fetchList(params) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
