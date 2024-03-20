<template>
  <div ref="screenRef" class="home-container pub-flex">
    <!-- 三列布局 -->
    <div class="home-left">
      <el-row class="h50">
        <el-col :span="12" class="left-bg">1</el-col>
        <el-col :span="12" class="left-bg">2</el-col>
      </el-row>
      <el-row class="h50">
        <el-col :span="12" class="left-bg">3</el-col>
        <el-col :span="12" class="left-bg">4</el-col>
      </el-row>
    </div>
    <div class="home-middle">
      <video src=""></video>
    </div>
    <div class="home-right">
      <el-row class="h50">
        <el-col :span="12" class="right-bg">5</el-col>
        <el-col :span="12" class="right-bg">6</el-col>
      </el-row>
      <el-row class="h50">
        <el-col :span="12" class="right-bg">7</el-col>
        <el-col :span="12" class="right-bg">8</el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { getStatic, getDynamic } from '@/apis/video/index'
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useResize } from '@/hooks/resize/index'

const { screenRef } = storeToRefs(useResize())

let staticData = ref()
let dynamicData = ref()

onMounted(() => {
  // getStaticData()
  // getDynamicData()
})

const getStaticData = function () {
  getStatic().then((res) => {
    console.log('getStatic', res)
    staticData.value = res
  })
}
const getDynamicData = function () {
  getDynamic().then((res) => {
    console.log('getDynamic', res)
    dynamicData.value = res
  })
}
</script>

<style lang="scss" scoped>
.pub-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.h50 {
  height: 50%;
}
.home-container {
  height: 100vh;
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
