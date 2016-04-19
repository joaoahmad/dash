import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import AddEntry from '../containers/AddEntry';
import EntriesList from '../containers/EntriesList';

class App extends React.Component {
    constructor(props){
        super(props)
    }

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

export default App
