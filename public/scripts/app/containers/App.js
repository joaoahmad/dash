import React from 'react';

import AddEntry from './AddEntry';
import EntriesList from './EntriesList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey</h1>
        <AddEntry />
        <EntriesList />
      </div>
    )
  }
}

module.exports = App;
