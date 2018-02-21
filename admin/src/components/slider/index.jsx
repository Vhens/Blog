import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import { menus } from './menu';
import SliderMenu from './sliderMenu';
const { Sider } = Layout;

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      mode: 'inline',
      openKey: '',
      selectedKey: '',
      firstHide: true,
    }
  }
  componentDidMount() {
    this.setMenuOpen(this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.onCollapse(nextProps.collapsed);
    this.setMenuOpen(nextProps)
  }
  setMenuOpen = props => {
    const { pathname } = props.location;
    this.setState({
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      selectedKey: pathname
    });
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      firstHide: collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  };
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
    console.log(this.state);
    const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
    popoverHide && popoverHide();
  };
  openMenu = v => {
    console.log(v);
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false,
    })
  };
  render() {
    return (
      <Sider
        trigger={null}
        breakpoint="lg"
        collapsed={this.props.collapsed}
        style={{ overflowY: 'auto' }}
      >
        <SliderMenu
          menus={menus}
          onClick={this.menuClick}
          theme="dark"
          mode="inline"
          selectedKeys={[this.state.selectedKey]}
          openKeys={this.state.firstHide ? null : [this.state.openKey]}
          onOpenChange={this.openMenu}
        />
        <style>
          {`
              #nprogress .spinner{
                  left: ${this.state.collapsed ? '70px' : '206px'};
                  right: 0 !important;
              }
              `}
        </style>
      </Sider>
    );
  }
}

export default withRouter(Slider);