<!--
 * @Author: elk 
 * @Date: 2024-03-20 21:05:51
 * @LastEditors: elk LYF_elk@163.com
 * @LastEditTime: 2024-03-23 19:53:56
 * @FilePath: /vue-BigScreen/src/components/Chart/index.vue
 * @Description:echart组件的封装
-->
<!-- 
  @params: width 宽度
  @params: height 宽度
  @params: autoResize 是否自动调整大小
  @params: chartOption 图表的配置
 -->
<template>
  <div class="chart-container">
    <div ref="chart" :style="{ height: height, width: width }"></div>
  </div>
</template>

<script setup>
import echarts from './config.js'
import { ref, onMounted, onBeforeUnmount, watch, markRaw } from 'vue'
/* 接收传递的参数 */
const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '500px'
  },
  autoResize: {
    type: Boolean,
    default: true
  },
  chartOption: {
    type: Object,
    required: true
  }
})
/* 监听数据变化 */
watch(
  () => props.chartOption,
  (newVal, oldVal) => {
    console.log('newVal', newVal)
    setOptions(newVal)
  }
)
/* 定义chart */
let chart = ref(null)
/* 初始化图表 */
const initChart = () => {
  chart.value = markRaw(echarts.init(chart.value))
  chart.value.setOption(props.chartOption)
}
/* 开启图表自适应 */
const openResize = () => {
  chart.value.resize()
}
/* 清除图表 */
const clearChart = () => {
  chart.value.dispose()
}
/* 更新配置信息 */
const setOptions = () => {
  clearChart()
  openResize()
  if (chart.value) {
    chart.value.setOption(props.chartOption)
  }
}
onMounted(() => {
  initChart()
  if (chart.value && props.autoResize) {
    window.addEventListener('resize', openResize)
  }
})
onBeforeUnmount(() => {
  if (chart.value && props.autoResize) {
    window.removeEventListener('resize', openResize)
  }
  chart.value.dispose()
  chart.value = null
})
</script>

<style lang="scss">
.chart-container {
  width: 85%;
  height: 80%;
}
</style>
