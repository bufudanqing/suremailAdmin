import React from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './VisitCharts.less'


class VisitCharts extends React.Component {
    getDateStr(DayCount) {
        let dd = new Date();
        let dateArr = [];
        for ( let i = 0; i > -50 ; i--) {
            dd.setDate(dd.getDate()+i);//获取DayCount天后的日期
            let y = dd.getFullYear();
            let m = dd.getMonth()+1;//获取当前月份的日期
            let d = dd.getDate();

            // 判断月
            if (m < 10) {
                m = "0" + m;
            } else {
                m = m
            }
            // 判断日
            if (d < 10) {
                d = "0" + d;
            } else {
                d = d;
            }
            let dt = y+"/"+m+"/"+d;
            dateArr.push(dt);
            console.info(dt);
            
            // return  y+"/"+m+"/"+d;
            
            }
 
    }
    componentDidMount() {
        this.getDateStr(-30);
        var xAxisData = [];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220,220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        // var data = [];
        // for (var i = 0; i < 50; i++) {
        //     xAxisData.push(i);
        //     data.push((Math.sin(i / 5) * (i / 15 -10) + i / 6) * 5)
        // }

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            backgroundColor: '#08263a',
            tooltip: {},
            xAxis: {
                // show: false,
                data: xAxisData
            },
            yAxis: {
                axisLine: {
                    show: true
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
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
            <div id="main" ></div>
        );
    }
}

export default VisitCharts;

