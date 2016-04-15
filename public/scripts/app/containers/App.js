import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import AddEntry from './AddEntry';
import EntriesList from './EntriesList';
import { fetchEntries } from '../actions/entries';

class App extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchEntries())
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch } = nextProps
            dispatch(fetchEntries())
        }
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

App.propTypes = {
  entries: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        isFetching: true,
        entries: []
    }
}

export default connect(mapStateToProps)(App)
