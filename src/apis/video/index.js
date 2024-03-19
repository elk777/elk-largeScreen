import service from '@/utils/request'

const modulePath = '/video'

const api = {
  getStatic: modulePath + '/static',
  getDynamic: modulePath + '/dynamic'
}

const getStatic = function () {
  return service({
    url: api.getStatic,
    method: 'get'
  })
}
const getDynamic = function () {
  return service({
    url: api.getDynamic,
    method: 'get'
  })
}

export { getStatic, getDynamic }
