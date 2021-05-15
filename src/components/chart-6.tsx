import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px';
import chinaGeoJson from '../geo/china.json'

export const Chart6 = () => {
  const divRef = useRef(null)
  const colors = { '青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE' }
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', chinaGeoJson)
    var option = createEchartsOptions({
      xAxis: { show: false },
      yAxis: { show: false },
      series: [
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            // { name: '甘肃省', value: 1 },
            // {name: '四川省', value: 100},
          ],
          // label: { show: false },
          itemStyle: {
            areaColor: '#010D3D',
            // color: colors['甘肃省'],
            borderColor: '#01A7F7',
          },
          emphasis: {
            label: { color: 'white' },
            itemStyle: { areaColor: '#5470C6' }
          },
        },
      ]
    });
    myChart.setOption(option);
  }, [])
  return (
    <div className="bordered 籍贯">
      <h2>全兰州市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"></div>
        {/* <div className="bordered legend">
          <span className="icon" style={{ background: colors['甘肃省'] }} />甘肃籍
          <span className="icon" style={{ background: colors['四川省'] }} />四川籍
          <span className="icon" style={{ background: colors['青海省'] }} />青海籍
        </div> */}
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  )
}