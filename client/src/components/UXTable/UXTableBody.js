import React from 'react';
import { Link } from 'react-router';

class UXTableBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (
          <div className="uxtable-body">
                {this.props.children}
          </div>
        );
    }

}

module.exports = UXTableBody;
