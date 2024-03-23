<template>
  <el-dialog v-model="dialogVisible" title="修改配置" width="500">
    <el-form :model="form">
      <el-form-item label="标题">
        <el-input v-model="form.tname" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="位置">
        <el-input :disabled="true" v-model="form.tlocation" placeholder="请输入位置"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select :disabled="true" v-model="form.ttype" placeholder="请选择类型">
          <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数据展示">
        <el-cascader
          :options="options"
          v-model="form.tdata"
          :props="{ multiple: true }"
          collapse-tags
        ></el-cascader>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted, defineProps, defineModel } from 'vue'
import cascaderView from '@/components/Cascader/index.vue'
import DTOchartData from '@/mock/table.json'
const chartData = JSON.parse(JSON.stringify(DTOchartData.data))

import hangye from '@/mock/source/hangye.json'
import xinzi from '@/mock/source/xinzi.json'
import nianling from '@/mock/source/nianling.json'

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

const dialogVisible = defineModel()

const options = ref([])

const props = defineProps({
  rowId: {
    type: Number || String,
    required: true
  }
})
const rowId = props.rowId

let form = ref({
  tname: '',
  tlocation: '',
  ttype: '',
  tdata: ''
})

onMounted(() => {
  form.value = fillterChartData()
})
/* 虚拟根据id进行请求拿到列数据 */
const fillterChartData = () => {
  for (const item of chartData) {
    if (item.tid === rowId) {
      return item
    }
    if (item.tchildren && item.tchildren.length > 0) {
      const childResult = item.tchildren.find((child) => child.tid === rowId)
      if (childResult !== undefined) {
        fillterDataSource(childResult.tlabel)
        return childResult
      }
    }
  }
}

const fillterDataSource = (label) => {
  console.log('fillterDataSource', label)
  switch (label) {
    case 'hangye':
      options.value = hangye.data
      break
    case 'xinzi':
      options.value = xinzi.data
      break
    case 'nianling':
      options.value = nianling.data
      break
  }
}

const onSubmit = () => {
  console.log('点击提交', form)
}
const onCancel = () => {
  dialogVisible.value = false
}
</script>
