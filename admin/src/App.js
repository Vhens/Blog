import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import Slider from './components/slider';
import Head from './components/head';

import './App.css';
const { Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      data: {
        userName: 'dddd'
      }
    };
  }
  render() {
    return (
      <Layout>
        <Slider />
        <Layout style={{flexDirection: 'column'}}>
          <Head toggle={this.toggle} collapsed={this.state.collapsed} user={this.state.data || {}} />
          <Content style={{background: '#f5f5f5', height: '100vh' }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
