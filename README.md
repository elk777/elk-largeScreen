# vue3 + pinia + element-plus + echarts 大屏可视化demo

## 初始化项目 分辨率:3920\*1080 --- 20240319

1、封装axios请求接口
1）创建axios实例
2）请求拦截：针对于token验证，接口请求携带token请求头
3）请求响应：特殊错误请求的处理

2、存储token
1）创建store - user模块
2）user模块添加token Hooks函数

3、按需引入element-plus组件库

## 布局 --- 20240320

三列布局：左中右，其中左侧和右侧为两行两列「用于报表图形展示」，中间为视频监控播放区域
问题一： 大屏适配  
1、rem + vw/vh:
2、scale: 改变根元素的缩放比例来实现大屏适配
采用了方法2，封装了一个屏幕缩放hook函数，用于大屏适配

问题二：Echarts图标数据渲染 --- 20240321
1、封装公共echarts图表组件
