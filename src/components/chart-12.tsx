import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart12 = () => {
  const divRef = useRef(null)
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.11, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.06, name: '庆阳路'},
    {value: 0.08, name: '武都路'},
    {value: 0.08, name: '酒泉路'},
    {value: 0.08, name: '天水路'},
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = createEchartsOptions({
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(16),
        itemHeight: px(10),
        formatter(name) {
          const value = data.find(i => i.name === name)?.value * 100 + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          type: 'pie',
          radius: '80%',
          center: ['60%', '50%'],
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    myChart.setOption(option);
  }, [])
  return (
    <div ref={divRef} className="chart"></div>
  )
}