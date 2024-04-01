import service from '@/utils/request'

const modulePath = '/table'

const api = {
  getTable: modulePath,
  updateTable: modulePath
}

const getTable = function () {
  return service({
    url: api.getTable,
    method: 'get'
  })
}
const getTableDetails = function (id) {
  return service({
    url: api.getTable + '/' + id,
    method: 'get'
  })
}
const updateTable = function (data) {
  return service({
    url: api.updateTable + '/' + data.id,
    method: 'put',
    data
  })
}
export { getTable, updateTable, getTableDetails }
