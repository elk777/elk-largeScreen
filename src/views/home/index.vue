<template>
  <div class="home-container">这是首页内容</div>
</template>

<script setup>
import { getStatic, getDynamic } from '@/apis/video/index'
import { ref, onMounted } from 'vue'

let staticData = ref()
let dynamicData = ref()

onMounted(() => {
  getStaticData()
  getDynamicData()
})

const getStaticData = function () {
  getStatic().then((res) => {
    console.log('getStatic', res)
    staticData.value = res
  })
}
const getDynamicData = function () {
  getDynamic().then((res) => {
    console.log('getDynamic', res)
    dynamicData.value = res
  })
}
</script>

<style></style>
