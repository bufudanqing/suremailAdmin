import React from 'react';
// import ReactDOM from 'react-dom'

import './MenuBar.less'
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

export default class MenuBar extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      collapsed: false,
      theme: 'dark',
      current: '1',
      openKeys: ['1'],
      rootSubmenuKeys : ['sub1', 'sub2', 'sub3'],
      
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  changeTheme (value) {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick (e) {
    console.log('click', e);
    this.setState({
      current: e.key,
    });
  }
  onOpenChange (openKeys) {
    const lastestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(lastestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: lastestOpenKey ? [lastestOpenKey] : [],
      });
    }
  }
  render() {
    return (
      <div className="menuwrapper" >
        <div className="author">
          <a><Icon type="github" style={{ fontSize: 32 }} /></a>
          <span> LB </span>
        </div>
        
        <Menu
          defaultSelectedKeys={['1']}
          selectedKeys = {[this.state.current]}
          // defaultOpenKeys={['sub1']}
          openKeys = {this.state.openKeys}
          onOpenChange = {this.onOpenChange}
          mode="inline"
          theme={this.state.theme}
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="home" />
            <span>首页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="inbox" />
            <span>邮箱申请</span>
          </Menu.Item>
          <Menu.Item key="3">
          <Icon type="user" />
            <span>用户信息</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="cloud-upload-o" /><span>常规更新</span></span>}>
            <Menu.Item key="5">首页轮播</Menu.Item>
            <Menu.Item key="6">新闻上传</Menu.Item>
            <Menu.Item key="7">业界动态</Menu.Item>
            <Menu.Item key="8">视频上传</Menu.Item>
            <Menu.Item key="9">客户端上传</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>公司动态</span></span>}>
            <Menu.Item key="10">成功案例</Menu.Item>
            <Menu.Item key="11">招聘信息</Menu.Item>
            <Menu.Item key="12">奖杯表扬</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="solution" /><span>网站管理</span></span>}>
            <Menu.Item key="13">后台用户</Menu.Item>
            <Menu.Item key="14">管理日志</Menu.Item>
          </SubMenu>
        </Menu>
        <Switch
          checked= {this.state.theme === 'dark'}
          onChange = {() => this.changeTheme()}
          checkedChildren = 'Dark'
          unCheckedChildren = 'Light'
        />

      </div>
    );
  }
}
