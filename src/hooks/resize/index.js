/*
 * @Author: elk LYF_elk@163.com
 * @Date: 2024-03-20 16:51:23
 * @LastEditors: elk LYF_elk@163.com
 * @LastEditTime: 2024-03-20 22:10:47
 * @FilePath: /vue-BigScreen/src/hooks/resize/index.js
 * @Description: 屏幕缩放hooks函数
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 默认适配宽高
export const width = 3920
export const height = 1080

export const useResize = (options = {}) => {
  const { w = width, h = height, fullScreen = false, delay = 100 } = options
  const screenRef = ref(),
    scale = ref(1)

  /* 
    resize函数
        1、获取浏览器宽高
        2、计算宽高缩放比例
        3、浏览器宽高和设计稿宽高进行对比
            如果浏览器设宽高比大于设计稿宽高比，则按照高度缩放
            如果浏览器宽高比小于设计稿宽高比，则按照宽度缩放
        4、考虑缩放失真的情况
            如果不在乎就设置全屏
            否则就适配比例缩放
        5、onMounted 添加方法
        6、onBeforeUnmount 移除方法
   */
  function resize() {
    const clientWidth = document.body.clientWidth,
      clientHeight = document.body.clientHeight,
      scaleW = clientWidth / w,
      scaleH = clientHeight / h

    if (clientWidth / clientHeight > w / h) {
      scale.value = scaleH
    } else {
      scale.value = scaleW
    }
    if (fullScreen) {
      screenRef.value.style.transform = `scale(${scaleW},${scaleH})`
    } else {
      screenRef.value.style.transform = 'scale(' + scale.value + ')'
    }
    console.log('触发', screenRef.value.style.transform)
  }
  onMounted(() => {
    console.log('onMounted', screenRef.value)
    if (screenRef.value) {
      resize()
      window.addEventListener('resize', resize)
    }
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })
  return { scale, screenRef }
}
