<template>
  <div class="middle-main-container">
    <div ref="map" style="width: 900px; height: 900px" class="middle-main-map"></div>
  </div>
</template>

<script setup>
import FeHelper from './FeHelper.json'
import echarts from '@/components/Chart/config.js'
import { ref, onMounted, markRaw, onBeforeUnmount } from 'vue'

let mapName = 'china'
// 开发人数
let data = [
  { name: '北京', value: 199 },
  { name: '天津', value: 42 },
  { name: '河北', value: 102 },
  { name: '山西', value: 81 },
  { name: '内蒙古', value: 47 },
  { name: '辽宁', value: 67 },
  { name: '吉林', value: 82 },
  { name: '黑龙江', value: 123 },
  { name: '上海', value: 24 },
  { name: '江苏', value: 92 },
  { name: '浙江', value: 114 },
  { name: '安徽', value: 109 },
  { name: '福建', value: 116 },
  { name: '江西', value: 91 },
  { name: '山东', value: 119 },
  { name: '河南', value: 137 },
  { name: '湖北', value: 116 },
  { name: '湖南', value: 114 },
  { name: '重庆', value: 91 },
  { name: '四川', value: 125 },
  { name: '贵州', value: 62 },
  { name: '云南', value: 83 },
  { name: '西藏', value: 9 },
  { name: '陕西', value: 80 },
  { name: '甘肃', value: 56 },
  { name: '青海', value: 10 },
  { name: '宁夏', value: 18 },
  { name: '新疆', value: 180 },
  { name: '广东', value: 123 },
  { name: '广西', value: 59 },
  { name: '海南', value: 14 }
]
// 散点坐标
let geoCoordMap = {
  台湾: [121.5135, 25.0308],
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891]
}
// 模拟数据「需求和供应人数」
let toolTipData = [
  {
    name: '北京',
    value: [
      { name: '需求人数', value: 95 },
      { name: '供应人数', value: 82 }
    ]
  },
  {
    name: '天津',
    value: [
      { name: '需求人数', value: 22 },
      { name: '供应人数', value: 20 }
    ]
  },
  {
    name: '河北',
    value: [
      { name: '需求人数', value: 60 },
      { name: '供应人数', value: 42 }
    ]
  },
  {
    name: '山西',
    value: [
      { name: '需求人数', value: 40 },
      { name: '供应人数', value: 41 }
    ]
  },
  {
    name: '内蒙古',
    value: [
      { name: '需求人数', value: 23 },
      { name: '供应人数', value: 24 }
    ]
  },
  {
    name: '辽宁',
    value: [
      { name: '需求人数', value: 39 },
      { name: '供应人数', value: 28 }
    ]
  },
  {
    name: '吉林',
    value: [
      { name: '需求人数', value: 41 },
      { name: '供应人数', value: 41 }
    ]
  },
  {
    name: '黑龙江',
    value: [
      { name: '需求人数', value: 35 },
      { name: '供应人数', value: 31 }
    ]
  },
  {
    name: '上海',
    value: [
      { name: '需求人数', value: 12 },
      { name: '供应人数', value: 12 }
    ]
  },
  {
    name: '江苏',
    value: [
      { name: '需求人数', value: 47 },
      { name: '供应人数', value: 45 }
    ]
  },
  {
    name: '浙江',
    value: [
      { name: '需求人数', value: 57 },
      { name: '供应人数', value: 57 }
    ]
  },
  {
    name: '安徽',
    value: [
      { name: '需求人数', value: 57 },
      { name: '供应人数', value: 52 }
    ]
  },
  {
    name: '福建',
    value: [
      { name: '需求人数', value: 59 },
      { name: '供应人数', value: 57 }
    ]
  },
  {
    name: '江西',
    value: [
      { name: '需求人数', value: 49 },
      { name: '供应人数', value: 42 }
    ]
  },
  {
    name: '山东',
    value: [
      { name: '需求人数', value: 67 },
      { name: '供应人数', value: 52 }
    ]
  },
  {
    name: '河南',
    value: [
      { name: '需求人数', value: 69 },
      { name: '供应人数', value: 68 }
    ]
  },
  {
    name: '湖北',
    value: [
      { name: '需求人数', value: 60 },
      { name: '供应人数', value: 56 }
    ]
  },
  {
    name: '湖南',
    value: [
      { name: '需求人数', value: 62 },
      { name: '供应人数', value: 52 }
    ]
  },
  {
    name: '重庆',
    value: [
      { name: '需求人数', value: 47 },
      { name: '供应人数', value: 44 }
    ]
  },
  {
    name: '四川',
    value: [
      { name: '需求人数', value: 65 },
      { name: '供应人数', value: 60 }
    ]
  },
  {
    name: '贵州',
    value: [
      { name: '需求人数', value: 32 },
      { name: '供应人数', value: 30 }
    ]
  },
  {
    name: '云南',
    value: [
      { name: '需求人数', value: 42 },
      { name: '供应人数', value: 41 }
    ]
  },
  {
    name: '西藏',
    value: [
      { name: '需求人数', value: 5 },
      { name: '供应人数', value: 4 }
    ]
  },
  {
    name: '陕西',
    value: [
      { name: '需求人数', value: 38 },
      { name: '供应人数', value: 42 }
    ]
  },
  {
    name: '甘肃',
    value: [
      { name: '需求人数', value: 28 },
      { name: '供应人数', value: 28 }
    ]
  },
  {
    name: '青海',
    value: [
      { name: '需求人数', value: 5 },
      { name: '供应人数', value: 5 }
    ]
  },
  {
    name: '宁夏',
    value: [
      { name: '需求人数', value: 10 },
      { name: '供应人数', value: 8 }
    ]
  },
  {
    name: '新疆',
    value: [
      { name: '需求人数', value: 36 },
      { name: '供应人数', value: 31 }
    ]
  },
  {
    name: '广东',
    value: [
      { name: '需求人数', value: 63 },
      { name: '供应人数', value: 60 }
    ]
  },
  {
    name: '广西',
    value: [
      { name: '需求人数', value: 29 },
      { name: '供应人数', value: 30 }
    ]
  },
  {
    name: '海南',
    value: [
      { name: '需求人数', value: 8 },
      { name: '供应人数', value: 6 }
    ]
  }
]
const convertData = function (data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
/* 定义chart */
let map = ref(null)
let mapOption = {
  tooltip: {
    padding: 0,
    enterable: true,
    transitionDuration: 1,
    textStyle: {
      color: '#000',
      decoration: 'none'
    },
    formatter: function (params) {
      let values = []
      const filter = toolTipData.filter((item) => item.name === params.name)
      if (filter.length > 0) {
        values = filter[0].value
      } else {
        values = [{ value: 0 }, { value: 0 }]
      }
      var tipHtml = ''
      tipHtml =
        '<div style="width:280px;height:240px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
        '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' +
        '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' +
        '</i>' +
        '<span style="margin-left:10px;color:#fff;font-size:16px;">' +
        params.name +
        '</span>' +
        '</div>' +
        '<div style="padding:20px">' +
        '<p style="color:#fff;font-size:12px;">' +
        '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
        '</i>' +
        '需求人数' +
        '<span style="color:#11ee7d;margin:0 6px;">' +
        values[0].value +
        '</span>' +
        '个' +
        '</p>' +
        '<p style="color:#fff;font-size:12px;">' +
        '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
        '</i>' +
        '供应人数' +
        '<span style="color:#f48225;margin:0 6px;">' +
        values[1].value +
        '</span>' +
        '个' +
        '</p>' +
        '</div>' +
        '</div>'
      return tipHtml
    }
  },
  //左下角深度尺
  visualMap: {
    show: true,
    min: 0,
    max: 200,
    left: '10%',
    top: 'bottom',
    calculable: true,
    seriesIndex: [1],
    inRange: {
      color: ['#04387b', '#467bc0'] // 蓝绿
    }
  },
  geo: {
    show: true,
    map: mapName,
    roam: false,
    zoom: 1,
    label: {
      show: false
    },
    itemStyle: {
      areaColor: '#023677',
      borderColor: '#1180c7'
      //   areaColor: '#4499d0'
    }
  },
  series: [
    {
      name: '散点',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),
      symbolSize: function (val) {
        return val[2] / 10
      },
      label: {
        formatter: '{b}',
        position: 'right',
        show: true
      },
      itemStyle: {
        color: '#fff'
      }
    },
    {
      type: 'map',
      map: mapName,
      geoIndex: 0,
      aspectScale: 0.75, //长宽比
      showLegendSymbol: false, // 存在legend时显示
      label: {
        show: true,
        color: '#fff'
      },
      itemStyle: {
        areaColor: '#031525',
        borderColor: '#3B5077'
        //   areaColor: '#2B91B7'
      },
      animation: false,
      data: data
    },
    {
      name: '点',
      type: 'scatter',
      coordinateSystem: 'geo',
      zlevel: 6
    },
    {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(
        data
          .sort(function (a, b) {
            return b.value - a.value
          })
          .slice(0, 10)
      ),
      symbolSize: function (val) {
        return val[2] / 10
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        formatter: '{b}',
        position: 'left',
        show: false
      },
      itemStyle: {
        color: 'yellow',
        shadowBlur: 10,
        shadowColor: 'yellow'
      },
      zlevel: 1
    }
  ]
}
/* 初始化地图 */
const initMap = () => {
  map.value = markRaw(echarts.init(map.value))
  echarts.registerMap(mapName, FeHelper)
  map.value.setOption(mapOption)
  //   loopPay()
}
/* 开启图表自适应 */
const openResize = () => {
  map.value.resize()
}
// 开启自动播放
const loopPay = () => {
  let index = 0 //播放所在下标
  let showTip = setInterval(function () {
    map.value.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: index
    })
    index++
    if (index >= mapOption.series[0].data.length) {
      index = 0
    }
  }, 2000)

  map.value.on('mouseover', function (params) {
    clearInterval(showTip)
    map.value.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: params.dataIndex
    })
  })

  map.value.on('mouseout', function () {
    showTip && clearInterval(showTip)
    showTip = setInterval(function () {
      map.value.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index
      })
      index++
      if (index >= mapOption.series[0].data.length) {
        index = 0
      }
    }, 2000)
  })
}

onMounted(() => {
  initMap()
  if (map.value) {
    window.addEventListener('resize', openResize)
  }
})
onBeforeUnmount(() => {
  if (map.value) {
    window.removeEventListener('resize', openResize)
  }
  map.value.dispose()
  map.value = null
})
</script>

<style lang="scss">
.middle-main-container {
  position: relative;
  width: 100%;
  height: 100%;
  .middle-main-map {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 35%;
    left: 50%;
    width: 100%;
    height: 100%;
  }
}
</style>
