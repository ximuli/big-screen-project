import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart12 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  const generateData = () => {
    const randomNumber = () => parseFloat((Math.random() / 10).toFixed(2))
    return [
      {value: randomNumber(), name: '东岗路'},
      {value: randomNumber(), name: '段家滩'},
      {value: randomNumber(), name: '雁北'},
      {value: randomNumber(), name: '五泉山'},
      {value: randomNumber(), name: '中山路'},
      {value: randomNumber(), name: '庆阳路'},
      {value: randomNumber(), name: '武都路'},
      {value: randomNumber(), name: '酒泉路'},
      {value: randomNumber(), name: '天水路'},
    ]
  }
  const initData = (data) => {
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
          const value = (data.find(i => i.name === name)?.value * 100).toFixed(0) + '%';
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
    myChart.current.setOption(option);
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    initData(generateData())
    setInterval(() => {
      initData(generateData())
    }, 2000)
  }, [])
  return (
    <div ref={divRef} className="chart"></div>
  )
}