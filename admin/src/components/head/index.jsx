import React, { PureComponent } from 'react';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import screenfull from 'screenfull';
import { withRouter } from 'react-router-dom';
import Slider from '../slider';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
/*eslint-disable */
class Head extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      visible: false,
  };
  }
  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request();
    }
  };
  render() {
    const { responsive, path } = this.props;
    return (
      <Header style={{ background: '#fff', padding: 0, height: 65 }}>
        <Menu
          mode="horizontal"
          style={{ lineHeight: '64px', float: 'right' }}
          onClick={this.menuClick}
        >
          <Menu.Item key="full" onClick={this.screenFull} >
            <Icon type="arrows-alt" onClick={this.screenFull} />
          </Menu.Item>
          <Menu.Item key="1">
            <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
              <Icon type="notification" />
            </Badge>
          </Menu.Item>
          <SubMenu title={<span className="avatar"><img src='' alt="头像" /><i className="on bottom b-white" /></span>}>
            <MenuItemGroup title="用户中心">
              <Menu.Item key="setting:1">你好 - {this.props.user.userName}</Menu.Item>
              <Menu.Item key="setting:2">个人信息</Menu.Item>
              <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="设置中心">
              <Menu.Item key="setting:3">个人设置</Menu.Item>
              <Menu.Item key="setting:4">系统设置</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
        <style>{`
            .ant-menu-submenu-horizontal > .ant-menu {
                width: 120px;
                left: -40px;
            }
        `}</style>
      </Header>
    );
  }
}
export default withRouter(Head);