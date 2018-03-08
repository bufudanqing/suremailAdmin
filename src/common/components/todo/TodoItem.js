import React, { Component } from 'react';
import {Row, Col, Checkbox, Button} from 'antd';


export default class TodoItem extends Component {
    render() {
        let task = this.props.task
        return (
            <li className="list-group-item">
                <Row>
                <Col span={12}>
                {task}
                    {/* <Checkbox checked={itemChecked} onChange={this.toggleComplete}/> {task} */}
                </Col>
                <Col span={12}>
                    <Button type="danger" className="pull-right" onClick={this.deleteTask}>删除</Button>
                </Col>
                </Row>
            </li>
        )
    }
}