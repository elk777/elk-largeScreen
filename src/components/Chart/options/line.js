const lineConfig = (options) => {
  const defaultConfig = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        smooth: true
      }
    ]
  }
  return Object.assign({}, defaultConfig)
}

export default lineConfig
