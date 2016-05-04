import React from 'react';
import Router, {Route, Redirect, IndexRoute, IndexRedirect} from 'react-router';
import App from './containers/App';

import Home from './pages/Home';

import Users from './pages/Users';
import UsersContainer from './containers/Users';
import UserContainer from './containers/User';
import UserDraftContainer from './containers/UserDraft';

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/users" component={Users}>
            <Route path="/users/e/:userId" component={UserContainer}/>
            <Route path="/users/a" component={UserDraftContainer}/>
        </Route>
    </Route>
);

export default routes;
