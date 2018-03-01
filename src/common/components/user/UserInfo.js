import React from 'react';
// import ReactDOM from 'react-dom';
import { Avatar, Badge, Menu, Dropdown} from 'antd';
import './UserInfo.less'

export default class UserInfo extends React.Component{
   
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a rel="noopener" href="">个人主页</a>
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="1">
                    退出
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="info">
                <Dropdown overlay={menu}>
                    <span style={{ marginRight: 24 }}>
                            <Badge count={1}><Avatar shape="square" icon="user"></Avatar></Badge>
                    </span>
                </Dropdown>
                
            </div>
        )
    }
}