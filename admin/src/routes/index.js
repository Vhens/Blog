import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../App.js';
import User from '../contants/user';
const routes = () => (
  <Router>
    <App>
      <Switch>
        <Route path="/user" component={User} />
        {/* <Route component={Error} />  */}
      </Switch>
    </App>
  </Router>
)

export default routes;