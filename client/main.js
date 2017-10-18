import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Route, Switch, Link } from 'react-router-dom';

import Signup from '../imports/ui/Signup';
import AppLink from '../imports/ui/AppLink';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';
import Header from '../imports/ui/Header';

const routes = (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Login} exact={true}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/links" component={AppLink}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
