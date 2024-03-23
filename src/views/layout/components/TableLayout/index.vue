<template>
  <div class="table-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      row-key="tid"
      :default-expand-all="true"
      :tree-props="{ children: 'tchildren' }"
    >
      <el-table-column type="index" label="序号" width="75" />
      <el-table-column prop="tname" label="标题"></el-table-column>
      <el-table-column prop="tlocation" label="位置"></el-table-column>
      <el-table-column prop="ttype" label="类型" :formatter="formatter"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button v-if="!scope.row.tchildren" type="primary" text @click="handleEdit(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <Dialog v-if="dialogVisible" v-model="dialogVisible" :rowId="rowId" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DTOchartData from '@/mock/table.json'
import Dialog from '../Dialog.vue'

const tableData = ref([])
const dialogVisible = ref(false)
let rowId = ref(null)

const types = [
  {
    label: '柱状图',
    value: 'bar'
  },
  {
    label: '折线图',
    value: 'line'
  },
  {
    label: '饼图',
    value: 'pie'
  }
]
const getChartData = () => {
  setTimeout(() => {
    const { code, data } = DTOchartData
    if (code === 200) {
      tableData.value = data
    }
  }, 1000)
}

const formatter = (row) => {
  if (row.ttype) {
    let type = types.find((item) => item.value === row.ttype)
    return type.label
  }
}

/* 编辑行 */
const handleEdit = (row) => {
  rowId.value = row.tid
  dialogVisible.value = true
}
onMounted(() => {
  getChartData()
})
</script>

<style lang="scss">
.table-container {
}
</style>
