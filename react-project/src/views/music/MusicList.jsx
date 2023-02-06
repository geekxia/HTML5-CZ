import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'

import LineChart from './echarts/LineChart'
import PieChart from './echarts/PieChart'
import BarChart from './echarts/BarChart'

import { Chart, LineAdvance} from 'bizcharts'
import bizData from './data.js'

const lineChartData = {
  newVisitis: {
    expectedData: [1000, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default () => {

  const [lineData, setLineData] = useState({expectedDat:[],actualData:[]})
  useEffect(()=>{

    setTimeout(()=>{
      setLineData(lineChartData.newVisitis)
    }, 500)

  }, [])

  return (
    <div>
      <h1>学习图表</h1>
      <Row>
        <Col span={24}>
          <LineChart chartData={lineData} />
        </Col>

      </Row>

      <Row>
        <Col span={10} offset={2}>
          <PieChart />
        </Col>
        <Col span={10}>
          <BarChart />
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={bizData} >
            <LineAdvance
              shape="smooth"
              point
              area
              position="month*temperature"
              color="city"
            />
          </Chart>
        </Col>
      </Row>
    </div>
  )
}
