import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
// import { observer, inject } from 'mobx-react';
import { Button, Row, Form, Input, Icon } from 'antd';
import './login.scss';
const FormItem = Form.Item;
class Login extends PureComponent {
  constructor(props) {
    super(props);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form className="login-form">
          <FormItem>
            {getFieldDecorator('Username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input 
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="用户名" 
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input 
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" 
                placeholder="密码" 
              />
            )}
          </FormItem>
          <Row>
            <Button
              type='primary'
              size='large'
              onClick={this.handleSubmit}
              // loading={loading}
              // disabled={loading}
            >
              登录
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}
const LoginForm = Form.create()(Login);
export default withRouter(LoginForm);