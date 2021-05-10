import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { baseEchartOptions } from '../shared/base-echart-options'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart2 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = createEchartsOptions({
      ...baseEchartOptions,
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
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
        axisTick: { show: false }
      },
      yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#083b70'
          }
        },
      },
      series: [
        {
          name: '破案排名1',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '破案排名2',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    });
    myChart.setOption(option);
  }, [])
  return (
    <div className="bordered 管辖统计">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}