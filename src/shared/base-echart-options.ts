import { px } from './px'

export const baseEchartOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#78939e'
  },
  title: { show: false, },
  legend: { show: false, },
  grid: {
    x: px(20),
    y: px(20),
    x2: px(20),
    y2: px(20),
    containLabel: true
  },
}