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
      username: ''
    }
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
          type="arrows-alt"
          onClick={this.screenFull}
        />
      </Header>
    );
  }
}
export default withRouter(Top);