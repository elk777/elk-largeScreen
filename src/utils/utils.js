/**
 * @description: 验证是否为空对象
 * @params obj: 目标对象
 * @return {Boolean}
 */
export const isEmptyObject = function (obj) {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object
}
