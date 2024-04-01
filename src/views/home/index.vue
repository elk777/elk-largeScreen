<template>
  <div class="maxWH">
    <div ref="screenRef" class="home-container">
      <div class="home-top">
        <head-view></head-view>
      </div>
      <div class="home-main maxWH pub-flex">
        <!-- 三列布局 -->
        <div class="home-left">
          <cathet-view :cathetData="chartLeft" :site="'left'"></cathet-view>
        </div>
        <div class="home-middle">
          <middle-view></middle-view>
        </div>
        <div class="home-right">
          <cathet-view :cathetData="chartRight" :site="'right'"></cathet-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, markRaw } from 'vue'
import cathetView from './components/cathet/index.vue'
import middleView from './components/middle/index.vue'
import headView from './components/header/index.vue'

import { getReport } from '@/apis/report/index.js'

// 开启适配
import { useResize } from '@/hooks/viewportResize/index.js'
const { screenRef } = markRaw(useResize())

const chartLeft = ref([])
const chartRight = ref([])

const getReportData = () => {
  getReport().then((res) => {
    if (res.code === 200) {
      chartLeft.value = res.data.left
      chartRight.value = res.data.right
    }
  })
}
onMounted(() => {
  // 获取图表数据
  getReportData()
})
</script>

<style lang="scss">
.maxWH {
  width: 100%;
  height: 100%;
}
.pub-flex {
  display: flex;
}
.home-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform-origin: left top;
  .home-main {
    height: calc(100% - 50px);
    .home-left {
      flex: 1;
      height: 100%;
    }
    .home-middle {
      width: 50%;
      height: 100%;
    }
    .home-right {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
