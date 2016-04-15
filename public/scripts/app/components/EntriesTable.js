import React, { PropTypes } from 'react';


export default class EntriesTable extends React.Component {

    render(){
        return (
            <ul>
                {this.props.entries.map((entry, i) =>
                    <li key={i}>{entry.name}</li>
                )}
            </ul>
        )
    }
}

EntriesTable.propTypes = {
  entries: PropTypes.array.isRequired
}

// module.exports = EntriesTable;
