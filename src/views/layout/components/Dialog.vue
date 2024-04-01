<template>
  <el-dialog v-model="dialogVisible" title="修改配置" width="500">
    <el-form v-loading="loading" :model="form">
      <el-form-item label="标题">
        <el-input v-model="form.name" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="位置">
        <el-input :disabled="true" v-model="form.location" placeholder="请输入位置"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select :disabled="true" v-model="form.type" placeholder="请选择类型">
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
          v-model="form.data"
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
import { ref, onMounted, defineProps, defineModel, defineEmits } from 'vue'
import DTOchartData from '@/mock/server.json'

import { updateTable, getTableDetails } from '@/apis/layout/table'
import { ElMessage } from 'element-plus'

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
const loading = ref(false)

const props = defineProps({
  rowId: {
    type: Number || String,
    required: true
  }
})
const emit = defineEmits(['getList'])
const rowId = props.rowId

let form = ref({
  name: '',
  location: '',
  type: '',
  data: ''
})

onMounted(() => {
  getChartData(rowId)
})
/* 根据id进行请求拿到行数据 */
const getChartData = (id) => {
  loading.value = true
  getTableDetails(id).then((res) => {
    loading.value = false
    getOptions(res.label)
    form.value = res
  })
}
/* 根据label获取对应options */
const getOptions = (label) => {
  options.value = DTOchartData.source[label].data
}

const onSubmit = () => {
  updateTable(form.value).then(() => {
    ElMessage({
      message: '修改成功',
      type: 'success'
    })
    onCancel()
    emit('getList')
  })
}
const onCancel = () => {
  dialogVisible.value = false
}
</script>
