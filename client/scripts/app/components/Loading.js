import React, { PropTypes } from 'react';

export default class Loading extends React.Component {

    render(){
        const { isFetching, children } = this.props
        return (
            <div>
                {isFetching && <div>Loading...</div> || children }
            </div>
        )
    }
}

Loading.propTypes = {
    isFetching: PropTypes.bool.isRequired
}
