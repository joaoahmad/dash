import { connect } from 'react-redux'
import Table from '../components/Table'
import { fetchEntries } from '../actions/entries';

const mapStateToProps = (state) => {
    return Object.assign({
        isFetching: true,
        items: []
    }, state.entries)

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => {
      dispatch(fetchEntries())
    }
  }
}

const EntriesList = connect(mapStateToProps, mapDispatchToProps)(Table)

export default EntriesList
