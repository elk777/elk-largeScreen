<template>
  <div class="cascader-container">
    <el-cascader :options="options" v-model="value"></el-cascader>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const value = ref()

const props = defineProps({
  options: {
    type: Object,
    reqiored: true
  }
})
const options = props.options
</script>
