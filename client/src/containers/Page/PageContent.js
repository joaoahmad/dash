import React from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import  classnames from 'classnames'
import { connect } from 'react-redux'

class PageContent extends React.Component {

    render() {
        const helmetProps = _.omit(this.props, 'children');
        return (
            <div className='page__content'>
                <Helmet {...helmetProps} />
                {this.props.children}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return Object.assign({ page: true, subpage: false }, state.uiPage)
}

export default connect(mapStateToProps)(PageContent)
