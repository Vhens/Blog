import React, { PureComponent } from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import Dynamic from '../../components/echarts/dynamic ';
import './home.scss';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <Row gutter={10}>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <Icon type="heart" className="text-2x text-danger" />
                  </div>
                  <div className="clear">
                    <div className="text-muted">收藏</div>
                    <h2>31</h2>
                  </div>
                </div>
              </Card>
            </div>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <Icon type="cloud" className="text-2x" />
                  </div>
                  <div className="clear">
                    <div className="text-muted">云数据</div>
                    <h2>322</h2>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <Icon type="camera" className="text-2x text-info" />
                  </div>
                  <div className="clear">
                    <div className="text-muted">照片</div>
                    <h2>30</h2>
                  </div>
                </div>
              </Card>
            </div>
            <div className="gutter-box">
                <Card bordered={false}>
                  <div className="clear y-center">
                    <div className="pull-left mr-m">
                      <Icon type="mail" className="text-2x text-success" />
                    </div>
                    <div className="clear">
                      <div className="text-muted">邮件</div>
                      <h2>156</h2>
                    </div>
                  </div>
                </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={16}>
              <div className="gutter-box">
                  <Card bordered={false} className={'no-padding'}>
                    <Dynamic />
                  </Card>
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}