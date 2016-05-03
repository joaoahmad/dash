import React from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import { connect } from 'react-redux'

class Page extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { isLoading } = this.props
        var helmetProps = _.omit(this.props, 'children');
        return (
            <div id="page" ref="page">
                <Helmet {...helmetProps} />
                {isLoading ? 'LOADING' : ''}
                {this.props.children}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return Object.assign({ loading: true }, state.page)
}

export default connect(mapStateToProps)(Page)
