<template>
  <div class="head-container">
    <div class="title">大数据可视化展板通用模版</div>
    <div class="date">当前时间：{{ time }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const time = ref()
const interval = ref()
const getNowTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = ('0' + (now.getMonth() + 1)).slice(-2)
  const day = ('0' + now.getDate()).slice(-2)
  const hours = ('0' + now.getHours()).slice(-2)
  const minutes = ('0' + now.getMinutes()).slice(-2)
  const seconds = ('0' + now.getSeconds()).slice(-2)
  time.value = `${year}年${month}月${day}日-${hours}时${minutes}分${seconds}秒`
}
onMounted(() => {
  interval.value = setInterval(() => {
    getNowTime()
  })
})
onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style lang="scss">
.head-container {
  position: relative;
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.23);
  color: #fff;
  font-size: 22px;
  .title {
    text-align: center;
  }
  .date {
    width: 250px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: #aaa;
  }
}
</style>
