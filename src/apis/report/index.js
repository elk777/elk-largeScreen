import service from '@/utils/request'

const modulePath = '/large'

const api = {
  getReport: modulePath
}

const getReport = function () {
  return service({
    url: api.getReport,
    method: 'get'
  })
}

export { getReport }
