import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart2 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const generateData = () => {
    const randomNumber = () => Math.floor(Math.random() * 10)
    return [
      { name: '城关区公安局', 2011: randomNumber(), 2012: randomNumber() },
      { name: '七里河区公安局', 2011: randomNumber(), 2012: randomNumber() },
      { name: '西固区公安局', 2011: randomNumber(), 2012: randomNumber() },
      { name: '安宁区公安局', 2011: randomNumber(), 2012: randomNumber() },
      { name: '红古区公安局', 2011: randomNumber(), 2012: randomNumber() },
      { name: '永登县公安局', 2011: randomNumber(), 2012: randomNumber() },
      { name: '皋兰县公安局', 2011: randomNumber(), 2012: randomNumber() },
      { name: '榆中县公安局', 2011: randomNumber(), 2012: randomNumber() },
      { name: '兰州新区公安局', 2011: randomNumber(), 2012: randomNumber() },
    ]
  }
  const initData = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        axisLabel: { show: false },
      },
      yAxis: {
        axisTick: { show: false },
        type: 'category',
        data: data.map(i => i.name),
        axisLabel: {
          formatter(val) {
            return val.replace('公安局', '\n公安局')
          }
        }
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: data.map(i => i['2011']),
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#2034f9'
            }, {
              offset: 1,
              color: '#04a1ff'
            }]),
          }
        },
        {
          name: '2012年',
          type: 'bar',
          data: data.map(i => i['2012']),
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#b92ae8'
            }, {
              offset: 1,
              color: '#6773e7'
            }]),
          }
        }
      ]
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    initData(generateData())
    window.setInterval(() => {
      initData(generateData())
    }, 3000)
  }, [])
  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"></div>
      <div className="legend">
        <div className="first"></div>破案排名1
        <div className="second"></div>破案排名2
      </div>
    </div>
  )
}

function setInterval(arg0: () => void) {
  throw new Error('Function not implemented.');
}
