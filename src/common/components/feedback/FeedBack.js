import React from 'react';
import { Card, List } from 'antd'

export default class FeedBack extends React.Component {
    render () {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
          ];
        return (
               <Card>
                    <h3 style={{ marginBottom: 16 }}>反馈信息</h3>
                    <List
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
               </Card>
        )
    }
}