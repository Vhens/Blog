import React, { PureComponent } from 'react';
import { Select, Icon, Button, DatePicker, Input } from 'antd';
import './search-bar.scss';
const Option = Select.Option;
export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.type);
  }
  render() {
    return (
      <div className="search-bar">
        <label>用户名：</label>
        <Input placeholder="请输入用户名" style={{ width: 120 }} />
        <label>国家：</label>
        <Select
          showSearch
          style={{ width: 120 }}
          placeholder="国家"
          optionFilterProp="children"
          // onChange={handleChange}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="欧洲">欧洲</Option>
          <Option value="中国">中国</Option>
          <Option value="非洲">非洲</Option>
        </Select>
        <label>创建时间：</label>
        <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="开始时间"
          />
        <label>~</label>
        <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="结束时间"
          onChange={(e, dataString) => { console.log(dataString) }}
        />
        <Button type="primary" icon="search">查询</Button>
        <Button type="primary" icon="rollback">重置</Button>
        <Button type="primary" icon="plus" onClick={this.props.showModal}>添加</Button>
      </div>
    );
  }
}