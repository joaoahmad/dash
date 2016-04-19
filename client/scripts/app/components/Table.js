import React, { PropTypes } from 'react';

export default class Table extends React.Component {

    componentWillMount() {
        this.props.fetchItems();
    }

    render(){
        console.log(this.props);
        const { items, isFetching } = this.props
        return (
            <div>
                {isFetching &&
                    <div>Loading...</div>
                }
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
    items: PropTypes.array.isRequired,
    fetchItems: PropTypes.func.isRequired
}
