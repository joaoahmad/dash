import React from 'react';
import { Link } from 'react-router';

class UXTableItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        var count = this._count();
        return (
          <div className="uxtable-item">
            {count}
            {this.props.children}
          </div>
        );
    }

    _count(){
      if(this.props.count){
        return (<span className="uxtable-item--count">{this.props.count}</span>)
      }
    }

}

module.exports = UXTableItem;
