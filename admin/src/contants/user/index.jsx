import React, { PureComponent } from 'react';
import { message, Modal } from 'antd';
import Table from '../../components/table';

const confirm = Modal.confirm;
export default class User extends PureComponent {
  constructor(props) {
    super(props);
  }
  tableAction = (actionKey, item) => {
    if (actionKey === 'edit') {
        this.setState({
            item: item,
            modalShowEdit: true
        })
    } else if (actionKey === 'delete') {
        confirm({
            title: '提示',
            content: '确定删除吗',
            onOk: () => {
                message.success('删除成功')
            },
            onCancel() {}
        })
    }
  }
  tableHeader = () => {
    return [
    {
      dataIndex: 'userName',
      title: '用户',
      width: 200,
    }, 
    {
      dataIndex: 'country',
      title: '国家',
      width: 200,
    }, 
    {
      dataIndex: 'language',
      title: '语种',
      width: 200,
    },
    {
        dataIndex: 'createTime',
        title: '创建时间',
        width: 200,
    }
  ]
 }
  render() {
    const user = [];
    for (let i = 0; i < 100; i++) {
      user.push({
        id: i,
        userName: `用户名 ${i}`,
        country: `国家${i}`,
        language:  `语言${i}`,
        createTime: `2018-10-08 `,
      });
    }
    return (
      <div>
         <Table
            onCtrlClick={ this.tableAction }
            pagination={ true }
            pageSize={10}
            header={ this.tableHeader() }
            data={ user }
            // loading=true
            action={row => [{
                key: 'edit',
                name: '修改',
                color: 'blue',
                icon: 'edit',
            }, {
                key: 'delete',
                name: '删除',
                color: 'red',
                icon: 'delete'
            }]}
            scroll={{y: 385 }}
        />
      </div>
    );
  }
}