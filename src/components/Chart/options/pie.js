/* 
  options： 可自行配置传参
*/
const pieConfig = (options) => {
  const defaultConfig = {
    title: {
      text: options.title?.text,
      left: options.right && 'right',
      textStyle: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   orient: 'vertical',
    //   textStyle: {
    //     fontStyle: 500,
    //     fontSize: 14,
    //     color: '#fff'
    //   },
    //   left: options.right ? 'left' : 'right'
    // },
    series: options.series
  }
  return Object.assign({}, defaultConfig)
}

export default pieConfig
