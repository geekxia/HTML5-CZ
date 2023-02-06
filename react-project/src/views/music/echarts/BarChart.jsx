import React, { useEffect } from 'react'
import * as echarts from 'echarts'
import { debounce } from './util'

let chart = null

export default props => {
  const { cName } = props

  // 用于初始化渲染
  useEffect(()=>{
    const dom = document.getElementById('bc')
    chart = echarts.init(dom, 'macarons')
    chart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: 10,
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }],
      yAxis: [{
        type: 'value',
        axisTick: {
          show: false
        }
      }],
      series: [{
        name: 'pageA',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [79, 52, 200, 334, 390, 330, 220],
        animationDuration: 6000
      }, {
        name: 'pageB',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [80, 52, 200, 334, 390, 330, 220],
        animationDuration: 6000
      }, {
        name: 'pageC',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [30, 52, 200, 334, 390, 330, 220],
        animationDuration: 6000
      }]
    })
  }, [])

  // 用于window.resize时
  useEffect(()=>{
    const handler = debounce(() => {
      if (chart) {
        chart.resize()
      }
    }, 100)
    return () => {
      window.removeEventListener('resize', handler)
    }
  })

  return (
    <div id='bc' className={cName} style={{width:'400px',height:'400px'}} />
  )
}
