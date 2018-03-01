import React from 'react';
// import ReactDOM from 'react-dom'
import MenuBar from '../side/MenuBar';
// import HeaderBar from '../head/HeaderBar'
import 'antd/dist/antd.css';
import './MainContainer.less'
import UserInfo from '../../components/user/UserInfo'
import IndexContent from '../content/IndexContent'
import { Layout, Icon } from 'antd';
const { Header, Sider, Content } = Layout;


export default class MainContainer extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            collapsed: false,
        };   
        // ES6类中函数必须手动绑定
        // this.handleChange = this.handleChange.bind(this);
    }
   
    toggle () {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render () {
        return (
            <div className="wrapper">
                <Layout>
                    <Sider 
                      trigger={null}
                      collapsible
                      collapsed={this.state.collapsed}
                    >
                        <MenuBar />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                          <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={() => this.toggle()}
                          />
                          <UserInfo />
                        </Header>
                        <Content style={{ margin:'24px 16px', padding:24,background:'#fff', minHeight:280 }}>
                            <IndexContent/>
                        </Content>
                        {/* <Footer>Footer</Footer> */}
                    </Layout>
                </Layout>
                
            </div>
        )
    }
}

