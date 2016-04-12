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


      let values = { a: 1 };

      function impureFunction ( items ) {
        var b = 1;

        items.a = items.a * b + 2;

        return items.a;
      }

      var c = impureFunction( values );
      console.log('c', values);

    return (
      <div>
        <h1>Heys! {values.a}</h1>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'));
