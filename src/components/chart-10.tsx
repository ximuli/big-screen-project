import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart10 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = createEchartsOptions({
      xAxis: {
        data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
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
        data: [40, 22, 20, 18, 32],
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