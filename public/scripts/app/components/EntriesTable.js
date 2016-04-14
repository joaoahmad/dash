import React, { PropTypes } from 'react';


class EntriesTable extends React.Component {

    componentDidMount(){
    }

    render(){
        var entries = this.props.entries.map( entry => {
            return <div key={entry}>{entry}</div>
        })
        return (
            <div>
                {entries}
            </div>
        )
    }
}

EntriesTable.propTypes = { entries: PropTypes.array }
// EntriesTable.defaultProps = { entries: [] }

module.exports = EntriesTable;
