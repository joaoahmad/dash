'use strict'

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './stores'
import rootReducer from './reducers'
import App from './components/App';

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

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)


// ReactDom.render(
//         <App />,
//     document.getElementById('app')
// )
