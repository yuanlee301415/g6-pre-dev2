import request from '@/utils/request'

export function getCitTreeAPI () {
  return request({
    url: `/cit/__tree__`,
    method: 'get'
  })
}
