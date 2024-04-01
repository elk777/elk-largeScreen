<template>
  <el-row class="h33">
    <template v-if="cathetData.length > 0">
      <template v-for="(item, index) in cathetData" :key="index">
        <el-col :span="24" :class="formatClass">
          <chart-view
            v-if="!isEmptyObject(item.data)"
            :chart-option="formatOpt(item)"
            :auto-resize="true"
            :height="'100%'"
          ></chart-view>
          <div v-else class="chart-msg">暂无数据展示</div>
        </el-col>
      </template>
    </template>
    <template v-else>
      <template v-for="(item, index) in 3" :key="index">
        <el-col :span="24" :class="formatClass">
          <div class="chart-msg">暂无数据展示</div>
        </el-col>
      </template>
    </template>
  </el-row>
</template>

<script setup>
import barConfig from '@/components/Chart/options/bar'
import lineConfig from '@/components/Chart/options/line'
import pieConfig from '@/components/Chart/options/pie'
import { ref, defineProps, computed } from 'vue'
import { isEmptyObject } from '@/utils/utils'

let barOpt = ref()
let lineOpt = ref()
let pieOpt = ref()

const props = defineProps({
  cathetData: {
    type: Array,
    required: true
  },
  site: {
    type: String,
    required: true
  }
})
const formatClass = computed(() => {
  const { site } = props
  return site === 'left' ? 'left-bg' : 'right-bg'
})
const formatOpt = computed(() => {
  return (item) => {
    switch (item.type) {
      case 'bar':
        return (barOpt.value = barConfig(item.data))
      case 'line':
        return (lineOpt.value = lineConfig(item.data))
      case 'pie':
        return (pieOpt.value = pieConfig(item.data))
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
.h33 {
  height: 33.33%;
}
.left-bg {
  background: url(@/assets/images/kuang.png);
  background-size: 100% 100%;
}
.right-bg {
  background: url(@/assets/images/kuang2.png);
  background-size: 100% 100%;
}
.chart-msg {
  font-size: 24px;
  color: #fff;
}
</style>
