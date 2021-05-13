import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = createEchartsOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: {
          show: true,
          lineStyle: { color: '#073E78' }
        },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: { color: '#073E78' }
        },
        axisLabel: {
          formatter(val) {
            return val * 100 + '%'
          }
        }
      },
      series: [
        {
          name: '盗窃',
          data: [
            0.15, 0.13, 0.16,
            0.11, 0.09, 0.08,
            0.07, 0.05, 0.06,
            0.08, 0.12, 0.14,
            0.15
          ],
          type: 'line',
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#414a9f'
            }, {
              offset: 1,
              color: '#1b1d52'
            }]),
          }
        },
        // {
        //   name: '抢劫',
        //   data: [0.01, 0.01, 0.02, 0.05, 0.06, 0.05, 0.07, 0.09, 0.10].reverse()
        // },
        // {
        //   name: '诈骗',
        //   data: [0.05, 0.07, 0.08, 0.10, 0.09, 0.11, 0.14, 0.12, 0.15].reverse()
        // },
        // {
        //   name: '猥亵',
        //   data: [0.01, 0.02, 0.02, 0.03, 0.05, 0.04, 0.03, 0.04, 0.06].reverse()
        // },
        // {
        //   name: '醉驾',
        //   data: [0.09, 0.09, 0.10, 0.12, 0.11, 0.13, 0.12, 0.14, 0.15].reverse()
        // },
        // {
        //   name: '故意伤人',
        //   data: [0.02, 0.03, 0.05, 0.08, 0.11, 0.09, 0.09, 0.10, 0.12].reverse()
        // },
        // {
        //   name: '故意杀人',
        //   data: [0.01, 0.01, 0.02, 0.03, 0.03, 0.04, 0.04, 0.05, 0.07].reverse()
        // }
      ]
    });
    myChart.setOption(option);
  }, [])
  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}