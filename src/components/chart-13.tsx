import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart13 = () => {
  const divRef = useRef(null)
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
      xAxis: {
        data: data.map(i => i.name),
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const arr = val.split('')
              arr.splice(2, 0, '\n')
              return arr.join('')
            } else {
              return val
            }
          }
        },
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisTick: { show: false }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: '#083b70' }
        },
      },
      series: [{
        type: 'bar',
        data: data.map(i => i.value),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
      }]
    });
    myChart.setOption(option);
  }, [])
  return (
    <div ref={divRef} className="chart"></div>
  )
}