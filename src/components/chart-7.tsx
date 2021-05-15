import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px';

export const Chart7 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = createEchartsOptions({
      color: ['#8D70F8', '#33A4FA'],
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {
        width: '100%',
        itemWidth: px(16),
        itemHeight: px(10),
        itemGap: px(10),
        bottom: '0',
        left: 'center',
        data: [
          { name: '男', textStyle: { color: '#fff' } },
          { name: '女', textStyle: { color: '#fff' } }
        ],
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['60%', '72%'],
          // bottom: '5%',
          // avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'inside',
            color: '#fff',
            fontSize: px(20),
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: { show: false },
          data: [
            { value: 0.2, name: '女' },
            { value: 0.8, name: '男' },
          ],
        }
      ]
    });
    myChart.setOption(option);
  }, [])
  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div ref={divRef} className="main"></div>
        <div className="text">性别</div>
      </div>
    </div>
  )
}