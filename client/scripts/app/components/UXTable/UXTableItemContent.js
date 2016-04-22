var React = require('react');
var Link = require('react-router').Link;

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
