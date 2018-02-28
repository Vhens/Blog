import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import Slider from './components/slider';
import Top from './components/header';
import './App.scss';
const { Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Slider />
        <Layout>
          <Top/>
          <Content />
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
