import React from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'
import Loading from '../components/Loading'
import { fetchEntries } from '../actions/entries';

class EntriesList extends React.Component{
    componentDidMount(){
        const { dispatch } = this.props
        dispatch(fetchEntries())
    }
    render(){
        const { entries, isFetching } = this.props
        return (
            <div>
                <Loading isFetching={isFetching}>
                    <Table items={entries} />
                </Loading>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return Object.assign({
        isFetching: true,
        entries: []
    }, state.entries)

}

// const EntriesList = connect(mapStateToProps, mapDispatchToProps)(EntriesList)

export default connect(mapStateToProps)(EntriesList)
