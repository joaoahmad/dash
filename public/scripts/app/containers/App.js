import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import AddEntry from './AddEntry';
import EntriesList from './EntriesList';
import EntriesTable from '../components/EntriesTable';
import { fetchEntries } from '../actions/entries';

class App extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchEntries());
        console.log('component → action');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch } = nextProps
            dispatch(fetchEntries())
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Hey</h1>
                <AddEntry />
                <EntriesTable entries={this.props.entries} />
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
        entries: state.entries.items || []
    }
}

export default connect(mapStateToProps)(App)
