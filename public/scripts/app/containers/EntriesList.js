import { connect } from 'react-redux'
import EntriesTable from '../components/EntriesTable'

const mapStateToProps = (state) => {
  return {
    entries: state.entries
  }
}

const EntriesList = connect(mapStateToProps)(EntriesTable)

export default EntriesList
