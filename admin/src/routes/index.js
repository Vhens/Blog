import * as React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import App from '../App.jsx';
import User from '../contants/user';
import Home from '../contants/home';
import Follow from '../contants/follow';
const routes = () => (
  <Switch>
    <Route exact path="/app/home" component={Home} />
    <Route path="/app/user" component={User} />
    <Route path="/app/follow" component={Follow} />
    <Route render={() => <Redirect to="/404" />} />
  </Switch>
)

export default routes;