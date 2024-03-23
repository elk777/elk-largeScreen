<template>
  <el-row class="h50">
    <el-col :span="12" class="left-bg">
      <chart-view :chart-option="lineOpt" :auto-resize="true" :height="'100%'"></chart-view>
    </el-col>
    <el-col :span="12" class="right-bg">
      <chart-view :chart-option="barOpt" :auto-resize="true" :height="'100%'"></chart-view>
    </el-col>
    <el-col :span="12" class="left-bg">
      <chart-view :chart-option="pieOpt" :auto-resize="true" :height="'100%'"></chart-view>
    </el-col>
    <el-col :span="12" class="right-bg">
      <chart-view :chart-option="barOpt" :auto-resize="true" :height="'100%'"></chart-view>
    </el-col>
  </el-row>
</template>

<script setup>
import barConfig from '@/components/Chart/options/bar'
import lineConfig from '@/components/Chart/options/line'
import pieConfig from '@/components/Chart/options/pie'
import { ref, defineProps } from 'vue'

let barOpt = ref(barConfig())
let lineOpt = ref(lineConfig())
let pieOpt = ref(pieConfig())

const props = defineProps({
  cathetData: {
    type: Array,
    required: true
  }
})
console.log('cathetData', props.cathetData)
// const chartOpt = ref(props.chartOpts)
</script>

<style lang="scss">
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
.left-bg {
  background: url(@/assets/images/kuang.png);
  background-size: 100% 100%;
}
.right-bg {
  background: url(@/assets/images/kuang2.png);
  background-size: 100% 100%;
}
</style>
