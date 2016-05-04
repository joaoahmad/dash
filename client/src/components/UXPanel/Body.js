import React from 'react';
import classnames from 'classnames';

class Body extends React.Component {
    render() {
        var classes = classnames({
            'uxpanel-body': true,
        });

        return (
            <div {...this.props} className={classes} >
                {this.props.children}
            </div>
        );
    }
}
module.exports = Body;
