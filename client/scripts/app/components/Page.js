import React from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';

class Page extends React.Component {

    constructor() {
        super();
    }

    render() {
        var helmetProps = _.omit(this.props, 'children');
        return (
            <div id="page" ref="page">
                <Helmet {...helmetProps} />
                {this.props.children}
            </div>
        );
    }

}

module.exports = Page;
