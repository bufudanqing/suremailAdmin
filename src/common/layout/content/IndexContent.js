import React from 'react';
import { Row, Col } from 'antd';
import Weather from '../../components/weather/Weather'
import VisitCounts from '../../components/visitcounts/VisitCounts'
import VisitCharts from '../../components/visitcharts/VisitCharts'
import ToDo from '../../components/todo/ToDo'
import FeedBack from '../../components/feedback/FeedBack'
import NewsList from '../../components/newslist/NewsList'

import './IndexContent.less';
import 'antd/dist/antd.css';

export default class IndexContent extends React.Component {
    
    render() {
        return (
            <div className="gutter-example">
              <Row className="flex-row" gutter={32} type="flex" justify="space-around">
                <Col className="gutter-row" span={8}>
                  <div className="gutter-box">
                    <Weather/>
                  </div>
                </Col>
                <Col className="gutter-row" span={4} style={{ paddingLeft:8,paddingRight:8 }}>
                  <div className="gutter-box">
                    <VisitCounts/>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div className="gutter-box">
                    <VisitCharts />
                  </div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div className="gutter-box">
                    <ToDo/>
                  </div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div className="gutter-box">
                     <FeedBack/>
                  </div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div className="gutter-box">
                    <NewsList/>
                  </div>
                </Col>
              </Row>

          </div>
        )
    }
}