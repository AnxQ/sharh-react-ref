import React, {Component} from 'react';
import {Layout} from 'antd';

import Sidebar from './Components/Sidebar';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Layout
            style={{minHeight: '100vh'}}
        >
          <Sidebar/>
        </Layout>
    );
  }
}

export default App;
