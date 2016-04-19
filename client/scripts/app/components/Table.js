import React, { PropTypes } from 'react';

export default class Table extends React.Component {

    render(){
        const { items } = this.props
        return (
            <div>
                <ul>
                    {items.map((item, i) =>
                        <li key={i}>{item.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

Table.propTypes = {
    items: PropTypes.array.isRequired
}
