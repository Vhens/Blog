import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { allMenu } from './menu';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      current: 'index',
      collapsed: false,
      mode: 'inline',  // 水平垂直展现
    }
  }
  componentDidMount() {
    this.handleClick([], 'index');
  }
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
      current: 'index',
    });
  }
  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
  }
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        className="leftMenu"
      >
        {this.state.theme === 'light' ? <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a> :
          <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a>}
        {this.state.theme === 'light' ? <span className="author">牧之</span> : <span className="author white">Vhen</span>}
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={['']}
          selectedKeys={[this.state.current]}
          className="menu"
          mode={this.state.mode}
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
      </Sider>
    );
  }
}

export default withRouter(Slider);