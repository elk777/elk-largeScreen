const barConfig = (options) => {
  const defaultConfig = {
    title: {
      text: options.title,
      textStyle: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 20
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        console.log('params', params)
        var tar = params[0]
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
      }
    },
    xAxis: {
      type: 'category',
      data: options.xAxis.data
    },
    yAxis: {
      type: 'value'
    },
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
