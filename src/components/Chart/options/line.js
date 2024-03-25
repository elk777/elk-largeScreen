const lineConfig = (options) => {
  console.log('line-options', options)

  const formatSeries = (series) => {
    if (Array.isArray(series)) {
      let formatSeries = series.map((item) => {
        return {
          name: item.name,
          type: 'line',
          data: item.data
        }
      })
      return formatSeries
    } else {
      return options.series
    }
  }
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
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        fontStyle: 500,
        fontSize: 18,
        color: '#fff'
      },
      data: options.legend?.data
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: options.xAxis?.data
    },
    yAxis: {
      type: 'value'
    },
    series: formatSeries(options.series)
  }
  return Object.assign({}, defaultConfig)
}

export default lineConfig
