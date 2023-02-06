import request from './request'

export function fetchTopics(params) {
  return request({url:'/topics',method:'GET',params})
}
