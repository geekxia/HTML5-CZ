import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default props => {
  const { cName, chartData } =  props

  const chart = useRef(null)

  useEffect(()=>{
    const cc = echarts.init(chart.current, 'dark')
    const { expectedData, actualData } = chartData
    cc.setOption({
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        boundaryGap: false,
        axisTick: {
          show: false
        }
      },
      grid: {
        left: 10,
        right: 10,
        bottom: 20,
        top: 30,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        padding: [5, 10]
      },
      yAxis: {
        axisTick: {
          show: false
        }
      },
      legend: {
        data: ['expected', 'actual']
      },
      series: [{
        name: 'expected', itemStyle: {
          normal: {
            color: '#FF005A',
            lineStyle: {
              color: '#FF005A',
              width: 2
            }
          }
        },
        smooth: true,
        type: 'line',
        data: expectedData,
        animationDuration: 2800,
        animationEasing: 'cubicInOut'
      },
      {
        name: 'actual',
        smooth: true,
        type: 'line',
        itemStyle: {
          normal: {
            color: '#3888fa',
            lineStyle: {
              color: '#3888fa',
              width: 2
            },
            areaStyle: {
              color: '#f3f8ff'
            }
          }
        },
        data: actualData,
        animationDuration: 2800,
        animationEasing: 'quadraticOut'
      }]
    })
  }, [chartData])

  return (
    <div
      className={cName}
      ref={chart}
      style={ {height:'300px', width:'60%'} }
    />
  )
}
