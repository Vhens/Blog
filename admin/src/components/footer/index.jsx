import React, { PureComponent } from 'react';
import { Layout } from 'antd';

import './footer.scss';
const { Footer } = Layout
export default class Foot extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  tick = () => {
    this.setState({ timer: this.state.timer + 1 });
  }
  render() {
    return (
      <Footer className="bottom animated bounceInLeft">
        <div className="text">
          <div>
            <span className="me">© 2018 博客后台系统</span>
            <span className="stay">您已在小窝里逗留了 <span className="time">{this.state.timer}</span> 秒</span>
          </div>
        </div>
      </Footer>
    );
  }
}