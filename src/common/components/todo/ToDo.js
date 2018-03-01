import React from 'react'
import { Card, Divider } from 'antd'
import './ToDo.less'

export default class ToDo extends React.Component{
    render() {
        return (
            <div className="todowrapper">
                <Card>
                    <p>ToDo List</p>
                    <Divider/>
                </Card>
            </div>
        )
    }
}