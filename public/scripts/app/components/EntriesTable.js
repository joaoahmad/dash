import React, { PropTypes } from 'react';


class EntriesTable extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render(){
        console.log('entries', this.props.entries);
        var entries = this.props.entries.map( entry => {
            return <div key={entry.id}>{entry.name}</div>
        })
        return (
            <div>
                {entries}
            </div>
        )
    }
}

// EntriesTable.propTypes = { entries: PropTypes.array }

module.exports = EntriesTable;
