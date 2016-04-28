import React from 'react';
import classnames from 'classnames';

class Submit extends React.Component {

    constructor() {
        super();
        this.state = { disabled : false };
    }

    render() {

        var classes = classnames({
            'form-submit-wrapper': true,
            'disabled': this.state.disabled,
        });

        return (
            <div className={classes}>
                <button {...this.props} className="button button-primary _pull-right" type="button" disabled={this.state.disabled}>{this.props.children}</button>
            </div>
        );
    }

}
module.exports = Submit;
