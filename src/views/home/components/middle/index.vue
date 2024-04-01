<template>
  <div class="middle-container wh100">
    <div class="middle-title">
      <title-view></title-view>
    </div>
    <div class="middle-main wh100">
      <main-view></main-view>
    </div>
  </div>
</template>

<script setup>
import titleView from './components/Title/index.vue'
import mainView from './components/Main/index.vue'
</script>

<style lang="scss">
.wh100 {
  width: 100%;
  height: 100%;
}
</style>
