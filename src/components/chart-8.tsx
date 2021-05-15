import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px';

export const Chart8 = () => {
  const divRef = useRef(null)
  const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = createEchartsOptions({
      color: colors,
      xAxis: { show: false },
      yAxis: { show: false },
      bottom: 100,
      legend: {
        type: 'scroll',
        pageIconSize: px(16),
        width: '100%',
        itemWidth: px(16),
        itemHeight: px(10),
        bottom: '0',
        left: 'center',
        data: [
          { name: '10-20', textStyle: { color: '#fff' } },
          { name: '20-30', textStyle: { color: '#fff' } },
          { name: '30-40', textStyle: { color: '#fff' } },
          { name: '40-50', textStyle: { color: '#fff' } },
          { name: '50-60', textStyle: { color: '#fff' } },
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
            textStyle: {
              color: '#fff', fontSize: px(20)
            },
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: { show: false },
          data: [
            {value: 0.07, name: '10-20'},
            {value: 0.10, name: '20-30'},
            {value: 0.23, name: '30-40'},
            {value: 0.28, name: '40-50'},
            {value: 0.32, name: '50-60'},
          ],
        }
      ]
    });
    myChart.setOption(option);
  }, [])
  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div ref={divRef} className="main"></div>
        <div className="text">年龄段</div>
      </div>
    </div>
  )
}