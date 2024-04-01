/* 
  options： 可自行配置传参
*/
const barConfig = (options) => {
  const defaultConfig = {
    title: {
      text: options.title,
      right: options.right && '0px',
      top: '0px',
      textStyle: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        // console.log('params', params)
        var tar = params[0]
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: options.xAxis,
    yAxis: options.yAxis,
    series: [
      {
        name: '人数',
        label: {
          show: true,
          position: 'inside'
        },
        data: options.series.data,
        type: 'bar'
      }
    ]
  }
  return Object.assign({}, defaultConfig)
}

export default barConfig
