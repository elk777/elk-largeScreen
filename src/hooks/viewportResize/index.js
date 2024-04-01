/*
 * @Author: elk LYF_elk@163.com
 * @Date: 2024-03-20 16:51:23
 * @LastEditors: elk LYF_elk@163.com
 * @LastEditTime: 2024-04-01 09:09:28
 * @FilePath: /vue-BigScreen/src/hooks/resize/index.js
 * @Description: 屏幕缩放hooks函数
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 默认适配宽高
export const width = 1920
export const height = 1080

export const useResize = (options = {}) => {
  const { w = width, h = height } = options
  const scale = ref(1)
  const screenRef = ref()
  /* 
    resize函数
        1、获取浏览器宽高
        2、计算宽高缩放比例
        3、浏览器宽高和设计稿宽高进行对比
            如果浏览器设宽高比大于设计稿宽高比，则按照高度缩放
            如果浏览器宽高比小于设计稿宽高比，则按照宽度缩放
        4、onMounted 添加方法
        5、onBeforeUnmount 移除方法
   */
  function resize() {
    const clientWidth = document.documentElement.clientWidth || document.body.clientWidth,
      clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
      scaleW = clientWidth / w,
      scaleH = clientHeight / h

    if (clientWidth / clientHeight > w / h) {
      scale.value = scaleH
    } else {
      scale.value = scaleW
    }
    screenRef.value.style.transform = `scale(${scale.value}) translate(-50%, -50%)`
  }
  onMounted(() => {
    if (screenRef.value) {
      resize()
      screenRef.value.style.width = `${width}px`
      screenRef.value.style.height = `${height}px`
      window.addEventListener('resize', resize)
    }
  })
  onBeforeUnmount(() => {
    console.log('实例卸载了吗....')
    window.removeEventListener('resize', resize)
  })

  return { screenRef, scale }
}
