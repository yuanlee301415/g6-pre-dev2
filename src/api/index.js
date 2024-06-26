import request from '@/utils/request'

export function getCitTreeAPI () {
  return request({
    url: `/cit`,
    method: 'get'
  })
}

export function getTopologyAPI (id) {
  return request({
    url: `/topology/${id}`,
    method: 'get'
  })
}

export function getNeighborsAPI (nodeId) {
  return request({
    url: `/neighbors/${nodeId}`,
    method: 'get'
  })
}
