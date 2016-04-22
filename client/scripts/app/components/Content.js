import React from 'react';
import Helmet from 'react-helmet';
import classnames from 'classnames';

export default class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = { timestamp: Date.now()};
    }

    render() {
        var classes = classnames({
            'content-inner': true
        });
        var ref = this.state.timestamp;
        console.log(ref);
        return (
            <div id="content" ref="content" key={ref}>
                {this.props.children}
            </div>
        );
    }

}
