import React, { Component } from 'react';
import { Layout, notification, Icon  } from 'antd';
import { withRouter } from 'react-router-dom';
import Slider from './components/slider';
import Top from './components/header';
import Foot from './components/footer';
import Routes from './routes';
import './App.scss';
const { Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      theme: 'dark',
      collapsed: false,
      current: 'app/home',
      mode: 'inline'  // 水平垂直展现
    }
  }
  componentDidMount() {
    this.handleClick([], 'app/home')
    this.props.history.push('/app/home');
    setTimeout(this.openNotification, 1000);
  }
  openNotification = () => {
    notification.open({
      message: '温馨提示',
      description: '欢迎您来到博客后台系统',
      duration: 3,
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
    });
  };
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }
  clear = () => {
    this.setState({
      current: 'home',
    });
  }
  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
  }
  render() {
    return (
      <Layout className="container">
        <Slider 
          changeTheme={this.changeTheme}
          collapsed={this.state.collapsed}
          handleClick={this.handleClick}
          theme={this.state.theme}
          mode={this.state.mode}
          current={this.state.current}
        />
        <Layout>
          <Top 
            toggle={this.toggle} 
            collapsed={this.state.collapsed} 
            clear={this.clear}/>
            <Content className="content">
              <Routes />
            </Content>
          <Foot />
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
