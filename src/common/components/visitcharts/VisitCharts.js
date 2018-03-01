import React from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class VisitCharts extends React.Component {
    componentDidMount() {
        var xAxisData = [];
        var data = [];
        for (var i = 0; i < 50; i++) {
            xAxisData.push(i);
            data.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5)
        }

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            backgroundColor: '#08263a',
            tooltip: {},
            xAxis: {
                show: false,
                data: xAxisData
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#4a657a'
                    }  
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#08263f'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 50,
                dimension: 0,
                inRange: {
                    color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
                }
            },
            series: [{
                type: 'bar',
                data: data,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        shadowBlur: 10,
                        shadowColor: '#111'
                    }
                },
                animationEasing: 'elasticOut',
                animationEasingUpdate: 'elasticOut',
                animationDelay: function (idx) {
                    return idx * 20;
                },
                animationDelayUpdate: function (idx) {
                    return idx * 20;
                }
            }]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 500 , height: 155 }}></div>
        );
    }
}

export default VisitCharts;

