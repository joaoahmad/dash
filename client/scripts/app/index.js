'use strict'

import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './stores'
import rootReducer from './reducers'
import routes from './routes';
import Home from './pages/Home';

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

const hey = (
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>
)

ReactDom.render(hey, document.getElementById('app')
)


// ReactDom.render(
//         <App />,
//     document.getElementById('app')
// )
