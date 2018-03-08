import React, { PureComponent } from 'react';
import { Menu, Icon, Layout } from 'antd';
import screenfull from 'screenfull';
import { withRouter, Link } from 'react-router-dom';
import './header.scss';
const SubMenu = Menu.SubMenu
const { Header } = Layout
class Top extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isFullScreen: false,
      toggleScreenIcon: 'arrows-alt'
    }
    this.toggleFullScreen = this.toggleFullScreen.bind(this)
  }
  componentDidMount() {
    this.getUser()
  }
  getUser = () => {
    this.setState({
        username: 'Vhen'
    })
  }
  clear = (item) => {
    if (item.key === 'logOut') {
        this.props.clear()
    }
  }
  screenFull = () => {
    if (screenfull.enabled) {
        screenfull.request();
    }
  }
  handleLogin() {
    this.props.history.push('/login');
  }
  // 全屏
  fullScreen() {
    const doc = document.documentElement
    if (doc.requestFullscreen) {
      doc.requestFullscreen()
    } else if (doc.mozRequestFullScreen) {
      doc.mozRequestFullScreen()
    } else if (doc.webkitRequestFullScreen) {
      doc.webkitRequestFullScreen()
    } else if (doc.msRequestFullScreen) {
      doc.msRequestFullScreen()
    }
  }
  // 退出全屏
  exitFullScreen () {
    const doc = document.documentElement
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    } else if (document.msCancelFullScreen) {
      document.msCancelFullScreen()
    }
  }
  // 切换屏幕大小
  toggleFullScreen() {
    this.setState({
      isFullScreen: !this.state.isFullScreen
    })
    if(this.state.isFullScreen) {
      this.exitFullScreen();
      this.setState({
        toggleScreenIcon: 'arrows-alt'
      })
    } else {
      this.fullScreen();
      this.setState({
        toggleScreenIcon: 'shrink'
      })
    }
  }
  render() {
    return(
      <Header style={{ background: '#fff'}}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Menu mode="horizontal" className="logOut" onClick={this.clear}>
          <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>} >
              <Menu.Item key="logOut"><span onClick={this.handleLogin.bind(this)}>退出</span></Menu.Item>
          </SubMenu>
        </Menu>
        <Icon
          className="screenFull"
          type= {this.state.toggleScreenIcon}
          onClick={this.toggleFullScreen}
        />
      </Header>
    );
  }
}
export default withRouter(Top);