import * as React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import App from '../App.jsx';
import User from '../contants/user';
import Home from '../contants/home';
import Follow from '../contants/follow';
import Login from '../contants/login';

import Error from '../contants/error';


const routes = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/app/home" component={Home} />
        <Route path="/app/user" component={User} />
        <Route path="/app/follow" component={Follow} />
        <Route path="/login" component={Login} />
        {/* <Route component={Error} />  */}
        <Route render={() => <Redirect to="/error" />} />
      </Switch>
    </App>
  </Router>
)

export default routes;