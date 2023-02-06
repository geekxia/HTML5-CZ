import { useState, useEffect, useRef } from 'react'
import { Input, Button } from 'antd'

const BMapGL = window.BMapGL
let map = null

export default () => {

	const [addr, setAddr] = useState('')

	useEffect(()=>{
		// 地图初始化
		map = new BMapGL.Map("map")
		// 指定地图中心点
		var point = new BMapGL.Point(116.404, 39.915)
		map.centerAndZoom(point, 10)
		// 设定地图样式
		map.setMapStyleV2({
			styleId: '02c2574f567f71bd97c52904d59bcfc0'
		})
		// 添加地图控件
		var zoomCtrl = new BMapGL.ZoomControl()  // 添加缩放控件
		map.addControl(zoomCtrl)
		// 绑定点击事件
		map.addEventListener('click', (res)=>{
			console.log('你点击了点', res)
		})
		// 开启滚轮缩放
		map.enableScrollWheelZoom(true)
	}, [])

	// 功能：根据地址反解析得到经纬度
	const search = () => {
		var geo = new BMapGL.Geocoder()
		geo.getPoint(addr, p => {
			// console.log('--point', p)
	    if (p) {
				const point = new BMapGL.Point(p.lng, p.lat)
				geo.getLocation(point, result=>{
					console.log('实际地址', result)
				})
	      map.centerAndZoom(point, 16);
	      map.addOverlay(new BMapGL.Marker(point))
	    }
		},'深圳宝安')
	}

  return (
    <div className='dashboard'>

			<div>
				<Input style={{width:'120px'}} value={addr} onChange={ev=>setAddr(ev.target.value)} />
				<Button type='primary' onClick={search}>搜索</Button>
			</div>

			<div id="map" style={{width:'100%',height:'400px'}} />
    </div>
  )
}
