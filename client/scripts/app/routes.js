import React from 'react';
import Router, {Route, Redirect, IndexRoute, IndexRedirect} from 'react-router';
import App from './components/App';

import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/users/:userId" component={User}/>
    </Route>
);

export default routes;
