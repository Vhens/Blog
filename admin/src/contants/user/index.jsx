import React, { PureComponent } from 'react';
import { Layout, Icon, Button, Table, Input, Modal } from 'antd';
import SearchBar from '../../components/search-bar';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '国家',
    dataIndex: 'country',
  },
  {
    title: '积分',
    dataIndex: 'integral',
  },
  {
    title: '创建时间',
    dataIndex: 'created_time'
  }
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    id: i,
    username: `用户${i}`,
    country: '欧洲',
    integral: i + 10,
    created_time: '2017-03-17'
  })
}
export default class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false 
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <SearchBar
          type="text"
          showModal={this.showModal}
        />
        <Table
          columns={columns}
          dataSource={data}
          pagination = {{defaultPageSize: 5}}
          // bordered
        />
        <Modal
          title="添加用户"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}