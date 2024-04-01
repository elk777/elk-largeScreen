<template>
  <div class="middle-title-container flex-column">
    <div class="middle-title-num flex">
      <div class="num-left">882032</div>
      <div>1123032</div>
    </div>
    <div class="middle-title-label flex">
      <div>程序员需求人数</div>
      <div>程序员供应人数</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.flex {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.middle-title-container {
  background: rgba($color: #000000, $alpha: 0.15);
  padding: 10px;
  height: 100%;
  color: #fff;
  margin: 10px 0;
  font-size: 12px;
  .middle-title-num {
    position: relative;
    border: 3px solid rgba($color: #6c83cb, $alpha: 0.3);
    color: #7cc3ea;
    font-size: 30px;
    padding: 15px 0px;
    margin: 0px 0 15px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    .num-left::after {
      content: '';
      position: absolute;
      height: 50%;
      width: 2px;
      background: rgba(255, 255, 255, 0.2);
      right: 50%;
      top: 25%;
    }
  }
  .middle-title-label {
    color: #ccc;
  }
}
</style>
