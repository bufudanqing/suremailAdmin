import React from 'react'
import './VisitCounts.less'
import { Card, Divider } from 'antd'

export default class VisitCounts extends React.Component {
    render () {
        return (
            <Card>
                <span>今日访问量</span><span className="num">666</span>
                <Divider/>
                <span>昨日访问量</span><span className="num">888</span>
                <Divider/>
                <span>新闻总数</span><span className="num">999</span>            
           </Card>
        )
    }
}