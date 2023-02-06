import { request } from 'umi'

export function fetchCnode (params) {
    return request('/topics', { method:'GET', params })
}