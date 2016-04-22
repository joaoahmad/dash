import React from 'react';
import Router, {Route, Redirect, IndexRoute, IndexRedirect} from 'react-router';
import App from './components/App';

import Home from './pages/Home';

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
    </Route>
);

export default routes;
