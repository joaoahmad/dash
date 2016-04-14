import React from 'react';

import Entry from './Entry';
import EntriesTable from './EntriesTable';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey</h1>
        <Entry />
        <EntriesTable />
      </div>
    )
  }
}

module.exports = App;
