
export default function createGoodBarOpt (opt) {
  const { title, xAxisData, seriesData } = opt
  return {
    title: {
      text: title
    },
    tooltip: {},
    xAxis: {
      data: xAxisData
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: seriesData
      }
    ]
  }
}
