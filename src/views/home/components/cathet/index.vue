<template>
  <el-row class="h50">
    <template v-for="(item, index) in cathetData" :key="index">
      <el-col :span="12" :class="formatClass(index)">
        <chart-view
          :chart-option="formatOpt(item)"
          :auto-resize="true"
          :height="'100%'"
        ></chart-view>
      </el-col>
    </template>
  </el-row>
</template>

<script setup>
import barConfig from '@/components/Chart/options/bar'
import lineConfig from '@/components/Chart/options/line'
import pieConfig from '@/components/Chart/options/pie'
import { ref, defineProps, onMounted, computed } from 'vue'

let barOpt = ref()
let lineOpt = ref()
let pieOpt = ref()

const props = defineProps({
  cathetData: {
    type: Array,
    required: true
  }
})
const formatClass = computed(() => {
  return (index) => {
    return index % 2 === 0 ? 'left-bg' : 'right-bg'
  }
})
const formatOpt = computed(() => {
  return (item) => {
    switch (item.ttype) {
      case 'bar':
        return (barOpt.value = barConfig(item.tdata))
      case 'line':
        return (lineOpt.value = lineConfig(item.tdata))
      case 'pie':
        return (pieOpt.value = pieConfig())
      default:
        break
    }
  }
})
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
