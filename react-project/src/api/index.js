import request from '@/utils/request'

const v = '/api/v1/react'

export function fetchQQList (params) {
  return request({
    url: '/splcloud/fcgi-bin/gethotkey.fcg',
    method: 'GET',
    params
  })
}

export function fetchLogin (data) {
  return request({
    url: `${v}/user/login`,
    method: 'POST',
    data
  })
}

export function fetchUserInfo() {
  return request({
    url: `${v}/user/info`,
    method: 'GET',
    params: {}
  })
}

export function fetchCates () {
  return request({
    url: `${v}/good/cates`,
    method: 'GET',
    params: {}
  })
}

export function fetchGoodList (params) {
  return request({
    url: `${v}/good/list`,
    method: 'GET',
    params
  })
}

export function fetchGoodForm(data) {
  return request({
    url: `${v}/good/update`,
    method: 'POST',
    data
  })
}

export function fetchGoodInfo (id)  {
  return request({
    url:`${v}/good/info`,
    method: 'GET',
    params:{ id }
  })
}

export function fetchGoodDel (ids) {
  return request({
    url: `${v}/good/delete`,
    method: 'POST',
    data: {ids}
  })
}
