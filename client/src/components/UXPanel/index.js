import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import Header from './Header';
import Body from './Body';

class Panel extends React.Component {

    render() {

        var classes = {
            'uxpanel': true,
            'uxpanel--closed': false,
        };

        if(!_.isEmpty(this.props.type))
            classes['uxpanel-' + this.props.type] = true;

        classes = classnames(classes);

        return (
            <div {...this.props} className={classes} >
                {this.props.children}
            </div>
        );
    }
}

export { Header, Body }
export default Panel
