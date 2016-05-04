import React from 'react';
import { Link } from 'react-router';

class UXTableItemActions extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (
          <div className="uxtable-item-actions">
                {this.props.children}
          </div>
        );
    }

}

module.exports = UXTableItemActions;
