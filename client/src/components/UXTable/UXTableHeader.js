import React from 'react';
import { Link } from 'react-router';

class UXTableHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (
          <div className="uxtable-header">
            {this.props.children}
          </div>
        );
    }

}

module.exports = UXTableHeader;
