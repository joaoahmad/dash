'use strict'

import React from 'react';
import ReactDom from 'react-dom';

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

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Heys {this.props.hey}!</h1>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'));
