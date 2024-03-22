<template>
  <div class="table-container">
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column label=""></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([])
</script>

<style lang="scss">
.table-container {
}
</style>
