import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import chinaGeoJson from '../geo/china.json'

export const Chart6 = () => {
  const divRef = useRef(null)
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
            // { name: '上海市', value: 1 },
            // {name: '四川省', value: 100},
          ],
          // label: { show: false },
          itemStyle: {
            areaColor: '#010D3D',
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
      {/* <h2>全兰州市犯罪人员籍贯分布地</h2> */}
      <div className="wrapper">
        <div ref={divRef} className="chart"></div>
        <div className="monitor-wrapper">
          <div className="monitor">
            <div className="monitor-inner"></div>
          </div>
          <div className="monitor-text">数据实时监控中</div>
        </div>
        <div className="notes">此地图仅显示中国的部分区域</div>
      </div>
    </div>
  )
}