import React, { PropTypes } from 'react';


export default class EntriesTable extends React.Component {

    render(){
        const { isFetching, entries } = this.props
        return (
            <div>
                {isFetching &&
                    <div>Loading...</div>
                }
                <ul>
                    {entries.map((entry, i) =>
                        <li key={i}>{entry.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

EntriesTable.propTypes = {
  entries: PropTypes.array.isRequired
}

// module.exports = EntriesTable;
