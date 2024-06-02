import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

function Echarts_demo() {

    const chartRef = useRef(null); // 创建一个ref来引用图表的DOM元素

      useEffect(() => {
        // 组件挂载后初始化echarts实例
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current);
            // 绘制图表
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            });
        }
      }, []); // 依赖数组为空，表示这个effect只在组件挂载时执行一次

  return (
      <div ref={chartRef} style={{width: '600px', height: '400px'}}></div>
  );
}

export default Echarts_demo;