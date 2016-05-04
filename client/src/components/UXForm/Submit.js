import React from 'react';
import classnames from 'classnames';

class Submit extends React.Component {

    // constructor() {
    //     super();
    //     this.state = { disabled : false };
    // }

    render() {

        var classes = classnames('button-submit', {
            'is-disabled': this.props.submitting,
        });

        console.log(this.props);

        return (
            <div className='form-submit-wrapper'>
                <button {...this.props} className={classes} type="submit" disabled={this.props.submitting}>{this.props.children}</button>
            </div>
        );
    }

}

export default Submit
