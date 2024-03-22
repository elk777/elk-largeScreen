<!--
 * @Author: elk LYF_elk@163.com
 * @Date: 2024-03-21 16:02:43
 * @LastEditors: elk LYF_elk@163.com
 * @LastEditTime: 2024-03-21 20:24:53
 * @FilePath: /vue-BigScreen/src/views/layout/index.vue
 * @Description: 布局配置界面
-->
<template>
  <div class="layout-container">
    <div class="layout-content">
      <el-card class="layout-card">
        <template #header>
          <div class="layout-header">
            <div class="layout-title">布局配置</div>
          </div>
        </template>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="表格布局" name="first">
            <table-layout></table-layout>
          </el-tab-pane>
          <el-tab-pane label="Config" name="second">Config</el-tab-pane>
          <el-tab-pane label="Role" name="third">Role</el-tab-pane>
          <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import tableLayout from './components/TableLayout/index.vue'
const activeName = ref('first')

const handleClick = (pane) => {
  console.log('pane', pane)
}
</script>

<style lang="scss">
.layout-container {
  background-color: #fff;
  height: 100vh;
  .layout-content {
    width: 1280px;
    margin: 0 auto;
  }
  .layout-card {
    height: 100vh;
  }
}
</style>
