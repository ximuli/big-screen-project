import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart11 = () => {
  const divRef = useRef(null)
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = createEchartsOptions({
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {
        type: 'scroll',
        pageIconSize: px(16),
        pageButtonGap: px(5),
        pageButtonItemGap: px(5),
        pageTextStyle: { color: '#fff' },
        width: '100%',
        itemWidth: px(16),
        itemHeight: px(10),
        bottom: '0',
        left: 'center',
        data: [
          { name: '刑事', textStyle: { color: '#fff' } },
          { name: '民事', textStyle: { color: '#fff' } },
          { name: '经济', textStyle: { color: '#fff' } },
          { name: '其他', textStyle: { color: '#fff' } },
        ],
      },
      series: [
        {
          bottom: '10%',
          startAngle: -20,
          type: 'pie',
          radius: ['25%', '90%'],
          avoidLabelOverlap: false,
          roseType: 'area',
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          label: {
            show: true,
            position: 'outside',
            textStyle: { color: 'white', fontSize: px(20) },
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: true, length: 0},
          data: [
            {value: 0.36, name: '刑事'},
            {value: 0.20, name: '民事'},
            {value: 0.18, name: '经济'},
            {value: 0.24, name: '其他'},
          ]
        }
      ]
    });
    myChart.setOption(option);
  }, [])
  return (
    <div ref={divRef} className="chart"></div>
  )
}