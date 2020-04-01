import request from '@/utils/request'

export function getShow (req) {
  return request({
    url: 'findAll',
    method: 'get',
    params: req
  })
}
export function getSearch (req) {
  return request({
    url: 'findByTitle2',
    method: 'get',
    params: req
  })
}
