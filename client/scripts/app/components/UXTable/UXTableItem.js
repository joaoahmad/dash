var React = require('react');
var Link = require('react-router').Link;

class UXTableItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        var count = this._count();
        return (
          <div className="uxtable-item" ref={this.props.ref} key={this.props.key}>
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
