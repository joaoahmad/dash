import React from 'react';
import Router, {Route, Redirect, IndexRoute, IndexRedirect} from 'react-router';
import App from './components/App';

import Home from './pages/Home';

import Users from './pages/Users';
import UsersContainer from './containers/Users';
import UserContainer from './containers/User';

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/users" component={Users}>
            <Route path="/users/:userId" component={UserContainer}/>
            <IndexRoute component={UsersContainer}/>
        </Route>
    </Route>
);

export default routes;
