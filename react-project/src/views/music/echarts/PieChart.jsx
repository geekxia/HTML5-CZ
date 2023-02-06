import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default props => {

  const chart = useRef(null)
  const { cName } = props

  useEffect(()=>{
    const cc = echarts.init(chart.current, 'macarons')
    cc.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: 'center',
        bottom: '10',
        data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
      },
      series: [
        {
          name: 'WEEKLY WRITE ARTICLES',
          type: 'pie',
          roseType: 'radius',
          radius: [15, 95],
          center: ['50%', '38%'],
          data: [
            { value: 320, name: 'Industries' },
            { value: 240, name: 'Technology' },
            { value: 149, name: 'Forex' },
            { value: 100, name: 'Gold' },
            { value: 59, name: 'Forecasts' }
          ],
          animationEasing: 'cubicInOut',
          animationDuration: 2600
        }
      ]
    })
  }, [])
  return (
    <div ref={chart} className={cName} style={{height:'400px',width:'400px'}} />
  )
}
