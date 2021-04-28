import React, { useEffect, useRef } from 'react';
import './home.scss';
import * as echarts from 'echarts'

const px = (n) => n / 2420 * (window as any).pageWidth;

export const Home = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = {
      textStyle: {
        fontSize: px(12),
        color: '#78939e'
      },
      title: { show: false, },
      legend: { show: false, },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40)
      },
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
        axisLabel: {
          fontSize: px(12)
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    };
    myChart.setOption(option);
  }, [])
  return (
    <div className="home-header-wrapper">
      <header></header>
      <main>
        <section className="section1">
          <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
