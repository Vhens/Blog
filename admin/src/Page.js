import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './contants/error';
import Login from './contants/login';
import App from './App.jsx';
export default () => (
    <Router> 
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/home" push />} />        
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)