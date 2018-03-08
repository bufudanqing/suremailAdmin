import React from 'react';
import { Card, List } from 'antd'

export default class FeedBack extends React.Component {
    render () {
        const data = [
            {
              title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
            {
              title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.2',
            },
            {
              title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.3',
            },
            {
              title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.4',
            },
            {
              title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
            {
              title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.2',
            },
          
          ];
        return (
          <Card>
            <h3 style={{ marginBottom: 16 }}>新闻阅读排行</h3>
            <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta                 
                  title={<a href="https://ant.design">{item.title}</a>}
                  // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
          </Card>           
        )
    }
}