import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'antd';

export default class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    
    toggleCollapesd () {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    render() {
        return (
            <div>123</div>
        )
    }
}  
