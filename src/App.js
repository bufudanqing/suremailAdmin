import React, { Component } from 'react';
import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar';
// import SideMenu from './common/layout/SideMenu';
import 'antd/dist/antd.css';
import MenuBar from './common/layout/side/MenuBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MuiThemeProvider>
        <SideMenu />
        <AppBar title="Title" />
        </MuiThemeProvider> */}
        <MenuBar />
      </div>
    );
  }
}

export default App;
