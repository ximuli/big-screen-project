import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: { color: '#fff' },
        itemWidth: px(30),
        itemHeight: px(16),
        data: ['盗窃', '抢劫', '诈骗', '猥亵', '醉驾', '故意伤人', '故意杀人']
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
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
          data: [0.01, 0.02, 0.03, 0.04, 0.06, 0.05, 0.08, 0.07, 0.09].reverse()
        },
        {
          name: '抢劫',
          data: [0.01, 0.01, 0.02, 0.05, 0.06, 0.05, 0.07, 0.09, 0.10].reverse()
        },
        {
          name: '诈骗',
          data: [0.05, 0.07, 0.08, 0.10, 0.09, 0.11, 0.14, 0.12, 0.15].reverse()
        },
        {
          name: '猥亵',
          data: [0.01, 0.02, 0.02, 0.03, 0.05, 0.04, 0.03, 0.04, 0.06].reverse()
        },
        {
          name: '醉驾',
          data: [0.09, 0.09, 0.10, 0.12, 0.11, 0.13, 0.12, 0.14, 0.15].reverse()
        },
        {
          name: '故意伤人',
          data: [0.02, 0.03, 0.05, 0.08, 0.11, 0.09, 0.09, 0.10, 0.12].reverse()
        },
        {
          name: '故意杀人',
          data: [0.01, 0.01, 0.02, 0.03, 0.03, 0.04, 0.04, 0.05, 0.07].reverse()
        }
      ].map(obj => ({
        ...obj,
        type: 'line',
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: { width: px(2) }
      }))
    });
    myChart.setOption(option);
  }, [])
  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}