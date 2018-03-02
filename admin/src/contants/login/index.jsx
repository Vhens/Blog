import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
class Login extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        login
      </div>
    );
  }
}
export default withRouter(Login);