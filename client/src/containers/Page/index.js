import React from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import  classnames from 'classnames'
import { connect } from 'react-redux'

import Content from './PageContent';
import Subpage from './PageSubpage';

class Page extends React.Component {

    render() {
        const { page, subpage } = this.props
        const classes = classnames('page', {
            'hide-page': !page,
            'is-subpage': subpage,
        });

        return (
            <div id="page" ref="page" className={classes}>
                {this.props.children}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return Object.assign({ page: true, subpage: false }, state.uiPage)
}

export { Content, Subpage }
export default connect(mapStateToProps)(Page)
