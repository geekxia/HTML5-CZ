import request from '@/utils/request'

export function fetchAllCates(params={}) {
  return request({
    url: '/element/cates',
    method: 'get',
    params
  })
}

// 商品新增与编辑
export function fetchGoodSubmit(data) {
  return request({
    url: '/element/good/update',
    method: 'post',
    data
  })
}

export function fetchGoodList(params={}) {
  return request({
    url: '/element/good/list',
    method: 'get',
    params
  })
}

export function fetchGoodInfo(id) {
  return request({
    url: '/element/good/info',
    method: 'get',
    params: { id }
  })
}

// 支持指删除
export function fetchGoodDel(ids) {
  return request({
    url: '/element/good/del',
    method: 'post',
    data: { ids }
  })
}
