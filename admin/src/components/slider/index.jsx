import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Switch } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { allMenu } from './menu';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

class Slider extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.onCollapse}
        className="leftMenu"
      >
        {this.props.theme === 'light' ? <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a> :
          <a href="https://github.com/Vhens/blog/tree/master/admin" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a>}
        {this.props.theme === 'light' ? <span className="author">Vhen</span> : <span className="author white">Vhen</span>}
        <Menu
          theme={this.props.theme}
          onClick={this.props.handleClick}
          defaultOpenKeys={['']}
          selectedKeys={[this.props.current]}
          className="menu"
          mode={this.props.mode}
        >
          {
            allMenu.map((subMenu) => {
              if (subMenu.children && subMenu.children.length) {
                return (
                  <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                    {subMenu.children.map(menu => (
                      <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                    ))}
                  </SubMenu>
                )
              }
              return (
                <Menu.Item key={subMenu.url}>
                  <Link to={`/${subMenu.url}`}>
                    <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
                  </Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
        <div className="switch">
          <Switch
            checked={this.props.theme === 'dark'}
            onChange={this.props.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
      </Sider>
    );
  }
}

export default withRouter(Slider);