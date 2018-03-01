import React, { Component } from 'react';
import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar';
// import SideMenu from './common/layout/SideMenu';
import 'antd/dist/antd.css';
import MainContainer from './common/layout/main/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MuiThemeProvider>
        <SideMenu />
        <AppBar title="Title" />
        </MuiThemeProvider> */}
        <MainContainer />
      </div>
    );
  }
}

export default App;
