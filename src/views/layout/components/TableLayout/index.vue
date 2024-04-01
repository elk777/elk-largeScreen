<template>
  <div class="table-container">
    <el-table
      :data="tableData"
      v-loading="loading"
      border
      style="width: 100%"
      row-key="id"
      :default-expand-all="true"
      :tree-props="{ children: 'children' }"
    >
      <el-table-column type="index" label="序号" width="75" />
      <el-table-column prop="name" label="标题"></el-table-column>
      <el-table-column prop="location" label="位置"></el-table-column>
      <el-table-column prop="type" label="类型" :formatter="formatter"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button v-if="!scope.row.children" type="primary" text @click="handleEdit(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <Dialog v-if="dialogVisible" v-model="dialogVisible" :rowId="rowId" @getList="getChartData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Dialog from '../Dialog.vue'

import { getTable } from '@/apis/layout/table'

const tableData = ref([])
const dialogVisible = ref(false)
let rowId = ref(null)
const loading = ref(false)

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
  loading.value = true
  getTable().then((res) => {
    tableData.value = formatTableData(res)
    loading.value = false
  })
}

const formatTableData = (tableDatas) => {
  // 创建一个Map，key为superId，value为子节点数组
  const map = new Map()
  // 遍历原始数据，按superId进行分组
  tableDatas.forEach((item) => {
    // 如果map中已有对应superId，则将当前项添加到子节点数组
    if (item.superId && map.has(item.superId)) {
      map.get(item.superId).push(item)
    } else {
      // 如果没有superId或map中没有对应superId，则认为当前项为顶级节点，放入结果数组
      map.set(item.id, [item])
    }
  })
  // 遍历map，构建包含children属性的父节点对象
  const result = []
  for (const [parentId, children] of map.entries()) {
    // 查找顶级节点
    const parent = children.find((node) => node.id === parentId)
    if (parent) {
      // 设置children属性
      parent.children = children.filter((child) => child.id !== parent.id)
      // 将顶级节点加入结果数组
      result.push(parent)
    }
  }

  return result
}
const formatter = (row) => {
  if (row.type) {
    let type = types.find((item) => item.value === row.type)
    return type.label
  }
}

/* 编辑行 */
const handleEdit = (row) => {
  rowId.value = row.id
  dialogVisible.value = true
}
onMounted(() => {
  getChartData()
})
</script>

<style lang="scss"></style>
