<template>
  <div class="home-container pub-flex">
    <!-- 三列布局 -->
    <div class="home-left">
      <el-row class="h50">
        <el-col :span="12" class="left-bg">
          <chart-view :chart-option="barOpt" :auto-resize="true" :height="'100%'"></chart-view>
        </el-col>
        <el-col :span="12" class="right-bg">
          <chart-view :chart-option="barOpt" :auto-resize="true" :height="'100%'"></chart-view>
        </el-col>
      </el-row>
      <el-row class="h50">
        <el-col :span="12" class="left-bg">
          <chart-view :chart-option="lineOpt" :auto-resize="true" :height="'100%'"></chart-view>
        </el-col>
        <el-col :span="12" class="right-bg">
          <chart-view :chart-option="pieOpt" :auto-resize="true" :height="'100%'"></chart-view>
        </el-col>
      </el-row>
    </div>
    <div class="home-middle">
      <video src=""></video>
    </div>
    <div class="home-right">
      <el-row class="h50">
        <el-col :span="12" class="left-bg">
          <chart-view :chart-option="lineOpt" :auto-resize="true" :height="'100%'"></chart-view>
        </el-col>
        <el-col :span="12" class="right-bg">
          <chart-view :chart-option="barOpt" :auto-resize="true" :height="'100%'"></chart-view>
        </el-col>
      </el-row>
      <el-row class="h50">
        <el-col :span="12" class="left-bg">
          <chart-view :chart-option="pieOpt" :auto-resize="true" :height="'100%'"></chart-view>
        </el-col>
        <el-col :span="12" class="right-bg">
          <chart-view :chart-option="barOpt" :auto-resize="true" :height="'100%'"></chart-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
// import { getStatic, getDynamic } from '@/apis/video/index'
import { ref, onMounted } from 'vue'
// let staticData = ref()
// let dynamicData = ref()
import barConfig from '@/components/Chart/options/bar'
import lineConfig from '@/components/Chart/options/line'
import pieConfig from '@/components/Chart/options/pie'

import { useResize } from '@/hooks/resize/index'
useResize()

let barOpt = ref(barConfig())
let lineOpt = ref(lineConfig())
let pieOpt = ref(pieConfig())

onMounted(() => {
  // getStaticData()
  // getDynamicData()
})
</script>

<style lang="scss" scoped>
.pub-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-col {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.h50 {
  height: 50%;
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

  .left-bg {
    background: url(../../assets/images/kuang.png);
    background-size: 100% 100%;
  }
  .right-bg {
    background: url(../../assets/images/kuang2.png);
    background-size: 100% 100%;
  }
}
</style>
