import React from 'react';
import { Link } from 'react-router';

class UXTableItemContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (
          <div className="uxtable-item-content">
                {this.props.children}
          </div>
        );
    }

}

module.exports = UXTableItemContent;
