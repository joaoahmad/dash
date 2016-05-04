'use strict'

import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './stores'
import rootReducer from './reducers'
import routes from './routes';

const store = configureStore();

// import Router, {Route} from 'react-router';
// import history from './history';
// import LoginActions from './actions/LoginActions';
// import routes from './routes';
//
// let jwt = localStorage.getItem('jwt');
// if (jwt) {
//   LoginActions.loginUser(jwt);
// }
//
//

const Root = (
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>
)

ReactDom.render(Root, document.getElementById('app'))
