/*
 * @Author: elk LYF_elk@163.com
 * @Date: 2024-03-21 10:33:02
 * @LastEditors: elk LYF_elk@163.com
 * @LastEditTime: 2024-03-29 14:41:31
 * @FilePath: /vue-BigScreen/src/components/config.js
 * @Description: echarts的组件和配置统一管理
 */
import * as echarts from 'echarts/core'
// 按需引入图表
import {
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  ScatterChart,
  EffectScatterChart
} from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  GridComponent,
  GeoComponent,
  LegendComponent
} from 'echarts/components'
// 引入标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  VisualMapComponent,
  GeoComponent,
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  ScatterChart,
  EffectScatterChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default echarts
