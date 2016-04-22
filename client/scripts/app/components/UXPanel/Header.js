import React from 'react';
import classnames from 'classnames';

class Header extends React.Component {
    render() {
        var classes = classnames({
            'uxpanel-header': true,
        });

        return (
            <div className={classes} >
                <h2 className="title">{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}
module.exports = Header;
