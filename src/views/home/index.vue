<template>
  <div class="home-container pub-flex">
    <!-- 三列布局 -->
    <div class="home-left">
      <cathet-view :cathetData="chartLeft"></cathet-view>
    </div>
    <div class="home-middle">
      <middle-view></middle-view>
    </div>
    <div class="home-right">
      <cathet-view :cathetData="chartRight"></cathet-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import cathetView from './components/cathet/index.vue'
import middleView from './components/middle/index.vue'

import DTOchartData from '@/mock/table.json'

// 开启缩放功能
import { useResize } from '@/hooks/resize/index'
useResize()

const chartLeft = ref([])
const chartRight = ref([])

const getChartData = () => {
  const { code, data } = DTOchartData
  if (code === 200) {
    chartLeft.value = data[0].tchildren
    chartRight.value = data[2].tchildren
  }
}
getChartData()
onMounted(() => {
  // 获取图表数据
})
</script>

<style lang="scss">
.pub-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-container {
  height: 100%;
  width: 100%;
  background: url(../../assets/images/bg.png);
  background-size: 100% 100%;
  .home-left {
    width: 100%;
    height: 100%;
    flex: 0.3;
  }
  .home-middle {
    width: 100%;
    height: 100%;
    flex: 0.4;
  }
  .home-right {
    width: 100%;
    height: 100%;
    flex: 0.3;
  }
}
</style>
